# Plano de Migração 301, Segurança, Rollback e Manutenção

> **Estado Atual:** Nenhuma alteração foi publicada em produção, DNS ou infraestrutura ativa. Este documento orienta a transição controlada quando houver aprovação explícita.

---

## 1. Continuidade Operacional (Não Alterar Durante a Transição)

Manter **intactos e operacionais** durante toda a transição:
- `https://app.deepson.com.br/` (aplicação autenticada dos clientes ativos)
- `https://chat.deepson.com.br/` (instância Chatwoot de atendimento/SDR)
- `https://seo.deepson.com.br/api/teste-gratis` (API de provisionamento do teste grátis BR)
- Projeto Supabase atual, tabela `chathook_trial_leads` e Edge Function `capture-lead`
- Registros DNS MX / SPF / DKIM / DMARC de e-mail `@deepson.com.br`

---

## 2. Ações Obrigatórias Antes do Go-Live em Produção

1. **Rotação de Segredo (P0 Segurança):**
   - Em `supabase/functions/capture-lead/index.ts`, mover o token da API do Chatwoot para variável de ambiente segura (`Deno.env.get("CHATHOOK_ACCESS_TOKEN")`), configurar via `supabase secrets set` e revogar o token antigo no painel do Chatwoot.
2. **Validação de CORS / Origem em `seo.deepson.com.br/api/teste-gratis`:**
   - Garantir que o servidor aceite requisições originadas de `https://deepb2b.ai` e `https://www.deepb2b.ai` além de `deepson.com.br`.
3. **Configuração de Domínio e Google Search Console:**
   - Adicionar `deepb2b.ai` (com redirect 301 de `www.deepb2b.ai` → `deepb2b.ai`) no projeto Vercel.
   - Submeter `https://deepb2b.ai/sitemap.xml` no Google Search Console e Bing Webmaster Tools.

---

## 3. Mapa de Redirecionamento 301 (`deepson.com.br` / `www.deepson.com.br` → `deepb2b.ai`)

| Origem (`www.deepson.com.br`) | Destino (`https://deepb2b.ai`) | Código |
|---|---|---|
| `/` | `/pt-br/` | `301` / `308` |
| `/teste-gratis` | `/pt-br/acesso` ou `/teste-gratis` (após migrar rota de checkout BR para `deepb2b.ai/teste-gratis`) | `301` |
| `/contato` | `/pt-br/contato` | `301` |
| `/privacidade` | `/pt-br/privacidade` | `301` |
| `/termos-de-uso` | `/pt-br/termos-de-uso` | `301` |
| `/lgpd` | `/pt-br/lgpd` | `301` |
| `/exclusao-de-dados` | `/pt-br/exclusao-de-dados` | `301` |
| `/conversations*`, `/campaigns*`, `/quick-start*`, `/stage*` | `/pt-br/` | `301` |
| `/oferta-especial` | `/pt-br/planos` | `301` |

> **Nota:** `app.deepson.com.br`, `chat.deepson.com.br` e `seo.deepson.com.br` **não** entram em redirect wildcard; apenas o domínio institucional (`deepson.com.br` e `www.deepson.com.br`) redireciona após validação final.

---

## 4. Plano de Rollback

1. **Rollback instantâneo na Vercel:** Reverter para o deployment anterior em *Vercel Dashboard → Deployments → Promote to Production* (< 30 segundos).
2. **Rollback de DNS/301:** Remover regra de redirecionamento `www.deepson.com.br → deepb2b.ai` mantendo ambos os sites servindo em paralelo caso haja queda de conversão em campanhas Google Ads/Meta Ads.
3. **Preservação de leads:** Como o novo site grava na mesma Edge Function `capture-lead` e tabela `chathook_trial_leads`, nenhum lead é perdido em caso de rollback.

---

## 5. Guia de Manutenção do Site Multilíngue

- **Textos por idioma:** `src/i18n/dictionaries/en.ts`, `pt-br.ts`, `zh-cn.ts` (todos validados contra `TranslationDictionary` em `src/i18n/types.ts`).
- **Preços e créditos (fonte única):** Editar exclusivamente `src/data/pricing.ts`.
- **Artigos / Guias SEO:** Adicionar ou atualizar entradas em `src/data/articles.ts`; o `scripts/prerender.mjs` inclui automaticamente todas as rotas e idiomas no build estático e no `dist/sitemap.xml`.
- **Comandos de verificação local:**
  - `npx tsc --noEmit`
  - `npm run build` (gera SPA + SSR bundle + HTML pré-renderizado + `dist/sitemap.xml`)
  - `npm test` (valida SEO tags, `hreflang`, `canonical`, `sitemap.xml`, dicionários e fluxos críticos)
