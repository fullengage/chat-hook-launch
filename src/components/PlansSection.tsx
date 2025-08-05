import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Crown, Star, Zap, ArrowRight } from "lucide-react";

const PlansSection = () => {
  const plans = [
    {
      name: "Light",
      badge: "Começando",
      description: "Ideal para quem está começando com automação",
      price: "R$ 90",
      period: "/mês por 3 meses",
      originalPrice: null,
      features: [
        "1 número de WhatsApp",
        "1 Agente IA básico",
        "Disparo em massa + captura de leads",
        "Suporte por WhatsApp (30 dias humanos + IA)",
        "Sem fidelidade"
      ],
      ctaPrimary: "Compre agora",
      ctaSecondary: "Teste grátis por 7 dias",
      highlight: false,
      icon: Zap
    },
    {
      name: "Basic",
      badge: "Mais Popular",
      description: "Para quem já faz marketing e quer converter mais",
      price: "R$ 427",
      period: "/mês",
      originalPrice: null,
      features: [
        "1 a 5 números de WhatsApp",
        "1 Agente IA básico",
        "Análises básicas de performance",
        "Centralização da comunicação",
        "Suporte especializado"
      ],
      ctaPrimary: "Compre agora",
      ctaSecondary: "Fale com vendas",
      highlight: true,
      icon: Star
    },
    {
      name: "Pro",
      badge: "Otimização",
      description: "Para quem já tem estratégia e busca melhorar desempenho",
      price: "R$ 1.121",
      period: "/mês",
      originalPrice: null,
      features: [
        "1 a 5 números de WhatsApp",
        "1 Agente IA básico",
        "Criação de testes com chatbot",
        "Métricas de qualificação de leads",
        "Integração com marketing e vendas",
        "Suporte por chat, e-mail e consultoria"
      ],
      ctaPrimary: "Fale com vendas",
      ctaSecondary: null,
      highlight: false,
      icon: ArrowRight
    },
    {
      name: "Advanced",
      badge: "Solução Completa",
      description: "Solução completa para quem precisa de apoio técnico e estratégico",
      price: "Sob consulta",
      period: "",
      originalPrice: null,
      features: [
        "Recursos avançados de IA",
        "Estratégia personalizada com especialistas",
        "Suporte via videochamada, WhatsApp e telefone",
        "Gerente de sucesso dedicado",
        "Integração customizada",
        "SLA garantido"
      ],
      ctaPrimary: "Fale com vendas",
      ctaSecondary: null,
      highlight: false,
      icon: Crown
    }
  ];

  const handleContactSales = () => {
    // Trigger WhatsApp contact
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de falar sobre os planos do Chathook.", "_blank");
  };

  const handleFreeTrial = () => {
    // Redirect to signup or trigger modal
    alert("Redirecionando para teste grátis...");
  };

  const handlePurchase = (planName: string) => {
    // Redirect to purchase flow
    alert(`Redirecionando para compra do plano ${planName}...`);
  };

  return (
    <section id="plans-section" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Escolha o plano ideal para{" "}
            <span className="text-primary">seu negócio</span>
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
                  ? 'border-primary shadow-card-hover bg-gradient-card scale-105' 
                  : 'border-border shadow-card bg-gradient-card hover:border-primary/50'
              }`}
            >
              {/* Highlight Badge */}
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-button">
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
                  <span className="text-3xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">
                    {plan.period}
                  </span>
                </div>
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
                      handlePurchase(plan.name);
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