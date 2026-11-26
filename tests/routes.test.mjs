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

test("fase 1: 3 fichas novas, MEI sinalizado, formulário do comprador, organizador e Organization sem Deepson", () => {
  for (const f of [
    "dist/pt-br/feiras/plastico-brasil/index.html", "dist/en/trade-show-calendar/anuga-select-brazil/index.html",
    "dist/es/ferias/automec/index.html", "dist/zh-cn/trade-show-calendar/automec/index.html",
  ]) assert.ok(fs.existsSync(f), `${f} not prerendered`);
  const page = fs.readFileSync("dist/pt-br/feiras/automec/index.html", "utf-8");
  assert.ok(page.includes('"startDate":"2027-04-20"') && page.includes('"@type":"Event"'));
  assert.ok(page.includes("dos quais") && page.includes("Inclui MEI"), "MEI not flagged");
  assert.ok(page.includes("Vai visitar a Automec? Diga o que procura."), "buyer block missing");
  assert.ok(page.includes("Sou o organizador desta feira"), "organizer link missing");
  assert.ok(!page.includes("expositores confirmados"), "exhibitors block must hide without data");
  assert.ok(!page.includes('"alternateName":"Deepson"'), "Organization still has Deepson");
  assert.ok(page.includes("Event Intelligence & B2B Business Development: plataforma nativa de inteligência artificial"), "Organization description must follow the DNA");
  const cal = fs.readFileSync("dist/pt-br/feiras/index.html", "utf-8");
  for (const slug of ["plastico-brasil", "anuga-select-brazil", "automec", "feicon", "beauty-fair"]) assert.ok(cal.includes(`/pt-br/feiras/${slug}`), slug);
  assert.ok(fs.readFileSync("dist/sitemap.xml", "utf-8").includes("https://deepb2b.ai/en/trade-show-calendar/automec"));
});

test("home institucional: hero mantido, seções novas, páginas novas nos 4 idiomas e sem preço público", () => {
  const home = fs.readFileSync("dist/pt-br/index.html", "utf-8");
  assert.ok(home.includes("Inteligência que conecta mercados e gera negócios."), "hero headline changed");
  for (const t of ["Muito além dos dados. Muito além das conexões.", "Uma feira começa muito antes da abertura dos portões.", "Transformamos inteligência em oportunidades comerciais.", "Negócios crescem quando as conexões certas acontecem.", "Oportunidades de negócios não têm fronteiras."])
    assert.ok(home.includes(t), `home section missing: ${t}`);
  assert.ok(!/R\$\s*12/.test(home), "no public project price on home");
  for (const f of ["dist/pt-br/ecossistema/index.html", "dist/en/deepclub/index.html", "dist/es/proyectos-empresariales/index.html", "dist/zh-cn/partners/index.html", "dist/pt-br/deepclub/index.html"])
    assert.ok(fs.existsSync(f), `${f} not prerendered`);
  const club = fs.readFileSync("dist/pt-br/deepclub/index.html", "utf-8");
  assert.ok(club.includes("Lançamento em breve") && club.includes("Preços em definição."), "DeepClub must not look available");
});

test("DNA: Como funciona, Para quem, visão e 'Intelligence Beyond the Event.' publicados; módulos futuros marcados", () => {
  const p = fs.readFileSync("dist/pt-br/como-funciona/index.html", "utf-8");
  assert.ok(p.includes("Descoberta") && p.includes("Ativação comercial"), "flow missing");
  assert.ok(p.includes("Event Footprint") && p.includes("Em desenvolvimento"), "future modules must be flagged");
  for (const f of ["dist/en/how-it-works/index.html", "dist/es/como-funciona/index.html", "dist/zh-cn/how-it-works/index.html"]) assert.ok(fs.existsSync(f), f);
  const home = fs.readFileSync("dist/pt-br/index.html", "utf-8");
  assert.ok(home.includes("Times comerciais e líderes de receita") && home.includes("Intelligence Beyond the Event."), "home DNA blocks missing");
  assert.ok(fs.readFileSync("dist/pt-br/sobre/index.html", "utf-8").includes("Transformar informação em inteligência"), "vision missing on About");
  assert.ok(fs.readFileSync("dist/pt-br/projetos-empresariais/index.html", "utf-8").includes("Na prática: uma indústria numa feira de máquinas"), "7 steps missing");
  assert.ok(fs.readFileSync("dist/pt-br/deepclub/index.html", "utf-8").includes("Business Opportunities"), "DNA club pillars missing");
});

test("validação final dos 4 idiomas: páginas novas completas, hreflang, sem vazamento de português e hero preservado", () => {
  const pages = {
    en: { lang: "en", paths: ["en", "en/ecosystem", "en/deepclub", "en/business-projects", "en/partners", "en/how-it-works", "en/about", "en/trade-shows"] },
    "pt-br": { lang: "pt-BR", paths: ["pt-br", "pt-br/ecossistema", "pt-br/deepclub", "pt-br/projetos-empresariais", "pt-br/parceiros", "pt-br/como-funciona", "pt-br/sobre", "pt-br/feiras-e-eventos"] },
    es: { lang: "es", paths: ["es", "es/ecosistema", "es/deepclub", "es/proyectos-empresariales", "es/socios", "es/como-funciona", "es/nosotros", "es/ferias-y-eventos"] },
    "zh-cn": { lang: "zh-CN", paths: ["zh-cn", "zh-cn/ecosystem", "zh-cn/deepclub", "zh-cn/business-projects", "zh-cn/partners", "zh-cn/how-it-works", "zh-cn/about", "zh-cn/trade-shows"] },
  };
  // frases que só existem em português: não podem aparecer nas outras versões
  const ptOnly = ["Lançamento em breve", "Solicitar apresentação", "Serviços de Apoio", "Empresas estrangeiras que querem", "Quem faz parte", "Para quem", "Em desenvolvimento"];
  for (const [loc, { lang, paths }] of Object.entries(pages)) {
    for (const p of paths) {
      const f = `dist/${p}/index.html`;
      assert.ok(fs.existsSync(f), `${f} missing`);
      const html = fs.readFileSync(f, "utf-8");
      assert.ok(html.includes(`<html lang="${lang}"`), `${f}: lang`);
      assert.ok(/<title>[^<]{10,}<\/title>/.test(html) && /<h1[^>]*>/.test(html), `${f}: title/h1`);
      for (const h of ["en", "pt-BR", "es", "zh-CN", "x-default"]) assert.ok(html.includes(`hreflang="${h}"`), `${f}: hreflang ${h}`);
      if (loc !== "pt-br") {
        const body = html.slice(html.indexOf("<body"));
        for (const t of ptOnly) assert.ok(!body.includes(t), `${f}: Portuguese text leaked: "${t}"`);
      }
    }
  }
  // Serviços de Apoio e as duas frentes internacionais
  const home = fs.readFileSync("dist/pt-br/index.html", "utf-8");
  assert.ok(home.includes("Serviços de Apoio") && home.includes("hotéis, restaurantes, transportadoras, locadoras"), "support services node");
  assert.ok(home.includes("Empresas estrangeiras que querem entrar no Brasil") && home.includes("Empresas brasileiras que querem expandir para o exterior"), "two international fronts");
  assert.ok(fs.readFileSync("dist/en/index.html", "utf-8").includes("International companies entering Brazil"), "EN fronts");
  // hero preservado
  assert.ok(home.includes("Inteligência que conecta mercados e gera negócios.") && home.includes("Conheça nossas soluções") && home.includes("Solicite uma apresentação"), "hero changed");
});
