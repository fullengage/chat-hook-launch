import React from "react";
import { useLocale } from "@/i18n/LocaleContext";
import { SITE_ORIGIN } from "@/i18n/routes";
import { SeoHead } from "@/components/seo/SeoHead";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PricingView } from "@/components/pricing/PricingView";

export const PricingPage: React.FC = () => {
  const { dict, routeTo } = useLocale();

  return (
    <SiteLayout>
      <SeoHead
        title={dict.seo.pricing.title}
        description={dict.seo.pricing.description}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "DeepB2B", item: `${SITE_ORIGIN}${routeTo("home")}` },
              { "@type": "ListItem", position: 2, name: dict.nav.pricing, item: `${SITE_ORIGIN}${routeTo("pricing")}` },
            ],
          },
        ]}
      />

      <section className="bg-[#040f21] text-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Breadcrumbs dark items={[{ label: "DeepB2B", to: routeTo("home") }, { label: dict.nav.pricing }]} />
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#ff6b00] mb-3">
            {dict.pricing.eyebrow}
          </span>
          <h1 className="max-w-3xl text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            {dict.pricing.h1}
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-slate-300">{dict.pricing.lead}</p>
        </div>
      </section>

      <section className="py-16 bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <PricingView />
        </div>
      </section>
    </SiteLayout>
  );
};

export default PricingPage;
