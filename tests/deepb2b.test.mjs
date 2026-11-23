import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const DIST = path.join(ROOT, "dist");

const EXPECTED_LOCALE_PATHS = [
  { rel: "index.html", expectedLang: "en", expectedCanonical: "https://deepb2b.ai/en" },
  { rel: "en/index.html", expectedLang: "en", expectedCanonical: "https://deepb2b.ai/en" },
  { rel: "pt-br/index.html", expectedLang: "pt-BR", expectedCanonical: "https://deepb2b.ai/pt-br" },
  { rel: "es/index.html", expectedLang: "es", expectedCanonical: "https://deepb2b.ai/es" },
  { rel: "zh-cn/index.html", expectedLang: "zh-CN", expectedCanonical: "https://deepb2b.ai/zh-cn" },
  { rel: "en/business-data/index.html", expectedLang: "en", expectedCanonical: "https://deepb2b.ai/en/business-data" },
  { rel: "pt-br/dados-empresariais/index.html", expectedLang: "pt-BR", expectedCanonical: "https://deepb2b.ai/pt-br/dados-empresariais" },
  { rel: "es/datos-empresariales/index.html", expectedLang: "es", expectedCanonical: "https://deepb2b.ai/es/datos-empresariales" },
  { rel: "zh-cn/business-data/index.html", expectedLang: "zh-CN", expectedCanonical: "https://deepb2b.ai/zh-cn/business-data" },
  { rel: "en/solutions/index.html", expectedLang: "en", expectedCanonical: "https://deepb2b.ai/en/solutions" },
  { rel: "pt-br/solucoes/index.html", expectedLang: "pt-BR", expectedCanonical: "https://deepb2b.ai/pt-br/solucoes" },
  { rel: "es/soluciones/index.html", expectedLang: "es", expectedCanonical: "https://deepb2b.ai/es/soluciones" },
  { rel: "zh-cn/solutions/index.html", expectedLang: "zh-CN", expectedCanonical: "https://deepb2b.ai/zh-cn/solutions" },
  { rel: "en/brazil-market-entry/index.html", expectedLang: "en", expectedCanonical: "https://deepb2b.ai/en/brazil-market-entry" },
  { rel: "pt-br/entrada-no-mercado-brasileiro/index.html", expectedLang: "pt-BR", expectedCanonical: "https://deepb2b.ai/pt-br/entrada-no-mercado-brasileiro" },
  { rel: "es/entrada-al-mercado-brasileno/index.html", expectedLang: "es", expectedCanonical: "https://deepb2b.ai/es/entrada-al-mercado-brasileno" },
  { rel: "zh-cn/brazil-market-entry/index.html", expectedLang: "zh-CN", expectedCanonical: "https://deepb2b.ai/zh-cn/brazil-market-entry" },
  { rel: "en/resources/brazil-industrial-machinery-distribution-report-2026/index.html", expectedLang: "en", expectedCanonical: "https://deepb2b.ai/en/resources/brazil-industrial-machinery-distribution-report-2026" },
  { rel: "pt-br/conteudos/brazil-industrial-machinery-distribution-report-2026/index.html", expectedLang: "pt-BR", expectedCanonical: "https://deepb2b.ai/pt-br/conteudos/brazil-industrial-machinery-distribution-report-2026" },
  { rel: "es/recursos/brazil-industrial-machinery-distribution-report-2026/index.html", expectedLang: "es", expectedCanonical: "https://deepb2b.ai/es/recursos/brazil-industrial-machinery-distribution-report-2026" },
  { rel: "zh-cn/resources/brazil-industrial-machinery-distribution-report-2026/index.html", expectedLang: "zh-CN", expectedCanonical: "https://deepb2b.ai/zh-cn/resources/brazil-industrial-machinery-distribution-report-2026" },
];

function walkHtmlFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...walkHtmlFiles(full));
    } else if (entry.name.endsWith(".html")) {
      out.push(full);
    }
  }
  return out;
}

