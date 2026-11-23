# Auditoria Completa — Ecossistema Deepson (`deepson.com.br` → `deepb2b.ai`)

**Data da auditoria:** 23/11/2026  
**Escopo inspecionado:** `https://deepson.com.br/`, `https://www.deepson.com.br/`, `https://app.deepson.com.br/`, `https://chat.deepson.com.br/`, `https://seo.deepson.com.br/` e repositório local `chat-hook-launch-main`.

---

## 1. Resumo Executivo

A operação atual da **Deepson** (razão social `DEEPSON - INTELIGENCIA DE DADOS E TECNOLOGIA LTDA`, CNPJ `19.904.935/0001-20`, Mogi das Cruzes/SP, Grupo FullWeb) encontra-se em transição entre a antiga marca **ChatHook** (CRM de WhatsApp/Chatwoot) e a plataforma atual de **Inteligência de Dados B2B** em produção em `https://app.deepson.com.br/`.

A auditoria confirma que o produto real já possui motor robusto de inteligência empresarial brasileira (CNPJ, CNAE, porte, situação cadastral na Receita Federal, QSA/sócios, PGFN, sinais financeiros, LinkedIn de decisores, ICP, radar de mercado, funil/Kanban e compra de créditos via Pix), enquanto o site institucional (`www.deepson.com.br`) ainda opera como **SPA CSR pura**, monolíngue (`pt-BR` com `<html lang="en">` incorreto), sem `sitemap.xml`, sem dados estruturados Schema.org, com resquícios de ChatHook e sem arquitetura internacional.

---

## 2. Achados por Domínio e Arquitetura (15 Dimensões)

### 2.1 Infraestrutura & Arquitetura Frontend/Backend
- **`https://deepson.com.br/`**: Retorna `308 Permanent Redirect` para `https://www.deepson.com.br/` (Vercel, cache edge `gru1`, HSTS `max-age=63072000`).
- **`https://www.deepson.com.br/`**: SPA React 18.3.1 + Vite 5.4.19 + TypeScript 5.8.3 + Tailwind CSS 3.4.17 + shadcn-ui (Radix UI) + React Router DOM 6.30.1 + TanStack Query 5.83.0 + Recharts 2.15.4.
- **`https://app.deepson.com.br/`**: Aplicação principal autenticada (bundle `1.012.485` bytes, `<html lang="pt-BR">`, `title: Deepson`, sem `robots.txt`). Consome backend `/api/*` próprio:
  - Autenticação e contas: `/api/auth/login`, `/api/auth/logout`, `/api/auth/me`, `/api/auth/account`, `/api/auth/accounts`, `/api/auth/esqueci`, `/api/auth/redefinir`, `/api/auth/senha-inicial`, `/api/auth/setup`, `/api/account/members`.
  - ICP & Mercado: `/api/icp`, `/api/icp/perfis`, `/api/icp/capital-maximo`, `/api/mercado`, `/api/mercado/descobrir`, `/api/mercado/radar`, `/api/mercado/onde-cacar`, `/api/mercado/clientes`, `/api/mercado/ticket`, `/api/meu-mercado/brasil`, `/api/meu-mercado/cnpj`.
  - Prospecção & Enriquecimento: `/api/prospecting/leads`, `/api/prospecting/semelhantes`, `/api/cards/:id/decisores`, `/api/funil/decisores`, `/api/funil/linkedin-lote`, `/api/contatos/sinal`, `/api/my-day/abordagem`.
  - Kanban & Operação: `/api/kanban`, `/api/stages`, `/api/cards`, `/api/activities`, `/api/team/*`, `/api/sdr/*`, `/api/agenda/*`.
  - Créditos & Pagamento: `/api/credits`, `/api/credits/purchase`, `/api/credits/purchase/:id/pix`.
  - Integrações: `/api/chatwoot/*`, `/api/google/conectar|desconectar|status`, `/api/ws`.
- **`https://chat.deepson.com.br/`**: Instância Chatwoot/ChatHook (cookie `_chatwoot_session`). **Erro encontrado em produção:** `src/pages/Index.tsx` e `src/components/Footer.tsx` direcionam links "Acessar Plataforma" para `https://chat.deepson.com.br/` em vez de `https://app.deepson.com.br/`.
- **`https://seo.deepson.com.br/api/teste-gratis`**: Endpoint real chamado por `TrialForm.tsx` via `POST` (`Content-Type: text/plain` para evitar preflight CORS) para criar conta de teste (7 dias, 20 créditos, 1 por CNPJ) e retornar `{ url }`. A raiz `https://seo.deepson.com.br/` retorna `404`.
- **Supabase (`src/integrations/supabase/client.ts` + `supabase/functions/capture-lead/index.ts`)**: Edge Function recebe `{ name, email, whatsapp, companySize, source, page, userAgent }`, exige `name`, `email` e `whatsapp`, cria contato/conversa privada no Chatwoot e persiste na tabela `chathook_trial_leads`.

