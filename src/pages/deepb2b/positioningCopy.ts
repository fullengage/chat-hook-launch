import type { Locale } from "@/i18n/types";

/** Textos do posicionamento 2027 (Market Intelligence & Business Development): home e Feiras e Eventos. */

export interface HomeCopy {
  eyebrow: string;
  h1: string;
  subtitle: string;
  ctaSolutions: string;
  ctaPresentation: string;
  whatEyebrow: string;
  whatTitle: string;
  whatLead: string;
  areas: { title: string; text: string }[];
  eventsEyebrow: string;
  eventsTitle: string;
  eventsLead: string;
  eventsBullets: string[];
  eventsClosing: string;
  eventsCta: string;
  globalEyebrow: string;
  globalTitle: string;
  globalLead: string;
  globalFronts: string[];
  globalCta: string;
  portalEyebrow: string;
  portalTitle: string;
  portalTopics: string[];
  portalAll: string;
  finalTitle: string;
  finalText: string;
  finalCta: string;
}

export interface EventsCopy {
  eyebrow: string;
  h1: string;
  lead: string;
  why: string;
  phases: { title: string; items: string[] }[];
  forWhoTitle: string;
  forWho: string[];
  calendarTitle: string;
  calendarText: string;
  cta: string;
  ctaText: string;
}

