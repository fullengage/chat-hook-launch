import { CheckCircle2, LayoutDashboard, Activity } from "lucide-react";

const KanbanSection = () => {
  const points = [
    "Visão clara do funil de vendas e atendimento",
    "Organização de cada contato em etapas estratégicas",
    "Acompanhamento comercial preciso por lead",
    "Passagem de bastão fluida entre membros da equipe",
    "Histórico e notas internas em cada oportunidade"
  ];

  return (
    <section id="kanban" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <LayoutDashboard className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Pilar 01: CRM & Kanban</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-foreground leading-tight">
              Seu funil de vendas vivo dentro do <span className="text-primary">WhatsApp</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Visualize cada conversa, mova oportunidades entre etapas e mantenha o time alinhado. 
              Organize cada conversa em etapas do seu processo comercial e acompanhe o avanço de cada oportunidade com clareza.
            </p>

            <ul className="space-y-4 mb-12">
              {points.map((point, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </span>
                  <span className="font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visualization */}
          <div className="lg:w-1/2 relative">
            <div className="p-4 rounded-3xl bg-muted/50 border border-border shadow-2xl relative z-10">
              <img 
                src="/images/kanban_board.png" 
                alt="Kanban Board ChatHook" 
                className="w-full rounded-2xl border border-border"
              />
            </div>
            
            {/* Floating Element - Quick Modal */}
            <div className="absolute -bottom-10 -right-10 w-72 p-2 rounded-2xl bg-background border border-border shadow-2xl hidden md:block z-20">
               <img 
                 src="/images/kanban_quick_modal.png" 
                 alt="Quick Action Modal" 
                 className="w-full rounded-xl"
               />
               <p className="mt-2 text-[10px] text-center text-muted-foreground font-medium uppercase tracking-widest">Ações Rápidas no Funil</p>
            </div>

            {/* Indicator Badge */}
            <div className="absolute -top-6 -left-6 bg-green-500 text-white p-4 rounded-2xl shadow-xl flex flex-col gap-0 z-20">
               <span className="text-2xl font-bold italic">+35%</span>
               <span className="text-[10px] uppercase font-bold tracking-widest text-white/80">Conversão</span>
            </div>
            
            {/* Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KanbanSection;
