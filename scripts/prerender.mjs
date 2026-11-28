import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = process.cwd();
const DIST_DIR = path.join(ROOT, "dist");
const SSR_DIR = path.join(ROOT, "dist-ssr");
const SSR_ENTRY = path.join(SSR_DIR, "entry-server.js");
const SITE_ORIGIN = "https://deepb2b.ai";

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildSeoHeadHtml(seo) {
  if (!seo) return "";
  const lines = [
    `<title>${escapeHtml(seo.title)}</title>`,
    `<meta name="description" content="${escapeHtml(seo.description)}" />`,
    `<meta name="robots" content="${seo.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large"}" />`,
    `<link rel="canonical" href="${escapeHtml(seo.canonical)}" />`,
    `<meta property="og:title" content="${escapeHtml(seo.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(seo.description)}" />`,
    `<meta property="og:type" content="${escapeHtml(seo.ogType || "website")}" />`,
    `<meta property="og:url" content="${escapeHtml(seo.canonical)}" />`,
    `<meta property="og:image" content="${escapeHtml(seo.ogImage || `${SITE_ORIGIN}/og-image.jpg`)}" />`,
    `<meta property="og:site_name" content="DeepB2B" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(seo.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(seo.description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(seo.ogImage || `${SITE_ORIGIN}/og-image.jpg`)}" />`,
  ];

  for (const alt of seo.alternates || []) {
    lines.push(
      `<link rel="alternate" hreflang="${escapeHtml(alt.hreflang)}" href="${escapeHtml(alt.href)}" />`,
    );
  }

  for (const schema of seo.jsonLd || []) {
    lines.push(
      `<script type="application/ld+json" data-deepb2b-jsonld="true">${JSON.stringify(schema)}</script>`,
    );
  }

  return lines.join("\n    ");
}

function buildSitemapXml(routes, articles, getAlternateLinks) {
  const today = new Date().toISOString().slice(0, 10);
  const urlNodes = routes.map((r) => {
    const loc = `${SITE_ORIGIN}${r.path}`;
    const alts = getAlternateLinks(r.path, articles);
    const altXml = alts
      .map(
        (a) =>
          `    <xhtml:link rel="alternate" hreflang="${escapeHtml(a.hreflang)}" href="${escapeHtml(a.href)}" />`,
      )
      .join("\n");
    const priority =
      r.routeKey === "home"
        ? "1.0"
        : r.routeKey === "tradeShow"
          ? "0.9"
          : r.routeKey === "article"
            ? "0.8"
            : "0.7";
    const lastmod = r.lastmod || today;
    return `  <url>\n    <loc>${escapeHtml(loc)}</loc>\n    <lastmod>${escapeHtml(lastmod)}</lastmod>\n    <changefreq>${r.routeKey === "article" || r.routeKey === "tradeShow" ? "daily" : "weekly"}</changefreq>\n    <priority>${priority}</priority>\n${altXml}\n  </url>`;
  });

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urlNodes,
    "</urlset>",
    "",
  ].join("\n");
}

function buildNewsSitemapXml(routes, articles) {
  const cutoff = Date.now() - 48 * 3600 * 1000;
  const articleMap = new Map(articles.map((a) => [a.slug, a]));
  const items = [];

  for (const r of routes) {
    if (r.routeKey !== "article" || !r.articleSlug) continue;
    const art = articleMap.get(r.articleSlug);
    const content = art?.localized?.[r.locale];
    if (!art || !content) continue;
    const pubMs = new Date(`${content.publishedAt || art.publishedAt}T12:00:00Z`).getTime();
    if (Number.isNaN(pubMs) || pubMs < cutoff) continue;
    const langCode = r.locale === "pt-br" ? "pt" : r.locale === "zh-cn" ? "zh-cn" : r.locale;
    items.push(
      `  <url>\n    <loc>${escapeHtml(`${SITE_ORIGIN}${r.path}`)}</loc>\n    <news:news>\n      <news:publication>\n        <news:name>DeepB2B</news:name>\n        <news:language>${escapeHtml(langCode)}</news:language>\n      </news:publication>\n      <news:publication_date>${escapeHtml(content.publishedAt || art.publishedAt)}</news:publication_date>\n      <news:title>${escapeHtml(content.title)}</news:title>\n    </news:news>\n  </url>`,
    );
  }

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">',
    ...items,
    "</urlset>",
    "",
  ].join("\n");
}