const HOME: Record<Locale, HomeCopy> = {
  "pt-br": {
    eyebrow: "Market Intelligence & Business Development",
    h1: "Inteligência que conecta mercados e gera negócios.",
    subtitle:
      "Transformamos dados empresariais, inteligência de mercado e informações sobre eventos em oportunidades comerciais para empresas que desejam expandir seus negócios no Brasil e no mundo.",
    ctaSolutions: "Conheça nossas soluções",
    ctaPresentation: "Solicite uma apresentação",
    whatEyebrow: "O que fazemos",
    whatTitle: "Inteligência além dos dados.",
    whatLead:
      "A DeepB2B combina tecnologia, inteligência artificial e dados empresariais para identificar oportunidades comerciais, mapear mercados e aproximar empresas de potenciais compradores e parceiros.",
    areas: [
      { title: "Market Intelligence", text: "Estudos de mercado, inteligência setorial, análise empresarial e identificação de oportunidades de expansão." },
      { title: "Event Intelligence", text: "Inteligência sobre feiras, eventos, expositores, visitantes, compradores e organizadoras." },
      { title: "Business Development", text: "Identificação de compradores, distribuidores, fornecedores e potenciais parceiros comerciais." },
      { title: "Demand Generation", text: "Campanhas de prospecção, relacionamento e geração de oportunidades comerciais." },
    ],
    eventsEyebrow: "Inteligência para o ecossistema de eventos",
    eventsTitle: "Sua participação em uma feira começa muito antes da abertura dos portões.",
    eventsLead: "A DeepB2B ajuda empresas a aproveitar melhor seus investimentos em eventos.",
    eventsBullets: [
      "Identificação de potenciais compradores",
      "Mapeamento de distribuidores",
      "Inteligência sobre empresas participantes",
      "Campanhas comerciais antes dos eventos",
      "Agendamento de reuniões",
      "Acompanhamento das oportunidades após a feira",
    ],
    eventsClosing:
      "Seus clientes não precisam depender apenas de quem passa em frente ao estande. Ajudamos a encontrar os compradores certos antes mesmo de a feira começar.",
    eventsCta: "Conheça a inteligência para feiras",
    globalEyebrow: "Inteligência global",
    globalTitle: "Oportunidades de negócios não têm fronteiras.",
    globalLead:
      "Ajudamos empresas estrangeiras a compreender e acessar o mercado brasileiro, e empresas brasileiras a identificar compradores e parceiros internacionais.",
    globalFronts: [
      "Empresas estrangeiras que desejam vender no Brasil",
      "Empresas brasileiras que desejam expandir internacionalmente",
      "Expositores e fabricantes que procuram compradores em outros mercados",
    ],
    globalCta: "Mercado internacional",
    portalEyebrow: "DeepB2B Intelligence",
    portalTitle: "Informação para entender o mercado. Inteligência para encontrar oportunidades.",
    portalTopics: ["Feiras e eventos", "Economia e indicadores", "Inteligência industrial", "Comércio exterior", "Trade marketing", "Pesquisas exclusivas"],
    portalAll: "Ver todos os insights",
    finalTitle: "Encontre oportunidades que ainda não chegaram até você.",
    finalText:
      "Converse com nossos especialistas e descubra como a inteligência empresarial pode ajudar sua empresa a conquistar novos mercados.",
    finalCta: "Solicitar apresentação",
  },
  en: {
    eyebrow: "Market Intelligence & Business Development",
    h1: "Intelligence that connects markets and creates business.",
    subtitle:
      "We turn company data, market intelligence and trade show insight into commercial opportunities for companies expanding in Brazil and around the world.",
    ctaSolutions: "Explore our solutions",
    ctaPresentation: "Request a presentation",
    whatEyebrow: "What we do",
    whatTitle: "Intelligence beyond data.",
    whatLead:
      "DeepB2B combines technology, AI and company data to surface commercial opportunities, map markets and bring companies closer to the right buyers and partners.",
    areas: [
      { title: "Market Intelligence", text: "Market studies, sector intelligence, company analysis and expansion opportunities." },
      { title: "Event Intelligence", text: "Intelligence on trade shows, events, exhibitors, visitors, buyers and organizers." },
      { title: "Business Development", text: "Identifying buyers, distributors, suppliers and potential commercial partners." },
      { title: "Demand Generation", text: "Outbound campaigns, relationship building and qualified opportunity generation." },
    ],
    eventsEyebrow: "Intelligence for the event ecosystem",
    eventsTitle: "Your trade show starts long before the doors open.",
    eventsLead: "DeepB2B helps exhibitors get more out of every event investment.",
    eventsBullets: [
      "Identify potential buyers",
      "Map distributors",
      "Intelligence on participating companies",
      "Pre-show commercial campaigns",
      "Meeting scheduling",
      "Post-show opportunity follow-up",
    ],
    eventsClosing:
      "Don't rely only on whoever walks past your booth. We help you reach the right buyers before the show even begins.",
    eventsCta: "Trade show intelligence",
    globalEyebrow: "Global intelligence",
    globalTitle: "Business opportunities have no borders.",
    globalLead:
      "We help international companies understand and access the Brazilian market, and Brazilian companies find buyers and partners abroad.",
    globalFronts: [
      "International companies that want to sell in Brazil",
      "Brazilian companies expanding internationally",
      "Exhibitors and manufacturers looking for buyers in other markets",
    ],
    globalCta: "Brazil market entry",
    portalEyebrow: "DeepB2B Intelligence",
    portalTitle: "Information to understand the market. Intelligence to find opportunities.",
    portalTopics: ["Trade shows & events", "Economy & indicators", "Industrial intelligence", "Foreign trade", "Trade marketing", "Proprietary research"],
    portalAll: "View all insights",
    finalTitle: "Find the opportunities that haven't reached you yet.",
    finalText:
      "Talk to our specialists and see how business intelligence can help your company win new markets.",
    finalCta: "Request a presentation",
  },
  es: {
    eyebrow: "Market Intelligence & Business Development",
    h1: "Inteligencia que conecta mercados y genera negocios.",
    subtitle:
      "Convertimos datos empresariales, inteligencia de mercado e información sobre ferias en oportunidades comerciales para empresas que quieren crecer en Brasil, en América Latina y en el mundo.",
    ctaSolutions: "Conozca nuestras soluciones",
    ctaPresentation: "Solicite una presentación",
    whatEyebrow: "Qué hacemos",
    whatTitle: "Inteligencia más allá de los datos.",
    whatLead:
      "DeepB2B combina tecnología, inteligencia artificial y datos empresariales para identificar oportunidades comerciales, mapear mercados y acercar a las empresas a compradores y socios potenciales.",
    areas: [
      { title: "Market Intelligence", text: "Estudios de mercado, inteligencia sectorial, análisis de empresas y oportunidades de expansión." },
      { title: "Event Intelligence", text: "Inteligencia sobre ferias, eventos, expositores, visitantes, compradores y organizadores." },
      { title: "Business Development", text: "Identificación de compradores, distribuidores, proveedores y socios comerciales." },
      { title: "Demand Generation", text: "Campañas de prospección, relacionamiento y generación de oportunidades comerciales." },
    ],
    eventsEyebrow: "Inteligencia para el ecosistema de eventos",
    eventsTitle: "Su participación en una feria empieza mucho antes de que se abran las puertas.",
    eventsLead: "DeepB2B ayuda a los expositores a sacar más provecho de cada inversión en eventos.",
    eventsBullets: [
      "Identificación de compradores potenciales",
      "Mapeo de distribuidores",
      "Inteligencia sobre empresas participantes",
      "Campañas comerciales antes del evento",
      "Agenda de reuniones",
      "Seguimiento de oportunidades después de la feria",
    ],
    eventsClosing:
      "No dependa solo de quien pasa frente a su stand. Le ayudamos a llegar a los compradores correctos antes de que empiece la feria.",
    eventsCta: "Inteligencia para ferias",
    globalEyebrow: "Inteligencia global",
    globalTitle: "Las oportunidades de negocio no tienen fronteras.",
    globalLead:
      "Ayudamos a empresas extranjeras a entender y acceder al mercado brasileño, y a empresas latinoamericanas a encontrar compradores y socios en Brasil.",
    globalFronts: [
      "Empresas extranjeras que quieren vender en Brasil",
      "Empresas que buscan expandirse internacionalmente",
      "Expositores y fabricantes que buscan compradores en otros mercados",
    ],
    globalCta: "Entrada al mercado brasileño",
    portalEyebrow: "DeepB2B Intelligence",
    portalTitle: "Información para entender el mercado. Inteligencia para encontrar oportunidades.",
    portalTopics: ["Ferias y eventos", "Economía e indicadores", "Inteligencia industrial", "Comercio exterior", "Trade marketing", "Investigaciones propias"],
    portalAll: "Ver todos los insights",
    finalTitle: "Encuentre las oportunidades que todavía no llegaron a usted.",
    finalText:
      "Hable con nuestros especialistas y descubra cómo la inteligencia empresarial puede ayudar a su empresa a conquistar nuevos mercados.",
    finalCta: "Solicitar presentación",
  },
  "zh-cn": {
    eyebrow: "市场情报与业务拓展",
    h1: "连接市场、创造商机的商业情报。",
    subtitle: "我们将企业数据、市场情报和展会信息转化为商业机会，帮助企业拓展巴西及全球市场。",
    ctaSolutions: "了解解决方案",
    ctaPresentation: "预约演示",
    whatEyebrow: "我们做什么",
    whatTitle: "超越数据的情报。",
    whatLead: "DeepB2B 结合技术、人工智能和企业数据，发现商业机会、绘制市场地图，帮助企业接触合适的买家和合作伙伴。",
    areas: [
      { title: "市场情报", text: "市场研究、行业情报、企业分析与扩张机会识别。" },
      { title: "展会情报", text: "关于展会、活动、参展商、观众、买家和主办方的情报。" },
      { title: "业务拓展", text: "识别买家、分销商、供应商和潜在商业伙伴。" },
      { title: "需求开发", text: "客户开发活动、关系维护与商业机会创造。" },
    ],
    eventsEyebrow: "展会生态情报",
    eventsTitle: "参展成效，早在开幕前就已决定。",
    eventsLead: "DeepB2B 帮助参展企业充分发挥每一次展会投入的价值。",
    eventsBullets: ["识别潜在买家", "绘制分销商地图", "参展企业情报", "展前营销活动", "商务会议预约", "展后商机跟进"],
    eventsClosing: "不要只依赖路过展位的观众。我们帮助您在展会开始前就接触到合适的买家。",
    eventsCta: "展会情报服务",
    globalEyebrow: "全球情报",
    globalTitle: "商机没有国界。",
    globalLead: "我们帮助海外企业了解并进入巴西市场，也帮助巴西企业寻找国际买家和合作伙伴。",
    globalFronts: ["希望在巴西销售的海外企业", "寻求国际扩张的巴西企业", "在其他市场寻找买家的参展商和制造商"],
    globalCta: "进入巴西市场",
    portalEyebrow: "DeepB2B Intelligence",
    portalTitle: "了解市场的信息，发现机会的情报。",
    portalTopics: ["展会与活动", "经济与指标", "工业情报", "对外贸易", "贸易营销", "独家研究"],
    portalAll: "查看全部洞察",
    finalTitle: "发现尚未找到您的商机。",
    finalText: "与我们的专家交流，了解商业情报如何帮助您的企业开拓新市场。",
    finalCta: "预约演示",
  },
};