### 2.2 Componentes Reutilizáveis & Código Morto/Legado
- **Em uso ativo:** `PlansSection.tsx`, `HeroRadar.tsx`, `TrialForm.tsx`, `Footer.tsx`, `CookieConsent.tsx`, `src/components/ui/*` (biblioteca shadcn-ui completa).
- **Legado não utilizado pela Home atual (`Index.tsx`), oriundo da fase ChatHook:** `Header.tsx`, `HeroSection.tsx`, `BenefitsSection.tsx`, `CaptainIASection.tsx`, `ComparisonSection.tsx`, `FeaturesSection.tsx`, `FinalCTASection.tsx`, `HowItWorks.tsx`, `ImplementationSection.tsx`, `KanbanSection.tsx`, `ProblemSection.tsx`, `SecuritySection.tsx`, `SolutionSection.tsx`, `TeamSection.tsx`, `WhoIsItForSection.tsx`, `WhatsAppButton.tsx`, `src/pages/Index-old.tsx`, `src/pages/FreeTrialPage-v2.tsx`, `src/pages/Bonus.tsx`, `src/pages/EbookLandingPage.tsx`.
- **Subdiretório estático auxiliar:** `NexLead-Site-main/nexlead-premium` e cópia em `public/nexlead-premium/` (protótipo HTML estático).

### 2.3 Header, Navegação e Responsividade
- `src/pages/Index.tsx` possui header próprio sticky (`#040f21`) com âncoras `#solucao`, `#metodologia`, `#plans-section`, `#simulador`, link externo para plataforma (`chat.deepson.com.br` — incorreto), CTA `/teste-gratis` e WhatsApp.
- **Bug de UX Mobile:** O menu dropdown mobile em `Index.tsx` (linhas 95–144) omite o link `#plans-section`.
- **Duplicação de dados (`RULE #TECH-02` / DRY):** `SIM_PLANS` em `src/pages/Index.tsx` duplica os preços definidos em `src/components/PlansSection.tsx` (Profissional R$ 497, Equipe R$ 997, Escala R$ 1.997).

### 2.4 Identidade Visual Atual
- Paleta: Navy profundo (`#040f21`, `#07152e`, `#0b111e`), Laranja vibrante (`#ff6b00`, hover `#ea580c`), Fundos claros (`#f8fafc`, `#f1f5f9`), Texto escuro (`#0f172a`, `#334155`, `#475569`).
- Ativos gráficos: `public/favicon.svg`, `public/logo-deepson.png`, `public/dashboard-deepson.jpg`, `public/og-image.jpg`. Presença de arquivos obsoletos `logo-chathook-*.png` em `public/`.

### 2.5 Páginas, Fluxos de Conversão e Formulários Quebrados
- **`/teste-gratis` (`FreeTrialPage.tsx` + `TrialForm.tsx`):** Fluxo funcional completo (cria conta em `seo.deepson.com.br/api/teste-gratis` + envia lead em background para `capture-lead` + dispara `gtag sign_up`).
- **`/contato` (`Contact.tsx`):** **Quebrado.** `onSubmit={(e) => e.preventDefault()}` não envia nada, FAQ ainda fala de Chatwoot, API WhatsApp e QR Code, e o CTA final aponta para `https://app.deepson.com.br/trial`.
- **`/exclusao-de-dados` (`DataDeletion.tsx`):** **Quebrado.** `onSubmit={(e) => e.preventDefault()}` não envia a solicitação de exclusão LGPD.
- **`/obrigado` (`Obrigado.tsx`):** Ainda referencia `chathook_lead_name`, "ativação guiada do CRM" e oferece download de `ChatHook_WhatsApp_CRM.pdf` hospedado no Supabase Storage.
- **`/lgpd` (`LgpdCompliance.tsx`) & `/privacidade` (`PrivacyPolicy.tsx`):** Citam `Deepson CRM` e `CHATHOOK CRM - SOFTWARE E TECNOLOGIA LTDA` (razão social anterior ao rebranding contratual para `DEEPSON - INTELIGENCIA DE DADOS E TECNOLOGIA LTDA` presente no `Footer.tsx`).
- **`/oferta-especial` (`LowTicketLP.tsx`):** LP antiga de CRM WhatsApp a R$ 47/mês — desalinhada do posicionamento B2B Intelligence.

