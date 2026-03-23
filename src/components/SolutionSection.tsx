import { CheckCircle2, LayoutDashboard, UserPlus, Bot, ShieldCheck } from "lucide-react";

const SolutionSection = () => {
  const solutions = [
    {
      icon: LayoutDashboard,
      title: "CRM Comercial e Funil Visual",
      description: "Organize seus contatos em etapas de vendas, acompanhando o progresso de cada oportunidade em tempo real."
    },
    {
      icon: UserPlus,
      title: "Central de Atendimento Multicanal",
      description: "Múltiplos atendentes em um único ambiente, centralizando toda a comunicação da sua empresa."
    },
    {
      icon: Bot,
      title: "Automação com IA (Captain IA)",
      description: "Assistente inteligente que responde perguntas, automatiza rotinas e reduz a carga de trabalho da sua equipe."
    },
    {
      icon: ShieldCheck,
      title: "Gestão e Monitoramento",
      description: "Tenha controle total sobre o histórico de conversas, indicadores de performance e produtividade do seu time."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
          {/* Left: Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-foreground leading-tight">
              O ChatHook transforma <span className="text-primary">conversas em processos</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Centralize números, organize etapas do funil, acompanhe a equipe e ganhe velocidade com o Captain IA. 
              Sua operação comercial operando de forma profissional e escalável.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <solution.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">{solution.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Mockup/Visual (I'll use a stylized container) */}
          <div className="lg:w-1/2 relative">
            <div className="p-4 rounded-3xl bg-muted/50 border border-border shadow-2xl backdrop-blur-sm overflow-hidden group">
               <img 
                 src="/images/kanban_quick_icon.png" 
                 alt="Interface CRM ChatHook" 
                 className="w-full rounded-2xl transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
