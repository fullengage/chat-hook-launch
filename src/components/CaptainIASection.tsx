import { Sparkles, Brain, Target, Zap } from "lucide-react";

const CaptainIASection = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Respostas em Tempo Real",
      description: "O Captain IA responde dúvidas frequentes 24/7, garantindo que nenhum cliente fique esperando."
    },
    {
      icon: Brain,
      title: "Apoio Técnico e Treinamento",
      description: "Treine a IA com seus próprios FAQs, histórico de conversas e documentos da empresa."
    },
    {
      icon: Target,
      title: "Eliminação de Gargalos",
      description: "Reduza o volume de tarefas repetitivas e deixe sua equipe livre para negociações complexas."
    },
    {
      icon: Zap,
      title: "Assistência aos Atendentes",
      description: "A IA sugere respostas e resume conversas para agilizar o trabalho humano no dia a dia."
    }
  ];

  return (
    <section id="captain-ia" className="py-24 bg-muted/10 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
          {/* Visualization */}
          <div className="lg:w-1/2 relative">
            <div className="p-4 rounded-3xl bg-muted/50 border border-border shadow-2xl relative z-10">
               <img 
                 src="/images/captain_system.png" 
                 alt="Configuração do Captain IA" 
                 className="w-full rounded-2xl border border-border"
               />
            </div>
            
            {/* Floating Chat Message */}
            <div className="absolute -bottom-10 -left-10 w-80 p-3 rounded-2xl bg-background border border-border shadow-2xl hidden md:block z-20">
               <img 
                 src="/images/captain_messages.png" 
                 alt="Captain IA em Ação" 
                 className="w-full rounded-xl"
               />
               <p className="mt-2 text-[10px] text-center text-muted-foreground font-medium uppercase tracking-widest">IA Respondendo em Tempo Real</p>
            </div>

            {/* Decorative Circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Pilar 02: Inteligência Artificial</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-foreground leading-tight">
              Respostas <span className="text-primary">inteligentes</span> na hora certa
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              O Captain IA não é apenas um bot. Ele ajuda a responder perguntas recorrentes, apoiar atendentes e acelerar o atendimento com base na inteligência do seu negócio.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center shadow-sm">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground leading-tight">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaptainIASection;
