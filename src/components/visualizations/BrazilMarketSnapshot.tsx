import React from "react";
import { MapPin, Layers } from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";
import { ProvenanceBadge } from "@/components/discovery/ProvenanceBadge";

export const BrazilMarketSnapshot: React.FC = () => {
  const { dict } = useLocale();

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl mb-12">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#ff6b00] mb-3">
            {dict.marketSnapshot.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0f172a] mb-4">
            {dict.marketSnapshot.title}
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            {dict.marketSnapshot.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Structured Architecture Chart */}
          <div className="lg:col-span-6 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-2.5 mb-2">
              <Layers className="h-5 w-5 text-[#ff6b00]" aria-hidden="true" />
              <h3 className="text-lg font-extrabold text-[#0f172a]">
                {dict.marketSnapshot.architectureTitle}
              </h3>
            </div>
            <p className="text-xs text-slate-500 mb-6">{dict.marketSnapshot.architectureNote}</p>

            <div className="space-y-4">
              {dict.marketSnapshot.layers.map((layer) => (
                <div key={layer.name} className="space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold text-[#0f172a]">{layer.name}</span>
                    <ProvenanceBadge type={layer.provenance} />
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-[#040f21]"
                      style={{ width: `${layer.coverage}%` }}
                    />
                  </div>
                  <span className="block text-[11px] text-slate-500">{layer.scope}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Macro-Regional Brazilian Structure */}
          <div className="lg:col-span-6 rounded-3xl border border-slate-200 bg-[#040f21] p-6 md:p-8 text-white shadow-xl">
            <div className="flex items-center gap-2.5 mb-2">
              <MapPin className="h-5 w-5 text-[#ff6b00]" aria-hidden="true" />
              <h3 className="text-lg font-extrabold">{dict.marketSnapshot.regionsTitle}</h3>
            </div>
            <p className="text-xs text-slate-300 mb-6">{dict.marketSnapshot.regionsSubtitle}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {dict.marketSnapshot.regions.map((item) => (
                <div
                  key={item.region}
                  className="rounded-2xl border border-white/10 bg-[#07152e] p-4 space-y-2"
                >
                  <h4 className="text-sm font-extrabold text-[#ff6b00]">{item.region}</h4>
                  <p className="text-[11px] font-semibold text-slate-200">{item.hubs}</p>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.profile}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrazilMarketSnapshot;
