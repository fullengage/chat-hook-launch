import type { Locale } from "@/i18n/types";

/**
 * Calendário de feiras (Event Intelligence).
 * Regra editorial: só entra o que foi conferido no site oficial (source + checkedAt).
 * Números de mercado: contagem de estabelecimentos ATIVOS (a base só carrega ativos, confirmado em 25/11/2026) por CNAE principal na base pública da Receita Federal
 * usada pela plataforma DeepB2B (edição out/2026). São contagens de registros, não estimativa de compradores.
 * ponytail: lista estática até a base consolidada do app existir; depois o build lê da API e gera as páginas.
 */

export interface MarketRow {
  cnae: string; // "4646-0/01" ou "Divisão 10"
  label: Record<Locale, string>;
  br: number;
  sp: number;
}

export interface TradeShowCopy {
  sector: string;
  summary: string;
  exhibitors: string;
  buyers: string;
}

export interface TradeShow {
  slug: string;
  name: string;
  start: string; // ISO
  end: string;
  venue: string;
  address: string;
  city: string;
  uf: string;
  organizer?: string; // só quando confirmado no site oficial
  officialUrl: string;
  sourceUrl: string;
  checkedAt: string; // data em que conferimos no site oficial
  copy: Record<Locale, TradeShowCopy>;
  market: MarketRow[];
}

export const MARKET_DATA_EDITION = "2026-10";

const SAO_PAULO_EXPO = { venue: "São Paulo Expo", address: "Rodovia dos Imigrantes, km 1,5 – Vila Água Funda, São Paulo – SP" };

