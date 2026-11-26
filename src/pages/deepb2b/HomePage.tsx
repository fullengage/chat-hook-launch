import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Briefcase, CalendarDays, Check, CheckCircle2, Globe2, Handshake, LineChart, Sparkles } from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";
import { SITE_ORIGIN, getTradeShowPath } from "@/i18n/routes";
import { TRADE_SHOWS } from "@/data/tradeShows";
import { articlesFor } from "@/data/articles";
import { trackCtaClick } from "@/services/analytics";
import { SeoHead } from "@/components/seo/SeoHead";
import { SiteLayout } from "@/components/layout/SiteLayout";
import HeroRadar from "@/components/HeroRadar";
import { homeCopy } from "./positioningCopy";
import { homeSections } from "./institutionalCopy";
import { EcosystemDiagram } from "./InstitutionalPages";

// Ícone e página de destino de cada pilar do ecossistema (mesma ordem de homeSections().pillars)
const PILLARS = [
  { Icon: LineChart, to: "marketIntelligence" },
  { Icon: CalendarDays, to: "events" },
  { Icon: Handshake, to: "ecosystem" },
  { Icon: Briefcase, to: "projects" },
] as const;

const eyebrow = "inline-block text-xs font-extrabold uppercase tracking-[0.2em] text-[#ff6b00] mb-4";

