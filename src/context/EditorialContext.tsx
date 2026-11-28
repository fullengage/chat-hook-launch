import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { Locale } from "@/i18n/types";
import {
  articlesFor,
  fetchEditorialPayload,
  getArticleBySlug,
  getTradeShowBySlug,
  type EditorialArticle,
  type EditorialPayload,
  type LocalizedArticleContent,
  type TradeShow,
} from "@/services/editorialData";

interface EditorialContextValue {
  shows: TradeShow[];
  articles: EditorialArticle[];
  marketDataEdition: string;
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
  articlesForLocale: (
    locale: Locale,
    opts?: { editoria?: EditorialArticle["editoria"] },
  ) => { article: EditorialArticle; content: LocalizedArticleContent }[];
  findArticle: (slug: string) => EditorialArticle | undefined;
  findShow: (slug: string) => TradeShow | undefined;
}

const EditorialContext = createContext<EditorialContextValue | null>(null);

declare global {
  interface Window {
    __DEEPB2B_DATA__?: EditorialPayload;
  }
}

function readWindowInitialData(): EditorialPayload | null {
  if (typeof window === "undefined" || typeof document === "undefined") return null;
  if (window.__DEEPB2B_DATA__) return window.__DEEPB2B_DATA__;
  const el = document.getElementById("__DEEPB2B_DATA__");
  if (!el?.textContent) return null;
  try {
    const parsed = JSON.parse(el.textContent) as EditorialPayload;
    window.__DEEPB2B_DATA__ = parsed;
    return parsed;
  } catch {
    return null;
  }
}

export const EditorialProvider: React.FC<{
  children: React.ReactNode;
  initialData?: EditorialPayload;
}> = ({ children, initialData }) => {
  const bootstrap = initialData ?? readWindowInitialData();
  const [payload, setPayload] = useState<EditorialPayload>(
    () => bootstrap ?? { shows: [], articles: [], marketDataEdition: "2026-10" },
  );
  const [loading, setLoading] = useState<boolean>(() => !bootstrap);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    try {
      const next = await fetchEditorialPayload();
      setPayload(next);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao carregar dados");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const controller = new AbortController();
    fetchEditorialPayload(controller.signal)
      .then((next) => {
        setPayload(next);
        setError(null);
      })
      .catch((err) => {
        if (controller.signal.aborted) return;
        setError(err instanceof Error ? err.message : "Erro ao carregar dados");
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });
    return () => controller.abort();
  }, []);

  const value = useMemo<EditorialContextValue>(() => {
    return {
      shows: payload.shows,
      articles: payload.articles,
      marketDataEdition: payload.marketDataEdition,
      loading,
      error,
      refresh,
      articlesForLocale: (locale, opts) => articlesFor(payload.articles, locale, opts),
      findArticle: (slug) => getArticleBySlug(payload.articles, slug),
      findShow: (slug) => getTradeShowBySlug(payload.shows, slug),
    };
  }, [payload, loading, error, refresh]);

  return <EditorialContext.Provider value={value}>{children}</EditorialContext.Provider>;
};

export function useEditorial(): EditorialContextValue {
  const ctx = useContext(EditorialContext);
  if (!ctx) {
    throw new Error("useEditorial must be used within an EditorialProvider");
  }
  return ctx;
}
