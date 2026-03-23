import { CheckCircle2, Zap, LayoutDashboard, Bot, CreditCard, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const LowTicketLP = () => {
  const goToOffer = () => {
    window.open("https://wa.me/5511955501090?text=Olá! Vi a oferta especial de R$ 47 e gostaria de assinar o plano Start.", "_blank");
  };

  return (
    <div className="min-h-screen bg-[#050505] text-foreground font-sans selection:bg-primary/30 scroll-smooth">
      {/* Top Banner - Scarcity */}
      <div className="bg-primary text-primary-foreground py-2 text-center text-xs font-black tracking-widest uppercase">
        Oferta de Lançamento: Implantação Grátis em 48h (Válido para hoje)
      </div>

      <header className="py-6 container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
           <img src="/icons.png" alt="Logo" className="w-16 h-16" />
        </div>
        <Button variant="outline" size="sm" className="border-white/10 text-white/60 hover:text-white" onClick={goToOffer}>
          Entrar agora
        </Button>
      </header>

      <main>
        {/* Simple Hero */}
        <section className="py-20 lg:py-40 relative">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary font-bold text-[10px] tracking-widest mb-8">
               <Sparkles className="w-3 h-3" />
               SOLUÇÃO DEFINITIVA PARA WHATSAPP
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.95] mb-8">
              Organize seu WhatsApp e <span className="text-primary italic">escale suas vendas</span> por apenas R$ 47/mês.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
              Toda a potência do CRM ChatHook por um valor menor que um cafezinho por dia. Kanban, multi-atendentes e IA configurada em <span className="text-foreground font-bold underline decoration-primary">apenas 48h</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
               <Button onClick={goToOffer} className="h-16 px-10 text-xl font-black rounded-2xl shadow-[0_0_40px_-10px_rgba(31,166,102,0.6)] hover:scale-105 transition-transform group">
                 QUERO MINHA CONTA AGORA
                 <Zap className="ml-2 w-5 h-5 fill-current" />
               </Button>
               <p className="text-sm text-muted-foreground flex items-center gap-2">
                 <CreditCard className="w-4 h-4" />
                 Ativação imediata via WhatsApp
               </p>
            </div>
          </div>
        </section>

        {/* The Offer Card - The Meat */}
        <section className="py-24 container mx-auto px-4">
           <div className="max-w-5xl mx-auto bg-card border border-white/5 rounded-[40px] overflow-hidden shadow-2xl relative">
              <div className="absolute top-0 right-0 p-8">
                 <div className="w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
              </div>

              <div className="grid md:grid-cols-2">
                 <div className="p-12 lg:p-16 border-r border-white/5">
                    <h2 className="text-3xl font-black mb-10">O que você leva no <span className="text-primary">Plano Start:</span></h2>
                    <ul className="space-y-6">
                       {[
                         { icon: LayoutDashboard, t: "Kanban Ilimitado", d: "Visualize seu funil e mova leads com um clique." },
                         { icon: Bot, t: "Captain IA Basic", d: "Automação inteligente para perguntas repetitivas." },
                         { icon: Zap, t: "Multi-atendentes", d: "Equipe inteira em um só número oficial." },
                         { icon: CheckCircle2, t: "Implantação em 48h", d: "Deixamos tudo pronto para você começar." }
                       ].map((item, i) => (
                         <li key={i} className="flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                               <item.icon className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                               <h4 className="font-bold text-foreground">{item.t}</h4>
                               <p className="text-sm text-muted-foreground leading-snug">{item.d}</p>
                            </div>
                         </li>
                       ))}
                    </ul>
                 </div>
                 
                 <div className="p-12 lg:p-16 bg-muted/20 flex flex-col justify-center items-center text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">Acesso Vitalício à Promoção</p>
                    <div className="flex items-baseline gap-2 mb-4">
                       <span className="text-2xl text-muted-foreground line-through">R$ 147</span>
                       <span className="text-2xl font-bold">por apenas</span>
                    </div>
                    <div className="flex items-baseline gap-1 mb-8">
                       <span className="text-4xl font-bold italic">R$</span>
                       <span className="text-8xl font-black tracking-tighter text-primary">47</span>
                       <span className="text-xl text-muted-foreground">/mês</span>
                    </div>
                    
                    <Button onClick={goToOffer} className="w-full h-16 text-xl font-black rounded-2xl mb-6">
                       APROVEITAR AGORA
                    </Button>
                    <p className="text-xs text-muted-foreground">Cancele quando quiser. Sem letras miúdas.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Short social proof */}
        <section className="py-24 text-center">
           <h3 className="text-xl font-bold text-muted-foreground mb-12">CONFIADO POR QUEM VENDE TODO DIA</h3>
           <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale grayscale-0 hover:opacity-60 transition-all">
              {/* This would be logos */}
              <span className="text-2xl font-black tracking-widest">ECOMMERCE+</span>
              <span className="text-2xl font-black tracking-widest">SAASFLOW</span>
              <span className="text-2xl font-black tracking-widest">SOLUTIONS</span>
              <span className="text-2xl font-black tracking-widest">IMOB+</span>
           </div>
        </section>
      </main>

      <footer className="py-12 border-t border-border/10 text-center">
        <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
          © 2026 ChatHook CRM - O segredo das operações que escalam no WhatsApp.
        </p>
      </footer>
    </div>
  );
};

export default LowTicketLP;
