import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const WEBHOOK_URL = "https://autowebhook.chathook.com.br/webhook/chat01";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

Deno.serve(async (req: Request) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  let body: {
    name: string;
    email: string;
    whatsapp: string;
    companySize: string;
    source?: string;
    page?: string;
    userAgent?: string;
  };

  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const { name, email, whatsapp, companySize, source, page, userAgent } = body;

  if (!name || !email || !whatsapp) {
    return new Response(JSON.stringify({ error: "Missing required fields: name, email, whatsapp" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  // Initialize Supabase with service role key (auto-injected by Supabase runtime)
  const supabaseAdmin = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
  );

  let webhookStatus = 0;

  // 1. Forward to ChatHook webhook (server-side, no CORS)
  try {
    const webhookRes = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: `🚀 Novo Lead: ${name} (${whatsapp}) - Equipe: ${companySize}`,
        name,
        email,
        phone: whatsapp,
        whatsapp,
        companySize,
        source: source ?? "free_trial_landing_page",
        timestamp: new Date().toISOString(),
        page: page ?? "",
        userAgent: userAgent ?? "",
      }),
    });
    webhookStatus = webhookRes.status;
  } catch (err) {
    console.error("Webhook forward error:", err);
    webhookStatus = 0;
  }

  // 2. Save lead to DB (always, regardless of webhook result)
  const { error: dbError } = await supabaseAdmin.from("leads").insert({
    name,
    email,
    whatsapp,
    company_size: companySize,
    source: source ?? "free_trial_landing_page",
    page: page ?? "",
    user_agent: userAgent ?? "",
    webhook_status: webhookStatus,
  });

  if (dbError) {
    console.error("DB insert error:", dbError);
    // Return success to user anyway — don't block UX on DB errors
  }

  return new Response(
    JSON.stringify({
      success: true,
      message: "Lead captured successfully",
      webhook_status: webhookStatus,
    }),
    {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    },
  );
});
