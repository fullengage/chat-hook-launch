import type { ArticleSlug } from "@/i18n/routes";
import type { Locale } from "@/i18n/types";

export interface EditorialSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface LocalizedArticleContent {
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  summary: string;
  readingMinutes: number;
  sections: EditorialSection[];
  sources: string[];
}

export interface EditorialArticle {
  slug: ArticleSlug;
  publishedAt: string;
  updatedAt: string;
  localized: Record<Locale, LocalizedArticleContent>;
}

export const EDITORIAL_ARTICLES: readonly EditorialArticle[] = [
  {
    slug: "how-to-find-distributors-in-brazil",
    publishedAt: "2026-11-10",
    updatedAt: "2026-11-23",
    localized: {
      en: {
        title: "How to Find Distributors in Brazil",
        metaTitle: "How to Find Distributors in Brazil: CNAE, Regions & Verification | DeepB2B",
        metaDescription:
          "Practical guide for international manufacturers and exporters to identify legitimate wholesale distributors in Brazil using CNAE codes and public corporate registries.",
        category: "Market Entry",
        summary:
          "Why generic web searches mix up retailers, brokers, and manufacturers in Brazil — and how official CNAE wholesale codes, regional filtering, and QSA checks solve channel discovery.",
        readingMinutes: 6,
        sections: [
          {
            heading: "Why Finding Brazilian Distributors Requires Local Registry Logic",
            paragraphs: [
              "Foreign manufacturers entering Brazil often start with English keyword searches or trade show directories. In practice, many legitimate Brazilian regional distributors publish sparse English content and operate primarily in Portuguese.",
              "Worse, generic B2B lists frequently bundle retail stores, independent sales representatives, and competing domestic factories into the same spreadsheet. Understanding Brazil's tax and sector structure resolves that ambiguity.",
            ],
          },
          {
            heading: "1. Isolate Wholesale & Import Activities via CNAE",
            paragraphs: [
              "Every registered company in Brazil must declare economic activity codes under CNAE (Classificação Nacional de Atividades Econômicas). Wholesale trade (Comércio Atacadista) typically falls under CNAE Division 46, while manufacturing sits in Divisions 10–33 and retail in Division 47.",
            ],
            bullets: [
              "Filter for Division 46 codes matching your equipment, industrial input, or consumer goods line.",
              "Include secondary CNAEs when importers operate both wholesale distribution and technical servicing.",
              "Exclude pure manufacturing CNAEs if you only want channel partners rather than direct factory competitors.",
            ],
          },
          {
            heading: "2. Segment by Macro-Region Instead of Treating Brazil as One Hub",
            paragraphs: [
              "Brazil spans continental distances with distinct state-level tax dynamics (ICMS) and logistics corridors. A single distributor in São Paulo rarely covers the South, Northeast, and North effectively on day one.",
              "Map candidate partners separately across Southeast hubs (SP, MG, RJ), Southern industrial corridors (PR, SC, RS), and Northeast regional centers (BA, PE, CE).",
            ],
          },
          {
            heading: "3. Verify Legal Status & Ownership Before Outreach",
            paragraphs: [
              "Before sending product catalogs or pricing tiers, verify that the entity holds ATIVA status in Receita Federal, inspect its corporate size (Porte) and founding year, and review its QSA (managing partners) and public fiscal signals.",
            ],
          },
        ],
        sources: [
          "Receita Federal do Brasil — Cadastro Nacional da Pessoa Jurídica (CNPJ)",
          "IBGE / CONCLA — Tabela CNAE (Classificação Nacional de Atividades Econômicas)",
          "PGFN — Consulta Pública de Dívida Ativa da União",
        ],
      },
      "pt-br": {
        title: "Como Encontrar Distribuidores no Brasil",
        metaTitle: "Como Encontrar Distribuidores no Brasil por CNAE e Região | DeepB2B",
        metaDescription:
          "Guia prático para indústrias, exportadores e times de trade marketing identificarem distribuidores e atacadistas reais no Brasil sem misturar varejo.",
        category: "Canais & Expansão",
        summary:
          "Como separar distribuidores atacadistas reais de varejistas, representantes ou fabricantes concorrentes usando divisões CNAE, porte empresarial e verificação cadastral.",
        readingMinutes: 6,
        sections: [
          {
            heading: "O erro mais comum na busca por canais no Brasil",
            paragraphs: [
              "Planilhas genéricas costumam misturar lojas varejistas, representantes autônomos e indústrias do mesmo setor. Isso consome horas da equipe comercial abordando empresas sem estrutura de distribuição ou interesse em revenda.",
            ],
          },
          {
            heading: "1. Separe atacado e distribuição pela Divisão 46 do CNAE",
            paragraphs: [
              "Na estrutura oficial do CNAE (IBGE / Receita Federal), o comércio atacadista concentra-se na Divisão 46, enquanto a indústria de transformação está nas Divisões 10 a 33 e o varejo na Divisão 47.",
            ],
            bullets: [
              "Priorize CNAEs principais e secundários da Divisão 46 ligados ao seu segmento (ex.: 4663-0/00 para máquinas industriais).",
              "Exclua empresas cujo CNAE principal seja idêntico ao da sua própria fábrica quando não quiser abordar concorrentes.",
              "Cruze porte empresarial (EPP e Demais) e tempo de fundação para filtrar operações mais maduras.",
            ],
          },
          {
            heading: "2. Planeje cobertura por polos regionais",
            paragraphs: [
              "Questões logísticas e tributárias estaduais (ICMS) fazem com que poucos distribuidores atendam todo o país de forma uniforme. Estruture listas separadas por Sudeste, Sul, Nordeste e Centro-Oeste.",
            ],
          },
          {
            heading: "3. Valide situação cadastral e QSA antes da abordagem",
            paragraphs: [
              "Confirme situação ATIVA na Receita Federal, identifique sócios administradores no QSA e analise sinais públicos de website e canais digitais para personalizar o primeiro contato.",
            ],
          },
        ],
        sources: [
          "Receita Federal do Brasil — Dados Públicos do CNPJ",
          "IBGE / CONCLA — Estrutura Oficial CNAE",
          "PGFN — Regularidade Fiscal Pública",
        ],
      },
      "zh-cn": {
        title: "如何在巴西寻找经销商与渠道合作伙伴",
        metaTitle: "如何在巴西寻找经销商与进口商：CNAE 分类与尽调实务 | DeepB2B",
        metaDescription:
          "面向中国制造与出口企业的实战指南：利用巴西官方 CNAE 行业编码、区域产业带与企业注册数据精准识别真实经销商。",
        category: "渠道拓展",
        summary:
          "解析为何常规搜索容易混淆零售商、代理个人与本土工厂，并演示如何通过巴西 CNAE 第 46 类批发编码和官方注册架构锁定优质经销商。",
        readingMinutes: 6,
        sections: [
          {
            heading: "为什么在巴西找经销商不能只靠英文关键词搜索",
            paragraphs: [
              "许多扎根巴西本土的区域型进口商与机械设备经销商，其官网与产品目录全部使用葡萄牙语，很难通过英文搜索引擎直接发现。",
              "同时，非结构化名录经常把小型零售店、独立销售代理和本土竞争工厂混为一谈。借助巴西法定行业编码体系，可以从源头上精准分离渠道层级。",
            ],
          },
          {
            heading: "一、利用 CNAE 编码区分批发经销与终端工厂",
            paragraphs: [
              "巴西所有在营企业均须在联邦税务局登记 CNAE（国家经济活动分类）代码。其中第 46 大类代表批发贸易与工业分销，第 10–33 大类为制造业，第 47 大类为零售业。",
            ],
            bullets: [
              "重点筛选第 46 大类下的细分机械、化工、建材或消费品批发编码（例如 4663-0/00 工业机械设备批发）。",
              "兼营进口与技术服务的大型渠道商常把分销编码放在兼营业务中，建议主副编码联合检索。",
              "在寻找代理商时，主动剔除与您自身生产制造完全相同的 CNAE，避免误触同行。",
            ],
          },
          {
            heading: "二、按巴西经济大区布局多点代理",
            paragraphs: [
              "受巴西国土面积及各州流转税（ICMS）制度影响，单一圣保罗经销商往往难以高效覆盖全国。建议分阶段排查东南部（圣保罗、米纳斯）、南部（巴拉那、圣卡塔琳娜）和东北部港口辐射圈。",
            ],
          },
          {
            heading: "三、接洽前的官方资质初筛",
            paragraphs: [
              "发送报价与目录前，建议核实对方 CNPJ 是否处于正常在营（ATIVA）状态、成立年限、企业规模（Porte）及 QSA 股东背景，优先对接结构清晰的合规企业。",
            ],
          },
        ],
        sources: [
          "巴西联邦税务局 (Receita Federal) — CNPJ 公开注册体系",
          "IBGE / CONCLA — CNAE 国家经济活动分类表",
          "巴西国家财政总署 (PGFN) — 公开联邦欠税检索",
        ],
      },
    },
  },
  {
    slug: "understanding-brazilian-cnpj-data",
    publishedAt: "2026-11-11",
    updatedAt: "2026-11-23",
    localized: {
      en: {
        title: "Understanding Brazilian CNPJ Data",
        metaTitle: "Understanding Brazilian CNPJ Data: Structure, QSA & Status | DeepB2B",
        metaDescription:
          "A complete breakdown of Brazil's 14-digit CNPJ corporate tax ID: headquarters vs. branches, Razão Social, Porte, QSA ownership, and official status codes.",
        category: "Business Data",
        summary:
          "Everything foreign executives need to know to read a Brazilian CNPJ record accurately — from branch identifiers (0001 vs. 0002) to legal size tiers and partner structures.",
        readingMinutes: 5,
        sections: [
          {
            heading: "What a CNPJ Actually Identifies",
            paragraphs: [
              "CNPJ (Cadastro Nacional da Pessoa Jurídica) is Brazil's mandatory federal corporate tax registration issued by Receita Federal. Unlike countries with separate state-only business numbers, every legal entity and physical branch in Brazil carries a standardized 14-digit CNPJ.",
            ],
            bullets: [
              "First 8 digits: Root corporate group identifier (CNPJ Básico).",
              "Digits 9–12: Establishment order — '0001' denotes the headquarters (Matriz), while '0002', '0003', etc., denote branches or regional warehouses (Filiais).",
              "Last 2 digits: Verification checksum digits.",
            ],
          },
          {
            heading: "Key Fields Inside a Public CNPJ Profile",
            paragraphs: [
              "Reading a Brazilian registry record requires distinguishing between legal naming and trade branding:",
            ],
            bullets: [
              "Razão Social: Official registered legal name on corporate bylaws and invoices.",
              "Nome Fantasia: Commercial trade name used in the marketplace (sometimes blank in older filings).",
              "Situação Cadastral: Indicates whether the entity is ATIVA (active), SUSPENSA, INAPTA, or BAIXADA (closed).",
              "Porte: Fiscal classification tier — ME (Microempresa), EPP (Empresa de Pequeno Porte), or DEMAIS (larger companies outside simplified small-business regimes).",
              "QSA (Quadro de Sócios e Administradores): Lists corporate shareholders and legal administrators registered with Receita Federal.",
            ],
          },
          {
            heading: "Common Misinterpretations to Avoid",
            paragraphs: [
              "Do not assume 'DEMAIS' automatically means a multi-billion enterprise, nor assume 'Capital Social' equals annual revenue. Capital Social reflects declared paid-in equity in bylaws, which may remain unchanged for years while revenue grows.",
            ],
          },
        ],
        sources: [
          "Receita Federal do Brasil — Instrução Normativa CNPJ",
          "Portal Nacional da Redesim — Estrutura Cadastral",
        ],
      },
      "pt-br": {
        title: "Entendendo os Dados do CNPJ Brasileiro",
        metaTitle: "Entendendo os Dados do CNPJ Brasileiro: Matriz, Porte e QSA | DeepB2B",
        metaDescription:
          "Guia técnico sobre a estrutura do CNPJ: diferença entre matriz e filial, Razão Social vs. Nome Fantasia, porte fiscal, capital social e QSA.",
        category: "Dados Empresariais",
        summary:
          "Como interpretar corretamente cada campo oficial do Cadastro Nacional da Pessoa Jurídica para qualificar contas B2B sem erros conceituais.",
        readingMinutes: 5,
        sections: [
          {
            heading: "Anatomia dos 14 dígitos do CNPJ",
            paragraphs: [
              "Todo estabelecimento formal no Brasil possui um CNPJ único emitido pela Receita Federal do Brasil:",
            ],
            bullets: [
              "8 primeiros dígitos (CNPJ Básico): identificam a empresa raiz.",
              "4 dígitos seguintes (Ordem): '0001' identifica a Matriz; '0002' em diante identificam Filiais (plantas, centros de distribuição, escritórios).",
              "2 últimos dígitos: dígitos verificadores.",
            ],
          },
          {
            heading: "Campos essenciais na qualificação B2B",
            paragraphs: [
              "Cruzar campos oficiais evita abordar empresas baixadas ou interpretar errado o porte operacional:",
            ],
            bullets: [
              "Razão Social vs. Nome Fantasia: nem todas as empresas preenchem o Nome Fantasia na Receita; usar apenas esse campo em buscas pode ocultar grandes indústrias.",
              "Situação Cadastral: filtre sempre por ATIVA para prospecção comercial.",
              "Porte (ME, EPP, Demais): indica o enquadramento fiscal na Receita Federal.",
              "QSA (Quadro de Sócios e Administradores): revela quem detém participação societária ou poderes de administração.",
            ],
          },
          {
            heading: "Cuidados ao analisar Capital Social",
            paragraphs: [
              "O Capital Social declarado no contrato social não equivale ao faturamento anual. Empresas sólidas podem operar com capital social histórico baixo, enquanto holdings podem ter capital elevado com poucos colaboradores.",
            ],
          },
        ],
        sources: [
          "Receita Federal do Brasil — Cadastro Nacional da Pessoa Jurídica",
          "Portal Redesim — Governo Federal",
        ],
      },
      "zh-cn": {
        title: "全面解析巴西 CNPJ 企业注册数据",
        metaTitle: "巴西 CNPJ 税号与企业注册档案详解：总分公司、规模与 QSA | DeepB2B",
        metaDescription:
          "帮助出海企业读懂巴西 14 位 CNPJ 税号结构、Matriz 总部与 Filial 分支区别、企业规模 Porte、注册资本及 QSA 股东信息。",
        category: "企业数据",
        summary:
          "快速掌握巴西联邦企业注册编号（CNPJ）的核心字段含义，避免将注册资本误判为年营收或漏掉总分公司关联关系。",
        readingMinutes: 5,
        sections: [
          {
            heading: "一、14 位 CNPJ 税号的组成结构",
            paragraphs: [
              "在巴西，所有合法注册的公司及分支机构均由巴西联邦税务局统一颁发 14 位 CNPJ 编码：",
            ],
            bullets: [
              "前 8 位（CNPJ Básico）：代表母体法人集团识别号。",
              "第 9–12 位（分支序号）：0001 代表公司总部（Matriz），0002、0003 等则代表异地分公司、工厂或仓储中心（Filial）。",
              "最后 2 位：校验码。",
            ],
          },
          {
            heading: "二、商业背调必看的核心字段",
            paragraphs: [
              "解读巴西官方企业档案时，需重点区分以下概念：",
            ],
            bullets: [
              "法定名称（Razão Social）与商业简称（Nome Fantasia）：许多老牌制造企业未在官方登记商业简称，仅按简称检索可能遗漏重要目标。",
              "存续状态（Situação Cadastral）：筛选合作方时应重点确认是否为在营状态（ATIVA）。",
              "企业规模（Porte）：官方通常划分为微型（ME）、小型成长（EPP）及其他大中型（DEMAIS）。",
              "股东与管理人清单（QSA）：列明法定股东与执行董事架构。",
            ],
          },
          {
            heading: "三、常见误区提醒",
            paragraphs: [
              "注册资本（Capital Social）反映的是公司章程中的认缴股本，并不等同于年营业额或当前现金流；部分运营多年的实体工厂注册资本可能多年未变更。",
            ],
          },
        ],
        sources: [
          "巴西联邦税务局 (Receita Federal) — CNPJ 规范文件",
          "巴西国家企业注册网 (Redesim)",
        ],
      },
    },
  },
  {
    slug: "brazilian-business-sectors-explained",
    publishedAt: "2026-11-12",
    updatedAt: "2026-11-23",
    localized: {
      en: {
        title: "Brazilian Business Sectors Explained (CNAE Guide)",
        metaTitle: "Brazilian Business Sectors Explained: How CNAE Works | DeepB2B",
        metaDescription:
          "Learn how Brazil's 7-digit CNAE taxonomy organizes manufacturing, wholesale, logistics, and services — and why multi-CNAE filtering matters.",
        category: "Industry Mapping",
        summary:
          "How to read Brazil's CNAE hierarchy from broad sections down to 7-digit subclasses so your market research targets the right slice of the value chain.",
        readingMinutes: 5,
        sections: [
          {
            heading: "Understanding the 5-Tier CNAE Hierarchy",
            paragraphs: [
              "Managed by IBGE and CONCLA, Brazil's CNAE (Classificação Nacional de Atividades Econômicas) structures every economic activity into five progressive tiers: Section (letter), Division (2 digits), Group (3 digits), Class (4 digits + check), and Subclass (7 digits).",
            ],
          },
          {
            heading: "Primary vs. Secondary CNAE Registrations",
            paragraphs: [
              "Brazilian companies register one primary CNAE (representing their main revenue activity) and can list multiple secondary CNAEs. Many mid-sized importers register retail or servicing as secondary codes alongside wholesale distribution.",
            ],
            bullets: [
              "Divisions 10–33: Manufacturing industries (Food, Chemicals, Plastics, Packaging, Machinery).",
              "Division 46: Wholesale trade and B2B distribution.",
              "Division 47: Retail trade (typically excluded when searching for industrial B2B buyers).",
              "Divisions 49–53: Freight transport, warehousing, and logistics.",
            ],
          },
          {
            heading: "Using AI to Bridge Commercial Descriptions and CNAE",
            paragraphs: [
              "International teams rarely know exact 7-digit Portuguese CNAE subclasses upfront. DeepB2B translates your commercial description into candidate CNAE groups while preserving full transparency so you can verify or adjust every code.",
            ],
          },
        ],
        sources: [
          "IBGE / CONCLA — Comissão Nacional de Classificação (CNAE 2.3)",
          "Receita Federal do Brasil — Vinculação CNAE no CNPJ",
        ],
      },
      "pt-br": {
        title: "Setores Econômicos Brasileiros e CNAE Explicados",
        metaTitle: "Setores Econômicos Brasileiros e Estrutura CNAE Explicados | DeepB2B",
        metaDescription:
          "Entenda como a hierarquia de 7 dígitos do CNAE organiza indústria, atacado, varejo e serviços para segmentação B2B precisa.",
        category: "Mapeamento Setorial",
        summary:
          "Como usar Seção, Divisão e Subclasse CNAE (além da combinação entre CNAE principal e secundário) para mapear cadeias produtivas no Brasil.",
        readingMinutes: 5,
        sections: [
          {
            heading: "Como funciona a árvore do CNAE",
            paragraphs: [
              "Mantida pelo IBGE/CONCLA, a tabela CNAE organiza as atividades econômicas brasileiras em cinco níveis: Seção, Divisão (2 dígitos), Grupo (3 dígitos), Classe (5 dígitos) e Subclasse (7 dígitos).",
            ],
          },
          {
            heading: "CNAE Principal vs. Secundário na prospecção",
            paragraphs: [
              "Uma mesma empresa pode possuir um CNAE principal e diversos secundários. Ignorar essa regra faz com que operações híbridas (que fabricam e distribuem, ou importam e prestam manutenção) fiquem fora da busca.",
            ],
            bullets: [
              "Divisões 10 a 33: Indústrias de transformação (alimentos, embalagens, metalurgia, máquinas).",
              "Divisão 46: Comércio atacadista e distribuidores B2B.",
              "Divisão 47: Comércio varejista.",
              "Divisões 62 e 63: Tecnologia da informação e serviços digitais.",
            ],
          },
          {
            heading: "IA como aceleradora, não caixa-preta",
            paragraphs: [
              "Na DeepB2B, a IA sugere os códigos CNAE compatíveis a partir do seu site ou briefing, mas você visualiza exatamente quais códigos entraram no filtro e pode adicionar ou excluir qualquer atividade.",
            ],
          },
        ],
        sources: [
          "IBGE / CONCLA — Tabela Oficial CNAE 2.3",
          "Receita Federal do Brasil — Classificação Fiscal",
        ],
      },
      "zh-cn": {
        title: "巴西主要行业格局与 CNAE 行业分类指南",
        metaTitle: "巴西行业分类（CNAE）与产业链划分详解 | DeepB2B",
        metaDescription:
          "深入讲解巴西 7 位 CNAE 行业编码体系，以及制造业、批发分销、物流与服务业在市场筛选中的应用。",
        category: "行业图谱",
        summary:
          "掌握巴西官方五级 CNAE 分类结构与主/兼营业务筛选技巧，准确切入巴西产业链目标环节。",
        readingMinutes: 5,
        sections: [
          {
            heading: "巴西 CNAE 五级编码逻辑",
            paragraphs: [
              "由巴西地理统计局（IBGE）与 CONCLA 管理的 CNAE 体系，将所有经济活动按大类（Section）、两位大类（Division）、三位中类、五位小类及七位子类逐级细化。",
            ],
          },
          {
            heading: "主营编码与兼营编码的协同作用",
            paragraphs: [
              "巴西企业可登记一项主营 CNAE 和多项兼营 CNAE。许多实力较强的巴西进口商在批发销售之外，同时具备设备维护或组装职能。",
            ],
            bullets: [
              "第 10–33 类：制造业（食品、化工、塑料包装、金属加工、机械设备）。",
              "第 46 类：批发贸易与 B2B 分销渠道。",
              "第 47 类：终端零售商业。",
              "第 49–53 类：货运物流、仓储与供应链服务。",
            ],
          },
          {
            heading: "AI 辅助行业编码映射",
            paragraphs: [
              "海外团队通常难以记住复杂的葡语七位编码。DeepB2B 可先将您的产品描述自动匹配至候选 CNAE，并透明列明所有入选编码供人工确认。",
            ],
          },
        ],
        sources: [
          "IBGE / CONCLA — CNAE 2.3 官方分类标准",
          "巴西联邦税务局 — 企业经营范围登记规则",
        ],
      },
    },
  },
  {
    slug: "how-foreign-companies-research-brazil-market",
    publishedAt: "2026-11-14",
    updatedAt: "2026-11-23",
    localized: {
      en: {
        title: "How Foreign Companies Can Research the Brazilian Market",
        metaTitle: "How Foreign Companies Can Research the Brazilian Market | DeepB2B",
        metaDescription:
          "A structured playbook for foreign companies evaluating Brazil: regional concentration, language nuances, partner screening, and data verification.",
        category: "Brazil Market Entry",
        summary:
          "Key realities foreign executives often miss when sizing Brazil from abroad — from state-level concentration to Portuguese-first corporate data and compliance.",
        readingMinutes: 6,
        sections: [
          {
            heading: "Five Realities Foreign Teams Need to Know About Brazil",
            paragraphs: [
              "Brazil is Latin America's largest economy, yet remote market research often stalls on practical obstacles that rarely appear in macro slide decks:",
            ],
            bullets: [
              "Corporate documentation, CNAE filings, and partner portals operate in Portuguese.",
              "Industrial demand is heavily concentrated in specific corridors (Southeast & South) alongside specialized hubs like Manaus Free Trade Zone or agribusiness centers in the Center-West.",
              "Trade intermediaries often label themselves 'representantes comerciais' (commission agents) versus stocking distributors.",
            ],
          },
          {
            heading: "A Structured 4-Step Market Research Workflow",
            paragraphs: [
              "Instead of relying solely on generic global directories that under-index domestic Brazilian mid-market firms:",
            ],
            bullets: [
              "Step 1: Translate product categories into Brazilian CNAE industry and wholesale codes.",
              "Step 2: Map geographic density across key states before selecting target cities.",
              "Step 3: Filter out inactive entities and inspect corporate size and founding years.",
              "Step 4: Validate public corporate websites and decision-makers before scheduling travel or trade show meetings.",
            ],
          },
        ],
        sources: [
          "Receita Federal do Brasil — Public Corporate Registry Architecture",
          "IBGE — Regional Economic & Industrial Classification",
        ],
      },
      "pt-br": {
        title: "Como Empresas Estrangeiras Pesquisam o Mercado Brasileiro",
        metaTitle: "Como Empresas Estrangeiras Pesquisam o Mercado Brasileiro | DeepB2B",
        metaDescription:
          "Entenda as barreiras práticas que compradores e fabricantes estrangeiros enfrentam ao pesquisar empresas no Brasil e como estruturar a análise.",
        category: "Entrada no Mercado",
        summary:
          "Por que diretórios globais não capturam o mid-market brasileiro e como estruturar pesquisa de parceiros e compradores com base cadastral local.",
        readingMinutes: 6,
        sections: [
          {
            heading: "As barreiras ocultas para quem olha o Brasil de fora",
            paragraphs: [
              "Diretórios internacionais tradicionais tendem a cobrir apenas grandes multinacionais ou exportadores com presença em inglês, deixando de fora milhares de indústrias médias e distribuidores regionais relevantes.",
            ],
            bullets: [
              "Registros oficiais e portais comerciais estão majoritariamente em português.",
              "A concentração industrial varia drasticamente por estado e corredor logístico.",
              "Há diferença jurídica e operacional entre representante comercial comissionado e distribuidor atacadista com estoque.",
            ],
          },
          {
            heading: "Fluxo recomendado de pesquisa de mercado",
            paragraphs: [
              "Estruturar a pesquisa em quatro camadas evita desperdício de tempo comercial:",
            ],
            bullets: [
              "Traduzir o portfólio para códigos CNAE de produção ou atacado.",
              "Segmentar por macrorregião e porte empresarial.",
              "Confirmar situação cadastral ativa e histórico societário (QSA).",
              "Combinar verificação digital pública com abordagem contextualizada.",
            ],
          },
        ],
        sources: [
          "Receita Federal do Brasil — Estrutura Pública CNPJ",
          "IBGE — Classificações Econômicas Regionais",
        ],
      },
      "zh-cn": {
        title: "海外企业如何高效调研巴西 B2B 市场",
        metaTitle: "中国及海外企业调研巴西 B2B 市场实务指南 | DeepB2B",
        metaDescription:
          "解析海外团队远程调研巴西市场常见的信息盲区、渠道分类差异及基于当地公开注册体系的四步调研法。",
        category: "出海战略",
        summary:
          "为何跨国通用商业名录往往遗漏巴西中坚企业，以及如何系统性梳理巴西目标客户与渠道伙伴。",
        readingMinutes: 6,
        sections: [
          {
            heading: "一、海外团队调研巴西市场的常见盲区",
            paragraphs: [
              "巴西虽然是拉美第一大经济体，但国际通用黄页与名录往往只收录少数头部跨国公司，大量本土优质中型工厂和区域渠道商并未被英文数据库覆盖。",
            ],
            bullets: [
              "语言门槛：核心注册档案、行业名称与企业官网几乎全为葡萄牙语。",
              "角色差异：巴西存在大量仅撮合抽佣的商业代表（Representante Comercial），需与具备库存和清关能力的进口分销商严格区分。",
              "区域高度分化：工业、消费与农业物资需求在不同州呈明显的集群分布。",
            ],
          },
          {
            heading: "二、四步远程调研路径",
            paragraphs: [
              "在安排高管实地考察或参加圣保罗行业展会前，建议按以下顺序完成桌面侦察：",
            ],
            bullets: [
              "第一步：将产品线映射为精准的巴西 CNAE 行业编码。",
              "第二步：按目标经济大区与企业规模划定候选池。",
              "第三步：剔除停业主体并查看股东架构与成立年限。",
              "第四步：结合企业官网验证主营业务，提前确定重点拜访清单。",
            ],
          },
        ],
        sources: [
          "巴西联邦税务局 (Receita Federal) — 公开注册数据规范",
          "IBGE — 巴西区域经济与行业分类指南",
        ],
      },
    },
  },
  {
    slug: "brazil-company-data-sources-and-limitations",
    publishedAt: "2026-11-15",
    updatedAt: "2026-11-23",
    localized: {
      en: {
        title: "Brazil Company Data: Sources and Limitations",
        metaTitle: "Brazil Company Data: Official Sources, LGPD & Real Limitations | DeepB2B",
        metaDescription:
          "An honest technical overview of what public Brazilian registries provide (CNPJ, CNAE, QSA, PGFN) — and what they do not provide (revenue, live headcount).",
        category: "Data Governance",
        summary:
          "Why reliable Brazilian business intelligence requires honest boundaries: separating Receita Federal and PGFN records from non-public financials and AI estimates.",
        readingMinutes: 5,
        sections: [
          {
            heading: "What Public Brazilian Sources Actually Provide",
            paragraphs: [
              "Brazil offers unusually structured public corporate transparency compared to many markets, centered on Receita Federal and PGFN:",
            ],
            bullets: [
              "Official existence, legal name, address, founding date, and status (ATIVA/BAIXADA).",
              "Primary and secondary CNAE economic activity codes.",
              "Corporate tax size tier (Porte) and registered Capital Social.",
              "Corporate partners and administrators (QSA) and public federal tax debt filings (PGFN).",
            ],
          },
          {
            heading: "What Public Registries Do NOT Disclose for Private Companies",
            paragraphs: [
              "Private Brazilian limited liability companies (Ltda.) are generally not required to publish audited annual revenue, exact monthly headcount, or private supplier contracts in public registries.",
              "Any platform claiming exact private-company revenue or employee headcount without direct disclosure is presenting third-party estimates or model inferences — never official government figures.",
            ],
          },
          {
            heading: "How DeepB2B Handles Transparency and LGPD",
            paragraphs: [
              "DeepB2B separates official registry facts (with source and query date), public web signals, and AI fit scores. Under Brazil's LGPD (Law 13.709/2018), personal executive contact data is surfaced solely for legitimate B2B prospecting with a permanent opt-out channel.",
            ],
          },
        ],
        sources: [
          "Receita Federal do Brasil — Dados Abertos CNPJ",
          "Procuradoria-Geral da Fazenda Nacional (PGFN) — Lista de Devedores",
          "Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais (LGPD)",
        ],
      },
      "pt-br": {
        title: "Dados Empresariais no Brasil: Fontes Oficiais e Limitações",
        metaTitle: "Dados Empresariais no Brasil: Fontes Oficiais, LGPD e Limites | DeepB2B",
        metaDescription:
          "Transparência técnica sobre o que as bases públicas brasileiras realmente informam (CNPJ, CNAE, QSA, PGFN) e o que não é dado oficial (faturamento privado).",
        category: "Governança & Fontes",
        summary:
          "Entenda a fronteira exata entre registros públicos oficiais, canais digitais corporativos e estimativas por IA na inteligência B2B brasileira.",
        readingMinutes: 5,
        sections: [
          {
            heading: "O que existe de fato nas fontes públicas oficiais",
            paragraphs: [
              "O Brasil possui ampla transparência cadastral pública em comparação a outros mercados:",
            ],
            bullets: [
              "Receita Federal: CNPJ, Razão Social, Nome Fantasia, endereço, data de abertura, situação cadastral, CNAEs, porte fiscal, Capital Social e QSA.",
              "PGFN: registros públicos de inscrição em dívida ativa da União.",
              "Cartórios (quando consultado sob pedido): registros de protesto.",
            ],
          },
          {
            heading: "O que NÃO é dado público oficial em empresas fechadas",
            paragraphs: [
              "Sociedades limitadas de capital fechado não publicam faturamento mensal ou quadro exato de funcionários em base pública aberta. Valores desse tipo em ferramentas de mercado são estimativas estatísticas — jamais fatos oficiais.",
              "Na DeepB2B, nunca apresentamos estimativas de IA ou sinais externos como registros oficiais da Receita Federal.",
            ],
          },
          {
            heading: "Conformidade com a LGPD (Lei nº 13.709/2018)",
            paragraphs: [
              "Dados de pessoas jurídicas são públicos; já contatos corporativos e de decisores seguem finalidade legítima de prospecção B2B, com transparência de origem e canal gratuito de revisão e exclusão (opt-out).",
            ],
          },
        ],
        sources: [
          "Receita Federal do Brasil — Base Pública CNPJ",
          "PGFN — Dívida Ativa da União",
          "Presidência da República — Lei nº 13.709/2018 (LGPD)",
        ],
      },
      "zh-cn": {
        title: "巴西企业数据来源、合规边界与数据局限性",
        metaTitle: "巴西企业数据来源、LGPD 合规与真实局限性说明 | DeepB2B",
        metaDescription:
          "客观解析巴西官方公开数据能查到什么（CNPJ、CNAE、QSA、PGFN），以及私营企业不公开哪些指标，帮助企业合规严谨开展调研。",
        category: "数据合规",
        summary:
          "真正可靠的商业情报在于诚实划清边界：哪些是联邦税务局与 PGFN 官方事实，哪些是公开网络信号，哪些仅属于 AI 辅助研判。",
        readingMinutes: 5,
        sections: [
          {
            heading: "一、巴西官方公开数据源提供哪些可靠字段",
            paragraphs: [
              "依托巴西联邦税务局（Receita Federal）与国家财政总署（PGFN），公开体系可核查以下结构化信息：",
            ],
            bullets: [
              "企业法定名称、地址、成立日期及当前在营状态（ATIVA/停业）。",
              "主营与兼营 CNAE 行业编码。",
              "官方税务规模分类（Porte）与章程注册资本（Capital Social）。",
              "股东及法定管理人清单（QSA）及公开联邦税务欠缴记录（PGFN）。",
            ],
          },
          {
            heading: "二、非上市私营企业有哪些信息并不公开",
            paragraphs: [
              "巴西绝大多数有限责任公司（Ltda.）依法无需向公众披露年度实际营业额、精确在职员工数或私人供应链合同金额。任何工具若对非上市公司声称提供“官方精确营收”，实质上均属于模型估算。",
              "DeepB2B 坚持原则：绝不将 AI 估算或网络线索包装成政府官方事实，绝不编造不存在的联系人。",
            ],
          },
          {
            heading: "三、LGPD 隐私合规框架",
            paragraphs: [
              "遵循巴西《通用数据保护法》（LGPD），企业法人公开注册信息与个人商务联系信息严格分层管理，且所有用户与数据主体均可随时提交核查或退出（Opt-Out）申请。",
            ],
          },
        ],
        sources: [
          "巴西联邦税务局 (Receita Federal) — CNPJ 公开数据",
          "PGFN — 公开欠税名录",
          "巴西第 13.709/2018 号通用数据保护法 (LGPD)",
        ],
      },
    },
  },
] as const;

export function getArticleBySlug(slug: string): EditorialArticle | undefined {
  return EDITORIAL_ARTICLES.find((a) => a.slug === slug);
}
