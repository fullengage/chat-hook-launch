import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";
import type { RouteKey } from "@/i18n/types";
import { SITE_ORIGIN } from "@/i18n/routes";
import { trackCtaClick } from "@/services/analytics";
import { SeoHead } from "@/components/seo/SeoHead";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { clubCopy, ecosystemCopy, homeSections, partnersCopy, projectsCopy, type InfoPage } from "./institutionalCopy";
import { dnaCopy, globalFronts } from "./dnaCopy";

const eyebrow = "inline-block text-xs font-extrabold uppercase tracking-[0.2em] text-[#ff6b00]";

/** Diagrama: DeepB2B no centro ligada aos cinco participantes do mercado. Só CSS/SVG, sem imagem. */
export const EcosystemDiagram: React.FC<{ actors: string[]; hub: string; note?: string }> = ({ actors, hub, note }) => {
  const R = 38; // % do raio
  return (
    <figure className="mx-auto w-full max-w-md">
    <div className="relative aspect-square w-full" role="img" aria-label={`${hub}: ${actors.join(", ")}`}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <circle cx="50" cy="50" r={R} fill="none" stroke="#e2e8f0" strokeDasharray="1 1.5" strokeWidth="0.4" />
        <circle cx="50" cy="50" r={R / 2} fill="none" stroke="#e2e8f0" strokeWidth="0.3" />
        {actors.map((_, i) => {
          const a = (i / actors.length) * Math.PI * 2 - Math.PI / 2;
          return <line key={i} x1="50" y1="50" x2={50 + Math.cos(a) * R} y2={50 + Math.sin(a) * R} stroke="#ff6b00" strokeOpacity="0.45" strokeWidth="0.4" />;
        })}
      </svg>
      <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#040f21] text-sm font-extrabold text-white shadow-xl ring-4 ring-[#ff6b00]/30">
        {hub}
      </div>
      {actors.map((label, i) => {
        const a = (i / actors.length) * Math.PI * 2 - Math.PI / 2;
        return (
          <span
            key={label}
            className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-[#0f172a] shadow-sm"
            style={{ left: `${50 + Math.cos(a) * R}%`, top: `${50 + Math.sin(a) * R}%` }}
          >
            {label}
          </span>
        );
      })}
    </div>
    {note && <figcaption className="mt-4 text-center text-xs text-slate-500">{note}</figcaption>}
    </figure>
  );
};

const InfoPageView: React.FC<{ copy: InfoPage; seoKey: RouteKey; ctaTo: RouteKey; heroImage?: string; children?: React.ReactNode }> = ({ copy, seoKey, ctaTo, heroImage, children }) => {
  const { locale, dict, routeTo } = useLocale();
  const seo = dict.seo[seoKey];
  const cta = routeTo(ctaTo);
  return (
    <SiteLayout>
      <SeoHead
        title={seo.title}
        description={seo.description}
        jsonLd={[{ "@context": "https://schema.org", "@type": "WebPage", name: copy.h1, url: `${SITE_ORIGIN}${routeTo(seoKey)}`, description: copy.lead }]}
      />
      <section className="relative overflow-hidden bg-[#040f21] text-white">
        {heroImage && (
          <>
            <img src={heroImage} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#040f21] via-[#040f21]/85 to-[#040f21]/40" aria-hidden="true" />
          </>
        )}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24">
          <Breadcrumbs dark items={[{ label: copy.eyebrow }]} />
          <span className={`mt-4 ${eyebrow}`}>{copy.eyebrow}</span>
          <h1 className="mt-3 max-w-4xl text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">{copy.h1}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{copy.lead}</p>
        </div>
      </section>
      {children}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {copy.sections.map((s) => (
            <div key={s.title} className={`border-t-2 border-[#040f21] pt-5 ${s.bullets && s.bullets.length > 4 ? "md:col-span-2" : ""}`}>
              <h2 className="text-2xl font-extrabold text-[#0f172a]">{s.title}</h2>
              {s.text && <p className="mt-3 text-slate-600 leading-relaxed">{s.text}</p>}
              {s.bullets && (
                <ul className={`mt-4 grid gap-3 ${s.bullets.length > 4 ? "sm:grid-cols-2" : ""}`}>
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-slate-700">
                      <Check className="h-4 w-4 shrink-0 text-[#ff6b00] mt-0.5" aria-hidden="true" /> {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 bg-[#040f21] text-white text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{copy.ctaTitle}</h2>
          <p className="mt-4 text-slate-300">{copy.ctaText}</p>
          <Link
            to={cta}
            onClick={() => trackCtaClick(`${seoKey}_cta`, locale, cta)}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#ff6b00] px-8 py-4 text-sm font-bold text-white hover:bg-[#ea580c]"
          >
            {copy.ctaLabel} <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
};

// ponytail: fotos enviadas pelo Richard (26/11/2026); trocar por fotos próprias/licenciadas quando houver
const ECO_PHOTOS = [
  "/images/ecossistema/estande-internacional.jpg",
  "/images/ecossistema/pavilhao-expositores.jpg",
  "/images/ecossistema/visitantes-pavilhao.jpg",
];
const ECO_CAPTIONS: Record<string, string[]> = {
  "pt-br": ["Feiras movimentam mercados e aproximam países", "Expositores apresentam soluções, produtos e marcas", "Visitantes e compradores circulam entre os setores"],
  en: ["Trade shows move markets and bring countries together", "Exhibitors showcase solutions, products and brands", "Visitors and buyers move across every sector"],
  es: ["Las ferias mueven mercados y acercan países", "Los expositores presentan soluciones, productos y marcas", "Visitantes y compradores recorren todos los sectores"],
  "zh-cn": ["展会推动市场、连接各国", "参展商展示解决方案、产品与品牌", "观众与买家穿梭于各个行业"],
};

export const EcosystemPage: React.FC = () => {
  const { locale } = useLocale();
  const h = homeSections(locale);
  const captions = ECO_CAPTIONS[locale];
  return (
    <InfoPageView copy={ecosystemCopy(locale)} seoKey="ecosystem" ctaTo="contact" heroImage="/images/ecossistema/corredor-feira-desfocado.jpg">
      <section className="py-16 bg-[#f8fafc] border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <EcosystemDiagram actors={[...h.actors, globalFronts(locale).supportActor]} hub={h.hub} note={globalFronts(locale).supportNote} />
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {ECO_PHOTOS.map((src, i) => (
            <figure key={src} className="group overflow-hidden rounded-2xl bg-[#040f21]">
              <img src={src} alt={captions[i]} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <figcaption className="px-5 py-4 text-sm font-semibold text-white">{captions[i]}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </InfoPageView>
  );
};

export const ProjectsPage: React.FC = () => {
  const { locale } = useLocale();
  const d = dnaCopy(locale);
  return (
    <InfoPageView copy={projectsCopy(locale)} seoKey="projects" ctaTo="contact" heroImage="/images/ecossistema/pavilhao-expositores.jpg">
      <section className="py-16 bg-[#f8fafc] border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0f172a]">{d.stepsTitle}</h2>
            <p className="mt-3 text-slate-600">{d.stepsIntro}</p>
            <blockquote className="mt-8 border-l-4 border-[#ff6b00] pl-5 font-serif text-xl italic text-[#0f172a]">{d.stepsQuote}</blockquote>
          </div>
          <ol className="space-y-3">
            {d.steps.map((st, i) => (
              <li key={st} className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-[#0f172a]">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#040f21] font-mono text-xs text-[#ff6b00]">{i + 1}</span>
                {st}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </InfoPageView>
  );
};

export const PartnersPage: React.FC = () => {
  const { locale } = useLocale();
  return <InfoPageView copy={partnersCopy(locale)} seoKey="partners" ctaTo="contact" heroImage="/images/ecossistema/estande-internacional.jpg" />;
};

export const DeepClubPage: React.FC = () => {
  const { locale, dict, routeTo } = useLocale();
  const c = clubCopy(locale);
  const contact = routeTo("contact");
  return (
    <SiteLayout>
      <SeoHead
        title={dict.seo.deepclub.title}
        description={dict.seo.deepclub.description}
        jsonLd={[{ "@context": "https://schema.org", "@type": "WebPage", name: "DeepClub", url: `${SITE_ORIGIN}${routeTo("deepclub")}`, description: c.lead }]}
      />
      <section className="relative overflow-hidden bg-[#040f21] text-white">
        <img src="/images/ecossistema/visitantes-pavilhao.jpg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040f21] via-[#040f21]/90 to-[#1a1033]/60" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,107,0,0.22),transparent_55%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24">
          <Breadcrumbs dark items={[{ label: "DeepClub" }]} />
          <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#ff6b00]/40 bg-[#ff6b00]/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-[#ff6b00]">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" /> {c.soon}
          </span>
          <p className={`mt-6 block ${eyebrow}`}>{c.eyebrow}</p>
          <h1 className="mt-3 max-w-4xl text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">{c.h1}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{c.lead}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0f172a]">{c.pillarsTitle}</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dnaCopy(locale).clubPillars.map((p, i) => (
              <div key={p.title} className="rounded-2xl border border-slate-200 p-6">
                <span className="font-mono text-xs font-bold text-[#ff6b00]">0{i + 1}</span>
                <h3 className="mt-2 text-xl font-extrabold text-[#0f172a]">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f8fafc] border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <span className={eyebrow}>{c.demandsEyebrow}</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0f172a]">{c.demandsTitle}</h2>
            <p className="mt-4 text-slate-600">{c.demandsText}</p>
          </div>
          <ul className="space-y-3">
            {c.demandsExamples.map((d) => (
              <li key={d} className="flex gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-[#0f172a]">
                <ArrowRight className="h-4 w-4 shrink-0 text-[#ff6b00] mt-0.5" aria-hidden="true" /> {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0f172a]">{c.plansTitle}</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { p: c.standard, dark: false, includes: "" },
              { p: c.experience, dark: true, includes: c.experience.includes },
            ].map(({ p, dark, includes }) => (
              <div key={p.name} className={`rounded-3xl p-8 ${dark ? "bg-[#040f21] text-white ring-2 ring-[#ff6b00]" : "border border-slate-200 bg-white"}`}>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-3xl font-extrabold">{p.name}</h3>
                  <span className="rounded-full bg-[#ff6b00]/10 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#ff6b00]">{c.soon}</span>
                </div>
                <p className={`mt-1 font-semibold ${dark ? "text-slate-300" : "text-slate-500"}`}>{p.tag}</p>
                {includes && <p className="mt-6 text-sm font-bold text-[#ff6b00]">{includes}</p>}
                <ul className="mt-4 grid gap-2.5">
                  {p.features.map((f) => (
                    <li key={f} className={`flex gap-2 text-sm ${dark ? "text-slate-200" : "text-slate-700"}`}>
                      <Check className="h-4 w-4 shrink-0 text-[#ff6b00] mt-0.5" aria-hidden="true" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-500">{c.availabilityNote}</p>
        </div>
      </section>

      <section className="py-16 bg-[#040f21] text-white text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{c.ctaTitle}</h2>
          <p className="mt-4 text-slate-300">{c.ctaText}</p>
          <Link
            to={contact}
            onClick={() => trackCtaClick("deepclub_launch", locale, contact)}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#ff6b00] px-8 py-4 text-sm font-bold text-white hover:bg-[#ea580c]"
          >
            {c.ctaLabel} <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
};

export const PlatformPage: React.FC = () => {
  const { locale, dict, routeTo } = useLocale();
  const d = dnaCopy(locale);
  const contact = routeTo("contact");
  return (
    <SiteLayout>
      <SeoHead
        title={dict.seo.platform.title}
        description={dict.seo.platform.description}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "DeepB2B",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            url: `${SITE_ORIGIN}${routeTo("platform")}`,
            description: d.platformLead,
          },
        ]}
      />
      <section className="relative overflow-hidden bg-[#040f21] text-white">
        <img src="/images/ecossistema/corredor-feira-desfocado.jpg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040f21] via-[#040f21]/85 to-[#040f21]/40" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24">
          <Breadcrumbs dark items={[{ label: d.platformEyebrow }]} />
          <span className={`mt-4 ${eyebrow}`}>{d.platformEyebrow}</span>
          <h1 className="mt-3 max-w-4xl text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">{d.platformH1}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{d.platformLead}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0f172a]">{d.flowTitle}</h2>
          <ol className="mt-10 grid grid-cols-1 md:grid-cols-5 gap-4">
            {d.flow.map((f, i) => (
              <li key={f.step} className="relative rounded-2xl border border-slate-200 p-5">
                <span className="font-mono text-xs font-bold text-[#ff6b00]">0{i + 1}</span>
                <h3 className="mt-2 text-lg font-extrabold text-[#0f172a]">{f.step}</h3>
                <p className="mt-2 text-sm text-slate-600">{f.text}</p>
                {i < d.flow.length - 1 && <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-[#ff6b00] md:block" aria-hidden="true" />}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 bg-[#f8fafc] border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0f172a]">{d.modulesTitle}</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {d.modules.map((m) => (
              <div key={m.name} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-extrabold text-[#0f172a]">{m.name}</h3>
                  <span className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider ${m.status === "live" ? "bg-emerald-50 text-emerald-700" : "bg-[#ff6b00]/10 text-[#ff6b00]"}`}>
                    {m.status === "live" ? d.live : d.soon}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{m.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm text-slate-500">{d.sourcesNote}</p>
        </div>
      </section>

      <section className="py-16 bg-[#040f21] text-white text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="font-serif text-xl italic text-[#ff6b00]">{d.tagline}</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">{d.platformCtaTitle}</h2>
          <p className="mt-4 text-slate-300">{d.platformCtaText}</p>
          <Link
            to={contact}
            onClick={() => trackCtaClick("platform_cta", locale, contact)}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#ff6b00] px-8 py-4 text-sm font-bold text-white hover:bg-[#ea580c]"
          >
            {d.platformCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
};