function buildLlmsTxt(editorialData) {
  const lines = [
    "# DeepB2B",
    "",
    "> DeepB2B is a B2B commercial intelligence and Event Intelligence platform operated by Grupo FullWeb, connecting official Brazilian company registry data (Receita Federal / CNAE active establishments) with trade shows, exhibitors, buyers and international market entry.",
    "",
    "## Core Pages",
    `- [Home (EN)](${SITE_ORIGIN}/en): Overview of DeepB2B Event Intelligence and B2B Business Development`,
    `- [Home (PT-BR)](${SITE_ORIGIN}/pt-br): Plataforma de Inteligência de Eventos e Desenvolvimento de Negócios B2B`,
    `- [Feiras e Eventos (PT-BR)](${SITE_ORIGIN}/pt-br/feiras-e-eventos): Editorial hub for Brazilian B2B trade shows and active buyer establishments`,
    `- [Trade Shows & Events (EN)](${SITE_ORIGIN}/en/trade-shows): Editorial hub for Brazilian trade shows in English`,
    `- [Calendário de Feiras 2027 (PT-BR)](${SITE_ORIGIN}/pt-br/feiras): Pillar directory of verified 2027 Brazilian B2B trade shows`,
    `- [2027 Trade Show Calendar (EN)](${SITE_ORIGIN}/en/trade-show-calendar): Directory of verified 2027 Brazilian B2B trade shows`,
    `- [Solutions](${SITE_ORIGIN}/en/solutions): Modular intelligence solutions for Brazilian and international commercial teams`,
    `- [How It Works](${SITE_ORIGIN}/en/how-it-works): Platform capabilities and workflow`,
    `- [Resources / Conteúdos](${SITE_ORIGIN}/pt-br/conteudos): Market intelligence reports and trade show briefings`,
    "",
    "## Verified 2027 Trade Show Profiles",
  ];

  for (const show of editorialData.shows) {
    const sector = show.copy?.["pt-br"]?.sector || show.sectorSlug;
    lines.push(
      `- [${show.name} ${show.editionYear} (PT-BR)](${SITE_ORIGIN}/pt-br/feiras/${show.slug}) | [EN](${SITE_ORIGIN}/en/trade-show-calendar/${show.slug}): ${show.start} to ${show.end} at ${show.venue} (${show.city}/${show.uf}) — ${sector}`,
    );
  }

  lines.push("", "## Published Insights & Trade Show Articles");
  for (const art of editorialData.articles) {
    const pt = art.localized?.["pt-br"];
    const en = art.localized?.en;
    const title = pt?.title || en?.title || art.slug;
    const href = pt
      ? `${SITE_ORIGIN}/pt-br/conteudos/${art.slug}`
      : `${SITE_ORIGIN}/en/resources/${art.slug}`;
    const summary = pt?.summary || en?.summary || "";
    lines.push(`- [${title}](${href}): ${summary}`);
  }

  lines.push("");
  return lines.join("\n");
}

function sliceEditorialForLocale(editorialData, locale) {
  return {
    marketDataEdition: editorialData.marketDataEdition,
    shows: editorialData.shows.map((s) => ({
      ...s,
      copy: { [locale]: s.copy?.[locale] },
      faq: s.faq?.[locale] ? { [locale]: s.faq[locale] } : undefined,
      market: (s.market || []).map((m) => ({
        ...m,
        label: { [locale]: m.label?.[locale] },
      })),
    })),
    articles: editorialData.articles
      .filter((a) => Boolean(a.localized?.[locale]))
      .map((a) => ({
        ...a,
        availableLocales: a.availableLocales || Object.keys(a.localized || {}),
        localized: { [locale]: a.localized[locale] },
      })),
  };
}

async function run() {
  if (!fs.existsSync(SSR_ENTRY)) {
    throw new Error(`SSR bundle not found at ${SSR_ENTRY}`);
  }

  const templatePath = path.join(DIST_DIR, "index.html");
  const template = fs.readFileSync(templatePath, "utf-8");

  const { renderRoute, getAllIndexableRoutes, getAlternateLinks, fetchEditorialPayload } = await import(
    pathToFileURL(SSR_ENTRY).href
  );

  const editorialData = await fetchEditorialPayload();
  if (!editorialData.shows.length && !editorialData.articles.length) {
    throw new Error("Editorial API returned empty dataset during prerender.");
  }

  const indexableRoutes = getAllIndexableRoutes(editorialData.shows, editorialData.articles);
  const routesToRender = [{ path: "/", locale: "en", routeKey: "home" }, ...indexableRoutes];

  const dataScriptByLocale = new Map();
  for (const loc of ["en", "pt-br", "es", "zh-cn"]) {
    const sliced = sliceEditorialForLocale(editorialData, loc);
    const serialized = JSON.stringify(sliced).replace(/</g, "\\u003c");
    dataScriptByLocale.set(loc, `<script id="deepb2b-initial-data" type="application/json">${serialized}</script>`);
  }

  for (const route of routesToRender) {
    const { html, seo } = renderRoute(route.path, editorialData);
    const lang = seo?.lang || "en";
    const seoHead = buildSeoHeadHtml(seo);
    const dataScript = dataScriptByLocale.get(route.locale) || dataScriptByLocale.get("en");

    let pageHtml = template
      .replace(/<html\s+lang="[^"]*"/i, `<html lang="${escapeHtml(lang)}"`)
      .replace("<!--SEO_HEAD-->", seoHead)
      .replace("<!--APP_HTML-->", html)
      .replace("</body>", `    ${dataScript}\n  </body>`);

    if (route.path === "/") {
      fs.writeFileSync(templatePath, pageHtml, "utf-8");
    } else {
      const cleanRel = route.path.replace(/^\/+/, "");
      const outDir = path.join(DIST_DIR, cleanRel);
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, "index.html"), pageHtml, "utf-8");
    }
  }

  const sitemapXml = buildSitemapXml(indexableRoutes, editorialData.articles, getAlternateLinks);
  fs.writeFileSync(path.join(DIST_DIR, "sitemap.xml"), sitemapXml, "utf-8");

  const newsSitemapXml = buildNewsSitemapXml(indexableRoutes, editorialData.articles);
  fs.writeFileSync(path.join(DIST_DIR, "news-sitemap.xml"), newsSitemapXml, "utf-8");

  const llmsTxt = buildLlmsTxt(editorialData);
  fs.writeFileSync(path.join(DIST_DIR, "llms.txt"), llmsTxt, "utf-8");

  fs.rmSync(SSR_DIR, { recursive: true, force: true });
  console.log(
    `Prerendered ${routesToRender.length} routes (${editorialData.shows.length} shows, ${editorialData.articles.length} articles) and generated sitemap.xml, news-sitemap.xml, llms.txt.`,
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
