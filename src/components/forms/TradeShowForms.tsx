import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLocale } from "@/i18n/LocaleContext";
import type { Locale } from "@/i18n/types";
import { isCorporateEmail, isValidCnpj } from "@/lib/cnpj";

/** Envia para o app (POST https://app.deepb2b.ai/api/feiras/pedido -> tabela feira_pedidos).
 * text/plain evita a pré-checagem de CORS; o servidor lê o JSON do corpo (mesmo padrão do antigo teste grátis). */
const PEDIDO_URL = "https://app.deepb2b.ai/api/feiras/pedido";
async function sendRequest(body: Record<string, unknown>): Promise<boolean> {
  try {
    const r = await fetch(PEDIDO_URL, { method: "POST", headers: { "Content-Type": "text/plain" }, body: JSON.stringify(body) });
    return r.ok;
  } catch {
    return false;
  }
}

const T: Record<Locale, {
  buyerTitle: string; buyerText: string; cnpj: string; company: string; email: string; lookingFor: string; lookingForPh: string;
  volume: string; volumeNone: string; volumes: string[]; consentA: string; consentLink: string; send: string; sending: string;
  ok: string; fail: string; errCnpj: string; errEmail: string; errRequired: string; errConsent: string;
  orgLink: string; orgText: string; name: string; orgCompany: string; message: string; close: string;
}> = {
  "pt-br": {
    buyerTitle: "Vai visitar a {name}? Diga o que procura.",
    buyerText: "Conte o que sua empresa quer comprar e receba, antes da feira, os expositores que vendem isso.",
    cnpj: "CNPJ", company: "Nome da empresa", email: "E-mail corporativo", lookingFor: "O que sua empresa procura",
    lookingForPh: "Ex.: fornecedores de embalagens flexíveis para alimentos",
    volume: "Volume de compra anual (opcional)", volumeNone: "Prefiro não informar",
    volumes: ["Até R$ 100 mil", "R$ 100 mil a R$ 1 milhão", "R$ 1 milhão a R$ 10 milhões", "Acima de R$ 10 milhões"],
    consentA: "Autorizo o uso destes dados para receber informações sobre esta feira, conforme a", consentLink: "Política de Privacidade",
    send: "Enviar", sending: "Enviando…", ok: "Recebemos. Vamos cruzar o que você procura com os expositores da feira.",
    fail: "Não conseguimos enviar agora. Tente de novo ou escreva para contato@deepb2b.ai.",
    errCnpj: "CNPJ inválido.", errEmail: "Use um e-mail corporativo (não aceitamos Gmail, Hotmail, Outlook, Yahoo).",
    errRequired: "Preencha os campos obrigatórios.", errConsent: "É preciso aceitar a Política de Privacidade.",
    orgLink: "Sou o organizador desta feira",
    orgText: "Organiza esta feira? Fale com a gente para atualizar os dados ou conhecer o programa de compradores qualificados.",
    name: "Seu nome", orgCompany: "Empresa organizadora", message: "Mensagem", close: "Fechar",
  },
  en: {
    buyerTitle: "Visiting {name}? Tell us what you're looking for.",
    buyerText: "Tell us what your company wants to buy and get the exhibitors who sell it before the show.",
    cnpj: "CNPJ (Brazilian company ID)", company: "Company name", email: "Work email", lookingFor: "What your company is looking for",
    lookingForPh: "e.g. suppliers of flexible packaging for food",
    volume: "Annual purchase volume (optional)", volumeNone: "Prefer not to say",
    volumes: ["Up to BRL 100k", "BRL 100k – 1M", "BRL 1M – 10M", "Over BRL 10M"],
    consentA: "I agree that this data may be used to send me information about this show, under the", consentLink: "Privacy Policy",
    send: "Send", sending: "Sending…", ok: "Received. We'll match what you're looking for with the show's exhibitors.",
    fail: "We couldn't send it right now. Please try again or email contato@deepb2b.ai.",
    errCnpj: "Invalid CNPJ.", errEmail: "Please use a work email (Gmail, Hotmail, Outlook and Yahoo are not accepted).",
    errRequired: "Please fill in the required fields.", errConsent: "You must accept the Privacy Policy.",
    orgLink: "I organize this show",
    orgText: "Do you organize this show? Get in touch to update the data or learn about our qualified-buyer program.",
    name: "Your name", orgCompany: "Organizing company", message: "Message", close: "Close",
  },
  es: {
    buyerTitle: "¿Va a visitar {name}? Cuéntenos qué busca.",
    buyerText: "Cuéntenos qué quiere comprar su empresa y reciba, antes de la feria, los expositores que lo venden.",
    cnpj: "CNPJ (registro de empresa en Brasil)", company: "Nombre de la empresa", email: "E-mail corporativo", lookingFor: "Qué busca su empresa",
    lookingForPh: "Ej.: proveedores de envases flexibles para alimentos",
    volume: "Volumen anual de compras (opcional)", volumeNone: "Prefiero no informar",
    volumes: ["Hasta R$ 100 mil", "R$ 100 mil a R$ 1 millón", "R$ 1 a R$ 10 millones", "Más de R$ 10 millones"],
    consentA: "Autorizo el uso de estos datos para recibir información sobre esta feria, según la", consentLink: "Política de Privacidad",
    send: "Enviar", sending: "Enviando…", ok: "Recibido. Vamos a cruzar lo que busca con los expositores de la feria.",
    fail: "No pudimos enviarlo ahora. Intente de nuevo o escriba a contato@deepb2b.ai.",
    errCnpj: "CNPJ inválido.", errEmail: "Use un e-mail corporativo (no aceptamos Gmail, Hotmail, Outlook ni Yahoo).",
    errRequired: "Complete los campos obligatorios.", errConsent: "Debe aceptar la Política de Privacidad.",
    orgLink: "Soy el organizador de esta feria",
    orgText: "¿Organiza esta feria? Hable con nosotros para actualizar los datos o conocer el programa de compradores calificados.",
    name: "Su nombre", orgCompany: "Empresa organizadora", message: "Mensaje", close: "Cerrar",
  },
  "zh-cn": {
    buyerTitle: "将参观 {name}？告诉我们您在寻找什么。",
    buyerText: "告诉我们贵公司想采购什么，在展会开始前收到销售这些产品的参展商名单。",
    cnpj: "CNPJ（巴西企业登记号）", company: "公司名称", email: "企业邮箱", lookingFor: "贵公司在寻找什么",
    lookingForPh: "例如：食品软包装供应商",
    volume: "年采购额（可选）", volumeNone: "不愿透露",
    volumes: ["10 万雷亚尔以下", "10 万–100 万雷亚尔", "100 万–1000 万雷亚尔", "1000 万雷亚尔以上"],
    consentA: "我同意按照以下政策使用上述数据接收本展会信息：", consentLink: "隐私政策",
    send: "提交", sending: "正在提交…", ok: "已收到。我们将把您的需求与展会参展商进行匹配。",
    fail: "暂时无法提交，请重试或发送邮件至 contato@deepb2b.ai。",
    errCnpj: "CNPJ 无效。", errEmail: "请使用企业邮箱（不接受 Gmail、Hotmail、Outlook、Yahoo）。",
    errRequired: "请填写必填项。", errConsent: "必须接受隐私政策。",
    orgLink: "我是本展会的主办方",
    orgText: "您是本展会的主办方？联系我们更新数据，或了解我们的合格买家计划。",
    name: "您的姓名", orgCompany: "主办公司", message: "留言", close: "关闭",
  },
};

