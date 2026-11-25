// Edge Function: recebe os formulários das fichas de feiras (comprador e organizador) e grava em deepb2b_trade_show_requests.
// Repete as validações do site (CNPJ com dígito verificador, e-mail corporativo, consentimento LGPD).
// ponytail: aviso ao time por webhook opcional (NOTIFY_WEBHOOK_URL, ex.: n8n); e-mail para contato@deepb2b.ai entra quando houver serviço de envio.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const FREE = new Set(["gmail.com", "googlemail.com", "hotmail.com", "hotmail.com.br", "outlook.com", "outlook.com.br", "live.com", "msn.com", "yahoo.com", "yahoo.com.br", "icloud.com", "bol.com.br", "uol.com.br", "terra.com.br", "ig.com.br"]);
const digits = (s: string) => (s ?? "").replace(/\D/g, "");

function validCnpj(input: string): boolean {
  const d = digits(input);
  if (d.length !== 14 || /^(\d)\1{13}$/.test(d)) return false;
  const dv = (base: string) => {
    let w = base.length - 7, sum = 0;
    for (const ch of base) { sum += Number(ch) * w--; if (w < 2) w = 9; }
    const r = sum % 11;
    return r < 2 ? 0 : 11 - r;
  };
  return dv(d.slice(0, 12)) === Number(d[12]) && dv(d.slice(0, 13)) === Number(d[13]);
}

function corporateEmail(input: string): boolean {
  const e = (input ?? "").trim().toLowerCase();
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e) && !FREE.has(e.split("@")[1]);
}

const clip = (s: unknown, n: number) => (typeof s === "string" ? s.trim().slice(0, n) : "");
const json = (status: number, body: unknown) => new Response(JSON.stringify(body), { status, headers: { ...CORS, "Content-Type": "application/json" } });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json(405, { error: "method" });

  let b: Record<string, unknown>;
  try { b = await req.json(); } catch { return json(400, { error: "json" }); }

  const kind = b.kind === "organizer" ? "organizer" : b.kind === "buyer" ? "buyer" : null;
  const tradeShow = clip(b.tradeShow, 80);
  const email = clip(b.email, 160).toLowerCase();
  const company = clip(b.company, 160);
  if (!kind || !/^[a-z0-9-]+$/.test(tradeShow) || !company) return json(400, { error: "fields" });
  if (!corporateEmail(email)) return json(400, { error: "email" });
  if (b.consent !== true) return json(400, { error: "consent" });

  const row: Record<string, unknown> = {
    kind,
    trade_show: tradeShow,
    locale: clip(b.locale, 10) || "pt-br",
    page: clip(b.page, 300),
    company,
    email,
    consent_lgpd: true,
    user_agent: clip(req.headers.get("user-agent"), 300),
  };
  if (kind === "buyer") {
    if (!validCnpj(String(b.cnpj ?? ""))) return json(400, { error: "cnpj" });
    const lookingFor = clip(b.lookingFor, 2000);
    if (!lookingFor) return json(400, { error: "lookingFor" });
    Object.assign(row, { cnpj: digits(String(b.cnpj)), looking_for: lookingFor, purchase_volume: clip(b.purchaseVolume, 60) || null });
  } else {
    const name = clip(b.name, 120);
    if (!name) return json(400, { error: "name" });
    Object.assign(row, { contact_name: name, message: clip(b.message, 2000) || null });
  }

  const db = createClient(Deno.env.get("SUPABASE_URL") ?? "", Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "");
  const { error } = await db.from("deepb2b_trade_show_requests").insert(row);
  if (error) {
    console.error("insert", error);
    return json(500, { error: "db" });
  }

  const hook = Deno.env.get("NOTIFY_WEBHOOK_URL");
  if (hook) await fetch(hook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...row, notify_to: "contato@deepb2b.ai" }) }).catch(() => undefined);

  return json(200, { ok: true });
});
