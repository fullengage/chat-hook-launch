import type { Locale } from "@/i18n/types";

/**
 * Home institucional (abaixo do hero aprovado) e páginas Ecossistema, Projetos Empresariais, Parceiros e DeepClub.
 * Regras: nenhum número sem fonte; sem preço público (projetos sob proposta); DeepClub como "lançamento em breve"
 * (nada anunciado como disponível); nenhuma promessa de venda.
 */

export interface Block { title: string; text?: string; bullets?: string[] }

export interface HomeSections {
  ecoEyebrow: string; ecoTitle: string; ecoLead: string; actors: string[]; hub: string; pillars: Block[]; ecoCta: string;
  eventsEyebrow: string; eventsTitle: string; eventsLead: string; eventsListTitle: string; eventsBullets: string[]; eventsClosing: string;
  eventsCta: string; eventsCta2: string; upcomingTitle: string; daysLeft: string;
  intelEyebrow: string; intelTitle: string; intelLead: string; intelListTitle: string; intelBullets: string[]; intelCta: string;
  projEyebrow: string; projTitle: string; projLead: string; projListTitle: string; projBullets: string[]; projNote: string; projCta: string;
  clubEyebrow: string; clubTitle: string; clubLead: string; clubPillars: Block[]; clubTiers: Block[]; clubSoon: string; clubCta: string;
  portalEyebrow: string; portalTitle: string; portalLead: string; portalTopics: string[]; portalCta: string;
  globalEyebrow: string; globalTitle: string; globalLead: string; globalBullets: string[]; globalTagline: string; globalCta: string;
  finalTitle: string; finalText: string; finalCta: string; finalCta2: string;
}

export interface InfoPage { eyebrow: string; h1: string; lead: string; sections: Block[]; ctaTitle: string; ctaText: string; ctaLabel: string }

export interface ClubPage {
  eyebrow: string; h1: string; lead: string; soon: string; pillarsTitle: string; pillars: Block[];
  demandsEyebrow: string; demandsTitle: string; demandsText: string; demandsExamples: string[];
  plansTitle: string; standard: { name: string; tag: string; features: string[] }; experience: { name: string; tag: string; includes: string; features: string[] };
  priceNote: string; availabilityNote: string; ctaTitle: string; ctaText: string; ctaLabel: string;
}

