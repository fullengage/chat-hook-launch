import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const TermsOfUse = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Button 
          variant="ghost" 
          className="mb-8 gap-2" 
          onClick={() => navigate(-1)}
        >
          <ChevronLeft className="w-4 h-4" />
          Voltar
        </Button>

        <h1 className="text-4xl font-black mb-8 italic">Termos de <span className="text-primary">Uso</span></h1>
        
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Bem-vindo ao Chathook CRM. Ao utilizar nosso site e serviços, você concorda em cumprir estes Termos de Uso.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">1. Descrição do Serviço</h2>
            <p>
              O Chathook CRM fornece uma plataforma de automação de WhatsApp, CRM de Kanban e inteligência artificial para empresas. O acesso ao teste de 7 dias é disponibilizado para avaliação e uso comercial limitado.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">2. Uso Permitido</h2>
            <p>
              Você concorda em usar o serviço apenas para fins lícitos e de acordo com as leis locais e internacionais de privacidade e comunicação. O uso para spam ou atividades fraudulentas resultará no bloqueio imediato da conta.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">3. Responsabilidades</h2>
            <p>
              Você é responsável por todas as informações fornecidas e pelas mensagens enviadas através de sua conta conectada ao Chathook CRM. Recomendamos que o uso observe as políticas de uso do WhatsApp.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">4. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo, logotipo e tecnologia associada ao Chathook CRM são de nossa propriedade intelectual e não podem ser reproduzidos sem autorização prévia.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">5. Modificações nos Termos</h2>
            <p>
              Podemos atualizar estes Termos de Uso periodicamente. O uso continuado após alterações constitui sua aceitação dos novos termos.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">6. Contato</h2>
            <p>
              Para dúvidas sobre nossos termos, entre em contato através do e-mail: contato@chathook.com.br
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
