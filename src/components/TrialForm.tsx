import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Loader2, Zap, Shield } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

// URL da Edge Function que registra o lead no Supabase
const EDGE_FUNCTION_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/capture-lead`;
// Cadastro do teste grátis da Deepson: cria a conta (7 dias, 20 créditos) e devolve o link de entrada já logado
const CADASTRO_URL = "https://seo.deepson.com.br/api/teste-gratis";
const WHATSAPP_AJUDA =
  "https://api.whatsapp.com/send?phone=5511955501090&text=" +
  encodeURIComponent("Olá! Tentei criar minha conta de teste da Deepson e não consegui.");

const digitos = (s: string) => s.replace(/\D/g, "");
// Suporta tanto o CNPJ numérico tradicional quanto o novo CNPJ alfanumérico da Receita Federal (julho/2026)
const limparCnpj = (s: string) => s.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
const cnpjValidoOuVazio = (s: string) => {
  const limpo = limparCnpj(s);
  if (limpo.length === 0) return true;
  return limpo.length === 14 && /^[A-Z0-9]{12}[0-9]{2}$/.test(limpo);
};

const formSchema = z.object({
  name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres."),
  email: z.string().email("Informe um e-mail corporativo válido."),
  whatsapp: z.string().refine((v) => digitos(v).length >= 10 && digitos(v).length <= 13, "Informe o WhatsApp com DDD."),
  cnpj: z
    .string()
    .optional()
    .default("")
    .refine(
      (v) => cnpjValidoOuVazio(v || ""),
      "Se preenchido, informe os 14 caracteres do CNPJ (numérico ou alfanumérico)."
    ),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "Você deve aceitar os Termos de Uso e Política de Privacidade.",
  }),
});

const TrialForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      whatsapp: "",
      cnpj: "",
      termsAccepted: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const params = new URLSearchParams(window.location.search);
      // 1) cria a conta na Deepson (text/plain evita a pré-checagem de CORS; o servidor lê o JSON)
      const res = await fetch(CADASTRO_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          nome: values.name.trim(),
          email: values.email.trim(),
          whatsapp: digitos(values.whatsapp),
          cnpj: limparCnpj(values.cnpj || ""),
          site: honeypot, // armadilha de robô: vazio para pessoas
          origem: `${params.get("utm_source") || "deepson.com.br"}/${params.get("utm_campaign") || "teste_7_dias"}`,
        }),
      });
      const result = (await res.json().catch(() => ({}))) as { url?: string; erro?: string };
      if (!res.ok || !result.url) throw new Error(result.erro || "Não conseguimos criar sua conta agora.");

      // 2) o lead continua indo para o Supabase/webhook (sem segurar a entrada)
      const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;
      void fetch(EDGE_FUNCTION_URL, {
        method: "POST",
        keepalive: true,
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${anonKey}`, apikey: anonKey },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          whatsapp: values.whatsapp,
          companySize: values.cnpj ? `CNPJ: ${limparCnpj(values.cnpj)}` : "Não informado",
          source: "free_trial_landing_page",
          page: window.location.pathname,
          userAgent: navigator.userAgent,
        }),
      }).catch(() => {});

      const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
      if (typeof gtag === "function") gtag("event", "sign_up", { method: "teste_gratis_7_dias" });
      toast.success("Conta criada! Entrando na plataforma…");
      setTimeout(() => {
        window.location.href = result.url!;
      }, 700);
    } catch (error) {
      const texto = error instanceof Error && error.message ? error.message : "Não conseguimos criar sua conta agora.";
      toast.error(texto, {
        action: { label: "Falar no WhatsApp", onClick: () => window.open(WHATSAPP_AJUDA, "_blank", "noopener") },
        duration: 12000,
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-1">
      <div className="mb-6 relative">
        <div className="bg-primary/15 text-primary text-[10px] font-black px-3 py-1 rounded-full w-fit mb-4 uppercase tracking-wider border border-primary/25">
           7 Dias Grátis • 20 Créditos • Sem Cartão
        </div>
        <h3 className="text-3xl font-black text-foreground mb-3 tracking-tighter italic">Liberar meu <span className="text-primary">Acesso Grátis</span></h3>
        <p className="text-sm text-slate-200 leading-relaxed font-semibold">
          Crie sua conta gratuita e receba <span className="text-primary font-bold">20 créditos por 7 dias</span> para analisar até 10 empresas (contato + sinais financeiros) ou 4 empresas com enriquecimento completo por IA.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-black text-foreground uppercase tracking-wider">Nome Completo</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome" {...field} className="h-12 bg-background border-white/25 text-foreground placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary focus-visible:ring-primary/20 transition-all font-medium" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-black text-foreground uppercase tracking-wider">E-mail Corporativo</FormLabel>
                <FormControl>
                  <Input placeholder="voce@suaempresa.com.br" {...field} className="h-12 bg-background border-white/25 text-foreground placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary focus-visible:ring-primary/20 transition-all font-medium" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="whatsapp"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-black text-foreground uppercase tracking-wider">WhatsApp com DDD</FormLabel>
                <FormControl>
                  <Input placeholder="(11) 99999-9999" {...field} className="h-12 bg-background border-white/25 text-foreground placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary focus-visible:ring-primary/20 transition-all font-medium" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cnpj"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel className="text-xs font-black text-foreground uppercase tracking-wider">
                    CNPJ da sua empresa
                  </FormLabel>
                  <span className="text-[10px] text-slate-400 font-medium">Aceita CNPJ alfanumérico</span>
                </div>
                <FormControl>
                  <Input
                    placeholder="00.000.000/0001-00 (ou informe após o acesso)"
                    autoCapitalize="characters"
                    {...field}
                    className="h-12 bg-background border-white/25 text-foreground placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary focus-visible:ring-primary/20 transition-all font-medium"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* armadilha de robô: escondida; pessoa de verdade não preenche */}
          <input
            type="text"
            name="site"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
          />

          <FormField
            control={form.control}
            name="termsAccepted"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-1">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 mt-1 leading-tight">
                  <FormLabel className="text-[12px] text-slate-300 font-semibold cursor-pointer">
                    Li e aceito os <Link to="/termos-de-uso" className="text-primary hover:underline font-extrabold" target="_blank">Termos de Uso</Link> e a <Link to="/privacidade" className="text-primary hover:underline font-extrabold" target="_blank">Política de Privacidade</Link>.
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />

          <Button type="submit" variant="cta" className="w-full h-16 text-[13px] sm:text-base font-black mt-6 shadow-button group relative overflow-hidden rounded-2xl" disabled={isSubmitting}>
             <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity" />
            {isSubmitting ? (
              <><Loader2 className="mr-2 h-6 w-6 animate-spin" /> Criando sua conta...</>
            ) : (
              <span className="flex items-center gap-2">
                 COMEÇAR TESTE GRÁTIS SEM CARTÃO
                 <Zap className="w-5 h-5 fill-current" />
              </span>
            )}
          </Button>

          <div className="flex items-center justify-center gap-4 mt-6 text-slate-300 opacity-90">
             <Shield className="w-4 h-4 text-primary" />
             <span className="text-[10px] font-bold uppercase tracking-widest">Ambiente Seguro • Sem Cartão de Crédito</span>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default TrialForm;
