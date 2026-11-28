import type { Locale } from "@/i18n/types";

export const EDITORIAL_API_ORIGIN = "https://app.deepb2b.ai";

export interface MarketCount {
  br: number;
  brMei: number;
  sp: number;
  spMei: number;
}

export interface MarketRow {
  cnae: string;
  q: string;
  label: Record<Locale, string>;
  edition?: string;
  counts?: MarketCount | null;
}

export interface TradeShowCopy {
  sector: string;
  summary: string;
  exhibitors: string;
  buyers: string;
}

export interface TradeShowFaqItem {
  pergunta: string;
  resposta: string;
}

export interface TradeShow {
  slug: string;
  name: string;
  editionYear: number;
  level: "A" | "B" | "C";
  sectorSlug: string;
  start: string;
  end: string;
  venue: string;
  address: string;
  city: string;
  uf: string;
  organizer?: string;
  officialUrl: string;
  sourceUrl: string;
  checkedAt?: string;
  updatedAt?: string;
  exhibitors?: { confirmed: number; verified: number; updatedAt: string };
  copy: Record<Locale, TradeShowCopy>;
  market: MarketRow[];
  faq?: Partial<Record<Locale, TradeShowFaqItem[]>>;
}

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
  imageUrl?: string | null;
  imageAlt?: string | null;
  author: string;
  publishedAt: string;
  updatedAt: string;
}

export interface EditorialArticle {
  slug: string;
  feiraSlug?: string | null;
  editoria: "feiras" | "mercado" | "institucional";
  tipo: string;
  slotDia?: string | null;
  publishedAt: string;
  updatedAt: string;
  featuredReport?: boolean;
  availableLocales?: Locale[];
  localized: Partial<Record<Locale, LocalizedArticleContent>>;
}

export interface EditorialPayload {
  shows: TradeShow[];
  articles: EditorialArticle[];
  marketDataEdition: string;
}

export interface ApiFeiraRecord {
  slug: string;
  nome: string;
  edicao_ano: number;
  nivel: "A" | "B" | "C";
  setor_slug: string;
  data_inicio: string | null;
  data_fim: string | null;
  local_nome: string;
  endereco: string | null;
  cidade: string;
  uf: string;
  organizador: string | null;
  url_oficial: string;
  url_fonte: string;
  conferido_em: string | null;
  publicada: boolean;
  textos: Partial<Record<Locale, Partial<TradeShowCopy>>>;
  mercado_cnaes: Array<{
    cnae: string;
    q: string;
    label: Partial<Record<Locale, string>>;
    edition?: string;
    counts?: MarketCount | null;
  }>;
  faq?: Partial<Record<Locale, TradeShowFaqItem[]>>;
  expositores_meta?: { confirmed: number; verified: number; updatedAt: string } | null;
  atualizado_em?: string;
}

export interface ApiNoticiaRecord {
  slug: string;
  feira_slug: string | null;
  editoria: "feiras" | "mercado" | "institucional";
  tipo: string;
  slot_dia: string | null;
  idioma: Locale;
  categoria: string;
  titulo: string;
  meta_titulo: string;
  resumo: string;
  meta_descricao: string;
  imagem_url: string | null;
  imagem_alt: string | null;
  autor: string;
  tempo_leitura_min: number;
  secoes: EditorialSection[];
  fontes: string[];
  destaque: boolean;
  publicado_em: string | null;
  criado_em: string;
  atualizado_em: string;
}

const LOCALES: readonly Locale[] = ["pt-br", "en", "es", "zh-cn"];

function normalizeCopy(raw: Partial<Record<Locale, Partial<TradeShowCopy>>> | undefined): Record<Locale, TradeShowCopy> {
  const fallback = raw?.["pt-br"] ?? raw?.en ?? raw?.es ?? raw?.["zh-cn"] ?? {};
  const fillCopy = (c?: Partial<TradeShowCopy>): TradeShowCopy => ({
    sector: c?.sector || fallback.sector || "",
    summary: c?.summary || fallback.summary || "",
    exhibitors: c?.exhibitors || fallback.exhibitors || "",
    buyers: c?.buyers || fallback.buyers || "",
  });
  return {
    "pt-br": fillCopy(raw?.["pt-br"]),
    en: fillCopy(raw?.en),
    es: fillCopy(raw?.es),
    "zh-cn": fillCopy(raw?.["zh-cn"]),
  };
}

function normalizeLabel(raw: Partial<Record<Locale, string>> | undefined): Record<Locale, string> {
  const fallback = raw?.["pt-br"] ?? raw?.en ?? raw?.es ?? raw?.["zh-cn"] ?? "";
  return {
    "pt-br": raw?.["pt-br"] || fallback,
    en: raw?.en || fallback,
    es: raw?.es || fallback,
    "zh-cn": raw?.["zh-cn"] || fallback,
  };
}

export function mapApiFeiraToTradeShow(f: ApiFeiraRecord): TradeShow {
  return {
    slug: f.slug,
    name: f.nome,
    editionYear: f.edicao_ano || 2027,
    level: f.nivel || "C",
    sectorSlug: f.setor_slug || "geral",
    start: f.data_inicio ?? "",
    end: f.data_fim ?? "",
    venue: f.local_nome,
    address: f.endereco ?? "",
    city: f.cidade,
    uf: f.uf,
    organizer: f.organizador ?? undefined,
    officialUrl: f.url_oficial,
    sourceUrl: f.url_fonte,
    checkedAt: f.conferido_em ?? undefined,
    updatedAt: f.atualizado_em?.slice(0, 10),
    exhibitors: f.expositores_meta ?? undefined,
    copy: normalizeCopy(f.textos),
    market: (f.mercado_cnaes || []).map((m) => ({
      cnae: m.cnae,
      q: m.q,
      label: normalizeLabel(m.label),
      edition: m.edition,
      counts: m.counts ?? null,
    })),
    faq: f.faq,
  };
}

