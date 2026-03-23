import { CheckCircle2, Zap, LayoutDashboard, Bot, ShieldCheck, Clock, AlertCircle, MessageSquareOff, UserMinus, BarChart3, Users, HelpCircle, ChevronDown, Check, Star, Rocket, Target, Shield, ZapIcon, Code } from "lucide-react";
import TrialForm from "@/components/TrialForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FreeTrialPage = () => {
   const navigate = useNavigate();

   const scrollToForm = () => {
      const formElement = document.getElementById('trial-form-section');
      formElement?.scrollIntoView({ behavior: 'smooth' });
   };

   return (
      <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 scroll-smooth">
         {/* Header / Logo */}
         <header className="py-3 lg:py-4 border-b border-border/10 bg-background/50 backdrop-blur-md sticky top-0 z-50">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
               <div className="flex items-center gap-3">
                  <img 
                     src="/icons.png" 
                     alt="Logo" 
                     className="w-16 h-16 md:w-20 md:h-20 object-contain cursor-pointer hover:scale-105 transition-transform" 
                     onClick={() => navigate("/")}
                  />
               </div>
               <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 md:gap-6">
                  <div className="hidden sm:flex items-center gap-2 text-[10px] md:text-sm text-muted-foreground bg-muted/30 px-4 py-2 rounded-full border border-border/10">
                     <ShieldCheck className="w-4 h-4 text-primary" />
                     <span className="font-bold uppercase tracking-widest leading-none">LGPD Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full font-bold border-primary/20 hover:bg-primary/5 transition-all text-sm h-11"
                        onClick={() => window.open("https://wa.me/5511955501090", "_blank")}
                     >
                        Falar com Consultor
                     </Button>
                     <Button
                        size="sm"
                        className="rounded-full font-bold shadow-lg shadow-primary/20 text-sm h-11 px-6"
                        onClick={scrollToForm}
                     >
                        Começar Teste Grátis
                     </Button>
                  </div>
               </div>
            </div>
         </header>

         <main>
            {/* Hero Section */}
            <section className="pt-0 pb-20 lg:pt-0 lg:pb-32 overflow-hidden relative">
               <div className="container mx-auto px-4">
                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-20">
                     {/* Content */}
                     <div className="lg:w-3/5 text-center lg:text-left space-y-8">

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-foreground mt-0 pt-0">
                           Pare de perder vendas no <span className="text-primary italic text-shadow-glow">caos do WhatsApp.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                           Leve sua operação para o <span className="text-foreground font-bold">próximo nível</span> com o CRM ChatHook. Organize mensagens, automatize respostas com IA e tenha visão total do seu funil.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4">
                           <div className="flex items-center -space-x-3">
                              {[1, 2, 3, 4].map(i => (
                                 <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
                                 </div>
                              ))}
                           </div>
                           <p className="text-sm text-muted-foreground font-medium">
                              Muitos empresários já descobriram o jeito mais inteligente de usar o WhatsApp na empresa.
                           </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4 lg:hidden">
                           <Button size="lg" className="w-full h-14 rounded-2xl font-bold shadow-xl shadow-primary/20" onClick={scrollToForm}>
                              Ativar Teste Grátis
                           </Button>
                           <Button variant="outline" size="lg" className="w-full h-14 rounded-2xl font-bold" onClick={() => window.open("https://wa.me/5511955501090", "_blank")}>
                              Falar com Consultor
                           </Button>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6 py-4">
                           <div className="flex items-center gap-4 bg-muted/30 p-4 rounded-2xl border border-border/10">
                              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                 <LayoutDashboard className="w-6 h-6 text-primary" />
                              </div>
                              <div>
                                 <p className="text-sm font-black text-foreground">Kanban Comercial</p>
                                 <p className="text-[12px] text-muted-foreground">Gestão visual completa do funil.</p>
                              </div>
                           </div>
                           <div className="flex items-center gap-4 bg-muted/30 p-4 rounded-2xl border border-border/10">
                              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                 <Bot className="w-6 h-6 text-primary" />
                              </div>
                              <div>
                                 <p className="text-sm font-black text-foreground">Captain IA 24/7</p>
                                 <p className="text-[12px] text-muted-foreground">Respostas inteligentes sem atrasos.</p>
                              </div>
                           </div>
                        </div>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                           <div className="flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-xl border border-primary/10">
                              <CheckCircle2 className="w-4 h-4 text-primary" />
                              <span className="font-bold text-[11px] uppercase tracking-wider">7 dias grátis</span>
                           </div>
                           <div className="flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-xl border border-primary/10">
                              <Clock className="w-4 h-4 text-primary" />
                              <span className="font-bold text-[11px] uppercase tracking-wider">implantação do sistema em 48h</span>
                           </div>
                           <div className="flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-xl border border-primary/10">
                              <ShieldCheck className="w-4 h-4 text-primary" />
                              <span className="font-bold text-[11px] uppercase tracking-wider">Sem Cartão</span>
                           </div>
                        </div>
                     </div>

                     {/* Form Section */}
                     <div id="trial-form-section" className="lg:w-2/5 w-full max-w-md mx-auto relative scroll-mt-32">
                        <div className="absolute -inset-4 bg-primary/20 rounded-[40px] blur-3xl -z-10 animate-pulse" />
                        <div className="bg-card border border-border/50 rounded-[32px] p-2 shadow-2xl relative overflow-hidden">
                           <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-primary" />
                           <TrialForm />
                        </div>
                        <div className="mt-8 flex flex-col items-center gap-4 text-center">
                           <div className="flex items-center gap-1 text-yellow-500">
                              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                           </div>
                           <p className="text-xs text-muted-foreground leading-relaxed italic">
                              "O ChatHook mudou nossa forma de vender. Saímos do caos para o controle total em 48h."
                              <br />
                              <span className="text-foreground font-bold not-italic">— Ricardo S., Diretor Comercial</span>
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
               <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />
            </section>

            {/* Benefits Section (Quickly) */}
            <section className="py-24 bg-muted/20 border-y border-border/10">
               <div className="container mx-auto px-4">
                  <div className="text-center mb-16">
                     <h2 className="text-3xl font-black mb-4">Por que migrar hoje?</h2>
                     <p className="text-muted-foreground">A diferença entre vender e perder o cliente está na agilidade e organização.</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                     <div className="p-8 rounded-3xl bg-background border border-border/50 hover:shadow-2xl transition-all">
                        <h3 className="text-xl font-bold mb-4">Implantação Express</h3>
                        <p className="text-muted-foreground">Em até 2 dias sua empresa está operando com Kanban, Multi-atendentes e IA configurada.</p>
                     </div>
                     <div className="p-8 rounded-3xl bg-background border border-border/50 hover:shadow-2xl transition-all">
                        <h3 className="text-xl font-bold mb-4">Central de Verdade</h3>
                        <p className="text-muted-foreground">Conecte vários números em um só lugar. Tenha histórico total e controle de quem atende o quê.</p>
                     </div>
                     <div className="p-8 rounded-3xl bg-background border border-border/50 hover:shadow-2xl transition-all">
                        <h3 className="text-xl font-bold mb-4">Produtividade Máxima</h3>
                        <p className="text-muted-foreground">Reduza tarefas repetitivas em 80% usando o Captain IA para qualificar leads e responder FAQs.</p>
                     </div>
                  </div>
               </div>
            </section>

            {/* Pain Points Section */}
            <section className="py-24 bg-muted/10 relative overflow-hidden">
               <div className="container mx-auto px-4">
                  <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
                     <h2 className="text-3xl md:text-5xl font-black tracking-tighter">O custo invisível do <span className="text-primary italic">caos no WhatsApp</span></h2>
                     <p className="text-lg text-muted-foreground">Cada minuto de desorganização é um lead que esfria e uma venda que você deixa na mesa.</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                     {[
                        { icon: MessageSquareOff, t: "Mensagens Perdidas", d: "Leads que desaparecem no fundo da caixa de entrada sem resposta." },
                        { icon: UserMinus, t: "Follow-up Esquecido", d: "Sua equipe esquece de retornar e o concorrente fecha a venda." },
                        { icon: BarChart3, t: "Falta de Visão", d: "Você não sabe quantas vendas estão abertas ou em que estágio estão." },
                        { icon: Users, t: "Equipe Sem Contexto", d: "O cliente explica a mesma coisa 3 vezes para pessoas diferentes." },
                        { icon: AlertCircle, t: "Sem Histórico", d: "Informações cruciais perdidas em prints e memórias individuais." },
                        { icon: Clock, t: "Gargalo de Tempo", d: "O gestor gasta horas apenas tentando entender o que está acontecendo." }
                     ].map((item, i) => (
                        <div key={i} className="p-8 rounded-[32px] bg-background border border-border/50 hover:border-primary/30 transition-all group">
                           <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                              <item.icon className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-colors" />
                           </div>
                           <h3 className="text-xl font-bold mb-3">{item.t}</h3>
                           <p className="text-muted-foreground text-sm leading-relaxed">{item.d}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* Product Showcase */}
            <section className="py-24 relative overflow-hidden">
               <div className="container mx-auto px-4">
                  <div className="text-center mb-20">
                     <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter">Sua operação em <span className="text-primary italic text-shadow-glow">outro patamar</span></h2>
                     <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Uma ferramenta completa para quem não quer apenas atender, mas sim vender em escala.</p>
                  </div>

                  <div className="space-y-32">
                     {/* Feature 1 */}
                     <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 space-y-6">
                           <div className="bg-primary/10 text-primary px-4 py-2 rounded-full w-fit font-bold text-xs uppercase tracking-widest">Controle Total</div>
                           <h3 className="text-4xl font-black leading-tight">Kanban Comercial: Nunca mais esqueça um lead</h3>
                           <p className="text-muted-foreground text-lg leading-relaxed">
                              Visualize toda sua jornada de vendas em colunas. Arraste e solte seus clientes conforme eles avançam no funil. Saiba exatamente quem precisa de atenção agora.
                           </p>
                           <ul className="space-y-4">
                              {[
                                 "Mova leads entre estágios filtrando por prioridade",
                                 "Tags personalizadas para segmentação rápida",
                                 "Histórico completo de cada interação no card"
                              ].map((item, i) => (
                                 <li key={i} className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-primary shrink-0" />
                                    <span className="font-medium">{item}</span>
                                 </li>
                              ))}
                           </ul>
                        </div>
                        <div className="lg:w-1/2 relative group">
                           <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-[40px] opacity-20 group-hover:opacity-40 transition-opacity" />
                           <img
                              src="/images/kanban_board.png"
                              alt="Kanban System"
                              className="rounded-[32px] border border-border/50 shadow-2xl relative z-10 hover:scale-[1.02] transition-transform duration-500"
                           />
                        </div>
                     </div>

                     {/* Feature 2 */}
                     <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                        <div className="lg:w-1/2 space-y-6">
                           <div className="bg-primary/10 text-primary px-4 py-2 rounded-full w-fit font-bold text-xs uppercase tracking-widest">Inteligência Artificial</div>
                           <h3 className="text-4xl font-black leading-tight">Captain IA: Atendimento 24/7 de alta qualidade</h3>
                           <p className="text-muted-foreground text-lg leading-relaxed">
                              Nossa IA aprende sobre seu negócio e qualifica seus leads automaticamente. Ela responde dúvidas frequentes e prepara o terreno para sua equipe fechar o negócio.
                           </p>
                           <ul className="space-y-4">
                              {[
                                 "Respostas instantâneas baseadas na sua base de dados",
                                 "Qualificação inteligente antes do transbordo humano",
                                 "Disponibilidade total, inclusive de madrugada e feriados"
                              ].map((item, i) => (
                                 <li key={i} className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-primary shrink-0" />
                                    <span className="font-medium">{item}</span>
                                 </li>
                              ))}
                           </ul>
                        </div>
                        <div className="lg:w-1/2 relative group">
                           <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-[40px] opacity-20 group-hover:opacity-40 transition-opacity" />
                           <img
                              src="/images/captain_system.png"
                              alt="IA System"
                              className="rounded-[32px] border border-border/50 shadow-2xl relative z-10 hover:scale-[1.02] transition-transform duration-500"
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* How it Works */}
            <section className="py-24 bg-muted/30">
               <div className="container mx-auto px-4">
                  <div className="text-center mb-16">
                     <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">Implantação rápida em <span className="text-primary italic">4 passos</span></h2>
                     <p className="text-muted-foreground text-lg max-w-xl mx-auto">Você não precisa ser expert. Nós cuidamos do pesado para você operar em tempo recorde.</p>
                  </div>

                  <div className="grid md:grid-cols-4 gap-8 relative">
                     <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary/10 -z-10" />
                     {[
                        { step: "01", t: "Conectar", d: "Conecte seus números de WhatsApp em segundos via QR Code." },
                        { step: "02", t: "Organizar", d: "Nossa equipe configura seu Kanban personalizado de vendas." },
                        { step: "03", t: "Automatizar", d: "Ative o Captain IA e configure suas mensagens de boas-vindas." },
                        { step: "04", t: "Escalar", d: "Acompanhe métricas, gerencie sua equipe e venda muito mais." }
                     ].map((s, i) => (
                        <div key={i} className="bg-background p-8 rounded-[32px] border border-border/50 text-center relative group hover:border-primary/50 transition-colors">
                           <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-black mx-auto mb-6 shadow-lg shadow-primary/20 text-lg group-hover:scale-110 transition-transform">
                              {s.step}
                           </div>
                           <h4 className="text-xl font-bold mb-3">{s.t}</h4>
                           <p className="text-muted-foreground text-sm leading-relaxed">{s.d}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* Who is it for */}
            <section className="py-24">
               <div className="container mx-auto px-4 text-center">
                  <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tighter italic">Ideal para quem busca <span className="text-primary">resultados</span></h2>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                     {[
                        { t: "Clínicas & Saúde", i: Shield },
                        { t: "Venda de Serviços", i: Rocket },
                        { t: "E-commerce & Ads", i: Target },
                        { t: "Imobiliárias", i: LayoutDashboard },
                        { t: "Educação & Cursos", i: Users },
                        { t: "SaaS & Tecnologia", i: Code },
                        { t: "Recuperação de Leads", i: ZapIcon },
                        { t: "Escala Comercial", i: BarChart3 }
                     ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center gap-4 p-8 rounded-[32px] border border-border/50 bg-muted/10 hover:bg-primary/5 hover:border-primary/20 transition-all">
                           <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center border border-border/50 shadow-sm">
                              <item.i className="w-6 h-6 text-primary" />
                           </div>
                           <span className="font-bold text-sm md:text-base">{item.t}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-muted/10">
               <div className="container mx-auto px-4 max-w-3xl">
                  <div className="text-center mb-16">
                     <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter">Perguntas <span className="text-primary italic">Frequentes</span></h2>
                     <p className="text-muted-foreground">Tudo o que você precisa saber para começar agora.</p>
                  </div>

                  <Accordion type="single" collapsible className="space-y-4">
                     {[
                        { q: "Precisa de cartão de crédito para os 7 dias?", a: "Não! Você pode começar seu teste gratuito agora mesmo sem cadastrar nenhum cartão. Queremos que você veja o valor antes de qualquer compromisso." },
                        { q: "Como funciona a implantação em 48h?", a: "Assim que você inicia o teste, nossa equipe de onboarding entra em contato para mapear seu processo e configurar sua conta para que você já comece a vender no novo formato em tempo recorde." },
                        { q: "Pode usar vários números de WhatsApp?", a: "Com certeza. O ChatHook foi feito para centralizar vários canais e números em um único painel, permitindo que sua equipe gerencie tudo de forma unificada." },
                        { q: "A IA é difícil de configurar?", a: "De forma alguma. O Captain IA já vem com modelos baseados em melhores práticas de vendas. Você só precisa alimentar as informações do seu negócio e ele começa a aprender." },
                        { q: "Posso cancelar a qualquer momento?", a: "Sim. Nossos planos são sem fidelidade. Você tem total liberdade para continuar ou encerrar quando desejar, sem multas." }
                     ].map((item, i) => (
                        <AccordionItem key={i} value={`item-${i}`} className="bg-background border border-border/50 rounded-2xl px-6 py-2 overflow-hidden shadow-sm">
                           <AccordionTrigger className="hover:no-underline font-bold text-left text-lg py-4">
                              {item.q}
                           </AccordionTrigger>
                           <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                              {item.a}
                           </AccordionContent>
                        </AccordionItem>
                     ))}
                  </Accordion>

                  <div className="mt-20 p-10 rounded-[40px] bg-primary text-primary-foreground text-center relative overflow-hidden group">
                     <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity" />
                     <h3 className="text-3xl font-black mb-6 italic tracking-tight">Pronto para organizar seu comercial?</h3>
                     <p className="mb-10 text-primary-foreground/90 text-lg">Inicie seus 7 dias grátis agora e veja a mágica acontecer.</p>
                     <Button
                        size="lg"
                        variant="secondary"
                        className="h-14 px-10 rounded-full font-black text-lg gap-2 shadow-xl hover:scale-105 transition-transform"
                        onClick={scrollToForm}
                     >
                        Começar Teste Agora
                        <Zap className="w-5 h-5 fill-current" />
                     </Button>
                  </div>
               </div>
            </section>
         </main>

         {/* Footer */}
         <footer className="py-20 border-t border-border/10">
            <div className="container mx-auto px-4 text-center space-y-8">
               <div className="flex justify-center">
                  <img src="/icons.png" alt="Logo" className="w-32 h-32 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
               </div>
               <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                  ChatHook CRM - Produtividade e Inteligência para suas vendas no WhatsApp.
               </p>
               <div className="flex justify-center gap-6">
                  <Button variant="link" className="text-muted-foreground hover:text-primary transition-colors">Termos de Uso</Button>
                  <Button variant="link" className="text-muted-foreground hover:text-primary transition-colors">Privacidade</Button>
               </div>
               <p className="text-xs text-muted-foreground">
                  © 2026 ChatHook CRM - Todos os direitos reservados.
               </p>
            </div>
         </footer>
      </div>
   );
};

export default FreeTrialPage;
