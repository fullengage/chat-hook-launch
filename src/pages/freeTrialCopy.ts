import type { Locale } from "@/i18n/types";

/** Textos da página de teste grátis (/teste-gratis, /en/free-trial, /es/prueba-gratis, /zh-cn/free-trial). */
export interface FreeTrialCopy {
  logoAlt: string;
  officialSources: string;
  talkToExpert: string;
  startTrial: string;
  whatsappMsg: string;
  badge: string;
  h1Before: string;
  h1Highlight: string;
  h1After: string;
  lead: string;
  leadStrong: string;
  pitch: string;
  valueTitle: string;
  cnpjBadge: string;
  card1Title: string;
  card1Strong: string;
  card1Text: string;
  card2Title: string;
  card2Strong: string;
  card2Text: string;
  creditsNote: string;
  formNote: string;
  stepsEyebrow: string;
  stepsTitleBefore: string;
  stepsTitleHighlight: string;
  stepsLead: string;
  steps: { t: string; d: string }[];
  productEyebrow: string;
  productTitle: string;
  productLead: string;
  productBullets: string[];
  tryFree: string;
  imageAlt: string;
  imageNote: string;
  casesEyebrow: string;
  casesTitle: string;
  casesBadge: string;
  cases: { t: string; d: string }[];
  govEyebrow: string;
  govTitle: string;
  govText: string;
  faqTitleBefore: string;
  faqTitleHighlight: string;
  faqLead: string;
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaText: string;
  exitTitle: string;
  exitText: string;
  exitBoxTitle: string;
  exitBoxText: string;
  exitCta: string;
  form: {
    badge: string;
    titleBefore: string;
    titleHighlight: string;
    leadBefore: string;
    leadDays: string;
    leadAfter: string;
    name: string;
    namePh: string;
    email: string;
    emailPh: string;
    whatsapp: string;
    whatsappPh: string;
    cnpj: string;
    termsBefore: string;
    terms: string;
    termsMid: string;
    privacy: string;
    submit: string;
    submitting: string;
    secure: string;
    errName: string;
    errEmail: string;
    errWhatsapp: string;
    errCnpj: string;
    errTerms: string;
    errGeneric: string;
    success: string;
    whatsappHelp: string;
    helpMsg: string;
  };
}

