import { useState, useEffect } from "react";
import {
   CheckCircle2,
   Zap,
   ShieldCheck,
   Check,
   Sparkles,
   Building2,
   Info,
   FileSpreadsheet,
   UserCheck,
   SearchCheck
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

   const handleOpenWhatsApp = () => {
      window.open("https://wa.me/5511955501090?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Deepson.", "_blank", "noopener");
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
                  <div className="hidden sm:flex items-center gap-2 text-[10px] md:text-xs text-slate-300 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                     <ShieldCheck className="w-4 h-4 text-primary" />
                     <span className="font-bold uppercase tracking-wider leading-none">Fontes Públicas Oficiais</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full font-bold border-primary/30 text-white hover:bg-primary/10 transition-all text-sm h-11"
                        onClick={handleOpenWhatsApp}
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
            {/* Hero Section (Primeira Dobra) */}
            <section className="pt-10 pb-20 lg:pt-14 lg:pb-24 overflow-hidden relative">
               <div className="container mx-auto px-4">
                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
                     {/* Content */}
                     <div className="lg:w-3/5 text-center lg:text-left space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-extrabold uppercase tracking-wider">
                           <Sparkles className="w-3.5 h-3.5" />
                           Inteligência e Produtividade Comercial B2B
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.05] text-white mt-0 pt-0">
                           Encontre empresas com <span className="text-primary italic text-shadow-glow">maior potencial</span> de comprar de você.
                        </h1>

                        <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                           Informe o site da sua empresa. A IA do <strong>Deepson</strong> entende o que você vende, identifica seu cliente ideal e encontra empresas compatíveis, explicando por que cada uma merece a atenção do seu comercial.
                        </p>

                        <p className="text-base md:text-lg text-slate-300 font-semibold max-w-2xl mx-auto lg:mx-0 border-l-4 border-primary pl-4 text-left">
                           Seu vendedor passa menos tempo procurando clientes e mais tempo conversando com quem tem potencial de comprar.
                        </p>

                        {/* Free Trial Value Breakdown */}
                        <div className="bg-[#07152e] border border-white/10 rounded-3xl p-5 text-left space-y-4">
                           <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                              <div className="flex items-center gap-2">
                                 <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                 <span className="font-black text-white text-sm md:text-base">
                                    7 dias grátis, sem cartão • 20 créditos para experimentar
                                 </span>
                              </div>
                              <span className="text-[11px] font-bold uppercase tracking-wider bg-primary/15 text-primary px-3 py-1 rounded-full border border-primary/30">
                                 Você escolhe como usar
                              </span>
                           </div>

                           <div className="grid sm:grid-cols-2 gap-3">
                              <div className="bg-white/5 rounded-2xl p-3.5 border border-white/10">
                                 <div className="flex items-center justify-between mb-1">
                                    <span className="text-xs font-extrabold uppercase tracking-wider text-primary">Opção 1 • 10 empresas</span>
                                    <span className="text-[11px] text-slate-400 font-bold">2 créd./empresa</span>
                                 </div>
                                 <p className="text-xs text-slate-200 leading-relaxed">
                                    <strong>Contato + sinais financeiros</strong> (telefone, e-mail, sócios, Receita Federal e dívida ativa PGFN).
                                 </p>
                              </div>

                              <div className="bg-white/5 rounded-2xl p-3.5 border border-white/10">
                                 <div className="flex items-center justify-between mb-1">
                                    <span className="text-xs font-extrabold uppercase tracking-wider text-primary">Opção 2 • 4 empresas</span>
                                    <span className="text-[11px] text-slate-400 font-bold">5 créd./empresa</span>
                                 </div>
                                 <p className="text-xs text-slate-200 leading-relaxed">
                                    <strong>Enriquecimento completo</strong> (contato + LinkedIn do decisor + análise e abordagem comercial por IA).
                                 </p>
                              </div>
                           </div>

                           <p className="text-[11px] text-slate-400 flex items-center gap-1.5">
                              <Info className="w-3.5 h-3.5 text-primary shrink-0" />
                              A quantidade de empresas analisadas depende das ações escolhidas. Se uma consulta não encontrar contato válido, seu crédito não é consumido.
                           </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4 lg:hidden">
                           <Button variant="cta" size="lg" className="w-full h-14 rounded-2xl font-bold" onClick={scrollToForm}>
                              Começar teste grátis sem cartão
                           </Button>
                           <Button variant="outline" size="lg" className="w-full h-14 rounded-2xl font-bold" onClick={handleOpenWhatsApp}>
                              Falar com Especialista
                           </Button>
                        </div>
                     </div>

                     {/* Form Section */}
                     <div id="trial-form-section" className="lg:w-2/5 w-full max-w-md mx-auto relative scroll-mt-32">
                        <div className="absolute -inset-4 bg-primary/20 rounded-[40px] blur-3xl -z-10 animate-pulse" />
                        <div className="bg-[#07152e]/95 backdrop-blur-md border border-primary/50 rounded-[32px] p-6 md:p-8 shadow-2xl relative overflow-hidden">
                           <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-primary" />
                           <TrialForm />
                        </div>
                        <div className="mt-4 flex flex-col items-center gap-1 text-center">
                           <p className="text-xs text-slate-300 leading-relaxed">
                              Cadastro imediato — seus 20 créditos ficam disponíveis assim que sua conta é criada.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />
               <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10" />
            </section>

            {/* How it Works (Trilha Prática em 4 Passos) */}
            <section className="py-20 bg-[#061329] border-y border-white/10">
               <div className="container mx-auto px-4">
                  <div className="text-center mb-14">
                     <span className="text-xs font-black uppercase tracking-widest text-primary block mb-2">
                        Jornada Prática na Plataforma
                     </span>
                     <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-white">
                        Do seu site à abordagem comercial em <span className="text-primary italic">4 passos</span>
                     </h2>
                     <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                        Sem precisar adivinhar códigos CNAE ou cruzar planilhas manualmente: a IA guia cada etapa da sua prospecção.
                     </p>
                  </div>

                  <div className="grid md:grid-cols-4 gap-6 relative">
                     <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary/20 -z-10" />
                     {[
                        {
                           step: "①",
                           t: "Sua Empresa (Briefing)",
                           d: "Informe o seu site, o que você vende, para quem e em qual região. A IA interpreta sua oferta comercial."
                        },
                        {
                           step: "②",
                           t: "Seu Cliente Ideal (ICP)",
                           d: "A IA sugere o perfil de comprador ideal e seleciona automaticamente os CNAEs, portes e estados mais aderentes."
                        },
                        {
                           step: "③",
                           t: "Empresas Compatíveis",
                           d: "Receba as empresas ordenadas por nota de aderência ao seu ICP, com a explicação clara do motivo para abordar cada uma."
                        },
                        {
                           step: "④",
                           t: "Funil e Enriquecimento",
                           d: "Salve no funil e escolha o que liberar: Contato (1 créd.), Sinais financeiros (1 créd.), Enriquecer tudo (5 créd.) ou exportar planilha (1 créd.)."
                        }
                     ].map((s, i) => (
                        <div key={i} className="bg-[#040f21] p-7 rounded-[28px] border border-white/10 text-left relative group hover:border-primary/50 transition-colors">
                           <div className="w-11 h-11 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-black mb-5 shadow-lg shadow-primary/20 text-base">
                              {s.step}
                           </div>
                           <h4 className="text-lg font-bold mb-2.5 text-white">{s.t}</h4>
                           <p className="text-slate-300 text-sm leading-relaxed">{s.d}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* Practical Demonstration & Real Case Section */}
            <section className="py-24 relative overflow-hidden bg-[#040f21] border-b border-white/10">
               <div className="container mx-auto px-4">
                  <div className="flex flex-col lg:flex-row items-center gap-14 mb-20">
                     <div className="lg:w-1/2 space-y-6">
                        <div className="bg-primary/15 text-primary px-4 py-1.5 rounded-full w-fit font-bold text-xs uppercase tracking-widest border border-primary/25">
                           Por Dentro do Produto
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black leading-tight text-white">
                           Qualificação com motivo claro, decisores e sinais financeiros de fontes públicas
                        </h2>
                        <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                           Em vez de entregar apenas uma lista fria de CNPJs, o Deepson cruza a base oficial de empresas ativas com o seu ICP para priorizar quem realmente tem perfil para comprar sua solução.
                        </p>
                        <ul className="space-y-3.5">
                           {[
                              "Nota de aderência (0 a 100) calculada por IA com justificativa em linguagem comercial",
                              "Identificação de contatos corporativos, quadro societário e decisores no LinkedIn",
                              "Sinais financeiros objetivos (Receita Federal, dívida ativa PGFN e cartórios) com fonte e data",
                              "Funil comercial em Kanban e exportação de listas qualificadas (até 50 empresas por 1 crédito)"
                           ].map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-slate-200 text-sm md:text-base">
                                 <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                 <span className="font-medium">{item}</span>
                              </li>
                           ))}
                        </ul>
                        <div className="pt-2">
                           <Button variant="cta" size="lg" className="h-13 px-8 rounded-full font-black" onClick={scrollToForm}>
                              Experimentar com 20 créditos grátis
                           </Button>
                        </div>
                     </div>

                     <div className="lg:w-1/2 relative">
                        <div className="absolute -inset-4 bg-primary/15 blur-3xl rounded-[40px] opacity-40" />
                        <div className="relative z-10 rounded-[28px] border border-white/15 bg-[#07152e] p-3 shadow-2xl">
                           <img
                              src="/dashboard-deepson.jpg"
                              alt="Ilustração do painel Deepson — Inteligência de Mercado B2B"
                              className="rounded-[20px] w-full h-auto"
                              loading="lazy"
                           />
                           <p className="text-[11px] text-slate-400 text-center mt-3 px-2">
                              * Imagem meramente ilustrativa da interface do painel (números demonstrativos). Na plataforma, o volume de empresas e oportunidades reflete os filtros de CNAE, porte e região do seu ICP sobre a base pública da Receita Federal.
                           </p>
                        </div>
                     </div>
                  </div>

                  {/* Case Real: Aplicações Práticas em Operações B2B */}
                  <div className="max-w-5xl mx-auto bg-[#07152e] border border-white/10 rounded-3xl p-8 md:p-10">
                     <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
                        <div>
                           <span className="text-xs font-black uppercase tracking-widest text-primary block mb-1">
                              Aplicação Real em Operações B2B
                           </span>
                           <h3 className="text-2xl font-black text-white">
                              Como empresas B2B utilizam a inteligência do Deepson na prática
                           </h3>
                        </div>
                        <span className="text-xs font-bold bg-white/5 border border-white/10 text-slate-300 px-4 py-2 rounded-full w-fit">
                           Grupo FullWeb • Metodologia Aplicada
                        </span>
                     </div>

                     <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-[#040f21] border border-white/10 rounded-2xl p-6 space-y-3">
                           <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                              <Building2 className="w-5 h-5 text-primary" />
                           </div>
                           <h4 className="font-bold text-white text-base">Outsourcing de TI & Impressão (Case MGITECH)</h4>
                           <p className="text-xs text-slate-300 leading-relaxed">
                              Mapeamento regional no estado de São Paulo cruzando porte empresarial, setores intensivos em documentação (saúde, logística, educação e indústria) e exclusão automática de concorrentes do mesmo CNAE.
                           </p>
                        </div>

                        <div className="bg-[#040f21] border border-white/10 rounded-2xl p-6 space-y-3">
                           <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                              <SearchCheck className="w-5 h-5 text-primary" />
                           </div>
                           <h4 className="font-bold text-white text-base">Engenharia & Saúde e Segurança do Trabalho (SST)</h4>
                           <p className="text-xs text-slate-300 leading-relaxed">
                              Identificação de indústrias e construtoras ativas com obrigação de PGR/PCMSO, liberando contato validado, situação cadastral na Receita Federal e decisores de RH/Operações.
                           </p>
                        </div>

                        <div className="bg-[#040f21] border border-white/10 rounded-2xl p-6 space-y-3">
                           <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                              <UserCheck className="w-5 h-5 text-primary" />
                           </div>
                           <h4 className="font-bold text-white text-base">Indústria de Embalagens & Insumos B2B</h4>
                           <p className="text-xs text-slate-300 leading-relaxed">
                              Seleção automática dos CNAEs compradores (indústrias de alimentos, cosméticos e centros de distribuição) separando fornecedores de matéria-prima dos reais compradores finais.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* Plans & Credit Costs Section */}
            <PlansSection />

            {/* FAQ Section */}
            <section className="py-24 bg-[#061329]">
               <div className="container mx-auto px-4 max-w-3xl">
                  <div className="text-center mb-16">
                     <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight text-white">
                        Perguntas <span className="text-primary italic">Frequentes</span>
                     </h2>
                     <p className="text-slate-300">
                        Regras claras sobre o teste grátis de 7 dias, funcionamento dos créditos, exportação e LGPD.
                     </p>
                  </div>

                  <Accordion type="single" collapsible className="space-y-4">
                     {[
                        {
                           q: "Como funcionam os 20 créditos do teste grátis de 7 dias?",
                           a: "Ao criar sua conta gratuita (sem cartão de crédito), você recebe 20 créditos válidos por 7 dias. A quantidade de empresas analisadas depende das ações que você escolher: por exemplo, você pode liberar Contato + Sinais financeiros para 10 empresas (2 créditos por empresa) ou fazer o Enriquecimento completo com decisor e análise de IA para 4 empresas (5 créditos por empresa)."
                        },
                        {
                           q: "Posso exportar listas durante o teste grátis? Os créditos expiram?",
                           a: "Sim! Durante o teste grátis você pode exportar empresas do seu funil para planilha (1 crédito para até 50 empresas). Os 20 créditos de demonstração valem durante os 7 dias do teste. Nos planos mensais pagos, a cota mensal renova a cada ciclo (o saldo da cota mensal não usado expira na virada), enquanto créditos avulsos comprados à parte nunca expiram."
                        },
                        {
                           q: "O que acontece quando uma consulta não encontra informações ou se eu clicar duas vezes na mesma empresa?",
                           a: "Você não perde créditos: (1) se a pesquisa de contato não localizar telefone ou e-mail válido, o crédito não é cobrado (ou é estornado automaticamente no seu extrato); (2) uma ação já liberada para uma empresa fica salva na sua conta e nunca é cobrada duas vezes."
                        },
                        {
                           q: "O que são os Sinais Financeiros?",
                           a: "São dados objetivos consultados em fontes públicas oficiais (situação cadastral na Receita Federal, registros públicos de recuperação judicial/falência, dívida ativa na PGFN e, quando habilitado sob pedido, protestos em cartório), sempre acompanhados da fonte e data da consulta. Não representam score, nota ou recomendação de crédito."
                        },
                        {
                           q: "Como o Deepson trata a LGPD e os dados de decisores?",
                           a: "Os dados cadastrais de pessoas jurídicas provêm de bases públicas oficiais (Receita Federal e PGFN). Informações corporativas de contato e de decisores destinam-se exclusivamente à prospecção comercial B2B sob legítimo interesse e transparência (Lei nº 13.709/2018 — LGPD), contando com canal permanente e gratuito para revisão ou oposição/exclusão de dados pelo titular."
                        }
                     ].map((item, i) => (
                        <AccordionItem key={i} value={`item-${i}`} className="bg-[#040f21] border border-white/10 rounded-2xl px-6 py-2 overflow-hidden shadow-sm">
                           <AccordionTrigger className="hover:no-underline font-bold text-left text-base md:text-lg py-4 text-white">
                              {item.q}
                           </AccordionTrigger>
                           <AccordionContent className="text-slate-300 text-sm md:text-base leading-relaxed pb-6">
                              {item.a}
                           </AccordionContent>
                        </AccordionItem>
                     ))}
                  </Accordion>

                  <div className="mt-16 p-10 rounded-[40px] bg-primary text-primary-foreground text-center relative overflow-hidden group">
                     <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity" />
                     <h3 className="text-2xl md:text-3xl font-black mb-3 italic tracking-tight">
                        Encontre empresas com maior potencial de comprar de você
                     </h3>
                     <p className="mb-8 text-primary-foreground/90 text-base md:text-lg">
                        Teste grátis por 7 dias, sem cartão, com 20 créditos liberados na hora.
                     </p>
                     <Button
                        size="lg"
                        variant="secondary"
                        className="h-14 px-10 rounded-full font-black text-base md:text-lg gap-2 shadow-xl hover:scale-105 transition-transform"
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
                     Experimente o Deepson com 20 créditos grátis
                  </DialogTitle>
                  <DialogDescription className="text-slate-300 text-sm text-center leading-relaxed">
                     Informe o site da sua empresa, descubra seu cliente ideal com IA e analise até 10 empresas (contato + sinais financeiros) por 7 dias sem cartão.
                  </DialogDescription>
               </DialogHeader>

               <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col md:flex-row items-center gap-4 text-left">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                     <FileSpreadsheet className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                     <p className="text-sm font-bold text-white">7 dias grátis • Sem cartão de crédito</p>
                     <p className="text-xs text-slate-300">Custo claro antes de cada clique e garantia contra cobrança em consulta sem dados.</p>
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
