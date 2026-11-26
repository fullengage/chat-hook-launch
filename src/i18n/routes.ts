import type { Locale, RouteKey } from "./types";
import { TRADE_SHOWS } from "@/data/tradeShows";

export const SITE_ORIGIN = "https://deepb2b.ai";

export const SUPPORTED_LOCALES: readonly Locale[] = ["en", "pt-br", "es", "zh-cn"] as const;

export const DEFAULT_LOCALE: Locale = "en";

export const ROUTES_BY_LOCALE: Record<Locale, Record<RouteKey, string>> = {
  en: {
    home: "/en",
    businessData: "/en/business-data",
    marketIntelligence: "/en/market-intelligence",
    leadGeneration: "/en/lead-generation",
    industryMapping: "/en/industry-mapping",
    brazilMarketEntry: "/en/brazil-market-entry",
    solutions: "/en/solutions",
    resources: "/en/resources",
    about: "/en/about",
    contact: "/en/contact",
    login: "/en/login",
    privacy: "/en/privacy",
    terms: "/en/terms",
    lgpd: "/en/lgpd",
    dataDeletion: "/en/data-deletion",
    events: "/en/trade-shows",
    calendar: "/en/trade-show-calendar",
    ecosystem: "/en/ecosystem",
    deepclub: "/en/deepclub",
    projects: "/en/business-projects",
    partners: "/en/partners",
  },
  "pt-br": {
    home: "/pt-br",
    businessData: "/pt-br/dados-empresariais",
    marketIntelligence: "/pt-br/inteligencia-de-mercado",
    leadGeneration: "/pt-br/prospeccao-b2b",
    industryMapping: "/pt-br/mapeamento-setorial",
    brazilMarketEntry: "/pt-br/entrada-no-mercado-brasileiro",
    solutions: "/pt-br/solucoes",
    resources: "/pt-br/conteudos",
    about: "/pt-br/sobre",
    contact: "/pt-br/contato",
    login: "/pt-br/acesso",
    privacy: "/pt-br/privacidade",
    terms: "/pt-br/termos-de-uso",
    lgpd: "/pt-br/lgpd",
    dataDeletion: "/pt-br/exclusao-de-dados",
    events: "/pt-br/feiras-e-eventos",
    calendar: "/pt-br/feiras",
    ecosystem: "/pt-br/ecossistema",
    deepclub: "/pt-br/deepclub",
    projects: "/pt-br/projetos-empresariais",
    partners: "/pt-br/parceiros",
  },
  es: {
    home: "/es",
    businessData: "/es/datos-empresariales",
    marketIntelligence: "/es/inteligencia-de-mercado",
    leadGeneration: "/es/generacion-de-leads",
    industryMapping: "/es/mapeo-sectorial",
    brazilMarketEntry: "/es/entrada-al-mercado-brasileno",
    solutions: "/es/soluciones",
    resources: "/es/recursos",
    about: "/es/nosotros",
    contact: "/es/contacto",
    login: "/es/acceso",
    privacy: "/es/privacidad",
    terms: "/es/terminos-de-uso",
    lgpd: "/es/lgpd",
    dataDeletion: "/es/eliminacion-de-datos",
    events: "/es/ferias-y-eventos",
    calendar: "/es/ferias",
    ecosystem: "/es/ecosistema",
    deepclub: "/es/deepclub",
    projects: "/es/proyectos-empresariales",
    partners: "/es/socios",
  },
  "zh-cn": {
    home: "/zh-cn",
    businessData: "/zh-cn/business-data",
    marketIntelligence: "/zh-cn/market-intelligence",
    leadGeneration: "/zh-cn/lead-generation",
    industryMapping: "/zh-cn/industry-mapping",
    brazilMarketEntry: "/zh-cn/brazil-market-entry",
    solutions: "/zh-cn/solutions",
    resources: "/zh-cn/resources",
    about: "/zh-cn/about",
    contact: "/zh-cn/contact",
    login: "/zh-cn/login",
    privacy: "/zh-cn/privacy",
    terms: "/zh-cn/terms",
    lgpd: "/zh-cn/lgpd",
    dataDeletion: "/zh-cn/data-deletion",
    events: "/zh-cn/trade-shows",
    calendar: "/zh-cn/trade-show-calendar",
    ecosystem: "/zh-cn/ecosystem",
    deepclub: "/zh-cn/deepclub",
    projects: "/zh-cn/business-projects",
    partners: "/zh-cn/partners",
  },
};

