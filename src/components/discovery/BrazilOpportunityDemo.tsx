import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Compass,
  Factory,
  FileText,
  Globe2,
  Info,
  MapPin,
} from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";
import {
  ORIGIN_COUNTRIES,
  TARGET_SECTORS,
  type OriginCountryKey,
  type TargetSectorKey,
} from "@/data/opportunityScenarios";
import { trackCtaClick } from "@/services/analytics";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const DEMO_UI_COPY = {
  en: {
    eyebrow: "Brazil Opportunity Intelligence · Live Interactive Walkthrough",
    title: "Explore how foreign manufacturers map Brazilian buyers & distributors",
    subtitle:
      "Select your origin country and target sector — no Brazilian CNPJ or account required — to preview the exact market-entry intelligence workflow.",
    badgeNoCnpj: "Public Interactive Preview · No Brazilian CNPJ Required",
    badgeHonesty: "Live platform layers vs. conceptual scope clearly separated",
    originLabel: "Origin Country",
    sectorLabel: "Target Sector in Brazil",
    scenarioSummaryPrefix: "Market Entry Flow:",
    step1Title: "1. Buying Sectors in Brazil (End-User CNAEs)",
    step2Title: "2. Potential Distributors & Channel Partners",
    step3Title: "3. Priority Regional Clusters",
    step4Title: "4. Platform Readiness & Scope Separation",
    liveLabel: "Available Today in Platform (app.deepb2b.ai)",
    conceptualLabel: "Conceptual / Consultative Layer (Not Automated Screen)",
    ctaButton: "Request Tailored Brazil Opportunity Briefing",
    reportLink: "Read 2026 Industrial Machinery Sector Report",
  },
  "pt-br": {
    eyebrow: "Brazil Opportunity Intelligence · Demonstração Pública",
    title: "Veja como fabricantes estrangeiros mapeiam compradores e distribuidores no Brasil",
    subtitle:
      "Selecione país de origem e setor-alvo — sem exigir CNPJ ou login — para visualizar na prática a jornada de entrada no mercado brasileiro.",
    badgeNoCnpj: "Prévia Interativa Pública · Sem Exigir CNPJ",
    badgeHonesty: "Camadas ativas no app separadas de escopo conceitual/consultivo",
    originLabel: "País de Origem",
    sectorLabel: "Setor-Alvo no Brasil",
    scenarioSummaryPrefix: "Fluxo de Entrada no Mercado:",
    step1Title: "1. Setores Compradores no Brasil (CNAEs Finais)",
    step2Title: "2. Distribuidores Potenciais & Canais",
    step3Title: "3. Polos Regionais Prioritários",
    step4Title: "4. O que já roda no App vs. Camada Consultiva",
    liveLabel: "Disponível Hoje na Plataforma (app.deepb2b.ai)",
    conceptualLabel: "Protótipo Conceitual / Consultivo (Ainda Não Automatizado no App)",
    ctaButton: "Solicitar Briefing para Meu Setor",
    reportLink: "Ler Relatório Setorial 2026 (Máquinas Industriais)",
  },
  es: {
    eyebrow: "Brazil Opportunity Intelligence · Demostración Pública",
    title: "Descubra cómo empresas internacionales mapean compradores y distribuidores en Brasil",
    subtitle:
      "Seleccione el país de origen y sector objetivo — sin requerir CNPJ brasileño ni registro — para visualizar el flujo completo de entrada al mercado brasileño.",
    badgeNoCnpj: "Vista Previa Pública · Sin Exigir CNPJ Brasileño",
    badgeHonesty: "Capas activas en plataforma separadas de alcance conceptual",
    originLabel: "País de Origen",
    sectorLabel: "Sector Objetivo en Brasil",
    scenarioSummaryPrefix: "Flujo de Entrada a Brasil:",
    step1Title: "1. Sectores Compradores en Brasil (CNAE Final)",
    step2Title: "2. Distribuidores Potenciales y Canales",
    step3Title: "3. Polos Regionales Prioritarios",
    step4Title: "4. Disponible Hoy en App vs. Alcance Consultivo",
    liveLabel: "Disponible Hoy en Plataforma (app.deepb2b.ai)",
    conceptualLabel: "Prototipo Conceptual / Consultivo (Aún No Automatizado)",
    ctaButton: "Solicitar Briefing para Mi Sector",
    reportLink: "Leer Informe Sectorial 2026 (Maquinaria Industrial)",
  },
  "zh-cn": {
    eyebrow: "Brazil Opportunity Intelligence · 公开交互演示",
    title: "体验海外制造企业如何系统锁定巴西买家与区域经销商",
    subtitle:
      "无需巴西本地 CNPJ 税号或注册登录，选择您的来源国家与目标行业，即可预览进入巴西市场的实操情报路径。",
    badgeNoCnpj: "公开交互演示 · 无需巴西 CNPJ 税号",
    badgeHonesty: "严格区分当前已上线功能与概念/顾问服务层",
    originLabel: "企业来源国家",
    sectorLabel: "巴西目标行业",
    scenarioSummaryPrefix: "市场进入推演：",
    step1Title: "1. 巴西终端采购行业（CNAE 编码）",
    step2Title: "2. 潜在批发经销商与渠道结构",
    step3Title: "3. 巴西重点区域产业带",
    step4Title: "4. 平台现有能力 vs. 概念/顾问层",
    liveLabel: "当前平台已投产交付（app.deepb2b.ai）",
    conceptualLabel: "概念/顾问预览层（非工作台全自动界面）",
    ctaButton: "预约针对该行业的巴西市场简报",
    reportLink: "阅读《2026 巴西工业机械分销行业报告》",
  },
} as const;

