-- Create leads table to capture trial form submissions
CREATE TABLE IF NOT EXISTS public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  company_size TEXT,
  source TEXT DEFAULT 'free_trial_landing_page',
  page TEXT,
  user_agent TEXT,
  webhook_status INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Only service role (Edge Function) can access this table
-- No policies for anon/authenticated users needed
