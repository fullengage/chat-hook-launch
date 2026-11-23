import React, { createContext, useContext } from "react";

export interface SeoAlternateLink {
  hreflang: "en" | "pt-BR" | "zh-CN" | "x-default";
  href: string;
}

export interface SeoMetadata {
  lang: "en" | "pt-BR" | "zh-CN";
  title: string;
  description: string;
  canonical: string;
  alternates: SeoAlternateLink[];
  ogType?: "website" | "article";
  ogImage?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown>[];
}

export interface SeoCollector {
  metadata?: SeoMetadata;
}

const SeoCollectorContext = createContext<SeoCollector | null>(null);

export const SeoCollectorProvider: React.FC<{
  collector: SeoCollector;
  children: React.ReactNode;
}> = ({ collector, children }) => (
  <SeoCollectorContext.Provider value={collector}>
    {children}
  </SeoCollectorContext.Provider>
);

export function useSeoCollector(): SeoCollector | null {
  return useContext(SeoCollectorContext);
}
