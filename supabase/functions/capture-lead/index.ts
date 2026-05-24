import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

// ChatHook (Chatwoot) — API privada usando o token pessoal
const CHATHOOK_BASE_URL = "https://chat.chathook.com.br";
const CHATHOOK_ACCESS_TOKEN = "f2FvRhfLE6CktrXNBvKvnmLV"; // User Access Token
const CHATHOOK_ACCOUNT_ID = "1";
const CHATHOOK_INBOX_ID = 157; // Richard (API Channel / Inbox)

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

// ─── Helpers ChatHook Private API ───────────────────────────────────────────

/** Cria ou atualiza contato no ChatHook. Retorna o contact_id. */
async function upsertContact(
  name: string,
  email: string,
  phone: string,
): Promise<number | null> {
  try {
    const formattedPhone = phone.replace(/\D/g, "").replace(/^(\d{2})(\d+)$/, "+55$1$2");
    const res = await fetch(`${CHATHOOK_BASE_URL}/api/v1/accounts/${CHATHOOK_ACCOUNT_ID}/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api_access_token": CHATHOOK_ACCESS_TOKEN,
      },
      body: JSON.stringify({
        name,
        email,
        phone_number: formattedPhone,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("ChatHook create contact error:", res.status, err);
      return null;
    }

    const data = await res.json();
    const contactId = data?.payload?.contact?.id;
    console.log("ChatHook contact created/found:", contactId);
    return contactId ?? null;
  } catch (err) {
    console.error("ChatHook upsertContact exception:", err);
    return null;
  }
}

/** Abre uma nova conversa para o contato. Retorna o conversation_id. */
async function createConversation(contactId: number): Promise<number | null> {
  try {
    const res = await fetch(`${CHATHOOK_BASE_URL}/api/v1/accounts/${CHATHOOK_ACCOUNT_ID}/conversations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api_access_token": CHATHOOK_ACCESS_TOKEN,
      },
      body: JSON.stringify({
        inbox_id: CHATHOOK_INBOX_ID,
        contact_id: contactId,
        status: "open",
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("ChatHook create conversation error:", res.status, err);
      return null;
    }

    const data = await res.json();
    console.log("ChatHook conversation created:", data?.id);
    return data?.id ?? null;
  } catch (err) {
    console.error("ChatHook createConversation exception:", err);
    return null;
  }
}

/** Envia a primeira mensagem na conversa com os dados do lead. */
async function sendLeadMessage(
  conversationId: number,
  name: string,
  email: string,
  phone: string,
  companySize: string,
  source: string,
): Promise<void> {
  const message = [
    `🚀 *Novo Lead — Teste Grátis*`,
    ``,
    `👤 *Nome:* ${name}`,
    `📱 *WhatsApp:* ${phone}`,
    `📧 *E-mail:* ${email}`,
    `🏢 *Tamanho da equipe:* ${companySize} pessoas`,
    `📌 *Origem:* ${source}`,
    `🕐 *Horário:* ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}`,
  ].join("\n");

  try {
    const res = await fetch(
      `${CHATHOOK_BASE_URL}/api/v1/accounts/${CHATHOOK_ACCOUNT_ID}/conversations/${conversationId}/messages`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api_access_token": CHATHOOK_ACCESS_TOKEN,
        },
        body: JSON.stringify({
          content: message,
          private: true,
        }),
      },
    );

    if (!res.ok) {
      const err = await res.text();
      console.error("ChatHook send message error:", res.status, err);
    } else {
      console.log("ChatHook message sent to conversation", conversationId);
    }
  } catch (err) {
    console.error("ChatHook sendLeadMessage exception:", err);
  }
}

// ─── Handler Principal ────────────────────────────────────────────────────────

Deno.serve(async (req: Request) => {
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
    return new Response(
      JSON.stringify({ error: "Missing required fields: name, email, whatsapp" }),
      { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }

  const leadSource = source ?? "free_trial_landing_page";
  let chathookConversationId: number | null = null;

  // ── 1. Cria contato + conversa no Kanban do ChatHook ─────────────────────
  const contactId = await upsertContact(name, email, whatsapp);

  if (contactId) {
    const conversationId = await createConversation(contactId);

    if (conversationId) {
      chathookConversationId = conversationId;
      await sendLeadMessage(
        conversationId,
        name,
        email,
        whatsapp,
        companySize,
        leadSource,
      );
    }
  }

  // ── 2. Salva lead no banco (sempre, independente do ChatHook) ─────────────
  const supabaseAdmin = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
  );

  const { error: dbError } = await supabaseAdmin.from("chathook_trial_leads").insert({
    name,
    email,
    whatsapp,
    company_size: companySize,
    source: leadSource,
    page: page ?? "",
    user_agent: userAgent ?? "",
    webhook_status: chathookConversationId ? 200 : 0,
  });

  if (dbError) {
    console.error("DB insert error:", dbError);
  }

  return new Response(
    JSON.stringify({
      success: true,
      message: "Lead captured successfully",
      chathook_conversation_id: chathookConversationId,
    }),
    {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    },
  );
});
