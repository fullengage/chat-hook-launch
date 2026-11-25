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

test("/teste-gratis and the 404 catch-all are routed", () => {
  assert.match(fs.readFileSync("src/i18n/routes.ts", "utf-8"), /freeTrial: "\/teste-gratis"/);
  assert.match(routes, /path=\{paths\.freeTrial\}/);
  assert.match(routes, /path="\*" element={<NotFound \/>}/);
});

test("free trial page is prerendered and translated in all 4 languages", () => {
  const pages = {
    "dist/teste-gratis/index.html": ["Teste grátis de 7 dias", 'lang="pt-BR"'],
    "dist/en/free-trial/index.html": ["Free 7-Day Trial", "Start free trial, no card"],
    "dist/es/prueba-gratis/index.html": ["Prueba gratis de 7 días", "Empezar prueba gratis sin tarjeta"],
    "dist/zh-cn/free-trial/index.html": ["免费试用 7 天", "免费试用，无需信用卡"],
  };
  for (const [file, needles] of Object.entries(pages)) {
    assert.ok(fs.existsSync(file), `${file} missing (run npm run build)`);
    const html = fs.readFileSync(file, "utf-8");
    for (const n of needles) assert.ok(html.includes(n), `${file}: "${n}" not found`);
    assert.ok(html.includes('hreflang="en" href="https://deepb2b.ai/en/free-trial"'), `${file}: hreflang missing`);
  }
});
