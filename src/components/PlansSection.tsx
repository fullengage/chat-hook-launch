import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Crown, Star, Zap, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PlansSection = () => {
  const navigate = useNavigate();
  const plans = [
    {
      name: "Starter",
      badge: "Inicial",
      icon: Zap,
      price: "R$ 47",
      period: "/1º mês",
      renewalPrice: "Depois R$ 297/mês",
      description: "Ideal para pequenos negócios que estão começando no digital.",
      features: [
        "1 número de WhatsApp",
        "Até 3 atendentes",
        "Kanban de Vendas",
        "Captain IA",
        "Relatórios básicos"
      ],
      ctaPrimary: "Assinar Agora",
      ctaSecondary: "Teste grátis por 7 dias",
      checkoutUrl: "https://pay.kiwify.com.br/2r4Dj3f",
      highlight: false
    },
    {
      name: "Pro",
      badge: "Avançado",
      icon: Star,
      price: "R$ 59",
      period: "/1º mês",
      renewalPrice: "Depois R$ 597/mês",
      description: "Para empresas que precisam de mais escala e suporte profissional.",
      features: [
        "Até 3 números",
        "Até 10 atendentes",
        "Kanban de Vendas",
        "Captain IA",
        "Relatórios básicos",
        "Suporte e treinamento"
      ],
      ctaPrimary: "Assinar Agora",
      ctaSecondary: "Teste grátis por 7 dias",
      checkoutUrl: "https://pay.kiwify.com.br/om4DJy6",
      highlight: false
    },
    {
      name: "Business",
      badge: "Mais Escolhido",
      icon: Crown,
      price: "R$ 197",
      period: "/1º mês",
      renewalPrice: "Depois R$ 1.197/mês",
      description: "A solução completa para operações robustas e múltiplos times.",
      features: [
        "20 números",
        "20 atendentes",
        "Kanban de Vendas",
        "Captain IA",
        "Relatórios básicos",
        "Suporte, treinamento e instalação"
      ],
      ctaPrimary: "Assinar Agora",
      ctaSecondary: "Teste grátis por 7 dias",
      checkoutUrl: "https://pay.kiwify.com.br/v1E0AXc",
      highlight: true
    },
    {
      name: "Personalizado",
      badge: "Corporativo",
      icon: Check,
      price: "Sob Consulta",
      period: "",
      renewalPrice: "",
      description: "Soluções sob medida para grandes operações e ONGs.",
      features: [
        "Solução sob medida para ONGs",
        "Empresas com alto faturamento",
        "Múltiplas filiais e PDVs"
      ],
      ctaPrimary: "Fale com vendas",
      ctaSecondary: null,
      highlight: false
    }
  ];

  const handleContactSales = () => {
    window.open("https://api.whatsapp.com/send/?phone=5511955501090&text&type=phone_number&app_absent=0", "_blank");
  };

  const handleFreeTrial = () => {
    navigate("/teste-gratis");
  };

  const handlePurchase = (url: string) => {
    if (url) {
      window.open(url, "_blank");
    } else {
      handleContactSales();
    }
  };

  return (
    <section id="plans-section" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Escolha a <span className="text-primary">Escalabilidade Ideal</span> para o seu Negócio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Planos flexíveis que crescem com sua empresa. Comece hoje e veja resultados imediatos.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover group ${
                plan.highlight 
                  ? 'border-cta shadow-button bg-gradient-card scale-105' 
                  : 'border-border shadow-card bg-gradient-card hover:border-cta/50'
              }`}
            >
              {/* Highlight Badge */}
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-cta text-cta-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-button">
                    ⭐ {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan Badge */}
              {!plan.highlight && (
                <div className="flex items-center gap-2 mb-4">
                  <plan.icon className="w-5 h-5 text-primary" />
                  <span className="text-primary font-semibold text-sm">{plan.badge}</span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold mb-2 text-foreground">
                {plan.name}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className={`text-4xl font-black ${plan.highlight ? 'text-cta' : 'text-foreground'}`}>
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground font-medium">
                    {plan.period}
                  </span>
                </div>
                {plan.renewalPrice && (
                  <p className="text-xs text-muted-foreground mt-1 font-medium italic">
                    {plan.renewalPrice}
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="space-y-3 mt-auto">
                <Button 
                  variant={plan.highlight ? "cta" : "default"}
                  size="lg" 
                  className="w-full"
                  onClick={() => {
                    if (plan.ctaPrimary === "Fale com vendas") {
                      handleContactSales();
                    } else {
                      handlePurchase(plan.checkoutUrl);
                    }
                  }}
                >
                  {plan.ctaPrimary}
                </Button>
                
                {plan.ctaSecondary && (
                  <Button 
                    variant="outline-primary" 
                    size="lg" 
                    className="w-full"
                    onClick={() => {
                      if (plan.ctaSecondary === "Teste grátis por 7 dias") {
                        handleFreeTrial();
                      } else {
                        handleContactSales();
                      }
                    }}
                  >
                    {plan.ctaSecondary}
                  </Button>
                )}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Todas as assinaturas incluem atualizações gratuitas e suporte técnico.
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-primary">
            <span>Tem dúvidas?</span>
            <button 
              onClick={handleContactSales}
              className="underline hover:no-underline transition-all duration-200"
            >
              Fale conosco
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;