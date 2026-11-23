# Matriz Factual: Funcionalidades Existentes vs. Planejadas

> **Princípio Editorial e Técnico:** Nenhuma funcionalidade é divulgada como ativa sem comprovação no código ou nos endpoints de produção (`app.deepson.com.br` / `seo.deepson.com.br`). Itens não implementados são apresentados explicitamente como **sob consulta**, **ilustrativos** ou **em evolução**.

---

## 1. Funcionalidades Comprovadas em Produção (`app.deepson.com.br` + `seo.deepson.com.br`)

| Capacidade | Evidência Verificada | Status na DeepB2B |
|---|---|---|
| Definição de ICP por briefing / URL da empresa | Endpoints `/api/icp`, `/api/icp/perfis`, `/api/mercado/descobrir` | **Ativo em produção** |
| Descoberta e radar de empresas brasileiras | Endpoints `/api/mercado/radar`, `/api/mercado/onde-cacar`, `/api/meu-mercado/brasil`, `/api/meu-mercado/cnpj` | **Ativo em produção** |
| Filtros cadastrais oficiais (CNPJ, CNAE, porte, situação, UF/município, capital social) | Endpoints `/api/icp/capital-maximo`, referências explícitas no bundle (`cnpj`: 124, `cnae`: 190, `porte`: 125, `situacao`: 32, `receita`: 67) | **Ativo em produção** |
| Consulta de sócios / QSA e decisores | Endpoints `/api/cards/:id/decisores`, `/api/funil/decisores`, `/api/funil/linkedin-lote` (`socios`: 36, `linkedin`: 139) | **Ativo em produção (sob crédito)** |
| Sinais financeiros de fontes públicas (Receita Federal, PGFN, protesto sob pedido) | Strings e regras em `PlansSection.tsx` + bundle (`pgfn`: 8, `sinais`: 17, `protesto`: 1) | **Ativo em produção (sob crédito)** |
| Abordagem comercial assistida por IA | Endpoint `/api/my-day/abordagem`, `/api/my-day/coaching` | **Ativo em produção** |
| Funil comercial Kanban e gestão de equipe | Endpoints `/api/kanban`, `/api/stages`, `/api/cards/bulk-assign`, `/api/team/*` | **Ativo em produção** |
| Sistema transparente de créditos e recarga Pix | Endpoints `/api/credits`, `/api/credits/purchase/:id/pix` e planos Profissional/Equipe/Escala | **Ativo em produção (BRL)** |
| Provisionamento automático de teste grátis (7 dias, 20 créditos, 1/CNPJ) | Endpoint `https://seo.deepson.com.br/api/teste-gratis` | **Ativo em produção (BR)** |
| Captura de leads e registro em CRM/Supabase | Edge Function `supabase/functions/capture-lead` | **Ativo em produção** |

---

## 2. Recursos do Novo Site Público (`deepb2b.ai`)

| Recurso | Natureza | Observação de Transparência |
|---|---|---|
| Experiência multilíngue completa (`en`, `pt-br`, `zh-cn`) com SSG prerender | **Implementado no site** | URLs independentes, `hreflang`, `canonical`, `sitemap.xml` |
| Busca empresarial interativa na Home/Business Data | **Demonstração ilustrativa** | Traduz consultas naturais (EN/PT-BR/ZH-CN) em filtros reais (CNAE, UF, porte, papel na cadeia) e exibe **registros claramente marcados como ilustrativos** com separação das 4 camadas de proveniência |
| Visualização de camadas de dados e macrorregiões do Brasil | **Estrutural / qualitativa** | Sem inventar estatísticas proprietárias ou cobertura numérica não auditada |
| Guias editoriais técnicos (5 guias × 3 idiomas) | **Conteúdo editorial original** | Focados em CNPJ, CNAE, busca de distribuidores, pesquisa de mercado e limitações reais |
| Formulário de solicitação de demo / contato internacional e exclusão LGPD | **Integrado ao fluxo existente** | Envia para `capture-lead` com metadados de país, idioma, finalidade e empresa |

---

## 3. Funcionalidades Sob Consulta / Planejadas (Não simuladas como self-service ativo)

- **Faturamento internacional em USD/CNY e contratos Enterprise customizados:** Disponíveis apenas mediante solicitação comercial (`Request a Demo` / `Contact`), sem checkout self-service em moeda estrangeira nesta fase.
- **API pública direta / Bulk Data Feeds para ERP/CRM global:** Tratado como oferta sob consulta e integração guiada (sem documentação de endpoint público exposta como self-service).
- **Relatórios setoriais customizados de entrada no Brasil (Brazil Market Entry Briefings):** Atendidos de forma consultiva via demonstração e escopo comercial.
- **Interface da plataforma `app.deepson.com.br` em inglês e chinês:** Atualmente a aplicação autenticada opera em `pt-BR`; usuários internacionais são orientados no `/en/login` e `/zh-cn/login` sobre onboarding guiado enquanto a localização do app avança.
