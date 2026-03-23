import { Users, UserPlus, Eye, MessageSquare, History, ShieldCheck } from "lucide-react";

const TeamSection = () => {
  const teamFeatures = [
    {
      icon: UserPlus,
      title: "Vários Atendentes no Mesmo Ambiente",
      description: "Sua equipe trabalhando de forma colaborativa, sem precisar de vários celulares ou logins dispersos."
    },
    {
      icon: Eye,
      title: "Monitoramento em Tempo Real",
      description: "Gestores podem acompanhar o que está sendo falado, garantindo qualidade e suporte ao time."
    },
    {
      icon: History,
      title: "Histórico Compartilhado",
      description: "Mesmo que um atendente saia, a conversa e o contexto permanecem vivos na empresa."
    },
    {
      icon: ShieldCheck,
      title: "Continuidade de Atendimento",
      description: "O cliente pode ser atendido por diferentes pessoas da equipe sem perder o fio da meada."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Feito para <span className="text-primary">Equipes de Alta Performance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            O ChatHook não é para uso individual. É uma plataforma robusta para empresas que profissionalizam o atendimento.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
          <div className="lg:w-1/2 grid md:grid-cols-1 gap-12">
            {teamFeatures.map((feature, index) => (
              <div key={index} className="flex gap-6 items-start">
                 <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                 </div>
              </div>
            ))}
          </div>

          <div className="lg:w-1/2 relative">
             <div className="p-4 rounded-3xl bg-muted/50 border border-border shadow-2xl">
                <img 
                  src="/images/teams_setup.png" 
                  alt="Configuração de Equipes" 
                  className="w-full rounded-2xl border border-border"
                />
             </div>
             {/* Floating Info */}
             <div className="absolute -top-8 -right-8 p-6 rounded-2xl bg-background border border-border shadow-xl hidden md:block">
                <p className="text-sm font-bold text-foreground mb-1">Estrutura Multi-Agente</p>
                <p className="text-xs text-muted-foreground">Distribuição automática de leads.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
