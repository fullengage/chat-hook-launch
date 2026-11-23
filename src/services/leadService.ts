import type { Locale } from "@/i18n/types";

export interface DemoLeadPayload {
  name: string;
  email: string;
  company: string;
  country: string;
  phone?: string;
  purpose: string;
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

function getEdgeFunctionEndpoint(): string | null {
  const baseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
  const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;
  if (!baseUrl || !anonKey) return null;
  return `${baseUrl}/functions/v1/capture-lead`;
}

async function postToCaptureLead(body: {
  name: string;
  email: string;
  whatsapp: string;
  companySize: string;
  source: string;
  page: string;
  userAgent: string;
}): Promise<LeadSubmissionResult> {
  const endpoint = getEdgeFunctionEndpoint();
  const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

  if (!endpoint || !anonKey) {
    return {
      ok: false,
      errorMessage: "Lead service configuration is unavailable in this environment.",
    };
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${anonKey}`,
        apikey: anonKey,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return {
        ok: false,
        errorMessage: `Request failed with status ${response.status}`,
      };
    }

    return { ok: true };
  } catch (err) {
    return {
      ok: false,
      errorMessage: err instanceof Error ? err.message : "Network error",
    };
  } finally {
    clearTimeout(timeout);
  }
}

export async function submitDemoRequest(payload: DemoLeadPayload): Promise<LeadSubmissionResult> {
  const normalizedPhone = payload.phone?.trim() || "international-no-whatsapp";
  const structuredContext = [
    `Company: ${payload.company.trim()}`,
    `Country: ${payload.country.trim()}`,
    `Locale: ${payload.locale}`,
    `Purpose: ${payload.purpose}`,
    `Need: ${payload.message.trim()}`,
  ].join(" | ");

  return postToCaptureLead({
    name: payload.name.trim(),
    email: payload.email.trim(),
    whatsapp: normalizedPhone,
    companySize: structuredContext,
    source: `deepb2b_demo_request_${payload.locale}`,
    page: payload.page,
    userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "ssr",
  });
}

export async function submitDataDeletionRequest(
  payload: DataDeletionPayload,
): Promise<LeadSubmissionResult> {
  const normalizedPhone = payload.phone?.trim() || "privacy-optout-no-phone";
  const structuredContext = [
    `LGPD/Privacy Request`,
    `Locale: ${payload.locale}`,
    payload.company ? `Company: ${payload.company.trim()}` : "Company: N/A",
    `Details: ${payload.details.trim()}`,
  ].join(" | ");

  return postToCaptureLead({
    name: payload.name.trim(),
    email: payload.email.trim(),
    whatsapp: normalizedPhone,
    companySize: structuredContext,
    source: `deepb2b_lgpd_deletion_${payload.locale}`,
    page: payload.page,
    userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "ssr",
  });
}
