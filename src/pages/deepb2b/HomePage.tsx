import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Compass,
  Database,
  LineChart,
  Network,
  Sparkles,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";
import { SITE_ORIGIN } from "@/i18n/routes";
import { EDITORIAL_ARTICLES } from "@/data/articles";
import { trackCtaClick } from "@/services/analytics";
import { SeoHead } from "@/components/seo/SeoHead";
import { SiteLayout } from "@/components/layout/SiteLayout";
import HeroRadar from "@/components/HeroRadar";
import { CompanyDiscoveryExperience } from "@/components/discovery/CompanyDiscoveryExperience";
import { BrazilMarketSnapshot } from "@/components/visualizations/BrazilMarketSnapshot";
import { Card } from "@/components/ui/card";

const PILLAR_ICONS = {
  "company-data": Database,
  "market-intelligence": LineChart,
  "business-discovery": Compass,
  "ai-research": Sparkles,
  "sales-intelligence": Building2,
  "industry-mapping": Network,
} as const;

export const HomePage: React.FC = () => {
  const { locale, dict, routeTo, articleTo } = useLocale();
  const heroAnchorRef = useRef<HTMLDivElement>(null);

  const primaryCtaTarget =
    locale === "pt-br" ? "/teste-gratis" : "#company-discovery";
  const secondaryCtaTarget = routeTo("contact");

  const homeSchemas: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "DeepB2B",
      url: SITE_ORIGIN,
      inLanguage: dict.htmlLang,
      description: dict.seo.home.description,
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "DeepB2B",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: `${SITE_ORIGIN}${routeTo("home")}`,
      description: dict.brand.valueProposition,
      provider: {
        "@type": "Organization",
        name: "Deepson",
      },
    },
  ];

  return (
    <SiteLayout>
      <SeoHead
        title={dict.seo.home.title}
        description={dict.seo.home.description}
        jsonLd={homeSchemas}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#f8fafc] pt-16 pb-20 md:pt-24 md:pb-28">
        <HeroRadar anchor={heroAnchorRef} />
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#040f21] shadow-sm mb-6">
            <span className="h-2 w-2 rounded-full bg-[#ff6b00]" aria-hidden="true" />
            <span>{dict.home.badge}</span>
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#040f21] leading-[1.08] mb-6">
            {dict.home.h1}
          </h1>

          <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-10">
            {dict.home.subtitle}
          </p>

          <div
            ref={heroAnchorRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            {primaryCtaTarget.startsWith("#") ? (
              <a
                href={primaryCtaTarget}
                onClick={() => trackCtaClick("hero_primary", locale, primaryCtaTarget)}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#ff6b00] px-8 py-4 text-sm font-bold text-white shadow-button hover:bg-[#ea580c] transition-all"
              >
                <span>{dict.home.primaryCta}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            ) : (
              <Link
                to={primaryCtaTarget}
                onClick={() => trackCtaClick("hero_primary", locale, primaryCtaTarget)}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#ff6b00] px-8 py-4 text-sm font-bold text-white shadow-button hover:bg-[#ea580c] transition-all"
              >
                <span>{dict.home.primaryCta}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            )}

            <Link
              to={secondaryCtaTarget}
              onClick={() => trackCtaClick("hero_secondary", locale, secondaryCtaTarget)}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border-2 border-[#040f21] bg-white px-8 py-3.5 text-sm font-bold text-[#040f21] hover:border-[#ff6b00] hover:text-[#ff6b00] transition-all"
            >
              <span>{dict.home.secondaryCta}</span>
            </Link>
          </div>

          {/* Trust Bar */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-600">
            {dict.home.trustItems.map((item) => (
              <div key={item} className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#ff6b00] shrink-0" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Six Core Pillars */}
      <section className="py-20 bg-[#040f21] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#ff6b00] mb-3">
              {dict.home.pillarsEyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              {dict.home.pillarsTitle}
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              {dict.home.pillarsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dict.home.pillars.map((pillar) => {
              const Icon =
                PILLAR_ICONS[pillar.id as keyof typeof PILLAR_ICONS] ?? Database;
              return (
                <Card
                  key={pillar.id}
                  className="rounded-3xl border border-white/10 bg-[#07152e] p-7 text-white hover:border-[#ff6b00]/60 transition-colors"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff6b00]/15 text-[#ff6b00] border border-[#ff6b00]/30">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-extrabold mb-2">{pillar.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Company Discovery Preview */}
      <CompanyDiscoveryExperience />

      {/* Target Market Use Cases */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#ff6b00] mb-3">
              {dict.home.useCasesEyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0f172a] mb-4">
              {dict.home.useCasesTitle}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              {dict.home.useCasesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dict.home.useCases.map((uc) => (
              <div
                key={uc.title}
                className="rounded-3xl border border-slate-200 bg-[#f8fafc] p-7 space-y-3"
              >
                <span className="inline-block rounded-full bg-[#fff7ed] border border-orange-200 px-3 py-1 text-[11px] font-bold text-[#c2410c]">
                  {uc.tag}
                </span>
                <h3 className="text-xl font-extrabold text-[#0f172a]">{uc.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Layer Architecture & Macro-Regions */}
      <BrazilMarketSnapshot />

      {/* 4-Step Workflow */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#ff6b00] mb-3">
              {dict.home.howItWorksEyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0f172a]">
              {dict.home.howItWorksTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dict.home.steps.map((step) => (
              <div
                key={step.step}
                className="rounded-3xl border border-slate-200 bg-[#f8fafc] p-7"
              >
                <span className="block font-mono text-xs font-extrabold text-[#ff6b00] mb-3">
                  STEP {step.step}
                </span>
                <h3 className="text-lg font-extrabold text-[#0f172a] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Brazil Guides */}
      <section className="py-20 bg-[#f8fafc] border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#ff6b00] mb-3">
                {dict.home.resourcesEyebrow}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0f172a] mb-3">
                {dict.home.resourcesTitle}
              </h2>
              <p className="text-sm md:text-base text-slate-600">
                {dict.home.resourcesSubtitle}
              </p>
            </div>
            <Link
              to={routeTo("resources")}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#ff6b00] hover:underline shrink-0"
            >
              <span>{dict.home.viewAllResources}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EDITORIAL_ARTICLES.slice(0, 3).map((article) => {
              const content = article.localized[locale];
              return (
                <Link
                  key={article.slug}
                  to={articleTo(article.slug)}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:border-[#ff6b00] transition-all flex flex-col justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-3">
                      <span className="font-bold text-[#ff6b00]">{content.category}</span>
                      <span className="inline-flex items-center gap-1">
                        <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                        {content.readingMinutes} {dict.resources.readingTimeLabel}
                      </span>
                    </div>
                    <h3 className="text-lg font-extrabold text-[#0f172a] group-hover:text-[#ff6b00] transition-colors mb-2">
                      {content.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{content.summary}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#040f21]">
                    <span>{dict.resources.readGuide}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-[#ff6b00]" aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-20 bg-[#040f21] text-white border-t-4 border-[#ff6b00]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#ff6b00] mb-3">
            {dict.home.finalCtaEyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            {dict.home.finalCtaTitle}
          </h2>
          <p className="text-base md:text-lg text-slate-300 mb-8 leading-relaxed">
            {dict.home.finalCtaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={locale === "pt-br" ? "/teste-gratis" : routeTo("contact")}
              onClick={() =>
                trackCtaClick(
                  "footer_banner_primary",
                  locale,
                  locale === "pt-br" ? "/teste-gratis" : routeTo("contact"),
                )
              }
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#ff6b00] px-8 py-4 text-sm font-bold text-white hover:bg-[#ea580c] transition-colors"
            >
              <span>{dict.nav.primaryCta}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to={routeTo("pricing")}
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-white/25 px-8 py-4 text-sm font-bold text-white hover:border-[#ff6b00] hover:text-[#ff6b00] transition-colors"
            >
              {dict.nav.pricing}
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default HomePage;
