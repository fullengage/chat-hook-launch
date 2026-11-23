import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";
import { SITE_ORIGIN } from "@/i18n/routes";
import { SeoHead } from "@/components/seo/SeoHead";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const SolutionsPage: React.FC = () => {
  const { locale, dict, routeTo } = useLocale();
  const ctaTarget = locale === "pt-br" ? "/teste-gratis" : routeTo("contact");

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

      <section className="bg-[#040f21] text-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Breadcrumbs dark items={[{ label: "DeepB2B", to: routeTo("home") }, { label: dict.nav.solutions }]} />
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#ff6b00] mb-3">
            {dict.solutions.eyebrow}
          </span>
          <h1 className="max-w-3xl text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            {dict.solutions.h1}
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-slate-300">{dict.solutions.lead}</p>
        </div>
      </section>

      <section className="py-16 bg-[#f8fafc]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {dict.solutions.segments.map((seg) => (
            <div
              key={seg.audience}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col justify-between gap-6"
            >
              <div className="space-y-4">
                <span className="inline-block rounded-full bg-[#fff7ed] border border-orange-200 px-3 py-1 text-xs font-extrabold text-[#c2410c]">
                  {seg.badge}
                </span>
                <h2 className="text-2xl font-extrabold text-[#0f172a]">{seg.audience}</h2>
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

        <div className="mx-auto max-w-4xl px-4 sm:px-6 mt-16 text-center">
          <div className="rounded-3xl bg-[#040f21] p-10 text-white">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-3">{dict.solutions.ctaTitle}</h2>
            <p className="text-sm md:text-base text-slate-300 mb-6">{dict.solutions.ctaSubtitle}</p>
            <Link
              to={ctaTarget}
              className="inline-flex items-center gap-2 rounded-full bg-[#ff6b00] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#ea580c]"
            >
              <span>{dict.nav.primaryCta}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default SolutionsPage;
