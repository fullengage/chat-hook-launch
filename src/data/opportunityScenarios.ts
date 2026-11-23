import type { Locale } from "@/i18n/types";

export type OriginCountryKey = "germany" | "china" | "usa" | "mexico" | "italy";
export type TargetSectorKey = "machinery" | "packaging" | "food" | "automation";

export interface OriginCountryOption {
  key: OriginCountryKey;
  label: Record<Locale, string>;
  queryParamValue: string;
}

export interface TargetSectorOption {
  key: TargetSectorKey;
  label: Record<Locale, string>;
  queryParamValue: string;
  buyingCnaes: { code: string; label: Record<Locale, string> }[];
  distributorCnaes: { code: string; label: Record<Locale, string> }[];
  channelDistinction: Record<Locale, string>;
  regionalHubs: { state: string; cities: string; focus: Record<Locale, string> }[];
  livePlatformDeliverables: Record<Locale, string[]>;
  consultativeConceptualLayers: Record<Locale, string[]>;
}

export const ORIGIN_COUNTRIES: readonly OriginCountryOption[] = [
  {
    key: "germany",
    queryParamValue: "Germany",
    label: { en: "Germany", "pt-br": "Alemanha", es: "Alemania", "zh-cn": "德国" },
  },
  {
    key: "china",
    queryParamValue: "China",
    label: { en: "China", "pt-br": "China", es: "China", "zh-cn": "中国" },
  },
  {
    key: "usa",
    queryParamValue: "United States",
    label: { en: "United States", "pt-br": "Estados Unidos", es: "Estados Unidos", "zh-cn": "美国" },
  },
  {
    key: "mexico",
    queryParamValue: "Mexico",
    label: { en: "Mexico", "pt-br": "México", es: "México", "zh-cn": "墨西哥" },
  },
  {
    key: "italy",
    queryParamValue: "Italy",
    label: { en: "Italy", "pt-br": "Itália", es: "Italia", "zh-cn": "意大利" },
  },
] as const;

