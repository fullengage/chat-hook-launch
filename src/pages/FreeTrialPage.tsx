import { useState, useEffect } from "react";
import {
   CheckCircle2,
   Zap,
   LayoutDashboard,
   ShieldCheck,
   Clock,
   AlertCircle,
   BarChart3,
   Users,
   Check,
   Rocket,
   Target,
   Shield,
   Code,
   Search,
   Database,
   TrendingUp,
   Filter,
   Building2,
   Sparkles
} from "lucide-react";
import TrialForm from "@/components/TrialForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import PlansSection from "@/components/PlansSection";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const FreeTrialPage = () => {
   const navigate = useNavigate();
   const [showExitPopup, setShowExitPopup] = useState(false);
   const [hasShownExit, setHasShownExit] = useState(false);

   useEffect(() => {
      const handleMouseLeave = (e: MouseEvent) => {
         if (e.clientY < 50 && !hasShownExit) {
            setShowExitPopup(true);
            setHasShownExit(true);
         }
      };

      document.addEventListener("mouseleave", handleMouseLeave);
      return () => {
         document.removeEventListener("mouseleave", handleMouseLeave);
      };
   }, [hasShownExit]);

   const scrollToForm = () => {
      const formElement = document.getElementById("trial-form-section");
      formElement?.scrollIntoView({ behavior: "smooth" });
   };

   const handleOpenChatwoot = () => {
      if (typeof window !== "undefined" && (window as unknown as { $chatwoot?: { toggle: (s: string) => void } }).$chatwoot) {
         (window as unknown as { $chatwoot: { toggle: (s: string) => void } }).$chatwoot.toggle("open");
      } else {
         window.open("https://wa.me/5511955501090?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Deepson.", "_blank");
      }
   };

   return (
      <div className="min-h-screen bg-[#040f21] text-foreground font-sans selection:bg-primary/30 scroll-smooth">
         {/* Header / Logo */}
         <header className="py-3 lg:py-4 border-b border-white/10 bg-[#040f21]/95 backdrop-blur-md sticky top-0 z-50">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
               <div className="flex items-center gap-3">
                  <img
                     src="/logo-deepson.png"
                     alt="Deepson — Inteligência de Dados B2B"
                     className="h-12 md:h-14 w-auto object-contain cursor-pointer hover:scale-105 transition-transform"
                     onClick={() => navigate("/")}
                  />
               </div>
               <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 md:gap-6">
                  <div className="hidden sm:flex items-center gap-2 text-[10px] md:text-sm text-slate-300 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                     <ShieldCheck className="w-4 h-4 text-primary" />
                     <span className="font-bold uppercase tracking-widest leading-none">LGPD Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full font-bold border-primary/30 text-white hover:bg-primary/10 transition-all text-sm h-11"
                        onClick={handleOpenChatwoot}
                     >
                        Falar com Especialista
                     </Button>
                     <Button
                        variant="cta"
                        size="sm"
                        className="rounded-full font-bold text-sm h-11 px-6"
                        onClick={scrollToForm}
                     >
                        Começar teste grátis sem cartão
                     </Button>
                  </div>
               </div>
            </div>
         </header>

         <main>
            {/* Hero Section */}
            <section className="pt-10 pb-20 lg:pt-14 lg:pb-32 overflow-hidden relative">
               <div className="container mx-auto px-4">
                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-20">
                     {/* Content */}
                     <div className="lg:w-3/5 text-center lg:text-left space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-extrabold uppercase tracking-wider">
                           <Sparkles className="w-3.5 h-3.5" />
                           Do seu site ao seu próximo cliente B2B
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95] text-white mt-0 pt-0">
                           Do seu site ao seu <span className="text-primary italic text-shadow-glow">próximo cliente B2B</span> em minutos.
                        </h1>

                        <p className="text-lg md:text-2xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                           Cole o seu site: a IA da <strong>Deepson</strong> entende o que você vende, monta seu cliente ideal (ICP e CNAEs), encontra as empresas certas com <strong>nota de aderência e motivo</strong>, libera contatos, decisores, sinais financeiros e escreve a abordagem comercial.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                           <div className="flex items-center gap-3 bg-primary/10 px-4 py-3 rounded-2xl border border-primary/20">
                              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                              <p className="text-sm text-slate-200 font-medium">
                                 Você recebe <span className="text-primary font-bold">20 créditos grátis por 7 dias</span>: dá para <span className="text-white font-bold">~10 empresas com contato e sinais financeiros</span>
                              </p>
                           </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4 lg:hidden">
                           <Button variant="cta" size="lg" className="w-full h-14 rounded-2xl font-bold" onClick={scrollToForm}>
                              Começar teste grátis sem cartão
                           </Button>
                           <Button variant="outline" size="lg" className="w-full h-14 rounded-2xl font-bold" onClick={handleOpenChatwoot}>
                              Falar com Especialista
                           </Button>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6 py-4 text-left">
                           <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                                 <Database className="w-6 h-6 text-primary" />
                              </div>
                              <div>
                                 <p className="text-sm font-black text-white">+2,45 Milhões de Empresas</p>
                                 <p className="text-[12px] text-slate-300">Busca por CNPJ, razão social, porte e segmento.</p>
                              </div>
                           </div>
                           <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                                 <TrendingUp className="w-6 h-6 text-primary" />
                              </div>
                              <div>
                                 <p className="text-sm font-black text-white">Radar de Oportunidades B2B</p>
                                 <p className="text-[12px] text-slate-300">Segmentações inteligentes e insights de mercado.</p>
                              </div>
                           </div>
                        </div>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                           <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-xl border border-primary/20">
                              <CheckCircle2 className="w-4 h-4 text-primary" />
                              <span className="font-bold text-[11px] text-white uppercase tracking-wider">7 dias grátis</span>
                           </div>
                           <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-xl border border-primary/20">
                              <Zap className="w-4 h-4 text-primary" />
                              <span className="font-bold text-[11px] text-white uppercase tracking-wider">20 créditos liberados na hora</span>
                           </div>
                           <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-xl border border-primary/20">
                              <ShieldCheck className="w-4 h-4 text-primary" />
                              <span className="font-bold text-[11px] text-white uppercase tracking-wider">Sem Cartão</span>
                           </div>
                        </div>
                     </div>

                     {/* Form Section */}
                     <div id="trial-form-section" className="lg:w-2/5 w-full max-w-md mx-auto relative scroll-mt-32">
                        <div className="absolute -inset-4 bg-primary/20 rounded-[40px] blur-3xl -z-10 animate-pulse" />
                        <div className="bg-[#07152e]/95 backdrop-blur-md border border-primary/50 rounded-[32px] p-6 md:p-8 shadow-2xl relative overflow-hidden">
                           <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-primary" />
                           <TrialForm />
                        </div>
                        <div className="mt-6 flex flex-col items-center gap-2 text-center">
                           <p className="text-xs text-slate-300 leading-relaxed">
                              Acesso 100% imediato — preencha os dados acima e entre direto no painel da Deepson já logado.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />
               <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10" />
            </section>

            {/* Substitution / Evolution Section */}
            <section className="py-20 border-y border-white/10 bg-[#061329]">
               <div className="container mx-auto px-4 max-w-5xl">
                  <div className="text-center mb-12">
                     <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-4 text-white">
                        Substitua a prospecção manual por <span className="text-primary italic">Inteligência B2B</span>
                     </h2>
                     <p className="text-slate-300 text-lg">Veja o que sua operação comercial deixa para trás ao centralizar dados e prospecção na Deepson.</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
                     {[
                        { name: "Listas Frias Compradas", sub: "Contatos desatualizados" },
                        { name: "Busca Manual de CNPJ", sub: "Horas perdidas no Google" },
                        { name: "Planilhas Soltas", sub: "Dados sem qualificação" },
                        { name: "Prospecção no Escuro", sub: "Abordagem fora do ICP" },
                        { name: "Ferramentas Isoladas", sub: "Alto custo operacional" },
                     ].map((item, i) => (
                        <div key={i} className="flex flex-col gap-1 p-4 rounded-2xl border border-white/10 bg-white/5 opacity-75 relative overflow-hidden">
                           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                              <div className="w-full h-px bg-destructive/60 rotate-[-8deg]" />
                           </div>
                           <p className="text-sm font-bold text-white line-through decoration-destructive/70">{item.name}</p>
                           <p className="text-[11px] text-slate-400">{item.sub}</p>
                        </div>
                     ))}
                  </div>
                  <div className="text-center p-6 rounded-3xl bg-primary/10 border border-primary/25">
                     <p className="text-base font-bold text-white">
                        Com a Deepson, sua empresa tem base de empresas B2B, filtros de ICP, listas segmentadas, insights de mercado e automação —{" "}
                        <span className="text-primary">tudo em uma única plataforma de inteligência comercial.</span>
                     </p>
                  </div>
               </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-[#040f21] border-b border-white/10">
               <div className="container mx-auto px-4">
                  <div className="text-center mb-16">
                     <h2 className="text-3xl md:text-4xl font-black mb-4 text-white">Inteligência de mercado para vender todos os dias</h2>
                     <p className="text-slate-300">Dados reais, oportunidades mapeadas e insights acionáveis para sua equipe comercial focar em quem realmente compra.</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                     <div className="p-8 rounded-3xl bg-[#07152e] border border-white/10 hover:border-primary/40 hover:shadow-2xl transition-all">
                        <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center mb-5">
                           <Search className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">Busca por CNPJ, Razão Social ou Segmento</h3>
                        <p className="text-slate-300 text-sm leading-relaxed">Encontre exatamente o perfil de cliente ideal (ICP) filtrando entre mais de 2,45 milhões de empresas mapeadas em todo o Brasil.</p>
                     </div>
                     <div className="p-8 rounded-3xl bg-[#07152e] border border-white/10 hover:border-primary/40 hover:shadow-2xl transition-all">
                        <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center mb-5">
                           <BarChart3 className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">Insights e Top Segmentos em Alta</h3>
                        <p className="text-slate-300 text-sm leading-relaxed">Descubra quais setores (Indústria, Comércio, Serviços, Agronegócio) apresentam maior crescimento em oportunidades no período.</p>
                     </div>
                     <div className="p-8 rounded-3xl bg-[#07152e] border border-white/10 hover:border-primary/40 hover:shadow-2xl transition-all">
                        <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center mb-5">
                           <Filter className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">Listas e Segmentações por Porte</h3>
                        <p className="text-slate-300 text-sm leading-relaxed">Segmente microempresas, pequenas, médias e grandes empresas e organize listas qualificadas prontas para sua abordagem comercial.</p>
                     </div>
                  </div>
               </div>
            </section>

            {/* Pain Points Section */}
            <section className="py-24 bg-[#061329] relative overflow-hidden">
               <div className="container mx-auto px-4">
                  <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
                     <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white">O custo invisível de <span className="text-primary italic">prospectar sem dados</span></h2>
                     <p className="text-lg text-slate-300">Quando seu time comercial procura clientes manualmente, você perde tempo, energia e vendas todos os dias.</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                     {[
                        { icon: AlertCircle, t: "Contatos Desatualizados", d: "Vendedores desperdiçando horas com telefones inexistentes e empresas baixadas." },
                        { icon: Target, t: "Abordagem Fora do ICP", d: "Reuniões improdutivas com empresas que não têm porte ou orçamento para sua solução." },
                        { icon: BarChart3, t: "Cegueira de Mercado", d: "Falta de clareza sobre quais segmentos e regiões estão gerando mais oportunidades agora." },
                        { icon: Clock, t: "Pesquisa Manual Lenta", d: "Seu time gasta mais tempo procurando quem abordar do que efetivamente vendendo." },
                        { icon: Users, t: "Baixa Qualificação", d: "Listas genéricas que geram baixa taxa de resposta e desmotivam a equipe de vendas." },
                        { icon: TrendingUp, t: "Pipeline Imprevisível", d: "Sem geração constante de oportunidades qualificadas, o faturamento oscila todo mês." }
                     ].map((item, i) => (
                        <div key={i} className="p-8 rounded-[32px] bg-[#040f21] border border-white/10 hover:border-primary/40 transition-all group">
                           <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                              <item.icon className="w-7 h-7 text-slate-300 group-hover:text-primary transition-colors" />
                           </div>
                           <h3 className="text-xl font-bold mb-3 text-white">{item.t}</h3>
                           <p className="text-slate-300 text-sm leading-relaxed">{item.d}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* Product Showcase */}
            <section className="py-24 relative overflow-hidden bg-[#040f21]">
               <div className="container mx-auto px-4">
                  <div className="text-center mb-20">
                     <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter text-white">Tudo que sua prospecção B2B precisa, <span className="text-primary italic text-shadow-glow">em um único painel</span></h2>
                     <p className="text-slate-300 text-lg max-w-2xl mx-auto">Da inteligência de mercado à criação de listas hipersegmentadas — conheça a plataforma Deepson por dentro.</p>
                  </div>

                  <div className="space-y-28">
                     {/* Feature 1 */}
                     <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 space-y-6">
                           <div className="bg-primary/15 text-primary px-4 py-2 rounded-full w-fit font-bold text-xs uppercase tracking-widest border border-primary/25">Inteligência de Mercado B2B</div>
                           <h3 className="text-3xl md:text-4xl font-black leading-tight text-white">Visão Geral: Dados, oportunidades e insights em tempo real</h3>
                           <p className="text-slate-300 text-lg leading-relaxed">
                              Tenha um raio-x completo do mercado brasileiro com mais de 2.458.317 empresas mapeadas. Acompanhe a evolução de oportunidades, distribuição por porte e os segmentos com maior crescimento.
                           </p>
                           <ul className="space-y-4">
                              {[
                                 "Mais de 2,45 milhões de empresas mapeadas e atualizadas",
                                 "Análise de distribuição por porte (Micro, Pequena, Média e Grande)",
                                 "Top segmentos em oportunidade (Indústria, Comércio, Serviços e Agro)",
                                 "Insights automáticos da Deepson para direcionar seu foco comercial"
                              ].map((item, i) => (
                                 <li key={i} className="flex items-center gap-3 text-slate-200">
                                    <Check className="w-5 h-5 text-primary shrink-0" />
                                    <span className="font-medium">{item}</span>
                                 </li>
                              ))}
                           </ul>
                        </div>
                        <div className="lg:w-1/2 relative group">
                           <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-[40px] opacity-30 group-hover:opacity-50 transition-opacity" />
                           <img
                              src="/dashboard-deepson.jpg"
                              alt="Painel Deepson — Inteligência de Mercado B2B"
                              className="rounded-[28px] border border-white/15 shadow-2xl relative z-10 hover:scale-[1.02] transition-transform duration-500 w-full h-auto"
                              loading="lazy"
                           />
                        </div>
                     </div>

                     {/* Feature 2 */}
                     <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                        <div className="lg:w-1/2 space-y-6">
                           <div className="bg-primary/15 text-primary px-4 py-2 rounded-full w-fit font-bold text-xs uppercase tracking-widest border border-primary/25">Prospecção & Segmentação</div>
                           <h3 className="text-3xl md:text-4xl font-black leading-tight text-white">Listas segmentadas, novos contatos e qualificação acelerada</h3>
                           <p className="text-slate-300 text-lg leading-relaxed">
                              Busque empresas por CNPJ, razão social ou segmento, salve listas personalizadas e utilize automação e integrações para abastecer seu time comercial com leads dentro do seu ICP.
                           </p>
                           <ul className="space-y-4">
                              {[
                                 "Busca instantânea por CNPJ, razão social, CNAE ou segmento",
                                 "Criação de listas e segmentações sob medida para campanhas B2B",
                                 "Módulos integrados de Relatórios, Automação e Integrações",
                                 "20 créditos liberados na hora no seu teste gratuito de 7 dias"
                              ].map((item, i) => (
                                 <li key={i} className="flex items-center gap-3 text-slate-200">
                                    <Check className="w-5 h-5 text-primary shrink-0" />
                                    <span className="font-medium">{item}</span>
                                 </li>
                              ))}
                           </ul>
                           <div className="pt-2">
                              <Button variant="cta" size="lg" className="h-14 px-8 rounded-full font-black" onClick={scrollToForm}>
                                 Criar conta grátis com 20 créditos
                              </Button>
                           </div>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                           <div className="p-6 rounded-3xl bg-[#07152e] border border-white/10 space-y-2">
                              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Empresas Mapeadas</span>
                              <p className="text-3xl md:text-4xl font-black text-white">2.458.317</p>
                              <span className="inline-block text-xs font-bold text-emerald-400">↑ +12,8% vs. período anterior</span>
                           </div>
                           <div className="p-6 rounded-3xl bg-gradient-to-br from-[#ff6b00] to-[#ea580c] text-white space-y-2 shadow-xl">
                              <span className="text-xs font-bold uppercase tracking-wider text-white/90">Oportunidades</span>
                              <p className="text-3xl md:text-4xl font-black text-white">38.420</p>
                              <span className="inline-block text-xs font-bold text-white">↑ +9,2% em crescimento</span>
                           </div>
                           <div className="p-6 rounded-3xl bg-[#07152e] border border-white/10 space-y-2">
                              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Novos Contatos</span>
                              <p className="text-3xl md:text-4xl font-black text-white">104.982</p>
                              <span className="inline-block text-xs font-bold text-emerald-400">↑ +15,6% vs. período anterior</span>
                           </div>
                           <div className="p-6 rounded-3xl bg-[#07152e] border border-white/10 space-y-2">
                              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Taxa de Qualificação</span>
                              <p className="text-3xl md:text-4xl font-black text-primary">26,4%</p>
                              <span className="inline-block text-xs font-bold text-emerald-400">↑ +4,7 p.p. de evolução</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* How it Works (Trilha de 4 Passos Oficial) */}
            <section className="py-24 bg-[#061329] border-y border-white/10">
               <div className="container mx-auto px-4">
                  <div className="text-center mb-16">
                     <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 text-white">Do cadastro à lista útil em <span className="text-primary italic">4 passos simples</span></h2>
                     <p className="text-slate-300 text-lg max-w-2xl mx-auto">A trilha da Deepson foi desenhada para você encontrar compradores reais em até 2 minutos, sem precisar montar filtros complexos no escuro.</p>
                  </div>

                  <div className="grid md:grid-cols-4 gap-8 relative">
                     <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary/20 -z-10" />
                     {[
                        { step: "①", t: "Sua Empresa (Briefing)", d: "Cole o seu site e diga o que vende, para quem e em qual região. A IA entende o seu negócio na sua língua." },
                        { step: "②", t: "Seu Cliente Ideal (ICP)", d: "A IA define o perfil dos melhores compradores e seleciona automaticamente os CNAEs, portes e estados ideais." },
                        { step: "③", t: "Empresas Encontradas", d: "Receba a lista ordenada por nota de aderência ao seu ICP, com o motivo claro de por que abordar cada empresa." },
                        { step: "④", t: "Funil e Enriquecimento", d: "Salve no funil e libere contato (1 créd.), Sinais financeiros (1 créd.) ou Enriquecer tudo com decisor e IA (5 créd.)." }
                     ].map((s, i) => (
                        <div key={i} className="bg-[#040f21] p-8 rounded-[32px] border border-white/10 text-center relative group hover:border-primary/50 transition-colors">
                           <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-black mx-auto mb-6 shadow-lg shadow-primary/20 text-lg group-hover:scale-110 transition-transform">
                              {s.step}
                           </div>
                           <h4 className="text-xl font-bold mb-3 text-white">{s.t}</h4>
                           <p className="text-slate-300 text-sm leading-relaxed">{s.d}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* Who is it for */}
            <section className="py-24 bg-[#040f21]">
               <div className="container mx-auto px-4 text-center">
                  <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tighter italic text-white">Para quem é a <span className="text-primary">Inteligência B2B da Deepson</span></h2>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                     {[
                        { t: "Indústrias & Distribuidoras", i: Building2 },
                        { t: "SaaS & Tecnologia B2B", i: Code },
                        { t: "Venda de Serviços B2B", i: Rocket },
                        { t: "Consultorias & Agências", i: Target },
                        { t: "Comércio Atacadista", i: LayoutDashboard },
                        { t: "Agronegócio & Insumos", i: Shield },
                        { t: "Equipes de SDR & Outbound", i: Users },
                        { t: "Expansão & Inteligência Comercial", i: BarChart3 }
                     ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center gap-4 p-8 rounded-[32px] border border-white/10 bg-[#07152e] hover:bg-primary/10 hover:border-primary/30 transition-all">
                           <div className="w-12 h-12 rounded-xl bg-[#040f21] flex items-center justify-center border border-white/10 shadow-sm">
                              <item.i className="w-6 h-6 text-primary" />
                           </div>
                           <span className="font-bold text-sm md:text-base text-white">{item.t}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* Cost comparison intro */}
            <section className="py-12 bg-[#061329] border-t border-white/10">
               <div className="container mx-auto px-4 text-center mb-4 max-w-3xl">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Quanto custa prospectar sem inteligência de dados?</p>
                  <h2 className="text-2xl md:text-3xl font-black tracking-tighter mb-4 leading-tight text-white">
                     Bases desatualizadas + ferramentas separadas + horas improdutivas de SDRs custam facilmente mais de <span className="text-destructive line-through decoration-2">R$ 2.500/mês</span>.
                  </h2>
                  <p className="text-slate-300 text-base mb-2">
                     Com a Deepson, você acessa inteligência de mercado B2B, base de empresas, segmentações e automação em uma única plataforma.
                  </p>
                  <p className="text-primary font-bold text-sm uppercase tracking-wider">
                     Mais precisão no ICP. Mais oportunidades reais. Mais vendas B2B.
                  </p>
               </div>
            </section>
            <PlansSection />

            {/* FAQ Section */}
            <section className="py-24 bg-[#061329]">
               <div className="container mx-auto px-4 max-w-3xl">
                  <div className="text-center mb-16">
                     <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter text-white">Perguntas <span className="text-primary italic">Frequentes</span></h2>
                     <p className="text-slate-300">Tudo o que você precisa saber sobre o teste grátis de 7 dias da Deepson.</p>
                  </div>

                  <Accordion type="single" collapsible className="space-y-4">
                     {[
                        { q: "Precisa de cartão de crédito para os 7 dias de teste?", a: "Não! Você cria sua conta gratuita agora mesmo sem informar cartão de crédito e já recebe 20 créditos para testar a plataforma por 7 dias (dá para ~10 empresas com contato e sinais financeiros)." },
                        { q: "Como funcionam os créditos e os planos da Deepson?", a: "Tudo funciona com transparência total: Pesquisa de contato custa 1 crédito, Sinais financeiros 1 crédito, Enriquecer tudo (contato + LinkedIn do decisor + análise por IA) 5 créditos e Baixar lista (até 50 empresas do funil) 1 crédito. Os planos começam no Essencial (R$ 197/mês com 50 créditos), Profissional (R$ 497/mês com 300 créditos), Equipe (R$ 997/mês com 800 créditos) e Escala (R$ 1.997/mês com 2.000 créditos)." },
                        { q: "A mesma empresa consome créditos duas vezes?", a: "Não! Ação já liberada não cobra de novo: a mesma empresa nunca gasta créditos duas vezes pela mesma ação na sua conta, e todo botão mostra exatamente quantos créditos vai consumir antes de você clicar." },
                        { q: "O que são os Sinais Financeiros?", a: "São informações de fontes públicas (situação cadastral na Receita Federal, recuperação judicial/falência, dívida ativa na PGFN e, quando habilitado sob pedido, protestos em cartório), apresentadas de forma objetiva com a respectiva fonte e data da consulta. Não constitui análise de crédito." },
                        { q: "Em quanto tempo meu acesso é liberado?", a: "Na mesma hora! Assim que você preenche o formulário com Nome, E-mail, WhatsApp e CNPJ, sua conta é criada automaticamente e você já entra logado no painel da Deepson." }
                     ].map((item, i) => (
                        <AccordionItem key={i} value={`item-${i}`} className="bg-[#040f21] border border-white/10 rounded-2xl px-6 py-2 overflow-hidden shadow-sm">
                           <AccordionTrigger className="hover:no-underline font-bold text-left text-lg py-4 text-white">
                              {item.q}
                           </AccordionTrigger>
                           <AccordionContent className="text-slate-300 text-base leading-relaxed pb-6">
                              {item.a}
                           </AccordionContent>
                        </AccordionItem>
                     ))}
                  </Accordion>

                  <div className="mt-20 p-10 rounded-[40px] bg-primary text-primary-foreground text-center relative overflow-hidden group">
                     <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity" />
                     <h3 className="text-3xl font-black mb-4 italic tracking-tight">Pronto para encontrar suas próximas oportunidades B2B?</h3>
                     <p className="mb-8 text-primary-foreground/90 text-lg">Crie sua conta grátis agora e receba 20 créditos imediatos para testar por 7 dias.</p>
                     <Button
                        size="lg"
                        variant="secondary"
                        className="h-14 px-10 rounded-full font-black text-lg gap-2 shadow-xl hover:scale-105 transition-transform"
                        onClick={scrollToForm}
                     >
                        Começar teste grátis sem cartão
                        <Zap className="w-5 h-5 fill-current" />
                     </Button>
                  </div>
               </div>
            </section>
         </main>

         <Footer />

         <Dialog open={showExitPopup} onOpenChange={setShowExitPopup}>
            <DialogContent className="sm:max-w-[500px] border border-primary/30 bg-[#07152e] p-6 md:p-8 rounded-[32px] text-center space-y-6 text-white">
               <DialogHeader>
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mb-2">
                     <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <DialogTitle className="text-2xl font-black text-white tracking-tight text-center">
                     Espere! Seus 20 créditos grátis estão prontos
                  </DialogTitle>
                  <DialogDescription className="text-slate-300 text-sm text-center leading-relaxed">
                     Teste a plataforma de Inteligência de Dados B2B da Deepson por 7 dias sem cartão de crédito. Sua conta é criada na hora!
                  </DialogDescription>
               </DialogHeader>

               <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col md:flex-row items-center gap-4 text-left">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                     <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                     <p className="text-sm font-bold text-white">+2,45 Milhões de Empresas Mapeadas</p>
                     <p className="text-xs text-slate-300">Busque por CNPJ, segmento, porte e região com acesso imediato ao painel.</p>
                  </div>
               </div>

               <div className="flex flex-col gap-3">
                  <Button
                     variant="cta"
                     className="w-full h-14 rounded-2xl font-black text-base shadow-lg shadow-primary/20 bg-primary text-primary-foreground hover:opacity-90"
                     onClick={() => {
                        setShowExitPopup(false);
                        scrollToForm();
                     }}
                  >
                     Liberar meus 20 créditos grátis agora
                  </Button>
               </div>
            </DialogContent>
         </Dialog>
      </div>
   );
};

export default FreeTrialPage;
