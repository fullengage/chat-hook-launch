import { ILLUSTRATIVE_COMPANIES, type IllustrativeCompanyRecord } from "@/data/illustrativeCompanies";
import type { Locale } from "@/i18n/types";

export interface InterpretedSearchResult {
  query: string;
  cnaeScope: string;
  regionScope: string;
  roleScope: string;
  sizeScope: string;
  statusScope: string;
  records: IllustrativeCompanyRecord[];
}

const REGION_RULES: { pattern: RegExp; uf: string; labels: Record<Locale, string> }[] = [
  {
    pattern: /s[aã]o paulo|campinas|sorocaba|\bsp\b|圣保罗/i,
    uf: "SP",
    labels: {
      en: "São Paulo (SP)",
      "pt-br": "São Paulo (SP)",
      "zh-cn": "圣保罗州 (SP)",
    },
  },
  {
    pattern: /paran[aá]|curitiba|\bpr\b|巴拉那/i,
    uf: "PR",
    labels: {
      en: "Paraná (PR)",
      "pt-br": "Paraná (PR)",
      "zh-cn": "巴拉那州 (PR)",
    },
  },
  {
    pattern: /santa catarina|joinville|\bsc\b/i,
    uf: "SC",
    labels: {
      en: "Santa Catarina (SC)",
      "pt-br": "Santa Catarina (SC)",
      "zh-cn": "圣卡塔琳娜州 (SC)",
    },
  },
  {
    pattern: /minas|belo horizonte|\bmg\b/i,
    uf: "MG",
    labels: {
      en: "Minas Gerais (MG)",
      "pt-br": "Minas Gerais (MG)",
      "zh-cn": "米纳斯吉拉斯州 (MG)",
    },
  },
];

/**
 * Deterministic multilingual interpreter that maps EN / PT-BR / ZH-CN queries
 * into structured Brazilian CNPJ/CNAE search criteria and illustrative records.
 */
export function interpretBusinessQuery(
  rawQuery: string,
  locale: Locale,
): InterpretedSearchResult {
  const query = rawQuery.trim();

  const isFood = /food|alimento|bebida|食品|饮料/i.test(query);
  const isPackaging = /packag|embalag|papel[aã]o|包装/i.test(query);
  const isEquipment = /equip|machin|industrial|m[aá]quina|设备|机械|工业/i.test(query);
  const isDistributor = /distribut|wholesal|importer|distribuidor|atacad|经销商|分销商|进口商/i.test(query);

  const regionMatch = REGION_RULES.find((r) => r.pattern.test(query));

  let cnaeScope: string;
  let sectorKey: "food" | "industrial-equipment" | "packaging" | "general" = "general";

  if (isPackaging) {
    sectorKey = "packaging";
    cnaeScope =
      locale === "pt-br"
        ? "Divisões 17 / 22 · Fabricação de embalagens (papelão e plástico)"
        : locale === "zh-cn"
          ? "CNAE 17 / 22 · 纸板与塑料工业包装制造"
          : "CNAE Divisions 17 / 22 · Packaging Manufacturing";
  } else if (isFood) {
    sectorKey = "food";
    cnaeScope =
      locale === "pt-br"
        ? "Divisão 10 · Fabricação de produtos alimentícios"
        : locale === "zh-cn"
          ? "CNAE 10 · 食品及工业配料制造业"
          : "CNAE Division 10 · Food Products Manufacturing";
  } else if (isEquipment || isDistributor) {
    sectorKey = "industrial-equipment";
    cnaeScope =
      locale === "pt-br"
        ? "CNAE 4663-0/00 · Comércio atacadista de máquinas e equipamentos industriais"
        : locale === "zh-cn"
          ? "CNAE 4663-0/00 · 工业机械与设备批发经销"
          : "CNAE 4663-0/00 · Wholesale Trade of Industrial Machinery & Equipment";
  } else {
    cnaeScope =
      locale === "pt-br"
        ? "Seleção automática de CNAEs aderentes via IA"
        : locale === "zh-cn"
          ? "由 AI 自动推荐匹配的巴西 CNAE 行业编码"
          : "AI-matched CNAE divisions based on business intent";
  }

  const regionScope = regionMatch
    ? regionMatch.labels[locale]
    : locale === "pt-br"
      ? "Todo o Brasil (prioridade Sudeste e Sul)"
      : locale === "zh-cn"
        ? "巴西全国（优先聚焦东南部与南部工业州）"
        : "Nationwide Brazil (All 26 States + DF)";

  const roleScope = isDistributor
    ? locale === "pt-br"
      ? "Distribuidores e Atacadistas B2B (exclui varejo)"
      : locale === "zh-cn"
        ? "B2B 经销商与批发商（自动剔除纯零售门店）"
        : "Wholesale Distributors & Channel Partners (retail excluded)"
    : locale === "pt-br"
      ? "Indústrias / Compradores B2B"
      : locale === "zh-cn"
        ? "本地制造企业与 B2B 采购主体"
        : "Manufacturers & Industrial B2B Buyers";

  const sizeScope =
    locale === "pt-br"
      ? "EPP e Médio/Grande Porte (Demais)"
      : locale === "zh-cn"
        ? "中小型成长企业（EPP）及大中型法人（Demais）"
        : "EPP (Small-Mid) & Medium/Large Corporate Entities";

  const statusScope =
    locale === "pt-br"
      ? "Somente CNPJs com situação ATIVA na Receita Federal"
      : locale === "zh-cn"
        ? "仅保留联邦税务局登记为在营（ATIVA）主体"
        : "ATIVA (Active legal status verified in Receita Federal)";

  const scored = ILLUSTRATIVE_COMPANIES.filter((item) => {
    if (sectorKey !== "general" && !item.sectorTags.includes(sectorKey)) {
      return false;
    }
    if (regionMatch && !item.ufTags.includes(regionMatch.uf)) {
      return false;
    }
    if (isDistributor && item.roleTag !== "distributor") {
      return false;
    }
    return true;
  });

  const records = scored.length > 0 ? scored : [...ILLUSTRATIVE_COMPANIES];

  return {
    query,
    cnaeScope,
    regionScope,
    roleScope,
    sizeScope,
    statusScope,
    records,
  };
}
