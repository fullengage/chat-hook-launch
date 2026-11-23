import type { Locale } from "@/i18n/types";

const GTM_ID = "GTM-TC3F89B4";
const META_PIXEL_ID = "847581497869589";
const CONSENT_STORAGE_KEY = "deepb2b_cookie_consent";
const LEGACY_CONSENT_STORAGE_KEY = "chathook-cookie-consent";

export type ConsentStatus = "accepted" | "declined" | "unset";

interface AnalyticsWindow extends Window {
  dataLayer?: Record<string, unknown>[];
  fbq?: ((...args: unknown[]) => void) & {
    queue?: unknown[];
    loaded?: boolean;
    version?: string;
    push?: (...args: unknown[]) => void;
    callMethod?: (...args: unknown[]) => void;
  };
  _fbq?: unknown;
  gtag?: (...args: unknown[]) => void;
  __deepb2bTrackingLoaded?: boolean;
}

function getAnalyticsWindow(): AnalyticsWindow | null {
  if (typeof window === "undefined") return null;
  return window as AnalyticsWindow;
}

export function getConsentStatus(): ConsentStatus {
  const win = getAnalyticsWindow();
  if (!win) return "unset";

  try {
    const primary = win.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (primary === "accepted" || primary === "declined") return primary;
    const legacy = win.localStorage.getItem(LEGACY_CONSENT_STORAGE_KEY);
    if (legacy === "accepted" || legacy === "declined") return legacy;
  } catch {
    return "unset";
  }
  return "unset";
}

export function setAnalyticsConsent(decision: "accepted" | "declined"): void {
  const win = getAnalyticsWindow();
  if (!win) return;

  try {
    win.localStorage.setItem(CONSENT_STORAGE_KEY, decision);
    win.localStorage.setItem(LEGACY_CONSENT_STORAGE_KEY, decision);
  } catch {
    // Storage unavailable in restricted browser contexts
  }

  if (decision === "accepted") {
    loadConsentedTrackingScripts();
  }
}

export function loadConsentedTrackingScripts(): void {
  const win = getAnalyticsWindow();
  if (!win || typeof document === "undefined") return;
  if (getConsentStatus() !== "accepted") return;
  if (win.__deepb2bTrackingLoaded) return;

  win.__deepb2bTrackingLoaded = true;
  win.dataLayer = win.dataLayer || [];
  win.dataLayer.push({
    "gtm.start": Date.now(),
    event: "gtm.js",
  });

  const gtmScript = document.createElement("script");
  gtmScript.async = true;
  gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(gtmScript);

  if (!win.fbq) {
    const fbqFn = function (...args: unknown[]) {
      if (fbqFn.callMethod) {
        fbqFn.callMethod(...args);
      } else {
        fbqFn.queue?.push(args);
      }
    } as NonNullable<AnalyticsWindow["fbq"]>;
    fbqFn.queue = [];
    fbqFn.loaded = true;
    fbqFn.version = "2.0";
    fbqFn.push = (...args: unknown[]) => fbqFn(...args);
    win.fbq = fbqFn;
    win._fbq = fbqFn;

    const pixelScript = document.createElement("script");
    pixelScript.async = true;
    pixelScript.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(pixelScript);
  }

  win.fbq("init", META_PIXEL_ID);
  win.fbq("track", "PageView");
}

function emitEvent(eventName: string, params: Record<string, unknown>): void {
  const win = getAnalyticsWindow();
  if (!win) return;
  if (getConsentStatus() !== "accepted") return;

  win.dataLayer = win.dataLayer || [];
  win.dataLayer.push({
    event: eventName,
    ...params,
  });

  if (typeof win.gtag === "function") {
    win.gtag("event", eventName, params);
  }
}

export function trackPageView(path: string, locale: Locale, title: string): void {
  emitEvent("deepb2b_page_view", {
    page_path: path,
    page_locale: locale,
    page_title: title,
  });
}

export function trackCtaClick(ctaId: string, locale: Locale, destination: string): void {
  emitEvent("deepb2b_cta_click", {
    cta_id: ctaId,
    locale,
    destination,
  });
}

export function trackFormStart(formName: string, locale: Locale): void {
  emitEvent("deepb2b_form_start", {
    form_name: formName,
    locale,
  });
}

export function trackDemoRequest(locale: Locale, country: string, purpose: string): void {
  emitEvent("deepb2b_demo_request", {
    locale,
    country,
    purpose,
  });

  const win = getAnalyticsWindow();
  if (win && getConsentStatus() === "accepted" && typeof win.fbq === "function") {
    win.fbq("track", "Lead", { content_name: purpose, country, locale });
  }
}

export function trackCompanySearch(query: string, locale: Locale, cnaeScope: string): void {
  emitEvent("deepb2b_company_search_preview", {
    locale,
    query_length: query.length,
    cnae_scope: cnaeScope,
  });
}

export function trackLanguageSwitch(fromLocale: Locale, toLocale: Locale, path: string): void {
  emitEvent("deepb2b_language_switch", {
    from_locale: fromLocale,
    to_locale: toLocale,
    path,
  });
}
