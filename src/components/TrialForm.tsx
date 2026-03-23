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

const formSchema = z.object({
  name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres."),
  email: z.string().email("E-mail inválido."),
  whatsapp: z.string().min(10, "Informe um WhatsApp válido."),
  companySize: z.string({
    required_error: "Selecione o tamanho da empresa.",
  }),
});

const TrialForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      whatsapp: "",
      companySize: "",
    },
  });

  const EDGE_FUNCTION_URL =
    "https://zzehxqgyberjewihsliu.supabase.co/functions/v1/capture-lead";


  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const res = await fetch(EDGE_FUNCTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
        const errBody = await res.text();
        console.error("Edge Function error:", res.status, errBody);
        throw new Error(`Edge Function returned ${res.status}`);
      }

      setIsSuccess(true);
      toast.success("Solicitação enviada com sucesso!");
      console.log("Lead captured:", values);
    } catch (error) {
      console.error("Erro ao capturar lead:", error);
      toast.error("Ocorreu um erro. Por favor, tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-card border border-border p-10 rounded-[32px] shadow-2xl text-center space-y-8 animate-in fade-in zoom-in duration-700 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-green-500" />
        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto ring-8 ring-green-500/5">
          <CheckCircle2 className="w-10 h-10 text-green-500" />
        </div>
        <div className="space-y-3">
          <h3 className="text-3xl font-black text-foreground tracking-tight">Quase tudo pronto!</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Seu pedido de teste foi recebido. Um de nossos especialistas em implantação entrará em contato em menos de <span className="text-foreground font-bold">15 minutos</span> (em horário comercial) para liberar seu acesso.
          </p>
        </div>
        
        <div className="bg-muted/50 p-6 rounded-2xl border border-border/50 text-left space-y-3">
           <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Próximos Passos:</p>
           <ul className="space-y-2">
              <li className="flex items-start gap-2 text-xs font-medium">
                 <div className="w-4 h-4 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px] mt-0.5 shrink-0">1</div>
                 Receba o contato via WhatsApp
              </li>
              <li className="flex items-start gap-2 text-xs font-medium">
                 <div className="w-4 h-4 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px] mt-0.5 shrink-0">2</div>
                 Conecte seu número com nossa ajuda
              </li>
              <li className="flex items-start gap-2 text-xs font-medium">
                 <div className="w-4 h-4 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px] mt-0.5 shrink-0">3</div>
                 Comece a vender com Kanban e IA
              </li>
           </ul>
        </div>

        <Button 
          className="w-full h-14 text-lg font-black gap-2 shadow-xl shadow-primary/20 rounded-2xl"
          onClick={() => window.open(`https://wa.me/5511955501090?text=Olá! Acabei de solicitar o teste de 7 dias para ${form.getValues('name')} e gostaria de acelerar minha implantação.`, "_blank")}
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          Falar com Especialista Agora
        </Button>
      </div>
    );
  }

  return (
    <div className="p-1">
      <div className="mb-8 relative">
        <div className="bg-primary/10 text-primary text-[10px] font-black px-3 py-1 rounded-full w-fit mb-4 uppercase tracking-tighter">
           7 Dias Grátis & Sem Cartão
        </div>
        <h3 className="text-3xl font-black text-foreground mb-3 tracking-tighter italic">Liberar meu <span className="text-primary">CRM Inteligente</span></h3>
        <p className="text-sm text-muted-foreground leading-relaxed">Preencha abaixo para receber seu acesso e o bônus de implantação em 48h.</p>
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

          <Button type="submit" className="w-full h-16 text-xl font-black mt-6 shadow-button group relative overflow-hidden rounded-2xl" disabled={isSubmitting}>
             <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity" />
            {isSubmitting ? (
              <><Loader2 className="mr-2 h-6 w-6 animate-spin" /> Configurando...</>
            ) : (
              <span className="flex items-center gap-2">
                 COMEÇAR AGORA
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
