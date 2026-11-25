import type { Locale } from "@/i18n/types";
import marketCounts from "./marketCounts.json";

/**
 * Calendário de feiras (Event Intelligence).
 * Regra editorial: só entra o que foi conferido no site oficial (source + checkedAt).
 * Números de mercado: contagem de estabelecimentos ATIVOS (a base só carrega ativos, confirmado em 25/11/2026) por CNAE principal na base pública da Receita Federal
 * usada pela plataforma DeepB2B (edição out/2026). São contagens de registros, não estimativa de compradores.
 * ponytail: lista estática até a base consolidada do app existir; depois o build lê da API e gera as páginas.
 */

export interface MarketRow {
  cnae: string; // como aparece na página: "4646-0/01", "Grupo 22.2", "Divisão 10"
  q: string; // prefixo de CNAE consultado na base (scripts/market-counts.mjs)
  label: Record<Locale, string>;
}

export interface MarketCount {
  br: number;
  brMei: number;
  sp: number;
  spMei: number;
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
  checkedAt?: string; // data em que conferimos no site oficial; sem ela a página mostra "Datas a confirmar"
  exhibitors?: { confirmed: number; verified: number; updatedAt: string }; // só quando houver lista com fonte
  copy: Record<Locale, TradeShowCopy>;
  market: MarketRow[];
}

export const MARKET_DATA_EDITION: string = marketCounts.edition;

/** Contagem da base (gerada por script, nunca digitada). Sem dado, a linha não aparece. */
export function marketCount(q: string): MarketCount | undefined {
  return (marketCounts.counts as Record<string, MarketCount>)[q];
}

const SAO_PAULO_EXPO = { venue: "São Paulo Expo", address: "Rodovia dos Imigrantes, km 1,5 – Vila Água Funda, São Paulo – SP" };