const PT: FreeTrialCopy = {
  logoAlt: "DeepB2B — Inteligência de Dados B2B",
  officialSources: "Fontes Públicas Oficiais",
  talkToExpert: "Falar com Especialista",
  startTrial: "Começar teste grátis sem cartão",
  whatsappMsg: "Olá! Gostaria de saber mais sobre o DeepB2B.",
  badge: "Inteligência e Produtividade Comercial B2B",
  h1Before: "Encontre empresas com ",
  h1Highlight: "maior potencial",
  h1After: " de comprar de você.",
  lead: "Informe o site da sua empresa. A IA do {brand} entende o que você vende, identifica seu cliente ideal e encontra empresas compatíveis, explicando por que cada uma merece a atenção do seu comercial.",
  leadStrong: "DeepB2B",
  pitch: "Seu vendedor passa menos tempo procurando clientes e mais tempo conversando com quem tem potencial de comprar.",
  valueTitle: "7 dias grátis, sem cartão • Acesso imediato à plataforma",
  cnpjBadge: "CNPJ Brasileiro",
  card1Title: "Descoberta & Dados",
  card1Strong: "Contato + sinais financeiros",
  card1Text: " (telefone, e-mail, sócios, Receita Federal e dívida ativa PGFN).",
  card2Title: "Qualificação por IA",
  card2Strong: "Enriquecimento completo",
  card2Text: " (contato + decisor + análise de aderência e abordagem comercial por IA).",
  creditsNote: "Os planos e a tabela detalhada de consumo de créditos ficam disponíveis dentro da plataforma após o login. Se uma consulta não localizar contato válido, o crédito não é consumido.",
  formNote: "Cadastro imediato — seu acesso de teste é liberado assim que sua conta é criada.",
  stepsEyebrow: "Jornada Prática na Plataforma",
  stepsTitleBefore: "Do seu site à abordagem comercial em ",
  stepsTitleHighlight: "4 passos",
  stepsLead: "Sem precisar adivinhar códigos CNAE ou cruzar planilhas manualmente: a IA guia cada etapa da sua prospecção.",
  steps: [
    { t: "Sua Empresa (Briefing)", d: "Informe o seu site, o que você vende, para quem e em qual região. A IA interpreta sua oferta comercial." },
    { t: "Seu Cliente Ideal (ICP)", d: "A IA sugere o perfil de comprador ideal e seleciona automaticamente os CNAEs, portes e estados mais aderentes." },
    { t: "Empresas Compatíveis", d: "Receba as empresas ordenadas por nota de aderência ao seu ICP, com a explicação clara do motivo para abordar cada uma." },
    { t: "Funil e Enriquecimento", d: "Salve no funil e escolha o que liberar sob demanda: contatos, sinais financeiros, enriquecimento completo por IA ou exportação em planilha." },
  ],
  productEyebrow: "Por Dentro do Produto",
  productTitle: "Qualificação com motivo claro, decisores e sinais financeiros de fontes públicas",
  productLead: "Em vez de entregar apenas uma lista fria de CNPJs, o DeepB2B cruza a base oficial de empresas ativas com o seu ICP para priorizar quem realmente tem perfil para comprar sua solução.",
  productBullets: [
    "Nota de aderência (0 a 100) calculada por IA com justificativa em linguagem comercial",
    "Identificação de contatos corporativos, quadro societário e decisores no LinkedIn",
    "Sinais financeiros objetivos (Receita Federal, dívida ativa PGFN e cartórios) com fonte e data",
    "Funil comercial em Kanban e exportação de listas qualificadas em planilha",
  ],
  tryFree: "Experimentar grátis por 7 dias",
  imageAlt: "Ilustração do painel DeepB2B — Inteligência de Mercado B2B",
  imageNote: "* Imagem meramente ilustrativa da interface do painel (números demonstrativos). Na plataforma, o volume de empresas e oportunidades reflete os filtros de CNAE, porte e região do seu ICP sobre a base pública da Receita Federal.",
  casesEyebrow: "Aplicação Real em Operações B2B",
  casesTitle: "Como empresas B2B utilizam a inteligência do DeepB2B na prática",
  casesBadge: "Grupo FullWeb • Metodologia Aplicada",
  cases: [
    { t: "Outsourcing de TI & Impressão (Case MGITECH)", d: "Mapeamento regional no estado de São Paulo cruzando porte empresarial, setores intensivos em documentação (saúde, logística, educação e indústria) e exclusão automática de concorrentes do mesmo CNAE." },
    { t: "Engenharia & Saúde e Segurança do Trabalho (SST)", d: "Identificação de indústrias e construtoras ativas com obrigação de PGR/PCMSO, liberando contato validado, situação cadastral na Receita Federal e decisores de RH/Operações." },
    { t: "Indústria de Embalagens & Insumos B2B", d: "Seleção automática dos CNAEs compradores (indústrias de alimentos, cosméticos e centros de distribuição) separando fornecedores de matéria-prima dos reais compradores finais." },
  ],
  govEyebrow: "Transparência na Plataforma",
  govTitle: "Planos e tabela detalhada de créditos ficam disponíveis após o login",
  govText: "Dentro da plataforma autenticada você visualiza o custo em créditos antes de cada clique, consulta seu extrato em tempo real e escolhe o plano adequado à sua operação comercial.",
  faqTitleBefore: "Perguntas ",
  faqTitleHighlight: "Frequentes",
  faqLead: "Regras claras sobre o teste grátis de 7 dias, funcionamento da plataforma, exportação e LGPD.",
  faq: [
    { q: "Como funciona o teste grátis de 7 dias?", a: "Ao criar sua conta gratuita (sem cartão de crédito) com o CNPJ da sua empresa, você recebe 20 créditos de degustação válidos por 7 dias para testar a descoberta de empresas, consultar contatos, verificar sinais financeiros e testar o enriquecimento por IA. A tabela detalhada de consumo fica disponível dentro do painel." },
    { q: "Posso exportar listas durante o teste grátis? Os créditos expiram?", a: "Sim! Durante o teste grátis você pode exportar empresas do seu funil para planilha. Os créditos do período de avaliação valem pelos 7 dias do teste. Nos planos da plataforma, todas as regras de renovação e extrato ficam visíveis na sua área logada." },
    { q: "O que acontece quando uma consulta não encontra informações ou se eu clicar duas vezes na mesma empresa?", a: "Você não perde créditos: (1) se a pesquisa de contato não localizar telefone ou e-mail válido, o crédito não é cobrado (ou é estornado automaticamente no seu extrato); (2) uma ação já liberada para uma empresa fica salva na sua conta e nunca é cobrada duas vezes." },
    { q: "O que são os Sinais Financeiros?", a: "São dados objetivos consultados em fontes públicas oficiais (situação cadastral na Receita Federal, registros públicos de recuperação judicial/falência, dívida ativa na PGFN e, quando habilitado sob pedido, protestos em cartório), sempre acompanhados da fonte e data da consulta. Não representam score, nota ou recomendação de crédito." },
    { q: "Como o DeepB2B trata a LGPD e os dados de decisores?", a: "Os dados cadastrais de pessoas jurídicas provêm de bases públicas oficiais (Receita Federal e PGFN). Informações corporativas de contato e de decisores destinam-se exclusivamente à prospecção comercial B2B sob legítimo interesse e transparência (Lei nº 13.709/2018 — LGPD), contando com canal permanente e gratuito para revisão ou oposição/exclusão de dados pelo titular." },
  ],
  ctaTitle: "Encontre empresas com maior potencial de comprar de você",
  ctaText: "Teste grátis por 7 dias, sem cartão, com liberação imediata na plataforma.",
  exitTitle: "Experimente o DeepB2B grátis por 7 dias",
  exitText: "Informe o site da sua empresa, descubra seu cliente ideal com IA e analise empresas compatíveis com contato e sinais financeiros por 7 dias sem cartão.",
  exitBoxTitle: "7 dias grátis • Sem cartão de crédito",
  exitBoxText: "Transparência total dentro da plataforma e garantia contra cobrança em consulta sem dados.",
  exitCta: "Liberar meu acesso grátis agora",
  form: {
    badge: "7 Dias Grátis • Sem Cartão de Crédito",
    titleBefore: "Liberar meu ",
    titleHighlight: "Acesso Grátis",
    leadBefore: "Crie sua conta gratuita por ",
    leadDays: "7 dias",
    leadAfter: " para analisar empresas compatíveis, acessar contatos, sinais financeiros e enriquecimento por IA. Os detalhes de planos e consumo ficam disponíveis dentro da plataforma.",
    name: "Nome Completo",
    namePh: "Seu nome",
    email: "E-mail Corporativo",
    emailPh: "voce@suaempresa.com.br",
    whatsapp: "WhatsApp com DDD",
    whatsappPh: "(11) 99999-9999",
    cnpj: "CNPJ da sua empresa",
    termsBefore: "Li e aceito os ",
    terms: "Termos de Uso",
    termsMid: " e a ",
    privacy: "Política de Privacidade",
    submit: "COMEÇAR TESTE GRÁTIS SEM CARTÃO",
    submitting: "Criando sua conta...",
    secure: "Ambiente Seguro • Sem Cartão de Crédito",
    errName: "O nome deve ter pelo menos 2 caracteres.",
    errEmail: "Informe um e-mail corporativo válido.",
    errWhatsapp: "Informe o WhatsApp com DDD.",
    errCnpj: "Informe o CNPJ da empresa (14 números).",
    errTerms: "Você deve aceitar os Termos de Uso e Política de Privacidade.",
    errGeneric: "Não conseguimos criar sua conta agora.",
    success: "Conta criada! Entrando na plataforma…",
    whatsappHelp: "Falar no WhatsApp",
    helpMsg: "Olá! Tentei criar minha conta de teste do DeepB2B e não consegui.",
  },
};

