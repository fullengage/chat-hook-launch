#!/usr/bin/env node
/**
 * Atualiza `mercado_cnaes` na tabela `site_feiras` (PostgreSQL `deepson` na VPS) a partir da base
 * pública da Receita Federal processada na VPS (busca-AAAA-MM.db: só estabelecimentos ativos, com marcação de MEI).
 *
 * Uso: node scripts/market-counts.mjs [edição]      ex.: node scripts/market-counts.mjs 2026-10
 */
import { execFileSync } from "node:child_process";

const edition = process.argv[2] || "2026-10";

const readSql = "SELECT slug, mercado_cnaes::text FROM site_feiras WHERE jsonb_array_length(mercado_cnaes) > 0;";
const feirasRaw = execFileSync(
  "ssh",
  [
    "-o",
    "BatchMode=yes",
    "chathook-vps",
    `PG=$(docker ps -qf name=postgree_postgres | head -n1); docker exec "$PG" psql -U postgres -d deepson -t -A -F $'\\t' -c ${JSON.stringify(readSql)}`,
  ],
  { encoding: "utf-8" },
);

const feiras = feirasRaw
  .trim()
  .split(/\r?\n/)
  .filter(Boolean)
  .map((line) => {
    const [slug, jsonStr] = line.split("\t");
    return { slug, cnaes: JSON.parse(jsonStr) };
  });

const codes = [...new Set(feiras.flatMap((f) => f.cnaes.map((c) => c.q).filter(Boolean)))];
if (!codes.length) {
  console.log("Nenhum código CNAE encontrado em site_feiras.");
  process.exit(0);
}

const py = `
import sqlite3, json
codes = json.loads(${JSON.stringify(JSON.stringify(codes))})
c = sqlite3.connect("file:/root/openseo-data/busca/busca-${edition}.db?mode=ro", uri=True)
def rng(p): return p, p[:-1] + chr(ord(p[-1]) + 1)
out = {}
for p in codes:
    lo, hi = rng(p)
    br = c.execute("select count(*), coalesce(sum(mei),0) from b where cnae>=? and cnae<? and sec=0", (lo, hi)).fetchone()
    sp = c.execute("select count(*), coalesce(sum(mei),0) from b where cnae>=? and cnae<? and sec=0 and uf='SP'", (lo, hi)).fetchone()
    out[p] = {"br": br[0], "brMei": br[1], "sp": sp[0], "spMei": sp[1]}
print(json.dumps(out))
`;

const countsRaw = execFileSync("ssh", ["-o", "BatchMode=yes", "chathook-vps", "python3", "-"], {
  input: py,
  encoding: "utf-8",
});
const counts = JSON.parse(countsRaw);

const updates = feiras.map((f) => {
  const nextCnaes = f.cnaes.map((c) => ({
    ...c,
    edition,
    counts: counts[c.q] ?? c.counts ?? null,
  }));
  const jsonEscaped = JSON.stringify(nextCnaes).replace(/'/g, "''");
  const slugEscaped = f.slug.replace(/'/g, "''");
  return `UPDATE site_feiras SET mercado_cnaes = '${jsonEscaped}'::jsonb, atualizado_em = now() WHERE slug = '${slugEscaped}';`;
});

const sqlScript = `BEGIN;\n${updates.join("\n")}\nCOMMIT;\n`;
execFileSync(
  "ssh",
  [
    "-o",
    "BatchMode=yes",
    "chathook-vps",
    `PG=$(docker ps -qf name=postgree_postgres | head -n1); docker exec -i "$PG" psql -U postgres -d deepson -v ON_ERROR_STOP=1`,
  ],
  { input: sqlScript, encoding: "utf-8" },
);

console.log(`site_feiras atualizado: ${feiras.length} feiras, ${codes.length} segmentos, edição ${edition}`);