function toIsoDate(isoOrNull: string | null | undefined, fallback: string): string {
  const s = isoOrNull || fallback;
  return s ? s.slice(0, 10) : new Date().toISOString().slice(0, 10);
}

export function mapApiNoticiasToArticles(rows: ApiNoticiaRecord[]): EditorialArticle[] {
  const bySlug = new Map<string, EditorialArticle>();

  for (const r of rows) {
    const pubDate = toIsoDate(r.publicado_em, r.criado_em);
    const updDate = toIsoDate(r.atualizado_em, pubDate);
    let art = bySlug.get(r.slug);
    if (!art) {
      art = {
        slug: r.slug,
        feiraSlug: r.feira_slug,
        editoria: r.editoria,
        tipo: r.tipo,
        slotDia: r.slot_dia,
        publishedAt: pubDate,
        updatedAt: updDate,
        featuredReport: r.destaque,
        localized: {},
      };
      bySlug.set(r.slug, art);
    } else {
      if (r.destaque) art.featuredReport = true;
      if (updDate > art.updatedAt) art.updatedAt = updDate;
      if (pubDate < art.publishedAt) art.publishedAt = pubDate;
    }

    if (LOCALES.includes(r.idioma)) {
      art.localized[r.idioma] = {
        title: r.titulo,
        metaTitle: r.meta_titulo,
        metaDescription: r.meta_descricao,
        category: r.categoria,
        summary: r.resumo,
        readingMinutes: r.tempo_leitura_min || 4,
        sections: Array.isArray(r.secoes) ? r.secoes : [],
        sources: Array.isArray(r.fontes) ? r.fontes : [],
        imageUrl: r.imagem_url,
        imageAlt: r.imagem_alt,
        author: r.autor || "DeepB2B",
        publishedAt: pubDate,
        updatedAt: updDate,
      };
    }
  }

  for (const art of bySlug.values()) {
    art.availableLocales = Object.keys(art.localized) as Locale[];
  }
  return [...bySlug.values()].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function extractMarketEdition(shows: TradeShow[]): string {
  for (const s of shows) {
    for (const m of s.market) {
      if (m.edition) return m.edition;
    }
  }
  return "2026-10";
}

export function articlesFor(
  articles: readonly EditorialArticle[],
  locale: Locale,
  opts?: { editoria?: EditorialArticle["editoria"] },
): { article: EditorialArticle; content: LocalizedArticleContent }[] {
  return articles
    .filter((a) => (!opts?.editoria || a.editoria === opts.editoria) && Boolean(a.localized[locale]))
    .map((a) => ({
      article: a,
      content: a.localized[locale] as LocalizedArticleContent,
    }));
}

export function getArticleBySlug(articles: readonly EditorialArticle[], slug: string): EditorialArticle | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getTradeShowBySlug(shows: readonly TradeShow[], slug: string): TradeShow | undefined {
  return shows.find((t) => t.slug === slug);
}

export async function fetchEditorialPayload(signal?: AbortSignal): Promise<EditorialPayload> {
  const [feirasRes, noticiasRes] = await Promise.all([
    fetch(`${EDITORIAL_API_ORIGIN}/api/site/feiras`, { signal }),
    fetch(`${EDITORIAL_API_ORIGIN}/api/site/noticias?incluir_conteudo=true&por_pagina=500`, { signal }),
  ]);

  if (!feirasRes.ok) {
    throw new Error(`Falha ao carregar feiras (${feirasRes.status})`);
  }
  if (!noticiasRes.ok) {
    throw new Error(`Falha ao carregar notícias (${noticiasRes.status})`);
  }

  const feirasJson = (await feirasRes.json()) as { itens?: ApiFeiraRecord[] };
  const noticiasJson = (await noticiasRes.json()) as { itens?: ApiNoticiaRecord[] };

  const shows = (feirasJson.itens ?? []).map(mapApiFeiraToTradeShow);
  const articles = mapApiNoticiasToArticles(noticiasJson.itens ?? []);
  const marketDataEdition = extractMarketEdition(shows);

  return { shows, articles, marketDataEdition };
}

export async function fetchSingleArticle(slug: string, locale: Locale): Promise<EditorialArticle | null> {
  const res = await fetch(
    `${EDITORIAL_API_ORIGIN}/api/site/noticias/${encodeURIComponent(slug)}?idioma=${encodeURIComponent(locale)}`,
  );
  if (!res.ok) return null;
  const data = (await res.json()) as { noticia?: ApiNoticiaRecord; idiomas_disponiveis?: Locale[] };
  if (!data.noticia) return null;
  const [mapped] = mapApiNoticiasToArticles([data.noticia]);
  if (!mapped) return null;
  for (const lang of data.idiomas_disponiveis ?? []) {
    if (!mapped.localized[lang] && mapped.localized[data.noticia.idioma]) {
      // Marca idioma como disponível para manter hreflang consistente
      mapped.localized[lang] = mapped.localized[data.noticia.idioma];
    }
  }
  return mapped;
}

export async function fetchSingleTradeShow(slug: string): Promise<TradeShow | null> {
  const res = await fetch(`${EDITORIAL_API_ORIGIN}/api/site/feiras/${encodeURIComponent(slug)}`);
  if (!res.ok) return null;
  const data = (await res.json()) as { feira?: ApiFeiraRecord };
  return data.feira ? mapApiFeiraToTradeShow(data.feira) : null;
}
