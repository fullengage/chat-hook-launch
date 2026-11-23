# Arquitetura Global, Design System e SEO/GEO — DeepB2B

## 1. Posicionamento de Marca

- **Marca:** DeepB2B (`https://deepb2b.ai/`)
- **Categoria:** Business Data & Market Intelligence
- **Especialização:** Brazilian Business Data & Intelligence
- **Tagline Global:** *Brazil's Business Intelligence, Powered by AI.*
- **Proposta de valor (`en`):** *"Discover Brazilian companies, understand industries, identify potential business partners and uncover commercial opportunities with AI-powered business intelligence."*
- **Posicionamento Brasil (`pt-br`):** *"Encontre empresas, identifique oportunidades e transforme dados brasileiros em inteligência comercial."*
- **Posicionamento China (`zh-cn`):** *"巴西企业数据与商业情报平台"*

---

## 2. Design System DeepB2B

### 2.1 Paleta Cromática (Evolução da Identidade Deepson)
| Token / Função | Valor | Uso |
|---|---|---|
| Navy Institucional (`--navy-950`) | `#040f21` | Header, footer, superfícies enterprise escuras |
| Navy Elevado (`--navy-900`) | `#07152e` | Cards técnicos em destaque, painéis analíticos |
| Laranja Precisão (`--primary`) | `#ff6b00` | CTAs primários, indicadores de match no radar, destaques |
| Superfície Clara (`--background`) | `#f8fafc` | Fundo principal editorial e analítico |
| Texto Principal (`--foreground`) | `#0f172a` | Títulos e leitura de alto contraste |
| Proveniência Oficial (`official`) | Emerald `#059669` | Dados de fontes públicas oficiais (Receita Federal / PGFN) |
| Proveniência Externa (`external`) | Sky `#0284c7` | Sinais corporativos públicos (website / presença digital) |
| Inferência por IA (`ai`) | Amber/Orange `#d97706` | Score ICP e racional comercial gerado por IA |
| Sob Demanda (`onDemand`) | Slate `#475569` | Enriquecimento autenticado dentro de `app.deepson.com.br` |

### 2.2 Tipografia Multilíngue (Latim + CJK)
- **Primária Sans:** `'Plus Jakarta Sans', 'Inter', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Noto Sans SC', system-ui, sans-serif`
- **Monospace Técnica (CNPJ / CNAE / JSON):** `'JetBrains Mono', ui-monospace, SFMono-Regular, monospace`
- Layouts preparados para variação de largura entre inglês, português (~15–25% mais longo) e chinês simplificado (alta densidade informacional, `line-height` confortável `1.65+`).

---

## 3. Arquitetura Multilíngue e Rotas (`en`, `pt-br`, `zh-cn`)

| Página | `/en/` (Global) | `/pt-br/` (Brasil) | `/zh-cn/` (China) |
|---|---|---|---|
| Home | `/en` | `/pt-br` | `/zh-cn` |
| Business Data | `/en/business-data` | `/pt-br/dados-empresariais` | `/zh-cn/business-data` |
| Market Intelligence | `/en/market-intelligence` | `/pt-br/inteligencia-de-mercado` | `/zh-cn/market-intelligence` |
| Lead Generation | `/en/lead-generation` | `/pt-br/prospeccao-b2b` | `/zh-cn/lead-generation` |
| Industry Mapping | `/en/industry-mapping` | `/pt-br/mapeamento-setorial` | `/zh-cn/industry-mapping` |
| Brazil Market Entry | `/en/brazil-market-entry` | `/pt-br/entrada-no-mercado-brasileiro` | `/zh-cn/brazil-market-entry` |
| Solutions | `/en/solutions` | `/pt-br/solucoes` | `/zh-cn/solutions` |
| Pricing | `/en/pricing` | `/pt-br/planos` | `/zh-cn/pricing` |
| Resources | `/en/resources` | `/pt-br/conteudos` | `/zh-cn/resources` |
| Article (×5) | `/en/resources/:slug` | `/pt-br/conteudos/:slug` | `/zh-cn/resources/:slug` |
| About | `/en/about` | `/pt-br/sobre` | `/zh-cn/about` |
| Contact | `/en/contact` | `/pt-br/contato` | `/zh-cn/contact` |
| Login / Platform | `/en/login` | `/pt-br/acesso` | `/zh-cn/login` |
| Privacy | `/en/privacy` | `/pt-br/privacidade` | `/zh-cn/privacy` |
| Terms | `/en/terms` | `/pt-br/termos-de-uso` | `/zh-cn/terms` |
| LGPD Governance | `/en/lgpd` | `/pt-br/lgpd` | `/zh-cn/lgpd` |
| Data Deletion | `/en/data-deletion` | `/pt-br/exclusao-de-dados` | `/zh-cn/data-deletion` |

- **Raiz (`/`):** Serve a experiência internacional padrão (`en`) com `canonical` apontando para `https://deepb2b.ai/en` e `x-default` para `https://deepb2b.ai/en`, sem redirecionamento forçado por IP (oferece banner discreto caso o navegador prefira `pt` ou `zh`).
- **Rotas legadas preservadas:** `/teste-gratis` (formulário de criação imediata de conta BR), `/obrigado`, `/auth`, `/privacidade`, `/termos-de-uso`, `/lgpd`, `/exclusao-de-dados`, `/contato`.

---

## 4. Planejamento de Palavras-Chave Internacionais (SEO & GEO)

### Inglês (`en`)
- Primárias: `brazil company database`, `brazil business data`, `brazil company search`, `brazil market intelligence`, `brazil business intelligence`
- Cauda longa comercial: `find distributors in brazil`, `brazil supplier database`, `brazil market entry`, `brazil b2b data`, `brazilian cnpj lookup`, `cnae industry classification brazil`

### Português (`pt-br`)
- Primárias: `inteligência de dados b2b`, `prospecção b2b brasil`, `base de empresas cnpj`, `mapeamento de mercado por cnae`
- Cauda longa comercial: `como encontrar distribuidores no brasil`, `qualificação de leads b2b com ia`, `consultar sócios e sinais financeiros cnpj`, `icp automático pelo site da empresa`

### Chinês Simplificado (`zh-cn`)
- Primárias: `巴西企业数据库`, `巴西商业情报`, `巴西公司查询`, `巴西市场调研`
- Cauda longa comercial: `如何寻找巴西经销商`, `巴西供应商数据库`, `巴西CNPJ企业查询`, `出海巴西B2B获客`, `巴西行业分类CNAE`
