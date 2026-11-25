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
import { Link } from "react-router-dom";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { DeepB2BLogo } from "@/components/brand/DeepB2BLogo";
import { SeoHead } from "@/components/seo/SeoHead";
import { useLocale } from "@/i18n/LocaleContext";
import { FREE_TRIAL_COPY } from "@/pages/freeTrialCopy";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const FreeTrialPage = () => {
   const { locale, dict, routeTo } = useLocale();
   const c = FREE_TRIAL_COPY[locale];
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
      window.open("https://wa.me/5511955501090?text=" + encodeURIComponent(c.whatsappMsg), "_blank", "noopener");
   };

   return (
      <div className="min-h-screen bg-[#040f21] text-foreground font-sans selection:bg-primary/30 scroll-smooth">
         <SeoHead title={dict.seo.freeTrial.title} description={dict.seo.freeTrial.description} />
         {/* Header / Logo */}
         <header className="py-3 lg:py-4 border-b border-white/10 bg-[#040f21]/95 backdrop-blur-md sticky top-0 z-50">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
               <div className="flex items-center gap-3">
                  <Link to={routeTo("home")} aria-label={c.logoAlt}>
                     <DeepB2BLogo variant="dark" showSubtitle subtitleText={dict.brand.subtitle} />
                  </Link>
               </div>
               <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 md:gap-6">
                  <div className="hidden sm:flex items-center gap-2 text-[10px] md:text-xs text-slate-300 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                     <ShieldCheck className="w-4 h-4 text-primary" />
                     <span className="font-bold uppercase tracking-wider leading-none">{c.officialSources}</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <LanguageSwitcher compact />
                     <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full font-bold border-primary/30 bg-transparent text-white hover:bg-primary/10 transition-all text-sm h-11"
                        onClick={handleOpenWhatsApp}
                     >
                        {c.talkToExpert}
                     </Button>
                     <Button
                        variant="cta"
                        size="sm"
                        className="rounded-full font-bold text-sm h-11 px-6"
                        onClick={scrollToForm}
                     >
                        {c.startTrial}
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
                           {c.badge}
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.05] text-white mt-0 pt-0">
                           {c.h1Before}<span className="text-primary italic text-shadow-glow">{c.h1Highlight}</span>{c.h1After}
                        </h1>

                        <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                           {c.lead.split("{brand}")[0]}<strong>{c.leadStrong}</strong>{c.lead.split("{brand}")[1]}
                        </p>

                        <p className="text-base md:text-lg text-slate-300 font-semibold max-w-2xl mx-auto lg:mx-0 border-l-4 border-primary pl-4 text-left">
                           {c.pitch}
                        </p>

                        {/* Free Trial Value Breakdown */}
                        <div className="bg-[#07152e] border border-white/10 rounded-3xl p-5 text-left space-y-4">
                           <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                              <div className="flex items-center gap-2">
                                 <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                 <span className="font-black text-white text-sm md:text-base">
                                    {c.valueTitle}
                                 </span>
                              </div>
                              <span className="text-[11px] font-bold uppercase tracking-wider bg-primary/15 text-primary px-3 py-1 rounded-full border border-primary/30">
                                 {c.cnpjBadge}
                              </span>
                           </div>

                           <div className="grid sm:grid-cols-2 gap-3">
                              <div className="bg-white/5 rounded-2xl p-3.5 border border-white/10">
                                 <div className="flex items-center justify-between mb-1">
                                    <span className="text-xs font-extrabold uppercase tracking-wider text-primary">{c.card1Title}</span>
                                 </div>
                                 <p className="text-xs text-slate-200 leading-relaxed">
                                    <strong>{c.card1Strong}</strong>{c.card1Text}
                                 </p>
                              </div>

                              <div className="bg-white/5 rounded-2xl p-3.5 border border-white/10">
                                 <div className="flex items-center justify-between mb-1">
                                    <span className="text-xs font-extrabold uppercase tracking-wider text-primary">{c.card2Title}</span>
                                 </div>
                                 <p className="text-xs text-slate-200 leading-relaxed">
                                    <strong>{c.card2Strong}</strong>{c.card2Text}
                                 </p>
                              </div>
                           </div>

                           <p className="text-[11px] text-slate-400 flex items-center gap-1.5">
                              <Info className="w-3.5 h-3.5 text-primary shrink-0" />
                              {c.creditsNote}
                           </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4 lg:hidden">
                           <Button variant="cta" size="lg" className="w-full h-14 rounded-2xl font-bold" onClick={scrollToForm}>
                              {c.startTrial}
                           </Button>
                           <Button variant="outline" size="lg" className="w-full h-14 rounded-2xl font-bold bg-transparent text-white" onClick={handleOpenWhatsApp}>
                              {c.talkToExpert}
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
                              {c.formNote}
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
                        {c.stepsEyebrow}
                     </span>
                     <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-white">
                        {c.stepsTitleBefore}<span className="text-primary italic">{c.stepsTitleHighlight}</span>
                     </h2>
                     <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                        {c.stepsLead}
                     </p>
                  </div>

                  <div className="grid md:grid-cols-4 gap-6 relative">
                     <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary/20 -z-10" />
                     {c.steps.map((st, i) => ({ step: String(i + 1), t: st.t, d: st.d })).map((s, i) => (
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
                           {c.productEyebrow}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black leading-tight text-white">
                           {c.productTitle}
                        </h2>
                        <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                           {c.productLead}
                        </p>
                        <ul className="space-y-3.5">
                           {c.productBullets.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-slate-200 text-sm md:text-base">
                                 <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                 <span className="font-medium">{item}</span>
                              </li>
                           ))}
                        </ul>
                        <div className="pt-2">
                           <Button variant="cta" size="lg" className="h-13 px-8 rounded-full font-black" onClick={scrollToForm}>
                              {c.tryFree}
                           </Button>
                        </div>
                     </div>

                     <div className="lg:w-1/2 relative">
                        <div className="absolute -inset-4 bg-primary/15 blur-3xl rounded-[40px] opacity-40" />
                        <div className="relative z-10 rounded-[28px] border border-white/15 bg-[#07152e] p-3 shadow-2xl">
                           <img
                              src="/dashboard-deepson.jpg"
                              alt={c.imageAlt}
                              className="rounded-[20px] w-full h-auto"
                              loading="lazy"
                           />
                           <p className="text-[11px] text-slate-400 text-center mt-3 px-2">
                              {c.imageNote}
                           </p>
                        </div>
                     </div>
                  </div>

                  {/* Case Real: Aplicações Práticas em Operações B2B */}
                  <div className="max-w-5xl mx-auto bg-[#07152e] border border-white/10 rounded-3xl p-8 md:p-10">
                     <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
                        <div>
                           <span className="text-xs font-black uppercase tracking-widest text-primary block mb-1">
                              {c.casesEyebrow}
                           </span>
                           <h3 className="text-2xl font-black text-white">
                              {c.casesTitle}
                           </h3>
                        </div>
                        <span className="text-xs font-bold bg-white/5 border border-white/10 text-slate-300 px-4 py-2 rounded-full w-fit">
                           {c.casesBadge}
                        </span>
                     </div>

                     <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-[#040f21] border border-white/10 rounded-2xl p-6 space-y-3">
                           <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                              <Building2 className="w-5 h-5 text-primary" />
                           </div>
                           <h4 className="font-bold text-white text-base">{c.cases[0].t}</h4>
                           <p className="text-xs text-slate-300 leading-relaxed">
                              {c.cases[0].d}
                           </p>
                        </div>

                        <div className="bg-[#040f21] border border-white/10 rounded-2xl p-6 space-y-3">
                           <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                              <SearchCheck className="w-5 h-5 text-primary" />
                           </div>
                           <h4 className="font-bold text-white text-base">{c.cases[1].t}</h4>
                           <p className="text-xs text-slate-300 leading-relaxed">
                              {c.cases[1].d}
                           </p>
                        </div>

                        <div className="bg-[#040f21] border border-white/10 rounded-2xl p-6 space-y-3">
                           <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                              <UserCheck className="w-5 h-5 text-primary" />
                           </div>
                           <h4 className="font-bold text-white text-base">{c.cases[2].t}</h4>
                           <p className="text-xs text-slate-300 leading-relaxed">
                              {c.cases[2].d}
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* Governance Callout Replacing Public Pricing */}
            <section className="py-14 bg-[#040f21]">
               <div className="container mx-auto px-4 max-w-4xl">
                  <div className="rounded-3xl border border-white/15 bg-[#07152e] p-8 text-center text-white space-y-3">
                     <span className="text-xs font-extrabold uppercase tracking-widest text-primary">
                        {c.govEyebrow}
                     </span>
                     <h2 className="text-2xl font-black">
                        {c.govTitle}
                     </h2>
                     <p className="text-sm text-slate-300 leading-relaxed">
                        {c.govText}
                     </p>
                  </div>
               </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-[#061329]">
               <div className="container mx-auto px-4 max-w-3xl">
                  <div className="text-center mb-16">
                     <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight text-white">
                        {c.faqTitleBefore}<span className="text-primary italic">{c.faqTitleHighlight}</span>
                     </h2>
                     <p className="text-slate-300">
                        {c.faqLead}
                     </p>
                  </div>

                  <Accordion type="single" collapsible className="space-y-4">
                     {c.faq.map((item, i) => (
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
                        {c.ctaTitle}
                     </h3>
                     <p className="mb-8 text-primary-foreground/90 text-base md:text-lg">
                        {c.ctaText}
                     </p>
                     <Button
                        size="lg"
                        variant="secondary"
                        className="h-14 px-10 rounded-full font-black text-base md:text-lg gap-2 shadow-xl hover:scale-105 transition-transform"
                        onClick={scrollToForm}
                     >
                        {c.startTrial}
                        <Zap className="w-5 h-5 fill-current" />
                     </Button>
                  </div>
               </div>
            </section>
         </main>

         <SiteFooter />

         <Dialog open={showExitPopup} onOpenChange={setShowExitPopup}>
            <DialogContent className="sm:max-w-[500px] border border-primary/30 bg-[#07152e] p-6 md:p-8 rounded-[32px] text-center space-y-6 text-white">
               <DialogHeader>
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mb-2">
                     <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <DialogTitle className="text-2xl font-black text-white tracking-tight text-center">
                     {c.exitTitle}
                  </DialogTitle>
                  <DialogDescription className="text-slate-300 text-sm text-center leading-relaxed">
                     {c.exitText}
                  </DialogDescription>
               </DialogHeader>

               <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col md:flex-row items-center gap-4 text-left">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                     <FileSpreadsheet className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                     <p className="text-sm font-bold text-white">{c.exitBoxTitle}</p>
                     <p className="text-xs text-slate-300">{c.exitBoxText}</p>
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
                     {c.exitCta}
                  </Button>
               </div>
            </DialogContent>
         </Dialog>
      </div>
   );
};

export default FreeTrialPage;
