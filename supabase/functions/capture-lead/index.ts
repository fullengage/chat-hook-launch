import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json(405, { error: "Method not allowed" });

  let body: {
    name: string;
    email: string;
    whatsapp: string;
    companySize: string;
    source?: string;
    page?: string;
    userAgent?: string;
  };
  try {
    body = await req.json();
  } catch {
    return json(400, { error: "Invalid JSON body" });
  }

  const { name, email, whatsapp, companySize, source, page, userAgent } = body;
  if (!name || !email || !whatsapp) return json(400, { error: "Missing required fields: name, email, whatsapp" });

  const supabaseAdmin = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
  );

  // ponytail: a tabela mantém o nome antigo (chathook_trial_leads); renomear exige migração
  const { error: dbError } = await supabaseAdmin.from("chathook_trial_leads").insert({
    name,
    email,
    whatsapp,
    company_size: companySize,
    source: source ?? "free_trial_landing_page",
    page: page ?? "",
    user_agent: userAgent ?? "",
    webhook_status: 0,
  });

  if (dbError) {
    console.error("DB insert error:", dbError);
    return json(500, { error: "Lead not saved" });
  }
  return json(200, { success: true, message: "Lead captured successfully" });
});
