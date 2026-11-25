import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const vercel = JSON.parse(fs.readFileSync("vercel.json", "utf-8"));
const routes = fs.readFileSync("src/AppRoutes.tsx", "utf-8");

test("SPA fallback works with cleanUrls (rewrite must not target /index.html)", () => {
  const fallback = vercel.rewrites.find((r) => r.source === "/(.*)");
  assert.ok(fallback, "catch-all rewrite missing");
  if (vercel.cleanUrls) assert.notEqual(fallback.destination, "/index.html");
});

test("404 catch-all is routed", () => {
  assert.match(routes, /path="\*" element={<NotFound \/>}/);
});

test("free trial was removed: old URLs redirect to contact, nothing links to it", () => {
  const map = { "/teste-gratis": "/pt-br/contato", "/en/free-trial": "/en/contact", "/es/prueba-gratis": "/es/contacto", "/zh-cn/free-trial": "/zh-cn/contact" };
  for (const [from, to] of Object.entries(map)) {
    const r = vercel.redirects.find((x) => x.source === from);
    assert.equal(r?.destination, to, from);
  }
  for (const f of ["dist/pt-br/index.html", "dist/en/index.html", "dist/pt-br/solucoes/index.html", "dist/pt-br/acesso/index.html"]) {
    const html = fs.readFileSync(f, "utf-8");
    assert.ok(!html.includes("/teste-gratis") && !/teste grátis/i.test(html), `${f} still mentions the trial`);
  }
});

test("new positioning: home headline and Trade Shows page in all 4 languages", () => {
  const pages = {
    "dist/pt-br/index.html": "Inteligência que conecta mercados e gera negócios.",
    "dist/en/index.html": "Intelligence that connects markets and creates business.",
    "dist/pt-br/feiras-e-eventos/index.html": "Transforme sua participação em feiras em oportunidades de negócios.",
    "dist/en/trade-shows/index.html": "Turn every trade show into real business opportunities.",
    "dist/es/ferias-y-eventos/index.html": "Convierta su participación en ferias en oportunidades de negocio.",
    "dist/zh-cn/trade-shows/index.html": "让每一次参展都转化为真正的商机。",
  };
  for (const [file, text] of Object.entries(pages)) {
    assert.ok(fs.readFileSync(file, "utf-8").includes(text), `${file}: "${text}" not found`);
  }
});

test("trade show calendar and profiles are prerendered with Event schema and market data", () => {
  const page = fs.readFileSync("dist/pt-br/feiras/beauty-fair/index.html", "utf-8");
  assert.ok(page.includes('"@type":"Event"') && page.includes('"startDate":"2027-09-04"'), "Event schema missing");
  assert.ok(page.includes("Beauty Fair 2027"), "h1/title missing");
  assert.ok(page.includes('hreflang="en" href="https://deepb2b.ai/en/trade-show-calendar/beauty-fair"'), "hreflang missing");
  assert.ok(page.includes("9.290"), "market data missing");
  for (const f of ["dist/pt-br/feiras/index.html", "dist/en/trade-show-calendar/feicon/index.html", "dist/es/ferias/hospitalar/index.html", "dist/zh-cn/trade-show-calendar/fispal-tecnologia/index.html"]) {
    assert.ok(fs.existsSync(f), `${f} not prerendered`);
  }
  assert.ok(fs.readFileSync("dist/sitemap.xml", "utf-8").includes("https://deepb2b.ai/pt-br/feiras/feicon"));
});

test("first Insights articles are published in pt-BR and EN only, with matching hreflang", () => {
  const pt = fs.readFileSync("dist/pt-br/conteudos/sao-paulo-business-trade-shows-2027/index.html", "utf-8");
  assert.ok(pt.includes("Feiras de negócios em São Paulo em 2027"));
  assert.ok(pt.includes('hreflang="en" href="https://deepb2b.ai/en/resources/sao-paulo-business-trade-shows-2027"'));
  assert.ok(!pt.includes('hreflang="es"'), "must not point to a Spanish version that doesn't exist");
  assert.ok(fs.existsSync("dist/en/resources/beauty-fair-2027-cosmetics-buyers/index.html"));
  assert.ok(!fs.existsSync("dist/es/recursos/beauty-fair-2027-cosmetics-buyers/index.html"));
  assert.ok(!fs.readFileSync("dist/es/recursos/index.html", "utf-8").includes("beauty-fair-2027-cosmetics-buyers"));
});

test("Feiras e Eventos is a news front page: ticker, latest headlines and buyer-market box", () => {
  const html = fs.readFileSync("dist/pt-br/feiras-e-eventos/index.html", "utf-8");
  assert.ok(html.includes("ticker-track"), "ticker missing");
  assert.ok(html.includes("FEICON 2027 acontece de 6 a 9 de abril no São Paulo Expo"), "verified headline missing");
  assert.ok(html.includes("Mercado comprador") && html.includes("9.290"), "market box missing");
});