const HOME: Record<Locale, HomeSections> = {
  "pt-br": {
    ecoEyebrow: "Um ecossistema de negócios", ecoTitle: "Muito além dos dados. Muito além das conexões.",
    ecoLead: "A DeepB2B conecta diferentes participantes do mercado empresarial — e transforma essas conexões em inteligência e oportunidades.",
    actors: ["Organizadoras", "Expositores", "Compradores", "Visitantes", "Fornecedores"], hub: "DeepB2B",
    pillars: [
      { title: "Inteligência de Mercado", text: "Dados empresariais, pesquisas, análises setoriais e identificação de oportunidades." },
      { title: "Feiras & Eventos", text: "Inteligência sobre eventos, organizadoras, expositores, compradores e fornecedores." },
      { title: "Conexões Empresariais", text: "Aproximação entre compradores, fornecedores, fabricantes, distribuidores e parceiros." },
      { title: "Desenvolvimento de Negócios", text: "Inteligência comercial para identificar clientes, desenvolver mercados e gerar negócios." },
    ],
    ecoCta: "Conheça nosso ecossistema",
    eventsEyebrow: "Feiras & Eventos", eventsTitle: "Uma feira começa muito antes da abertura dos portões.",
    eventsLead: "Feiras e eventos movimentam empresas, profissionais, compradores e fornecedores de diferentes segmentos. A DeepB2B desenvolve inteligência para conectar esse universo.",
    eventsListTitle: "Ajudamos a identificar:",
    eventsBullets: ["Empresas expositoras", "Potenciais compradores", "Fabricantes e distribuidores", "Organizadoras e promotoras", "Fornecedores e prestadores de serviços", "Oportunidades comerciais ligadas aos eventos"],
    eventsClosing: "Para expositores, organizadoras, visitantes e empresas desse mercado, criamos novas possibilidades de relacionamento e negócios.",
    eventsCta: "Explore feiras e eventos", eventsCta2: "Encontre oportunidades para sua empresa", upcomingTitle: "Próximas feiras no calendário", daysLeft: "faltam {n} dias",
    intelEyebrow: "Inteligência de Mercado", intelTitle: "Conheça o mercado. Identifique oportunidades. Encontre os parceiros certos.",
    intelLead: "A DeepB2B usa dados empresariais oficiais e inteligência artificial para ajudar empresas a compreender seus mercados e desenvolver estratégias comerciais.",
    intelListTitle: "Nossa tecnologia permite:",
    intelBullets: ["Identificar empresas por segmento, localização e atividade econômica", "Mapear potenciais compradores e fornecedores", "Encontrar distribuidores e parceiros comerciais", "Identificar oportunidades de expansão", "Analisar mercados e segmentos empresariais", "Desenvolver inteligência para prospecção B2B"],
    intelCta: "Conheça nossas soluções de inteligência",
    projEyebrow: "Projetos Empresariais", projTitle: "Transformamos inteligência em oportunidades comerciais.",
    projLead: "Cada empresa tem desafios, mercados e objetivos diferentes. Desenvolvemos projetos personalizados de inteligência comercial e desenvolvimento de negócios — especialmente para quem quer ampliar a presença em feiras, conquistar compradores, encontrar distribuidores e desenvolver mercados.",
    projListTitle: "As entregas podem incluir:",
    projBullets: ["Estudos e mapeamentos de mercado", "Identificação de potenciais compradores", "Mapeamento de empresas e decisores", "Inteligência comercial para expositores", "Campanhas de relacionamento e prospecção", "Desenvolvimento de novos mercados", "Projetos de expansão nacional e internacional"],
    projNote: "Projetos sob medida, com proposta personalizada para cada empresa.", projCta: "Desenvolva um projeto com a DeepB2B",
    clubEyebrow: "DeepClub · Business Membership", clubTitle: "Negócios crescem quando as conexões certas acontecem.",
    clubLead: "O clube empresarial da DeepB2B: inteligência de mercado, oportunidades comerciais, conexões e benefícios para empresários que querem vender mais, comprar melhor e conhecer seu mercado.",
    clubPillars: [
      { title: "Vender mais" }, { title: "Comprar melhor" }, { title: "Conhecer o mercado" },
      { title: "Fazer negócios" }, { title: "Economizar" }, { title: "Relacionar-se" },
    ],
    clubTiers: [
      { title: "Standard", text: "Acesso essencial ao ecossistema." },
      { title: "Experience", text: "Acesso ampliado, exclusividade e relacionamento premium." },
    ],
    clubSoon: "Lançamento em breve", clubCta: "Conheça o DeepClub",
    portalEyebrow: "Portal de Inteligência", portalTitle: "Informação para entender o mercado. Inteligência para encontrar oportunidades.",
    portalLead: "Informações, análises, pesquisas e notícias para empresários e executivos que acompanham a movimentação dos mercados.",
    portalTopics: ["Feiras e Eventos", "Economia e Mercados", "Indústria e Negócios", "Comércio Exterior", "Trade Marketing", "Tecnologia e IA", "Pesquisas DeepB2B", "Mercado Internacional"],
    portalCta: "Acesse o portal de inteligência",
    globalEyebrow: "Global Business", globalTitle: "Oportunidades de negócios não têm fronteiras.",
    globalLead: "O Brasil é um mercado de oportunidades para empresas internacionais — e os mercados internacionais abrem novas possibilidades para empresas brasileiras.",
    globalBullets: ["Compreender o mercado brasileiro", "Identificar compradores e distribuidores", "Mapear fabricantes e fornecedores", "Encontrar parceiros comerciais", "Explorar oportunidades de importação e exportação", "Desenvolver estratégias de entrada em novos mercados"],
    globalTagline: "Brazil Market Intelligence. Global Business Opportunities.", globalCta: "Explore oportunidades internacionais",
    finalTitle: "O próximo grande negócio da sua empresa pode estar em um mercado que você ainda não conhece.",
    finalText: "Descubra como a inteligência de mercado e as conexões empresariais podem ajudar sua empresa a encontrar novas oportunidades.",
    finalCta: "Converse com a DeepB2B", finalCta2: "Explore nosso ecossistema",
  },
  en: {
    ecoEyebrow: "A business ecosystem", ecoTitle: "Far beyond data. Far beyond connections.",
    ecoLead: "DeepB2B connects the different players of the B2B market — and turns those connections into intelligence and opportunities.",
    actors: ["Organizers", "Exhibitors", "Buyers", "Visitors", "Suppliers"], hub: "DeepB2B",
    pillars: [
      { title: "Market Intelligence", text: "Company data, research, sector analysis and opportunity identification." },
      { title: "Trade Shows & Events", text: "Intelligence on events, organizers, exhibitors, buyers and suppliers." },
      { title: "Business Connections", text: "Bringing buyers, suppliers, manufacturers, distributors and partners together." },
      { title: "Business Development", text: "Commercial intelligence to find customers, open markets and create business." },
    ],
    ecoCta: "Explore our ecosystem",
    eventsEyebrow: "Trade Shows & Events", eventsTitle: "A trade show starts long before the doors open.",
    eventsLead: "Trade shows move companies, professionals, buyers and suppliers across every sector. DeepB2B builds the intelligence that connects this world.",
    eventsListTitle: "We help you identify:",
    eventsBullets: ["Exhibiting companies", "Potential buyers", "Manufacturers and distributors", "Organizers and promoters", "Suppliers and service providers", "Business opportunities around each event"],
    eventsClosing: "For exhibitors, organizers, visitors and the companies around them, we create new ways to build relationships and business.",
    eventsCta: "Explore trade shows", eventsCta2: "Find opportunities for your company", upcomingTitle: "Upcoming shows on the calendar", daysLeft: "{n} days to go",
    intelEyebrow: "Market Intelligence", intelTitle: "Know the market. Spot opportunities. Find the right partners.",
    intelLead: "DeepB2B combines official company data and artificial intelligence to help companies understand their markets and build commercial strategies.",
    intelListTitle: "Our technology lets you:",
    intelBullets: ["Find companies by sector, location and economic activity", "Map potential buyers and suppliers", "Find distributors and commercial partners", "Identify expansion opportunities", "Analyze markets and business segments", "Build intelligence for B2B prospecting"],
    intelCta: "Explore our intelligence solutions",
    projEyebrow: "Business Projects", projTitle: "We turn intelligence into commercial opportunities.",
    projLead: "Every company has different challenges, markets and goals. We build tailored commercial-intelligence and business-development projects — especially for companies that want a stronger trade-show presence, new buyers, distributors and markets.",
    projListTitle: "Deliverables may include:",
    projBullets: ["Market studies and mapping", "Potential buyer identification", "Company and decision-maker mapping", "Commercial intelligence for exhibitors", "Relationship and prospecting campaigns", "New market development", "National and international expansion projects"],
    projNote: "Tailored projects, with a custom proposal for each company.", projCta: "Start a project with DeepB2B",
    clubEyebrow: "DeepClub · Business Membership", clubTitle: "Business grows when the right connections happen.",
    clubLead: "DeepB2B's business club: market intelligence, commercial opportunities, connections and benefits for business owners who want to sell more, buy better and know their market.",
    clubPillars: [
      { title: "Sell more" }, { title: "Buy better" }, { title: "Know the market" },
      { title: "Do business" }, { title: "Save" }, { title: "Build relationships" },
    ],
    clubTiers: [
      { title: "Standard", text: "Essential access to the ecosystem." },
      { title: "Experience", text: "Extended access, exclusivity and premium relationship." },
    ],
    clubSoon: "Launching soon", clubCta: "Discover DeepClub",
    portalEyebrow: "Intelligence Portal", portalTitle: "Information to understand the market. Intelligence to find opportunities.",
    portalLead: "News, analysis and research for business owners and executives who follow how markets move.",
    portalTopics: ["Trade Shows & Events", "Economy & Markets", "Industry & Business", "Foreign Trade", "Trade Marketing", "Technology & AI", "DeepB2B Research", "International Markets"],
    portalCta: "Visit the intelligence portal",
    globalEyebrow: "Global Business", globalTitle: "Business opportunities have no borders.",
    globalLead: "Brazil is a market of opportunity for international companies — and international markets open new doors for Brazilian companies.",
    globalBullets: ["Understand the Brazilian market", "Identify buyers and distributors", "Map manufacturers and suppliers", "Find commercial partners", "Explore import and export opportunities", "Build market-entry strategies"],
    globalTagline: "Brazil Market Intelligence. Global Business Opportunities.", globalCta: "Explore international opportunities",
    finalTitle: "Your company's next big deal may be in a market you don't know yet.",
    finalText: "See how market intelligence and business connections can help your company find new opportunities.",
    finalCta: "Talk to DeepB2B", finalCta2: "Explore our ecosystem",
  },
  es: {
    ecoEyebrow: "Un ecosistema de negocios", ecoTitle: "Mucho más que datos. Mucho más que conexiones.",
    ecoLead: "DeepB2B conecta a los distintos actores del mercado empresarial y convierte esas conexiones en inteligencia y oportunidades.",
    actors: ["Organizadores", "Expositores", "Compradores", "Visitantes", "Proveedores"], hub: "DeepB2B",
    pillars: [
      { title: "Inteligencia de Mercado", text: "Datos empresariales, investigaciones, análisis sectoriales e identificación de oportunidades." },
      { title: "Ferias y Eventos", text: "Inteligencia sobre eventos, organizadores, expositores, compradores y proveedores." },
      { title: "Conexiones Empresariales", text: "Acercamos compradores, proveedores, fabricantes, distribuidores y socios." },
      { title: "Desarrollo de Negocios", text: "Inteligencia comercial para encontrar clientes, abrir mercados y generar negocios." },
    ],
    ecoCta: "Conozca nuestro ecosistema",
    eventsEyebrow: "Ferias y Eventos", eventsTitle: "Una feria empieza mucho antes de que se abran las puertas.",
    eventsLead: "Las ferias mueven empresas, profesionales, compradores y proveedores de todos los sectores. DeepB2B desarrolla la inteligencia que conecta ese universo.",
    eventsListTitle: "Le ayudamos a identificar:",
    eventsBullets: ["Empresas expositoras", "Compradores potenciales", "Fabricantes y distribuidores", "Organizadores y promotores", "Proveedores y prestadores de servicios", "Oportunidades comerciales alrededor de cada evento"],
    eventsClosing: "Para expositores, organizadores, visitantes y empresas de este mercado, creamos nuevas posibilidades de relación y negocios.",
    eventsCta: "Explore ferias y eventos", eventsCta2: "Encuentre oportunidades para su empresa", upcomingTitle: "Próximas ferias del calendario", daysLeft: "faltan {n} días",
    intelEyebrow: "Inteligencia de Mercado", intelTitle: "Conozca el mercado. Identifique oportunidades. Encuentre los socios correctos.",
    intelLead: "DeepB2B combina datos empresariales oficiales e inteligencia artificial para ayudar a las empresas a entender sus mercados y diseñar estrategias comerciales.",
    intelListTitle: "Nuestra tecnología permite:",
    intelBullets: ["Identificar empresas por sector, ubicación y actividad económica", "Mapear compradores y proveedores potenciales", "Encontrar distribuidores y socios comerciales", "Identificar oportunidades de expansión", "Analizar mercados y segmentos empresariales", "Desarrollar inteligencia para prospección B2B"],
    intelCta: "Conozca nuestras soluciones de inteligencia",
    projEyebrow: "Proyectos Empresariales", projTitle: "Convertimos inteligencia en oportunidades comerciales.",
    projLead: "Cada empresa tiene desafíos, mercados y objetivos distintos. Desarrollamos proyectos a medida de inteligencia comercial y desarrollo de negocios, especialmente para quienes quieren ampliar su presencia en ferias, conquistar compradores, encontrar distribuidores y abrir mercados.",
    projListTitle: "Las entregas pueden incluir:",
    projBullets: ["Estudios y mapeos de mercado", "Identificación de compradores potenciales", "Mapeo de empresas y decisores", "Inteligencia comercial para expositores", "Campañas de relacionamiento y prospección", "Desarrollo de nuevos mercados", "Proyectos de expansión nacional e internacional"],
    projNote: "Proyectos a medida, con propuesta personalizada para cada empresa.", projCta: "Desarrolle un proyecto con DeepB2B",
    clubEyebrow: "DeepClub · Business Membership", clubTitle: "Los negocios crecen cuando ocurren las conexiones correctas.",
    clubLead: "El club empresarial de DeepB2B: inteligencia de mercado, oportunidades comerciales, conexiones y beneficios para empresarios que quieren vender más, comprar mejor y conocer su mercado.",
    clubPillars: [
      { title: "Vender más" }, { title: "Comprar mejor" }, { title: "Conocer el mercado" },
      { title: "Hacer negocios" }, { title: "Ahorrar" }, { title: "Relacionarse" },
    ],
    clubTiers: [
      { title: "Standard", text: "Acceso esencial al ecosistema." },
      { title: "Experience", text: "Acceso ampliado, exclusividad y relación premium." },
    ],
    clubSoon: "Lanzamiento próximo", clubCta: "Conozca DeepClub",
    portalEyebrow: "Portal de Inteligencia", portalTitle: "Información para entender el mercado. Inteligencia para encontrar oportunidades.",
    portalLead: "Noticias, análisis e investigaciones para empresarios y ejecutivos que siguen el movimiento de los mercados.",
    portalTopics: ["Ferias y Eventos", "Economía y Mercados", "Industria y Negocios", "Comercio Exterior", "Trade Marketing", "Tecnología e IA", "Investigaciones DeepB2B", "Mercado Internacional"],
    portalCta: "Acceda al portal de inteligencia",
    globalEyebrow: "Global Business", globalTitle: "Las oportunidades de negocio no tienen fronteras.",
    globalLead: "Brasil es un mercado de oportunidades para empresas internacionales, y los mercados internacionales abren nuevas puertas a las empresas brasileñas.",
    globalBullets: ["Comprender el mercado brasileño", "Identificar compradores y distribuidores", "Mapear fabricantes y proveedores", "Encontrar socios comerciales", "Explorar oportunidades de importación y exportación", "Desarrollar estrategias de entrada a nuevos mercados"],
    globalTagline: "Brazil Market Intelligence. Global Business Opportunities.", globalCta: "Explore oportunidades internacionales",
    finalTitle: "El próximo gran negocio de su empresa puede estar en un mercado que todavía no conoce.",
    finalText: "Descubra cómo la inteligencia de mercado y las conexiones empresariales pueden ayudar a su empresa a encontrar nuevas oportunidades.",
    finalCta: "Hable con DeepB2B", finalCta2: "Explore nuestro ecosistema",
  },
  "zh-cn": {
    ecoEyebrow: "商业生态系统", ecoTitle: "不止于数据，不止于连接。",
    ecoLead: "DeepB2B 连接 B2B 市场中的各类参与者，并将这些连接转化为情报与商机。",
    actors: ["主办方", "参展商", "买家", "观众", "供应商"], hub: "DeepB2B",
    pillars: [
      { title: "市场情报", text: "企业数据、研究、行业分析与商机识别。" },
      { title: "展会与活动", text: "关于展会、主办方、参展商、买家和供应商的情报。" },
      { title: "商业连接", text: "连接买家、供应商、制造商、分销商和合作伙伴。" },
      { title: "业务拓展", text: "用商业情报寻找客户、开拓市场、促成交易。" },
    ],
    ecoCta: "了解我们的生态系统",
    eventsEyebrow: "展会与活动", eventsTitle: "参展成效，早在开幕前就已决定。",
    eventsLead: "展会汇聚各行业的企业、专业人士、买家和供应商。DeepB2B 构建连接这一领域的情报。",
    eventsListTitle: "我们帮助您识别：",
    eventsBullets: ["参展企业", "潜在买家", "制造商与分销商", "主办方与推广方", "供应商与服务商", "围绕展会的商业机会"],
    eventsClosing: "我们为参展商、主办方、观众及相关企业创造新的合作与商业机会。",
    eventsCta: "浏览展会与活动", eventsCta2: "为您的企业寻找机会", upcomingTitle: "日历中即将举行的展会", daysLeft: "还有 {n} 天",
    intelEyebrow: "市场情报", intelTitle: "了解市场，发现机会，找到合适的伙伴。",
    intelLead: "DeepB2B 结合官方企业数据与人工智能，帮助企业了解市场并制定商业策略。",
    intelListTitle: "我们的技术可以：",
    intelBullets: ["按行业、地区和经济活动查找企业", "绘制潜在买家和供应商地图", "寻找分销商和商业伙伴", "识别扩张机会", "分析市场和企业细分", "构建 B2B 客户开发情报"],
    intelCta: "了解我们的情报解决方案",
    projEyebrow: "企业项目", projTitle: "我们把情报转化为商业机会。",
    projLead: "每家企业的挑战、市场和目标各不相同。我们为企业定制商业情报与业务拓展项目，尤其适合希望加强参展效果、获取买家、寻找分销商和开拓市场的企业。",
    projListTitle: "交付内容可包括：",
    projBullets: ["市场研究与市场地图", "潜在买家识别", "企业与决策人地图", "面向参展商的商业情报", "关系维护与客户开发活动", "新市场开拓", "国内与国际扩张项目"],
    projNote: "定制项目，为每家企业单独提供方案。", projCta: "与 DeepB2B 合作项目",
    clubEyebrow: "DeepClub · 商务会员", clubTitle: "合适的连接，带来业务增长。",
    clubLead: "DeepB2B 的商务俱乐部：为希望多销售、更好采购、了解市场的企业主提供市场情报、商业机会、人脉与权益。",
    clubPillars: [
      { title: "多销售" }, { title: "更好采购" }, { title: "了解市场" },
      { title: "促成交易" }, { title: "节省成本" }, { title: "拓展人脉" },
    ],
    clubTiers: [
      { title: "Standard", text: "生态系统基础权益。" },
      { title: "Experience", text: "扩展权益、专属服务与高端关系。" },
    ],
    clubSoon: "即将推出", clubCta: "了解 DeepClub",
    portalEyebrow: "情报门户", portalTitle: "了解市场的信息，发现机会的情报。",
    portalLead: "为关注市场动态的企业主和高管提供新闻、分析与研究。",
    portalTopics: ["展会与活动", "经济与市场", "工业与商业", "对外贸易", "贸易营销", "科技与 AI", "DeepB2B 研究", "国际市场"],
    portalCta: "访问情报门户",
    globalEyebrow: "Global Business", globalTitle: "商机没有国界。",
    globalLead: "巴西是国际企业的机遇市场，国际市场也为巴西企业带来新的可能。",
    globalBullets: ["了解巴西市场", "识别买家和分销商", "绘制制造商和供应商地图", "寻找商业伙伴", "探索进出口机会", "制定新市场进入策略"],
    globalTagline: "Brazil Market Intelligence. Global Business Opportunities.", globalCta: "探索国际机会",
    finalTitle: "您企业的下一笔大生意，可能就在一个您尚未了解的市场。",
    finalText: "了解市场情报与商业连接如何帮助您的企业发现新机会。",
    finalCta: "联系 DeepB2B", finalCta2: "了解我们的生态系统",
  },
};

