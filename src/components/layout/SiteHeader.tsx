import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";
import { DeepB2BLogo } from "@/components/brand/DeepB2BLogo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { trackCtaClick } from "@/services/analytics";

export const SiteHeader: React.FC = () => {
  const { locale, dict, routeTo, switchLocale, suggestedBrowserLocale, dismissSuggestion } =
    useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const primaryCtaTarget =
    routeTo("contact");

  const intelligenceLinks = [
    { label: dict.nav.businessData, to: routeTo("businessData") },
    { label: dict.nav.marketIntelligence, to: routeTo("marketIntelligence") },
    { label: dict.nav.leadGeneration, to: routeTo("leadGeneration") },
    { label: dict.nav.industryMapping, to: routeTo("industryMapping") },
    { label: dict.nav.brazilMarketEntry, to: routeTo("brazilMarketEntry") },
  ];

  const mainLinks = [
    { label: dict.nav.events, to: routeTo("events") },
    { label: dict.nav.ecosystem, to: routeTo("ecosystem") },
    { label: dict.nav.deepclub, to: routeTo("deepclub") },
    { label: dict.nav.resources, to: routeTo("resources") },
    { label: dict.nav.about, to: routeTo("about") },
  ];

  return (
    <>
      {suggestedBrowserLocale && (
        <div className="bg-[#07152e] border-b border-white/10 px-4 py-2 text-xs text-slate-200">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2">
            <span>
              {dict.localeNotice.suggestPrefix}{" "}
              <strong className="text-white">
                {suggestedBrowserLocale === "pt-br"
                  ? "Português (Brasil)"
                  : suggestedBrowserLocale === "es"
                    ? "Español (LATAM)"
                    : "简体中文"}
              </strong>
            </span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => switchLocale(suggestedBrowserLocale)}
                className="rounded-full bg-[#ff6b00] px-3 py-1 font-bold text-white hover:bg-[#ea580c] transition-colors"
              >
                {suggestedBrowserLocale === "pt-br"
                  ? "Ir para /pt-br/"
                  : suggestedBrowserLocale === "es"
                    ? "Ir a /es/"
                    : "前往 /zh-cn/"}
              </button>
              <button
                type="button"
                onClick={dismissSuggestion}
                className="text-slate-400 hover:text-white transition-colors"
              >
                {dict.localeNotice.dismissLabel}
              </button>
            </div>
          </div>
        </div>
      )}

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#040f21]/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link
            to={routeTo("home")}
            className="flex shrink-0 items-center"
            aria-label="DeepB2B Home"
            onClick={() => setMobileMenuOpen(false)}
          >
            <DeepB2BLogo
              variant="dark"
              showSubtitle
              subtitleText={dict.brand.subtitle}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-5 text-sm font-semibold text-slate-200">
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setDropdownOpen((v) => !v)}
                aria-expanded={dropdownOpen}
                className="inline-flex items-center gap-1 py-2 text-slate-200 hover:text-[#ff6b00] transition-colors"
              >
                <span>{dict.nav.intelligenceGroup}</span>
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 top-full w-64 rounded-2xl border border-white/10 bg-[#07152e] p-2 shadow-2xl">
                  {intelligenceLinks.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setDropdownOpen(false)}
                      className="block rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-[#ff6b00] transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {mainLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="whitespace-nowrap text-slate-200 hover:text-[#ff6b00] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden xl:flex items-center gap-3">
            <LanguageSwitcher compact />
            <Link
              to={routeTo("login")}
              className="whitespace-nowrap px-3 py-2 text-xs font-bold text-slate-300 hover:text-white transition-colors"
            >
              {dict.nav.login}
            </Link>
            <Link
              to={primaryCtaTarget}
              onClick={() => trackCtaClick("header_primary", locale, primaryCtaTarget)}
              className="whitespace-nowrap rounded-full bg-[#ff6b00] px-5 py-2.5 text-xs font-bold text-white shadow-button hover:bg-[#ea580c] transition-all"
            >
              {dict.nav.primaryCta}
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 xl:hidden">
            <LanguageSwitcher compact />
            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="rounded-xl p-2 text-white hover:bg-white/10 transition-colors"
              aria-label={mobileMenuOpen ? dict.nav.closeMenu : dict.nav.openMenu}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-white/10 bg-[#040f21] px-6 py-6 text-white shadow-2xl">
            <div className="space-y-4">
              <div>
                <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-[#ff6b00]">
                  {dict.nav.intelligenceGroup}
                </p>
                <div className="grid gap-1">
                  {intelligenceLinks.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className="rounded-lg px-2 py-2 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-[#ff6b00]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-3 grid gap-1">
                {mainLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-lg px-2 py-2 text-sm font-semibold text-slate-100 hover:bg-white/5 hover:text-[#ff6b00]"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to={routeTo("contact")}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-2 py-2 text-sm font-semibold text-slate-100 hover:bg-white/5 hover:text-[#ff6b00]"
                >
                  {dict.nav.contact}
                </Link>
                <Link
                  to={routeTo("login")}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-2 py-2 text-sm font-semibold text-slate-300 hover:bg-white/5 hover:text-white"
                >
                  {dict.nav.login}
                </Link>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <Link
                  to={primaryCtaTarget}
                  onClick={() => {
                    trackCtaClick("mobile_header_primary", locale, primaryCtaTarget);
                    setMobileMenuOpen(false);
                  }}
                  className="flex w-full items-center justify-center rounded-full bg-[#ff6b00] py-3 text-sm font-bold text-white hover:bg-[#ea580c]"
                >
                  {dict.nav.primaryCta}
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default SiteHeader;
