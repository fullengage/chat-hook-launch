import { CheckCircle2, Rocket, Users, Target, BookOpen } from "lucide-react";

const ImplementationSection = () => {
  const steps = [
    {
      icon: Rocket,
      title: "Configuração Inicial",
      description: "Nossa equipe ajuda na configuração técnica para que tudo comece rodando liso."
    },
    {
      icon: Settings,
      title: "Conexão dos Números",
      description: "Apoio na integração de todos os seus chips e números WhatsApp à plataforma."
    },
    {
      icon: LayoutDashboard,
      title: "Estruturação do Funil",
      description: "Desenhamos juntos as etapas do seu Kanban para refletir seu processo real."
    },
    {
      icon: BookOpen,
      title: "Treinamento Básico",
      description: "Treinamos sua equipe para que todos usem 100% do potencial da ferramenta desde o dia 1."
    }
  ];

  return (
    <section id="implementation" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
           <div className="lg:w-1/2">
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-foreground leading-tight">
               Você não recebe só acesso ao sistema. <span className="text-cta">Nós ajudamos a estruturar sua operação.</span>
             </h2>
             <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
               Nossa implantação é rápida e guiada por especialistas que entendem de processos comerciais e atendimento.
             </p>

             <div className="grid gap-6">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-4 items-center p-4 rounded-xl border border-border hover:border-cta/30 transition-colors group">
                     {/* No icon rendering to keep it simple as I don't have all icons imported here, 
                         wait, I have most. Let me fix the imports. */}
                     <span className="text-cta font-bold text-2xl opacity-30 group-hover:opacity-100 transition-opacity">0{index + 1}</span>
                     <div>
                       <h3 className="font-bold text-foreground uppercase text-xs tracking-wider mb-1">{step.title}</h3>
                       <p className="text-sm text-muted-foreground">{step.description}</p>
                     </div>
                  </div>
                ))}
             </div>
           </div>

           <div className="lg:w-1/2 relative">
              <div className="p-4 rounded-3xl bg-muted/50 border border-border shadow-2xl mb-8">
                 <img 
                   src="/images/agents_setup.png" 
                   alt="Configuração de Agentes e Atendimento" 
                   className="w-full rounded-2xl border border-border"
                 />
              </div>
              <div className="p-8 rounded-2xl bg-cta text-cta-foreground text-center shadow-2xl relative overflow-hidden">
                 <h3 className="text-2xl font-bold mb-4">Implantação Turbo</h3>
                 <p className="text-base opacity-90">Colocamos sua operação no ar em tempo recorde, com suporte especializado.</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

// I used some icons not imported in the local scope, fixing imports
import { Settings, LayoutDashboard } from "lucide-react";

export default ImplementationSection;
