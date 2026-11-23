import React from "react";
import { ShieldCheck } from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";
import { SITE_ORIGIN } from "@/i18n/routes";
import { SeoHead } from "@/components/seo/SeoHead";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/badge";

const STATUS_STYLE = {
  production: "bg-emerald-50 text-emerald-800 border-emerald-200",
  consultative: "bg-sky-50 text-sky-800 border-sky-200",
  roadmap: "bg-amber-50 text-amber-800 border-amber-200",
} as const;

export const AboutPage: React.FC = () => {
  const { dict, routeTo } = useLocale();

  return (
    <SiteLayout>
      <SeoHead
        title={dict.seo.about.title}
        description={dict.seo.about.description}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "DeepB2B", item: `${SITE_ORIGIN}${routeTo("home")}` },
              { "@type": "ListItem", position: 2, name: dict.nav.about, item: `${SITE_ORIGIN}${routeTo("about")}` },
            ],
          },
        ]}
      />

      <section className="bg-[#040f21] text-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Breadcrumbs dark items={[{ label: "DeepB2B", to: routeTo("home") }, { label: dict.nav.about }]} />
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#ff6b00] mb-3">
            {dict.about.eyebrow}
          </span>
          <h1 className="max-w-3xl text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            {dict.about.h1}
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-slate-300">{dict.about.lead}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0f172a]">
              {dict.about.storyTitle}
            </h2>
            {dict.about.storyParagraphs.map((p, idx) => (
              <p key={idx} className="text-base text-slate-600 leading-relaxed">
                {p}
              </p>
            ))}
            <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5 text-xs text-slate-700 flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 shrink-0 text-[#ff6b00] mt-0.5" aria-hidden="true" />
              <p>{dict.brand.legacyEntityNotice}</p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-2xl font-extrabold text-[#0f172a] mb-4">
              {dict.about.principlesTitle}
            </h2>
            {dict.about.principles.map((pr) => (
              <div
                key={pr.title}
                className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5 space-y-1.5"
              >
                <h3 className="font-extrabold text-sm text-[#0f172a]">{pr.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pr.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f8fafc] border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0f172a] mb-2">
            {dict.about.statusMatrixTitle}
          </h2>
          <p className="text-sm text-slate-600 mb-8">{dict.about.statusMatrixSubtitle}</p>

          <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm">
            <div className="divide-y divide-slate-200">
              {dict.about.statusItems.map((item) => (
                <div
                  key={item.capability}
                  className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div>
                    <h3 className="font-bold text-sm text-[#0f172a]">{item.capability}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{item.detail}</p>
                  </div>
                  <Badge variant="outline" className={`w-fit text-xs font-bold ${STATUS_STYLE[item.status]}`}>
                    {dict.about.statusLabels[item.status]}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default AboutPage;