const EN: FreeTrialCopy = {
  logoAlt: "DeepB2B — B2B Data Intelligence",
  officialSources: "Official Public Sources",
  talkToExpert: "Talk to an Expert",
  startTrial: "Start free trial, no card",
  whatsappMsg: "Hi! I'd like to know more about DeepB2B.",
  badge: "B2B Sales Intelligence & Productivity",
  h1Before: "Find the Brazilian companies ",
  h1Highlight: "most likely",
  h1After: " to buy from you.",
  lead: "Enter your company website. {brand}'s AI understands what you sell, identifies your ideal customer and finds matching companies, explaining why each one deserves your sales team's attention.",
  leadStrong: "DeepB2B",
  pitch: "Your sales reps spend less time searching for customers and more time talking to the ones who are likely to buy.",
  valueTitle: "7 days free, no card • Instant platform access",
  cnpjBadge: "Brazilian CNPJ required",
  card1Title: "Discovery & Data",
  card1Strong: "Contact + financial signals",
  card1Text: " (phone, email, partners, Federal Revenue registry and PGFN tax debt).",
  card2Title: "AI Qualification",
  card2Strong: "Full enrichment",
  card2Text: " (contact + decision-maker + AI fit analysis and sales approach).",
  creditsNote: "Plans and the detailed credit usage table are available inside the platform after login. If a lookup finds no valid contact, no credit is charged.",
  formNote: "Instant sign-up — your trial access is unlocked as soon as your account is created.",
  stepsEyebrow: "Hands-on Platform Journey",
  stepsTitleBefore: "From your website to a sales approach in ",
  stepsTitleHighlight: "4 steps",
  stepsLead: "No guessing CNAE industry codes or cross-checking spreadsheets by hand: the AI guides every step of your prospecting.",
  steps: [
    { t: "Your Company (Briefing)", d: "Enter your website, what you sell, to whom and in which region. The AI interprets your commercial offer." },
    { t: "Your Ideal Customer (ICP)", d: "The AI suggests your ideal buyer profile and automatically selects the best-fitting CNAE codes, company sizes and states." },
    { t: "Matching Companies", d: "Get companies ranked by ICP fit score, with a clear explanation of why each one is worth approaching." },
    { t: "Pipeline & Enrichment", d: "Save them to your pipeline and unlock on demand: contacts, financial signals, full AI enrichment or spreadsheet export." },
  ],
  productEyebrow: "Inside the Product",
  productTitle: "Qualification with a clear reason, decision-makers and financial signals from public sources",
  productLead: "Instead of handing you a cold list of CNPJs, DeepB2B matches the official registry of active companies against your ICP to prioritize those that truly fit your solution.",
  productBullets: [
    "AI fit score (0 to 100) with a justification in plain sales language",
    "Corporate contacts, ownership structure and decision-makers on LinkedIn",
    "Objective financial signals (Federal Revenue, PGFN tax debt and notary records) with source and date",
    "Kanban sales pipeline and export of qualified lists to spreadsheets",
  ],
  tryFree: "Try it free for 7 days",
  imageAlt: "DeepB2B dashboard illustration — B2B Market Intelligence",
  imageNote: "* Illustrative image of the dashboard interface (sample numbers). In the platform, the number of companies and opportunities reflects your ICP's CNAE, size and region filters over the public Federal Revenue registry.",
  casesEyebrow: "Real-world B2B Applications",
  casesTitle: "How B2B companies use DeepB2B intelligence in practice",
  casesBadge: "Grupo FullWeb • Applied Methodology",
  cases: [
    { t: "IT & Print Outsourcing (MGITECH case)", d: "Regional mapping in São Paulo state combining company size, document-heavy sectors (healthcare, logistics, education and industry) and automatic exclusion of competitors with the same CNAE." },
    { t: "Engineering & Occupational Health and Safety", d: "Finding active manufacturers and builders required to keep PGR/PCMSO programs, unlocking validated contacts, Federal Revenue status and HR/Operations decision-makers." },
    { t: "Packaging & B2B Supplies Industry", d: "Automatic selection of buyer CNAE codes (food and cosmetics manufacturers, distribution centers), separating raw-material suppliers from the real end buyers." },
  ],
  govEyebrow: "Platform Transparency",
  govTitle: "Plans and the detailed credit table are available after login",
  govText: "Inside the platform you see the credit cost before every click, check your statement in real time and choose the plan that fits your sales operation.",
  faqTitleBefore: "Frequently Asked ",
  faqTitleHighlight: "Questions",
  faqLead: "Clear rules about the 7-day free trial, how the platform works, exports and LGPD (Brazil's data protection law).",
  faq: [
    { q: "How does the 7-day free trial work?", a: "When you create your free account (no credit card) with your company's Brazilian CNPJ, you get 20 trial credits valid for 7 days to test company discovery, contact lookups, financial signals and AI enrichment. The detailed usage table is available inside the dashboard." },
    { q: "Can I export lists during the trial? Do credits expire?", a: "Yes! During the free trial you can export companies from your pipeline to a spreadsheet. Trial credits are valid for the 7 days of the trial. On paid plans, all renewal and statement rules are visible in your logged-in area." },
    { q: "What happens if a lookup finds nothing, or if I click the same company twice?", a: "You don't lose credits: (1) if the contact search finds no valid phone or email, the credit is not charged (or is automatically refunded on your statement); (2) an action already unlocked for a company stays saved in your account and is never charged twice." },
    { q: "What are Financial Signals?", a: "Objective data from official public sources (Federal Revenue registry status, public records of judicial recovery/bankruptcy, PGFN tax debt and, when enabled on request, notary protests), always shown with the source and lookup date. They are not a credit score, rating or recommendation." },
    { q: "How does DeepB2B handle LGPD and decision-maker data?", a: "Company registry data comes from official public sources (Federal Revenue and PGFN). Corporate contact and decision-maker information is used exclusively for B2B prospecting under legitimate interest and transparency (Law No. 13,709/2018 — LGPD), with a permanent, free channel for data subjects to review, object to or delete their data." },
  ],
  ctaTitle: "Find the companies most likely to buy from you",
  ctaText: "Free for 7 days, no card, with instant platform access.",
  exitTitle: "Try DeepB2B free for 7 days",
  exitText: "Enter your company website, discover your ideal customer with AI and analyze matching companies with contacts and financial signals for 7 days, no card.",
  exitBoxTitle: "7 days free • No credit card",
  exitBoxText: "Full transparency inside the platform and no charge for lookups that return no data.",
  exitCta: "Unlock my free access now",
  form: {
    badge: "7 Days Free • No Credit Card",
    titleBefore: "Unlock my ",
    titleHighlight: "Free Access",
    leadBefore: "Create your free account for ",
    leadDays: "7 days",
    leadAfter: " to analyze matching companies, access contacts, financial signals and AI enrichment. Plan and usage details are available inside the platform.",
    name: "Full Name",
    namePh: "Your name",
    email: "Work Email",
    emailPh: "you@yourcompany.com",
    whatsapp: "WhatsApp (with area code)",
    whatsappPh: "+55 11 99999-9999",
    cnpj: "Your company's CNPJ",
    termsBefore: "I have read and accept the ",
    terms: "Terms of Use",
    termsMid: " and the ",
    privacy: "Privacy Policy",
    submit: "START FREE TRIAL, NO CARD",
    submitting: "Creating your account...",
    secure: "Secure Environment • No Credit Card",
    errName: "Name must have at least 2 characters.",
    errEmail: "Enter a valid work email.",
    errWhatsapp: "Enter your WhatsApp number with area code.",
    errCnpj: "Enter your company's CNPJ (14 digits).",
    errTerms: "You must accept the Terms of Use and Privacy Policy.",
    errGeneric: "We couldn't create your account right now.",
    success: "Account created! Opening the platform…",
    whatsappHelp: "Chat on WhatsApp",
    helpMsg: "Hi! I tried to create my DeepB2B trial account and couldn't.",
  },
};

