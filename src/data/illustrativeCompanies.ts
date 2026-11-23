import type { Locale } from "@/i18n/types";

export interface IllustrativeCompanyRecord {
  id: string;
  sectorTags: ("food" | "industrial-equipment" | "packaging" | "general")[];
  ufTags: string[];
  roleTag: "manufacturer" | "distributor";
  illustrativeCnpj: string;
  cnaeCode: string;
  official: {
    legalName: Record<Locale, string>;
    tradeName: Record<Locale, string>;
    activityLabel: Record<Locale, string>;
    cityState: string;
    size: string;
    status: Record<Locale, string>;
    foundingYear: number;
    qsaPreview: Record<Locale, string>;
  };
  external: {
    websiteSignal: Record<Locale, string>;
    digitalChannel: Record<Locale, string>;
  };
  ai: {
    fitScore: number;
    rationale: Record<Locale, string>;
  };
}

/**
 * Strictly illustrative sample profiles (masked CNPJs, placeholder names)
 * used solely to demonstrate data layering and query interpretation on the public website.
 */
export const ILLUSTRATIVE_COMPANIES: readonly IllustrativeCompanyRecord[] = [
  {
    id: "sample-food-sp",
    sectorTags: ["food", "general"],
    ufTags: ["SP"],
    roleTag: "manufacturer",
    illustrativeCnpj: "XX.XXX.104/0001-XX (Sample)",
    cnaeCode: "1099-6/99",
    official: {
      legalName: {
        en: "Paulista Alimentos Processados Ltda. (Illustrative)",
        "pt-br": "Paulista Alimentos Processados Ltda. (Ilustrativo)",
        es: "Paulista Alimentos Processados Ltda. (Ilustrativo)",
        "zh-cn": "Paulista 食品加工有限公司（结构示例）",
      },
      tradeName: {
        en: "Paulista Food Ingredients",
        "pt-br": "Paulista Ingredientes",
        es: "Paulista Ingredientes",
        "zh-cn": "Paulista 食品配料",
      },
      activityLabel: {
        en: "Manufacture of food products & industrial ingredients",
        "pt-br": "Fabricação de produtos alimentícios e insumos industriais",
        es: "Fabricación de productos alimenticios e insumos industriales",
        "zh-cn": "食品加工与工业食品配料制造",
      },
      cityState: "Campinas / SP",
      size: "EPP / Medium",
      status: {
        en: "ATIVA (Active — Official Registry)",
        "pt-br": "ATIVA (Receita Federal)",
        es: "ATIVA (Activa — Receita Federal)",
        "zh-cn": "正常在营 (ATIVA)",
      },
      foundingYear: 2011,
      qsaPreview: {
        en: "2 Managing Partners registered in QSA (unlocked inside platform)",
        "pt-br": "2 Sócios-Administradores no QSA (detalhes liberados na plataforma)",
        es: "2 Socios Administradores en QSA (detalle disponible dentro de la plataforma)",
        "zh-cn": "QSA 登记有 2 名执行股东（正式平台内按需查看）",
      },
    },
    external: {
      websiteSignal: {
        en: "Public B2B product catalog detected (industrial bulk packaging)",
        "pt-br": "Site corporativo com catálogo B2B e venda para indústrias",
        es: "Sitio corporativo con catálogo B2B y atención a plantas industriales",
        "zh-cn": "公开官网显示 B2B 工业包装与批量供货能力",
      },
      digitalChannel: {
        en: "Corporate domain & regional Maps listing verified publicly",
        "pt-br": "Domínio próprio e presença pública no Google Maps",
        es: "Dominio propio y presencia pública verificable en Google Maps",
        "zh-cn": "具备独立企业域名及公开商业地图记录",
      },
    },
    ai: {
      fitScore: 91,
      rationale: {
        en: "Matches food manufacturing CNAE in São Paulo interior logistics corridor; established operating history and industrial buyer profile.",
        "pt-br": "Aderente ao CNAE de fabricação de alimentos no polo de Campinas/SP; histórico consolidado e perfil comprador industrial.",
        es: "Coincide con CNAE de manufactura alimentaria en el corredor logístico de Campinas/SP; trayectoria consolidada y perfil comprador B2B.",
        "zh-cn": "高度匹配圣保罗州内陆食品制造业 CNAE 集群，经营年限较长，具备明确工业采购特征。",
      },
    },
  },
  {
    id: "sample-equip-dist-br",
    sectorTags: ["industrial-equipment", "general"],
    ufTags: ["SP", "MG", "SC", "PR"],
    roleTag: "distributor",
    illustrativeCnpj: "XX.XXX.482/0001-XX (Sample)",
    cnaeCode: "4663-0/00",
    official: {
      legalName: {
        en: "Suleste Máquinas e Equipamentos Comércio S.A. (Illustrative)",
        "pt-br": "Suleste Máquinas e Equipamentos Comércio Ltda. (Ilustrativo)",
        es: "Suleste Máquinas y Equipos Comercio Ltda. (Ilustrativo)",
        "zh-cn": "Suleste 工业机械设备经销有限公司（结构示例）",
      },
      tradeName: {
        en: "Suleste Industrial Distribution",
        "pt-br": "Suleste Distribuidora Industrial",
        es: "Suleste Distribuidora Industrial",
        "zh-cn": "Suleste 工业设备渠道商",
      },
      activityLabel: {
        en: "Wholesale trade of machinery, industrial equipment & parts",
        "pt-br": "Comércio atacadista de máquinas e equipamentos para uso industrial",
        es: "Comercio mayorista de maquinaria y equipos para uso industrial",
        "zh-cn": "工业用机械、设备及零配件批发贸易",
      },
      cityState: "Sorocaba / SP",
      size: "DEMAIS (Medium/Large)",
      status: {
        en: "ATIVA (Active — Official Registry)",
        "pt-br": "ATIVA (Receita Federal)",
        es: "ATIVA (Activa — Receita Federal)",
        "zh-cn": "正常在营 (ATIVA)",
      },
      foundingYear: 2008,
      qsaPreview: {
        en: "Corporate directors listed in QSA (unlocked inside platform)",
        "pt-br": "Quadro societário ativo identificado no QSA",
        es: "Directores y socios activos identificados en QSA",
        "zh-cn": "QSA 注册董事与股东架构完整（平台内按需核验）",
      },
    },
    external: {
      websiteSignal: {
        en: "Multi-brand industrial machinery distributor with technical service desk",
        "pt-br": "Distribuidora multimarcas com assistência técnica e atendimento B2B",
        es: "Distribuidora multimarca con soporte técnico y atención industrial B2B",
        "zh-cn": "官网展示多品牌工业设备代理及本地售后服务体系",
      },
      digitalChannel: {
        en: "Public procurement portal & B2B LinkedIn company presence",
        "pt-br": "Canal de cotação online e página corporativa ativa",
        es: "Portal público de cotización y presencia corporativa B2B",
        "zh-cn": "公开在线询价入口与活跃 B2B 企业主页",
      },
    },
    ai: {
      fitScore: 94,
      rationale: {
        en: "Wholesale machinery CNAE (4663-0/00) distinguishes genuine industrial distributor from end-user factories or retail stores.",
        "pt-br": "CNAE atacadista 4663-0/00 confirma atuação como distribuidora industrial, separando de varejo ou consumidor final.",
        es: "El CNAE mayorista 4663-0/00 distingue a un distribuidor industrial real de fábricas finales o comercios minoristas.",
        "zh-cn": "CNAE 4663-0/00 批发编码明确区分其为真正的工业设备经销商，而非零售或终端用户。",
      },
    },
  },
  {
    id: "sample-pack-pr",
    sectorTags: ["packaging", "general"],
    ufTags: ["PR", "SC", "RS"],
    roleTag: "manufacturer",
    illustrativeCnpj: "XX.XXX.719/0001-XX (Sample)",
    cnaeCode: "1731-1/00",
    official: {
      legalName: {
        en: "Araucária Embalagens Industriais Ltda. (Illustrative)",
        "pt-br": "Araucária Embalagens Industriais Ltda. (Ilustrativo)",
        es: "Araucária Empaques Industriales Ltda. (Ilustrativo)",
        "zh-cn": "Araucária 工业包装制造有限公司（结构示例）",
      },
      tradeName: {
        en: "Araucária Packaging Solutions",
        "pt-br": "Araucária Embalagens",
        es: "Araucária Empaques",
        "zh-cn": "Araucária 包装工业",
      },
      activityLabel: {
        en: "Manufacture of corrugated paperboard & industrial packaging",
        "pt-br": "Fabricação de embalagens de papelão ondulado e insumos",
        es: "Fabricación de empaques de cartón corrugado e insumos",
        "zh-cn": "瓦楞纸板及工业包装制品制造",
      },
      cityState: "São José dos Pinhais / PR",
      size: "EPP / Medium",
      status: {
        en: "ATIVA (Active — Official Registry)",
        "pt-br": "ATIVA (Receita Federal)",
        es: "ATIVA (Activa — Receita Federal)",
        "zh-cn": "正常在营 (ATIVA)",
      },
      foundingYear: 2014,
      qsaPreview: {
        en: "2 Registered Partners in QSA (details in authenticated view)",
        "pt-br": "2 Sócios registrados no QSA (acesso sob demanda na plataforma)",
        es: "2 Socios registrados en QSA (detalle en plataforma autenticada)",
        "zh-cn": "QSA 登记 2 名合伙股东（登录工作台查看详情）",
      },
    },
    external: {
      websiteSignal: {
        en: "Industrial packaging plant serving food & automotive clusters in Paraná",
        "pt-br": "Planta industrial atendendo indústrias de alimentos e autopeças no PR",
        es: "Planta industrial que abastece a sectores alimentario y automotriz en PR",
        "zh-cn": "工厂服务巴拉那州食品及汽车零部件产业带",
      },
      digitalChannel: {
        en: "Public factory address near Curitiba industrial corridor",
        "pt-br": "Endereço fabril verificado na região metropolitana de Curitiba",
        es: "Ubicación fabril pública en el corredor industrial de Curitiba",
        "zh-cn": "位于库里蒂巴工业走廊的公开厂区记录",
      },
    },
    ai: {
      fitScore: 89,
      rationale: {
        en: "Located in Greater Curitiba industrial hub with manufacturing CNAE; strong fit for machinery, resin, or B2B logistics offers.",
        "pt-br": "Localizada no polo industrial de Curitiba/PR com CNAE fabril ativo; alto encaixe para fornecedores industriais.",
        es: "Ubicada en el polo industrial de Curitiba/PR con CNAE manufacturero activo; alta afinidad para proveedores B2B.",
        "zh-cn": "位于库里蒂巴制造核心区且持有制造业 CNAE，适合工业原材料与设备采购对接。",
      },
    },
  },
] as const;
