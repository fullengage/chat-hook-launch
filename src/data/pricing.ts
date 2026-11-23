import type { Locale } from "@/i18n/types";

export interface PricingPlan {
  id: "professional" | "team" | "scale";
  priceBrl: number;
  credits: number;
  users: number;
  dailyLimit: number;
  topUpBrl: number;
  highlight: boolean;
  localized: Record<
    Locale,
    {
      name: string;
      badge: string;
      audience: string;
    }
  >;
}

export interface CreditActionItem {
  id: string;
  credits: number;
  localized: Record<
    Locale,
    {
      action: string;
      deliverable: string;
    }
  >;
}

export const PRICING_PLANS: readonly PricingPlan[] = [
  {
    id: "professional",
    priceBrl: 497,
    credits: 300,
    users: 3,
    dailyLimit: 150,
    topUpBrl: 0.9,
    highlight: false,
    localized: {
      en: {
        name: "1. Professional",
        badge: "Starter",
        audience: "For compact commercial teams of 2 to 3 reps.",
      },
      "pt-br": {
        name: "1. Profissional",
        badge: "Para começar",
        audience: "Para equipes de 2 a 3 vendedores.",
      },
      "zh-cn": {
        name: "1. 专业版 (Professional)",
        badge: "入门启动",
        audience: "适合 2–3 名商务人员的精简开发团队。",
      },
    },
  },
  {
    id: "team",
    priceBrl: 997,
    credits: 800,
    users: 5,
    dailyLimit: 300,
    topUpBrl: 0.8,
    highlight: true,
    localized: {
      en: {
        name: "2. Team",
        badge: "Most Popular",
        audience: "For growing B2B revenue and market-entry desks.",
      },
      "pt-br": {
        name: "2. Equipe",
        badge: "Mais escolhido",
        audience: "Para equipes comerciais em crescimento.",
      },
      "zh-cn": {
        name: "2. 团队版 (Team)",
        badge: "最受欢迎",
        audience: "适合持续扩编的巴西业务与大客户团队。",
      },
    },
  },
  {
    id: "scale",
    priceBrl: 1997,
    credits: 2000,
    users: 15,
    dailyLimit: 600,
    topUpBrl: 0.7,
    highlight: false,
    localized: {
      en: {
        name: "3. Scale",
        badge: "High Volume",
        audience: "For multi-unit operations and high-volume prospecting.",
      },
      "pt-br": {
        name: "3. Escala",
        badge: "Alto Volume",
        audience: "Para operações com várias equipes ou unidades.",
      },
      "zh-cn": {
        name: "3. 规模版 (Scale)",
        badge: "高容量",
        audience: "适合多部门协同或跨区域渠道拓展机构。",
      },
    },
  },
] as const;

export const CREDIT_ACTIONS: readonly CreditActionItem[] = [
  {
    id: "contact-lookup",
    credits: 1,
    localized: {
      en: {
        action: "Contact lookup",
        deliverable: "Phone, email, website, social channels, partners (QSA), and Google Maps context",
      },
      "pt-br": {
        action: "Pesquisa de contato",
        deliverable: "Telefone, e-mail, site, redes, sócios e Google Maps da empresa",
      },
      "zh-cn": {
        action: "基础联系线索查询",
        deliverable: "企业电话、邮箱、官网、社媒、股东（QSA）及地图公开信息",
      },
    },
  },
  {
    id: "financial-signals",
    credits: 1,
    localized: {
      en: {
        action: "Financial & registry signals",
        deliverable: "Receita Federal status, judicial recovery/bankruptcy, and federal debt (PGFN)",
      },
      "pt-br": {
        action: "Sinais financeiros",
        deliverable: "Situação na Receita Federal, recuperação judicial/falência e dívida ativa (PGFN)",
      },
      "zh-cn": {
        action: "官方注册与公共财务信号",
        deliverable: "联邦税务局在营状态、司法重整/破产记录及 PGFN 联邦欠税核查",
      },
    },
  },
  {
    id: "full-enrichment",
    credits: 5,
    localized: {
      en: {
        action: "Full AI enrichment",
        deliverable: "Complete contact + decision-maker LinkedIn + AI analysis and outreach draft",
      },
      "pt-br": {
        action: "Enriquecer tudo",
        deliverable: "Contato completo + LinkedIn do decisor + análise e abordagem por IA",
      },
      "zh-cn": {
        action: "全量 AI 深度富化",
        deliverable: "完整联系渠道 + 关键决策人领英线索 + AI 资质研判与切入建议",
      },
    },
  },
  {
    id: "export-list",
    credits: 1,
    localized: {
      en: {
        action: "Export list",
        deliverable: "Spreadsheet export (CSV/Excel) of up to 50 companies from your pipeline",
      },
      "pt-br": {
        action: "Baixar lista",
        deliverable: "Exportação de até 50 empresas do seu funil em planilha (CSV/Excel)",
      },
      "zh-cn": {
        action: "导出企业列表",
        deliverable: "将管线中最多 50 家巴西目标企业导出为 CSV/Excel 表格",
      },
    },
  },
  {
    id: "notary-protest",
    credits: 12,
    localized: {
      en: {
        action: "Notary protest check",
        deliverable: "Detailed notary protest lookup across Brazilian registries (enabled on request)",
      },
      "pt-br": {
        action: "Protesto em cartório",
        deliverable: "Consulta detalhada de protestos em cartório (habilitado sob pedido)",
      },
      "zh-cn": {
        action: "公证处拒付记录查询",
        deliverable: "巴西公证处详细商业拒付/抗议记录核查（需按需申请开通）",
      },
    },
  },
] as const;
