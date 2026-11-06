import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Crown, Star, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PlansSection = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Starter B2B",
      badge: "Inicial",
      icon: Zap,
      description: "Ideal para empresas que querem iniciar a prospecção B2B orientada por dados.",
      features: [
        "Acesso à base de +2,45 mi empresas",
        "Busca por CNPJ, razão social e segmento",
        "Filtros por porte, UF, cidade e CNAE",
        "Listas e segmentações comerciais",
        "Painel de visão geral e oportunidades"
      ],
      bonuses: [
        {
          title: "Teste Grátis de 7 Dias + 20 Créditos",
          desc: "Conta liberada na hora para validar filtros, listas e contatos reais."
        },
        {
          title: "Guia Prático de Prospecção B2B",
          desc: "Como definir seu ICP e abordar decisores com alta taxa de resposta."
        }
      ],
      ctaPrimary: "Começar Teste Grátis",
      ctaSecondary: "Falar com Consultor",
      highlight: false
    },
    {
      name: "Pro Intelligence",
      badge: "Avançado",
      icon: Star,
      description: "Para equipes comerciais que buscam volume qualificado e inteligência de mercado.",
      features: [
        "Tudo do plano Starter B2B",
        "Maior pacote mensal de créditos B2B",
        "Inteligência de mercado e radar de setores",
        "Relatórios avançados de conversão",
        "Exportação e gestão de listas B2B",
        "Suporte prioritário via WhatsApp"
      ],
      bonuses: [
        {
          title: "Tudo do Plano Starter B2B",
          desc: "Acesso imediato ao teste grátis + materiais de prospecção."
        },
        {
          title: "Diagnóstico de ICP e Segmentação",
          desc: "Análise dos melhores segmentos (Indústria, Comércio, Serviços, Agro) para o seu negócio."
        }
      ],
      ctaPrimary: "Começar Teste Grátis",
      ctaSecondary: "Falar com Consultor",
      highlight: false
    },
    {
      name: "Business Scale",
      badge: "Opção recomendada",
      icon: Crown,
      description: "A solução completa de inteligência de dados B2B, automação e escala comercial.",
      features: [
        "Volume elevado de créditos e buscas",
        "Inteligência de mercado B2B completa",
        "Módulos de Automação e Integrações",
        "Múltiplos usuários da equipe comercial",
        "Insights preditivos por segmento e porte",
        "Acompanhamento estratégico dedicado"
      ],
      bonuses: [
        {
          title: "Onboarding Estratégico Deepson",
          desc: "Configuração de listas, filtros de ICP e integrações com seu processo comercial."
        },
        {
          title: "Mapeamento de Oportunidades B2B",
          desc: "Identificação das regiões e CNAEs com maior potencial de compra para sua solução."
        },
        {
          title: "Consultoria de Escala Outbound",
          desc: "Acompanhamento de métricas de qualificação e performance comercial."
        }
      ],
      ctaPrimary: "Começar Teste Grátis",
      ctaSecondary: "Falar com Consultor",
      highlight: true
    },
    {
      name: "Enterprise",
      badge: "Corporativo",
      icon: Check,
      description: "Soluções sob medida para grandes operações B2B, integrações via API e dados customizados.",
      features: [
        "Volume customizado de créditos e dados",
        "Integrações dedicadas via API / Webhook",
        "Enriquecimento de base em larga escala",
        "Múltiplas unidades de negócio"
      ],
      bonuses: [
        {
          title: "Gerente de Contas Exclusivo",
          desc: "Atendimento consultivo dedicado e SLA prioritário para sua operação."
        }
      ],
      ctaPrimary: "Fale com Vendas",
      ctaSecondary: null,
      highlight: false
    }
  ];

  const handleContactSales = () => {
    window.open("https://api.whatsapp.com/send/?phone=5511955501090&text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20consultor%20sobre%20os%20planos%20da%20Deepson.", "_blank");
  };

  const handleFreeTrial = () => {
    const formElement = document.getElementById("trial-form-section");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/teste-gratis");
    }
  };

  return (
    <section id="plans-section" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground uppercase tracking-tight italic">
            Planos para Escalar sua <span className="text-primary">Prospecção B2B</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comece agora com 7 dias grátis e 20 créditos liberados na hora — sem precisar de cartão de crédito.
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
                  <p className="text-xs font-bold uppercase tracking-wider text-primary mb-3">🎁 Vantagens Inclusas:</p>
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
            Todas as assinaturas incluem atualizações constantes da base B2B e suporte especializado.
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-primary">
            <span>Tem dúvidas sobre qual plano escolher?</span>
            <button 
              onClick={handleContactSales}
              className="underline hover:no-underline transition-all duration-200 font-bold"
            >
              Fale conosco no WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
