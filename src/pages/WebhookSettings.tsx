import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Globe, Zap, Settings2, Info } from "lucide-react";

interface WebhookEvent {
  id: string;
  label: string;
  description: string;
}

const webhookEvents: WebhookEvent[] = [
  { id: "conversation_created", label: "Conversa Criada", description: "Notificar quando uma nova conversa for iniciada." },
  { id: "conversation_status_changed", label: "Status de Conversa Alterado", description: "Notificar quando o status da conversa mudar." },
  { id: "conversation_updated", label: "Conversa Atualizada", description: "Notificar quando houver uma atualização na conversa." },
  { id: "message_created", label: "Mensagem Criada", description: "Notificar quando uma nova mensagem for enviada ou recebida." },
  { id: "message_updated", label: "Mensagem Atualizada", description: "Notificar quando uma mensagem existente for editada." },
  { id: "webwidget_triggered", label: "Widget de Chat Aberto", description: "Notificar quando o widget de chat for aberto pelo usuário." },
  { id: "contact_created", label: "Contato Criado", description: "Notificar quando um novo contato for adicionado ao sistema." },
  { id: "contact_updated", label: "Contato Atualizado", description: "Notificar quando as informações do contato forem modificadas." },
  { id: "conversation_typing_on", label: "Status de Digitação Ativado", description: "Notificar quando o usuário começar a digitar." },
  { id: "conversation_typing_off", label: "Status de Digitação Desativado", description: "Notificar quando o usuário parar de digitar." },
];

export default function WebhookSettings() {
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [selectedEvents, setSelectedEvents] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleToggleEvent = (id: string) => {
    setSelectedEvents(prev => 
      prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
    );
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url || !name || selectedEvents.length === 0) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha o URL, o Nome e selecione pelo menos um evento.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    // Simulating save
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Webhook Configurado! ✅",
      description: "Dessa forma, suas automações estão prontas para receber dados."
    });
    
    setIsSubmitting(false);
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-background p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)} 
          className="gap-2 text-muted-foreground hover:text-foreground mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Button>

        <div className="flex items-center gap-4 mb-8">
           <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Globe className="w-6 h-6 text-primary" />
           </div>
           <div>
              <h1 className="text-3xl font-black text-foreground tracking-tight">Adicionar Novo Webhook</h1>
              <p className="text-muted-foreground text-sm">Configure um retorno de chamada para eventos em tempo real.</p>
           </div>
        </div>

        <form onSubmit={handleSave} className="space-y-8">
           <Card className="border-border/50 bg-card/50 backdrop-blur-xl">
              <CardHeader>
                 <CardTitle className="text-xl flex items-center gap-2">
                    <Settings2 className="h-5 w-5 text-primary" />
                    Configuração Básica
                 </CardTitle>
                 <CardDescription>
                    Webhook Os eventos fornecem informações em tempo real sobre o que está acontecendo na sua conta do Chathook. Digite um URL válido para configurar um retorno de chamada.
                 </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                 <div className="space-y-2">
                    <Label htmlFor="url">URL do Webhook</Label>
                    <div className="relative">
                       <Globe className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                       <Input 
                          id="url"
                          placeholder="Exemplo: https://example/api/webhook" 
                          value={url}
                          onChange={(e) => setUrl(e.target.value)}
                          className="pl-10 h-12 bg-background/50 border-white/5 focus:border-primary/50"
                       />
                    </div>
                 </div>

                 <div className="space-y-2">
                    <Label htmlFor="name">Nome do Webhook</Label>
                    <Input 
                       id="name"
                       placeholder="Enter the name of the webhook" 
                       value={name}
                       onChange={(e) => setName(e.target.value)}
                       className="h-12 bg-background/50 border-white/5 focus:border-primary/50"
                    />
                 </div>
              </CardContent>
           </Card>

           <Card className="border-border/50 bg-card/50 backdrop-blur-xl overflow-hidden">
              <CardHeader className="bg-muted/5 border-b border-border/50">
                 <div className="flex justify-between items-center">
                    <div>
                        <CardTitle className="text-xl flex items-center gap-2">
                           <Zap className="h-5 w-5 text-primary" />
                           Eventos de Webhook
                        </CardTitle>
                        <CardDescription>Escolha quais gatilhos enviarão dados para este endpoint.</CardDescription>
                    </div>
                    <Badge variant="outline" className="h-6">
                       {selectedEvents.length} selecionados
                    </Badge>
                 </div>
              </CardHeader>
              <CardContent className="p-0">
                 <div className="divide-y divide-border/50">
                    {webhookEvents.map((event) => (
                       <div key={event.id} className="flex items-start gap-4 p-6 hover:bg-muted/30 transition-colors">
                          <Checkbox 
                             id={event.id}
                             checked={selectedEvents.includes(event.id)}
                             onCheckedChange={() => handleToggleEvent(event.id)}
                             className="mt-1"
                          />
                          <div className="space-y-1 cursor-pointer" onClick={() => handleToggleEvent(event.id)}>
                             <Label htmlFor={event.id} className="text-sm font-bold block cursor-pointer">
                                {event.label}
                                <span className="ml-2 text-[10px] text-muted-foreground font-mono opacity-50 uppercase tracking-widest">{event.id}</span>
                             </Label>
                             <p className="text-xs text-muted-foreground leading-relaxed">{event.description}</p>
                          </div>
                       </div>
                    ))}
                 </div>
              </CardContent>
           </Card>

           <div className="bg-primary/5 border border-primary/20 p-6 rounded-2xl flex items-start gap-4">
              <Info className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <div className="space-y-1">
                 <p className="text-sm font-bold text-primary">Dica de Desenvolvimento</p>
                 <p className="text-xs text-muted-foreground leading-relaxed">
                    Você pode usar ferramentas como Hookdeck ou Webhook.site para testar o recebimento dos payloads antes de integrar com seu sistema de produção.
                 </p>
              </div>
           </div>

           <div className="flex justify-end pt-6">
              <Button 
                type="submit" 
                size="lg" 
                disabled={isSubmitting}
                className="h-14 px-12 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 min-w-[200px]"
              >
                 {isSubmitting ? "Salvando..." : "Salvar Webhook"}
              </Button>
           </div>
        </form>
      </div>
    </div>
  );
}
