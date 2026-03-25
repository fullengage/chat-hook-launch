import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-automation.jpg";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const scrollToPlans = () => {
    const plansSection = document.getElementById('plans-section');
    plansSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scheduleDemo = () => {
    navigate("/teste-gratis");
  };

  const talkToSales = () => {
    navigate("/teste-gratis");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-8 bg-cta/10 border border-cta/20 rounded-full">
            <span className="text-cta font-bold tracking-wide">🚀 CRM Inteligente para WhatsApp</span>
          </div>
 
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white animate-fade-in">
            Transforme seu WhatsApp em um{" "}
            <span className="text-cta">CRM inteligente</span> de atendimento e vendas
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Organize conversas, acompanhe oportunidades no Kanban, automatize rotinas e use IA para responder mais rápido e vender melhor.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
            <Button 
              variant="cta" 
              size="xl" 
              onClick={scheduleDemo}
              className="w-full sm:w-auto"
            >
              Agendar demonstração
            </Button>
            <Button 
              variant="outline-primary" 
              size="xl" 
              onClick={talkToSales}
              className="w-full sm:w-auto"
            >
              Falar no WhatsApp
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground animate-fade-in">
            <div className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              <span>Sem fidelidade</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              <span>Suporte especializado</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              <span>Integração em minutos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;