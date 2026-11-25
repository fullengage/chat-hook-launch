import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Info } from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";
import type { CapabilityKey, RouteKey } from "@/i18n/types";
import { SITE_ORIGIN } from "@/i18n/routes";
import { trackCtaClick } from "@/services/analytics";
import { SeoHead } from "@/components/seo/SeoHead";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ProvenanceBadge } from "@/components/discovery/ProvenanceBadge";
import { CompanyDiscoveryExperience } from "@/components/discovery/CompanyDiscoveryExperience";
import { BrazilOpportunityDemo } from "@/components/discovery/BrazilOpportunityDemo";

interface CapabilityPageProps {
  capability: CapabilityKey;
}

const SECONDARY_TARGET_BY_CAPABILITY: Record<CapabilityKey, RouteKey> = {
  businessData: "contact",
  marketIntelligence: "solutions",
  leadGeneration: "solutions",
  industryMapping: "resources",
  brazilMarketEntry: "resources",
};

export const CapabilityPage: React.FC<CapabilityPageProps> = ({ capability }) => {
  const { locale, dict, routeTo } = useLocale();
  const copy = dict.capabilities[capability];
  const seoCopy = dict.seo[capability];

  const primaryHref = routeTo("contact");

  const secondaryHref =
    capability === "businessData" && locale !== "pt-br"
      ? "#company-discovery"
      : routeTo(SECONDARY_TARGET_BY_CAPABILITY[capability]);

  const breadcrumbSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "DeepB2B",
        item: `${SITE_ORIGIN}${routeTo("home")}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: copy.eyebrow,
        item: `${SITE_ORIGIN}${routeTo(capability)}`,
      },
    ],
  };

  return (
    <SiteLayout>
      <SeoHead
        title={seoCopy.title}
        description={seoCopy.description}
        jsonLd={[breadcrumbSchema]}
      />

      {/* Hero Header */}
      <section className="bg-[#040f21] text-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Breadcrumbs
            dark
            items={[
              { label: "DeepB2B", to: routeTo("home") },
              { label: copy.eyebrow },
            ]}
          />

          <div className="max-w-3xl">
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#ff6b00] mb-3">
              {copy.eyebrow}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-5">
              {copy.h1}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              {copy.lead}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={primaryHref}
                onClick={() =>
                  trackCtaClick(`capability_${capability}_primary`, locale, primaryHref)
                }
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff6b00] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#ea580c] transition-colors"
              >
                <span>{copy.primaryCta}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              {secondaryHref.startsWith("#") ? (
                <a
                  href={secondaryHref}
                  className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold text-white hover:border-[#ff6b00] hover:text-[#ff6b00] transition-colors"
                >
                  {copy.secondaryCta}
                </a>
              ) : (
                <Link
                  to={secondaryHref}
                  className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold text-white hover:border-[#ff6b00] hover:text-[#ff6b00] transition-colors"
                >
                  {copy.secondaryCta}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Core Highlights */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0f172a] mb-8">
            {copy.highlightsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {copy.highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm space-y-2.5"
              >
                <CheckCircle2 className="h-5 w-5 text-[#ff6b00]" aria-hidden="true" />
                <h3 className="text-lg font-extrabold text-[#0f172a]">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Provenance & Data Layers */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-extrabold text-[#0f172a] mb-6">
              {copy.dataLayersTitle}
            </h2>
            <div className="space-y-4">
              {copy.dataLayers.map((layer) => (
                <div
                  key={layer.title}
                  className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5 space-y-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-extrabold text-[#0f172a]">{layer.title}</h3>
                    <ProvenanceBadge type={layer.sourceType} />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {layer.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-[#0f172a] mb-6">
              {copy.useCasesTitle}
            </h2>
            <div className="space-y-4 mb-6">
              {copy.useCases.map((uc) => (
                <div
                  key={uc.audience}
                  className="rounded-2xl border border-slate-200 bg-[#040f21] p-6 text-white space-y-2"
                >
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#ff6b00]">
                    {uc.audience}
                  </span>
                  <p className="text-sm text-slate-200 leading-relaxed">{uc.scenario}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-sky-200 bg-sky-50 p-4 text-xs text-sky-950 flex items-start gap-2.5">
              <Info className="h-4 w-4 shrink-0 text-sky-700 mt-0.5" aria-hidden="true" />
              <p>{copy.availabilityNote}</p>
            </div>
          </div>
        </div>
      </section>

      {capability === "businessData" && <CompanyDiscoveryExperience showFieldMatrix />}
      {capability === "brazilMarketEntry" && <BrazilOpportunityDemo />}
    </SiteLayout>
  );
};

export default CapabilityPage;
