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
