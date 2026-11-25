import { articleAvailableIn, type ArticleSlug } from "@/i18n/routes";
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
  featuredReport?: boolean;
  localized: Partial<Record<Locale, LocalizedArticleContent>>;
}

export const EDITORIAL_ARTICLES: readonly EditorialArticle[] = [
  {
    slug: "sao-paulo-business-trade-shows-2027",
    publishedAt: "2026-11-25",
    updatedAt: "2026-11-25",
    localized: {
      "pt-br": {
        title: "Feiras de negócios em São Paulo em 2027: datas e quem compra em cada setor",
        metaTitle: "Feiras de negócios em São Paulo 2027: datas e compradores | DeepB2B",
        metaDescription:
          "Datas de 2027 da FEICON, Hospitalar, Fispal Tecnologia e Beauty Fair, conferidas nos sites oficiais, e o tamanho do mercado comprador de cada setor na base da Receita Federal.",
        category: "Feiras e Eventos · Nov 2026",
        summary:
          "Reunimos as datas de 2027 de quatro grandes feiras de São Paulo, conferidas nos sites oficiais, e cruzamos cada setor com a base pública da Receita Federal para mostrar o tamanho do mercado comprador.",
        readingMinutes: 6,
        sections: [
          {
            heading: "Por que São Paulo concentra as grandes feiras",
            paragraphs: [
              "Dois pavilhões recebem a maior parte das feiras de negócios de grande porte da capital: o São Paulo Expo, na Rodovia dos Imigrantes, e o Expo Center Norte, na Vila Guilherme.",
              "Para quem expõe, a escolha da cidade tem uma razão prática: o estado de São Paulo concentra uma parcela grande das empresas compradoras de quase todos os setores. Os números abaixo mostram isso setor a setor.",
            ],
          },
          {
            heading: "O calendário de 2027",
            paragraphs: [
              "Datas conferidas nos sites oficiais de cada feira em 25/11/2026. Confirme no site do organizador antes de planejar viagem ou estande.",
            ],
            bullets: [
              "FEICON — 6 a 9 de abril de 2027 — São Paulo Expo — construção civil e materiais de construção.",
              "Hospitalar — 18 a 21 de maio de 2027 — São Paulo Expo — saúde e produtos hospitalares.",
              "Fispal Tecnologia — 22 a 25 de junho de 2027 — São Paulo Expo — processamento e embalagem para alimentos e bebidas.",
              "Beauty Fair — 4 a 7 de setembro de 2027 — Expo Center Norte — beleza, cosméticos e estética.",
            ],
          },
          {
            heading: "FEICON: quem compra na construção civil",
            paragraphs: ["Estabelecimentos ativos por CNAE principal na base pública da Receita Federal (edição de outubro de 2026):"],
            bullets: [
              "Varejo de materiais de construção em geral (4744-0/99): 185.333 no Brasil, 33.802 em SP.",
              "Construção de edifícios (4120-4/00): 181.848 no Brasil, 35.384 em SP.",
              "Atacado de materiais de construção (4679-6/99): 8.941 no Brasil, 1.851 em SP.",
            ],
          },
          {
            heading: "Hospitalar: quem compra na saúde",
            paragraphs: [],
            bullets: [
              "Clínicas médicas ambulatoriais (8630-5/03): 226.132 no Brasil, 71.384 em SP.",
              "Atendimento hospitalar (8610-1/01): 29.435 no Brasil, 4.064 em SP.",
              "Atacado de materiais médico-hospitalares (4645-1/01): 10.986 no Brasil, 3.225 em SP.",
            ],
          },
          {
            heading: "Fispal Tecnologia: quem compra em alimentos e bebidas",
            paragraphs: [],
            bullets: [
              "Fabricação de produtos alimentícios (divisão 10 da CNAE, todos os códigos): 403.111 no Brasil, 101.061 em SP.",
              "Laticínios (1052-0/00): 8.785 no Brasil, 954 em SP.",
              "Fabricação de bebidas (divisão 11): 9.724 no Brasil, 1.483 em SP.",
            ],
          },
          {
            heading: "Beauty Fair: quem compra em beleza e cosméticos",
            paragraphs: [],
            bullets: [
              "Atacado de cosméticos e perfumaria (4646-0/01): 9.290 no Brasil, 3.363 em SP.",
              "Varejo de cosméticos e perfumaria (4772-5/00): 244.067 no Brasil, 67.579 em SP.",
              "Cabeleireiros, manicure e pedicure (9602-5/01): 942.603 no Brasil, 280.546 em SP.",
            ],
          },
          {
            heading: "O que esses números dizem a quem expõe",
            paragraphs: [],
            bullets: [
              "O comprador grande é minoria. Em cosméticos, há cerca de 9 mil atacadistas para mais de 240 mil lojas. Atacadistas e distribuidores costumam ser os contatos de maior valor por conversa, e os mais disputados durante a feira.",
              "São Paulo pesa, mas não é tudo. Pouco mais de um terço dos atacadistas de cosméticos do país está em SP. Quem convida só compradores paulistas deixa de fora a maior parte do mercado.",
              "O trabalho começa antes da abertura. Com o recorte certo de CNAE, porte e região, dá para saber antes da feira quem são os compradores com perfil, convidá-los e chegar ao evento com reuniões marcadas.",
            ],
          },
          {
            heading: "Metodologia",
            paragraphs: [
              "Datas e locais conferidos nos sites oficiais das feiras em 25/11/2026. Números de empresas: estabelecimentos ativos por CNAE principal na base pública da Receita Federal (edição de outubro de 2026), processada pela plataforma DeepB2B. É uma contagem de empresas, não uma estimativa do público de cada feira.",
            ],
          },
        ],
        sources: [
          "Site oficial da FEICON (feicon.com.br), conferido em 25/11/2026",
          "Site oficial da Hospitalar (hospitalar.com), conferido em 25/11/2026",
          "Site oficial da Fispal Tecnologia (fispaltecnologia.com.br), conferido em 25/11/2026",
          "Site oficial da Beauty Fair (beautyfair.com.br), conferido em 25/11/2026",
          "Receita Federal — Dados Abertos do CNPJ, edição de outubro de 2026, processados pela DeepB2B",
        ],
      },
      en: {
        title: "Business Trade Shows in São Paulo in 2027: Dates and Who Buys in Each Sector",
        metaTitle: "São Paulo Trade Shows 2027: Dates and Buyer Market | DeepB2B",
        metaDescription:
          "2027 dates for FEICON, Hospitalar, Fispal Tecnologia and Beauty Fair, verified on official websites, plus the size of each sector's buyer market from Brazil's Federal Revenue registry.",
        category: "Trade Shows · Nov 2026",
        summary:
          "We gathered the 2027 dates of four major São Paulo trade shows, verified on official websites, and matched each sector against Brazil's public Federal Revenue registry to size the buyer market.",
        readingMinutes: 6,
        sections: [
          {
            heading: "Why São Paulo hosts Brazil's largest trade shows",
            paragraphs: [
              "Two venues host most of the city's large business trade shows: São Paulo Expo, on Rodovia dos Imigrantes, and Expo Center Norte, in Vila Guilherme.",
              "For exhibitors there is a practical reason: São Paulo state is home to a large share of the buying companies in almost every sector. The figures below show this sector by sector.",
            ],
          },
          {
            heading: "The 2027 calendar",
            paragraphs: ["Dates verified on each show's official website on 25 November 2026. Always confirm with the organizer before booking travel or a booth."],
            bullets: [
              "FEICON — 6–9 April 2027 — São Paulo Expo — construction and building materials.",
              "Hospitalar — 18–21 May 2027 — São Paulo Expo — healthcare and hospital supplies.",
              "Fispal Tecnologia — 22–25 June 2027 — São Paulo Expo — processing and packaging for food and beverages.",
              "Beauty Fair — 4–7 September 2027 — Expo Center Norte — beauty, cosmetics and aesthetics.",
            ],
          },
          {
            heading: "FEICON: who buys in construction",
            paragraphs: ["Active establishments by primary CNAE code in Brazil's public Federal Revenue registry (October 2026 edition):"],
            bullets: [
              "Building materials retail (4744-0/99): 185,333 in Brazil, 33,802 in São Paulo state.",
              "Building construction companies (4120-4/00): 181,848 in Brazil, 35,384 in São Paulo state.",
              "Building materials wholesale (4679-6/99): 8,941 in Brazil, 1,851 in São Paulo state.",
            ],
          },
          {
            heading: "Hospitalar: who buys in healthcare",
            paragraphs: [],
            bullets: [
              "Outpatient medical clinics (8630-5/03): 226,132 in Brazil, 71,384 in São Paulo state.",
              "Hospitals (8610-1/01): 29,435 in Brazil, 4,064 in São Paulo state.",
              "Medical and hospital supplies wholesale (4645-1/01): 10,986 in Brazil, 3,225 in São Paulo state.",
            ],
          },
          {
            heading: "Fispal Tecnologia: who buys in food and beverages",
            paragraphs: [],
            bullets: [
              "Food manufacturing (CNAE division 10, all codes): 403,111 in Brazil, 101,061 in São Paulo state.",
              "Dairy (1052-0/00): 8,785 in Brazil, 954 in São Paulo state.",
              "Beverage manufacturing (division 11): 9,724 in Brazil, 1,483 in São Paulo state.",
            ],
          },
          {
            heading: "Beauty Fair: who buys in beauty and cosmetics",
            paragraphs: [],
            bullets: [
              "Cosmetics and fragrance wholesale (4646-0/01): 9,290 in Brazil, 3,363 in São Paulo state.",
              "Cosmetics and fragrance retail (4772-5/00): 244,067 in Brazil, 67,579 in São Paulo state.",
              "Hair and nail salons (9602-5/01): 942,603 in Brazil, 280,546 in São Paulo state.",
            ],
          },
          {
            heading: "What these numbers mean for exhibitors",
            paragraphs: [],
            bullets: [
              "Large buyers are a minority. In cosmetics there are about 9,000 wholesalers for more than 240,000 stores. Wholesalers and distributors are usually the highest-value conversations — and the most contested during the show.",
              "São Paulo matters, but it is not everything. Just over a third of Brazil's cosmetics wholesalers are in São Paulo state. Inviting only local buyers leaves most of the market out.",
              "The work starts before the doors open. With the right CNAE, size and region filters, you can identify qualified buyers before the show, invite them and arrive with meetings booked.",
            ],
          },
          {
            heading: "Methodology",
            paragraphs: [
              "Dates and venues verified on the shows' official websites on 25 November 2026. Company figures: active establishments by primary CNAE code in Brazil's public Federal Revenue registry (October 2026 edition), processed by the DeepB2B platform. This is a count of companies, not an estimate of each show's attendance.",
            ],
          },
        ],
        sources: [
          "FEICON official website (feicon.com.br), verified 25 Nov 2026",
          "Hospitalar official website (hospitalar.com), verified 25 Nov 2026",
          "Fispal Tecnologia official website (fispaltecnologia.com.br), verified 25 Nov 2026",
          "Beauty Fair official website (beautyfair.com.br), verified 25 Nov 2026",
          "Receita Federal — CNPJ Open Data, October 2026 edition, processed by DeepB2B",
        ],
      },
    },
  },
  {
    slug: "beauty-fair-2027-cosmetics-buyers",
    publishedAt: "2026-11-25",
    updatedAt: "2026-11-25",
    localized: {
      "pt-br": {
        title: "Beauty Fair 2027: quem compra cosméticos no Brasil e como chegar à feira com reuniões marcadas",
        metaTitle: "Beauty Fair 2027: compradores de cosméticos no Brasil | DeepB2B",
        metaDescription:
          "Beauty Fair 2027 acontece de 4 a 7 de setembro no Expo Center Norte. Veja o tamanho de cada elo da cadeia de cosméticos e um roteiro para expositores antes, durante e depois da feira.",
        category: "Feiras e Eventos · Nov 2026",
        summary:
          "Para quem expõe na Beauty Fair, o desafio não é ser visto, é ser visto pelos compradores certos. Mostramos o tamanho de cada elo da cadeia de cosméticos e um roteiro em três etapas.",
        readingMinutes: 5,
        sections: [
          {
            heading: "Datas e local",
            paragraphs: [
              "A Beauty Fair 2027 acontece de 4 a 7 de setembro de 2027, no Expo Center Norte (Rua José Bernardo Pinto, 333, Vila Guilherme, São Paulo – SP), segundo o site oficial da feira, conferido em 25/11/2026.",
            ],
          },
          {
            heading: "A cadeia de cosméticos em números",
            paragraphs: [
              "A Beauty Fair reúne a cadeia inteira: indústria, distribuição, varejo e profissionais. Estabelecimentos ativos por CNAE principal na base pública da Receita Federal (edição de outubro de 2026):",
            ],
            bullets: [
              "Fabricação de cosméticos e perfumaria (2063-1/00): 3.543 no Brasil, 1.364 em SP.",
              "Atacado de cosméticos e perfumaria (4646-0/01): 9.290 no Brasil, 3.363 em SP.",
              "Varejo de cosméticos e perfumaria (4772-5/00): 244.067 no Brasil, 67.579 em SP.",
              "Cabeleireiros, manicure e pedicure (9602-5/01): 942.603 no Brasil, 280.546 em SP.",
              "Estética e cuidados com a beleza (9602-5/02): 377.223 no Brasil, 113.139 em SP.",
            ],
          },
          {
            heading: "Duas leituras para quem expõe",
            paragraphs: [],
            bullets: [
              "O funil se estreita no atacado. São cerca de 3,5 mil fabricantes para pouco mais de 9 mil atacadistas, que abastecem centenas de milhares de lojas e salões. Para a indústria, cada distribuidor bem escolhido equivale a muitos pontos de venda.",
              "A maior parte do atacado não está em São Paulo. Cerca de 36% dos atacadistas de cosméticos estão no estado de SP; os outros 64% estão espalhados pelo país, e muitos só vão à feira com um motivo concreto: uma reunião marcada, um lançamento, uma condição comercial.",
            ],
          },
          {
            heading: "Antes da feira (60 dias)",
            paragraphs: [],
            bullets: [
              "Defina o comprador: distribuidores, atacadistas, redes de perfumaria e farmácia, lojas de cosméticos ou salões. Cada um pede uma abordagem diferente.",
              "Monte a lista com critério: CNAE, porte e região. Exclua quem já é cliente e quem é concorrente.",
              "Identifique quem decide: em distribuidoras, geralmente a diretoria comercial ou de compras.",
              "Convide com motivo: um lançamento, uma demonstração ou uma condição para quem agendar visita ao estande.",
            ],
          },
          {
            heading: "Durante e depois da feira",
            paragraphs: [],
            bullets: [
              "Durante: deixe a agenda de reuniões visível para a equipe do estande e registre cada conversa com o perfil do comprador e o próximo passo.",
              "Depois (30 dias): retome primeiro quem demonstrou interesse, inclusive quem foi convidado e não compareceu.",
              "Meça o resultado: empresas abordadas, respostas, reuniões realizadas e oportunidades abertas.",
            ],
          },
          {
            heading: "Metodologia",
            paragraphs: [
              "Datas e local: site oficial da Beauty Fair, conferido em 25/11/2026. Números: estabelecimentos ativos por CNAE principal na base pública da Receita Federal (edição de outubro de 2026), processada pela plataforma DeepB2B. É uma contagem de empresas, não uma estimativa do público da feira.",
            ],
          },
        ],
        sources: [
          "Site oficial da Beauty Fair (beautyfair.com.br), conferido em 25/11/2026",
          "Receita Federal — Dados Abertos do CNPJ, edição de outubro de 2026, processados pela DeepB2B",
        ],
      },
      en: {
        title: "Beauty Fair 2027: Who Buys Cosmetics in Brazil and How to Arrive With Meetings Booked",
        metaTitle: "Beauty Fair 2027: Cosmetics Buyers in Brazil | DeepB2B",
        metaDescription:
          "Beauty Fair 2027 runs 4–7 September at Expo Center Norte, São Paulo. See the size of each link in Brazil's cosmetics chain and a before-during-after playbook for exhibitors.",
        category: "Trade Shows · Nov 2026",
        summary:
          "For Beauty Fair exhibitors, the challenge isn't being seen — it's being seen by the right buyers. We size each link of Brazil's cosmetics chain and lay out a three-stage playbook.",
        readingMinutes: 5,
        sections: [
          {
            heading: "Dates and venue",
            paragraphs: [
              "Beauty Fair 2027 runs from 4 to 7 September 2027 at Expo Center Norte (Rua José Bernardo Pinto, 333, Vila Guilherme, São Paulo – SP), according to the show's official website, verified on 25 November 2026.",
            ],
          },
          {
            heading: "Brazil's cosmetics chain in numbers",
            paragraphs: [
              "Beauty Fair brings the whole chain together: manufacturers, distribution, retail and professionals. Active establishments by primary CNAE code in Brazil's public Federal Revenue registry (October 2026 edition):",
            ],
            bullets: [
              "Cosmetics and fragrance manufacturing (2063-1/00): 3,543 in Brazil, 1,364 in São Paulo state.",
              "Cosmetics and fragrance wholesale (4646-0/01): 9,290 in Brazil, 3,363 in São Paulo state.",
              "Cosmetics and fragrance retail (4772-5/00): 244,067 in Brazil, 67,579 in São Paulo state.",
              "Hair and nail salons (9602-5/01): 942,603 in Brazil, 280,546 in São Paulo state.",
              "Aesthetics and beauty care (9602-5/02): 377,223 in Brazil, 113,139 in São Paulo state.",
            ],
          },
          {
            heading: "Two takeaways for exhibitors",
            paragraphs: [],
            bullets: [
              "The funnel narrows at wholesale. There are about 3,500 manufacturers and just over 9,000 wholesalers supplying hundreds of thousands of stores and salons. For a manufacturer, each well-chosen distributor stands for many points of sale.",
              "Most wholesalers are outside São Paulo. About 36% of Brazil's cosmetics wholesalers are in São Paulo state; the other 64% are spread across the country, and many only travel to the show with a concrete reason: a booked meeting, a launch or a commercial offer.",
            ],
          },
          {
            heading: "Before the show (60 days)",
            paragraphs: [],
            bullets: [
              "Define the buyer: distributors, wholesalers, perfumery and pharmacy chains, cosmetics stores or salons. Each needs a different approach.",
              "Build the list with criteria: CNAE code, company size and region. Exclude existing customers and competitors.",
              "Identify the decision-maker: in distributors, usually the commercial or purchasing director.",
              "Invite with a reason: a launch, a demo or an offer for buyers who book a booth visit.",
            ],
          },
          {
            heading: "During and after the show",
            paragraphs: [],
            bullets: [
              "During: keep the meeting schedule visible to the booth team and log every conversation with the buyer profile and next step.",
              "After (30 days): follow up first with interested contacts, including those who were invited but didn't attend.",
              "Measure results: companies contacted, replies, meetings held and opportunities opened.",
            ],
          },
          {
            heading: "Methodology",
            paragraphs: [
              "Dates and venue: Beauty Fair official website, verified on 25 November 2026. Figures: active establishments by primary CNAE code in Brazil's public Federal Revenue registry (October 2026 edition), processed by the DeepB2B platform. This is a count of companies, not an estimate of show attendance.",
            ],
          },
        ],
        sources: [
          "Beauty Fair official website (beautyfair.com.br), verified 25 Nov 2026",
          "Receita Federal — CNPJ Open Data, October 2026 edition, processed by DeepB2B",
        ],
      },
    },
  },
  {
    slug: "brazil-industrial-machinery-distribution-report-2026",
    publishedAt: "2026-11-23",
    updatedAt: "2026-11-23",
    featuredReport: true,
    localized: {
      en: {
        title: "Brazil Industrial Machinery & Equipment Distribution — Sector Intelligence Report (2026)",
        metaTitle: "Brazil Industrial Machinery Distribution Report 2026 | Sources & CNAE Map | DeepB2B",
        metaDescription:
          "Structured 2026 sector report on Brazilian industrial machinery buyers, wholesale distributors (CNAE 4663-0/00), regional industrial corridors, and public registry due diligence.",
        category: "Sector Report · Nov 2026",
        summary:
          "An evidence-based map of how foreign machinery manufacturers separate stocking distributors, commission agents, and end-user factories across Brazil's industrial hubs — with full official source attribution.",
        readingMinutes: 8,
        sections: [
          {
            heading: "Executive Context & Scope",
            paragraphs: [
              "Foreign industrial machinery manufacturers (notably from Germany, China, Italy, and the United States) rarely fail in Brazil due to product quality; most stalls occur during partner screening. Standard international directories blur commercial agents, retail hardware resellers, and true B2B technical distributors.",
              "This 2026 sector briefing documents the official Brazilian classification framework (IBGE/CONCLA CNAE 2.3 and Receita Federal CNPJ) used to map buyers and distribution partners without relying on unverified headcount or private revenue guesses.",
            ],
          },
          {
            heading: "1. Value Chain Taxonomy: Separating Manufacturers, Distributors & Agents",
            paragraphs: [
              "Brazilian tax registries assign primary and secondary 7-digit CNAE codes. For machinery market entry, four distinct layers must be separated cleanly:",
            ],
            bullets: [
              "CNAE Division 28 (e.g., 2822-4, 2869-1): Domestic machinery and equipment manufacturers — useful to identify local competitors or OEM integrators.",
              "CNAE 4663-0/00 (Comércio atacadista de máquinas e equipamentos para uso industrial; partes e peças): Core wholesale trade classification for stocking industrial machinery distributors and importers.",
              "CNAE 3314-7 (Manutenção e reparação de máquinas e equipamentos): Industrial maintenance and after-sales engineering — frequently registered as a secondary CNAE by technical channel partners.",
              "CNAE 4614-1/00 (Representantes comerciais e agentes do comércio de máquinas): Commissioned sales agents who intermediate deals without holding inventory or import licenses.",
            ],
          },
          {
            heading: "2. Priority Industrial Corridors in Brazil",
            paragraphs: [
              "Industrial demand and import distribution infrastructure are heavily concentrated across specific state corridors. Splitting partner outreach by macro-region reflects real logistics and state ICMS tax boundaries:",
            ],
            bullets: [
              "São Paulo Corridor (Capital, Campinas, Sorocaba, Piracicaba, ABC): Primary entry point for national importers, engineering integrators, and multi-sector industrial headquarters.",
              "Southern Manufacturing Belt (Curitiba/PR, Joinville & Blumenau/SC, Caxias do Sul/RS): Precision metalworking, tooling, agribusiness equipment, plastics, and export-focused plants.",
              "Minas Gerais Industrial Axis (Belo Horizonte, Contagem, Betim): Heavy industrial maintenance, mining machinery supply chains, and regional distribution.",
            ],
          },
          {
            heading: "3. Public Registry Due Diligence Before Channel Commitment",
            paragraphs: [
              "Before appointing an exclusive distributor or shipping demonstration units, export teams should cross-check four public Brazilian layers:",
            ],
            bullets: [
              "Confirm ATIVA legal status and establishment history (0001 headquarters vs. regional branches) in Receita Federal.",
              "Review company size tier (EPP / DEMAIS) and Capital Social while remembering Capital Social is declared equity, not annual turnover.",
              "Inspect QSA (Quadro de Sócios e Administradores) to identify managing partners and multi-company corporate links.",
              "Screen public federal fiscal signals (PGFN Dívida Ativa) and judicial recovery filings as objective early-warning indicators.",
            ],
          },
          {
            heading: "4. Methodological Boundaries & Data Limitations",
            paragraphs: [
              "In line with DeepB2B governance standards, this report cites only verifiable public structures. Private Brazilian limited companies (Ltda.) do not publish audited annual machinery sales or monthly headcount in open government registries; product-line specialization must be confirmed via public corporate websites or direct commercial qualification.",
            ],
          },
        ],
        sources: [
          "IBGE / CONCLA — CNAE 2.3 Official Classification (Divisions 28, 33, 46)",
          "Receita Federal do Brasil — Cadastro Nacional da Pessoa Jurídica (CNPJ) & QSA",
          "MDIC / Comex Stat — Brazilian Foreign Trade Methodology (NCM / HS Chapters 84 & 85)",
          "PGFN — Procuradoria-Geral da Fazenda Nacional (Public Federal Debt Registry)",
        ],
      },
      "pt-br": {
        title: "Distribuição de Máquinas e Equipamentos Industriais no Brasil — Relatório Setorial (2026)",
        metaTitle: "Relatório Setorial 2026: Distribuição de Máquinas Industriais no Brasil | DeepB2B",
        metaDescription:
          "Relatório técnico com fontes oficiais (IBGE/CNAE, Receita Federal, MDIC/Comex Stat e PGFN) sobre canais de distribuição de máquinas industriais e polos regionais.",
        category: "Relatório Setorial · Nov 2026",
        summary:
          "Mapeamento estruturado da cadeia de máquinas e equipamentos industriais no Brasil: como separar distribuidores atacadistas (CNAE 4663-0/00), representantes comerciais, assistência técnica e indústrias compradoras.",
        readingMinutes: 8,
        sections: [
          {
            heading: "Contexto e Escopo Metodológico",
            paragraphs: [
              "Fabricantes estrangeiros e indústrias nacionais de bens de capital frequentemente enfrentam ruído ao buscar parceiros de canal no Brasil: diretórios genéricos misturam representantes comissionados, lojas varejistas e concorrentes fabris na mesma lista.",
              "Este relatório setorial documenta a taxonomia oficial brasileira (CNAE 2.3 / CNPJ) e os critérios públicos aplicáveis à qualificação de canais de máquinas industriais, sem utilizar estimativas opacas ou números não auditáveis.",
            ],
          },
          {
            heading: "1. Arquitetura da Cadeia em Códigos CNAE",
            paragraphs: [
              "A separação correta dos elos da cadeia exige combinar CNAE principal e secundário:",
            ],
            bullets: [
              "Divisão 28 (ex.: 2822-4, 2869-1): Fabricação de máquinas e equipamentos — identifica produtores locais e concorrentes diretos.",
              "CNAE 4663-0/00: Comércio atacadista de máquinas e equipamentos para uso industrial; partes e peças — núcleo dos distribuidores e importadores B2B com estoque.",
              "CNAE 3314-7: Manutenção e reparação de máquinas industriais — frequentemente presente como CNAE secundário em distribuidores com engenharia de pós-venda.",
              "CNAE 4614-1/00: Representantes comerciais e agentes — atuam por comissão, sem estoque próprio ou estrutura de importação.",
            ],
          },
          {
            heading: "2. Polos Industriais Prioritários",
            paragraphs: [
              "Custos logísticos e regras estaduais de ICMS tornam recomendável segmentar a prospecção de canais por corredores regionais:",
            ],
            bullets: [
              "Corredor Paulista (Capital, Campinas, Sorocaba, Piracicaba, ABC): principal concentração de sedes importadoras e integradores.",
              "Cinturão Sul (Curitiba/PR, Joinville e Blumenau/SC, Caxias do Sul/RS): forte densidade em metalmecânica, plásticos, agroindústria e manufatura de precisão.",
              "Eixo Mineiro (BH, Contagem, Betim): distribuição voltada a mineração, siderurgia e manutenção pesada.",
            ],
          },
          {
            heading: "3. Diligência Cadastral Antes de Nomear Distribuidores",
            paragraphs: [
              "Antes de avançar em negociações comerciais ou exclusividade regional, verifique:",
            ],
            bullets: [
              "Situação cadastral ATIVA, data de abertura e distinção matriz/filial na Receita Federal.",
              "Porte fiscal (EPP / Demais) e Capital Social (lembrando que Capital Social não equivale a faturamento anual).",
              "Quadro Societário (QSA) para identificar sócios administradores e vínculos empresariais.",
              "Sinais públicos na PGFN e registros de recuperação judicial na data da consulta.",
            ],
          },
          {
            heading: "4. Fontes e Limitações Transparentes",
            paragraphs: [
              "Sociedades limitadas fechadas não divulgam faturamento por linha de máquina nem quadro mensal exato de engenheiros em bases públicas abertas. A validação de marcas representadas e portfólio técnico deve combinar dados oficiais com leitura do site corporativo e entrevista comercial.",
            ],
          },
        ],
        sources: [
          "IBGE / CONCLA — Classificação Nacional de Atividades Econômicas (CNAE 2.3)",
          "Receita Federal do Brasil — Cadastro Nacional da Pessoa Jurídica (CNPJ) e QSA",
          "MDIC / Comex Stat — Metodologia de Comércio Exterior (Capítulos NCM 84 e 85)",
          "PGFN — Lista Pública de Devedores / Dívida Ativa da União",
        ],
      },
      es: {
        title: "Distribución de Maquinaria y Equipos Industriales en Brasil — Informe Sectorial (2026)",
        metaTitle: "Informe Sectorial 2026: Distribución de Maquinaria Industrial en Brasil | DeepB2B",
        metaDescription:
          "Informe estructurado con fuentes oficiales (IBGE/CNAE, Receita Federal, MDIC/Comex Stat y PGFN) sobre canales de distribución de maquinaria industrial y polos regionales en Brasil.",
        category: "Informe Sectorial · Nov 2026",
        summary:
          "Mapa basado en registros oficiales de cómo los fabricantes internacionales separan distribuidores mayoristas (CNAE 4663-0/00), agentes comisionistas y plantas compradoras en los corredores industriales de Brasil.",
        readingMinutes: 8,
        sections: [
          {
            heading: "Contexto Ejecutivo y Alcance Metodológico",
            paragraphs: [
              "Los fabricantes extranjeros de maquinaria industrial que buscan expandirse hacia Brasil rara vez tropiezan por competitividad de producto; el cuello de botella suele estar en la selección de socios locales. Los directorios genéricos mezclan agentes comerciales, ferreterías minoristas y competidores industriales en una misma lista.",
              "Este informe técnico documenta la taxonomía oficial brasileña (IBGE/CONCLA CNAE 2.3 y CNPJ) utilizada para identificar compradores finales y distribuidores mayoristas sin inventar cifras de facturación privada ni dotación de personal no publicada.",
            ],
          },
          {
            heading: "1. Arquitectura de la Cadena en Códigos CNAE",
            paragraphs: [
              "Para mapear correctamente el ecosistema industrial de maquinaria, es indispensable separar cuatro eslabones mediante CNAE principal y secundario:",
            ],
            bullets: [
              "División 28 (ej. 2822-4, 2869-1): Fabricantes locales de maquinaria y equipos — permite identificar competidores nacionales o integradores OEM.",
              "CNAE 4663-0/00: Comercio mayorista de maquinaria y equipos para uso industrial; partes y piezas — núcleo de distribuidores e importadores B2B con inventario.",
              "CNAE 3314-7: Mantenimiento y reparación de maquinaria industrial — frecuente como CNAE secundario en socios técnicos con servicio posventa.",
              "CNAE 4614-1/00: Representantes comerciales y agentes — intermedian pedidos por comisión sin inventario ni estructura de importación.",
            ],
          },
          {
            heading: "2. Corredores Industriales Prioritarios en Brasil",
            paragraphs: [
              "La logística continental y la tributación estatal (ICMS) hacen recomendable segmentar la cobertura por regiones:",
            ],
            bullets: [
              "Corredor de São Paulo (Capital, Campinas, Sorocaba, Piracicaba, ABC): principal polo de importadores nacionales, integradores y sedes corporativas.",
              "Cinturón Industrial del Sur (Curitiba/PR, Joinville y Blumenau/SC, Caxias do Sul/RS): metalmecánica de precisión, plásticos, maquinaria agroindustrial y plantas exportadoras.",
              "Eje de Minas Gerais (Belo Horizonte, Contagem, Betim): maquinaria para minería, mantenimiento industrial pesado y distribución regional.",
            ],
          },
          {
            heading: "3. Debida Diligencia Registral Previa al Acuerdo",
            paragraphs: [
              "Antes de designar un distribuidor exclusivo o enviar equipos de demostración, conviene revisar cuatro capas públicas oficiales:",
            ],
            bullets: [
              "Confirmar estado registral ATIVA, año de fundación y relación matriz/sucursal (0001 vs. 0002) en Receita Federal.",
              "Revisar tamaño fiscal (EPP / Demais) y Capital Social, recordando que el capital declarado en estatutos no equivale a ventas anuales.",
              "Consultar el QSA (Cuadro de Socios y Administradores) para identificar a los socios gestores y grupos vinculados.",
              "Verificar señales fiscales públicas en PGFN y registros públicos de recuperación judicial en la fecha de consulta.",
            ],
          },
          {
            heading: "4. Límites Transparentes de las Fuentes Públicas",
            paragraphs: [
              "Las sociedades limitadas brasileñas (Ltda.) de capital cerrado no divulgan ingresos auditados por línea de maquinaria ni nómina mensual en registros abiertos. La especialización técnica y marcas representadas deben confirmarse mediante sitios web corporativos y contacto comercial directo.",
            ],
          },
        ],
        sources: [
          "IBGE / CONCLA — Clasificación Oficial CNAE 2.3 (Divisiones 28, 33, 46)",
          "Receita Federal do Brasil — Cadastro Nacional da Pessoa Jurídica (CNPJ) y QSA",
          "MDIC / Comex Stat — Metodología de Comercio Exterior (Capítulos NCM 84 y 85)",
          "PGFN — Registro Público de Deuda Activa de la Unión",
        ],
      },
      "zh-cn": {
        title: "巴西工业机械与设备分销渠道深度行业报告（2026）",
        metaTitle: "2026 巴西工业机械与设备分销渠道行业报告 | DeepB2B",
        metaDescription:
          "基于巴西 IBGE CNAE 分类、联邦税务局 CNPJ、MDIC 外贸架构与 PGFN 官方来源编写的 2026 巴西工业设备渠道调研实务报告。",
        category: "行业报告 · 2026年11月",
        summary:
          "系统拆解中国及海外工业机械制造商如何区分巴西本地工厂、备货型进口批发商（CNAE 4663-0/00）、售后工程商与纯佣金代理，并附上重点工业走廊与合规尽调框架。",
        readingMinutes: 8,
        sections: [
          {
            heading: "研究背景与编写原则",
            paragraphs: [
              "来自中国、德国、意大利和美国的工业设备制造商在进入巴西时，最常见的瓶颈并非产品性价比，而是难以在初期区分“具备清关与售后能力的专业经销商”与“仅做撮合的个人商业代表或小型五金零售店”。",
              "本报告立足巴西官方公开分类体系（IBGE/CONCLA CNAE 2.3 与联邦税务局 CNPJ），坚持不编造任何未经审计的私营企业营收或员工人数估算。",
            ],
          },
          {
            heading: "一、巴西工业设备产业链的四个关键 CNAE 层级",
            paragraphs: [
              "在筛选潜在经销商或下游客户时，必须结合主营与兼营 7 位 CNAE 编码进行精准分层：",
            ],
            bullets: [
              "第 28 大类（如 2822-4、2869-1）：巴西本土机械设备制造厂——可用于识别本地同业竞争者或 OEM 集成伙伴。",
              "CNAE 4663-0/00（工业用机械、设备及零配件批发贸易）：核心目标编码，对应具备贸易主体资格的工业设备经销商与进口批发商。",
              "CNAE 3314-7（工业机械维修与保养工程）：优质设备经销商常将其作为兼营编码登记，体现其具备本地售后技术团队。",
              "CNAE 4614-1/00（机械设备商业代表及代理）：通常仅按佣金撮合订单，不承担库存或自主进口清关。",
            ],
          },
          {
            heading: "二、巴西重点工业走廊分布",
            paragraphs: [
              "受各州流转税（ICMS）与内陆物流半径制约，建议按区域布局多点渠道：",
            ],
            bullets: [
              "圣保罗工业走廊（圣保罗市、坎皮纳斯、索罗卡巴、ABC 工业区）：全国设备进口商总部与大型自动化集成商最密集的核心地带。",
              "南部制造带（库里蒂巴/PR、若因维利与布卢梅瑙/SC、南卡希亚斯/RS）：精密金属加工、农机、塑料包装机械及出口工厂重镇。",
              "米纳斯吉拉斯州轴线（贝洛奥里藏特、孔塔任）：聚焦矿业装备、重工维护与冶金产业链配套渠道。",
            ],
          },
          {
            heading: "三、签署代理或寄送样机前的官方尽调清单",
            paragraphs: [
              "在开展深度商务谈判前，建议依托巴西官方公开信息完成四项基础排查：",
            ],
            bullets: [
              "核实联邦税务局在营状态（ATIVA）、成立年限及总公司/分公司关系（0001 vs 0002）。",
              "查看企业规模分类（EPP / DEMAIS）与注册资本（注意：章程注册资本不等同于年销售额）。",
              "查阅 QSA 法定股东与管理人架构，确认实际控制人与关联公司背景。",
              "检索 PGFN 联邦公共欠税及司法重整记录作为早期风险提示。",
            ],
          },
          {
            heading: "四、数据来源与公开边界声明",
            paragraphs: [
              "根据巴西法律，非上市有限责任公司（Ltda.）无需公开具体设备品类的年度销售额或月度在职人数。因此，评估经销商实际代理品牌与工程实力时，应将官方注册基座与企业官网核验及商务沟通相结合。",
            ],
          },
        ],
        sources: [
          "IBGE / CONCLA — CNAE 2.3 官方经济活动分类（第 28、33、46 类）",
          "巴西联邦税务局 (Receita Federal) — CNPJ 注册架构与 QSA 股东公开规范",
          "MDIC / Comex Stat — 巴西外贸统计方法论（NCM 第 84、85 章机电设备）",
          "PGFN — 巴西国家财政总署公开联邦欠税名录",
        ],
      },
    },
  },
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
      es: {
        title: "Cómo Encontrar Distribuidores en Brasil",
        metaTitle: "Cómo Encontrar Distribuidores en Brasil por CNAE y Región | DeepB2B",
        metaDescription:
          "Guía práctica para fabricantes y exportadores latinoamericanos y globales que buscan distribuidores mayoristas reales en Brasil usando códigos CNAE.",
        category: "Entrada a Brasil",
        summary:
          "Por qué las búsquedas genéricas mezclan minoristas y fábricas en Brasil, y cómo los códigos CNAE mayoristas, filtros regionales y revisión QSA resuelven la selección de canales.",
        readingMinutes: 6,
        sections: [
          {
            heading: "Por qué buscar distribuidores en Brasil exige lógica registral local",
            paragraphs: [
              "Quienes buscan distribuidores en Brasil desde el exterior suelen iniciar con búsquedas en inglés o español. Sin embargo, gran parte de los distribuidores regionales brasileños publican sus catálogos exclusivamente en portugués.",
              "Además, los listados genéricos mezclan comercios minoristas, agentes independientes y fabricantes competidores. Aplicar la taxonomía fiscal brasileña elimina ese ruido desde el inicio.",
            ],
          },
          {
            heading: "1. Aísle el comercio mayorista mediante la División 46 del CNAE",
            paragraphs: [
              "Toda empresa formal en Brasil registra códigos CNAE (Clasificación Nacional de Actividades Económicas). El comercio mayorista se agrupa en la División 46, la manufactura en las Divisiones 10–33 y el comercio minorista en la División 47.",
            ],
            bullets: [
              "Filtre por códigos de la División 46 alineados con su equipo, insumo industrial o línea de consumo.",
              "Incluya CNAEs secundarios cuando los importadores combinen distribución mayorista con servicio técnico.",
              "Excluya CNAEs de fabricación directa cuando busque socios de canal y no competidores.",
            ],
          },
          {
            heading: "2. Segmente por macrorregión en lugar de tratar Brasil como un solo punto",
            paragraphs: [
              "Las distancias continentales y los impuestos estatales (ICMS) hacen que pocos distribuidores cubran todo el país de manera uniforme. Estructure listas separadas para Sudeste (SP, MG, RJ), Sur (PR, SC, RS) y Nordeste (BA, PE, CE).",
            ],
          },
          {
            heading: "3. Verifique vigencia registral y QSA antes de contactar",
            paragraphs: [
              "Confirme estado ATIVA en Receita Federal, revise antigüedad, tamaño empresarial (Porte) y socios administradores (QSA) antes de enviar listas de precios o condiciones comerciales.",
            ],
          },
        ],
        sources: [
          "Receita Federal do Brasil — Datos Públicos de CNPJ",
          "IBGE / CONCLA — Estructura Oficial CNAE",
          "PGFN — Consulta Pública de Deuda Activa",
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
      es: {
        title: "Entendiendo los Datos del CNPJ Brasileño",
        metaTitle: "Entendiendo los Datos del CNPJ Brasileño: Matriz, Porte y QSA | DeepB2B",
        metaDescription:
          "Guía completa sobre el registro fiscal CNPJ de 14 dígitos en Brasil: diferencia entre matriz y sucursal, Razão Social, tamaño Porte, QSA y estado registral.",
        category: "Datos Empresariales",
        summary:
          "Todo lo que un equipo internacional necesita saber para interpretar un registro CNPJ brasileño sin errores conceptuales.",
        readingMinutes: 5,
        sections: [
          {
            heading: "Anatomía de los 14 dígitos del CNPJ",
            paragraphs: [
              "El CNPJ es el registro tributario obligatorio emitido por Receita Federal para toda entidad y establecimiento físico en Brasil:",
            ],
            bullets: [
              "Primeros 8 dígitos (CNPJ Básico): identifican al grupo empresarial raíz.",
              "Dígitos 9 al 12 (Orden): '0001' corresponde a la casa matriz (Matriz); '0002', '0003', etc., identifican sucursales, plantas o centros de distribución (Filiais).",
              "Últimos 2 dígitos: dígitos verificadores.",
            ],
          },
          {
            heading: "Campos clave en la calificación B2B",
            paragraphs: [
              "Interpretar correctamente el registro evita descartar industrias relevantes o contactar empresas inactivas:",
            ],
            bullets: [
              "Razão Social vs. Nome Fantasia: muchas industrias tradicionales no completan el nombre comercial (Nome Fantasia) en el registro fiscal.",
              "Situação Cadastral: filtre siempre por ATIVA para prospección y evaluación de socios.",
              "Porte (ME, EPP, Demais): clasificación fiscal oficial según régimen tributario.",
              "QSA (Quadro de Sócios e Administradores): socios y administradores legales registrados ante Receita Federal.",
            ],
          },
          {
            heading: "Precaución al interpretar el Capital Social",
            paragraphs: [
              "El Capital Social declarado en los estatutos no equivale a la facturación anual ni al flujo de caja operativo de la empresa.",
            ],
          },
        ],
        sources: [
          "Receita Federal do Brasil — Instrucción Normativa CNPJ",
          "Portal Nacional Redesim — Estructura Registral",
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
      es: {
        title: "Sectores Económicos Brasileños y CNAE Explicados",
        metaTitle: "Sectores Económicos de Brasil y Estructura CNAE Explicados | DeepB2B",
        metaDescription:
          "Cómo la jerarquía oficial de 7 dígitos del CNAE organiza manufactura, comercio mayorista, logística y servicios en Brasil.",
        category: "Mapeo Sectorial",
        summary:
          "Cómo leer los niveles del CNAE y combinar actividades principales y secundarias para segmentar con precisión el mercado brasileño.",
        readingMinutes: 5,
        sections: [
          {
            heading: "Cómo funciona la jerarquía CNAE de 5 niveles",
            paragraphs: [
              "Administrada por el IBGE y CONCLA, la tabla CNAE organiza cada actividad económica brasileña en Sección, División (2 dígitos), Grupo (3 dígitos), Clase (5 dígitos) y Subclase (7 dígitos).",
            ],
          },
          {
            heading: "CNAE Principal vs. Secundarios en la segmentación",
            paragraphs: [
              "Las empresas en Brasil registran un CNAE principal y pueden declarar múltiples CNAEs secundarios. Muchos importadores medianos registran mantenimiento o distribución como actividad secundaria.",
            ],
            bullets: [
              "Divisiones 10 a 33: Industrias manufactureras (alimentos, empaques, metalmecánica, maquinaria).",
              "División 46: Comercio mayorista y distribuidores B2B.",
              "División 47: Comercio minorista.",
              "Divisiones 49 a 53: Transporte de carga, almacenamiento y logística.",
            ],
          },
          {
            heading: "IA transparente para traducir su oferta a CNAE",
            paragraphs: [
              "DeepB2B traduce su descripción comercial en español a los grupos CNAE compatibles mostrando exactamente qué códigos se aplican en cada filtro.",
            ],
          },
        ],
        sources: [
          "IBGE / CONCLA — Tabla Oficial CNAE 2.3",
          "Receita Federal do Brasil — Vinculación CNAE en CNPJ",
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
      es: {
        title: "Cómo las Empresas Extranjeras Investigan el Mercado Brasileño",
        metaTitle: "Cómo Investigar el Mercado B2B de Brasil desde el Exterior | DeepB2B",
        metaDescription:
          "Guía práctica para equipos de exportación y consultoras de América Latina y el mundo que evalúan Brasil sin presencia local.",
        category: "Entrada a Brasil",
        summary:
          "Realidades operativas que los directorios globales omiten sobre Brasil y cómo estructurar una investigación de canales en cuatro pasos.",
        readingMinutes: 6,
        sections: [
          {
            heading: "Barreras prácticas al investigar Brasil desde el exterior",
            paragraphs: [
              "Los directorios internacionales tradicionales suelen sobre-representar multinacionales con presencia en inglés, dejando fuera a miles de industrias medianas y distribuidores regionales sólidos en Brasil.",
            ],
            bullets: [
              "La documentación registral, códigos CNAE y sitios web corporativos operan principalmente en portugués.",
              "La densidad industrial se concentra en corredores estatales específicos (Sudeste y Sur) junto a polos especializados como Manaos o el agro en el Centro-Oeste.",
              "Es clave distinguir entre 'representante comercial' (comisionista sin stock) y distribuidor importador.",
            ],
          },
          {
            heading: "Flujo recomendado en 4 etapas",
            paragraphs: [
              "Antes de programar viajes comerciales o ferias en São Paulo, estructure la investigación en cuatro capas:",
            ],
            bullets: [
              "Traduzca su portafolio a códigos CNAE de producción o comercio mayorista.",
              "Segmente por macrorregión y tamaño empresarial.",
              "Confirme estado activo e historial societario (QSA).",
              "Contraste sitios web corporativos antes de iniciar el contacto.",
            ],
          },
        ],
        sources: [
          "Receita Federal do Brasil — Estructura Pública CNPJ",
          "IBGE — Clasificaciones Económicas Regionales",
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
      es: {
        title: "Datos Empresariales en Brasil: Fuentes y Limitaciones",
        metaTitle: "Datos Empresariales de Brasil: Fuentes Oficiales, LGPD y Límites | DeepB2B",
        metaDescription:
          "Explicación técnica honesta sobre qué divulgan los registros públicos brasileños (CNPJ, CNAE, QSA, PGFN) y qué datos privados no son públicos.",
        category: "Gobernanza de Datos",
        summary:
          "Por qué la inteligencia empresarial confiable exige trazar límites claros entre registros oficiales, presencia web e inferencias de IA.",
        readingMinutes: 5,
        sections: [
          {
            heading: "Qué informan realmente las fuentes públicas brasileñas",
            paragraphs: [
              "Brasil cuenta con una sólida estructura pública de transparencia corporativa centrada en Receita Federal y PGFN:",
            ],
            bullets: [
              "Receita Federal: CNPJ, Razão Social, Nome Fantasia, dirección, fecha de constitución, estado registral (ATIVA/BAIXADA), CNAEs, Porte, Capital Social y QSA.",
              "PGFN: inscripciones públicas en deuda activa federal de la Unión.",
              "Registros notariales (bajo solicitud): consultas de protestos.",
            ],
          },
          {
            heading: "Qué NO es público en sociedades privadas cerradas",
            paragraphs: [
              "Las sociedades limitadas cerradas (Ltda.) en Brasil no publican facturación mensual auditada ni nómina exacta de empleados en bases gubernamentales abiertas. Cualquier plataforma que muestre esas cifras como exactas presenta estimaciones estadísticas, no registros oficiales.",
              "En DeepB2B nunca presentamos inferencias de IA como hechos oficiales.",
            ],
          },
          {
            heading: "Transparencia y cumplimiento LGPD",
            paragraphs: [
              "Los datos registrales de personas jurídicas son públicos; los datos de contacto ejecutivo se tratan exclusivamente para prospección B2B legítima bajo la Ley Nº 13.709/2018 (LGPD), con canal gratuito de revisión y exclusión (opt-out).",
            ],
          },
        ],
        sources: [
          "Receita Federal do Brasil — Datos Abiertos CNPJ",
          "PGFN — Registro Público de Deudores",
          "Presidencia de la República — Ley Nº 13.709/2018 (LGPD)",
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

/** Artigos disponíveis num idioma, já com o conteúdo daquele idioma. */
export function articlesFor(locale: Locale): { article: EditorialArticle; content: LocalizedArticleContent }[] {
  return EDITORIAL_ARTICLES.filter((a) => articleAvailableIn(a.slug, locale) && a.localized[locale]).map((a) => ({
    article: a,
    content: a.localized[locale] as LocalizedArticleContent,
  }));
}

export function getArticleBySlug(slug: string): EditorialArticle | undefined {
  return EDITORIAL_ARTICLES.find((a) => a.slug === slug);
}