export const HREFLANG_BY_LOCALE: Record<Locale, "en" | "pt-BR" | "es" | "zh-CN"> = {
  en: "en",
  "pt-br": "pt-BR",
  es: "es",
  "zh-cn": "zh-CN",
};

export const ARTICLE_SLUGS = [
  "sao-paulo-business-trade-shows-2027",
  "beauty-fair-2027-cosmetics-buyers",
  "brazil-industrial-machinery-distribution-report-2026",
  "how-to-find-distributors-in-brazil",
  "understanding-brazilian-cnpj-data",
  "brazilian-business-sectors-explained",
  "how-foreign-companies-research-brazil-market",
  "brazil-company-data-sources-and-limitations",
] as const;

export type ArticleSlug = (typeof ARTICLE_SLUGS)[number];

/** Artigos publicados só em alguns idiomas. Os demais existem nos 4. */
const PARTIAL_ARTICLE_LOCALES: Partial<Record<string, readonly Locale[]>> = {
  "sao-paulo-business-trade-shows-2027": ["pt-br", "en"],
  "beauty-fair-2027-cosmetics-buyers": ["pt-br", "en"],
};

export function articleAvailableIn(slug: string, locale: Locale): boolean {
  const only = PARTIAL_ARTICLE_LOCALES[slug];
  return !only || only.includes(locale);
}

export function normalizePathname(pathname: string): string {
  if (!pathname || pathname === "/") return "/";
  return pathname.endsWith("/") && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
}

export function detectLocaleFromPath(pathname: string): Locale {
  const norm = normalizePathname(pathname).toLowerCase();
  if (norm === "/pt-br" || norm.startsWith("/pt-br/")) return "pt-br";
  if (norm === "/es" || norm.startsWith("/es/")) return "es";
  if (norm === "/zh-cn" || norm.startsWith("/zh-cn/")) return "zh-cn";
  if (
    norm === "/obrigado" ||
    norm === "/contato" ||
    norm === "/privacidade" ||
    norm === "/termos-de-uso" ||
    norm === "/lgpd" ||
    norm === "/exclusao-de-dados"
  ) {
    return "pt-br";
  }
  return "en";
}

export function getRoutePath(locale: Locale, key: RouteKey): string {
  return ROUTES_BY_LOCALE[locale][key];
}

export function getArticlePath(locale: Locale, slug: string): string {
  return `${ROUTES_BY_LOCALE[locale].resources}/${slug}`;
}

export function findRouteKeyFromPath(pathname: string): RouteKey | null {
  const norm = normalizePathname(pathname);
  if (norm === "/") return "home";

  for (const locale of SUPPORTED_LOCALES) {
    const map = ROUTES_BY_LOCALE[locale];
    for (const key of Object.keys(map) as RouteKey[]) {
      if (map[key] === norm) return key;
    }
  }
  return null;
}

export function extractArticleSlugFromPath(pathname: string): string | null {
  const norm = normalizePathname(pathname);
  for (const locale of SUPPORTED_LOCALES) {
    const prefix = `${ROUTES_BY_LOCALE[locale].resources}/`;
    if (norm.startsWith(prefix)) {
      return norm.slice(prefix.length);
    }
  }
  return null;
}

export function getTradeShowPath(locale: Locale, slug: string): string {
  return `${ROUTES_BY_LOCALE[locale].calendar}/${slug}`;
}