export const BrazilOpportunityDemo: React.FC = () => {
  const { locale, routeTo, articleTo } = useLocale();
  const [origin, setOrigin] = useState<OriginCountryKey>("germany");
  const [sector, setSector] = useState<TargetSectorKey>("machinery");

  const ui = DEMO_UI_COPY[locale];
  const originObj =
    ORIGIN_COUNTRIES.find((c) => c.key === origin) ?? ORIGIN_COUNTRIES[0];
  const sectorObj =
    TARGET_SECTORS.find((s) => s.key === sector) ?? TARGET_SECTORS[0];

  const contactHref = `${routeTo("contact")}?country=${encodeURIComponent(
    originObj.queryParamValue,
  )}&sector=${encodeURIComponent(
    sectorObj.queryParamValue,
  )}&stage=seeking-distributors&purpose=find-distributors`;

  const reportHref = articleTo("brazil-industrial-machinery-distribution-report-2026");

  return (
    <section
      id="brazil-opportunity-intelligence"
      className="py-20 bg-[#040f21] text-white border-y border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl mb-10">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#ff6b00] mb-3">
            {ui.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            {ui.title}
          </h2>
          <p className="text-base text-slate-300 leading-relaxed mb-5">
            {ui.subtitle}
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-bold">
              {ui.badgeNoCnpj}
            </Badge>
            <Badge className="bg-amber-500/15 text-amber-300 border border-amber-500/30 font-bold">
              {ui.badgeHonesty}
            </Badge>
          </div>
        </div>

        {/* Interactive Origin + Sector Selectors */}
        <div className="rounded-3xl border border-white/15 bg-[#07152e] p-6 md:p-8 mb-8 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <span className="block text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">
                <Globe2 className="inline h-3.5 w-3.5 mr-1.5 text-[#ff6b00]" aria-hidden="true" />
                {ui.originLabel}
              </span>
              <div className="flex flex-wrap gap-2">
                {ORIGIN_COUNTRIES.map((c) => {
                  const active = c.key === origin;
                  return (
                    <button
                      key={c.key}
                      type="button"
                      onClick={() => setOrigin(c.key)}
                      className={`rounded-full px-4 py-2 text-xs font-bold border transition-colors ${
                        active
                          ? "bg-[#ff6b00] border-[#ff6b00] text-white"
                          : "bg-white/5 border-white/15 text-slate-200 hover:border-[#ff6b00]"
                      }`}
                    >
                      {c.label[locale]}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <span className="block text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">
                <Factory className="inline h-3.5 w-3.5 mr-1.5 text-[#ff6b00]" aria-hidden="true" />
                {ui.sectorLabel}
              </span>
              <div className="flex flex-wrap gap-2">
                {TARGET_SECTORS.map((s) => {
                  const active = s.key === sector;
                  return (
                    <button
                      key={s.key}
                      type="button"
                      onClick={() => setSector(s.key)}
                      className={`rounded-full px-4 py-2 text-xs font-bold border transition-colors ${
                        active
                          ? "bg-[#ff6b00] border-[#ff6b00] text-white"
                          : "bg-white/5 border-white/15 text-slate-200 hover:border-[#ff6b00]"
                      }`}
                    >
                      {s.label[locale]}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-4 flex flex-wrap items-center justify-between gap-3 text-sm">
            <div className="font-bold text-slate-100">
              <span className="text-[#ff6b00] mr-2">{ui.scenarioSummaryPrefix}</span>
              <span>
                {originObj.label[locale]} → {sectorObj.label[locale]} → Brazil
              </span>
            </div>
          </div>
        </div>

        {/* 4-Step Concrete Market Entry Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Step 1: Buying Sectors */}
          <Card className="rounded-3xl border border-white/10 bg-[#07152e] p-6 text-white space-y-4">
            <div className="flex items-center gap-2.5 text-[#ff6b00]">
              <Building2 className="h-5 w-5" aria-hidden="true" />
              <h3 className="text-base font-extrabold text-white">{ui.step1Title}</h3>
            </div>
            <div className="space-y-3">
              {sectorObj.buyingCnaes.map((item) => (
                <div
                  key={item.code}
                  className="rounded-2xl border border-white/10 bg-[#040f21] p-4"
                >
                  <span className="font-mono text-xs font-bold text-[#ff6b00]">
                    CNAE {item.code}
                  </span>
                  <p className="text-sm text-slate-200 mt-1">{item.label[locale]}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Step 2: Distributors & Channel Partners */}
          <Card className="rounded-3xl border border-white/10 bg-[#07152e] p-6 text-white space-y-4">
            <div className="flex items-center gap-2.5 text-[#ff6b00]">
              <Compass className="h-5 w-5" aria-hidden="true" />
              <h3 className="text-base font-extrabold text-white">{ui.step2Title}</h3>
            </div>
            <div className="space-y-3">
              {sectorObj.distributorCnaes.map((item) => (
                <div
                  key={item.code}
                  className="rounded-2xl border border-white/10 bg-[#040f21] p-4"
                >
                  <span className="font-mono text-xs font-bold text-emerald-400">
                    CNAE {item.code}
                  </span>
                  <p className="text-sm text-slate-200 mt-1">{item.label[locale]}</p>
                </div>
              ))}
              <p className="text-xs text-slate-300 leading-relaxed pt-1">
                {sectorObj.channelDistinction[locale]}
              </p>
            </div>
          </Card>

          {/* Step 3: Regional Clusters */}
          <Card className="rounded-3xl border border-white/10 bg-[#07152e] p-6 text-white space-y-4">
            <div className="flex items-center gap-2.5 text-[#ff6b00]">
              <MapPin className="h-5 w-5" aria-hidden="true" />
              <h3 className="text-base font-extrabold text-white">{ui.step3Title}</h3>
            </div>
            <div className="space-y-3">
              {sectorObj.regionalHubs.map((hub) => (
                <div
                  key={hub.state}
                  className="rounded-2xl border border-white/10 bg-[#040f21] p-4 space-y-1"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-extrabold text-sm text-[#ff6b00]">{hub.state}</span>
                    <span className="text-[11px] font-semibold text-slate-300">
                      {hub.cities}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {hub.focus[locale]}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* Step 4: Live vs. Conceptual Separation */}
          <Card className="rounded-3xl border border-white/10 bg-[#07152e] p-6 text-white space-y-4">
            <div className="flex items-center gap-2.5 text-[#ff6b00]">
              <Info className="h-5 w-5" aria-hidden="true" />
              <h3 className="text-base font-extrabold text-white">{ui.step4Title}</h3>
            </div>

            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/30 p-4 space-y-2">
              <span className="block text-[11px] font-extrabold uppercase tracking-wider text-emerald-300">
                {ui.liveLabel}
              </span>
              <ul className="space-y-1.5 text-xs text-slate-200">
                {sectorObj.livePlatformDeliverables[locale].map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-400 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-amber-500/30 bg-amber-950/30 p-4 space-y-2">
              <span className="block text-[11px] font-extrabold uppercase tracking-wider text-amber-300">
                {ui.conceptualLabel}
              </span>
              {sectorObj.consultativeConceptualLayers[locale].map((note) => (
                <p key={note} className="text-xs text-amber-100 leading-relaxed">
                  {note}
                </p>
              ))}
            </div>
          </Card>
        </div>

        {/* Direct Action Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-3xl border border-white/15 bg-[#07152e] p-6">
          <Link
            to={reportHref}
            onClick={() => trackCtaClick("opportunity_demo_report", locale, reportHref)}
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-200 hover:text-[#ff6b00] transition-colors"
          >
            <FileText className="h-4 w-4 text-[#ff6b00]" aria-hidden="true" />
            <span>{ui.reportLink}</span>
          </Link>

          <Link
            to={contactHref}
            onClick={() => trackCtaClick("opportunity_demo_cta", locale, contactHref)}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#ff6b00] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#ea580c] transition-colors"
          >
            <span>{ui.ctaButton}</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrazilOpportunityDemo;