const ES: FreeTrialCopy = {
  logoAlt: "DeepB2B — Inteligencia de Datos B2B",
  officialSources: "Fuentes Públicas Oficiales",
  talkToExpert: "Hablar con un Especialista",
  startTrial: "Empezar prueba gratis sin tarjeta",
  whatsappMsg: "¡Hola! Me gustaría saber más sobre DeepB2B.",
  badge: "Inteligencia y Productividad Comercial B2B",
  h1Before: "Encuentre las empresas brasileñas con ",
  h1Highlight: "mayor potencial",
  h1After: " de comprarle.",
  lead: "Ingrese el sitio web de su empresa. La IA de {brand} entiende lo que usted vende, identifica a su cliente ideal y encuentra empresas compatibles, explicando por qué cada una merece la atención de su equipo comercial.",
  leadStrong: "DeepB2B",
  pitch: "Su vendedor pasa menos tiempo buscando clientes y más tiempo conversando con quien tiene potencial de comprar.",
  valueTitle: "7 días gratis, sin tarjeta • Acceso inmediato a la plataforma",
  cnpjBadge: "Requiere CNPJ brasileño",
  card1Title: "Descubrimiento y Datos",
  card1Strong: "Contacto + señales financieras",
  card1Text: " (teléfono, e-mail, socios, Receita Federal y deuda activa PGFN).",
  card2Title: "Calificación por IA",
  card2Strong: "Enriquecimiento completo",
  card2Text: " (contacto + decisor + análisis de afinidad y abordaje comercial por IA).",
  creditsNote: "Los planes y la tabla detallada de consumo de créditos están disponibles dentro de la plataforma después de iniciar sesión. Si una consulta no encuentra un contacto válido, el crédito no se consume.",
  formNote: "Registro inmediato: su acceso de prueba se libera en cuanto se crea su cuenta.",
  stepsEyebrow: "Recorrido Práctico en la Plataforma",
  stepsTitleBefore: "De su sitio web al abordaje comercial en ",
  stepsTitleHighlight: "4 pasos",
  stepsLead: "Sin adivinar códigos CNAE ni cruzar hojas de cálculo a mano: la IA guía cada etapa de su prospección.",
  steps: [
    { t: "Su Empresa (Briefing)", d: "Ingrese su sitio web, qué vende, a quién y en qué región. La IA interpreta su oferta comercial." },
    { t: "Su Cliente Ideal (ICP)", d: "La IA sugiere el perfil de comprador ideal y selecciona automáticamente los CNAE, tamaños y estados más afines." },
    { t: "Empresas Compatibles", d: "Reciba las empresas ordenadas por puntuación de afinidad con su ICP, con una explicación clara de por qué abordar cada una." },
    { t: "Embudo y Enriquecimiento", d: "Guárdelas en el embudo y elija qué liberar bajo demanda: contactos, señales financieras, enriquecimiento completo por IA o exportación a hoja de cálculo." },
  ],
  productEyebrow: "Por Dentro del Producto",
  productTitle: "Calificación con motivo claro, decisores y señales financieras de fuentes públicas",
  productLead: "En lugar de entregar solo una lista fría de CNPJ, DeepB2B cruza el registro oficial de empresas activas con su ICP para priorizar a quienes realmente tienen perfil para comprar su solución.",
  productBullets: [
    "Puntuación de afinidad (0 a 100) calculada por IA con justificación en lenguaje comercial",
    "Identificación de contactos corporativos, cuadro societario y decisores en LinkedIn",
    "Señales financieras objetivas (Receita Federal, deuda activa PGFN y notarías) con fuente y fecha",
    "Embudo comercial en Kanban y exportación de listas calificadas a hoja de cálculo",
  ],
  tryFree: "Probar gratis por 7 días",
  imageAlt: "Ilustración del panel DeepB2B — Inteligencia de Mercado B2B",
  imageNote: "* Imagen meramente ilustrativa de la interfaz del panel (números de demostración). En la plataforma, el volumen de empresas y oportunidades refleja los filtros de CNAE, tamaño y región de su ICP sobre la base pública de la Receita Federal.",
  casesEyebrow: "Aplicación Real en Operaciones B2B",
  casesTitle: "Cómo las empresas B2B usan la inteligencia de DeepB2B en la práctica",
  casesBadge: "Grupo FullWeb • Metodología Aplicada",
  cases: [
    { t: "Outsourcing de TI e Impresión (Caso MGITECH)", d: "Mapeo regional en el estado de São Paulo cruzando tamaño empresarial, sectores intensivos en documentación (salud, logística, educación e industria) y exclusión automática de competidores con el mismo CNAE." },
    { t: "Ingeniería y Seguridad y Salud en el Trabajo", d: "Identificación de industrias y constructoras activas obligadas a mantener PGR/PCMSO, liberando contacto validado, situación registral en la Receita Federal y decisores de RR. HH./Operaciones." },
    { t: "Industria de Embalajes e Insumos B2B", d: "Selección automática de los CNAE compradores (industrias de alimentos, cosméticos y centros de distribución), separando proveedores de materia prima de los verdaderos compradores finales." },
  ],
  govEyebrow: "Transparencia en la Plataforma",
  govTitle: "Los planes y la tabla detallada de créditos están disponibles después de iniciar sesión",
  govText: "Dentro de la plataforma usted ve el costo en créditos antes de cada clic, consulta su extracto en tiempo real y elige el plan adecuado para su operación comercial.",
  faqTitleBefore: "Preguntas ",
  faqTitleHighlight: "Frecuentes",
  faqLead: "Reglas claras sobre la prueba gratis de 7 días, el funcionamiento de la plataforma, la exportación y la LGPD (ley brasileña de protección de datos).",
  faq: [
    { q: "¿Cómo funciona la prueba gratis de 7 días?", a: "Al crear su cuenta gratuita (sin tarjeta de crédito) con el CNPJ brasileño de su empresa, recibe 20 créditos de prueba válidos por 7 días para probar el descubrimiento de empresas, consultar contactos, verificar señales financieras y probar el enriquecimiento por IA. La tabla detallada de consumo está disponible dentro del panel." },
    { q: "¿Puedo exportar listas durante la prueba? ¿Los créditos vencen?", a: "¡Sí! Durante la prueba gratis puede exportar empresas de su embudo a una hoja de cálculo. Los créditos del período de evaluación valen durante los 7 días de la prueba. En los planes de la plataforma, todas las reglas de renovación y extracto están visibles en su área privada." },
    { q: "¿Qué pasa si una consulta no encuentra información o si hago clic dos veces en la misma empresa?", a: "No pierde créditos: (1) si la búsqueda de contacto no encuentra teléfono o e-mail válido, el crédito no se cobra (o se reembolsa automáticamente en su extracto); (2) una acción ya liberada para una empresa queda guardada en su cuenta y nunca se cobra dos veces." },
    { q: "¿Qué son las Señales Financieras?", a: "Son datos objetivos consultados en fuentes públicas oficiales (situación registral en la Receita Federal, registros públicos de recuperación judicial/quiebra, deuda activa en la PGFN y, cuando se habilita a pedido, protestos notariales), siempre con la fuente y la fecha de la consulta. No representan un score, calificación ni recomendación de crédito." },
    { q: "¿Cómo trata DeepB2B la LGPD y los datos de decisores?", a: "Los datos registrales de personas jurídicas provienen de bases públicas oficiales (Receita Federal y PGFN). La información corporativa de contacto y de decisores se destina exclusivamente a la prospección comercial B2B bajo interés legítimo y transparencia (Ley n.º 13.709/2018 — LGPD), con un canal permanente y gratuito para que el titular revise, se oponga o solicite la eliminación de sus datos." },
  ],
  ctaTitle: "Encuentre las empresas con mayor potencial de comprarle",
  ctaText: "Prueba gratis por 7 días, sin tarjeta, con acceso inmediato a la plataforma.",
  exitTitle: "Pruebe DeepB2B gratis por 7 días",
  exitText: "Ingrese el sitio web de su empresa, descubra a su cliente ideal con IA y analice empresas compatibles con contacto y señales financieras durante 7 días sin tarjeta.",
  exitBoxTitle: "7 días gratis • Sin tarjeta de crédito",
  exitBoxText: "Transparencia total dentro de la plataforma y garantía de no cobro en consultas sin datos.",
  exitCta: "Liberar mi acceso gratis ahora",
  form: {
    badge: "7 Días Gratis • Sin Tarjeta de Crédito",
    titleBefore: "Liberar mi ",
    titleHighlight: "Acceso Gratis",
    leadBefore: "Cree su cuenta gratuita por ",
    leadDays: "7 días",
    leadAfter: " para analizar empresas compatibles, acceder a contactos, señales financieras y enriquecimiento por IA. Los detalles de planes y consumo están disponibles dentro de la plataforma.",
    name: "Nombre Completo",
    namePh: "Su nombre",
    email: "E-mail Corporativo",
    emailPh: "usted@suempresa.com",
    whatsapp: "WhatsApp con código de área",
    whatsappPh: "+55 11 99999-9999",
    cnpj: "CNPJ de su empresa",
    termsBefore: "He leído y acepto los ",
    terms: "Términos de Uso",
    termsMid: " y la ",
    privacy: "Política de Privacidad",
    submit: "EMPEZAR PRUEBA GRATIS SIN TARJETA",
    submitting: "Creando su cuenta...",
    secure: "Entorno Seguro • Sin Tarjeta de Crédito",
    errName: "El nombre debe tener al menos 2 caracteres.",
    errEmail: "Ingrese un e-mail corporativo válido.",
    errWhatsapp: "Ingrese el WhatsApp con código de área.",
    errCnpj: "Ingrese el CNPJ de la empresa (14 números).",
    errTerms: "Debe aceptar los Términos de Uso y la Política de Privacidad.",
    errGeneric: "No pudimos crear su cuenta en este momento.",
    success: "¡Cuenta creada! Entrando a la plataforma…",
    whatsappHelp: "Hablar por WhatsApp",
    helpMsg: "¡Hola! Intenté crear mi cuenta de prueba de DeepB2B y no pude.",
  },
};

