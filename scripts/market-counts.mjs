#!/usr/bin/env node
/**
 * Gera src/data/marketCounts.json a partir da base pública da Receita Federal processada na VPS
 * (busca-AAAA-MM.db: só estabelecimentos ativos, com marcação de MEI).
 *
 * Uso: node scripts/market-counts.mjs [edição]      ex.: node scripts/market-counts.mjs 2026-10
 * Lê os códigos `q: "..."` de src/data/tradeShows.ts (CNAE principal: código completo ou prefixo de grupo/divisão),
 * conta Brasil e SP (total e MEI) e grava o JSON. Só leitura na VPS (alias ssh `chathook-vps`).
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";

const edition = process.argv[2] || "2026-10";
const src = fs.readFileSync("src/data/tradeShows.ts", "utf-8");
const codes = [...new Set([...src.matchAll(/\bq: "(\d+)"/g)].map((m) => m[1]))];
if (!codes.length) throw new Error("nenhum q: \"...\" encontrado em tradeShows.ts");

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

// o script vai pela entrada padrão (python3 -): sem problema de aspas no ssh
const raw = execFileSync("ssh", ["-o", "BatchMode=yes", "chathook-vps", "python3", "-"], { input: py, encoding: "utf-8" });
const counts = JSON.parse(raw);
const out = { edition, generatedAt: new Date().toISOString().slice(0, 10), source: `busca-${edition}.db (Receita Federal, só ativos)`, counts };
fs.writeFileSync("src/data/marketCounts.json", JSON.stringify(out, null, 2) + "\n");
console.log(`marketCounts.json: ${codes.length} segmentos, edição ${edition}`);