export function extractTradeShowSlugFromPath(pathname: string): string | null {
  const norm = normalizePathname(pathname);
  for (const locale of SUPPORTED_LOCALES) {
    const prefix = `${ROUTES_BY_LOCALE[locale].calendar}/`;
    if (norm.startsWith(prefix)) return norm.slice(prefix.length);
  }
  return null;
}

export function resolveAlternatePath(currentPathname: string, targetLocale: Locale): string {
  const articleSlug = extractArticleSlugFromPath(currentPathname);
  if (articleSlug) {
    return articleAvailableIn(articleSlug, targetLocale)
      ? getArticlePath(targetLocale, articleSlug)
      : getRoutePath(targetLocale, "resources");
  }
  const showSlug = extractTradeShowSlugFromPath(currentPathname);
  if (showSlug) {
    return getTradeShowPath(targetLocale, showSlug);
  }
  const routeKey = findRouteKeyFromPath(currentPathname);
  if (routeKey) {
    return getRoutePath(targetLocale, routeKey);
  }
  return getRoutePath(targetLocale, "home");
}

export function getAlternateLinks(
  currentPathname: string,
): { hreflang: "en" | "pt-BR" | "es" | "zh-CN" | "x-default"; href: string }[] {
  const articleSlug = extractArticleSlugFromPath(currentPathname);
  const locales = articleSlug ? SUPPORTED_LOCALES.filter((l) => articleAvailableIn(articleSlug, l)) : SUPPORTED_LOCALES;
  const links: { hreflang: "en" | "pt-BR" | "es" | "zh-CN" | "x-default"; href: string }[] =
    locales.map((loc) => ({
      hreflang: HREFLANG_BY_LOCALE[loc],
      href: `${SITE_ORIGIN}${resolveAlternatePath(currentPathname, loc)}`,
    }));

  links.push({
    hreflang: "x-default",
    href: `${SITE_ORIGIN}${resolveAlternatePath(currentPathname, "en")}`,
  });

  return links;
}

export function getCanonicalUrl(currentPathname: string, currentLocale: Locale): string {
  const norm = normalizePathname(currentPathname);
  if (norm === "/") {
    return `${SITE_ORIGIN}${getRoutePath("en", "home")}`;
  }
  const articleSlug = extractArticleSlugFromPath(norm);
  if (articleSlug) {
    return `${SITE_ORIGIN}${getArticlePath(currentLocale, articleSlug)}`;
  }
  const showSlug = extractTradeShowSlugFromPath(norm);
  if (showSlug) {
    return `${SITE_ORIGIN}${getTradeShowPath(currentLocale, showSlug)}`;
  }
  const routeKey = findRouteKeyFromPath(norm);
  if (routeKey) {
    return `${SITE_ORIGIN}${getRoutePath(currentLocale, routeKey)}`;
  }
  return `${SITE_ORIGIN}${norm}`;
}

export function getAllIndexableRoutes(): {
  path: string;
  locale: Locale;
  routeKey: RouteKey | "article" | "tradeShow";
  articleSlug?: ArticleSlug;
}[] {
  const entries: {
    path: string;
    locale: Locale;
    routeKey: RouteKey | "article" | "tradeShow";
    articleSlug?: ArticleSlug;
  }[] = [];

  for (const locale of SUPPORTED_LOCALES) {
    const map = ROUTES_BY_LOCALE[locale];
    for (const key of Object.keys(map) as RouteKey[]) {
      entries.push({
        path: map[key],
        locale,
        routeKey: key,
      });
    }
    for (const show of TRADE_SHOWS) {
      entries.push({ path: getTradeShowPath(locale, show.slug), locale, routeKey: "tradeShow" });
    }
    for (const slug of ARTICLE_SLUGS) {
      if (!articleAvailableIn(slug, locale)) continue;
      entries.push({
        path: getArticlePath(locale, slug),
        locale,
        routeKey: "article",
        articleSlug: slug,
      });
    }
  }

  return entries;
}
