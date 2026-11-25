import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Check } from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";
import { SITE_ORIGIN } from "@/i18n/routes";
import { trackCtaClick } from "@/services/analytics";
import { SeoHead } from "@/components/seo/SeoHead";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { eventsCopy } from "./positioningCopy";

/** Feiras e Eventos (Event Intelligence): serviço para expositores. O calendário público entra quando a base consolidada existir. */
export const EventsPage: React.FC = () => {
  const { locale, dict, routeTo } = useLocale();
  const c = eventsCopy(locale);
  const contact = routeTo("contact");

  return (
    <SiteLayout>
      <SeoHead
        title={dict.seo.events.title}
        description={dict.seo.events.description}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: c.eyebrow,
            serviceType: "Trade show intelligence",
            provider: { "@type": "Organization", name: "DeepB2B", url: SITE_ORIGIN },
            description: c.lead,
          },
        ]}
      />

      <section className="bg-[#040f21] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 md:py-28">
          <Breadcrumbs dark items={[{ label: dict.nav.events }]} />
          <span className="mt-6 inline-block text-xs font-extrabold uppercase tracking-[0.2em] text-[#ff6b00]">{c.eyebrow}</span>
          <h1 className="mt-4 max-w-4xl text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">{c.h1}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{c.lead}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="max-w-3xl text-xl text-slate-700 leading-relaxed">{c.why}</p>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {c.phases.map((p, i) => (
              <div key={p.title} className="border-t-2 border-[#040f21] pt-6">
                <span className="font-mono text-xs text-slate-400">0{i + 1}</span>
                <h2 className="mt-2 text-2xl font-extrabold text-[#0f172a]">{p.title}</h2>
                <ul className="mt-5 space-y-3">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-3 text-sm text-slate-700">
                      <Check className="h-5 w-5 shrink-0 text-[#ff6b00]" aria-hidden="true" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f8fafc] border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-extrabold text-[#0f172a]">{c.forWhoTitle}</h2>
            <ul className="mt-6 space-y-3">
              {c.forWho.map((f) => (
                <li key={f} className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-[#0f172a]">{f}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8">
            <CalendarDays className="h-8 w-8 text-[#ff6b00]" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-extrabold text-[#0f172a]">{c.calendarTitle}</h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">{c.calendarText}</p>
            <Link to={routeTo("calendar")} className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#040f21] hover:text-[#ff6b00]">
              {dict.nav.calendar} <ArrowRight className="h-4 w-4 text-[#ff6b00]" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#040f21] text-white text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{c.cta}</h2>
          <p className="mt-4 text-slate-300">{c.ctaText}</p>
          <Link
            to={contact}
            onClick={() => trackCtaClick("events_presentation", locale, contact)}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#ff6b00] px-8 py-4 text-sm font-bold text-white hover:bg-[#ea580c]"
          >
            {dict.nav.primaryCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
};

export default EventsPage;