const ECOSYSTEM: Record<Locale, InfoPage> = {
  "pt-br": {
    eyebrow: "Ecossistema DeepB2B", h1: "Um ecossistema completo para desenvolver negócios.",
    lead: "O mercado está cheio de informações. O desafio é descobrir onde estão as oportunidades. A DeepB2B conecta essas informações.",
    sections: [
      { title: "Nossa visão", text: "Todos os dias, milhares de empresas procuram novos clientes, fornecedores, distribuidores e parceiros. Ao mesmo tempo, feiras e eventos aproximam empresas e criam oportunidades que muitas vezes não são aproveitadas. Combinamos dados empresariais, inteligência artificial, pesquisas de mercado e tecnologia para transformar informações dispersas em conhecimento útil e oportunidades de negócios." },
      { title: "Quem faz parte", bullets: ["Organizadoras e promotoras de eventos", "Expositores, fabricantes e distribuidores", "Compradores e empresas que buscam fornecedores", "Visitantes e profissionais de mercado", "Fornecedores, prestadores de serviços e parceiros"] },
      { title: "Inteligência de Mercado", text: "Dados empresariais, pesquisas, análises setoriais e identificação de oportunidades para empresas que querem compreender e conquistar novos mercados." },
      { title: "Feiras & Eventos", text: "Inteligência sobre eventos, organizadoras, expositores, compradores e fornecedores, para aproveitar melhor cada oportunidade." },
      { title: "Conexões Empresariais", text: "Uma rede que aproxima compradores, fornecedores, fabricantes, distribuidores, prestadores de serviços e parceiros estratégicos." },
      { title: "Desenvolvimento de Negócios", text: "Soluções de inteligência comercial para identificar potenciais clientes, desenvolver mercados e transformar oportunidades em negócios." },
      { title: "Dados são o começo. Inteligência é o que faz a diferença.", bullets: ["Dados empresariais: informações estruturadas sobre empresas e mercados, de fontes oficiais", "Inteligência artificial: tecnologia para analisar, cruzar e organizar informações", "Inteligência de mercado: compreensão de segmentos, oportunidades e movimentações", "Conexões comerciais: aproximação entre empresas, compradores, fornecedores e parceiros", "Desenvolvimento de negócios: transformação da inteligência em iniciativas comerciais"] },
    ],
    ctaTitle: "Quer saber onde sua empresa se encaixa no ecossistema?", ctaText: "Converse com nossos especialistas e descubra por onde começar.", ctaLabel: "Fale com um especialista",
  },
  en: {
    eyebrow: "The DeepB2B Ecosystem", h1: "A complete ecosystem for business development.",
    lead: "Markets are full of information. The challenge is finding where the opportunities are. DeepB2B connects that information.",
    sections: [
      { title: "Our vision", text: "Every day, thousands of companies look for new customers, suppliers, distributors and partners. Meanwhile, trade shows bring companies together and create opportunities that often go unused. We combine company data, artificial intelligence, market research and technology to turn scattered information into useful knowledge and business opportunities." },
      { title: "Who is part of it", bullets: ["Event organizers and promoters", "Exhibitors, manufacturers and distributors", "Buyers and companies looking for suppliers", "Visitors and market professionals", "Suppliers, service providers and partners"] },
      { title: "Market Intelligence", text: "Company data, research, sector analysis and opportunity identification for companies that want to understand and win new markets." },
      { title: "Trade Shows & Events", text: "Intelligence on events, organizers, exhibitors, buyers and suppliers, so every opportunity counts." },
      { title: "Business Connections", text: "A network that brings together buyers, suppliers, manufacturers, distributors, service providers and strategic partners." },
      { title: "Business Development", text: "Commercial-intelligence solutions to find potential customers, develop markets and turn opportunities into business." },
      { title: "Data is the start. Intelligence makes the difference.", bullets: ["Company data: structured information on companies and markets from official sources", "Artificial intelligence: technology to analyze, cross-reference and organize information", "Market intelligence: understanding segments, opportunities and market moves", "Business connections: bringing companies, buyers, suppliers and partners together", "Business development: turning intelligence into commercial initiatives"] },
    ],
    ctaTitle: "Where does your company fit in the ecosystem?", ctaText: "Talk to our specialists and find the best place to start.", ctaLabel: "Talk to a specialist",
  },
  es: {
    eyebrow: "Ecosistema DeepB2B", h1: "Un ecosistema completo para desarrollar negocios.",
    lead: "El mercado está lleno de información. El desafío es descubrir dónde están las oportunidades. DeepB2B conecta esa información.",
    sections: [
      { title: "Nuestra visión", text: "Cada día, miles de empresas buscan nuevos clientes, proveedores, distribuidores y socios. Al mismo tiempo, las ferias acercan empresas y crean oportunidades que muchas veces no se aprovechan. Combinamos datos empresariales, inteligencia artificial, investigación de mercado y tecnología para convertir información dispersa en conocimiento útil y oportunidades de negocio." },
      { title: "Quiénes forman parte", bullets: ["Organizadores y promotores de eventos", "Expositores, fabricantes y distribuidores", "Compradores y empresas que buscan proveedores", "Visitantes y profesionales del mercado", "Proveedores, prestadores de servicios y socios"] },
      { title: "Inteligencia de Mercado", text: "Datos empresariales, investigaciones, análisis sectoriales e identificación de oportunidades para empresas que quieren entender y conquistar nuevos mercados." },
      { title: "Ferias y Eventos", text: "Inteligencia sobre eventos, organizadores, expositores, compradores y proveedores para aprovechar mejor cada oportunidad." },
      { title: "Conexiones Empresariales", text: "Una red que acerca compradores, proveedores, fabricantes, distribuidores, prestadores de servicios y socios estratégicos." },
      { title: "Desarrollo de Negocios", text: "Soluciones de inteligencia comercial para identificar clientes potenciales, desarrollar mercados y convertir oportunidades en negocios." },
      { title: "Los datos son el comienzo. La inteligencia marca la diferencia.", bullets: ["Datos empresariales: información estructurada sobre empresas y mercados de fuentes oficiales", "Inteligencia artificial: tecnología para analizar, cruzar y organizar información", "Inteligencia de mercado: comprensión de segmentos, oportunidades y movimientos", "Conexiones comerciales: acercamiento entre empresas, compradores, proveedores y socios", "Desarrollo de negocios: transformar la inteligencia en iniciativas comerciales"] },
    ],
    ctaTitle: "¿Dónde encaja su empresa en el ecosistema?", ctaText: "Hable con nuestros especialistas y descubra por dónde empezar.", ctaLabel: "Hable con un especialista",
  },
  "zh-cn": {
    eyebrow: "DeepB2B 生态系统", h1: "完整的业务拓展生态系统。",
    lead: "市场充满信息，难点在于发现机会所在。DeepB2B 将这些信息连接起来。",
    sections: [
      { title: "我们的愿景", text: "每天都有成千上万的企业在寻找新客户、供应商、分销商和合作伙伴。与此同时，展会把企业聚集在一起，创造了许多常被错过的机会。我们结合企业数据、人工智能、市场研究和技术，把分散的信息转化为有用的知识和商机。" },
      { title: "生态参与者", bullets: ["展会主办方与推广方", "参展商、制造商与分销商", "买家及寻找供应商的企业", "观众与市场专业人士", "供应商、服务商与合作伙伴"] },
      { title: "市场情报", text: "为希望了解并开拓新市场的企业提供企业数据、研究、行业分析与商机识别。" },
      { title: "展会与活动", text: "关于展会、主办方、参展商、买家和供应商的情报，让每个机会都不被浪费。" },
      { title: "商业连接", text: "连接买家、供应商、制造商、分销商、服务商和战略伙伴的网络。" },
      { title: "业务拓展", text: "用商业情报寻找潜在客户、开拓市场，并把机会转化为交易。" },
      { title: "数据是起点，情报才是关键。", bullets: ["企业数据：来自官方来源的企业与市场结构化信息", "人工智能：分析、交叉比对和整理信息的技术", "市场情报：理解细分市场、机会和市场动向", "商业连接：连接企业、买家、供应商和合作伙伴", "业务拓展：把情报转化为商业行动"] },
    ],
    ctaTitle: "您的企业在生态系统中处于什么位置？", ctaText: "与我们的专家交流，找到最合适的起点。", ctaLabel: "咨询专家",
  },
};

