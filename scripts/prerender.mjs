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
    `<meta name="robots" content="${seo.noindex ? "noindex, nofollow" : "index, follow"}" />`,
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

function buildSitemapXml(routes, getAlternateLinks) {
  const today = new Date().toISOString().slice(0, 10);
  const urlNodes = routes.map((r) => {
    const loc = `${SITE_ORIGIN}${r.path}`;
    const alts = getAlternateLinks(r.path);
    const altXml = alts
      .map(
        (a) =>
          `    <xhtml:link rel="alternate" hreflang="${escapeHtml(a.hreflang)}" href="${escapeHtml(a.href)}" />`,
      )
      .join("\n");
    const priority = r.routeKey === "home" ? "1.0" : r.routeKey === "article" ? "0.8" : "0.7";
    return `  <url>\n    <loc>${escapeHtml(loc)}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n${altXml}\n  </url>`;
  });

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urlNodes,
    "</urlset>",
    "",
  ].join("\n");
}

async function run() {
  if (!fs.existsSync(SSR_ENTRY)) {
    throw new Error(`SSR bundle not found at ${SSR_ENTRY}`);
  }

  const templatePath = path.join(DIST_DIR, "index.html");
  const template = fs.readFileSync(templatePath, "utf-8");

  const { renderRoute, getAllIndexableRoutes, getAlternateLinks } = await import(
    pathToFileURL(SSR_ENTRY).href
  );

  const indexableRoutes = getAllIndexableRoutes();
  const routesToRender = [{ path: "/", locale: "en", routeKey: "home" }, ...indexableRoutes];

  for (const route of routesToRender) {
    const { html, seo } = renderRoute(route.path);
    const lang = seo?.lang || "en";
    const seoHead = buildSeoHeadHtml(seo);

    let pageHtml = template
      .replace(/<html\s+lang="[^"]*"/i, `<html lang="${escapeHtml(lang)}"`)
      .replace("<!--SEO_HEAD-->", seoHead)
      .replace("<!--APP_HTML-->", html);

    if (route.path === "/") {
      fs.writeFileSync(templatePath, pageHtml, "utf-8");
    } else {
      const cleanRel = route.path.replace(/^\/+/, "");
      const outDir = path.join(DIST_DIR, cleanRel);
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, "index.html"), pageHtml, "utf-8");
    }
  }

  const sitemapXml = buildSitemapXml(indexableRoutes, getAlternateLinks);
  fs.writeFileSync(path.join(DIST_DIR, "sitemap.xml"), sitemapXml, "utf-8");

  fs.rmSync(SSR_DIR, { recursive: true, force: true });
  console.log(`Prerendered ${routesToRender.length} routes and generated dist/sitemap.xml.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
