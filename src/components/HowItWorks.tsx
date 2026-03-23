import { Smartphone, Bot, BarChart3, LayoutDashboard, Zap, Users, Activity } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: LayoutDashboard,
      title: "Conecta o WhatsApp",
      description: "Conecte seus números através do QR Code de forma simples e segura.",
      step: "01"
    },
    {
      icon: Zap,
      title: "Organiza Funis",
      description: "Estruture suas etapas de vendas e atendimento no Kanban visual.",
      step: "02"
    },
    {
      icon: Users,
      title: "Equipe Atende em Conjunto",
      description: "Distribua os leads entre o time e trabalhe de forma centralizada.",
      step: "03"
    },
    {
      icon: Bot,
      title: "IA Responde e Apoia",
      description: "O Captain IA entra em ação para acelerar respostas e resolver gargalos.",
      step: "04"
    },
    {
      icon: Activity,
      title: "Gestor Acompanha Indicadores",
      description: "Monitore toda a operação através de dashboards e relatórios de performance.",
      step: "05"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Como funciona o <span className="text-primary">ChatHook</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fluxo simplificado para transformar seu atendimento em uma máquina de vendas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-[2px] bg-primary/20 z-0">
                   <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/40"></div>
                </div>
              )}

              {/* Step Card */}
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Icon */}
                <div className="w-20 h-20 bg-background border-2 border-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:border-primary group-hover:scale-110 transition-all duration-300 shadow-sm relative">
                   <step.icon className="w-10 h-10 text-primary" />
                   <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm shadow-lg">
                      {step.step}
                   </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-3 text-foreground leading-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Real Visual Integration */}
        <div className="mt-24 max-w-5xl mx-auto p-4 rounded-3xl bg-muted/20 border border-border shadow-xl relative group">
           <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest rounded-full z-20">
              Interface Real: Conexão WAHA
           </div>
           <img 
             src="/images/connections_waha.png" 
             alt="Interface de Conexão WhatsApp" 
             className="w-full rounded-2xl border border-border shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]"
           />
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/5 rounded-full border border-primary/20">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-primary font-bold text-sm uppercase tracking-wider">Implantação Guiada e Rápida</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;