const PROJECTS: Record<Locale, InfoPage> = {
  "pt-br": {
    eyebrow: "Projetos Empresariais", h1: "Transformamos inteligência em oportunidades comerciais.",
    lead: "Projetos personalizados de inteligência comercial e desenvolvimento de negócios, com a operação feita por nós e integrada à sua equipe comercial.",
    sections: [
      { title: "O que podemos entregar", bullets: ["Estudos e mapeamentos de mercado", "Identificação de potenciais compradores", "Mapeamento de empresas e decisores", "Inteligência comercial para expositores", "Campanhas de relacionamento e prospecção", "Desenvolvimento de novos mercados", "Projetos de expansão nacional e internacional"] },
      { title: "Como funciona um projeto para expositores", bullets: ["Antes da feira: mapeamos as empresas com perfil, priorizamos as contas, identificamos decisores, validamos contatos e excluímos quem já é cliente", "Durante a feira: convidamos compradores com campanhas personalizadas, qualificamos respostas e organizamos reuniões com a sua equipe", "Depois da feira: retomamos os interessados, inclusive quem não compareceu, e entregamos o relatório de oportunidades"] },
      { title: "Como medimos", text: "Empresas mapeadas, contatos validados, respostas, interessados qualificados e reuniões agendadas e realizadas. Vendemos inteligência, conexões e execução comercial; reuniões e vendas dependem da resposta do mercado e não são garantidas." },
      { title: "Investimento", text: "Cada projeto é dimensionado conforme o mercado, o volume de contas e os objetivos da empresa, com proposta personalizada." },
    ],
    ctaTitle: "Vamos desenhar o seu projeto?", ctaText: "Conte o que você vende, para quem e em qual mercado ou feira quer crescer.", ctaLabel: "Solicitar apresentação",
  },
  en: {
    eyebrow: "Business Projects", h1: "We turn intelligence into commercial opportunities.",
    lead: "Tailored commercial-intelligence and business-development projects, run by our team and integrated with your sales team.",
    sections: [
      { title: "What we can deliver", bullets: ["Market studies and mapping", "Potential buyer identification", "Company and decision-maker mapping", "Commercial intelligence for exhibitors", "Relationship and prospecting campaigns", "New market development", "National and international expansion projects"] },
      { title: "How an exhibitor project works", bullets: ["Before the show: we map qualified companies, prioritize accounts, identify decision-makers, validate contacts and exclude existing customers", "During the show: we invite buyers through personalized campaigns, qualify replies and schedule meetings with your team", "After the show: we follow up with interested contacts, including no-shows, and deliver an opportunity report"] },
      { title: "How we measure", text: "Companies mapped, contacts validated, replies, qualified prospects, and meetings scheduled and held. We sell intelligence, connections and commercial execution; meetings and sales depend on market response and are not guaranteed." },
      { title: "Investment", text: "Each project is scoped to the market, account volume and goals of the company, with a custom proposal." },
    ],
    ctaTitle: "Shall we design your project?", ctaText: "Tell us what you sell, to whom, and which market or trade show you want to grow in.", ctaLabel: "Request a presentation",
  },
  es: {
    eyebrow: "Proyectos Empresariales", h1: "Convertimos inteligencia en oportunidades comerciales.",
    lead: "Proyectos a medida de inteligencia comercial y desarrollo de negocios, ejecutados por nuestro equipo e integrados a su equipo comercial.",
    sections: [
      { title: "Qué podemos entregar", bullets: ["Estudios y mapeos de mercado", "Identificación de compradores potenciales", "Mapeo de empresas y decisores", "Inteligencia comercial para expositores", "Campañas de relacionamiento y prospección", "Desarrollo de nuevos mercados", "Proyectos de expansión nacional e internacional"] },
      { title: "Cómo funciona un proyecto para expositores", bullets: ["Antes de la feria: mapeamos empresas con perfil, priorizamos cuentas, identificamos decisores, validamos contactos y excluimos a los clientes actuales", "Durante la feria: invitamos compradores con campañas personalizadas, calificamos respuestas y organizamos reuniones con su equipo", "Después de la feria: retomamos a los interesados, incluso a quienes no asistieron, y entregamos el informe de oportunidades"] },
      { title: "Cómo medimos", text: "Empresas mapeadas, contactos validados, respuestas, interesados calificados y reuniones agendadas y realizadas. Vendemos inteligencia, conexiones y ejecución comercial; las reuniones y ventas dependen de la respuesta del mercado y no están garantizadas." },
      { title: "Inversión", text: "Cada proyecto se dimensiona según el mercado, el volumen de cuentas y los objetivos de la empresa, con propuesta personalizada." },
    ],
    ctaTitle: "¿Diseñamos su proyecto?", ctaText: "Cuéntenos qué vende, a quién y en qué mercado o feria quiere crecer.", ctaLabel: "Solicitar presentación",
  },
  "zh-cn": {
    eyebrow: "企业项目", h1: "我们把情报转化为商业机会。",
    lead: "由我们团队执行、与您的销售团队协同的定制化商业情报与业务拓展项目。",
    sections: [
      { title: "我们可以交付", bullets: ["市场研究与市场地图", "潜在买家识别", "企业与决策人地图", "面向参展商的商业情报", "关系维护与客户开发活动", "新市场开拓", "国内与国际扩张项目"] },
      { title: "参展商项目如何运作", bullets: ["展前：绘制目标企业地图、确定重点客户、识别决策人、验证联系方式并排除现有客户", "展中：通过个性化活动邀请买家、筛选回复，并为您的团队安排会议", "展后：跟进有意向的客户（包括未到场者），并提交商机报告"] },
      { title: "如何衡量", text: "已绘制的企业、已验证的联系方式、回复、合格意向客户，以及已安排和已举行的会议。我们提供情报、连接与商业执行；会议和销售取决于市场反馈，不作保证。" },
      { title: "投入", text: "每个项目根据市场、客户数量和企业目标进行规划，并提供定制方案。" },
    ],
    ctaTitle: "一起规划您的项目？", ctaText: "告诉我们您销售的产品、目标客户，以及希望在哪个市场或展会实现增长。", ctaLabel: "预约演示",
  },
};

