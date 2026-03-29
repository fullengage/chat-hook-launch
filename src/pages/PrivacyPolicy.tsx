import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const PrivacyPolicy = () => {
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

        <h1 className="text-4xl font-black mb-8 italic italic italic">Política de <span className="text-primary">Privacidade</span></h1>
        
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Esta Política de Privacidade descreve como o Chathook CRM ("nós", "nosso") coleta, usa e protege suas informações pessoais ao utilizar nosso site e serviços.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">1. Coleta de Informações</h2>
            <p>
              Coletamos informações que você nos fornece diretamente, como nome, e-mail, número de WhatsApp e informações da empresa ao se cadastrar para um teste gratuito ou entrar em contato conosco.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">2. Uso das Informações</h2>
            <p>
              As informações coletadas são utilizadas para:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Providenciar, manter e melhorar nossos serviços;</li>
              <li>Entrar em contato para realizar a implantação do sistema;</li>
              <li>Enviar atualizações técnicas e mensagens de suporte;</li>
              <li>Prevenir atividades fraudulentas ou ilegais.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">3. Proteção de Dados (LGPD)</h2>
            <p>
              Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), garantimos que seus dados são processados de forma segura e transparente. Você tem o direito de solicitar a exclusão ou correção de seus dados a qualquer momento.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">4. Cookies</h2>
            <p>
              Utilizamos cookies para melhorar sua experiência de navegação e analisar o tráfego do site. Você pode gerenciar as preferências de cookies através das configurações do seu navegador.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">5. Contato</h2>
            <p>
              Para dúvidas sobre esta política, entre em contato através do e-mail: contato@chathook.com.br
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