const EVENTS: Record<Locale, EventsCopy> = {
  "pt-br": {
    eyebrow: "Event Intelligence",
    h1: "Transforme sua participação em feiras em oportunidades de negócios.",
    lead: "A DeepB2B desenvolve inteligência comercial para empresas que participam de feiras e eventos empresariais.",
    why: "Participar de uma feira exige investimento em espaço, equipe, montagem, logística e divulgação. Mas o resultado não precisa depender apenas do movimento espontâneo de visitantes.",
    phases: [
      { title: "Antes da feira", items: ["Identificação de potenciais compradores", "Mapeamento de empresas por segmento", "Identificação de decisores", "Campanhas de convite", "Preparação de agendas comerciais"] },
      { title: "Durante a feira", items: ["Apoio ao relacionamento comercial", "Encaminhamento de interessados", "Organização das oportunidades", "Inteligência sobre participantes"] },
      { title: "Depois da feira", items: ["Recuperação de contatos interessados", "Acompanhamento comercial", "Identificação de novos distribuidores", "Relatórios de oportunidades"] },
    ],
    forWhoTitle: "Para quem",
    forWho: ["Expositores e fabricantes", "Organizadoras de feiras", "Empresas estrangeiras que participam de feiras no Brasil", "Empresas brasileiras em feiras internacionais"],
    calendarTitle: "Calendário de feiras",
    calendarText: "Datas, locais e perfil de compradores das principais feiras de 2027, conferidos nos sites oficiais. O calendário cresce a cada semana.",
    cta: "Prepare sua próxima feira com inteligência",
    ctaText: "Conte qual feira você vai participar e o que vende. Montamos uma proposta para antes, durante e depois do evento.",
  },
  en: {
    eyebrow: "Event Intelligence",
    h1: "Turn every trade show into real business opportunities.",
    lead: "DeepB2B builds commercial intelligence for companies exhibiting at trade shows and business events.",
    why: "Exhibiting takes investment in space, staff, booth building, logistics and promotion. Results shouldn't depend only on walk-in traffic.",
    phases: [
      { title: "Before the show", items: ["Identify potential buyers", "Map companies by segment", "Identify decision-makers", "Invitation campaigns", "Prepare meeting agendas"] },
      { title: "During the show", items: ["Relationship support", "Routing interested visitors", "Organizing opportunities", "Intelligence on participants"] },
      { title: "After the show", items: ["Re-engaging interested contacts", "Commercial follow-up", "Finding new distributors", "Opportunity reports"] },
    ],
    forWhoTitle: "Who it's for",
    forWho: ["Exhibitors and manufacturers", "Trade show organizers", "International companies exhibiting in Brazil", "Brazilian companies at international shows"],
    calendarTitle: "Trade show calendar",
    calendarText: "Dates, venues and buyer profiles of Brazil's leading 2027 trade shows, verified on official websites. The calendar grows every week.",
    cta: "Prepare your next show with intelligence",
    ctaText: "Tell us which show you're exhibiting at and what you sell. We'll put together a proposal for before, during and after the event.",
  },
  es: {
    eyebrow: "Event Intelligence",
    h1: "Convierta su participación en ferias en oportunidades de negocio.",
    lead: "DeepB2B desarrolla inteligencia comercial para empresas que exponen en ferias y eventos empresariales.",
    why: "Exponer en una feria exige inversión en espacio, equipo, montaje, logística y difusión. El resultado no debería depender solo del flujo espontáneo de visitantes.",
    phases: [
      { title: "Antes de la feria", items: ["Identificación de compradores potenciales", "Mapeo de empresas por segmento", "Identificación de decisores", "Campañas de invitación", "Preparación de agendas comerciales"] },
      { title: "Durante la feria", items: ["Apoyo al relacionamiento comercial", "Derivación de interesados", "Organización de oportunidades", "Inteligencia sobre participantes"] },
      { title: "Después de la feria", items: ["Recuperación de contactos interesados", "Seguimiento comercial", "Identificación de nuevos distribuidores", "Informes de oportunidades"] },
    ],
    forWhoTitle: "Para quién",
    forWho: ["Expositores y fabricantes", "Organizadores de ferias", "Empresas extranjeras que exponen en Brasil", "Empresas latinoamericanas en ferias internacionales"],
    calendarTitle: "Calendario de ferias",
    calendarText: "Fechas, sedes y perfil de compradores de las principales ferias de 2027, verificados en los sitios oficiales. El calendario crece cada semana.",
    cta: "Prepare su próxima feria con inteligencia",
    ctaText: "Cuéntenos en qué feria va a exponer y qué vende. Armamos una propuesta para antes, durante y después del evento.",
  },
  "zh-cn": {
    eyebrow: "展会情报",
    h1: "让每一次参展都转化为真正的商机。",
    lead: "DeepB2B 为参加展会和商务活动的企业提供商业情报服务。",
    why: "参展需要投入展位、人员、搭建、物流和宣传成本，成果不应只依赖自然到访的观众。",
    phases: [
      { title: "展前", items: ["识别潜在买家", "按行业绘制企业地图", "识别决策人", "邀约营销活动", "准备商务会议日程"] },
      { title: "展中", items: ["商务关系支持", "引导意向客户", "整理商机", "参展企业情报"] },
      { title: "展后", items: ["重新联系意向客户", "商务跟进", "发掘新分销商", "商机报告"] },
    ],
    forWhoTitle: "适用对象",
    forWho: ["参展商与制造商", "展会主办方", "在巴西参展的海外企业", "参加国际展会的巴西企业"],
    calendarTitle: "展会日历",
    calendarText: "2027 年主要展会的日期、场馆和买家画像，均经官网核实。日历每周更新。",
    cta: "用情报准备您的下一次展会",
    ctaText: "告诉我们您将参加哪个展会以及您销售的产品，我们将为展前、展中和展后制定方案。",
  },
};

export const homeCopy = (l: Locale) => HOME[l];
export const eventsCopy = (l: Locale) => EVENTS[l];
