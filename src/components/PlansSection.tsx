import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Crown, Star, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PlansSection = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Starter",
      badge: "Inicial",
      icon: Zap,
      description: "Ideal para pequenos negócios que estão começando no digital.",
      features: [
        "1 número de WhatsApp",
        "Até 3 atendentes",
        "Kanban de Vendas",
        "Captain IA",
        "Relatórios básicos"
      ],
      bonuses: [
        {
          title: "Implantação Estratégica do ChatHook",
          desc: "Configuração completa do sistema, funis, equipes, automações e IA."
        },
        {
          title: "Treinamento de IA e Automação para Usuários ChatHook",
          desc: "Aprenda a criar agentes, automações e utilizar IA para vender mais."
        }
      ],
      ctaPrimary: "Começar Teste Grátis",
      ctaSecondary: "Falar com Consultor",
      highlight: false
    },
    {
      name: "Pro",
      badge: "Avançado",
      icon: Star,
      description: "Para empresas que precisam de mais escala e suporte profissional.",
      features: [
        "Até 3 números",
        "Até 10 atendentes",
        "Kanban de Vendas",
        "Captain IA",
        "Relatórios básicos",
        "Suporte e treinamento"
      ],
      bonuses: [
        {
          title: "Tudo do Plano Starter",
          desc: "Implantação Estratégica + Treinamento de IA e Automação."
        },
        {
          title: "Consultoria Comercial e Processos de Vendas",
          desc: "Diagnóstico do processo comercial, atendimento, follow-up e conversão."
        }
      ],
      ctaPrimary: "Começar Teste Grátis",
      ctaSecondary: "Falar com Consultor",
      highlight: false
    },
    {
      name: "Business",
      badge: "Opção recomendada",
      icon: Crown,
      description: "A solução completa para operações robustas e múltiplos times.",
      features: [
        "20 números",
        "20 atendentes",
        "Kanban de Vendas",
        "Captain IA",
        "Relatórios básicos",
        "Suporte, treinamento e instalação"
      ],
      bonuses: [
        {
          title: "Tudo dos Planos Starter e Pro",
          desc: "Implantação + Treinamento + Consultoria Comercial."
        },
        {
          title: "Diagnóstico Estratégico de Negócios",
          desc: "Análise de processos, gargalos, oportunidades e plano de crescimento."
        },
        {
          title: "Consultoria de Acompanhamento de Resultados",
          desc: "Consultoria contínua para acompanhamento de resultados."
        }
      ],
      ctaPrimary: "Começar Teste Grátis",
      ctaSecondary: "Falar com Consultor",
      highlight: true
    },
    {
      name: "Personalizado",
      badge: "Corporativo",
      icon: Check,
      description: "Soluções sob medida para grandes operações e ONGs.",
      features: [
        "Solução sob medida para ONGs",
        "Empresas com alto faturamento",
        "Múltiplas filiais e PDVs"
      ],
      bonuses: [
        {
          title: "Suporte Dedicado",
          desc: "Gerente de contas exclusivo e SLA de atendimento prioritário."
        }
      ],
      ctaPrimary: "Fale com Vendas",
      ctaSecondary: null,
      highlight: false
    }
  ];

  const handleContactSales = () => {
    window.open("https://api.whatsapp.com/send/?phone=5511955501090&text=Olá! Gostaria de falar com um consultor sobre os planos e bônus do ChatHook.", "_blank");
  };

  const handleFreeTrial = () => {
    navigate("/teste-gratis");
  };

  return (
    <section id="plans-section" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground uppercase tracking-tight italic">
            Planos de Teste com <span className="text-primary">Bônus Exclusivos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ative seu teste gratuito de 7 dias e garanta nossa implantação estratégica assistida e treinamentos exclusivos.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 max-w-7xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover group flex flex-col justify-between ${
                plan.highlight 
                  ? 'border-cta shadow-button bg-gradient-card scale-105 z-10' 
                  : 'border-border shadow-card bg-gradient-card hover:border-cta/50'
              }`}
            >
              <div>
                {/* Highlight Badge */}
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-cta text-cta-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-button whitespace-nowrap">
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
                <h3 className="text-2xl font-bold mb-2 text-foreground flex items-center gap-2">
                  {plan.highlight && <plan.icon className="w-6 h-6 text-cta animate-pulse" />}
                  {plan.name}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {plan.description}
                </p>

                {/* Features Section */}
                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Recursos:</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-muted-foreground leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Divider */}
                <div className="border-t border-border/50 my-6" />

                {/* Bonuses Section */}
                <div className="mb-8">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary mb-3">🎁 Bônus Inclusos:</p>
                  <ul className="space-y-4">
                    {plan.bonuses.map((bonus, bonusIndex) => (
                      <li key={bonusIndex} className="bg-primary/5 border border-primary/10 rounded-xl p-3 flex flex-col gap-1">
                        <span className="text-xs font-extrabold text-foreground flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                          {bonus.title}
                        </span>
                        <span className="text-[10px] text-muted-foreground leading-normal">
                          {bonus.desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-3 mt-auto">
                <Button 
                  variant={plan.highlight ? "cta" : "default"}
                  size="lg" 
                  className="w-full font-bold"
                  onClick={() => {
                    if (plan.ctaPrimary === "Fale com Vendas" || plan.ctaPrimary === "Falar com Vendas") {
                      handleContactSales();
                    } else {
                      handleFreeTrial();
                    }
                  }}
                >
                  {plan.ctaPrimary}
                </Button>
                
                {plan.ctaSecondary && (
                  <Button 
                    variant="outline-primary" 
                    size="lg" 
                    className="w-full font-bold"
                    onClick={handleContactSales}
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