export const TRADE_SHOWS: TradeShow[] = [
  {
    slug: "plastico-brasil",
    name: "Plástico Brasil",
    start: "2027-03-15",
    end: "2027-03-19",
    ...SAO_PAULO_EXPO,
    city: "São Paulo",
    uf: "SP",
    organizer: "Informa Markets",
    officialUrl: "https://www.plasticobrasil.com.br",
    sourceUrl: "https://www.plasticobrasil.com.br",
    checkedAt: "2026-11-25",
    copy: {
      "pt-br": {
        sector: "Indústria do plástico e da borracha",
        summary: "A Plástico Brasil reúne a cadeia do plástico em São Paulo: máquinas e equipamentos de transformação, moldes, matérias-primas, aditivos, reciclagem e automação, com visitação de indústrias transformadoras.",
        exhibitors: "Fabricantes de injetoras, extrusoras e sopradoras, moldes e ferramentaria, resinas e aditivos, periféricos, automação e soluções de reciclagem.",
        buyers: "Indústrias transformadoras de plástico (embalagens, peças técnicas, filmes, utilidades), donos de fábrica, engenharia de produção, manutenção e compras industriais.",
      },
      en: {
        sector: "Plastics and rubber industry",
        summary: "Plástico Brasil brings Brazil's plastics value chain together in São Paulo: processing machinery and equipment, molds, raw materials, additives, recycling and automation, visited by plastics converters.",
        exhibitors: "Manufacturers of injection, extrusion and blow-molding machines, molds and tooling, resins and additives, auxiliaries, automation and recycling solutions.",
        buyers: "Plastics converters (packaging, technical parts, films, housewares), plant owners, production engineering, maintenance and industrial procurement.",
      },
      es: {
        sector: "Industria del plástico y del caucho",
        summary: "Plástico Brasil reúne en São Paulo la cadena del plástico: máquinas y equipos de transformación, moldes, materias primas, aditivos, reciclaje y automatización, con visitas de la industria transformadora.",
        exhibitors: "Fabricantes de inyectoras, extrusoras y sopladoras, moldes y matricería, resinas y aditivos, periféricos, automatización y soluciones de reciclaje.",
        buyers: "Transformadores de plástico (envases, piezas técnicas, films, artículos de hogar), dueños de planta, ingeniería de producción, mantenimiento y compras industriales.",
      },
      "zh-cn": {
        sector: "塑料与橡胶工业",
        summary: "Plástico Brasil 在圣保罗汇聚巴西塑料产业链：加工机械与设备、模具、原材料、添加剂、回收与自动化，观众以塑料加工企业为主。",
        exhibitors: "注塑机、挤出机和吹塑机、模具与工装、树脂与添加剂、辅机、自动化及回收解决方案制造商。",
        buyers: "塑料加工企业（包装、技术零件、薄膜、日用品）、工厂负责人、生产工程、维护和工业采购部门。",
      },
    },
    market: [
      { cnae: "Grupo 22.2", q: "222", label: { "pt-br": "Fabricação de produtos de material plástico", en: "Plastic products manufacturing", es: "Fabricación de productos de plástico", "zh-cn": "塑料制品制造" } },
    ],
  },
  {
    slug: "anuga-select-brazil",
    name: "Anuga Select Brazil",
    start: "2027-04-06",
    end: "2027-04-08",
    venue: "Distrito Anhembi",
    address: "Av. Olavo Fontoura, 1209 – Santana, São Paulo – SP",
    city: "São Paulo",
    uf: "SP",
    organizer: "Koelnmesse Brasil",
    officialUrl: "https://anuga-brazil.com.br",
    sourceUrl: "https://anuga-brazil.com.br",
    checkedAt: "2026-11-25",
    copy: {
      "pt-br": {
        sector: "Alimentos e bebidas",
        summary: "A Anuga Select Brazil é a feira de alimentos e bebidas da Koelnmesse no Brasil, voltada exclusivamente a profissionais do setor: indústria, distribuição, varejo e food service.",
        exhibitors: "Indústrias de alimentos e bebidas, marcas nacionais e internacionais, importadores e fornecedores de ingredientes e produtos para o varejo e o food service.",
        buyers: "Atacadistas e distribuidores de alimentos, redes de supermercados, importadores, compradores de food service e de varejo.",
      },
      en: {
        sector: "Food and beverages",
        summary: "Anuga Select Brazil is Koelnmesse's food and beverage trade show in Brazil, open exclusively to industry professionals: manufacturers, distribution, retail and food service.",
        exhibitors: "Food and beverage manufacturers, national and international brands, importers and suppliers of ingredients and products for retail and food service.",
        buyers: "Food wholesalers and distributors, supermarket chains, importers, food-service and retail buyers.",
      },
      es: {
        sector: "Alimentos y bebidas",
        summary: "Anuga Select Brazil es la feria de alimentos y bebidas de Koelnmesse en Brasil, exclusiva para profesionales del sector: industria, distribución, retail y food service.",
        exhibitors: "Industrias de alimentos y bebidas, marcas nacionales e internacionales, importadores y proveedores de ingredientes y productos para retail y food service.",
        buyers: "Mayoristas y distribuidores de alimentos, cadenas de supermercados, importadores, compradores de food service y retail.",
      },
      "zh-cn": {
        sector: "食品与饮料",
        summary: "Anuga Select Brazil 是科隆展览公司在巴西举办的食品饮料展会，仅面向行业专业人士：制造商、分销、零售和餐饮服务。",
        exhibitors: "食品饮料制造商、国内外品牌、进口商，以及面向零售和餐饮服务的配料与产品供应商。",
        buyers: "食品批发商与分销商、超市连锁、进口商、餐饮服务和零售采购。",
      },
    },
    market: [
      { cnae: "Grupo 46.39", q: "4639", label: { "pt-br": "Atacado de produtos alimentícios em geral", en: "Food wholesale (general)", es: "Mayoristas de alimentos en general", "zh-cn": "食品综合批发" } },
      { cnae: "Grupo 47.11", q: "4711", label: { "pt-br": "Supermercados e hipermercados", en: "Supermarkets and hypermarkets", es: "Supermercados e hipermercados", "zh-cn": "超市与大卖场" } },
    ],
  },
  {
    slug: "automec",
    name: "Automec",
    start: "2027-04-20",
    end: "2027-04-24",
    ...SAO_PAULO_EXPO,
    city: "São Paulo",
    uf: "SP",
    organizer: "RX",
    officialUrl: "https://www.automecfeira.com.br",
    sourceUrl: "https://www.automecfeira.com.br/pt-br/visitar/visite-a-automec.html",
    checkedAt: "2026-11-25",
    copy: {
      "pt-br": {
        sector: "Autopeças, equipamentos e serviços automotivos",
        summary: "A Automec é a feira de autopeças, equipamentos e serviços para reparação de veículos leves, pesados e comerciais, realizada no São Paulo Expo.",
        exhibitors: "Fabricantes e importadores de autopeças, equipamentos e ferramentas para oficinas, lubrificantes, pneus, diagnóstico e soluções para reparação automotiva.",
        buyers: "Distribuidores e varejistas de autopeças, oficinas mecânicas e centros automotivos, frotistas e retíficas.",
      },
      en: {
        sector: "Auto parts, equipment and automotive services",
        summary: "Automec is the trade show for auto parts, equipment and repair services for light, heavy and commercial vehicles, held at São Paulo Expo.",
        exhibitors: "Auto parts manufacturers and importers, workshop equipment and tools, lubricants, tires, diagnostics and automotive repair solutions.",
        buyers: "Auto parts distributors and retailers, repair shops and service centers, fleet operators and engine rebuilders.",
      },
      es: {
        sector: "Autopartes, equipos y servicios automotrices",
        summary: "Automec es la feria de autopartes, equipos y servicios de reparación para vehículos livianos, pesados y comerciales, en el São Paulo Expo.",
        exhibitors: "Fabricantes e importadores de autopartes, equipos y herramientas para talleres, lubricantes, neumáticos, diagnóstico y soluciones de reparación automotriz.",
        buyers: "Distribuidores y minoristas de autopartes, talleres mecánicos y centros de servicio, flotas y rectificadoras.",
      },
      "zh-cn": {
        sector: "汽车零部件、设备与服务",
        summary: "Automec 是面向轻型、重型和商用车辆的汽车零部件、设备与维修服务展会，在圣保罗博览中心举行。",
        exhibitors: "汽车零部件制造商和进口商、修理厂设备与工具、润滑油、轮胎、诊断及汽车维修解决方案。",
        buyers: "汽车零部件分销商和零售商、修理厂与汽车服务中心、车队运营商和发动机翻修厂。",
      },
    },
    market: [
      { cnae: "Grupo 45.30", q: "4530", label: { "pt-br": "Comércio de peças e acessórios para veículos", en: "Auto parts and accessories trade", es: "Comercio de autopartes y accesorios", "zh-cn": "汽车零配件贸易" } },
      { cnae: "Grupo 45.20", q: "4520", label: { "pt-br": "Manutenção e reparação de veículos", en: "Vehicle maintenance and repair", es: "Mantenimiento y reparación de vehículos", "zh-cn": "汽车维修保养" } },
    ],
  },
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
      { cnae: "4679-6/99", q: "4679699", label: { "pt-br": "Atacado de materiais de construção em geral", en: "Building materials wholesale", es: "Mayoristas de materiales de construcción", "zh-cn": "建材批发" } },
      { cnae: "4744-0/99", q: "4744099", label: { "pt-br": "Varejo de materiais de construção em geral", en: "Building materials retail", es: "Minoristas de materiales de construcción", "zh-cn": "建材零售" } },
      { cnae: "4744-0/01", q: "4744001", label: { "pt-br": "Varejo de ferragens e ferramentas", en: "Hardware and tools retail", es: "Ferreterías y herramientas", "zh-cn": "五金工具零售" } },
      { cnae: "4120-4/00", q: "4120400", label: { "pt-br": "Construção de edifícios", en: "Building construction companies", es: "Construcción de edificios", "zh-cn": "房屋建筑" } },
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
      { cnae: "8610-1/01", q: "8610101", label: { "pt-br": "Atendimento hospitalar", en: "Hospitals", es: "Atención hospitalaria", "zh-cn": "医院" } },
      { cnae: "8610-1/02", q: "8610102", label: { "pt-br": "Pronto-socorro e unidades de urgência", en: "Emergency and urgent-care units", es: "Urgencias y unidades de emergencia", "zh-cn": "急诊与急救单位" } },
      { cnae: "8630-5/03", q: "8630503", label: { "pt-br": "Clínicas médicas ambulatoriais", en: "Outpatient medical clinics", es: "Clínicas médicas ambulatorias", "zh-cn": "门诊诊所" } },
      { cnae: "4645-1/01", q: "4645101", label: { "pt-br": "Atacado de materiais médico-hospitalares", en: "Medical and hospital supplies wholesale", es: "Mayoristas de insumos médico-hospitalarios", "zh-cn": "医疗用品批发" } },
      { cnae: "4664-8/00", q: "4664800", label: { "pt-br": "Atacado de equipamentos odonto-médico-hospitalares", en: "Medical and dental equipment wholesale", es: "Mayoristas de equipos médicos y odontológicos", "zh-cn": "医疗与牙科设备批发" } },
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
      { cnae: "Divisão 10", q: "10", label: { "pt-br": "Fabricação de produtos alimentícios (todos os CNAEs)", en: "Food manufacturing (all codes)", es: "Fabricación de alimentos (todos los códigos)", "zh-cn": "食品制造（全部代码）" } },
      { cnae: "Divisão 11", q: "11", label: { "pt-br": "Fabricação de bebidas (todos os CNAEs)", en: "Beverage manufacturing (all codes)", es: "Fabricación de bebidas (todos los códigos)", "zh-cn": "饮料制造（全部代码）" } },
      { cnae: "1052-0/00", q: "1052000", label: { "pt-br": "Laticínios", en: "Dairy", es: "Lácteos", "zh-cn": "乳制品" } },
      { cnae: "1013-9/01", q: "1013901", label: { "pt-br": "Produtos de carne", en: "Meat products", es: "Productos cárnicos", "zh-cn": "肉制品" } },
      { cnae: "1091-1/01", q: "1091101", label: { "pt-br": "Panificação industrial", en: "Industrial bakery", es: "Panificación industrial", "zh-cn": "工业烘焙" } },
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
      { cnae: "2063-1/00", q: "2063100", label: { "pt-br": "Fabricação de cosméticos e perfumaria", en: "Cosmetics and fragrance manufacturing", es: "Fabricación de cosméticos y perfumería", "zh-cn": "化妆品与香水制造" } },
      { cnae: "4646-0/01", q: "4646001", label: { "pt-br": "Atacado de cosméticos e perfumaria", en: "Cosmetics and fragrance wholesale", es: "Mayoristas de cosméticos y perfumería", "zh-cn": "化妆品与香水批发" } },
      { cnae: "4772-5/00", q: "4772500", label: { "pt-br": "Varejo de cosméticos e perfumaria", en: "Cosmetics and fragrance retail", es: "Minoristas de cosméticos y perfumería", "zh-cn": "化妆品与香水零售" } },
      { cnae: "9602-5/01", q: "9602501", label: { "pt-br": "Cabeleireiros, manicure e pedicure", en: "Hair and nail salons", es: "Peluquerías y manicura", "zh-cn": "美发与美甲" } },
      { cnae: "9602-5/02", q: "9602502", label: { "pt-br": "Estética e cuidados com a beleza", en: "Aesthetics and beauty care", es: "Estética y cuidado de la belleza", "zh-cn": "美学与美容护理" } },
    ],
  },
];

export const getTradeShow = (slug: string) => TRADE_SHOWS.find((t) => t.slug === slug);