test("Prerendered HTML files exist for EN, PT-BR, ES, ZH-CN with valid lang, canonical, 5 hreflangs, H1 and JSON-LD", () => {
  for (const item of EXPECTED_LOCALE_PATHS) {
    const filePath = path.join(DIST, item.rel);
    assert.ok(fs.existsSync(filePath), `Missing prerendered file: ${item.rel}`);

    const html = fs.readFileSync(filePath, "utf-8");

    assert.match(
      html,
      new RegExp(`<html\\s+lang="${item.expectedLang}"`, "i"),
      `${item.rel} must have lang="${item.expectedLang}"`,
    );

    assert.ok(
      html.includes(`<link rel="canonical" href="${item.expectedCanonical}"`),
      `${item.rel} missing canonical ${item.expectedCanonical}`,
    );

    assert.ok(html.includes('hreflang="en"'), `${item.rel} missing hreflang="en"`);
    assert.ok(html.includes('hreflang="pt-BR"'), `${item.rel} missing hreflang="pt-BR"`);
    assert.ok(html.includes('hreflang="es"'), `${item.rel} missing hreflang="es"`);
    assert.ok(html.includes('hreflang="zh-CN"'), `${item.rel} missing hreflang="zh-CN"`);
    assert.ok(html.includes('hreflang="x-default"'), `${item.rel} missing hreflang="x-default"`);

    const h1Matches = html.match(/<h1[\s>]/gi) || [];
    assert.equal(h1Matches.length, 1, `${item.rel} must have exactly 1 <h1>, found ${h1Matches.length}`);

    assert.ok(!html.includes("<!--APP_HTML-->"), `${item.rel} still has unreplaced APP_HTML placeholder`);
    assert.ok(!html.includes("<!--SEO_HEAD-->"), `${item.rel} still has unreplaced SEO_HEAD placeholder`);

    const ldMatches = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
    assert.ok(ldMatches.length >= 1, `${item.rel} missing JSON-LD structured data`);
    for (const m of ldMatches) {
      assert.doesNotThrow(() => JSON.parse(m[1]), `${item.rel} has invalid JSON-LD`);
    }
  }
});

test("Spanish and Chinese prerendered pages contain authentic localized content and @deepb2b.ai branding", () => {
  const esHome = fs.readFileSync(path.join(DIST, "es/index.html"), "utf-8");
  assert.ok(esHome.includes("Comprenda Brasil"), "es home must contain Spanish headline");
  assert.ok(esHome.includes("contact@deepb2b.ai"), "es footer must use contact@deepb2b.ai");

  const esSolutions = fs.readFileSync(path.join(DIST, "es/soluciones/index.html"), "utf-8");
  assert.ok(esSolutions.includes("Business Data") && esSolutions.includes("Enterprise Solutions"));

  const zhHome = fs.readFileSync(path.join(DIST, "zh-cn/index.html"), "utf-8");
  assert.ok(zhHome.includes("巴西企业数据与商业情报平台"), "zh-cn home must contain Chinese positioning text");
  assert.ok(/[\u4e00-\u9fff]{10,}/.test(zhHome), "zh-cn home must render Chinese characters");
});

test("Zero public pricing, extra credit values, or lead-cost calculator appear in prerendered site or /teste-gratis", () => {
  const forbiddenPricePatterns = [
    /R\$\s*497/,
    /R\$\s*997/,
    /R\$\s*1\.?997/,
    /0,90\s*\/\s*cr[eé]dito/i,
    /0,80\s*\/\s*cr[eé]dito/i,
    /0,70\s*\/\s*cr[eé]dito/i,
    /deepb2b-sim-cpl/,
  ];

  // Scan all prerendered DeepB2B HTML pages (exclude untouched nexlead-premium static archive)
  const htmlFiles = walkHtmlFiles(DIST).filter(
    (f) => !f.includes(`${path.sep}nexlead-premium${path.sep}`),
  );
  assert.ok(htmlFiles.length >= 60, `Expected >= 60 prerendered HTML files, got ${htmlFiles.length}`);

  for (const file of htmlFiles) {
    const html = fs.readFileSync(file, "utf-8");
    for (const pattern of forbiddenPricePatterns) {
      assert.ok(!pattern.test(html), `Forbidden public pricing match ${pattern} found in ${file}`);
    }
  }

  const freeTrialSrc = fs.readFileSync(path.join(ROOT, "src/pages/FreeTrialPage.tsx"), "utf-8");
  assert.ok(!freeTrialSrc.includes("PlansSection"), "FreeTrialPage must not render PlansSection");
  for (const pattern of forbiddenPricePatterns) {
    assert.ok(!pattern.test(freeTrialSrc), `Forbidden pricing pattern ${pattern} in FreeTrialPage.tsx`);
  }
});

