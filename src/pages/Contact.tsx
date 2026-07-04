import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronLeft, MessageSquare, HeadphonesIcon, CreditCard, Handshake, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <Button 
          variant="ghost" 
          className="mb-8 gap-2 hover:bg-muted" 
          onClick={() => navigate(-1)}
        >
          <ChevronLeft className="w-4 h-4" />
          Voltar
        </Button>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-black italic mb-4">
            Fale com a equipe <span className="text-primary">Chathook</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Estamos prontos para ajudar você.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-muted/30 border border-border/80 rounded-2xl p-6 flex flex-col items-center text-center hover:border-primary/50 transition-colors">
            <div className="p-3 bg-primary/10 rounded-full text-primary mb-4">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">Comercial</h3>
            <p className="text-sm text-muted-foreground">Dúvidas sobre planos, preços e como o Chathook pode ajudar seu negócio.</p>
          </div>
          
          <div className="bg-muted/30 border border-border/80 rounded-2xl p-6 flex flex-col items-center text-center hover:border-primary/50 transition-colors">
            <div className="p-3 bg-primary/10 rounded-full text-primary mb-4">
              <HeadphonesIcon className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">Suporte Técnico</h3>
            <p className="text-sm text-muted-foreground">Precisa de ajuda com sua conta, integrações ou configurações da plataforma?</p>
          </div>
          
          <div className="bg-muted/30 border border-border/80 rounded-2xl p-6 flex flex-col items-center text-center hover:border-primary/50 transition-colors">
            <div className="p-3 bg-primary/10 rounded-full text-primary mb-4">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">Financeiro</h3>
            <p className="text-sm text-muted-foreground">Questões sobre faturamento, notas fiscais, boletos e métodos de pagamento.</p>
          </div>
          
          <div className="bg-muted/30 border border-border/80 rounded-2xl p-6 flex flex-col items-center text-center hover:border-primary/50 transition-colors">
            <div className="p-3 bg-primary/10 rounded-full text-primary mb-4">
              <Handshake className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">Parcerias</h3>
            <p className="text-sm text-muted-foreground">Seja um parceiro Chathook, agências, afiliados e integrações de terceiros.</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-8">Envie sua mensagem</h2>
            <div className="bg-background border border-border rounded-2xl p-6 md:p-8 shadow-sm">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input id="name" placeholder="Seu nome completo" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa</Label>
                    <Input id="company" placeholder="Sua empresa" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="seu.email@exemplo.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" placeholder="(00) 00000-0000" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto</Label>
                  <Input id="subject" placeholder="Do que se trata?" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea id="message" placeholder="Como podemos te ajudar hoje?" className="min-h-[150px]" required />
                </div>
                
                <Button type="submit" className="w-full text-lg h-12 mt-6 font-bold">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-8">Perguntas Frequentes</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border border-border/50 bg-muted/20 px-4 rounded-lg">
                <AccordionTrigger className="hover:no-underline font-semibold">Como contratar?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Você pode solicitar uma demonstração através do botão abaixo ou assinar diretamente por um dos nossos planos em nosso site. Nossa equipe guiará você nos primeiros passos.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border border-border/50 bg-muted/20 px-4 rounded-lg">
                <AccordionTrigger className="hover:no-underline font-semibold">Como conectar meu WhatsApp?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Oferecemos suporte para a API Oficial do WhatsApp Business, que é ativada através da Meta, e também fornecemos uma conexão simples via QR Code dependendo do seu plano.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border border-border/50 bg-muted/20 px-4 rounded-lg">
                <AccordionTrigger className="hover:no-underline font-semibold">Quanto tempo leva para ativar?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A ativação do sistema é imediata após a contratação. A conexão com o WhatsApp oficial pode levar algumas horas até a aprovação da Meta.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border/50 bg-muted/20 px-4 rounded-lg">
                <AccordionTrigger className="hover:no-underline font-semibold">Posso usar meu número atual?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim! Você pode manter seu número atual (fixo ou móvel) para usar a API Oficial do WhatsApp ou a conexão QR Code, desde que ele possa receber um SMS ou ligação de verificação.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-border/50 bg-muted/20 px-4 rounded-lg">
                <AccordionTrigger className="hover:no-underline font-semibold">O Chathook funciona com Chatwoot?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim, nossa infraestrutura é otimizada e conta com uma versão avançada baseada na tecnologia do Chatwoot, com recursos exclusivos criados pela nossa equipe.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-border/50 bg-muted/20 px-4 rounded-lg">
                <AccordionTrigger className="hover:no-underline font-semibold">Posso integrar com IA?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Com certeza! O Chathook possui integrações nativas e via webhook para ferramentas de IA como OpenAI, Typebot e Dialogflow para automação inteligente.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border border-border/50 bg-muted/20 px-4 rounded-lg">
                <AccordionTrigger className="hover:no-underline font-semibold">Posso usar n8n?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim, temos total compatibilidade com o n8n, permitindo que você crie automações complexas conectando seu CRM a milhares de outros aplicativos.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-transparent border border-primary/20 rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-black italic mb-6">
            Transforme seu atendimento com o Chathook.
          </h2>
          <Button size="lg" className="text-lg h-14 px-8 font-bold gap-2 group" onClick={() => window.open('https://app.chathook.com.br/trial', '_blank')}>
            Solicitar Demonstração
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
