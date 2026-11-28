import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { Locale } from "@/i18n/types";
import { DEFAULT_MARKET_EDITION } from "@/lib/dates";
import {
  articlesFor,
  fetchEditorialPayload,
  getArticleBySlug,
  getTradeShowBySlug,
  normalizeEditorialPayload,
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

const EMPTY_PAYLOAD: EditorialPayload = {
  shows: [],
  articles: [],
  marketDataEdition: DEFAULT_MARKET_EDITION,
};

// Module-level cache avoids binding bootstrap data on `window`, preventing HTML5 named-element ID collisions.
let cachedInitialPayload: EditorialPayload | null = null;

function readInitialData(): EditorialPayload | null {
  if (cachedInitialPayload) return cachedInitialPayload;
  if (typeof document === "undefined") return null;
  const el =
    document.getElementById("deepb2b-initial-data") ??
    document.getElementById("__DEEPB2B_DATA__");
  if (!el?.textContent) return null;
  try {
    const parsed: unknown = JSON.parse(el.textContent);
    const normalized = normalizeEditorialPayload(parsed);
    if (!normalized) return null;
    cachedInitialPayload = normalized;
    return normalized;
  } catch {
    return null;
  }
}

export const EditorialProvider: React.FC<{
  children: React.ReactNode;
  initialData?: EditorialPayload;
}> = ({ children, initialData }) => {
  const bootstrap = normalizeEditorialPayload(initialData) ?? readInitialData();
  const [payload, setPayload] = useState<EditorialPayload>(
    () => bootstrap ?? EMPTY_PAYLOAD,
  );
  const [loading, setLoading] = useState<boolean>(() => !bootstrap);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    try {
      const next = await fetchEditorialPayload();
      const normalized = normalizeEditorialPayload(next) ?? EMPTY_PAYLOAD;
      setPayload(normalized);
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
        const normalized = normalizeEditorialPayload(next);
        if (normalized) {
          setPayload(normalized);
        }
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
