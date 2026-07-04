import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, Shield, Trash2, UserX, Database, FileX } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DataDeletion = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Button 
          variant="ghost" 
          className="mb-8 gap-2 hover:bg-muted" 
          onClick={() => navigate(-1)}
        >
          <ChevronLeft className="w-4 h-4" />
          Voltar
        </Button>

        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-primary/10 rounded-2xl text-primary">
            <Trash2 className="w-10 h-10" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-primary font-bold">Privacidade</span>
            <h1 className="text-4xl font-black italic">
              Solicitação de <span className="text-primary">Exclusão de Dados</span>
            </h1>
          </div>
        </div>

        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
          Sua privacidade é importante para nós. Caso deseje excluir seus dados pessoais armazenados pelo Chathook, você pode solicitar a exclusão de forma simples e segura.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">O que você pode solicitar:</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <UserX className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground">Exclusão da conta</h3>
                    <p className="text-sm text-muted-foreground">Removeremos sua conta de acesso ao nosso sistema e CRM.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Database className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground">Exclusão das conversas</h3>
                    <p className="text-sm text-muted-foreground">Apagaremos o histórico de mensagens e interações realizadas.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileX className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground">Exclusão dos dados pessoais</h3>
                    <p className="text-sm text-muted-foreground">Eliminaremos dados de contato, informações de faturamento e demais dados pessoais.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground">Revogação de consentimentos</h3>
                    <p className="text-sm text-muted-foreground">Cancelaremos autorizações prévias para uso de dados e comunicações.</p>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="bg-muted/30 border border-border/80 rounded-2xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                A solicitação será analisada para confirmação da identidade antes da exclusão.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Alguns dados poderão ser mantidos apenas quando exigidos por obrigações legais, regulatórias ou para o exercício regular de direitos, em conformidade com a LGPD.
              </p>
            </section>
            
            <section className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6">
              <h3 className="font-bold text-foreground mb-2">Contato Alternativo</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Caso prefira, você também pode enviar um email diretamente para nossa equipe de privacidade:
              </p>
              <a href="mailto:privacidade@chathook.com.br" className="text-primary font-bold hover:underline">
                privacidade@chathook.com.br
              </a>
            </section>
          </div>

          <div>
            <div className="bg-background border border-border rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-6">Formulário de Solicitação</h2>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input id="name" placeholder="Seu nome completo" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="seu.email@exemplo.com" required />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" placeholder="(00) 00000-0000" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa (opcional)</Label>
                    <Input id="company" placeholder="Nome da empresa" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="reason">Motivo da solicitação</Label>
                  <Input id="reason" placeholder="Ex: Encerramento de conta, LGPD, etc." required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea id="message" placeholder="Detalhe sua solicitação aqui..." className="min-h-[120px]" required />
                </div>
                
                <Button type="submit" className="w-full text-lg h-12 mt-4 font-bold">
                  Solicitar Exclusão
                </Button>
                
                <p className="text-xs text-center text-muted-foreground mt-4">
                  Após recebermos sua solicitação, responderemos em até 15 dias úteis.
                </p>
              </form>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Esta página atende aos requisitos da Lei Geral de Proteção de Dados (LGPD) e às políticas da Meta Platforms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataDeletion;
