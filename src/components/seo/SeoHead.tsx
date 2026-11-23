import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLocale } from "@/i18n/LocaleContext";
import {
  getAlternateLinks,
  getCanonicalUrl,
  SITE_ORIGIN,
} from "@/i18n/routes";
import { trackPageView } from "@/services/analytics";
import { useSeoCollector, type SeoMetadata } from "./SeoContext";

interface SeoHeadProps {
  title: string;
  description: string;
  ogType?: "website" | "article";
  noindex?: boolean;
  jsonLd?: Record<string, unknown>[];
}

function upsertMeta(attr: "name" | "property", key: string, content: string): void {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertLink(rel: string, href: string, hreflang?: string): void {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let link = document.head.querySelector<HTMLLinkElement>(selector);
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    if (hreflang) link.setAttribute("hreflang", hreflang);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

/**
 * Synchronizes SEO head tags both for client-side navigation and SSR static prerendering.
 */
export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  ogType = "website",
  noindex = false,
  jsonLd = [],
}) => {
  const location = useLocation();
  const { locale, dict } = useLocale();
  const collector = useSeoCollector();

  const canonical = getCanonicalUrl(location.pathname, locale);
  const alternates = getAlternateLinks(location.pathname);
  const ogImage = `${SITE_ORIGIN}/og-image.jpg`;

  const baseOrganizationSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DeepB2B",
    alternateName: "Deepson",
    url: SITE_ORIGIN,
    logo: `${SITE_ORIGIN}/logo-deepai.png`,
    description: dict.brand.valueProposition,
    parentOrganization: {
      "@type": "Organization",
      name: "Grupo FullWeb",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: locale === "pt-br" ? "contato@deepb2b.ai" : "contact@deepb2b.ai",
      availableLanguage: ["English", "Portuguese", "Spanish", "Chinese"],
    },
  };

  const fullSchemas = [baseOrganizationSchema, ...jsonLd];

  const metadata: SeoMetadata = {
    lang: dict.htmlLang,
    title,
    description,
    canonical,
    alternates,
    ogType,
    ogImage,
    noindex,
    jsonLd: fullSchemas,
  };

  if (collector) {
    collector.metadata = metadata;
  }

  useEffect(() => {
    if (typeof document === "undefined") return;

    document.documentElement.lang = dict.htmlLang;
    document.title = title;

    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", ogType);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:image", ogImage);
    upsertMeta("property", "og:site_name", "DeepB2B");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", ogImage);

    upsertLink("canonical", canonical);
    alternates.forEach((alt) => upsertLink("alternate", alt.href, alt.hreflang));

    document.head
      .querySelectorAll('script[data-deepb2b-jsonld="true"]')
      .forEach((node) => node.remove());

    fullSchemas.forEach((schema) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-deepb2b-jsonld", "true");
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    trackPageView(location.pathname, locale, title);
  }, [title, description, canonical, ogType, noindex, locale, dict.htmlLang, location.pathname]);

  return null;
};

export default SeoHead;
