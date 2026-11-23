import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShieldCheck, Globe, Sparkles, Lock, ArrowRight, Info } from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";
import { interpretBusinessQuery } from "@/services/companyDiscoveryService";
import { trackCompanySearch, trackCtaClick } from "@/services/analytics";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ProvenanceBadge } from "./ProvenanceBadge";

interface CompanyDiscoveryExperienceProps {
  showFieldMatrix?: boolean;
}

export const CompanyDiscoveryExperience: React.FC<CompanyDiscoveryExperienceProps> = ({
  showFieldMatrix = false,
}) => {
  const { locale, dict, routeTo } = useLocale();
  const [query, setQuery] = useState(dict.discovery.sampleQueries[0]);
  const [activeQuery, setActiveQuery] = useState(dict.discovery.sampleQueries[0]);

  useEffect(() => {
    setQuery(dict.discovery.sampleQueries[0]);
    setActiveQuery(dict.discovery.sampleQueries[0]);
  }, [locale, dict]);

  const result = interpretBusinessQuery(activeQuery, locale);
  const gridClassName =
    result.records.length === 1
      ? "mx-auto max-w-2xl grid grid-cols-1 gap-6 mb-10"
      : result.records.length === 2
        ? "mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10"
        : "mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = query.trim() || dict.discovery.sampleQueries[0];
    setActiveQuery(cleaned);
    const interpreted = interpretBusinessQuery(cleaned, locale);
    trackCompanySearch(cleaned, locale, interpreted.cnaeScope);
  };

  const handlePresetClick = (sample: string) => {
    setQuery(sample);
    setActiveQuery(sample);
    const interpreted = interpretBusinessQuery(sample, locale);
    trackCompanySearch(sample, locale, interpreted.cnaeScope);
  };

  const ctaTarget = locale === "pt-br" ? "/teste-gratis" : routeTo("contact");

  return (
    <section id="company-discovery" className="py-20 bg-white border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#ff6b00] mb-3">
            {dict.discovery.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0f172a] mb-4">
            {dict.discovery.title}
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            {dict.discovery.subtitle}
          </p>
        </div>

        {/* Illustrative Notice Banner */}
        <div className="mx-auto max-w-5xl mb-8 rounded-2xl border border-amber-200 bg-amber-50/80 px-5 py-3.5 text-xs md:text-sm text-amber-950 flex items-start gap-3">
          <Info className="h-4 w-4 shrink-0 text-amber-700 mt-0.5" aria-hidden="true" />
          <p>{dict.discovery.illustrativeNotice}</p>
        </div>

        {/* Natural-Language Search Bar */}
        <div className="mx-auto max-w-4xl mb-8">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 rounded-2xl border-2 border-[#040f21] bg-white p-2 shadow-card"
          >
            <div className="relative flex-1 flex items-center">
              <Search className="ml-3 h-5 w-5 text-slate-400 shrink-0" aria-hidden="true" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={dict.discovery.inputPlaceholder}
                aria-label={dict.discovery.inputPlaceholder}
                className="border-0 bg-transparent text-sm md:text-base text-[#0f172a] focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <Button
              type="submit"
              className="rounded-xl bg-[#ff6b00] px-6 py-5 text-sm font-bold text-white hover:bg-[#ea580c] shrink-0"
            >
              {dict.discovery.searchButton}
            </Button>
          </form>

          {/* Sample Multilingual Queries */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500">
              {dict.discovery.sampleQueriesLabel}
            </span>
            {dict.discovery.sampleQueries.map((sample) => {
              const isSelected = activeQuery === sample;
              return (
                <button
                  key={sample}
                  type="button"
                  onClick={() => handlePresetClick(sample)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                    isSelected
                      ? "border-[#ff6b00] bg-[#fff7ed] text-[#c2410c] font-bold"
                      : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  {sample}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interpreted Brazilian Registry Criteria */}
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-[#f8fafc] p-6 mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 mb-5 border-b border-slate-200">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#040f21]">
              {dict.discovery.interpretedFiltersTitle}
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-bold text-slate-500 mr-1">
                {dict.discovery.provenanceLegendTitle}:
              </span>
              <ProvenanceBadge type="official" />
              <ProvenanceBadge type="external" />
              <ProvenanceBadge type="ai" />
              <ProvenanceBadge type="ondemand" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-xs">
            <div className="rounded-2xl bg-white border border-slate-200 p-3.5">
              <span className="block text-[11px] font-bold text-slate-500 mb-1">
                {dict.discovery.filterLabels.cnae}
              </span>
              <span className="font-bold text-[#0f172a]">{result.cnaeScope}</span>
            </div>
            <div className="rounded-2xl bg-white border border-slate-200 p-3.5">
              <span className="block text-[11px] font-bold text-slate-500 mb-1">
                {dict.discovery.filterLabels.region}
              </span>
              <span className="font-bold text-[#0f172a]">{result.regionScope}</span>
            </div>
            <div className="rounded-2xl bg-white border border-slate-200 p-3.5">
              <span className="block text-[11px] font-bold text-slate-500 mb-1">
                {dict.discovery.filterLabels.role}
              </span>
              <span className="font-bold text-[#0f172a]">{result.roleScope}</span>
            </div>
            <div className="rounded-2xl bg-white border border-slate-200 p-3.5">
              <span className="block text-[11px] font-bold text-slate-500 mb-1">
                {dict.discovery.filterLabels.size}
              </span>
              <span className="font-bold text-[#0f172a]">{result.sizeScope}</span>
            </div>
            <div className="rounded-2xl bg-white border border-slate-200 p-3.5">
              <span className="block text-[11px] font-bold text-slate-500 mb-1">
                {dict.discovery.filterLabels.status}
              </span>
              <span className="font-bold text-emerald-700">{result.statusScope}</span>
            </div>
          </div>
        </div>

        {/* Illustrative Company Cards with Strict 4-Layer Provenance */}
        <div className={gridClassName}>
          {result.records.map((company) => (
            <Card
              key={company.id}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between gap-5"
            >
              <div className="space-y-4">
                {/* Top Header */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="inline-block rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                      {dict.discovery.cardLabels.illustrativeBadge}
                    </span>
                    <h4 className="text-lg font-extrabold text-[#0f172a] leading-snug">
                      {company.official.tradeName[locale]}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {company.official.legalName[locale]}
                    </p>
                  </div>
                  <div className="shrink-0 rounded-2xl border border-amber-200 bg-amber-50 px-3 py-2 text-center">
                    <span className="block text-[10px] font-bold uppercase text-amber-800">
                      {dict.discovery.cardLabels.fitScoreLabel}
                    </span>
                    <span className="text-xl font-black text-[#ff6b00]">{company.ai.fitScore}</span>
                  </div>
                </div>

                {/* Layer 1: Official Public Registry */}
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-3.5 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 font-bold text-emerald-900">
                      <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                      {dict.discovery.cardLabels.officialSection}
                    </span>
                  </div>
                  <p className="font-mono text-[11px] text-slate-700">
                    CNPJ: {company.illustrativeCnpj} · CNAE {company.cnaeCode}
                  </p>
                  <p className="text-slate-700">{company.official.activityLabel[locale]}</p>
                  <p className="text-slate-600">
                    {company.official.cityState} · {company.official.size} · {company.official.status[locale]}
                  </p>
                  <p className="text-slate-600">{company.official.qsaPreview[locale]}</p>
                </div>

                {/* Layer 2: External Corporate Signals */}
                <div className="rounded-2xl border border-sky-200 bg-sky-50/50 p-3.5 space-y-1 text-xs">
                  <span className="inline-flex items-center gap-1.5 font-bold text-sky-900">
                    <Globe className="h-3.5 w-3.5" aria-hidden="true" />
                    {dict.discovery.cardLabels.externalSection}
                  </span>
                  <p className="text-slate-700">{company.external.websiteSignal[locale]}</p>
                  <p className="text-slate-600">{company.external.digitalChannel[locale]}</p>
                </div>

                {/* Layer 3: AI Rationale */}
                <div className="rounded-2xl border border-amber-200 bg-amber-50/40 p-3.5 space-y-1 text-xs">
                  <span className="inline-flex items-center gap-1.5 font-bold text-amber-900">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                    {dict.discovery.cardLabels.aiSection}
                  </span>
                  <p className="text-slate-700 leading-relaxed">{company.ai.rationale[locale]}</p>
                  <p className="text-[10px] font-semibold text-amber-800">
                    * {dict.discovery.cardLabels.fitDisclaimer}
                  </p>
                </div>
              </div>

              {/* Layer 4: Platform On-Demand Verification */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-[11px] text-slate-600 flex items-start gap-2">
                <Lock className="h-3.5 w-3.5 shrink-0 text-slate-500 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="font-bold text-slate-800 block">
                    {dict.discovery.cardLabels.ondemandSection}
                  </span>
                  <span>{dict.discovery.cardLabels.ondemandPlaceholder}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Field Support Matrix */}
        {showFieldMatrix && (
          <div className="mx-auto max-w-6xl mb-10 rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm">
            <div className="border-b border-slate-200 bg-[#040f21] px-6 py-5 text-white">
              <h3 className="text-lg font-extrabold">{dict.discovery.fieldSupportTitle}</h3>
              <p className="text-xs text-slate-300 mt-1">{dict.discovery.fieldSupportSubtitle}</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                    <th className="px-6 py-3.5 font-bold">{dict.discovery.fieldSupportColumns.field}</th>
                    <th className="px-6 py-3.5 font-bold">{dict.discovery.fieldSupportColumns.support}</th>
                    <th className="px-6 py-3.5 font-bold">{dict.discovery.fieldSupportColumns.source}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {dict.discovery.fieldSupportRows.map((row) => (
                    <tr key={row.field} className="hover:bg-slate-50/70">
                      <td className="px-6 py-4 font-bold text-[#0f172a]">{row.field}</td>
                      <td className="px-6 py-4 text-slate-600">{row.support}</td>
                      <td className="px-6 py-4">
                        <ProvenanceBadge type={row.source} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="text-center">
          <Link
            to={ctaTarget}
            onClick={() => trackCtaClick("discovery_preview_cta", locale, ctaTarget)}
            className="inline-flex items-center gap-2 rounded-full bg-[#040f21] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#07152e] transition-colors"
          >
            <span>{dict.discovery.exploreCta}</span>
            <ArrowRight className="h-4 w-4 text-[#ff6b00]" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CompanyDiscoveryExperience;