const input = "w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-[#0f172a] focus:border-[#ff6b00] focus:outline-none focus:ring-2 focus:ring-[#ff6b00]/20";
const label = "block text-xs font-bold text-slate-700 mb-1";

function Consent({ checked, onChange, t, privacyTo }: { checked: boolean; onChange: (v: boolean) => void; t: (typeof T)[Locale]; privacyTo: string }) {
  return (
    <label className="flex items-start gap-2 text-xs text-slate-600">
      <input type="checkbox" required checked={checked} onChange={(e) => onChange(e.target.checked)} className="mt-0.5 h-4 w-4 accent-[#ff6b00]" />
      <span>
        {t.consentA}{" "}
        <Link to={privacyTo} target="_blank" className="font-bold text-[#ff6b00] underline">{t.consentLink}</Link>.
      </span>
    </label>
  );
}

export const BuyerDemandForm: React.FC<{ showSlug: string; showName: string }> = ({ showSlug, showName }) => {
  const { locale, routeTo } = useLocale();
  const { pathname } = useLocation();
  const t = T[locale];
  const [f, setF] = useState({ cnpj: "", company: "", email: "", lookingFor: "", purchaseVolume: "", consent: false });
  const [state, setState] = useState<"idle" | "sending" | "ok" | "fail">("idle");
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!f.company.trim() || !f.lookingFor.trim()) return setError(t.errRequired);
    if (!isValidCnpj(f.cnpj)) return setError(t.errCnpj);
    if (!isCorporateEmail(f.email)) return setError(t.errEmail);
    if (!f.consent) return setError(t.errConsent);
    setError("");
    setState("sending");
    const ok = await sendRequest({ kind: "buyer", tradeShow: showSlug, locale, page: pathname, ...f });
    setState(ok ? "ok" : "fail");
  };

  if (state === "ok") return <p role="status" className="rounded-xl bg-emerald-50 p-5 text-sm font-semibold text-emerald-800">{t.ok}</p>;

  return (
    <form onSubmit={submit} noValidate className="space-y-3 text-left">
      <h3 className="text-xl font-extrabold text-[#0f172a]">{t.buyerTitle.replace("{name}", showName)}</h3>
      <p className="text-sm text-slate-600">{t.buyerText}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className={label} htmlFor="b-cnpj">{t.cnpj} *</label>
          <input id="b-cnpj" inputMode="numeric" autoComplete="off" className={input} value={f.cnpj} onChange={(e) => setF({ ...f, cnpj: e.target.value })} placeholder="00.000.000/0001-00" />
        </div>
        <div>
          <label className={label} htmlFor="b-company">{t.company} *</label>
          <input id="b-company" autoComplete="organization" className={input} value={f.company} onChange={(e) => setF({ ...f, company: e.target.value })} />
        </div>
      </div>
      <div>
        <label className={label} htmlFor="b-email">{t.email} *</label>
        <input id="b-email" type="email" autoComplete="email" className={input} value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} />
      </div>
      <div>
        <label className={label} htmlFor="b-look">{t.lookingFor} *</label>
        <textarea id="b-look" rows={3} className={input} placeholder={t.lookingForPh} value={f.lookingFor} onChange={(e) => setF({ ...f, lookingFor: e.target.value })} />
      </div>
      <div>
        <label className={label} htmlFor="b-vol">{t.volume}</label>
        <select id="b-vol" className={input} value={f.purchaseVolume} onChange={(e) => setF({ ...f, purchaseVolume: e.target.value })}>
          <option value="">{t.volumeNone}</option>
          {t.volumes.map((v) => <option key={v} value={v}>{v}</option>)}
        </select>
      </div>
      <Consent checked={f.consent} onChange={(v) => setF({ ...f, consent: v })} t={t} privacyTo={routeTo("privacy")} />
      {error && <p role="alert" className="text-sm font-semibold text-red-600">{error}</p>}
      {state === "fail" && <p role="alert" className="text-sm font-semibold text-red-600">{t.fail}</p>}
      <button type="submit" disabled={state === "sending"} className="w-full rounded-full bg-[#040f21] px-6 py-3 text-sm font-bold text-white hover:bg-[#07152e] disabled:opacity-60">
        {state === "sending" ? t.sending : t.send}
      </button>
    </form>
  );
};

