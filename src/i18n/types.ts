export type Locale = "en" | "pt-br" | "zh-cn";

export type RouteKey =
  | "home"
  | "businessData"
  | "marketIntelligence"
  | "leadGeneration"
  | "industryMapping"
  | "brazilMarketEntry"
  | "solutions"
  | "pricing"
  | "resources"
  | "about"
  | "contact"
  | "login"
  | "privacy"
  | "terms"
  | "lgpd"
  | "dataDeletion";

export type CapabilityKey =
  | "businessData"
  | "marketIntelligence"
  | "leadGeneration"
  | "industryMapping"
  | "brazilMarketEntry";

export interface RouteSeoCopy {
  title: string;
  description: string;
}

export interface PillarCopy {
  id: string;
  title: string;
  description: string;
}

export interface CapabilityPageCopy {
  eyebrow: string;
  h1: string;
  lead: string;
  primaryCta: string;
  secondaryCta: string;
  highlightsTitle: string;
  highlights: { title: string; description: string }[];
  dataLayersTitle: string;
  dataLayers: { sourceType: "official" | "external" | "ai" | "ondemand"; title: string; detail: string }[];
  useCasesTitle: string;
  useCases: { audience: string; scenario: string }[];
  availabilityNote: string;
}

export interface SolutionSegmentCopy {
  audience: string;
  badge: string;
  challenge: string;
  howDeepB2BHelps: string;
  deliverables: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TranslationDictionary {
  locale: Locale;
  htmlLang: "en" | "pt-BR" | "zh-CN";
  intlLocale: string;
  currencyCode: "USD" | "BRL" | "CNY";
  localeLabel: string;
  nativeName: string;
  brand: {
    name: string;
    tagline: string;
    subtitle: string;
    valueProposition: string;
    legacyEntityNotice: string;
  };
  seo: Record<RouteKey, RouteSeoCopy>;
  localeNotice: {
    suggestPrefix: string;
    switchLabel: string;
    dismissLabel: string;
  };
  nav: {
    intelligenceGroup: string;
    businessData: string;
    marketIntelligence: string;
    leadGeneration: string;
    industryMapping: string;
    brazilMarketEntry: string;
    solutions: string;
    pricing: string;
    resources: string;
    about: string;
    contact: string;
    login: string;
    primaryCta: string;
    secondaryCta: string;
    languageLabel: string;
    openMenu: string;
    closeMenu: string;
  };
  home: {
    badge: string;
    h1: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    trustItems: string[];
    pillarsEyebrow: string;
    pillarsTitle: string;
    pillarsSubtitle: string;
    pillars: PillarCopy[];
    useCasesEyebrow: string;
    useCasesTitle: string;
    useCasesSubtitle: string;
    useCases: { title: string; description: string; tag: string }[];
    howItWorksEyebrow: string;
    howItWorksTitle: string;
    steps: { step: string; title: string; description: string }[];
    resourcesEyebrow: string;
    resourcesTitle: string;
    resourcesSubtitle: string;
    viewAllResources: string;
    finalCtaEyebrow: string;
    finalCtaTitle: string;
    finalCtaSubtitle: string;
  };
  discovery: {
    eyebrow: string;
    title: string;
    subtitle: string;
    illustrativeNotice: string;
    inputPlaceholder: string;
    searchButton: string;
    sampleQueriesLabel: string;
    sampleQueries: string[];
    interpretedFiltersTitle: string;
    filterLabels: {
      cnae: string;
      region: string;
      role: string;
      size: string;
      status: string;
    };
    provenanceLegendTitle: string;
    provenanceLabels: {
      official: string;
      external: string;
      ai: string;
      ondemand: string;
    };
    cardLabels: {
      illustrativeBadge: string;
      fitScoreLabel: string;
      fitDisclaimer: string;
      officialSection: string;
      externalSection: string;
      aiSection: string;
      ondemandSection: string;
      ondemandPlaceholder: string;
      sourceAndDate: string;
    };
    fieldSupportTitle: string;
    fieldSupportSubtitle: string;
    fieldSupportColumns: {
      field: string;
      support: string;
      source: string;
    };
    fieldSupportRows: {
      field: string;
      support: string;
      source: "official" | "external" | "ai" | "ondemand";
    }[];
    exploreCta: string;
  };
  marketSnapshot: {
    eyebrow: string;
    title: string;
    subtitle: string;
    architectureTitle: string;
    architectureNote: string;
    layers: { name: string; scope: string; coverage: number; provenance: "official" | "external" | "ai" | "ondemand" }[];
    regionsTitle: string;
    regionsSubtitle: string;
    regions: { region: string; hubs: string; profile: string }[];
  };
  capabilities: Record<CapabilityKey, CapabilityPageCopy>;
  solutions: {
    eyebrow: string;
    h1: string;
    lead: string;
    segments: SolutionSegmentCopy[];
    ctaTitle: string;
    ctaSubtitle: string;
  };
  pricing: {
    eyebrow: string;
    h1: string;
    lead: string;
    currencyNotice: string;
    mostPopular: string;
    perMonth: string;
    creditsPerMonth: string;
    usersIncluded: string;
    dailyLimit: string;
    topUpRate: string;
    trialCardTitle: string;
    trialCardSubtitle: string;
    trialOptions: { label: string; title: string; detail: string }[];
    planCtaBr: string;
    planCtaIntl: string;
    contactSalesCta: string;
    enterpriseTitle: string;
    enterpriseSubtitle: string;
    enterpriseFeatures: string[];
    enterpriseCta: string;
    creditTableTitle: string;
    creditTableSubtitle: string;
    creditTableHeaders: { action: string; deliverable: string; cost: string };
    creditUnitLabel: string;
    rules: { title: string; description: string }[];
    simulatorTitle: string;
    simulatorSubtitle: string;
    simulatorAdCplLabel: string;
    simulatorPlanLabel: string;
    simulatorDeepB2BResult: string;
    simulatorAdResult: string;
    simulatorEach: string;
    simulatorMethodologyNote: string;
    financialDisclaimer: string;
  };
  resources: {
    eyebrow: string;
    h1: string;
    lead: string;
    readGuide: string;
    readingTimeLabel: string;
    sourcesTitle: string;
    backToResources: string;
    articleCtaTitle: string;
    articleCtaSubtitle: string;
  };
  about: {
    eyebrow: string;
    h1: string;
    lead: string;
    storyTitle: string;
    storyParagraphs: string[];
    principlesTitle: string;
    principles: { title: string; description: string }[];
    statusMatrixTitle: string;
    statusMatrixSubtitle: string;
    statusItems: { capability: string; status: "production" | "consultative" | "roadmap"; detail: string }[];
    statusLabels: { production: string; consultative: string; roadmap: string };
  };
  contact: {
    eyebrow: string;
    h1: string;
    lead: string;
    channelsTitle: string;
    channels: { title: string; description: string }[];
    formTitle: string;
    formSubtitle: string;
    faqTitle: string;
    faqs: FaqItem[];
  };
  form: {
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    countryLabel: string;
    countryPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    purposeLabel: string;
    purposeOptions: { value: string; label: string }[];
    messageLabel: string;
    messagePlaceholder: string;
    consentLabel: string;
    submitLabel: string;
    submittingLabel: string;
    successTitle: string;
    successMessage: string;
    errorMessage: string;
    validation: {
      name: string;
      email: string;
      company: string;
      country: string;
      purpose: string;
      consent: string;
    };
  };
  login: {
    eyebrow: string;
    h1: string;
    lead: string;
    existingTitle: string;
    existingDescription: string;
    existingCta: string;
    existingNotice: string;
    trialTitle: string;
    trialDescription: string;
    trialCta: string;
    intlTitle: string;
    intlDescription: string;
    intlCta: string;
  };
  legal: {
    backLabel: string;
    privacyTitle: string;
    privacySections: { heading: string; body: string[] }[];
    termsTitle: string;
    termsSections: { heading: string; body: string[] }[];
    lgpdTitle: string;
    lgpdLead: string;
    lgpdSections: { heading: string; body: string[] }[];
    deletionTitle: string;
    deletionLead: string;
    deletionTypes: { title: string; description: string }[];
    deletionFormTitle: string;
    deletionSubmit: string;
    deletionSuccess: string;
  };
  cookies: {
    title: string;
    description: string;
    accept: string;
    decline: string;
    preferences: string;
  };
  footer: {
    description: string;
    platformGroup: string;
    resourcesGroup: string;
    legalGroup: string;
    languagesGroup: string;
    dataSourcesNote: string;
    copyright: string;
  };
}
