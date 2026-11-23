# Plano de Execução Internacional P0 / P1 / P2 — DeepB2B

**Data:** 23/11/2026  
**Origem:** Auditoria Estratégica de 23/11/2026 + Verificação Técnica ao Vivo em `https://deepb2b.ai/`

---

## 1. Diagnóstico Técnico Confirmado ao Vivo (23/11/2026)

| Verificação | Resultado Observado |
|---|---|
| `https://deepb2b.ai/` | HTTP `200`, HTML pré-renderizado (`54.871` bytes), `lang="en"`, `canonical=https://deepb2b.ai/en`, `4` `hreflang`s |
| `https://deepb2b.ai/en/pricing` | HTTP `200`, HTML pré-renderizado (`38.540` bytes), `canonical=https://deepb2b.ai/en/pricing` |
| `https://deepb2b.ai/pt-br` | HTTP `200`, HTML pré-renderizado (`54.404` bytes), `lang="pt-BR"`, `canonical=https://deepb2b.ai/pt-br` |
| `https://deepb2b.ai/zh-cn` | HTTP `200`, HTML pré-renderizado (`48.928` bytes), `lang="zh-CN"`, `canonical=https://deepb2b.ai/zh-cn` |
| `https://deepb2b.ai/sitemap.xml` | HTTP `200` (`37.110` bytes), `252` tags `xhtml:link hreflang` bidirecionais |
| `https://deepb2b.ai/robots.txt` | HTTP `200`, `Allow: /`, `Sitemap: https://deepb2b.ai/sitemap.xml` |
| DNS MX / SPF (`deepb2b.ai`) | MX ativo (`route1/2/3.mx.cloudflare.net`) + SPF (`_spf.mx.cloudflare.net`) |

> **Conclusão técnica:** A base técnica de SEO (HTML pré-renderizado, `canonical`, `hreflang`, `x-default`, `sitemap.xml`) já está operacional no ar. A ausência de resultados no Google decorre de domínio recém-publicado (pendente verificação/submissão no Google Search Console e publicação de conteúdo editorial aprofundado).

---

## 2. Alerta Jurídico de Marca (Ação Externa Obrigatória)

- **Achado da auditoria:** Existência de plataforma homônima **DeepB2B** ligada à empresa **GoDeep** (e-commerce B2B, publicações de 2024–2025).
- **Ação P0 (Jurídico / Sócios):**
  1. Consultar disponibilidade e colidência no **INPI (Brasil)** na Classe 42 (SaaS/tecnologia) e Classe 35 (inteligência comercial/dados).
  2. Avaliar risco de conflito nos mercados-alvo prioritários (EUA/USPTO, UE/EUIPO, China/CNIPA) antes de investir em campanhas de marca ou registro de marca nominativa/mista.
  3. Enquanto isso, manter explicação transparente da operadora legal (`DEEPSON - INTELIGENCIA DE DADOS E TECNOLOGIA LTDA`, CNPJ `19.904.935/0001-20`) no rodapé e termos.

---

## 3. Backlog Priorizado (P0 / P1 / P2) & Critérios de Aceite

### P0 — Execução Imediata (Sem Inventar Funcionalidades)

| ID | Ação | Critério de Aceite | Status |
|---|---|---|---|
| **P0-1** | **Alinhar marca e e-mail `@deepb2b.ai`** (`contact@deepb2b.ai` / `contato@deepb2b.ai` / `privacy@deepb2b.ai`) mantendo explicação clara da operadora Deepson e `app.deepson.com.br` | Rodapé, Schema.org, formulários e páginas legais usam `@deepb2b.ai`; Cloudflare Email Routing configurado para encaminhar para caixa real da equipe | Código atualizado; validar regra de forwarding no Cloudflare |
| **P0-2** | **Demonstração Pública *Brazil Opportunity Intelligence* (sem exigir CNPJ)** | Visitante estrangeiro seleciona país de origem (ex.: Alemanha, China, EUA, Itália) + setor-alvo (ex.: Máquinas Industriais) e vê fluxo concreto: Setores compradores (CNAE) → Distribuidores potenciais (Divisão 46 CNAE) → Polos regionais → Separação explícita entre o que já roda em `app.deepson.com.br` e camadas conceituais/consultivas | Implementado em `BrazilOpportunityDemo.tsx` |
| **P0-3** | **Publicar o 1º Relatório Setorial com Fontes e Datas** | Relatório *Brazil Industrial Machinery & Equipment Distribution (2026)* publicado em EN, PT-BR e ZH-CN com data, fontes oficiais (IBGE/CONCLA, Receita Federal, MDIC/Comex Stat, PGFN), diferenciação CNAE e limitações reais | Implementado em `src/data/articles.ts` |
| **P0-4** | **Submeter `sitemap.xml` no Google Search Console & Bing Webmaster** | Propriedade `deepb2b.ai` verificada via DNS TXT e `https://deepb2b.ai/sitemap.xml` submetido sem erros | Ação operacional externa |
| **P0-5** | **Pesquisa de anterioridade de marca (INPI / USPTO / EUIPO)** | Parecer de propriedade intelectual documentado antes de ampliar verba de marca | Ação jurídica externa |

### P1 — Conversão Internacional & Posicionamento

| ID | Ação | Critério de Aceite | Status |
|---|---|---|---|
| **P1-1** | **Pricing Internacional Enterprise-First (`/en/pricing` e `/zh-cn/pricing`)** | Em EN/ZH-CN, o bloco **Global Enterprise & Brazil Opportunity Intelligence** (com 3 casos de uso internacionais concretos) aparece no topo antes da grade doméstica em BRL (`Local CNPJ Required`) | Implementado em `PricingView.tsx` |
| **P1-2** | **Revisar calculadora de preços** | Título, labels e nota metodológica deixam explícito que compara **custo de descoberta e enriquecimento de contas-alvo (outbound)** vs. mídia paga, afirmando claramente que *conta identificada não é equivalente a lead inbound qualificado* | Implementado em `PricingView.tsx` |
| **P1-3** | **Qualificação de leads internacionais no formulário** | Formulário `/contact` aceita pré-preenchimento por URL (`?country=...&sector=...&stage=...`), captura **Target Sector** e **Market Entry Stage**, e envia contexto completo ao fluxo de leads existente | Implementado em `DemoRequestForm.tsx` e `leadService.ts` |

### P2 — Evolução de Produto (Roadmap — Não Anunciar como Pronto Antes de Entregar)

| ID | Evolução Planejada | Regra de Comunicação |
|---|---|---|
| **P2-1** | Interface autenticada em EN e ZH-CN dentro de `app.deepson.com.br` | Informar hoje que o workspace autenticado opera em `pt-BR` com onboarding guiado para equipes globais |
| **P2-2** | Faturamento self-service em USD/EUR/CNY sem CNPJ brasileiro | Disponível apenas sob proposta Enterprise / invoice internacional |
| **P2-3** | Integração automatizada de séries de importação (Comex Stat NCM) e calendário de feiras industriais | Rotular no site exclusivamente como *Conceptual / Consultative Preview* até existir integração real em produção |
