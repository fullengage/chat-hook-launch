import React from "react";
import { Globe } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useLocale } from "@/i18n/LocaleContext";
import { SUPPORTED_LOCALES } from "@/i18n/routes";
import type { Locale } from "@/i18n/types";
import { trackLanguageSwitch } from "@/services/analytics";
import { cn } from "@/lib/utils";

const LOCALE_SHORT_LABELS: Record<Locale, string> = {
  en: "EN",
  "pt-br": "PT-BR",
  es: "ES",
  "zh-cn": "中文",
};

const LOCALE_ARIA_LABELS: Record<Locale, string> = {
  en: "English",
  "pt-br": "Português (Brasil)",
  es: "Español",
  "zh-cn": "简体中文",
};

interface LanguageSwitcherProps {
  compact?: boolean;
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  compact = false,
  className,
}) => {
  const { locale, switchLocale, dict } = useLocale();
  const location = useLocation();

  const handleSelect = (target: Locale) => {
    if (target === locale) return;
    trackLanguageSwitch(locale, target, location.pathname);
    switchLocale(target);
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 p-1",
        className,
      )}
      role="group"
      aria-label={dict.nav.languageLabel}
    >
      {!compact && <Globe className="ml-2 mr-1 h-3.5 w-3.5 text-slate-300" aria-hidden="true" />}
      {SUPPORTED_LOCALES.map((loc) => {
        const active = loc === locale;
        return (
          <button
            key={loc}
            type="button"
            onClick={() => handleSelect(loc)}
            aria-label={LOCALE_ARIA_LABELS[loc]}
            aria-pressed={active}
            className={cn(
              "rounded-full px-2.5 py-1 text-xs font-bold transition-colors",
              active
                ? "bg-[#ff6b00] text-white shadow-sm"
                : "text-slate-300 hover:bg-white/10 hover:text-white",
            )}
          >
            {LOCALE_SHORT_LABELS[loc]}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
