import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Crown, Zap, TrendingUp, Info, ShieldAlert } from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";
import { CREDIT_ACTIONS, PRICING_PLANS } from "@/data/pricing";
import { trackCtaClick } from "@/services/analytics";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const PLAN_ICONS = {
  professional: Zap,
  team: Crown,
  scale: TrendingUp,
} as const;

export const PricingView: React.FC = () => {
  const { locale, dict, routeTo } = useLocale();
  const [adCpl, setAdCpl] = useState(80);
  const [planIdx, setPlanIdx] = useState(0);

  const selectedPlan = PRICING_PLANS[planIdx];
  const qualifiedCompanies = selectedPlan.credits / 2;
  const costPerCompanyBrl = selectedPlan.priceBrl / qualifiedCompanies;
  const equivalentAdLeads = Math.floor(selectedPlan.priceBrl / adCpl);

  const isBr = locale === "pt-br";
  const primaryPlanTarget = isBr ? "/teste-gratis" : routeTo("contact");

  const formatBrl = (amount: number) =>
    new Intl.NumberFormat(dict.intlLocale, {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: amount % 1 === 0 ? 0 : 2,
    }).format(amount);

  return (
    <div className="space-y-16">
      {/* Currency & Availability Notice */}
      <div className="mx-auto max-w-4xl rounded-2xl border border-sky-200 bg-sky-50 px-5 py-4 text-sm text-sky-950 flex items-start gap-3">
        <Info className="h-5 w-5 shrink-0 text-sky-700 mt-0.5" aria-hidden="true" />
        <p>{dict.pricing.currencyNotice}</p>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {PRICING_PLANS.map((plan) => {
          const Icon = PLAN_ICONS[plan.id];
          const copy = plan.localized[locale];
          return (
            <Card
              key={plan.id}
              className={`relative rounded-3xl p-8 flex flex-col justify-between border-2 transition-all ${
                plan.highlight
                  ? "border-[#ff6b00] bg-[#040f21] text-white shadow-2xl"
                  : "border-slate-200 bg-white text-[#0f172a] shadow-sm"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#ff6b00]">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {copy.badge}
                  </span>
                  {plan.highlight && (
                    <span className="rounded-full bg-[#ff6b00] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white">
                      {dict.pricing.mostPopular}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-extrabold mb-2">{copy.name}</h3>
                <p
                  className={`text-xs mb-6 ${
                    plan.highlight ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {copy.audience}
                </p>

                <div
                  className={`pb-6 mb-6 border-b flex items-baseline gap-1.5 ${
                    plan.highlight ? "border-white/10" : "border-slate-200"
                  }`}
                >
                  <span className="text-4xl font-black text-[#ff6b00]">
                    {formatBrl(plan.priceBrl)}
                  </span>
                  <span
                    className={`text-sm font-semibold ${
                      plan.highlight ? "text-slate-300" : "text-slate-500"
                    }`}
                  >
                    {dict.pricing.perMonth}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 text-sm">
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 shrink-0 text-[#ff6b00] mt-1" aria-hidden="true" />
                    <span>
                      <strong>{plan.credits.toLocaleString(dict.intlLocale)}</strong>{" "}
                      {dict.pricing.creditsPerMonth}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 shrink-0 text-[#ff6b00] mt-1" aria-hidden="true" />
                    <span>
                      <strong>{plan.users}</strong> {dict.pricing.usersIncluded}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 shrink-0 text-[#ff6b00] mt-1" aria-hidden="true" />
                    <span>
                      {dict.pricing.dailyLimit} <strong>{plan.dailyLimit}</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 shrink-0 text-[#ff6b00] mt-1" aria-hidden="true" />
                    <span>
                      {dict.pricing.topUpRate} <strong>{formatBrl(plan.topUpBrl)}</strong>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-2.5">
                <Button asChild className="w-full rounded-xl bg-[#ff6b00] hover:bg-[#ea580c] text-white font-bold h-12">
                  <Link
                    to={primaryPlanTarget}
                    onClick={() =>
                      trackCtaClick(`pricing_plan_${plan.id}`, locale, primaryPlanTarget)
                    }
                  >
                    {isBr ? dict.pricing.planCtaBr : dict.pricing.planCtaIntl}
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className={`w-full rounded-xl font-bold h-10 ${
                    plan.highlight
                      ? "border-white/20 bg-transparent text-white hover:bg-white/10"
                      : "border-slate-300 text-slate-700"
                  }`}
                >
                  <Link to={routeTo("contact")}>{dict.pricing.contactSalesCta}</Link>
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Global Enterprise & Brazil Free Trial Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="rounded-3xl border border-slate-200 bg-[#040f21] p-8 text-white flex flex-col justify-between gap-6">
          <div>
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#ff6b00] mb-2">
              Enterprise
            </span>
            <h3 className="text-2xl font-extrabold mb-3">{dict.pricing.enterpriseTitle}</h3>
            <p className="text-sm text-slate-300 mb-6">{dict.pricing.enterpriseSubtitle}</p>
            <ul className="space-y-3 text-sm text-slate-200">
              {dict.pricing.enterpriseFeatures.map((feat) => (
                <li key={feat} className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 shrink-0 text-[#ff6b00] mt-1" aria-hidden="true" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
          <Button asChild className="w-full sm:w-fit rounded-full bg-[#ff6b00] hover:bg-[#ea580c] px-7 py-5 font-bold text-white">
            <Link
              to={routeTo("contact")}
              onClick={() => trackCtaClick("pricing_enterprise_demo", locale, routeTo("contact"))}
            >
              {dict.pricing.enterpriseCta}
            </Link>
          </Button>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 flex flex-col justify-between gap-6">
          <div>
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-emerald-700 mb-2">
              Brazil CNPJ Trial
            </span>
            <h3 className="text-2xl font-extrabold text-[#0f172a] mb-2">
              {dict.pricing.trialCardTitle}
            </h3>
            <p className="text-sm text-slate-600 mb-6">{dict.pricing.trialCardSubtitle}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {dict.pricing.trialOptions.map((opt) => (
                <div key={opt.label} className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-4">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#ff6b00] block mb-1">
                    {opt.label}
                  </span>
                  <p className="font-extrabold text-sm text-[#0f172a] mb-1">{opt.title}</p>
                  <p className="text-xs text-slate-600">{opt.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <Button asChild variant="outline" className="w-full sm:w-fit rounded-full border-[#040f21] text-[#040f21] font-bold px-7 py-5 hover:bg-[#040f21] hover:text-white">
            <Link to="/teste-gratis">{dict.pricing.planCtaBr}</Link>
          </Button>
        </div>
      </div>

      {/* Credit Cost Table */}
      <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm">
        <div className="bg-[#040f21] px-6 py-6 text-white">
          <h3 className="text-xl md:text-2xl font-extrabold">{dict.pricing.creditTableTitle}</h3>
          <p className="text-xs md:text-sm text-slate-300 mt-1">
            {dict.pricing.creditTableSubtitle}
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                <th className="px-6 py-4 font-bold">{dict.pricing.creditTableHeaders.action}</th>
                <th className="px-6 py-4 font-bold">{dict.pricing.creditTableHeaders.deliverable}</th>
                <th className="px-6 py-4 font-bold text-right">{dict.pricing.creditTableHeaders.cost}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {CREDIT_ACTIONS.map((item) => {
                const copy = item.localized[locale];
                return (
                  <tr key={item.id} className="hover:bg-slate-50/70">
                    <td className="px-6 py-4 font-bold text-[#0f172a] whitespace-nowrap">
                      {copy.action}
                    </td>
                    <td className="px-6 py-4 text-slate-600">{copy.deliverable}</td>
                    <td className="px-6 py-4 text-right whitespace-nowrap">
                      <span className="inline-block rounded-full bg-[#fff7ed] border border-orange-200 px-3 py-1 text-xs font-black text-[#c2410c]">
                        {item.credits} {dict.pricing.creditUnitLabel}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#f8fafc] p-6 border-t border-slate-200 text-xs text-slate-600">
          {dict.pricing.rules.map((rule) => (
            <div key={rule.title} className="rounded-2xl border border-slate-200 bg-white p-4">
              <strong className="block text-[#0f172a] mb-1">{rule.title}</strong>
              <span>{rule.description}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive ROI Benchmark Simulator */}
      <div className="rounded-3xl border border-slate-200 bg-[#f8fafc] p-6 md:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-5">
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#0f172a]">
              {dict.pricing.simulatorTitle}
            </h3>
            <p className="text-sm text-slate-600">{dict.pricing.simulatorSubtitle}</p>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-5">
              <div>
                <div className="flex justify-between text-xs font-bold text-[#0f172a] mb-2">
                  <label htmlFor="deepb2b-sim-cpl">{dict.pricing.simulatorAdCplLabel}</label>
                  <span className="text-[#ff6b00]">{formatBrl(adCpl)}</span>
                </div>
                <input
                  id="deepb2b-sim-cpl"
                  type="range"
                  min={10}
                  max={500}
                  step={5}
                  value={adCpl}
                  onChange={(e) => setAdCpl(Number(e.target.value))}
                  className="w-full accent-[#ff6b00]"
                />
              </div>

              <div>
                <span className="block text-xs font-bold text-[#0f172a] mb-2">
                  {dict.pricing.simulatorPlanLabel}
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {PRICING_PLANS.map((p, idx) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPlanIdx(idx)}
                      className={`rounded-xl border px-3 py-2 text-xs font-bold transition-colors ${
                        idx === planIdx
                          ? "border-[#ff6b00] bg-[#ff6b00] text-white"
                          : "border-slate-200 bg-slate-50 text-slate-800 hover:border-[#ff6b00]"
                      }`}
                    >
                      {p.localized[locale].name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-3xl bg-[#040f21] p-6 md:p-8 text-white">
            <h4 className="text-xl font-extrabold mb-5">
              {selectedPlan.localized[locale].name}: {formatBrl(selectedPlan.priceBrl)}
              {dict.pricing.perMonth}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="text-xs text-slate-300 block mb-1">
                  {dict.pricing.simulatorDeepB2BResult}
                </span>
                <div className="text-3xl font-black text-[#ff6b00]">
                  {qualifiedCompanies.toLocaleString(dict.intlLocale)}
                </div>
                <span className="text-xs text-slate-400">
                  {dict.pricing.simulatorEach} {formatBrl(costPerCompanyBrl)}
                </span>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="text-xs text-slate-300 block mb-1">
                  {dict.pricing.simulatorAdResult}
                </span>
                <div className="text-3xl font-black">
                  {equivalentAdLeads.toLocaleString(dict.intlLocale)}
                </div>
                <span className="text-xs text-slate-400">
                  {dict.pricing.simulatorEach} {formatBrl(adCpl)}
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {dict.pricing.simulatorMethodologyNote}
            </p>
          </div>
        </div>
      </div>

      {/* Legal Disclaimer */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 text-xs text-slate-600 flex items-start gap-3">
        <ShieldAlert className="h-4 w-4 shrink-0 text-[#ff6b00] mt-0.5" aria-hidden="true" />
        <p>{dict.pricing.financialDisclaimer}</p>
      </div>
    </div>
  );
};

export default PricingView;
