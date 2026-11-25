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
import { useLocale } from "@/i18n/LocaleContext";
import { FREE_TRIAL_COPY, type FreeTrialCopy } from "@/pages/freeTrialCopy";

// URL da Edge Function que registra o lead no Supabase
const EDGE_FUNCTION_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/capture-lead`;
// Cadastro do teste grátis da Deepson: cria a conta (7 dias, 20 créditos) e devolve o link de entrada já logado
const CADASTRO_URL = "https://app.deepson.com.br/api/teste-gratis";

const digitos = (s: string) => s.replace(/\D/g, "");
const buildSchema = (f: FreeTrialCopy["form"]) => z.object({
  name: z.string().min(2, f.errName),
  email: z.string().email(f.errEmail),
  whatsapp: z.string().refine((v) => digitos(v).length >= 10 && digitos(v).length <= 13, f.errWhatsapp),
  // ponytail: o servidor valida e consulta só CNPJ numérico; aceitar alfanumérico quando a base da Receita tiver
  cnpj: z.string().refine((v) => digitos(v).length === 14, f.errCnpj),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: f.errTerms,
  }),
});

type FormValues = z.infer<ReturnType<typeof buildSchema>>;

const TrialForm = () => {
  const { locale, routeTo } = useLocale();
  const f = FREE_TRIAL_COPY[locale].form;
  const WHATSAPP_AJUDA = "https://api.whatsapp.com/send?phone=5511955501090&text=" + encodeURIComponent(f.helpMsg);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(buildSchema(f)),
    defaultValues: {
      name: "",
      email: "",
      whatsapp: "",
      cnpj: "",
      termsAccepted: true,
    },
  });

  const onSubmit = async (values: FormValues) => {
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
          cnpj: digitos(values.cnpj),
          site: honeypot, // armadilha de robô: vazio para pessoas
          origem: `${params.get("utm_source") || "deepson.com.br"}/${params.get("utm_campaign") || "teste_7_dias"}`,
        }),
      });
      const result = (await res.json().catch(() => ({}))) as { url?: string; erro?: string };
      if (!res.ok || !result.url) throw new Error(result.erro || f.errGeneric);

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
          companySize: `CNPJ: ${digitos(values.cnpj)}${params.get("site") ? ` · Site: ${params.get("site")}` : ""}`,
          source: "free_trial_landing_page",
          page: window.location.pathname,
          userAgent: navigator.userAgent,
        }),
      }).catch(() => {});

      const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
      if (typeof gtag === "function") gtag("event", "sign_up", { method: "teste_gratis_7_dias" });
      toast.success(f.success);
      setTimeout(() => {
        window.location.href = result.url!;
      }, 700);
    } catch (error) {
      const texto = error instanceof Error && error.message ? error.message : f.errGeneric;
      toast.error(texto, {
        action: { label: f.whatsappHelp, onClick: () => window.open(WHATSAPP_AJUDA, "_blank", "noopener") },
        duration: 12000,
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-1">
      <div className="mb-6 relative">
        <div className="bg-primary/15 text-primary text-[10px] font-black px-3 py-1 rounded-full w-fit mb-4 uppercase tracking-wider border border-primary/25">
           {f.badge}
        </div>
        <h3 className="text-3xl font-black text-white mb-3 tracking-tighter italic">{f.titleBefore}<span className="text-primary">{f.titleHighlight}</span></h3>
        <p className="text-sm text-slate-200 leading-relaxed font-semibold">
          {f.leadBefore}<span className="text-primary font-bold">{f.leadDays}</span>{f.leadAfter}
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-black text-slate-200 uppercase tracking-wider">{f.name}</FormLabel>
                <FormControl>
                  <Input placeholder={f.namePh} {...field} className="h-12 bg-background border-white/25 text-foreground placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary focus-visible:ring-primary/20 transition-all font-medium" />
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
                <FormLabel className="text-xs font-black text-slate-200 uppercase tracking-wider">{f.email}</FormLabel>
                <FormControl>
                  <Input placeholder={f.emailPh} {...field} className="h-12 bg-background border-white/25 text-foreground placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary focus-visible:ring-primary/20 transition-all font-medium" />
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
                <FormLabel className="text-xs font-black text-slate-200 uppercase tracking-wider">{f.whatsapp}</FormLabel>
                <FormControl>
                  <Input placeholder={f.whatsappPh} {...field} className="h-12 bg-background border-white/25 text-foreground placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary focus-visible:ring-primary/20 transition-all font-medium" />
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
                  <FormLabel className="text-xs font-black text-slate-200 uppercase tracking-wider">
                    {f.cnpj}
                  </FormLabel>
                </div>
                <FormControl>
                  <Input
                    placeholder="00.000.000/0001-00"
                    inputMode="numeric"
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
                    {f.termsBefore}<Link to={routeTo("terms")} className="text-primary hover:underline font-extrabold" target="_blank">{f.terms}</Link>{f.termsMid}<Link to={routeTo("privacy")} className="text-primary hover:underline font-extrabold" target="_blank">{f.privacy}</Link>.
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />

          <Button type="submit" variant="cta" className="w-full h-16 text-[13px] sm:text-base font-black mt-6 shadow-button group relative overflow-hidden rounded-2xl" disabled={isSubmitting}>
             <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity" />
            {isSubmitting ? (
              <><Loader2 className="mr-2 h-6 w-6 animate-spin" /> {f.submitting}</>
            ) : (
              <span className="flex items-center gap-2">
                 {f.submit}
                 <Zap className="w-5 h-5 fill-current" />
              </span>
            )}
          </Button>

          <div className="flex items-center justify-center gap-4 mt-6 text-slate-300 opacity-90">
             <Shield className="w-4 h-4 text-primary" />
             <span className="text-[10px] font-bold uppercase tracking-widest">{f.secure}</span>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default TrialForm;