const ZH: FreeTrialCopy = {
  logoAlt: "DeepB2B — B2B 数据智能",
  officialSources: "官方公开数据源",
  talkToExpert: "咨询专家",
  startTrial: "免费试用，无需信用卡",
  whatsappMsg: "您好！我想进一步了解 DeepB2B。",
  badge: "B2B 销售情报与效率",
  h1Before: "找到",
  h1Highlight: "最有可能",
  h1After: "向您采购的巴西企业。",
  lead: "输入您公司的网站。{brand} 的 AI 会理解您销售的产品，识别您的理想客户，并找到匹配的企业，同时说明每家企业值得销售团队关注的原因。",
  leadStrong: "DeepB2B",
  pitch: "让销售人员少花时间寻找客户，多花时间与真正有购买潜力的客户沟通。",
  valueTitle: "免费 7 天，无需信用卡 • 立即访问平台",
  cnpjBadge: "需巴西 CNPJ",
  card1Title: "发现与数据",
  card1Strong: "联系方式 + 财务信号",
  card1Text: "（电话、邮箱、股东、巴西联邦税务局登记及 PGFN 欠税记录）。",
  card2Title: "AI 资质评估",
  card2Strong: "完整信息补全",
  card2Text: "（联系方式 + 决策人 + AI 匹配度分析与销售切入建议）。",
  creditsNote: "套餐及详细积分消耗表在登录平台后可见。如果查询未找到有效联系方式，则不扣除积分。",
  formNote: "即时注册 — 账户创建后立即开通试用权限。",
  stepsEyebrow: "平台实操流程",
  stepsTitleBefore: "从您的网站到销售触达，只需 ",
  stepsTitleHighlight: "4 步",
  stepsLead: "无需猜测 CNAE 行业代码，也无需手动核对表格：AI 引导您完成每一步客户开发。",
  steps: [
    { t: "您的公司（简介）", d: "输入您的网站、销售的产品、目标客户和所在地区。AI 会解读您的商业方案。" },
    { t: "您的理想客户（ICP）", d: "AI 建议理想买家画像，并自动选择最匹配的 CNAE 代码、企业规模和州。" },
    { t: "匹配企业", d: "按 ICP 匹配度评分排序的企业名单，并清楚说明为何值得接触每一家。" },
    { t: "销售漏斗与信息补全", d: "保存到漏斗，并按需解锁：联系方式、财务信号、完整 AI 信息补全或导出表格。" },
  ],
  productEyebrow: "产品详解",
  productTitle: "有明确理由的资质评估、决策人以及来自公开来源的财务信号",
  productLead: "DeepB2B 不只是提供一份冷冰冰的 CNPJ 名单，而是将官方活跃企业登记库与您的 ICP 进行比对，优先呈现真正适合购买您方案的企业。",
  productBullets: [
    "AI 计算的匹配度评分（0 到 100），并附销售语言的理由说明",
    "识别企业联系方式、股东结构及 LinkedIn 上的决策人",
    "客观财务信号（联邦税务局、PGFN 欠税及公证登记），注明来源和日期",
    "看板式销售漏斗，可将合格名单导出为表格",
  ],
  tryFree: "免费试用 7 天",
  imageAlt: "DeepB2B 面板示意图 — B2B 市场情报",
  imageNote: "* 面板界面仅为示意（演示数据）。在平台中，企业和机会数量取决于您 ICP 的 CNAE、规模和地区筛选条件，数据来自巴西联邦税务局公开登记库。",
  casesEyebrow: "B2B 业务真实应用",
  casesTitle: "B2B 企业如何在实践中使用 DeepB2B 情报",
  casesBadge: "Grupo FullWeb • 应用方法论",
  cases: [
    { t: "IT 与打印外包（MGITECH 案例）", d: "在圣保罗州进行区域映射，结合企业规模、文档密集型行业（医疗、物流、教育和工业），并自动排除相同 CNAE 的竞争对手。" },
    { t: "工程与职业健康安全", d: "识别有 PGR/PCMSO 义务的活跃工业企业和建筑商，解锁经验证的联系方式、联邦税务局登记状态以及人力资源/运营决策人。" },
    { t: "包装与 B2B 原料行业", d: "自动选择采购方 CNAE（食品、化妆品工业及配送中心），将原材料供应商与真正的终端买家区分开。" },
  ],
  govEyebrow: "平台透明度",
  govTitle: "套餐和详细积分表在登录后可见",
  govText: "在平台内，您可以在每次点击前查看积分成本，实时查询账单明细，并选择适合您销售业务的套餐。",
  faqTitleBefore: "常见",
  faqTitleHighlight: "问题",
  faqLead: "关于 7 天免费试用、平台运作、导出以及 LGPD（巴西数据保护法）的明确规则。",
  faq: [
    { q: "7 天免费试用如何运作？", a: "使用您公司的巴西 CNPJ 创建免费账户（无需信用卡）后，您将获得 20 个试用积分，有效期 7 天，可用于测试企业发现、查询联系方式、查看财务信号和 AI 信息补全。详细消耗表可在面板中查看。" },
    { q: "试用期间可以导出名单吗？积分会过期吗？", a: "可以！免费试用期间，您可以将漏斗中的企业导出为表格。试用积分在 7 天试用期内有效。在付费套餐中，所有续费和账单规则都可在登录区域查看。" },
    { q: "如果查询没有找到信息，或者我对同一家企业点击两次，会怎样？", a: "您不会损失积分：(1) 如果联系方式查询未找到有效电话或邮箱，则不扣积分（或自动退回到您的账单）；(2) 已为某企业解锁的操作会保存在您的账户中，绝不会重复收费。" },
    { q: "什么是财务信号？", a: "来自官方公开来源的客观数据（联邦税务局登记状态、司法重整/破产公开记录、PGFN 欠税，以及按需开通的公证拒付记录），始终注明来源和查询日期。它们不代表信用评分、评级或信贷建议。" },
    { q: "DeepB2B 如何处理 LGPD 和决策人数据？", a: "法人登记数据来自官方公开数据库（联邦税务局和 PGFN）。企业联系方式和决策人信息仅用于基于合法利益和透明原则的 B2B 客户开发（第 13.709/2018 号法律 — LGPD），并为数据主体提供永久免费的渠道，用于查阅、反对或删除其数据。" },
  ],
  ctaTitle: "找到最有可能向您采购的企业",
  ctaText: "免费试用 7 天，无需信用卡，立即开通平台。",
  exitTitle: "免费试用 DeepB2B 7 天",
  exitText: "输入您公司的网站，用 AI 发现理想客户，并在 7 天内免费分析匹配企业的联系方式和财务信号，无需信用卡。",
  exitBoxTitle: "免费 7 天 • 无需信用卡",
  exitBoxText: "平台内完全透明，查询无数据时保证不扣费。",
  exitCta: "立即开通免费试用",
  form: {
    badge: "免费 7 天 • 无需信用卡",
    titleBefore: "开通我的",
    titleHighlight: "免费试用",
    leadBefore: "创建免费账户，试用 ",
    leadDays: "7 天",
    leadAfter: "，分析匹配企业，查看联系方式、财务信号和 AI 信息补全。套餐和消耗详情可在平台内查看。",
    name: "姓名",
    namePh: "您的姓名",
    email: "企业邮箱",
    emailPh: "you@yourcompany.com",
    whatsapp: "WhatsApp（含区号）",
    whatsappPh: "+55 11 99999-9999",
    cnpj: "您公司的 CNPJ",
    termsBefore: "我已阅读并接受",
    terms: "使用条款",
    termsMid: "和",
    privacy: "隐私政策",
    submit: "免费试用，无需信用卡",
    submitting: "正在创建账户...",
    secure: "安全环境 • 无需信用卡",
    errName: "姓名至少需要 2 个字符。",
    errEmail: "请输入有效的企业邮箱。",
    errWhatsapp: "请输入含区号的 WhatsApp 号码。",
    errCnpj: "请输入公司的 CNPJ（14 位数字）。",
    errTerms: "您必须接受使用条款和隐私政策。",
    errGeneric: "目前无法创建您的账户。",
    success: "账户已创建！正在进入平台…",
    whatsappHelp: "通过 WhatsApp 联系",
    helpMsg: "您好！我尝试创建 DeepB2B 试用账户但未成功。",
  },
};

export const FREE_TRIAL_COPY: Record<Locale, FreeTrialCopy> = { "pt-br": PT, en: EN, es: ES, "zh-cn": ZH };
