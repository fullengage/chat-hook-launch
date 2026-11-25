import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Check, CheckCircle2, Globe2 } from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";
import { SITE_ORIGIN } from "@/i18n/routes";
import { EDITORIAL_ARTICLES } from "@/data/articles";
import { trackCtaClick } from "@/services/analytics";
import { SeoHead } from "@/components/seo/SeoHead";
import { SiteLayout } from "@/components/layout/SiteLayout";
import HeroRadar from "@/components/HeroRadar";
import { homeCopy } from "./positioningCopy";

const eyebrow = "inline-block text-xs font-extrabold uppercase tracking-[0.2em] text-[#ff6b00] mb-4";

export const HomePage: React.FC = () => {
  const { locale, dict, routeTo, articleTo } = useLocale();
  const c = homeCopy(locale);
  const contact = routeTo("contact");
  const heroAnchorRef = useRef<HTMLDivElement>(null);

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
      "@type": "ProfessionalService",
      name: "DeepB2B",
      url: `${SITE_ORIGIN}${routeTo("home")}`,
      description: c.subtitle,
      areaServed: ["BR", "Worldwide"],
      knowsAbout: c.areas.map((a) => a.title),
    },
  ];

  return (
    <SiteLayout>
      <SeoHead title={dict.seo.home.title} description={dict.seo.home.description} jsonLd={homeSchemas} />

      {/* 1. Hero com radar */}
      <section className="relative overflow-hidden bg-[#f8fafc] pt-16 pb-20 md:pt-24 md:pb-28">
        <HeroRadar anchor={heroAnchorRef} />
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#040f21] shadow-sm mb-6">
            <span className="h-2 w-2 rounded-full bg-[#ff6b00]" aria-hidden="true" />
            <span>{c.eyebrow}</span>
          </div>
          <h1 className="mx-auto max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#040f21] leading-[1.08] mb-6">{c.h1}</h1>
          <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-10">{c.subtitle}</p>
          <div ref={heroAnchorRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              to={routeTo("solutions")}
              onClick={() => trackCtaClick("home_hero_solutions", locale, routeTo("solutions"))}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#ff6b00] px-8 py-4 text-sm font-bold text-white shadow-button hover:bg-[#ea580c] transition-all"
            >
              {c.ctaSolutions} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to={contact}
              onClick={() => trackCtaClick("home_hero_presentation", locale, contact)}
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border-2 border-[#040f21] bg-white px-8 py-3.5 text-sm font-bold text-[#040f21] hover:border-[#ff6b00] hover:text-[#ff6b00] transition-all"
            >
              {c.ctaPresentation}
            </Link>
          </div>
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

      {/* 2. O que fazemos */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className={eyebrow}>{c.whatEyebrow}</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0f172a]">{c.whatTitle}</h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">{c.whatLead}</p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-slate-200">
            {c.areas.map((a, i) => (
              <div key={a.title} className="py-8 pr-8 lg:border-r border-slate-200 last:border-r-0">
                <span className="font-mono text-xs text-slate-400">0{i + 1}</span>
                <h3 className="mt-3 text-xl font-extrabold text-[#040f21]">{a.title}</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Ecossistema de eventos */}
      <section className="py-24 bg-[#f8fafc] border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div>
            <span className={eyebrow}>{c.eventsEyebrow}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0f172a]">{c.eventsTitle}</h2>
            <p className="mt-5 text-lg text-slate-600">{c.eventsLead}</p>
            <p className="mt-6 text-base text-slate-700 leading-relaxed border-l-4 border-[#ff6b00] pl-4">{c.eventsClosing}</p>
            <Link to={routeTo("events")} className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#040f21] hover:text-[#ff6b00]">
              {c.eventsCta} <ArrowRight className="h-4 w-4 text-[#ff6b00]" aria-hidden="true" />
            </Link>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-200 rounded-2xl overflow-hidden self-start">
            {c.eventsBullets.map((b) => (
              <li key={b} className="bg-white p-6 flex gap-3 text-sm font-semibold text-[#0f172a]">
                <Check className="h-5 w-5 shrink-0 text-[#ff6b00]" aria-hidden="true" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Inteligência global */}
      <section className="py-24 bg-[#040f21] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className={eyebrow}>{c.globalEyebrow}</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">{c.globalTitle}</h2>
            <p className="mt-5 text-lg text-slate-300 leading-relaxed">{c.globalLead}</p>
            <Link to={routeTo("brazilMarketEntry")} className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#ff6b00]">
              {c.globalCta} <ArrowRight className="h-4 w-4 text-[#ff6b00]" aria-hidden="true" />
            </Link>
          </div>
          <ol className="space-y-4">
            {c.globalFronts.map((f, i) => (
              <li key={f} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
                <Globe2 className="h-6 w-6 shrink-0 text-[#ff6b00]" aria-hidden="true" />
                <span className="text-base font-semibold">
                  <span className="mr-2 font-mono text-xs text-slate-400">0{i + 1}</span>
                  {f}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. Portal de inteligência */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-3xl">
              <span className={eyebrow}>{c.portalEyebrow}</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0f172a]">{c.portalTitle}</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {c.portalTopics.map((t) => (
                  <span key={t} className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600">{t}</span>
                ))}
              </div>
            </div>
            <Link to={routeTo("resources")} className="inline-flex items-center gap-1.5 text-sm font-bold text-[#ff6b00] hover:underline shrink-0">
              {c.portalAll} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EDITORIAL_ARTICLES.slice(0, 3).map((article) => {
              const content = article.localized[locale];
              return (
                <Link key={article.slug} to={articleTo(article.slug)} className="group border-t-2 border-[#040f21] pt-5">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span className="font-bold uppercase tracking-wider text-[#ff6b00]">{content.category}</span>
                    <span className="inline-flex items-center gap-1">
                      <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                      {content.readingMinutes} {dict.resources.readingTimeLabel}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0f172a] group-hover:text-[#ff6b00] transition-colors">{content.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{content.summary}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CTA institucional */}
      <section className="py-24 bg-[#f8fafc] border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0f172a]">{c.finalTitle}</h2>
          <p className="mt-5 text-lg text-slate-600">{c.finalText}</p>
          <Link
            to={contact}
            onClick={() => trackCtaClick("home_final_presentation", locale, contact)}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#040f21] px-8 py-4 text-sm font-bold text-white hover:bg-[#07152e]"
          >
            {c.finalCta} <ArrowRight className="h-4 w-4 text-[#ff6b00]" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
};

export default HomePage;