test("Multilingual sitemap.xml covers EN, PT-BR, ES, ZH-CN and excludes pricing & private routes", () => {
  const sitemapPath = path.join(DIST, "sitemap.xml");
  assert.ok(fs.existsSync(sitemapPath), "dist/sitemap.xml must exist");
  const xml = fs.readFileSync(sitemapPath, "utf-8");

  assert.ok(xml.startsWith('<?xml version="1.0" encoding="UTF-8"?>'));
  assert.ok(xml.includes('xmlns:xhtml="http://www.w3.org/1999/xhtml"'));
  assert.ok(xml.includes("<loc>https://deepb2b.ai/en</loc>"));
  assert.ok(xml.includes("<loc>https://deepb2b.ai/pt-br</loc>"));
  assert.ok(xml.includes("<loc>https://deepb2b.ai/es</loc>"));
  assert.ok(xml.includes("<loc>https://deepb2b.ai/zh-cn</loc>"));
  assert.ok(xml.includes("<loc>https://deepb2b.ai/es/soluciones</loc>"));
  assert.ok(xml.includes('hreflang="es"'));
  assert.ok(xml.includes('hreflang="x-default"'));
  assert.ok(!xml.includes("/en/pricing"), "sitemap must not include removed /en/pricing");
  assert.ok(!xml.includes("/pt-br/planos"), "sitemap must not include removed /pt-br/planos");
  assert.ok(!xml.includes("/blog/dashboard"), "sitemap must not include private dashboard");
  assert.ok(!xml.includes("/webhooks"), "sitemap must not include webhook settings");
  assert.ok(!xml.includes("/auth"), "sitemap must not include auth route");
});

test("robots.txt points to deepb2b.ai sitemap and disallows internal/legacy paths", () => {
  const robotsPath = path.join(DIST, "robots.txt");
  assert.ok(fs.existsSync(robotsPath), "dist/robots.txt must exist");
  const txt = fs.readFileSync(robotsPath, "utf-8");
  assert.ok(txt.includes("Sitemap: https://deepb2b.ai/sitemap.xml"));
  assert.ok(txt.includes("Disallow: /auth"));
  assert.ok(txt.includes("Disallow: /blog/dashboard"));
});

test("Consent-gated analytics: index.html does not unconditionally inject GTM or Meta Pixel", () => {
  const srcIndex = fs.readFileSync(path.join(ROOT, "index.html"), "utf-8");
  assert.ok(!srcIndex.includes("googletagmanager.com/gtm.js"), "GTM must be loaded conditionally via analytics.ts");
  assert.ok(!srcIndex.includes("connect.facebook.net/en_US/fbevents.js"), "Meta Pixel must be loaded conditionally via analytics.ts");
});

test("Legacy Brazilian conversion flows and Supabase integrations remain intact", () => {
  const trialForm = fs.readFileSync(path.join(ROOT, "src/components/TrialForm.tsx"), "utf-8");
  assert.ok(trialForm.includes("https://app.deepson.com.br/api/teste-gratis"));
  assert.ok(trialForm.includes("/functions/v1/capture-lead"));

  const appRoutes = fs.readFileSync(path.join(ROOT, "src/AppRoutes.tsx"), "utf-8");
  assert.ok(appRoutes.includes('path="/teste-gratis"'));
  assert.ok(appRoutes.includes('path="/obrigado"'));
});

test("DeepB2B pages contain zero ChatHook brand leaks", () => {
  const deepb2bDir = path.join(ROOT, "src/pages/deepb2b");
  const files = fs.readdirSync(deepb2bDir);
  for (const file of files) {
    const content = fs.readFileSync(path.join(deepb2bDir, file), "utf-8");
    assert.ok(!/chathook/i.test(content), `${file} must not reference ChatHook`);
  }
});
