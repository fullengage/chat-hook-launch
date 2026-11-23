import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Check,
  Compass,
  Database,
  Globe2,
  Info,
  LineChart,
  Lock,
  Network,
} from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";
import { SITE_ORIGIN } from "@/i18n/routes";
import { trackCtaClick } from "@/services/analytics";
import { SeoHead } from "@/components/seo/SeoHead";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Card } from "@/components/ui/card";

const MODULE_ICONS = {
  businessData: Database,
  marketIntelligence: LineChart,
  leadGeneration: Compass,
  industryMapping: Network,
  brazilMarketEntry: Globe2,
  enterprise: Building2,
} as const;

export const SolutionsPage: React.FC = () => {
  const { locale, dict, routeTo } = useLocale();
  const isBr = locale === "pt-br";
  const demoHref = routeTo("contact");
  const primaryHref = isBr ? "/teste-gratis" : demoHref;

  return (
    <SiteLayout>
      <SeoHead
        title={dict.seo.solutions.title}
        description={dict.seo.solutions.description}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "DeepB2B", item: `${SITE_ORIGIN}${routeTo("home")}` },
              { "@type": "ListItem", position: 2, name: dict.nav.solutions, item: `${SITE_ORIGIN}${routeTo("solutions")}` },
            ],
          },
        ]}
      />

      {/* Hero */}
      <section className="bg-[#040f21] text-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Breadcrumbs
            dark
            items={[
              { label: "DeepB2B", to: routeTo("home") },
              { label: dict.nav.solutions },
            ]}
          />
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#ff6b00] mb-3">
            {dict.solutions.eyebrow}
          </span>
          <h1 className="max-w-3xl text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            {dict.solutions.h1}
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-slate-300 mb-8">
            {dict.solutions.lead}
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              to={primaryHref}
              onClick={() => trackCtaClick("solutions_hero_primary", locale, primaryHref)}
              className="inline-flex items-center gap-2 rounded-full bg-[#ff6b00] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#ea580c] transition-colors"
            >
              <span>{dict.solutions.primaryCta}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to={demoHref}
              onClick={() => trackCtaClick("solutions_hero_talk", locale, demoHref)}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold text-white hover:border-[#ff6b00] hover:text-[#ff6b00] transition-colors"
            >
              <span>{dict.solutions.secondaryCta}</span>
            </Link>
            <a
              href="#solutions-suite"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:bg-white/10 transition-colors"
            >
              <span>{dict.solutions.discoverCta}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 6 Core Solutions Modules */}
      <section id="solutions-suite" className="py-16 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0f172a] mb-2">
              {dict.solutions.suiteTitle}
            </h2>
            <p className="text-sm md:text-base text-slate-600">{dict.solutions.suiteSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dict.solutions.modules.map((mod) => {
              const Icon = MODULE_ICONS[mod.key];
              const target = routeTo(mod.routeKey);
              return (
                <Card
                  key={mod.key}
                  className="rounded-3xl border border-slate-200 bg-[#f8fafc] p-7 flex flex-col justify-between gap-6 hover:border-[#ff6b00] transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#040f21] text-[#ff6b00]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span className="rounded-full bg-[#fff7ed] border border-orange-200 px-3 py-1 text-[11px] font-bold text-[#c2410c]">
                        {mod.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-extrabold text-[#0f172a]">{mod.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{mod.description}</p>
                    <ul className="space-y-1.5 pt-2 text-xs text-slate-700">
                      {mod.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 shrink-0 text-[#ff6b00] mt-0.5" aria-hidden="true" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={target}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#040f21] hover:text-[#ff6b00] transition-colors"
                  >
                    <span>{dict.solutions.suiteCtaLabel}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-[#ff6b00]" aria-hidden="true" />
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Segments & International Enterprise Use Cases */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 space-y-14">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0f172a] mb-8">
              {dict.solutions.segmentsTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dict.solutions.segments.map((seg) => (
                <div
                  key={seg.audience}
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col justify-between gap-6"
                >
                  <div className="space-y-4">
                    <span className="inline-block rounded-full bg-[#fff7ed] border border-orange-200 px-3 py-1 text-xs font-extrabold text-[#c2410c]">
                      {seg.badge}
                    </span>
                    <h3 className="text-2xl font-extrabold text-[#0f172a]">{seg.audience}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{seg.challenge}</p>
                    <p className="text-sm font-medium text-[#0f172a] leading-relaxed">
                      {seg.howDeepB2BHelps}
                    </p>
                  </div>
                  <ul className="space-y-2 border-t border-slate-100 pt-4 text-xs font-semibold text-slate-700">
                    {seg.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#ff6b00] shrink-0" aria-hidden="true" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise International Cases */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#0f172a] mb-6">
              {dict.solutions.enterpriseCasesTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {dict.solutions.enterpriseCases.map((uc) => (
                <div
                  key={uc.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 space-y-2.5"
                >
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#ff6b00]">
                    {uc.tag}
                  </span>
                  <h3 className="text-base font-extrabold text-[#0f172a]">{uc.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{uc.flow}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Platform Governance & Brazil Trial Split (Zero Public Pricing) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 rounded-3xl border border-slate-200 bg-white p-7 flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-[#040f21]">
                <Lock className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-extrabold text-[#0f172a]">
                  {dict.solutions.platformGovernanceTitle}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {dict.solutions.platformGovernanceBody}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-3xl border border-emerald-200 bg-emerald-50/70 p-7 flex flex-col justify-between gap-4">
              <div className="space-y-1.5">
                <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                  <Info className="h-3.5 w-3.5" aria-hidden="true" />
                  Brasil · CNPJ
                </span>
                <h3 className="text-lg font-extrabold text-[#0f172a]">
                  {dict.solutions.trialCardTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700">
                  {dict.solutions.trialCardSubtitle}
                </p>
              </div>
              <Link
                to="/teste-gratis"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-[#040f21] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#07152e]"
              >
                <span>{dict.solutions.trialCardCta}</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#ff6b00]" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Final Commercial CTA */}
          <div className="rounded-3xl bg-[#040f21] p-10 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-3">{dict.solutions.ctaTitle}</h2>
            <p className="text-sm md:text-base text-slate-300 mb-6 max-w-2xl mx-auto">
              {dict.solutions.ctaSubtitle}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to={demoHref}
                onClick={() => trackCtaClick("solutions_bottom_demo", locale, demoHref)}
                className="inline-flex items-center gap-2 rounded-full bg-[#ff6b00] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#ea580c]"
              >
                <span>{dict.solutions.primaryCta}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to={demoHref}
                onClick={() => trackCtaClick("solutions_bottom_talk", locale, demoHref)}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold text-white hover:border-[#ff6b00] hover:text-[#ff6b00]"
              >
                <span>{dict.solutions.secondaryCta}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default SolutionsPage;
