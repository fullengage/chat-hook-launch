import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { Locale, RouteKey, TranslationDictionary } from "./types";
import {
  detectLocaleFromPath,
  getArticlePath,
  getRoutePath,
  resolveAlternatePath,
} from "./routes";
import { getDictionary } from "./dictionaries";

const LOCALE_STORAGE_KEY = "deepb2b_locale";

interface LocaleContextValue {
  locale: Locale;
  dict: TranslationDictionary;
  switchLocale: (target: Locale) => void;
  routeTo: (key: RouteKey) => string;
  articleTo: (slug: string) => string;
  formatNumber: (value: number) => string;
  formatCurrency: (value: number, overrideCurrency?: "USD" | "BRL" | "CNY") => string;
  formatDate: (date: Date | string) => string;
  suggestedBrowserLocale: Locale | null;
  dismissSuggestion: () => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

interface LocaleProviderProps {
  children: React.ReactNode;
  forcedLocale?: Locale;
}

export const LocaleProvider: React.FC<LocaleProviderProps> = ({
  children,
  forcedLocale,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const locale: Locale = forcedLocale ?? detectLocaleFromPath(location.pathname);
  const dict = useMemo(() => getDictionary(locale), [locale]);
  const [suggestedBrowserLocale, setSuggestedBrowserLocale] = useState<Locale | null>(null);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = dict.htmlLang;
    }
  }, [dict.htmlLang]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (location.pathname !== "/") {
      setSuggestedBrowserLocale(null);
      return;
    }

    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
    if (stored && (stored === "en" || stored === "pt-br" || stored === "es" || stored === "zh-cn")) {
      if (stored !== "en") {
        setSuggestedBrowserLocale(stored);
      }
      return;
    }

    const navLang = (window.navigator.language || "").toLowerCase();
    if (navLang.startsWith("pt")) {
      setSuggestedBrowserLocale("pt-br");
    } else if (navLang.startsWith("es")) {
      setSuggestedBrowserLocale("es");
    } else if (navLang.startsWith("zh")) {
      setSuggestedBrowserLocale("zh-cn");
    }
  }, [location.pathname]);

  const switchLocale = (target: Locale) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, target);
    }
    setSuggestedBrowserLocale(null);
    const nextPath = resolveAlternatePath(location.pathname, target);
    navigate(nextPath);
  };

  const dismissSuggestion = () => {
    setSuggestedBrowserLocale(null);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, "en");
    }
  };

  const value = useMemo<LocaleContextValue>(() => {
    return {
      locale,
      dict,
      switchLocale,
      routeTo: (key: RouteKey) => getRoutePath(locale, key),
      articleTo: (slug: string) => getArticlePath(locale, slug),
      formatNumber: (n: number) => new Intl.NumberFormat(dict.intlLocale).format(n),
      formatCurrency: (n: number, overrideCurrency?: "USD" | "BRL" | "CNY") =>
        new Intl.NumberFormat(dict.intlLocale, {
          style: "currency",
          currency: overrideCurrency ?? dict.currencyCode,
        }).format(n),
      formatDate: (d: Date | string) => {
        const parsed = typeof d === "string" ? new Date(d) : d;
        return new Intl.DateTimeFormat(dict.intlLocale, {
          year: "numeric",
          month: "short",
          day: "numeric",
        }).format(parsed);
      },
      suggestedBrowserLocale,
      dismissSuggestion,
    };
  }, [locale, dict, suggestedBrowserLocale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return ctx;
}
