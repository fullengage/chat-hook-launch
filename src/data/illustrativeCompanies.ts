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
    id: "sample-food-sp-2",
    sectorTags: ["food", "general"],
    ufTags: ["SP"],
    roleTag: "manufacturer",
    illustrativeCnpj: "XX.XXX.219/0001-XX (Sample)",
    cnaeCode: "1069-4/00",
    official: {
      legalName: {
        en: "Ribeirão Agro-Food Processing S.A. (Illustrative)",
        "pt-br": "Ribeirão Nutrição & Grãos S.A. (Ilustrativo)",
        es: "Ribeirão Agroalimentos Procesados S.A. (Ilustrativo)",
        "zh-cn": "Ribeirão 农食加工股份有限公司（结构示例）",
      },
      tradeName: {
        en: "Ribeirão Agro-Food Processing",
        "pt-br": "Ribeirão Nutrição & Grãos",
        es: "Ribeirão Nutrición & Granos",
        "zh-cn": "Ribeirão 农食与谷物加工",
      },
      activityLabel: {
        en: "Grain milling & industrial plant-based food ingredients",
        "pt-br": "Moagem e fabricação de insumos alimentícios industriais",
        es: "Molienda y elaboración de insumos alimenticios industriales",
        "zh-cn": "谷物研磨及工业植物食品原料加工制造",
      },
      cityState: "Ribeirão Preto / SP",
      size: "DEMAIS (Medium/Large)",
      status: {
        en: "ATIVA (Active — Official Registry)",
        "pt-br": "ATIVA (Receita Federal)",
        es: "ATIVA (Activa — Receita Federal)",
        "zh-cn": "正常在营 (ATIVA)",
      },
      foundingYear: 2006,
      qsaPreview: {
        en: "3 Corporate Directors registered in QSA (unlocked inside platform)",
        "pt-br": "3 Diretores e Sócios no QSA (detalhes liberados na plataforma)",
        es: "3 Directores corporativos en QSA (detalle disponible dentro de la plataforma)",
        "zh-cn": "QSA 登记有 3 名企业董事（正式平台内按需查看）",
      },
    },
    external: {
      websiteSignal: {
        en: "Industrial B2B milling plant supplying bakery & food processors",
        "pt-br": "Site institucional com linhas industriais para panificação e indústrias",
        es: "Planta industrial con catálogo B2B para panificación y procesadoras",
        "zh-cn": "公开官网展示面向食品工厂与烘焙企业的工业级原料供应链",
      },
      digitalChannel: {
        en: "Verified corporate domain & institutional procurement contact channel",
        "pt-br": "Domínio corporativo verificado e canal comercial B2B público",
        es: "Dominio corporativo verificado y canal comercial B2B público",
        "zh-cn": "具备独立企业域名及公开大宗采购联系入口",
      },
    },
    ai: {
      fitScore: 88,
      rationale: {
        en: "Large agribusiness-to-food manufacturing operation in northern São Paulo; strong fit for processing lines, filtration, and packaging.",
        "pt-br": "Operação agroindustrial de médio/grande porte no interior de SP; alta aderência para máquinas, insumos e embalagens.",
        es: "Operación agroindustrial consolidada en el norte de São Paulo; alta afinidad para maquinaria, filtración y empaque.",
        "zh-cn": "圣保罗州北部大型农产食品加工企业，高度契合加工机械、过滤系统及工业包装采购需求。",
      },
    },
  },
  {
    id: "sample-food-sp-3",
    sectorTags: ["food", "general"],
    ufTags: ["SP"],
    roleTag: "manufacturer",
    illustrativeCnpj: "XX.XXX.356/0001-XX (Sample)",
    cnaeCode: "1122-4/99",
    official: {
      legalName: {
        en: "Paraibuna Bebidas e Extratos Ltda. (Illustrative)",
        "pt-br": "Vale do Paraíba Bebidas & Extratos Ltda. (Ilustrativo)",
        es: "Vale do Paraíba Bebidas y Extractos Ltda. (Ilustrativo)",
        "zh-cn": "Paraibuna 饮品与食品萃取有限公司（结构示例）",
      },
      tradeName: {
        en: "Paraibuna Beverage & Extracts",
        "pt-br": "Vale do Paraíba Bebidas & Extratos",
        es: "Vale do Paraíba Bebidas & Extractos",
        "zh-cn": "Paraibuna 饮品与萃取工业",
      },
      activityLabel: {
        en: "Manufacture of non-alcoholic beverages, concentrates & food extracts",
        "pt-br": "Fabricação de bebidas não alcoólicas, concentrados e extratos",
        es: "Fabricación de bebidas no alcohólicas, concentrados y extractos",
        "zh-cn": "非酒精饮料、浓缩液及食品萃取物制造",
      },
      cityState: "São José dos Campos / SP",
      size: "EPP / Medium",
      status: {
        en: "ATIVA (Active — Official Registry)",
        "pt-br": "ATIVA (Receita Federal)",
        es: "ATIVA (Activa — Receita Federal)",
        "zh-cn": "正常在营 (ATIVA)",
      },
      foundingYear: 2013,
      qsaPreview: {
        en: "2 Managing Partners registered in QSA (unlocked inside platform)",
        "pt-br": "2 Sócios-Administradores no QSA (acesso sob demanda na plataforma)",
        es: "2 Socios Administradores en QSA (detalle en plataforma autenticada)",
        "zh-cn": "QSA 登记有 2 名执行股东（登录工作台查看详情）",
      },
    },
    external: {
      websiteSignal: {
        en: "Contract bottling & beverage formulation lines in Dutra highway corridor",
        "pt-br": "Linhas de envase e formulação industrial no eixo Via Dutra (SP–RJ)",
        es: "Líneas de envasado y formulación industrial en el eje SP–RJ",
        "zh-cn": "位于圣保罗-里约工业走廊，公开展示代工灌装与配方研发产线",
      },
      digitalChannel: {
        en: "Active B2B website & industrial facility verified in São José dos Campos",
        "pt-br": "Site B2B ativo e planta industrial validada no Vale do Paraíba",
        es: "Sitio B2B activo y planta industrial verificada en São José dos Campos",
        "zh-cn": "官网活跃且圣若泽杜斯坎普斯工业区厂址信息公开可查",
      },
    },
    ai: {
      fitScore: 86,
      rationale: {
        en: "Strategic SP–RJ logistics position with active beverage & extract CNAE; relevant for filling equipment, cold-chain, and B2B ingredients.",
        "pt-br": "Posicionamento logístico estratégico no eixo SP–RJ com CNAE de bebidas; aderente para envase, ingredientes e automação.",
        es: "Ubicación logística estratégica SP–RJ con CNAE de bebidas y extractos; relevante para envasado, insumos y automatización.",
        "zh-cn": "地处圣保罗至里约核心物流走廊且持有饮料制造 CNAE，适合灌装设备、冷链与配料供应商对接。",
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
    id: "sample-equip-dist-mg",
    sectorTags: ["industrial-equipment", "general"],
    ufTags: ["MG", "SP"],
    roleTag: "distributor",
    illustrativeCnpj: "XX.XXX.531/0001-XX (Sample)",
    cnaeCode: "4663-0/00",
    official: {
      legalName: {
        en: "Minas Automação e Máquinas Industriais Ltda. (Illustrative)",
        "pt-br": "Minas Automação e Máquinas Industriais Ltda. (Ilustrativo)",
        es: "Minas Automatización y Máquinas Industriales Ltda. (Ilustrativo)",
        "zh-cn": "Minas 工业自动化与机械经销有限公司（结构示例）",
      },
      tradeName: {
        en: "Minas Industrial Machinery Hub",
        "pt-br": "Minas Automação & Máquinas",
        es: "Minas Automatización & Máquinas",
        "zh-cn": "Minas 工业机械渠道中心",
      },
      activityLabel: {
        en: "Wholesale trade of industrial machinery, drives & spare parts",
        "pt-br": "Comércio atacadista de máquinas, acionamentos e peças industriais",
        es: "Comercio mayorista de maquinaria industrial, accionamientos y repuestos",
        "zh-cn": "工业机械、传动系统及备件批发经销",
      },
      cityState: "Contagem / MG",
      size: "DEMAIS (Medium/Large)",
      status: {
        en: "ATIVA (Active — Official Registry)",
        "pt-br": "ATIVA (Receita Federal)",
        es: "ATIVA (Activa — Receita Federal)",
        "zh-cn": "正常在营 (ATIVA)",
      },
      foundingYear: 2009,
      qsaPreview: {
        en: "Corporate directors & engineering partners listed in QSA (platform view)",
        "pt-br": "Sócios-administradores identificados no QSA (detalhes na plataforma)",
        es: "Socios administradores identificados en QSA (detalle en plataforma)",
        "zh-cn": "QSA 注册董事及技术合伙架构完整（平台内按需查看）",
      },
    },
    external: {
      websiteSignal: {
        en: "Regional industrial equipment distributor serving mining & manufacturing hubs",
        "pt-br": "Distribuidora regional atendendo polos industriais e mineração em MG",
        es: "Distribuidora regional que atiende polos industriales y mineros en MG",
        "zh-cn": "公开渠道显示长期服务米纳斯吉拉斯州矿业与制造业的工业设备分销网络",
      },
      digitalChannel: {
        en: "Verified Contagem industrial park showroom & technical B2B portal",
        "pt-br": "Showroom técnico no polo industrial de Contagem e portal de cotações",
        es: "Showroom técnico en el parque industrial de Contagem y portal B2B",
        "zh-cn": "在孔塔任工业区设有公开展示中心与在线技术报价入口",
      },
    },
    ai: {
      fitScore: 90,
      rationale: {
        en: "Active 4663-0/00 distributor anchored in Contagem/MG industrial hub; high channel relevance for foreign OEMs expanding beyond SP.",
        "pt-br": "Distribuidora ativa no CNAE 4663-0/00 no polo de Contagem/MG; excelente canal para expansão fora do eixo SP.",
        es: "Distribuidora activa en CNAE 4663-0/00 en el polo de Contagem/MG; canal clave para expandir más allá de São Paulo.",
        "zh-cn": "位于米纳斯工业核心区且持有 4663-0/00 批发资质，适合海外设备制造商拓展圣保罗以外区域渠道。",
      },
    },
  },
  {
    id: "sample-equip-dist-sc",
    sectorTags: ["industrial-equipment", "general"],
    ufTags: ["SC", "PR", "SP"],
    roleTag: "distributor",
    illustrativeCnpj: "XX.XXX.608/0001-XX (Sample)",
    cnaeCode: "4663-0/00",
    official: {
      legalName: {
        en: "Catarinense Sistemas Industriais Ltda. (Illustrative)",
        "pt-br": "Catarinense Sistemas Industriais Ltda. (Ilustrativo)",
        es: "Catarinense Sistemas Industriales Ltda. (Ilustrativo)",
        "zh-cn": "Catarinense 工业系统经销有限公司（结构示例）",
      },
      tradeName: {
        en: "Joinville Automation & Machinery Dist.",
        "pt-br": "Catarinense Sistemas Industriais",
        es: "Catarinense Sistemas Industriales",
        "zh-cn": "若因维利自动化与机械分销商",
      },
      activityLabel: {
        en: "Wholesale distribution of industrial machinery, CNC & plant automation",
        "pt-br": "Distribuição atacadista de máquinas industriais e automação fabril",
        es: "Distribución mayorista de maquinaria industrial y automatización de planta",
        "zh-cn": "工业机械、数控设备及产线自动化系统批发分销",
      },
      cityState: "Joinville / SC",
      size: "EPP / Medium",
      status: {
        en: "ATIVA (Active — Official Registry)",
        "pt-br": "ATIVA (Receita Federal)",
        es: "ATIVA (Activa — Receita Federal)",
        "zh-cn": "正常在营 (ATIVA)",
      },
      foundingYear: 2012,
      qsaPreview: {
        en: "2 Managing Partners registered in QSA (unlocked inside platform)",
        "pt-br": "2 Sócios-Administradores no QSA (detalhes liberados na plataforma)",
        es: "2 Socios Administradores en QSA (detalle disponible en plataforma)",
        "zh-cn": "QSA 登记有 2 名执行股东（正式平台内按需查看）",
      },
    },
    external: {
      websiteSignal: {
        en: "Southern Brazil machinery channel with aftermarket engineering & parts stock",
        "pt-br": "Canal de máquinas no Sul do Brasil com estoque de peças e pós-venda",
        es: "Canal de maquinaria en el sur de Brasil con stock de repuestos y posventa",
        "zh-cn": "覆盖巴西南部的工业机械代理商，具备零配件库存与售后支持",
      },
      digitalChannel: {
        en: "Public Joinville corporate website & regional B2B catalog",
        "pt-br": "Domínio próprio e catálogo técnico voltado à indústria metalmecânica",
        es: "Dominio propio y catálogo técnico orientado al sector metalmecánico",
        "zh-cn": "具备独立官网及面向金属加工行业的公开产品目录",
      },
    },
    ai: {
      fitScore: 88,
      rationale: {
        en: "Positioned in Joinville's metalworking & machinery cluster with wholesale CNAE 4663-0/00; ideal partner profile for southern states.",
        "pt-br": "Inserida no polo metalmecânico de Joinville/SC com CNAE 4663-0/00; perfil ideal para representação e revenda no Sul.",
        es: "Ubicada en el clúster metalmecánico de Joinville/SC con CNAE 4663-0/00; socio estratégico para los estados del sur.",
        "zh-cn": "扎根圣卡塔琳娜州若因维利机械制造集群并持 4663-0/00 资质，是布局巴西南部渠道的优质合作伙伴。",
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
  {
    id: "sample-pack-pr-2",
    sectorTags: ["packaging", "general"],
    ufTags: ["PR", "SC", "RS"],
    roleTag: "manufacturer",
    illustrativeCnpj: "XX.XXX.842/0001-XX (Sample)",
    cnaeCode: "2222-6/00",
    official: {
      legalName: {
        en: "Londrina Embalagens Flexíveis S.A. (Illustrative)",
        "pt-br": "Londrina Embalagens Flexíveis S.A. (Ilustrativo)",
        es: "Londrina Empaques Flexibles S.A. (Ilustrativo)",
        "zh-cn": "Londrina 柔性工业包装股份有限公司（结构示例）",
      },
      tradeName: {
        en: "Londrina Flexible Industrial Films",
        "pt-br": "Londrina Embalagens Flexíveis",
        es: "Londrina Empaques Flexibles",
        "zh-cn": "Londrina 柔性薄膜包装",
      },
      activityLabel: {
        en: "Manufacture of flexible plastic packaging & industrial barrier films",
        "pt-br": "Fabricação de embalagens plásticas flexíveis e filmes industriais",
        es: "Fabricación de empaques plásticos flexibles y films industriales",
        "zh-cn": "塑料软包装及工业阻隔薄膜制造",
      },
      cityState: "Londrina / PR",
      size: "DEMAIS (Medium/Large)",
      status: {
        en: "ATIVA (Active — Official Registry)",
        "pt-br": "ATIVA (Receita Federal)",
        es: "ATIVA (Activa — Receita Federal)",
        "zh-cn": "正常在营 (ATIVA)",
      },
      foundingYear: 2007,
      qsaPreview: {
        en: "3 Registered Directors in QSA (details in authenticated view)",
        "pt-br": "3 Diretores registrados no QSA (detalhes liberados na plataforma)",
        es: "3 Directores registrados en QSA (detalle en plataforma autenticada)",
        "zh-cn": "QSA 登记有 3 名企业董事（登录工作台查看详情）",
      },
    },
    external: {
      websiteSignal: {
        en: "Extrusion & flexographic printing lines serving agribusiness & food brands",
        "pt-br": "Linhas de extrusão e flexografia para agroindústria e alimentos no Sul",
        es: "Líneas de extrusión y flexografía para agroindustria y alimentos",
        "zh-cn": "公开官网展示面向农业加工与食品品牌的多层共挤及柔印包装产线",
      },
      digitalChannel: {
        en: "Public corporate portal & verified Londrina manufacturing site",
        "pt-br": "Portal corporativo público e unidade fabril validada em Londrina",
        es: "Portal corporativo público y planta industrial verificada en Londrina",
        "zh-cn": "隆德里纳生产基地地址与企业官网信息公开可查",
      },
    },
    ai: {
      fitScore: 87,
      rationale: {
        en: "Active plastics packaging CNAE (2222-6/00) in northern Paraná agro-industrial belt; strong buyer profile for polymers, inks, and machinery.",
        "pt-br": "CNAE plástico 2222-6/00 no norte do PR com foco agroindustrial; alto potencial para resinas, tintas e equipamentos.",
        es: "CNAE plástico 2222-6/00 en el cinturón agroindustrial del norte de Paraná; alto potencial para resinas y maquinaria.",
        "zh-cn": "位于巴拉那州北部农工带并持 2222-6/00 塑料包装资质，是聚合物原料、油墨与吹膜印刷设备的典型买方。",
      },
    },
  },
  {
    id: "sample-pack-pr-3",
    sectorTags: ["packaging", "general"],
    ufTags: ["PR", "SC", "RS"],
    roleTag: "manufacturer",
    illustrativeCnpj: "XX.XXX.915/0001-XX (Sample)",
    cnaeCode: "1733-8/00",
    official: {
      legalName: {
        en: "Ponta Grossa Embalagens Técnicas Ltda. (Illustrative)",
        "pt-br": "Ponta Grossa Embalagens Técnicas Ltda. (Ilustrativo)",
        es: "Ponta Grossa Empaques Técnicos Ltda. (Ilustrativo)",
        "zh-cn": "Ponta Grossa 技术防护包装有限公司（结构示例）",
      },
      tradeName: {
        en: "Campos Gerais Protective Packaging",
        "pt-br": "Ponta Grossa Embalagens Técnicas",
        es: "Campos Gerais Empaques Técnicos",
        "zh-cn": "Campos Gerais 工业防护包装",
      },
      activityLabel: {
        en: "Manufacture of technical paperboard, pallet dividers & heavy-duty cartons",
        "pt-br": "Fabricação de chapas, divisórias e embalagens técnicas pesadas",
        es: "Fabricación de tableros de cartón, divisores y empaques técnicos",
        "zh-cn": "特种纸板、托盘隔板及重型工业防护纸箱制造",
      },
      cityState: "Ponta Grossa / PR",
      size: "EPP / Medium",
      status: {
        en: "ATIVA (Active — Official Registry)",
        "pt-br": "ATIVA (Receita Federal)",
        es: "ATIVA (Activa — Receita Federal)",
        "zh-cn": "正常在营 (ATIVA)",
      },
      foundingYear: 2015,
      qsaPreview: {
        en: "2 Registered Partners in QSA (details in authenticated view)",
        "pt-br": "2 Sócios registrados no QSA (acesso sob demanda na plataforma)",
        es: "2 Socios registrados en QSA (detalle en plataforma autenticada)",
        "zh-cn": "QSA 登记 2 名合伙股东（登录工作台查看详情）",
      },
    },
    external: {
      websiteSignal: {
        en: "Custom heavy-duty export crating & corrugated solutions near Campos Gerais plants",
        "pt-br": "Soluções sob medida de papelão pesado para indústrias dos Campos Gerais",
        es: "Soluciones de cartón de alta resistencia para plantas en Campos Gerais",
        "zh-cn": "公开信息显示面向 Campos Gerais 工业园提供重型出口纸箱与定制内衬方案",
      },
      digitalChannel: {
        en: "Corporate website & industrial park location confirmed in Ponta Grossa",
        "pt-br": "Domínio corporativo e localização fabril confirmada no distrito industrial",
        es: "Sitio corporativo y planta confirmada en el distrito industrial de Ponta Grossa",
        "zh-cn": "官网活跃且位于蓬塔格罗萨工业园的厂址信息公开可核验",
      },
    },
    ai: {
      fitScore: 85,
      rationale: {
        en: "Active 1733-8/00 manufacturer near major PR paper & beverage plants; consistent B2B demand for converting machinery and adhesives.",
        "pt-br": "Fabricante ativo (CNAE 1733-8/00) próximo ao polo papeleiro e fabril de Ponta Grossa/PR; perfil sólido de comprador B2B.",
        es: "Fabricante activo (CNAE 1733-8/00) cercano al polo papelero e industrial de Ponta Grossa/PR; perfil comprador sólido.",
        "zh-cn": "邻近巴拉那州造纸与食品制造集群并持有 1733-8/00 资质，对模切设备及工业胶黏剂具备稳定采购需求。",
      },
    },
  },
] as const;