const PARTNERS: Record<Locale, InfoPage> = {
  "pt-br": {
    eyebrow: "Seja um parceiro", h1: "Vamos crescer juntos no ecossistema de negócios.",
    lead: "A DeepB2B constrói uma rede de parceiros ao redor das feiras, dos expositores e dos compradores.",
    sections: [
      { title: "Quem pode ser parceiro", bullets: ["Organizadoras e promotoras de feiras e eventos", "Montadoras de estandes, comunicação visual e mobiliário", "Logística, transporte e infraestrutura para eventos", "Hotéis, restaurantes e serviços para visitantes", "Associações, câmaras de comércio e entidades setoriais", "Consultorias e prestadores de serviços B2B"] },
      { title: "O que oferecemos", bullets: ["Divulgação no portal e no calendário de feiras da DeepB2B", "Inteligência sobre o mercado de cada setor e evento", "Programa de compradores qualificados para organizadoras", "Acesso a uma audiência de expositores, compradores e executivos"] },
      { title: "Como começa", text: "Uma conversa para entender o seu negócio e desenhar juntos o formato da parceria. As condições são definidas caso a caso." },
    ],
    ctaTitle: "Quer ser parceiro da DeepB2B?", ctaText: "Conte quem é a sua empresa e como imagina a parceria.", ctaLabel: "Fale com a gente",
  },
  en: {
    eyebrow: "Become a partner", h1: "Let's grow together in the business ecosystem.",
    lead: "DeepB2B is building a partner network around trade shows, exhibitors and buyers.",
    sections: [
      { title: "Who can partner with us", bullets: ["Trade show and event organizers", "Booth builders, signage and furniture providers", "Logistics, transport and event infrastructure", "Hotels, restaurants and visitor services", "Associations, chambers of commerce and industry bodies", "B2B consultancies and service providers"] },
      { title: "What we offer", bullets: ["Visibility on the DeepB2B portal and trade show calendar", "Market intelligence for each sector and event", "Qualified-buyer program for organizers", "Access to an audience of exhibitors, buyers and executives"] },
      { title: "How it starts", text: "A conversation to understand your business and design the partnership format together. Terms are defined case by case." },
    ],
    ctaTitle: "Want to partner with DeepB2B?", ctaText: "Tell us about your company and how you see the partnership.", ctaLabel: "Get in touch",
  },
  es: {
    eyebrow: "Sea un socio", h1: "Crezcamos juntos en el ecosistema de negocios.",
    lead: "DeepB2B está construyendo una red de socios alrededor de las ferias, los expositores y los compradores.",
    sections: [
      { title: "Quién puede ser socio", bullets: ["Organizadores y promotores de ferias y eventos", "Montadores de stands, comunicación visual y mobiliario", "Logística, transporte e infraestructura para eventos", "Hoteles, restaurantes y servicios para visitantes", "Asociaciones, cámaras de comercio y entidades sectoriales", "Consultoras y prestadores de servicios B2B"] },
      { title: "Qué ofrecemos", bullets: ["Visibilidad en el portal y el calendario de ferias de DeepB2B", "Inteligencia de mercado para cada sector y evento", "Programa de compradores calificados para organizadores", "Acceso a una audiencia de expositores, compradores y ejecutivos"] },
      { title: "Cómo empieza", text: "Una conversación para entender su negocio y diseñar juntos el formato de la alianza. Las condiciones se definen caso por caso." },
    ],
    ctaTitle: "¿Quiere ser socio de DeepB2B?", ctaText: "Cuéntenos sobre su empresa y cómo imagina la alianza.", ctaLabel: "Hable con nosotros",
  },
  "zh-cn": {
    eyebrow: "成为合作伙伴", h1: "在商业生态系统中共同成长。",
    lead: "DeepB2B 正在围绕展会、参展商和买家建立合作伙伴网络。",
    sections: [
      { title: "谁可以成为合作伙伴", bullets: ["展会与活动主办方", "展台搭建、视觉传达与家具供应商", "物流、运输与活动基础设施", "酒店、餐厅与观众服务", "行业协会、商会与行业机构", "B2B 咨询与服务提供商"] },
      { title: "我们提供", bullets: ["在 DeepB2B 门户和展会日历中的曝光", "各行业与展会的市场情报", "面向主办方的合格买家计划", "触达参展商、买家和高管受众"] },
      { title: "如何开始", text: "先沟通了解您的业务，再共同设计合作形式。合作条件逐案确定。" },
    ],
    ctaTitle: "希望成为 DeepB2B 的合作伙伴？", ctaText: "介绍您的企业以及您设想的合作方式。", ctaLabel: "联系我们",
  },
};

