-- Pedidos vindos das fichas de feiras do site DeepB2B (deepb2b.ai):
--   kind = 'buyer'      -> "Vai visitar a feira? Diga o que procura." (demanda declarada)
--   kind = 'organizer'  -> "Sou o organizador desta feira"
-- Só a Edge Function trade-show-request grava (service role). RLS ligado e sem política pública: o site não lê nem grava direto.
create table if not exists public.deepb2b_trade_show_requests (
  id            uuid primary key default gen_random_uuid(),
  created_at    timestamptz not null default now(),
  kind          text not null check (kind in ('buyer', 'organizer')),
  trade_show    text not null,            -- slug da feira (ex.: feicon)
  locale        text not null,            -- pt-br | en | es | zh-cn
  page          text not null,            -- caminho da página de origem
  cnpj          text,                     -- só números; obrigatório para comprador
  company       text not null,
  contact_name  text,                     -- organizador
  email         text not null,
  looking_for   text,                     -- comprador: o que procura
  purchase_volume text,                   -- comprador: faixa (opcional)
  message       text,                     -- organizador
  consent_lgpd  boolean not null,
  consent_at    timestamptz not null default now(),
  user_agent    text,
  status        text not null default 'novo'
);

create index if not exists deepb2b_tsr_show_idx on public.deepb2b_trade_show_requests (trade_show, created_at desc);
alter table public.deepb2b_trade_show_requests enable row level security;