export const OrganizerContact: React.FC<{ showSlug: string }> = ({ showSlug }) => {
  const { locale, routeTo } = useLocale();
  const { pathname } = useLocation();
  const t = T[locale];
  const [open, setOpen] = useState(false);
  const [f, setF] = useState({ name: "", email: "", company: "", message: "", consent: false });
  const [state, setState] = useState<"idle" | "sending" | "ok" | "fail">("idle");
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!f.name.trim() || !f.company.trim()) return setError(t.errRequired);
    if (!isCorporateEmail(f.email)) return setError(t.errEmail);
    if (!f.consent) return setError(t.errConsent);
    setError("");
    setState("sending");
    const ok = await sendRequest({ kind: "organizer", tradeShow: showSlug, locale, page: pathname, ...f });
    setState(ok ? "ok" : "fail");
  };

  if (!open) {
    return (
      <button type="button" onClick={() => setOpen(true)} className="text-xs font-semibold text-slate-500 underline hover:text-[#ff6b00]">
        {t.orgLink}
      </button>
    );
  }

  return (
    <div className="w-full rounded-2xl border border-slate-200 bg-white p-6 text-left">
      <p className="text-sm text-slate-700">{t.orgText}</p>
      {state === "ok" ? (
        <p role="status" className="mt-4 rounded-xl bg-emerald-50 p-4 text-sm font-semibold text-emerald-800">{t.ok.split(".")[0]}.</p>
      ) : (
        <form onSubmit={submit} noValidate className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className={label} htmlFor="o-name">{t.name} *</label>
            <input id="o-name" autoComplete="name" className={input} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
          </div>
          <div>
            <label className={label} htmlFor="o-email">{t.email} *</label>
            <input id="o-email" type="email" autoComplete="email" className={input} value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} />
          </div>
          <div className="sm:col-span-2">
            <label className={label} htmlFor="o-company">{t.orgCompany} *</label>
            <input id="o-company" autoComplete="organization" className={input} value={f.company} onChange={(e) => setF({ ...f, company: e.target.value })} />
          </div>
          <div className="sm:col-span-2">
            <label className={label} htmlFor="o-msg">{t.message}</label>
            <textarea id="o-msg" rows={3} className={input} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} />
          </div>
          <div className="sm:col-span-2">
            <Consent checked={f.consent} onChange={(v) => setF({ ...f, consent: v })} t={t} privacyTo={routeTo("privacy")} />
          </div>
          {(error || state === "fail") && <p role="alert" className="sm:col-span-2 text-sm font-semibold text-red-600">{error || t.fail}</p>}
          <div className="sm:col-span-2 flex gap-3">
            <button type="submit" disabled={state === "sending"} className="rounded-full bg-[#040f21] px-6 py-2.5 text-sm font-bold text-white hover:bg-[#07152e] disabled:opacity-60">
              {state === "sending" ? t.sending : t.send}
            </button>
            <button type="button" onClick={() => setOpen(false)} className="text-sm font-semibold text-slate-500 hover:text-[#0f172a]">{t.close}</button>
          </div>
        </form>
      )}
    </div>
  );
};