const CLUB: Record<Locale, ClubPage> = {
  "pt-br": {
    eyebrow: "DeepClub · Business Membership", h1: "Inteligência, conexões e oportunidades de negócios.",
    lead: "O clube empresarial que conecta empresas a novos mercados, fornecedores, compradores e oportunidades — com valor todos os meses, mesmo para quem nunca participa de uma feira.",
    soon: "Lançamento em breve",
    pillarsTitle: "Os seis pilares do DeepClub",
    pillars: [
      { title: "Vender mais", text: "Encontrar potenciais clientes e novas oportunidades comerciais." },
      { title: "Comprar melhor", text: "Encontrar fabricantes e fornecedores e negociar condições." },
      { title: "Conhecer o mercado", text: "Dados empresariais, concorrentes, setores e tendências." },
      { title: "Fazer negócios", text: "Conectar compradores, vendedores e parceiros." },
      { title: "Economizar", text: "Benefícios e condições especiais com empresas parceiras." },
      { title: "Relacionar-se", text: "Networking, encontros e relacionamento empresarial." },
    ],
    demandsEyebrow: "Central de Demandas Empresariais", demandsTitle: "Você publica o que precisa. A DeepB2B procura empresas compatíveis.",
    demandsText: "Uma forma direta de gerar oportunidades reais de negócios entre empresas.",
    demandsExamples: ["Uma indústria procura distribuidores", "Uma empresa procura fornecedores de equipamentos", "Um fabricante procura representantes comerciais", "Uma empresa estrangeira procura parceiros no Brasil", "Uma distribuidora procura novos fabricantes"],
    plansTitle: "Dois níveis de experiência",
    standard: { name: "Standard", tag: "Acesso ao ecossistema", features: ["Perfil empresarial", "Inteligência de mercado", "Radar de oportunidades", "Pesquisa de fornecedores", "Monitoramento de empresas", "Marketplace de demandas", "Networking empresarial", "Calendário de feiras", "Clube de benefícios", "Conteúdo exclusivo"] },
    experience: { name: "Experience", tag: "Acesso ampliado e exclusivo", includes: "Tudo do Standard, mais:", features: ["Inteligência avançada", "Radar personalizado", "Análise de concorrentes", "Relatórios de mercado", "Mais recursos de pesquisa", "Conexões comerciais mediadas", "Destaque empresarial", "Encontros exclusivos", "Benefícios VIP", "Atendimento prioritário"] },
    priceNote: "Preços em definição.",
    availabilityNote: "O DeepClub está em preparação. Os recursos serão liberados por etapas, e a lista do que estará disponível no lançamento será publicada aqui.",
    ctaTitle: "Quer saber quando o DeepClub abrir?", ctaText: "Fale com a gente e seja avisado do lançamento.", ctaLabel: "Quero saber do lançamento",
  },
  en: {
    eyebrow: "DeepClub · Business Membership", h1: "Intelligence, connections and business opportunities.",
    lead: "The business club that connects companies to new markets, suppliers, buyers and opportunities — with value every month, even for companies that never attend a trade show.",
    soon: "Launching soon",
    pillarsTitle: "The six pillars of DeepClub",
    pillars: [
      { title: "Sell more", text: "Find potential customers and new commercial opportunities." },
      { title: "Buy better", text: "Find manufacturers and suppliers and negotiate terms." },
      { title: "Know the market", text: "Company data, competitors, sectors and trends." },
      { title: "Do business", text: "Connect buyers, sellers and partners." },
      { title: "Save", text: "Benefits and special terms with partner companies." },
      { title: "Build relationships", text: "Networking, meetings and business relationships." },
    ],
    demandsEyebrow: "Business Demand Center", demandsTitle: "You post what you need. DeepB2B looks for matching companies.",
    demandsText: "A direct way to create real business opportunities between companies.",
    demandsExamples: ["A manufacturer looking for distributors", "A company looking for equipment suppliers", "A manufacturer looking for sales representatives", "A foreign company looking for partners in Brazil", "A distributor looking for new manufacturers"],
    plansTitle: "Two membership levels",
    standard: { name: "Standard", tag: "Access to the ecosystem", features: ["Company profile", "Market intelligence", "Opportunity radar", "Supplier search", "Company monitoring", "Demand marketplace", "Business networking", "Trade show calendar", "Benefits club", "Exclusive content"] },
    experience: { name: "Experience", tag: "Extended, exclusive access", includes: "Everything in Standard, plus:", features: ["Advanced intelligence", "Personalized radar", "Competitor analysis", "Market reports", "More research resources", "Brokered business connections", "Company spotlight", "Exclusive meetings", "VIP benefits", "Priority support"] },
    priceNote: "Pricing to be announced.",
    availabilityNote: "DeepClub is being prepared. Features will be released in stages, and the list of what is available at launch will be published here.",
    ctaTitle: "Want to know when DeepClub opens?", ctaText: "Get in touch and we'll let you know about the launch.", ctaLabel: "Notify me about the launch",
  },
  es: {
    eyebrow: "DeepClub · Business Membership", h1: "Inteligencia, conexiones y oportunidades de negocio.",
    lead: "El club empresarial que conecta empresas con nuevos mercados, proveedores, compradores y oportunidades, con valor cada mes, incluso para quien nunca participa en una feria.",
    soon: "Lanzamiento próximo",
    pillarsTitle: "Los seis pilares de DeepClub",
    pillars: [
      { title: "Vender más", text: "Encontrar clientes potenciales y nuevas oportunidades comerciales." },
      { title: "Comprar mejor", text: "Encontrar fabricantes y proveedores y negociar condiciones." },
      { title: "Conocer el mercado", text: "Datos empresariales, competidores, sectores y tendencias." },
      { title: "Hacer negocios", text: "Conectar compradores, vendedores y socios." },
      { title: "Ahorrar", text: "Beneficios y condiciones especiales con empresas aliadas." },
      { title: "Relacionarse", text: "Networking, encuentros y relaciones empresariales." },
    ],
    demandsEyebrow: "Central de Demandas Empresariales", demandsTitle: "Usted publica lo que necesita. DeepB2B busca empresas compatibles.",
    demandsText: "Una forma directa de generar oportunidades reales de negocio entre empresas.",
    demandsExamples: ["Una industria busca distribuidores", "Una empresa busca proveedores de equipos", "Un fabricante busca representantes comerciales", "Una empresa extranjera busca socios en Brasil", "Una distribuidora busca nuevos fabricantes"],
    plansTitle: "Dos niveles de experiencia",
    standard: { name: "Standard", tag: "Acceso al ecosistema", features: ["Perfil empresarial", "Inteligencia de mercado", "Radar de oportunidades", "Búsqueda de proveedores", "Monitoreo de empresas", "Marketplace de demandas", "Networking empresarial", "Calendario de ferias", "Club de beneficios", "Contenido exclusivo"] },
    experience: { name: "Experience", tag: "Acceso ampliado y exclusivo", includes: "Todo lo de Standard, más:", features: ["Inteligencia avanzada", "Radar personalizado", "Análisis de competidores", "Informes de mercado", "Más recursos de búsqueda", "Conexiones comerciales mediadas", "Destaque empresarial", "Encuentros exclusivos", "Beneficios VIP", "Atención prioritaria"] },
    priceNote: "Precios por definir.",
    availabilityNote: "DeepClub está en preparación. Los recursos se liberarán por etapas y la lista de lo disponible en el lanzamiento se publicará aquí.",
    ctaTitle: "¿Quiere saber cuándo abre DeepClub?", ctaText: "Hable con nosotros y le avisaremos del lanzamiento.", ctaLabel: "Quiero saber del lanzamiento",
  },
  "zh-cn": {
    eyebrow: "DeepClub · 商务会员", h1: "情报、连接与商业机会。",
    lead: "连接企业与新市场、供应商、买家和机会的商务俱乐部——即使从不参加展会，每个月也能获得价值。",
    soon: "即将推出",
    pillarsTitle: "DeepClub 六大支柱",
    pillars: [
      { title: "多销售", text: "寻找潜在客户和新的商业机会。" },
      { title: "更好采购", text: "寻找制造商和供应商并洽谈条件。" },
      { title: "了解市场", text: "企业数据、竞争对手、行业与趋势。" },
      { title: "促成交易", text: "连接买家、卖家和合作伙伴。" },
      { title: "节省成本", text: "合作企业提供的权益与优惠条件。" },
      { title: "拓展人脉", text: "商务社交、会面与企业关系。" },
    ],
    demandsEyebrow: "企业需求中心", demandsTitle: "您发布需求，DeepB2B 为您寻找匹配的企业。",
    demandsText: "在企业之间直接创造真实商机的方式。",
    demandsExamples: ["工业企业寻找分销商", "企业寻找设备供应商", "制造商寻找销售代表", "海外企业寻找巴西合作伙伴", "分销商寻找新的制造商"],
    plansTitle: "两个会员等级",
    standard: { name: "Standard", tag: "进入生态系统", features: ["企业档案", "市场情报", "机会雷达", "供应商搜索", "企业监测", "需求市场", "商务社交", "展会日历", "权益俱乐部", "独家内容"] },
    experience: { name: "Experience", tag: "扩展与专属权益", includes: "包含 Standard 全部内容，另加：", features: ["高级情报", "个性化雷达", "竞争对手分析", "市场报告", "更多研究资源", "撮合式商业连接", "企业推荐展示", "专属会面", "VIP 权益", "优先服务"] },
    priceNote: "价格待定。",
    availabilityNote: "DeepClub 正在筹备中。功能将分阶段开放，首发可用内容将在此公布。",
    ctaTitle: "想第一时间了解 DeepClub 上线？", ctaText: "联系我们，上线时通知您。", ctaLabel: "上线时通知我",
  },
};

export const homeSections = (l: Locale) => HOME[l];
export const ecosystemCopy = (l: Locale) => ECOSYSTEM[l];
export const projectsCopy = (l: Locale) => PROJECTS[l];
export const partnersCopy = (l: Locale) => PARTNERS[l];
export const clubCopy = (l: Locale) => CLUB[l];