export const TARGET_SECTORS: readonly TargetSectorOption[] = [
  {
    key: "machinery",
    queryParamValue: "Industrial Machinery",
    label: {
      en: "Industrial Machinery",
      "pt-br": "Máquinas e Equipamentos Industriais",
      es: "Maquinaria y Equipos Industriales",
      "zh-cn": "工业机械与设备",
    },
    buyingCnaes: [
      {
        code: "10xx / 17xx / 22xx",
        label: {
          en: "Food, Packaging & Plastics Plants (End-User Factories)",
          "pt-br": "Indústrias de Alimentos, Embalagens e Plásticos (Compradoras)",
          es: "Plantas de Alimentos, Empaques y Plásticos (Compradoras)",
          "zh-cn": "食品加工、包装与塑料制造工厂（终端买方）",
        },
      },
      {
        code: "25xx / 29xx",
        label: {
          en: "Metalworking, Tooling & Automotive Tier-1/2 Suppliers",
          "pt-br": "Metalurgia, Ferramentaria e Autopeças (Compradoras)",
          es: "Metalmecánica, Matricería y Autopartes (Compradoras)",
          "zh-cn": "金属加工、模具及汽车零部件配套工厂",
        },
      },
    ],
    distributorCnaes: [
      {
        code: "4663-0/00",
        label: {
          en: "Wholesale Trade of Industrial Machinery, Equipment & Parts",
          "pt-br": "Comércio atacadista de máquinas e equipamentos para uso industrial",
          es: "Comercio mayorista de maquinaria y equipos para uso industrial",
          "zh-cn": "工业用机械、设备及零配件批发贸易",
        },
      },
      {
        code: "3314-7/10",
        label: {
          en: "Industrial Machinery Maintenance & After-Sales Engineering (Secondary)",
          "pt-br": "Manutenção e reparação de máquinas industriais (CNAE secundário)",
          es: "Mantenimiento y reparación de maquinaria industrial (CNAE secundario)",
          "zh-cn": "工业机械维保与技术服务（辅助/兼营编码）",
        },
      },
    ],
    channelDistinction: {
      en: "Excludes CNAE 4614-1/00 (commission-only sales agents) and Division 47 retail to isolate stocking distributors with technical capacity.",
      "pt-br": "Separa CNAE 4663-0/00 (distribuidores com estoque) de 4614-1/00 (representantes comerciais comissionados) e do varejo (Divisão 47).",
      es: "Separa el CNAE 4663-0/00 (distribuidores con inventario) de 4614-1/00 (agentes comisionistas) y del comercio minorista (División 47).",
      "zh-cn": "剔除纯佣金代理（4614-1/00）及终端零售（47 类），锁定具备备货与售后能力的 4663-0/00 渠道商。",
    },
    regionalHubs: [
      {
        state: "SP",
        cities: "São Paulo, Campinas, Sorocaba, Piracicaba, ABC",
        focus: {
          en: "Highest concentration of national machinery importers, technical integrators, and industrial headquarters.",
          "pt-br": "Maior concentração de importadores nacionais de máquinas, integradores e sedes industriais.",
          es: "Mayor concentración de importadores nacionales de maquinaria, integradores y sedes industriales.",
          "zh-cn": "全国进口设备总部、技术集成商与制造工厂最集中的工业走廊。",
        },
      },
      {
        state: "PR / SC / RS",
        cities: "Curitiba, Joinville, Blumenau, Caxias do Sul",
        focus: {
          en: "Precision metalworking, agribusiness machinery, plastics, and export-oriented manufacturing clusters.",
          "pt-br": "Polos de metalmecânica de precisão, máquinas para agronegócio, plásticos e manufatura exportadora.",
          es: "Polos de metalmecánica de precisión, maquinaria agroindustrial, plásticos y manufactura exportadora.",
          "zh-cn": "精密机械、农机、塑料与出口导向型制造业核心集群。",
        },
      },
      {
        state: "MG",
        cities: "Belo Horizonte, Contagem, Betim, Uberlândia",
        focus: {
          en: "Mining equipment distributors, heavy industrial maintenance, and regional logistics.",
          "pt-br": "Distribuidores ligados a mineração, manutenção industrial pesada e logística.",
          es: "Distribuidores vinculados a minería, mantenimiento industrial pesado y logística regional.",
          "zh-cn": "矿业机械、重工维护及区域物流配套中心。",
        },
      },
    ],
    livePlatformDeliverables: {
      en: [
        "Active CNPJ entities filtered by CNAE 4663-0/00 & buyer divisions",
        "Official Receita Federal status, size (EPP / DEMAIS) & founding year",
        "Corporate partners (QSA) & public federal fiscal signals (PGFN)",
        "On-demand corporate channels & decision-maker verification inside the platform",
      ],
      "pt-br": [
        "CNPJs ativos filtrados por CNAE 4663-0/00 e divisões compradoras",
        "Situação na Receita Federal, porte (EPP / Demais) e ano de fundação",
        "Quadro societário (QSA) e sinais fiscais públicos (PGFN)",
        "Contatos corporativos e decisores verificados sob demanda na plataforma",
      ],
      es: [
        "Entidades CNPJ activas filtradas por CNAE 4663-0/00 y sectores compradores",
        "Situación oficial ante Receita Federal, tamaño (EPP / Demais) y año de fundación",
        "Cuadro societario (QSA) y señales fiscales públicas (PGFN)",
        "Canales corporativos y verificación de decisores bajo demanda dentro de la plataforma",
      ],
      "zh-cn": [
        "按 CNAE 4663-0/00 及目标采购行业筛选的在营 CNPJ 主体",
        "联邦税务局状态、企业规模（EPP / DEMAIS）及成立年限",
        "股东结构（QSA）与公共税务信号（PGFN）核查",
        "正式平台内按需核验企业联系方式与关键决策人",
      ],
    },
    consultativeConceptualLayers: {
      en: [
        "Conceptual Preview: NCM/HS import demand flow & trade show alignment (e.g., FEIMEC / Expomafe) — scoped via consultative briefing, not an automated app screen yet.",
      ],
      "pt-br": [
        "Protótipo Conceitual / Consultivo: cruzamento de demanda de importação (NCM) e calendário de feiras (ex.: FEIMEC / Expomafe) — atendido via briefing consultivo, ainda sem módulo automatizado no app.",
      ],
      es: [
        "Vista Conceptual / Consultiva: análisis de demanda de importación (NCM) y ferias industriales (ej. FEIMEC) — atendido mediante sesión consultiva, aún sin módulo automatizado en la app.",
      ],
      "zh-cn": [
        "概念/顾问预览层：巴西 NCM 进口需求趋势及行业展会（如 FEIMEC）匹配目前通过顾问演示交付，尚未在工作台内全自动上线。",
      ],
    },
  },
  {
    key: "packaging",
    queryParamValue: "Packaging & Polymers",
    label: {
      en: "Packaging & Polymers",
      "pt-br": "Embalagens e Polímeros",
      es: "Empaques y Polímeros",
      "zh-cn": "工业包装与高分子材料",
    },
    buyingCnaes: [
      {
        code: "10xx / 11xx",
        label: {
          en: "Food & Beverage Processing Plants",
          "pt-br": "Indústrias de Alimentos e Bebidas",
          es: "Industrias de Alimentos y Bebidas",
          "zh-cn": "食品及饮料灌装制造企业",
        },
      },
      {
        code: "2063-1 / 21xx",
        label: {
          en: "Cosmetics, Personal Care & Pharmaceutical Laboratories",
          "pt-br": "Cosméticos, Higiene Pessoal e Laboratórios Farmacêuticos",
          es: "Cosméticos, Cuidado Personal y Laboratorios Farmacéuticos",
          "zh-cn": "日化美妆及医药包装需求企业",
        },
      },
    ],
    distributorCnaes: [
      {
        code: "4686-9/02",
        label: {
          en: "Wholesale Trade of Packaging Materials",
          "pt-br": "Comércio atacadista de embalagens",
          es: "Comercio mayorista de materiales de empaque",
          "zh-cn": "工业及商业包装材料批发贸易",
        },
      },
      {
        code: "4684-2/99",
        label: {
          en: "Wholesale Trade of Industrial Polymers & Resins",
          "pt-br": "Comércio atacadista de resinas, polímeros e insumos químicos",
          es: "Comercio mayorista de resinas, polímeros e insumos químicos",
          "zh-cn": "塑料树脂与工业化工原料批发商",
        },
      },
    ],
    channelDistinction: {
      en: "Separates industrial packaging converters (1731-1 / 2222-6) from wholesale packaging distributors (4686-9/02).",
      "pt-br": "Distingue convertedores industriais (1731-1 / 2222-6) de distribuidores atacadistas de embalagens (4686-9/02).",
      es: "Distingue convertidores industriales (1731-1 / 2222-6) de distribuidores mayoristas de empaques (4686-9/02).",
      "zh-cn": "区分包装加工厂（1731-1 / 2222-6）与包装材料批发商（4686-9/02）。",
    },
    regionalHubs: [
      {
        state: "SP",
        cities: "Grande São Paulo, Jundiaí, Campinas, Ribeirão Preto",
        focus: {
          en: "National consumer-goods converting hub, pharma/cosmetic clusters, and polymer importers.",
          "pt-br": "Principal polo de conversão de embalagens, cosméticos, fármacos e importação de resinas.",
          es: "Principal polo de conversión de empaques, cosmética, farma e importadores de resinas.",
          "zh-cn": "消费品包装转换、医药日化及树脂进口核心区。",
        },
      },
      {
        state: "PR / SC",
        cities: "Curitiba, Joinville, Chapecó",
        focus: {
          en: "Corrugated board, flexible films, and chilled protein packaging demand.",
          "pt-br": "Papelão ondulado, filmes flexíveis e alta demanda de embalagens para proteína animal.",
          es: "Cartón corrugado, películas flexibles y alta demanda de empaques para proteína refrigerada.",
          "zh-cn": "瓦楞纸板、软包装及肉类冷链包装重点区域。",
        },
      },
    ],
    livePlatformDeliverables: {
      en: [
        "Targeted food, pharma, and cosmetics buyer queues ranked by ICP fit",
        "Active status, corporate size & QSA partner structure",
        "Competitor exclusion by primary/secondary CNAE",
        "CSV/Excel batch export inside the authenticated platform",
      ],
      "pt-br": [
        "Fila priorizada de indústrias de alimentos, fármacos e cosméticos por ICP",
        "Situação cadastral ativa, porte e quadro societário (QSA)",
        "Exclusão automática de concorrentes do mesmo CNAE",
        "Exportação CSV/Excel dentro da plataforma autenticada",
      ],
      es: [
        "Colas priorizadas de industrias de alimentos, farma y cosmética por afinidad ICP",
        "Situación registral activa, tamaño y estructura societaria (QSA)",
        "Exclusión automática de competidores del mismo CNAE",
        "Exportación en lotes CSV/Excel dentro de la plataforma",
      ],
      "zh-cn": [
        "按 ICP 评分排序的食品、医药与日化采购商队列",
        "在营状态、企业规模与 QSA 股东背景核验",
        "按主/兼营 CNAE 自动剔除同业竞争对手",
        "支持在平台内批量导出 CSV/Excel 列表",
      ],
    },
    consultativeConceptualLayers: {
      en: [
        "Conceptual Preview: Resin/packaging NCM import trends & sector trade show mapping — available via consultative briefing only.",
      ],
      "pt-br": [
        "Protótipo Conceitual / Consultivo: tendências de importação (NCM) e mapeamento de feiras do setor — entregue apenas via briefing consultivo.",
      ],
      es: [
        "Vista Conceptual / Consultiva: tendencias de importación (NCM) y mapeo de ferias sectoriales — entregado solo mediante briefing consultivo.",
      ],
      "zh-cn": [
        "概念/顾问预览层：NCM 塑料包装进口流量分析与行业展会协同目前以顾问调研形式提供。",
      ],
    },
  },
  {
    key: "food",
    queryParamValue: "Food Processing & Ingredients",
    label: {
      en: "Food Processing & Ingredients",
      "pt-br": "Alimentos e Ingredientes Industriais",
      es: "Alimentos e Ingredientes Industriales",
      "zh-cn": "食品加工与工业食品配料",
    },
    buyingCnaes: [
      {
        code: "1011–1099",
        label: {
          en: "Brazilian Food Manufacturers (Bakery, Dairy, Meat, Beverages)",
          "pt-br": "Indústrias Alimentícias (Panificação, Laticínios, Proteína, Bebidas)",
          es: "Industrias Alimentarias (Panificación, Lácteos, Cárnicos, Bebidas)",
          "zh-cn": "巴西食品制造工厂（烘焙、乳品、肉类、饮料）",
        },
      },
    ],
    distributorCnaes: [
      {
        code: "4639-7 / 4637-1",
        label: {
          en: "Wholesale Trade of Specialized Food & Industrial Ingredients",
          "pt-br": "Comércio atacadista de produtos alimentícios e ingredientes B2B",
          es: "Comercio mayorista de alimentos especializados e ingredientes B2B",
          "zh-cn": "食品与工业食品配料 B2B 批发进口商",
        },
      },
    ],
    channelDistinction: {
      en: "Filters out local restaurants and grocery supermarkets (CNAE 4711 / 5611) to surface industrial ingredient importers and B2B foodservice wholesalers.",
      "pt-br": "Remove supermercados e restaurantes (4711 / 5611) para isolar importadores de ingredientes e atacadistas B2B.",
      es: "Excluye supermercados y restaurantes locales (4711 / 5611) para aislar importadores de ingredientes y mayoristas B2B.",
      "zh-cn": "剔除终端餐饮与商超零售（4711 / 5611），精准保留食品配料进口商与 B2B 批发渠道。",
    },
    regionalHubs: [
      {
        state: "SP / MG",
        cities: "São Paulo, Campinas, Ribeirão Preto, Uberlândia",
        focus: {
          en: "Ingredient importers, beverage bottlers, and processed food headquarters.",
          "pt-br": "Importadores de aditivos/ingredientes, envasadoras de bebidas e grandes indústrias.",
          es: "Importadores de ingredientes/aditivos, embotelladoras y grandes plantas procesadoras.",
          "zh-cn": "食品添加剂进口商、饮料灌装与综合食品集团总部区。",
        },
      },
      {
        state: "PR / SC / RS",
        cities: "Cascavel, Chapecó, Porto Alegre, Londrina",
        focus: {
          en: "Cooperative agro-processors, dairy, poultry/pork processing, and grain transformation.",
          "pt-br": "Cooperativas agroindustriais, laticínios, frigoríficos e processamento de grãos.",
          es: "Cooperativas agroindustriales, lácteos, frigoríficos y procesamiento de granos.",
          "zh-cn": "农业合作社深加工、乳业、禽肉加工与粮食转化产业带。",
        },
      },
    ],
    livePlatformDeliverables: {
      en: [
        "Verified Brazilian food factories & B2B ingredient wholesalers",
        "Official CNPJ, CNAE, active status & corporate ownership (QSA)",
        "AI fit rationale referencing public website product lines",
        "Public PGFN tax regularity signals on demand",
      ],
      "pt-br": [
        "Indústrias alimentícias e atacadistas B2B verificados por CNAE",
        "CNPJ, porte, situação cadastral ativa e quadro societário (QSA)",
        "Racional de IA cruzando portfólio do site público",
        "Sinais públicos PGFN sob demanda",
      ],
      es: [
        "Fábricas de alimentos y mayoristas B2B verificados por CNAE",
        "CNPJ, tamaño, situación registral activa y socios (QSA)",
        "Justificación de IA contrastada con portafolio web público",
        "Señales fiscales públicas PGFN bajo demanda",
      ],
      "zh-cn": [
        "经 CNAE 核验的巴西食品工厂与工业配料批发商",
        "CNPJ、企业规模、在营状态及 QSA 股东架构",
        "结合企业官网产品线的 AI 匹配说明",
        "按需核查 PGFN 公共税务合规信号",
      ],
    },
    consultativeConceptualLayers: {
      en: [
        "Conceptual Preview: Ingredient import flows (NCM) & regulatory/ANVISA channel context — available via guided international briefing.",
      ],
      "pt-br": [
        "Protótipo Conceitual / Consultivo: fluxos de importação (NCM) e contexto de canais — disponível apenas por atendimento consultivo.",
      ],
      es: [
        "Vista Conceptual / Consultiva: flujos de importación (NCM) y contexto regulatorio/ANVISA — disponible mediante sesión consultiva.",
      ],
      "zh-cn": [
        "概念/顾问预览层：配料进口流向（NCM）与合规准入背景目前通过国际顾问演示提供。",
      ],
    },
  },
  {
    key: "automation",
    queryParamValue: "Industrial Automation & Components",
    label: {
      en: "Industrial Automation & Components",
      "pt-br": "Automação Industrial e Componentes",
      es: "Automatización Industrial y Componentes",
      "zh-cn": "工业自动化与核心零部件",
    },
    buyingCnaes: [
      {
        code: "28xx / 27xx",
        label: {
          en: "OEM Machinery Builders & Electrical Panel Manufacturers",
          "pt-br": "Fabricantes de Máquinas (OEM) e Painéis Elétricos",
          es: "Fabricantes de Maquinaria (OEM) y Tableros Eléctricos",
          "zh-cn": "本地机械 OEM 厂商与成套电控柜制造商",
        },
      },
    ],
    distributorCnaes: [
      {
        code: "4669-9/99 / 4673-7",
        label: {
          en: "Wholesale Trade of Industrial Automation, Sensors & Electrical Gear",
          "pt-br": "Comércio atacadista de equipamentos elétricos, automação e componentes",
          es: "Comercio mayorista de automatización industrial, sensores y equipo eléctrico",
          "zh-cn": "工业自动化、传感器及电气控制设备批发商",
        },
      },
    ],
    channelDistinction: {
      en: "Targets OEM machine builders and B2B technical distributors rather than residential electrical supply shops.",
      "pt-br": "Foca em integradores OEM e distribuidores técnicos B2B, filtrando lojas de material elétrico residencial.",
      es: "Se enfoca en integradores OEM y distribuidores técnicos B2B, excluyendo ferreterías eléctricas residenciales.",
      "zh-cn": "锁定 OEM 设备配套商与工业技术型分销商，排除民用五金建材零售店。",
    },
    regionalHubs: [
      {
        state: "SP / SC",
        cities: "São Paulo, Campinas, São Carlos, Joinville, Jaraguá do Sul",
        focus: {
          en: "Brazil's densest automation OEM, robotics, and electrical drive manufacturing belt.",
          "pt-br": "Principal cinturão brasileiro de OEMs de automação, acionamentos elétricos e integração.",
          es: "Principal cinturón brasileño de OEMs de automatización, accionamientos e integración industrial.",
          "zh-cn": "巴西工业自动化 OEM、电机驱动与系统集成最密集的产业带。",
        },
      },
      {
        state: "AM (Manaus)",
        cities: "Manaus Free Trade Zone (Polo Industrial de Manaus)",
        focus: {
          en: "High-volume electronics, two-wheeler, and appliance assembly plants.",
          "pt-br": "Plantas de eletroeletrônicos, duas rodas e linha branca com demanda contínua de automação.",
          es: "Plantas de electrónica, motocicletas y línea blanca con demanda continua de automatización.",
          "zh-cn": "玛瑙斯自贸区电子、家电与摩托车制造装配厂集群。",
        },
      },
    ],
    livePlatformDeliverables: {
      en: [
        "OEM builder & technical distributor lists filtered by CNAE & size",
        "Official CNPJ status, QSA partners & corporate website signals",
        "AI outreach framing tailored to engineering/procurement buyers",
      ],
      "pt-br": [
        "Listas de OEMs e distribuidores técnicos filtrados por CNAE e porte",
        "Situação cadastral, QSA e sinais de presença digital",
        "Sugestão de abordagem por IA orientada a compras/engenharia",
      ],
      es: [
        "Listas de integradores OEM y distribuidores técnicos filtrados por CNAE y tamaño",
        "Estado registral oficial, QSA y señales digitales corporativas",
        "Sugerencias de enfoque por IA orientadas a compras e ingeniería",
      ],
      "zh-cn": [
        "按 CNAE 与规模筛选的 OEM 厂及技术分销商名单",
        "官方在营状态、QSA 股东与官网业务信号",
        "面向采购与工程部门的 AI 切入建议",
      ],
    },
    consultativeConceptualLayers: {
      en: [
        "Conceptual Preview: Component NCM import dynamics & automation trade-fair mapping — delivered consultatively outside self-service.",
      ],
      "pt-br": [
        "Protótipo Conceitual / Consultivo: dinâmica de importação NCM e feiras de automação — escopo consultivo.",
      ],
      es: [
        "Vista Conceptual / Consultiva: dinámica de importación NCM y ferias de automatización — alcance consultivo.",
      ],
      "zh-cn": [
        "概念/顾问预览层：零部件 NCM 进口趋势与行业展会线索目前为顾问式支持。",
      ],
    },
  },
] as const;