export const TRADE_SHOWS: TradeShow[] = [
  {
    slug: "feicon",
    name: "FEICON",
    start: "2027-04-06",
    end: "2027-04-09",
    ...SAO_PAULO_EXPO,
    city: "São Paulo",
    uf: "SP",
    organizer: "RX",
    officialUrl: "https://www.feicon.com.br",
    sourceUrl: "https://www.feicon.com.br/pt-br/Visitar/planeje-sua-visita.html",
    checkedAt: "2026-11-25",
    copy: {
      "pt-br": {
        sector: "Construção civil e materiais de construção",
        summary: "A FEICON reúne a cadeia da construção civil em São Paulo: fabricantes de materiais, acabamentos, ferramentas e sistemas construtivos, com visitação de lojistas, construtoras, arquitetos e engenheiros.",
        exhibitors: "Indústrias de materiais de construção, revestimentos, louças e metais, ferramentas, tintas, esquadrias e soluções para obra.",
        buyers: "Revendas e home centers, atacadistas de materiais de construção, construtoras e incorporadoras, profissionais de arquitetura e engenharia.",
      },
      en: {
        sector: "Construction and building materials",
        summary: "FEICON brings together Brazil's construction supply chain in São Paulo: manufacturers of building materials, finishes, tools and construction systems, visited by retailers, builders, architects and engineers.",
        exhibitors: "Manufacturers of building materials, tiles, sanitaryware and fittings, tools, paints, windows and doors, and jobsite solutions.",
        buyers: "Building-material retailers and home centers, wholesalers, construction companies and developers, architects and engineers.",
      },
      es: {
        sector: "Construcción civil y materiales de construcción",
        summary: "FEICON reúne en São Paulo la cadena de la construcción civil de Brasil: fabricantes de materiales, acabados, herramientas y sistemas constructivos, con visitas de minoristas, constructoras, arquitectos e ingenieros.",
        exhibitors: "Fabricantes de materiales de construcción, revestimientos, loza y grifería, herramientas, pinturas, aberturas y soluciones para obra.",
        buyers: "Tiendas de materiales y home centers, mayoristas, constructoras e inmobiliarias, arquitectos e ingenieros.",
      },
      "zh-cn": {
        sector: "建筑与建材",
        summary: "FEICON 在圣保罗汇聚巴西建筑产业链：建材、装饰材料、工具和建筑系统制造商，观众包括零售商、建筑公司、建筑师和工程师。",
        exhibitors: "建材、瓷砖、卫浴五金、工具、涂料、门窗及施工解决方案制造商。",
        buyers: "建材零售商与家居建材中心、批发商、建筑公司与开发商、建筑师和工程师。",
      },
    },
    market: [
      { cnae: "4679-6/99", label: { "pt-br": "Atacado de materiais de construção em geral", en: "Building materials wholesale", es: "Mayoristas de materiales de construcción", "zh-cn": "建材批发" }, br: 8941, sp: 1851 },
      { cnae: "4744-0/99", label: { "pt-br": "Varejo de materiais de construção em geral", en: "Building materials retail", es: "Minoristas de materiales de construcción", "zh-cn": "建材零售" }, br: 185333, sp: 33802 },
      { cnae: "4744-0/01", label: { "pt-br": "Varejo de ferragens e ferramentas", en: "Hardware and tools retail", es: "Ferreterías y herramientas", "zh-cn": "五金工具零售" }, br: 74574, sp: 22965 },
      { cnae: "4120-4/00", label: { "pt-br": "Construção de edifícios", en: "Building construction companies", es: "Construcción de edificios", "zh-cn": "房屋建筑" }, br: 181848, sp: 35384 },
    ],
  },
  {
    slug: "hospitalar",
    name: "Hospitalar",
    start: "2027-05-18",
    end: "2027-05-21",
    ...SAO_PAULO_EXPO,
    city: "São Paulo",
    uf: "SP",
    organizer: "Informa Markets",
    officialUrl: "https://www.hospitalar.com",
    sourceUrl: "https://www.hospitalar.com",
    checkedAt: "2026-11-25",
    copy: {
      "pt-br": {
        sector: "Saúde, equipamentos e produtos hospitalares",
        summary: "A Hospitalar é o principal encontro do setor de saúde em São Paulo, com fornecedores de equipamentos, produtos, tecnologia e serviços para hospitais, clínicas e laboratórios.",
        exhibitors: "Fabricantes e importadores de equipamentos médico-hospitalares, materiais e descartáveis, tecnologia em saúde, mobiliário hospitalar e serviços.",
        buyers: "Hospitais e redes de saúde, clínicas e centros de diagnóstico, distribuidores de materiais médico-hospitalares, gestores de compras e engenharia clínica.",
      },
      en: {
        sector: "Healthcare, medical equipment and hospital supplies",
        summary: "Hospitalar is the leading healthcare business event in São Paulo, with suppliers of equipment, products, technology and services for hospitals, clinics and laboratories.",
        exhibitors: "Manufacturers and importers of medical equipment, supplies and disposables, health technology, hospital furniture and services.",
        buyers: "Hospitals and healthcare networks, clinics and diagnostic centers, medical-supply distributors, procurement and clinical engineering managers.",
      },
      es: {
        sector: "Salud, equipos y productos hospitalarios",
        summary: "Hospitalar es el principal encuentro del sector salud en São Paulo, con proveedores de equipos, productos, tecnología y servicios para hospitales, clínicas y laboratorios.",
        exhibitors: "Fabricantes e importadores de equipos médico-hospitalarios, insumos y descartables, tecnología en salud, mobiliario hospitalario y servicios.",
        buyers: "Hospitales y redes de salud, clínicas y centros de diagnóstico, distribuidores de insumos médicos, responsables de compras e ingeniería clínica.",
      },
      "zh-cn": {
        sector: "医疗、医疗设备与医院用品",
        summary: "Hospitalar 是圣保罗最重要的医疗行业商务展会，汇集面向医院、诊所和实验室的设备、产品、技术与服务供应商。",
        exhibitors: "医疗设备、耗材与一次性用品、医疗科技、医院家具及服务的制造商和进口商。",
        buyers: "医院与医疗集团、诊所与诊断中心、医疗用品分销商、采购及临床工程负责人。",
      },
    },
    market: [
      { cnae: "8610-1/01", label: { "pt-br": "Atendimento hospitalar", en: "Hospitals", es: "Atención hospitalaria", "zh-cn": "医院" }, br: 29435, sp: 4064 },
      { cnae: "8610-1/02", label: { "pt-br": "Pronto-socorro e unidades de urgência", en: "Emergency and urgent-care units", es: "Urgencias y unidades de emergencia", "zh-cn": "急诊与急救单位" }, br: 49348, sp: 10440 },
      { cnae: "8630-5/03", label: { "pt-br": "Clínicas médicas ambulatoriais", en: "Outpatient medical clinics", es: "Clínicas médicas ambulatorias", "zh-cn": "门诊诊所" }, br: 226132, sp: 71384 },
      { cnae: "4645-1/01", label: { "pt-br": "Atacado de materiais médico-hospitalares", en: "Medical and hospital supplies wholesale", es: "Mayoristas de insumos médico-hospitalarios", "zh-cn": "医疗用品批发" }, br: 10986, sp: 3225 },
      { cnae: "4664-8/00", label: { "pt-br": "Atacado de equipamentos odonto-médico-hospitalares", en: "Medical and dental equipment wholesale", es: "Mayoristas de equipos médicos y odontológicos", "zh-cn": "医疗与牙科设备批发" }, br: 2525, sp: 1003 },
    ],
  },
  {
    slug: "fispal-tecnologia",
    name: "Fispal Tecnologia",
    start: "2027-06-22",
    end: "2027-06-25",
    ...SAO_PAULO_EXPO,
    city: "São Paulo",
    uf: "SP",
    organizer: "Informa Markets",
    officialUrl: "https://www.fispaltecnologia.com.br",
    sourceUrl: "https://www.fispaltecnologia.com.br/quero-visitar/duvidas-frequentes/",
    checkedAt: "2026-11-25",
    copy: {
      "pt-br": {
        sector: "Processamento, embalagem e logística para alimentos e bebidas",
        summary: "A Fispal Tecnologia é a feira de tecnologia para a indústria de alimentos e bebidas: processamento, envase, embalagem, automação e logística.",
        exhibitors: "Fabricantes de máquinas de processamento e envase, embalagens, automação industrial, refrigeração, ingredientes técnicos e intralogística.",
        buyers: "Indústrias de alimentos e bebidas de todos os portes: laticínios, frigoríficos, panificação industrial, bebidas, além de engenharia, manutenção e compras industriais.",
      },
      en: {
        sector: "Processing, packaging and logistics for food and beverages",
        summary: "Fispal Tecnologia is Brazil's technology trade show for the food and beverage industry: processing, filling, packaging, automation and logistics.",
        exhibitors: "Manufacturers of processing and filling machinery, packaging, industrial automation, refrigeration, technical ingredients and intralogistics.",
        buyers: "Food and beverage manufacturers of all sizes — dairy, meat processing, industrial bakery, beverages — plus plant engineering, maintenance and industrial procurement.",
      },
      es: {
        sector: "Procesamiento, envase y logística para alimentos y bebidas",
        summary: "Fispal Tecnologia es la feria de tecnología para la industria de alimentos y bebidas de Brasil: procesamiento, envasado, embalaje, automatización y logística.",
        exhibitors: "Fabricantes de máquinas de procesamiento y envasado, embalajes, automatización industrial, refrigeración, ingredientes técnicos e intralogística.",
        buyers: "Industrias de alimentos y bebidas de todos los tamaños — lácteos, cárnicos, panificación industrial, bebidas — e ingeniería, mantenimiento y compras industriales.",
      },
      "zh-cn": {
        sector: "食品饮料加工、包装与物流",
        summary: "Fispal Tecnologia 是巴西食品饮料行业的技术展会，涵盖加工、灌装、包装、自动化和物流。",
        exhibitors: "加工与灌装机械、包装、工业自动化、制冷、技术配料及厂内物流制造商。",
        buyers: "各规模的食品饮料企业（乳制品、肉类加工、工业烘焙、饮料），以及工厂工程、维护和工业采购部门。",
      },
    },
    market: [
      { cnae: "Divisão 10", label: { "pt-br": "Fabricação de produtos alimentícios (todos os CNAEs)", en: "Food manufacturing (all codes)", es: "Fabricación de alimentos (todos los códigos)", "zh-cn": "食品制造（全部代码）" }, br: 403111, sp: 101061 },
      { cnae: "Divisão 11", label: { "pt-br": "Fabricação de bebidas (todos os CNAEs)", en: "Beverage manufacturing (all codes)", es: "Fabricación de bebidas (todos los códigos)", "zh-cn": "饮料制造（全部代码）" }, br: 9724, sp: 1483 },
      { cnae: "1052-0/00", label: { "pt-br": "Laticínios", en: "Dairy", es: "Lácteos", "zh-cn": "乳制品" }, br: 8785, sp: 954 },
      { cnae: "1013-9/01", label: { "pt-br": "Produtos de carne", en: "Meat products", es: "Productos cárnicos", "zh-cn": "肉制品" }, br: 8200, sp: 1332 },
      { cnae: "1091-1/01", label: { "pt-br": "Panificação industrial", en: "Industrial bakery", es: "Panificación industrial", "zh-cn": "工业烘焙" }, br: 41341, sp: 8012 },
    ],
  },
  {
    slug: "beauty-fair",
    name: "Beauty Fair",
    start: "2027-09-04",
    end: "2027-09-07",
    venue: "Expo Center Norte",
    address: "Rua José Bernardo Pinto, 333 – Vila Guilherme, São Paulo – SP, 02055-000",
    city: "São Paulo",
    uf: "SP",
    officialUrl: "https://beautyfair.com.br",
    sourceUrl: "https://beautyfair.com.br/credenciamento/",
    checkedAt: "2026-11-25",
    copy: {
      "pt-br": {
        sector: "Beleza, cosméticos e estética",
        summary: "A Beauty Fair é a grande feira de beleza profissional em São Paulo, reunindo marcas de cabelo, unhas, maquiagem, estética e perfumaria com profissionais, salões, distribuidores e varejo.",
        exhibitors: "Indústrias e marcas de cosméticos, cuidados com cabelos, unhas e esmaltes, maquiagem, estética, perfumaria e equipamentos para salões.",
        buyers: "Distribuidores e atacadistas de cosméticos, redes de perfumarias e farmácias, lojas de cosméticos, salões de beleza e clínicas de estética.",
      },
      en: {
        sector: "Beauty, cosmetics and aesthetics",
        summary: "Beauty Fair is São Paulo's major professional beauty trade show, bringing hair, nail, makeup, aesthetics and fragrance brands together with professionals, salons, distributors and retail.",
        exhibitors: "Cosmetics manufacturers and brands in hair care, nails and nail polish, makeup, aesthetics, fragrance and salon equipment.",
        buyers: "Cosmetics distributors and wholesalers, perfumery and pharmacy chains, cosmetics stores, beauty salons and aesthetic clinics.",
      },
      es: {
        sector: "Belleza, cosméticos y estética",
        summary: "Beauty Fair es la gran feria de belleza profesional de São Paulo, que reúne marcas de cabello, uñas, maquillaje, estética y perfumería con profesionales, salones, distribuidores y minoristas.",
        exhibitors: "Fabricantes y marcas de cosméticos, cuidado del cabello, uñas y esmaltes, maquillaje, estética, perfumería y equipos para salones.",
        buyers: "Distribuidores y mayoristas de cosméticos, cadenas de perfumerías y farmacias, tiendas de cosméticos, salones de belleza y clínicas de estética.",
      },
      "zh-cn": {
        sector: "美容、化妆品与美学",
        summary: "Beauty Fair 是圣保罗规模最大的专业美容展会，汇聚美发、美甲、彩妆、美学和香水品牌，以及专业人士、美容院、分销商和零售商。",
        exhibitors: "化妆品制造商及美发护理、美甲与指甲油、彩妆、美学、香水和美容院设备品牌。",
        buyers: "化妆品分销商和批发商、香水店和药店连锁、化妆品店、美容院和美学诊所。",
      },
    },
    market: [
      { cnae: "2063-1/00", label: { "pt-br": "Fabricação de cosméticos e perfumaria", en: "Cosmetics and fragrance manufacturing", es: "Fabricación de cosméticos y perfumería", "zh-cn": "化妆品与香水制造" }, br: 3543, sp: 1364 },
      { cnae: "4646-0/01", label: { "pt-br": "Atacado de cosméticos e perfumaria", en: "Cosmetics and fragrance wholesale", es: "Mayoristas de cosméticos y perfumería", "zh-cn": "化妆品与香水批发" }, br: 9290, sp: 3363 },
      { cnae: "4772-5/00", label: { "pt-br": "Varejo de cosméticos e perfumaria", en: "Cosmetics and fragrance retail", es: "Minoristas de cosméticos y perfumería", "zh-cn": "化妆品与香水零售" }, br: 244067, sp: 67579 },
      { cnae: "9602-5/01", label: { "pt-br": "Cabeleireiros, manicure e pedicure", en: "Hair and nail salons", es: "Peluquerías y manicura", "zh-cn": "美发与美甲" }, br: 942603, sp: 280546 },
      { cnae: "9602-5/02", label: { "pt-br": "Estética e cuidados com a beleza", en: "Aesthetics and beauty care", es: "Estética y cuidado de la belleza", "zh-cn": "美学与美容护理" }, br: 377223, sp: 113139 },
    ],
  },
];

export const getTradeShow = (slug: string) => TRADE_SHOWS.find((t) => t.slug === slug);
