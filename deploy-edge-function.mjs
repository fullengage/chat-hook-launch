#!/usr/bin/env node
/**
 * Deploy script for capture-lead Edge Function
 * Run: node deploy-edge-function.mjs <SUPABASE_ACCESS_TOKEN> <DB_PASSWORD>
 *
 * Get your token at: https://supabase.com/dashboard/account/tokens
 * Get DB password from Supabase Dashboard → Project Settings → Database → DB Password
 */

import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const PROJECT_REF = "fqsgauziwigazvatcial";
const ACCESS_TOKEN = process.argv[2];
const DB_PASSWORD = process.argv[3];

if (!ACCESS_TOKEN) {
  console.error("❌ Usage: node deploy-edge-function.mjs <SUPABASE_ACCESS_TOKEN> <DB_PASSWORD>");
  console.error("   Get token: https://supabase.com/dashboard/account/tokens");
  process.exit(1);
}

const __dirname = dirname(fileURLToPath(import.meta.url));

// --- 1. Apply migration ---
if (DB_PASSWORD) {
  console.log("📦 Applying migration via Management API...");
  const migrationSQL = readFileSync(
    join(__dirname, "supabase/migrations/20260323_create_leads_table.sql"),
    "utf8"
  );

  const migRes = await fetch(
    `https://api.supabase.com/v1/projects/${PROJECT_REF}/database/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: migrationSQL }),
    }
  );

  if (migRes.ok) {
    console.log("✅ Migration applied successfully");
  } else {
    const err = await migRes.text();
    console.warn("⚠️  Migration response:", migRes.status, err);
    console.warn("   (Table may already exist — continuing)");
  }
} else {
  console.log("⚠️  No DB password provided — skipping migration. Apply manually in Supabase SQL Editor.");
}

// --- 2. Deploy Edge Function ---
console.log("\n🚀 Deploying capture-lead Edge Function...");
const functionCode = readFileSync(
  join(__dirname, "supabase/functions/capture-lead/index.ts"),
  "utf8"
);

const deployRes = await fetch(
  `https://api.supabase.com/v1/projects/${PROJECT_REF}/functions`,
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      slug: "capture-lead",
      name: "capture-lead",
      verify_jwt: false,
      entrypoint_path: "index.ts",
      import_map_path: null,
      body: functionCode,
    }),
  }
);

if (deployRes.ok) {
  const data = await deployRes.json();
  console.log("✅ Edge Function deployed:", data.id ?? "OK");
} else if (deployRes.status === 409) {
  // Function exists — update it
  console.log("📝 Function exists, updating...");
  const patchRes = await fetch(
    `https://api.supabase.com/v1/projects/${PROJECT_REF}/functions/capture-lead`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        verify_jwt: false,
        entrypoint_path: "index.ts",
        body: functionCode,
      }),
    }
  );
  if (patchRes.ok) {
    console.log("✅ Edge Function updated successfully");
  } else {
    const err = await patchRes.text();
    console.error("❌ Failed to update function:", patchRes.status, err);
    process.exit(1);
  }
} else {
  const err = await deployRes.text();
  console.error("❌ Failed to deploy function:", deployRes.status, err);
  process.exit(1);
}

console.log("\n🎉 Done!");
console.log(`   Edge Function URL: https://${PROJECT_REF}.supabase.co/functions/v1/capture-lead`);
console.log("\n📋 Next: Apply migration manually if skipped:");
console.log("   Supabase Dashboard → SQL Editor → paste supabase/migrations/20260323_create_leads_table.sql");