export const HomePage: React.FC = () => {
  const { locale, dict, routeTo, articleTo } = useLocale();
  const c = homeCopy(locale);
  const contact = routeTo("contact");
  const heroAnchorRef = useRef<HTMLDivElement>(null);
  const s = homeSections(locale);
  const nf = new Intl.NumberFormat(dict.htmlLang);
  const now = Date.now();
  const upcoming = [...TRADE_SHOWS].filter((t) => new Date(`${t.end}T23:59:59Z`).getTime() >= now).sort((a, b) => a.start.localeCompare(b.start)).slice(0, 5);

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

      {/* 2. Ecossistema: diagrama + quatro pilares */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className={eyebrow}>{s.ecoEyebrow}</span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0f172a]">{s.ecoTitle}</h2>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed">{s.ecoLead}</p>
              <Link to={routeTo("ecosystem")} onClick={() => trackCtaClick("home_ecosystem", locale, routeTo("ecosystem"))} className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#040f21] hover:text-[#ff6b00]">
                {s.ecoCta} <ArrowRight className="h-4 w-4 text-[#ff6b00]" aria-hidden="true" />
              </Link>
            </div>
            <EcosystemDiagram actors={s.actors} hub={s.hub} />
          </div>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {s.pillars.map((a, i) => {
              const { Icon, to } = PILLARS[i];
              const href = routeTo(to);
              return (
                <Link
                  key={a.title}
                  to={href}
                  onClick={() => trackCtaClick(`home_area_${i + 1}`, locale, href)}
                  className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#ff6b00]/40 hover:shadow-xl hover:shadow-slate-200/70"
                >
                  <span className="absolute inset-x-7 top-0 h-0.5 bg-[#ff6b00] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" aria-hidden="true" />
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#040f21] text-[#ff6b00]">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs font-bold text-slate-300">0{i + 1}</span>
                  </div>
                  <h3 className="mt-6 text-lg font-extrabold text-[#040f21]">{a.title}</h3>
                  <p className="mt-3 flex-1 text-sm text-slate-600 leading-relaxed">{a.text}</p>
                  <ArrowRight className="mt-6 h-5 w-5 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-[#ff6b00]" aria-hidden="true" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Feiras & Eventos (com as próximas feiras reais do calendário) */}
      <section className="py-24 bg-[#f8fafc] border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <span className={eyebrow}>{s.eventsEyebrow}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0f172a]">{s.eventsTitle}</h2>
            <p className="mt-5 text-lg text-slate-600">{s.eventsLead}</p>
            <p className="mt-6 text-sm font-bold text-[#0f172a]">{s.eventsListTitle}</p>
            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {s.eventsBullets.map((b) => (
                <li key={b} className="flex gap-2 text-sm text-slate-700"><Check className="h-4 w-4 shrink-0 text-[#ff6b00] mt-0.5" aria-hidden="true" /> {b}</li>
              ))}
            </ul>
            <p className="mt-6 text-base text-slate-700 leading-relaxed border-l-4 border-[#ff6b00] pl-4">{s.eventsClosing}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to={routeTo("calendar")} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#040f21] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#07152e]">
                {s.eventsCta} <ArrowRight className="h-4 w-4 text-[#ff6b00]" aria-hidden="true" />
              </Link>
              <Link to={routeTo("events")} className="inline-flex items-center justify-center rounded-full border-2 border-[#040f21] px-7 py-3 text-sm font-bold text-[#040f21] hover:border-[#ff6b00] hover:text-[#ff6b00]">
                {s.eventsCta2}
              </Link>
            </div>
          </div>
          <aside className="lg:col-span-5">
            <img src="/images/ecossistema/visitantes-pavilhao.jpg" alt={s.eventsEyebrow} loading="lazy" className="mb-8 aspect-[16/10] w-full rounded-2xl object-cover shadow-lg" />
            <h3 className="font-serif text-xl font-bold text-[#0f172a] border-b-2 border-[#040f21] pb-2">{s.upcomingTitle}</h3>
            <ul className="divide-y divide-slate-200">
              {upcoming.map((show) => {
                const d = Math.ceil((new Date(`${show.start}T00:00:00Z`).getTime() - now) / 86_400_000);
                return (
                  <li key={show.slug}>
                    <Link to={getTradeShowPath(locale, show.slug)} className="flex items-center justify-between gap-3 py-3.5 hover:bg-white">
                      <span>
                        <span className="block text-sm font-bold text-[#0f172a]">{show.name} 2027</span>
                        <span className="text-xs text-slate-500">{show.copy[locale].sector}</span>
                      </span>
                      <span className="shrink-0 rounded-md bg-[#040f21] px-2 py-1 font-mono text-xs font-bold text-white">
                        {d > 0 ? s.daysLeft.replace("{n}", nf.format(d)) : "—"}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      </section>

      {/* 4. Inteligência de Mercado */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <span className={eyebrow}>{s.intelEyebrow}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0f172a]">{s.intelTitle}</h2>
            <p className="mt-5 text-lg text-slate-600">{s.intelLead}</p>
            <Link to={routeTo("marketIntelligence")} className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#040f21] hover:text-[#ff6b00]">
              {s.intelCta} <ArrowRight className="h-4 w-4 text-[#ff6b00]" aria-hidden="true" />
            </Link>
          </div>
          <div>
            <p className="text-sm font-bold text-[#0f172a]">{s.intelListTitle}</p>
            <ul className="mt-4 grid gap-px overflow-hidden rounded-2xl bg-slate-200">
              {s.intelBullets.map((b, i) => (
                <li key={b} className="flex items-center gap-4 bg-white px-5 py-4 text-sm font-semibold text-[#0f172a]">
                  <span className="font-mono text-xs text-[#ff6b00]">0{i + 1}</span> {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Projetos Empresariais (sob proposta, sem preço público) */}
      <section className="py-24 bg-[#040f21] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <span className={eyebrow}>{s.projEyebrow}</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">{s.projTitle}</h2>
            <p className="mt-5 text-lg text-slate-300 leading-relaxed">{s.projLead}</p>
            <p className="mt-6 text-sm font-semibold text-[#ff6b00]">{s.projNote}</p>
            <Link to={routeTo("projects")} onClick={() => trackCtaClick("home_projects", locale, routeTo("projects"))} className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#ff6b00] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#ea580c]">
              {s.projCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div>
            <img src="/images/ecossistema/pavilhao-expositores.jpg" alt={s.projEyebrow} loading="lazy" className="mb-6 aspect-[16/9] w-full rounded-2xl object-cover opacity-90" />
            <p className="text-sm font-bold text-slate-300">{s.projListTitle}</p>
            <ul className="mt-4 space-y-3">
              {s.projBullets.map((b) => (
                <li key={b} className="flex gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm font-semibold">
                  <Check className="h-4 w-4 shrink-0 text-[#ff6b00] mt-0.5" aria-hidden="true" /> {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6. DeepClub (identidade própria; lançamento em breve) */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#040f21] via-[#07152e] to-[#1a1033] p-8 md:p-14 text-white">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#ff6b00]/20 blur-3xl" aria-hidden="true" />
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#ff6b00]/40 bg-[#ff6b00]/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-[#ff6b00]">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" /> {s.clubSoon}
                </span>
                <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.2em] text-slate-400">{s.clubEyebrow}</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">{s.clubTitle}</h2>
                <p className="mt-4 text-slate-300 leading-relaxed">{s.clubLead}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.clubPillars.map((p) => (
                    <span key={p.title} className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-slate-200">{p.title}</span>
                  ))}
                </div>
                <Link to={routeTo("deepclub")} onClick={() => trackCtaClick("home_deepclub", locale, routeTo("deepclub"))} className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#040f21] hover:bg-[#ff6b00] hover:text-white">
                  {s.clubCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <div className="grid gap-4">
                {s.clubTiers.map((tier, i) => (
                  <div key={tier.title} className={`rounded-2xl p-6 ${i === 1 ? "bg-[#ff6b00]/10 ring-1 ring-[#ff6b00]/50" : "bg-white/5 ring-1 ring-white/10"}`}>
                    <h3 className="text-2xl font-extrabold">{tier.title}</h3>
                    <p className="mt-1 text-sm text-slate-300">{tier.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Portal de Insights */}
      <section className="py-24 bg-[#f8fafc] border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-3xl">
              <span className={eyebrow}>{s.portalEyebrow}</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0f172a]">{s.portalTitle}</h2>
              <p className="mt-4 text-slate-600">{s.portalLead}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.portalTopics.map((t) => (
                  <span key={t} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">{t}</span>
                ))}
              </div>
            </div>
            <Link to={routeTo("resources")} className="inline-flex items-center gap-1.5 text-sm font-bold text-[#ff6b00] hover:underline shrink-0">
              {s.portalCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articlesFor(locale).slice(0, 3).map(({ article, content }) => (
              <Link key={article.slug} to={articleTo(article.slug)} className="group border-t-2 border-[#040f21] pt-5">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="font-bold uppercase tracking-wider text-[#ff6b00]">{content.category}</span>
                  <span className="inline-flex items-center gap-1">
                    <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                    {content.readingMinutes} {dict.resources.readingTimeLabel}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#0f172a] group-hover:text-[#ff6b00] transition-colors">{content.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{content.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Mercado Internacional */}
      <section className="relative overflow-hidden py-24 bg-[#040f21] text-white">
        <img src="/images/ecossistema/estande-internacional.jpg" alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#040f21]/85" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className={eyebrow}>{s.globalEyebrow}</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">{s.globalTitle}</h2>
            <p className="mt-5 text-lg text-slate-300 leading-relaxed">{s.globalLead}</p>
            <p className="mt-6 font-serif text-xl italic text-[#ff6b00]">{s.globalTagline}</p>
            <Link to={routeTo("brazilMarketEntry")} className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#ff6b00]">
              {s.globalCta} <ArrowRight className="h-4 w-4 text-[#ff6b00]" aria-hidden="true" />
            </Link>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {s.globalBullets.map((b) => (
              <li key={b} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm font-semibold">
                <Globe2 className="h-5 w-5 shrink-0 text-[#ff6b00]" aria-hidden="true" /> {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 9. CTA final */}
      <section className="py-24 bg-[#f8fafc] border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0f172a]">{s.finalTitle}</h2>
          <p className="mt-5 text-lg text-slate-600">{s.finalText}</p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to={contact}
              onClick={() => trackCtaClick("home_final_presentation", locale, contact)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#040f21] px-8 py-4 text-sm font-bold text-white hover:bg-[#07152e]"
            >
              {s.finalCta} <ArrowRight className="h-4 w-4 text-[#ff6b00]" aria-hidden="true" />
            </Link>
            <Link to={routeTo("ecosystem")} className="inline-flex items-center justify-center rounded-full border-2 border-[#040f21] px-8 py-3.5 text-sm font-bold text-[#040f21] hover:border-[#ff6b00] hover:text-[#ff6b00]">
              {s.finalCta2}
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default HomePage;
