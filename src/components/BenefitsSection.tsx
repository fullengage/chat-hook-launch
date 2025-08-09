import { Clock, Users, MessageSquare, TrendingUp } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Atendimento mais rápido",
      description: "Resposta automática instantânea 24/7. Seus clientes nunca mais ficam esperando.",
      stats: "3x mais rápido"
    },
    {
      icon: Users,
      title: "Equipes mais produtivas",
      description: "Libere sua equipe para focar no que realmente importa: fechar vendas.",
      stats: "50% menos tempo"
    },
    {
      icon: MessageSquare,
      title: "Conversas organizadas",
      description: "Centralize todos os atendimentos em uma única plataforma intuitiva.",
      stats: "100% organizadas"
    },
    {
      icon: TrendingUp,
      title: "Resultados visíveis",
      description: "Acompanhe métricas em tempo real e otimize suas estratégias continuamente.",
      stats: "+85% conversão"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Por que escolher o{" "}
            <span className="text-primary">Chathook?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforme a comunicação da sua empresa com benefícios comprovados
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-card p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 border border-border/50 text-center h-full">
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-primary-foreground" />
                </div>

                {/* Stats Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
                  <span className="text-primary font-bold text-sm">{benefit.stats}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-card p-12 rounded-3xl shadow-card border border-border/50 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              Pronto para revolucionar seus atendimentos?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Junte-se a centenas de empresas que já transformaram seus resultados com o Chathook
            </p>
            
            {/* Features List */}
            <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Setup em 10 minutos</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Suporte especializado</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Resultados garantidos</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-primary text-primary-foreground rounded-lg font-semibold shadow-button hover:shadow-card-hover transform hover:scale-105 transition-all duration-300">
                Começar teste grátis
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Falar com especialista
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;