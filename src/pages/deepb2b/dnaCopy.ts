import type { Locale, RouteKey } from "@/i18n/types";

/**
 * Textos do DNA da DeepB2B (DNA-da-DeepB2B.md): Como funciona, Para quem, Visão, exemplo dos 7 passos e pilares do DeepClub.
 * Módulos que ainda não existem aparecem como "em desenvolvimento" (status: "soon"), nunca como disponíveis.
 */

export interface Module { name: string; text: string; status: "live" | "soon" }
export interface Audience { title: string; text: string; to: RouteKey }

export interface DnaCopy {
  platformEyebrow: string; platformH1: string; platformLead: string;
  flowTitle: string; flow: { step: string; text: string }[];
  modulesTitle: string; modules: Module[]; live: string; soon: string;
  sourcesNote: string; platformCtaTitle: string; platformCtaText: string; platformCta: string;
  audienceEyebrow: string; audienceTitle: string; audiences: Audience[];
  visionEyebrow: string; visionTitle: string; visionText: string[]; tagline: string;
  stepsTitle: string; stepsIntro: string; steps: string[]; stepsQuote: string;
  clubPillars: { title: string; text: string }[];
}

const DNA: Record<Locale, DnaCopy> = {
  "pt-br": {
    platformEyebrow: "Como funciona", platformH1: "Inteligência de eventos em um fluxo contínuo.",
    platformLead: "A DeepB2B é uma plataforma nativa de inteligência artificial especializada em inteligência de eventos e desenvolvimento de negócios B2B. Ela transforma informações sobre feiras, empresas, compradores e expositores em oportunidades comerciais.",
    flowTitle: "Da descoberta à ativação comercial",
    flow: [
      { step: "Descoberta", text: "Quais eventos e mercados concentram as empresas de interesse." },
      { step: "Mapeamento", text: "Quais empresas, expositores e compradores fazem parte desse universo." },
      { step: "Qualificação", text: "Quais contas combinam com o seu Perfil de Cliente Ideal (ICP)." },
      { step: "Enriquecimento", text: "Decisores e informações de contato corporativo para a abordagem." },
      { step: "Ativação comercial", text: "Campanhas, funil e acompanhamento antes, durante e depois do evento." },
    ],
    modulesTitle: "Os módulos da plataforma",
    modules: [
      { name: "Event Intelligence", text: "Pesquisa de feiras e eventos por setor, local, período e relevância comercial.", status: "live" },
      { name: "Company Intelligence", text: "Empresas por CNPJ, CNAE, porte, localização, estrutura societária e presença digital.", status: "live" },
      { name: "ICP Matching", text: "Qualificação e priorização de contas pelo Perfil de Cliente Ideal, com apoio de IA.", status: "live" },
      { name: "Decision Maker Intelligence", text: "Identificação de potenciais decisores ligados às empresas.", status: "live" },
      { name: "Contact Enrichment", text: "Enriquecimento de contatos corporativos, respeitando as fontes e a LGPD.", status: "live" },
      { name: "AI Agents", text: "Agentes de IA para pesquisa, análise, qualificação e apoio à execução comercial.", status: "live" },
      { name: "CRM e ativação comercial", text: "Funil, exportações e fluxos para transformar pesquisa em atividade comercial.", status: "live" },
      { name: "Event Footprint", text: "Histórico e sinais de participação de empresas em feiras e eventos.", status: "soon" },
      { name: "API e MCP", text: "Integração com CRMs, outros sistemas e assistentes de inteligência artificial.", status: "soon" },
    ],
    live: "Disponível", soon: "Em desenvolvimento",
    sourcesNote: "Diferenciamos informações oficiais, dados de terceiros, sinais públicos e estimativas geradas por inteligência artificial. A confiabilidade depende da qualidade, atualidade e rastreabilidade das fontes.",
    platformCtaTitle: "Veja a plataforma aplicada ao seu mercado", platformCtaText: "Mostramos como a inteligência de eventos funciona para o seu setor e os seus próximos eventos.", platformCta: "Solicitar apresentação",
    audienceEyebrow: "Para quem", audienceTitle: "Feita para todo o ecossistema de eventos B2B.",
    audiences: [
      { title: "Expositores", text: "Encontrar compradores antes da feira, abordar e desenvolver relacionamento depois dela.", to: "projects" },
      { title: "Times comerciais e líderes de receita", text: "Vendas, Demand Generation, Field e Event Marketing: priorizar contas e agir antes dos concorrentes.", to: "platform" },
      { title: "Organizadoras e promotoras", text: "Identificar potenciais expositores e compradores e ampliar o alcance dos eventos.", to: "partners" },
      { title: "Fornecedores de serviços para feiras", text: "Montadoras, cenografia, gráficas, staff, logística: abordar expositores no momento certo.", to: "partners" },
      { title: "Compradores e visitantes", text: "Descobrir fabricantes, distribuidores, produtos e fornecedores relevantes.", to: "calendar" },
      { title: "Empresas internacionais", text: "Entrar no mercado brasileiro ou levar empresas brasileiras ao exterior.", to: "brazilMarketEntry" },
    ],
    visionEyebrow: "Nossa visão", visionTitle: "Transformar informação em inteligência e inteligência em oportunidades de negócios.",
    visionText: [
      "Feiras e eventos continuarão sendo importantes pontos de encontro entre empresas, compradores e fornecedores.",
      "Mas as oportunidades não começam quando as portas se abrem, nem terminam quando os eventos se encerram. Elas existem antes, durante e depois.",
      "A DeepB2B nasceu para conectar essas oportunidades por meio de inteligência artificial, dados empresariais e desenvolvimento de negócios.",
    ],
    tagline: "Intelligence Beyond the Event.",
    stepsTitle: "Na prática: uma indústria numa feira de máquinas",
    stepsIntro: "Antes da abertura dos portões, a equipe comercial pode:",
    steps: ["Identificar empresas que potencialmente compram seus produtos", "Mapear distribuidores e compradores por região", "Qualificar as empresas pelo ICP", "Identificar potenciais decisores", "Desenvolver campanhas de abordagem contextualizadas", "Buscar agendar reuniões antecipadas", "Organizar as oportunidades para acompanhamento durante e depois da feira"],
    stepsQuote: "Não queremos que o expositor apenas espere o comprador chegar ao estande. Queremos ajudá-lo a encontrar esse comprador antes da feira.",
    clubPillars: [
      { title: "Inteligência de Mercado", text: "Informações, pesquisas, análises setoriais e movimentações empresariais." },
      { title: "Event Intelligence", text: "Calendário de feiras, eventos e oportunidades com expositores, compradores e mercados." },
      { title: "Business Opportunities", text: "Oportunidades comerciais, demandas empresariais e conexões entre compradores e fornecedores." },
      { title: "Business Network", text: "Relacionamento entre empresas, empresários, executivos e profissionais." },
      { title: "Business Benefits", text: "Benefícios e condições especiais negociadas com parceiros do ecossistema." },
    ],
  },
  en: {
    platformEyebrow: "How it works", platformH1: "Event intelligence in one continuous flow.",
    platformLead: "DeepB2B is an AI-native platform specialized in event intelligence and B2B business development. It turns information about trade shows, companies, buyers and exhibitors into commercial opportunities.",
    flowTitle: "From discovery to commercial activation",
    flow: [
      { step: "Discovery", text: "Which events and markets concentrate the companies you care about." },
      { step: "Mapping", text: "Which companies, exhibitors and buyers are part of that universe." },
      { step: "Qualification", text: "Which accounts match your Ideal Customer Profile (ICP)." },
      { step: "Enrichment", text: "Decision-makers and corporate contact information for outreach." },
      { step: "Commercial activation", text: "Campaigns, pipeline and follow-up before, during and after the event." },
    ],
    modulesTitle: "Platform modules",
    modules: [
      { name: "Event Intelligence", text: "Search trade shows and events by sector, location, period and commercial relevance.", status: "live" },
      { name: "Company Intelligence", text: "Companies by CNPJ, CNAE code, size, location, ownership structure and digital presence.", status: "live" },
      { name: "ICP Matching", text: "AI-assisted qualification and prioritization of accounts by Ideal Customer Profile.", status: "live" },
      { name: "Decision Maker Intelligence", text: "Identification of potential decision-makers linked to each company.", status: "live" },
      { name: "Contact Enrichment", text: "Corporate contact enrichment, respecting sources and data-protection rules.", status: "live" },
      { name: "AI Agents", text: "AI agents for research, analysis, qualification and commercial execution.", status: "live" },
      { name: "CRM & commercial activation", text: "Pipeline, exports and workflows that turn research into sales activity.", status: "live" },
      { name: "Event Footprint", text: "History and signals of company participation in trade shows and events.", status: "soon" },
      { name: "API & MCP", text: "Integration with CRMs, other systems and AI assistants.", status: "soon" },
    ],
    live: "Available", soon: "In development",
    sourcesNote: "We distinguish official information, third-party data, public signals and AI-generated estimates. Reliability depends on the quality, freshness and traceability of the sources.",
    platformCtaTitle: "See the platform applied to your market", platformCtaText: "We'll show how event intelligence works for your sector and your upcoming events.", platformCta: "Request a presentation",
    audienceEyebrow: "Who it's for", audienceTitle: "Built for the whole B2B event ecosystem.",
    audiences: [
      { title: "Exhibitors", text: "Find buyers before the show, reach out, and keep building relationships after it.", to: "projects" },
      { title: "Sales teams and revenue leaders", text: "Sales, Demand Generation, Field and Event Marketing: prioritize accounts and act before competitors.", to: "platform" },
      { title: "Organizers and promoters", text: "Identify potential exhibitors and buyers and extend each event's reach.", to: "partners" },
      { title: "Trade show service providers", text: "Booth builders, scenography, printing, staff, logistics: reach exhibitors at the right time.", to: "partners" },
      { title: "Buyers and visitors", text: "Discover relevant manufacturers, distributors, products and suppliers.", to: "calendar" },
      { title: "International companies", text: "Enter the Brazilian market or take Brazilian companies abroad.", to: "brazilMarketEntry" },
    ],
    visionEyebrow: "Our vision", visionTitle: "Turn information into intelligence, and intelligence into business opportunities.",
    visionText: [
      "Trade shows and events will remain key meeting points between companies, buyers and suppliers.",
      "But opportunities don't start when the doors open, and they don't end when the event closes. They exist before, during and after.",
      "DeepB2B was born to connect those opportunities through artificial intelligence, company data and business development.",
    ],
    tagline: "Intelligence Beyond the Event.",
    stepsTitle: "In practice: a manufacturer at a machinery trade show",
    stepsIntro: "Before the doors open, the sales team can:",
    steps: ["Identify companies likely to buy its products", "Map distributors and buyers by region", "Qualify companies by ICP", "Identify potential decision-makers", "Run contextualized outreach campaigns", "Try to book meetings in advance", "Organize opportunities for follow-up during and after the show"],
    stepsQuote: "We don't want exhibitors just waiting for buyers to reach their booth. We want to help them find those buyers before the show.",
    clubPillars: [
      { title: "Market Intelligence", text: "Information, research, sector analysis and business movements." },
      { title: "Event Intelligence", text: "Trade show calendar, events and opportunities with exhibitors, buyers and markets." },
      { title: "Business Opportunities", text: "Commercial opportunities, business demands and buyer–supplier connections." },
      { title: "Business Network", text: "Relationships between companies, business owners, executives and professionals." },
      { title: "Business Benefits", text: "Benefits and special terms negotiated with ecosystem partners." },
    ],
  },
  es: {
    platformEyebrow: "Cómo funciona", platformH1: "Inteligencia de eventos en un flujo continuo.",
    platformLead: "DeepB2B es una plataforma nativa de inteligencia artificial especializada en inteligencia de eventos y desarrollo de negocios B2B. Convierte información sobre ferias, empresas, compradores y expositores en oportunidades comerciales.",
    flowTitle: "Del descubrimiento a la activación comercial",
    flow: [
      { step: "Descubrimiento", text: "Qué eventos y mercados concentran las empresas de interés." },
      { step: "Mapeo", text: "Qué empresas, expositores y compradores forman parte de ese universo." },
      { step: "Calificación", text: "Qué cuentas coinciden con su Perfil de Cliente Ideal (ICP)." },
      { step: "Enriquecimiento", text: "Decisores e información de contacto corporativo para el abordaje." },
      { step: "Activación comercial", text: "Campañas, embudo y seguimiento antes, durante y después del evento." },
    ],
    modulesTitle: "Los módulos de la plataforma",
    modules: [
      { name: "Event Intelligence", text: "Búsqueda de ferias y eventos por sector, ubicación, período y relevancia comercial.", status: "live" },
      { name: "Company Intelligence", text: "Empresas por CNPJ, CNAE, tamaño, ubicación, estructura societaria y presencia digital.", status: "live" },
      { name: "ICP Matching", text: "Calificación y priorización de cuentas por Perfil de Cliente Ideal, con apoyo de IA.", status: "live" },
      { name: "Decision Maker Intelligence", text: "Identificación de decisores potenciales vinculados a las empresas.", status: "live" },
      { name: "Contact Enrichment", text: "Enriquecimiento de contactos corporativos, respetando las fuentes y la protección de datos.", status: "live" },
      { name: "AI Agents", text: "Agentes de IA para investigación, análisis, calificación y ejecución comercial.", status: "live" },
      { name: "CRM y activación comercial", text: "Embudo, exportaciones y flujos para convertir la investigación en actividad comercial.", status: "live" },
      { name: "Event Footprint", text: "Historial y señales de participación de empresas en ferias y eventos.", status: "soon" },
      { name: "API y MCP", text: "Integración con CRMs, otros sistemas y asistentes de inteligencia artificial.", status: "soon" },
    ],
    live: "Disponible", soon: "En desarrollo",
    sourcesNote: "Diferenciamos información oficial, datos de terceros, señales públicas y estimaciones generadas por inteligencia artificial. La confiabilidad depende de la calidad, actualidad y trazabilidad de las fuentes.",
    platformCtaTitle: "Vea la plataforma aplicada a su mercado", platformCtaText: "Le mostramos cómo funciona la inteligencia de eventos para su sector y sus próximos eventos.", platformCta: "Solicitar presentación",
    audienceEyebrow: "Para quién", audienceTitle: "Pensada para todo el ecosistema de eventos B2B.",
    audiences: [
      { title: "Expositores", text: "Encontrar compradores antes de la feria, contactarlos y seguir la relación después.", to: "projects" },
      { title: "Equipos comerciales y líderes de ingresos", text: "Ventas, Demand Generation, Field y Event Marketing: priorizar cuentas y actuar antes que la competencia.", to: "platform" },
      { title: "Organizadores y promotores", text: "Identificar expositores y compradores potenciales y ampliar el alcance de los eventos.", to: "partners" },
      { title: "Proveedores de servicios para ferias", text: "Montadores, escenografía, imprentas, staff, logística: llegar a los expositores en el momento justo.", to: "partners" },
      { title: "Compradores y visitantes", text: "Descubrir fabricantes, distribuidores, productos y proveedores relevantes.", to: "calendar" },
      { title: "Empresas internacionales", text: "Entrar al mercado brasileño o llevar empresas brasileñas al exterior.", to: "brazilMarketEntry" },
    ],
    visionEyebrow: "Nuestra visión", visionTitle: "Transformar información en inteligencia e inteligencia en oportunidades de negocio.",
    visionText: [
      "Las ferias y los eventos seguirán siendo puntos de encuentro clave entre empresas, compradores y proveedores.",
      "Pero las oportunidades no empiezan cuando se abren las puertas ni terminan cuando el evento cierra. Existen antes, durante y después.",
      "DeepB2B nació para conectar esas oportunidades con inteligencia artificial, datos empresariales y desarrollo de negocios.",
    ],
    tagline: "Intelligence Beyond the Event.",
    stepsTitle: "En la práctica: una industria en una feria de maquinaria",
    stepsIntro: "Antes de que se abran las puertas, el equipo comercial puede:",
    steps: ["Identificar empresas que potencialmente compran sus productos", "Mapear distribuidores y compradores por región", "Calificar las empresas por ICP", "Identificar decisores potenciales", "Desarrollar campañas de abordaje contextualizadas", "Intentar agendar reuniones con anticipación", "Organizar las oportunidades para el seguimiento durante y después de la feria"],
    stepsQuote: "No queremos que el expositor solo espere a que el comprador llegue a su stand. Queremos ayudarlo a encontrar a ese comprador antes de la feria.",
    clubPillars: [
      { title: "Inteligencia de Mercado", text: "Información, investigaciones, análisis sectoriales y movimientos empresariales." },
      { title: "Event Intelligence", text: "Calendario de ferias, eventos y oportunidades con expositores, compradores y mercados." },
      { title: "Business Opportunities", text: "Oportunidades comerciales, demandas empresariales y conexiones entre compradores y proveedores." },
      { title: "Business Network", text: "Relaciones entre empresas, empresarios, ejecutivos y profesionales." },
      { title: "Business Benefits", text: "Beneficios y condiciones especiales negociadas con socios del ecosistema." },
    ],
  },
  "zh-cn": {
    platformEyebrow: "运作方式", platformH1: "连续流程中的展会情报。",
    platformLead: "DeepB2B 是专注于展会情报和 B2B 业务拓展的 AI 原生平台，把展会、企业、买家和参展商的信息转化为商业机会。",
    flowTitle: "从发现到商业激活",
    flow: [
      { step: "发现", text: "哪些展会和市场聚集了您关注的企业。" },
      { step: "绘制地图", text: "哪些企业、参展商和买家属于这个范围。" },
      { step: "资质评估", text: "哪些客户符合您的理想客户画像（ICP）。" },
      { step: "信息补全", text: "用于触达的决策人和企业联系信息。" },
      { step: "商业激活", text: "展前、展中、展后的营销活动、销售漏斗和跟进。" },
    ],
    modulesTitle: "平台模块",
    modules: [
      { name: "Event Intelligence", text: "按行业、地点、时间和商业相关性搜索展会与活动。", status: "live" },
      { name: "Company Intelligence", text: "按 CNPJ、CNAE、规模、地区、股权结构和数字化存在查询企业。", status: "live" },
      { name: "ICP Matching", text: "借助 AI 按理想客户画像评估并排序客户。", status: "live" },
      { name: "Decision Maker Intelligence", text: "识别与企业相关的潜在决策人。", status: "live" },
      { name: "Contact Enrichment", text: "在尊重数据来源和数据保护规则的前提下补全企业联系信息。", status: "live" },
      { name: "AI Agents", text: "用于研究、分析、资质评估和商业执行的 AI 智能体。", status: "live" },
      { name: "CRM 与商业激活", text: "销售漏斗、导出和工作流，把研究转化为销售行动。", status: "live" },
      { name: "Event Footprint", text: "企业参加展会的历史记录和参展信号。", status: "soon" },
      { name: "API 与 MCP", text: "与 CRM、其他系统及 AI 助手集成。", status: "soon" },
    ],
    live: "已上线", soon: "开发中",
    sourcesNote: "我们区分官方信息、第三方数据、公开信号和 AI 生成的估算。可靠性取决于来源的质量、时效和可追溯性。",
    platformCtaTitle: "看看平台如何应用于您的市场", platformCtaText: "我们将展示展会情报如何服务于您的行业和即将参加的展会。", platformCta: "预约演示",
    audienceEyebrow: "适用对象", audienceTitle: "为整个 B2B 展会生态而打造。",
    audiences: [
      { title: "参展商", text: "展前找到买家、主动触达，展后持续发展关系。", to: "projects" },
      { title: "销售团队与营收负责人", text: "销售、需求开发、现场与活动营销：优先排序客户，先于竞争对手行动。", to: "platform" },
      { title: "主办方与推广方", text: "识别潜在参展商和买家，扩大展会影响力。", to: "partners" },
      { title: "展会服务供应商", text: "展台搭建、布景、印刷、人员、物流：在合适时机触达参展商。", to: "partners" },
      { title: "买家与观众", text: "发现相关的制造商、分销商、产品和供应商。", to: "calendar" },
      { title: "国际企业", text: "进入巴西市场，或带领巴西企业走向海外。", to: "brazilMarketEntry" },
    ],
    visionEyebrow: "我们的愿景", visionTitle: "把信息转化为情报，把情报转化为商机。",
    visionText: [
      "展会仍将是企业、买家和供应商之间的重要交汇点。",
      "但商机并不是在开幕时才开始，也不会在闭幕时结束。它们存在于展前、展中和展后。",
      "DeepB2B 的诞生，就是用人工智能、企业数据和业务拓展把这些商机连接起来。",
    ],
    tagline: "Intelligence Beyond the Event.",
    stepsTitle: "实践示例：一家参加机械展的工业企业",
    stepsIntro: "在展会开幕前，销售团队可以：",
    steps: ["识别可能采购其产品的企业", "按地区绘制分销商和买家地图", "按 ICP 评估企业", "识别潜在决策人", "开展有针对性的触达活动", "尝试提前预约会议", "整理商机，便于展中和展后跟进"],
    stepsQuote: "我们不希望参展商只是等待买家来到展位，而是帮助他们在展会前就找到这些买家。",
    clubPillars: [
      { title: "市场情报", text: "信息、研究、行业分析与企业动态。" },
      { title: "Event Intelligence", text: "展会日历、活动，以及与参展商、买家和市场相关的机会。" },
      { title: "Business Opportunities", text: "商业机会、企业需求以及买家与供应商之间的连接。" },
      { title: "Business Network", text: "企业、企业主、高管与专业人士之间的关系网络。" },
      { title: "Business Benefits", text: "与生态合作伙伴协商的权益与优惠条件。" },
    ],
  },
};

export const dnaCopy = (l: Locale) => DNA[l];
