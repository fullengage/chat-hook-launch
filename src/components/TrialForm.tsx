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
  companySize: z.string({
    required_error: "Selecione o tamanho da empresa.",
  }),
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
      companySize: "",
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
          companySize: values.companySize,
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
        <p className="text-sm text-muted-foreground leading-relaxed">Preencha abaixo para receber seu acesso e o bônus de implantação hoje mesmo.</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome Completo</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome" {...field} className="h-12 bg-background/50 border-white/10 focus:border-primary/50" />
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
                <FormLabel>E-mail Corporativo</FormLabel>
                <FormControl>
                  <Input placeholder="email@empresa.com" {...field} className="h-12 bg-background/50 border-white/10 focus:border-primary/50" />
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
                <FormLabel>WhatsApp com DDD</FormLabel>
                <FormControl>
                  <Input placeholder="(00) 00000-0000" {...field} className="h-12 bg-background/50 border-white/10 focus:border-primary/50" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companySize"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tamanho da Equipe</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-12 bg-background/50 border-white/10 focus:border-primary/50">
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1-3">1 a 3 pessoas</SelectItem>
                    <SelectItem value="4-10">4 a 10 pessoas</SelectItem>
                    <SelectItem value="11-50">11 a 50 pessoas</SelectItem>
                    <SelectItem value="50+">Mais de 50 pessoas</SelectItem>
                  </SelectContent>
                </Select>
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
                  <FormLabel className="text-[11px] text-muted-foreground font-medium cursor-pointer">
                    Li e aceito os <Link to="/termos-de-uso" className="text-primary hover:underline font-bold" target="_blank">Termos de Uso</Link> e a <Link to="/privacidade" className="text-primary hover:underline font-bold" target="_blank">Política de Privacidade</Link>.
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full h-16 text-xl font-black mt-6 shadow-button group relative overflow-hidden rounded-2xl" disabled={isSubmitting}>
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

          <div className="flex items-center justify-center gap-4 mt-6 grayscale opacity-50">
             <Shield className="w-4 h-4" />
             <span className="text-[10px] font-bold uppercase tracking-widest">Protocolo SSL Seguro</span>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default TrialForm;