### 2.6 SEO Técnico, Sitemap, Robots, Schema.org e Core Web Vitals
| Item | Estado Atual em Produção | Diagnóstico | Severidade |
|---|---|---|---|
| `<html lang>` | `lang="en"` em site em português | Incorreto para buscadores e leitores de tela | **P0** |
| Renderização | CSR puro (`<div id="root"></div>` vazio no HTML inicial) | Conteúdo depende 100% de execução JS | **P0** |
| `sitemap.xml` | Inexistente (Vercel rewrite entrega `index.html` com HTTP 200) | Soft-200 inválido para Google Search Console | **P0** |
| `robots.txt` | Bloqueia `/conversations`, `/campaigns`, `/quick-start`, `/stage`, sem `Sitemap:` | Desatualizado (rotas antigas ChatHook) | **P1** |
| `canonical` / `hreflang` | Ausentes em todas as rotas | Sem sinalização internacional | **P0** |
| Meta tags por rota | Estáticas únicas em `index.html` | Todas as rotas compartilham o mesmo `<title>` e `<meta description>` | **P0** |
| Schema.org JSON-LD | Ausente | Sem `Organization`, `SoftwareApplication`, `WebSite`, `BreadcrumbList` ou `Article` | **P1** |
| `og:image` | `https://www.deepson.com.br/og-image.jpg` (HTTP 200, 35 KB) | Ativo, porém vinculado à marca Deepson | **P1** |
| Performance / Fontes | Fontes padrão de sistema (`font-sans`) sem font-display customizado; chunks separados (`vendor`, `supabase`, `icons`, `charts`) | Bom bundle splitting, porém sem preload/fontes enterprise nem suporte tipográfico CJK dedicado | **P2** |

### 2.7 Analytics, Privacidade (LGPD) e Segurança
- **Tracking sem consentimento (`P0` LGPD):** `index.html` carrega GTM (`GTM-TC3F89B4`) após 1,5s e Meta Pixel (`847581497869589`) após 2,5s independentemente da escolha do usuário em `CookieConsent.tsx` (que grava apenas `localStorage["chathook-cookie-consent"]` sem bloquear ou acionar scripts).
- **Segredo hardcoded no repositório (`P0` Segurança):** `supabase/functions/capture-lead/index.ts` (linha 6) mantém um `CHATHOOK_ACCESS_TOKEN` literal no código-fonte. **Ação recomendada fora do frontend:** migrar para `Deno.env.get("CHATHOOK_ACCESS_TOKEN")` via `supabase secrets set` e rotacionar o token no Chatwoot.

---

## 3. Inventário de Classificação de Ativos Existentes

| Categoria | Arquivos / Recursos | Destino no Projeto DeepB2B |
|---|---|---|
| **Preservar Integralmente** | `TrialForm.tsx`, `FreeTrialPage.tsx` (`/teste-gratis`), `supabase/functions/capture-lead`, `src/integrations/supabase/*`, `src/components/ui/*`, `vercel.json` (redirects legados) | Mantidos operacionais para não interromper aquisição BR atual (`seo.deepson.com.br` + Supabase) |
| **Modernizar & Reutilizar** | `PlansSection.tsx`, `HeroRadar.tsx`, paleta `#040f21` + `#ff6b00`, `CookieConsent.tsx`, `DataDeletion.tsx`, `Contact.tsx` | Refatorados com camada de serviços (`leadService`, `analytics`), i18n real e fontes de dados centralizadas (`src/data/pricing.ts`) |
| **Substituir** | `index.html` (GTM incondicional + `lang="en"`), `Index.tsx` (monolíngue), `public/robots.txt`, `public/favicon.svg`, `Footer.tsx`, `PrivacyPolicy.tsx`, `TermsOfUse.tsx`, `LgpdCompliance.tsx` | Substituídos por arquitetura multilíngue pré-renderizada (`en`, `pt-br`, `zh-cn`), SEO/Schema completo, consentimento real e identidade **DeepB2B** |
| **Isolar (Legado ChatHook)** | `Header.tsx`, `HeroSection.tsx`, `CaptainIASection.tsx`, `KanbanSection.tsx`, `LowTicketLP.tsx`, `Index-old.tsx`, `FreeTrialPage-v2.tsx`, `Bonus.tsx`, `EbookLandingPage.tsx`, `public/logo-chathook-*.png` | Mantidos fora das rotas principais DeepB2B até aprovação final de descomissionamento |
