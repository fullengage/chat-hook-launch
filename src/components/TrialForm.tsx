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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { CheckCircle2, Loader2, MessageSquare, Zap, Shield } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Checkbox } from "@/components/ui/checkbox";
import { Link, useNavigate } from "react-router-dom";

// URL da Edge Function que aciona o webhook do ChatHook
const EDGE_FUNCTION_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/capture-lead`;

const formSchema = z.object({
  name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres."),
  email: z.string().email("E-mail inválido."),
  whatsapp: z.string().min(10, "Informe um WhatsApp válido."),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "Você deve aceitar os Termos de Uso e Política de Privacidade.",
  }),
});

const TrialForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      whatsapp: "",
      termsAccepted: false,
    },
  });


  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      // Chama a Edge Function — ela salva no banco E dispara o webhook do ChatHook
      const { data: { session } } = await supabase.auth.getSession();
      const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

      const res = await fetch(EDGE_FUNCTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${session?.access_token ?? anonKey}`,
          "apikey": anonKey,
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          whatsapp: values.whatsapp,
          companySize: "Não informado",
          source: "free_trial_landing_page",
          page: window.location.pathname,
          userAgent: navigator.userAgent,
        }),
      });

      if (!res.ok) {
        const errBody = await res.json().catch(() => ({}));
        console.error("Edge function error:", errBody);
        throw new Error(errBody?.error ?? "Erro ao enviar cadastro.");
      }

      toast.success("Solicitação enviada com sucesso!");
      console.log("Lead captured and webhook triggered for:", values.name);

      // Persiste no localStorage para evitar perda de dados em caso de refresh na página de obrigado
      localStorage.setItem("chathook_lead_name", values.name);
      localStorage.setItem("chathook_lead_whatsapp", values.whatsapp);

      navigate("/obrigado", {
        state: {
          name: values.name,
          whatsapp: values.whatsapp,
        },
      });
    } catch (error) {
      console.error("Erro ao capturar lead:", error);
      toast.error("Ocorreu um erro. Por favor, tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-1">
      <div className="mb-8 relative">
        <div className="bg-primary/10 text-primary text-[10px] font-black px-3 py-1 rounded-full w-fit mb-4 uppercase tracking-tighter">
           7 Dias Grátis &amp; Sem Cartão
        </div>
        <h3 className="text-3xl font-black text-foreground mb-3 tracking-tighter italic">Liberar meu <span className="text-primary">CRM Inteligente</span></h3>
        <p className="text-sm text-slate-200 leading-relaxed font-semibold">Preencha abaixo para receber seu acesso e o bônus de implantação hoje mesmo.</p>
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
                <FormLabel className="text-xs font-black text-foreground uppercase tracking-wider">Melhor E-mail</FormLabel>
                <FormControl>
                  <Input placeholder="seu@email.com" {...field} className="h-12 bg-background border-white/25 text-foreground placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary focus-visible:ring-primary/20 transition-all font-medium" />
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
                  <Input placeholder="(00) 00000-0000" {...field} className="h-12 bg-background border-white/25 text-foreground placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary focus-visible:ring-primary/20 transition-all font-medium" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
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
                    Li e aceito os <Link to="/termos-de-uso" className="text-green-400 hover:underline font-extrabold" target="_blank">Termos de Uso</Link> e a <Link to="/privacidade" className="text-green-400 hover:underline font-extrabold" target="_blank">Política de Privacidade</Link>.
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />

          <Button type="submit" variant="cta" className="w-full h-16 text-[13px] sm:text-base font-black mt-6 shadow-button group relative overflow-hidden rounded-2xl" disabled={isSubmitting}>
             <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity" />
            {isSubmitting ? (
              <><Loader2 className="mr-2 h-6 w-6 animate-spin" /> Configurando...</>
            ) : (
              <span className="flex items-center gap-2">
                 COMEÇAR TESTE GRÁTIS SEM CARTÃO
                 <Zap className="w-5 h-5 fill-current" />
              </span>
            )}
          </Button>

          <div className="flex items-center justify-center gap-4 mt-6 text-slate-300 opacity-90">
             <Shield className="w-4 h-4 text-green-400" />
             <span className="text-[10px] font-bold uppercase tracking-widest">Protocolo SSL Seguro</span>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default TrialForm;
