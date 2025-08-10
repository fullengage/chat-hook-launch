import { Smartphone, Bot, BarChart3 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Smartphone,
      title: "Conecte seu WhatsApp",
      description: "Integre seus números de WhatsApp à plataforma em poucos cliques. Processo simples e seguro.",
      step: "01"
    },
    {
      icon: Bot,
      title: "Ative o Agente IA e capture leads",
      description: "Configure seu assistente virtual para responder automaticamente e qualificar leads 24/7.",
      step: "02"
    },
    {
      icon: BarChart3,
      title: "Centralize e acompanhe os resultados",
      description: "Monitore todas as conversas em um só lugar e acompanhe métricas de performance em tempo real.",
      step: "03"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Como funciona o{" "}
            <span className="text-primary">Chathook</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Automatize seu WhatsApp em 3 passos simples e comece a vender mais hoje mesmo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary to-secondary z-0 transform translate-x-4 lg:translate-x-8">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                  </div>
                </div>
              )}

              {/* Step Card */}
              <div className="relative z-10 bg-gradient-card p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 border border-border/50">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-button">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Pronto para começar? fazemos sua primeira configuração Gratis.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
            <span className="w-3 h-3 bg-primary rounded-full animate-ping"></span>
            <span className="text-primary font-medium">Ganhe agilidade, padronização e produtividade com automação</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;