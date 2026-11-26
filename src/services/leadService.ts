import type { Locale } from "@/i18n/types";

export interface DemoLeadPayload {
  name: string;
  email: string;
  company: string;
  country: string;
  phone?: string;
  purpose: string;
  sector?: string;
  stage?: string;
  message: string;
  locale: Locale;
  page: string;
}

export interface DataDeletionPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  details: string;
  locale: Locale;
  page: string;
}

export interface LeadSubmissionResult {
  ok: boolean;
  errorMessage?: string;
}

/** Formulários institucionais gravam no banco do app (POST https://app.deepb2b.ai/api/site/contato -> tabela site_contatos).
 * text/plain evita a pré-checagem de CORS; o servidor lê o JSON. Antes iam para chathook_trial_leads (Supabase legado). */
const SITE_CONTATO_URL = "https://app.deepb2b.ai/api/site/contato";

async function postToApp(body: Record<string, unknown>): Promise<LeadSubmissionResult> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);
  try {
    const r = await fetch(SITE_CONTATO_URL, {
      method: "POST",
      signal: controller.signal,
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(body),
    });
    return r.ok ? { ok: true } : { ok: false, errorMessage: `Request failed with status ${r.status}` };
  } catch (error) {
    return { ok: false, errorMessage: error instanceof Error ? error.message : "Network error" };
  } finally {
    clearTimeout(timeout);
  }
}

export async function submitDemoRequest(payload: DemoLeadPayload): Promise<LeadSubmissionResult> {
  return postToApp({
    kind: "demo",
    locale: payload.locale,
    page: payload.page,
    name: payload.name.trim(),
    email: payload.email.trim(),
    company: payload.company.trim(),
    country: payload.country.trim(),
    phone: payload.phone?.trim() ?? "",
    purpose: payload.purpose,
    sector: payload.sector?.trim() ?? "",
    stage: payload.stage?.trim() ?? "",
    message: payload.message.trim(),
  });
}

export async function submitDataDeletionRequest(payload: DataDeletionPayload): Promise<LeadSubmissionResult> {
  return postToApp({
    kind: "deletion",
    locale: payload.locale,
    page: payload.page,
    name: payload.name.trim(),
    email: payload.email.trim(),
    company: payload.company?.trim() ?? "",
    phone: payload.phone?.trim() ?? "",
    message: payload.details.trim(),
  });
}
