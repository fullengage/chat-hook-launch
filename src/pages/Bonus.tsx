import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  CheckCircle2, 
  GraduationCap, 
  Wrench, 
  Users, 
  FileText, 
  Download, 
  ArrowLeft, 
  ShieldCheck, 
  Zap, 
  MessageSquare,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const Bonus = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set document title and meta description dynamically
    document.title = "Bônus Exclusivos - ChatHook";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Aproveite seus bônus exclusivos da ChatHook: treinamento individual de IA, ferramentas e templates, comunidade VIP e o Guia Completo do CRM WhatsApp.");
    }
  }, []);

  const handleConsultantRedirect = () => {
    const text = encodeURIComponent("Olá! Acabei de ver os bônus e gostaria de confirmar meu agendamento para o treinamento individual de IA e acessar a comunidade VIP.");
    window.open(`https://wa.me/5511955501090?text=${text}`, "_blank");
  };

  const handleDownloadPDF = () => {
    window.open("https://zzehxqgyberjewihsliu.supabase.co/storage/v1/object/public/pdfs/ChatHook_WhatsApp_CRM.pdf", "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 flex flex-col justify-between relative overflow-hidden">
      {/* Decorative Glow Backgrounds */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px] -z-10" />

      {/* Header */}
      <header className="py-4 border-b border-border/10 bg-background/50 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <img 
            src="/icons.png" 
            alt="Logo" 
            className="w-24 h-24 md:w-32 md:h-32 object-contain cursor-pointer hover:scale-105 transition-transform" 
            onClick={() => navigate("/")}
            id="bonus-header-logo"
          />
          <div className="flex items-center gap-2 text-[10px] md:text-sm text-muted-foreground bg-muted/30 px-4 py-2 rounded-full border border-border/10">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="font-bold uppercase tracking-widest leading-none">Área de Membros Segura</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 flex-grow flex items-center justify-center">
        <div className="max-w-4xl w-full space-y-12 animate-in fade-in slide-in-from-bottom-5 duration-700">
          
          {/* Header Title Section */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider border border-primary/20 animate-pulse">
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span>Bônus Premium Ativados</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-none italic uppercase">
              Seu Pacote de <span className="text-primary text-shadow-glow">Bônus Exclusivos</span>
            </h1>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Parabéns! Por ter iniciado seu período de teste do ChatHook, você acaba de liberar acesso a um conjunto de ferramentas e recursos estratégicos para impulsionar suas conversões no WhatsApp.
            </p>
          </div>

          {/* Grid de Bônus */}
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Bonus 1: Treinamento Exclusivo */}
            <div className="bg-card border border-border/50 p-6 md:p-8 rounded-[32px] hover:border-primary/45 transition-all group flex flex-col justify-between shadow-lg hover:shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl -z-10" />
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-black tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded-full">Bônus 01</span>
                    <span className="text-[10px] uppercase font-black tracking-widest text-yellow-500 bg-yellow-500/10 px-2 py-0.5 rounded-full">Exclusivo</span>
                  </div>
                  <h3 className="text-xl font-bold mt-2 text-foreground">Treinamento Guiado de IA</h3>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mt-2">
                    Uma sessão individual de 20 minutos com um consultor técnico para mapear o processo comercial da sua empresa, desenhar seu funil no Kanban e configurar o **Captain IA** para qualificar e responder seus leads automaticamente 24h por dia.
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-border/20 mt-6 flex items-center justify-between text-xs font-semibold text-primary">
                <span>Implantação guiada em 48h</span>
                <span className="bg-primary/10 px-2 py-1 rounded-md">Valor: R$ 297,00</span>
              </div>
            </div>

            {/* Bonus 2: Guia Completo CRM */}
            <div className="bg-card border border-border/50 p-6 md:p-8 rounded-[32px] hover:border-primary/45 transition-all group flex flex-col justify-between shadow-lg hover:shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl -z-10" />
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FileText className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-black tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded-full">Bônus 02</span>
                    <span className="text-[10px] uppercase font-black tracking-widest text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full">Liberado</span>
                  </div>
                  <h3 className="text-xl font-bold mt-2 text-foreground">Guia Completo CRM WhatsApp</h3>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mt-2">
                    O manual prático definitivo que ensina como organizar equipes de atendimento, criar métricas de performance comercial, reduzir o tempo de resposta inicial e estruturar um funil de vendas à prova de falhas utilizando o ChatHook.
                  </p>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-border/20 space-y-4">
                <Button 
                  id="btn-download-pdf-guide"
                  variant="outline" 
                  size="sm"
                  className="w-full h-11 border-primary/30 hover:border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                  onClick={handleDownloadPDF}
                >
                  <Download className="w-4 h-4" />
                  Baixar PDF do CRM WhatsApp
                </Button>
                <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground">
                  <span>E-book Digital Completo</span>
                  <span className="bg-primary/5 text-primary px-2 py-1 rounded-md">Grátis</span>
                </div>
              </div>
            </div>

            {/* Bonus 3: Ferramentas Exclusivas */}
            <div className="bg-card border border-border/50 p-6 md:p-8 rounded-[32px] hover:border-primary/45 transition-all group flex flex-col justify-between shadow-lg hover:shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl -z-10" />
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Wrench className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-black tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded-full">Bônus 03</span>
                    <span className="text-[10px] uppercase font-black tracking-widest text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded-full">Prático</span>
                  </div>
                  <h3 className="text-xl font-bold mt-2 text-foreground">Kit de Ferramentas & Scripts</h3>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mt-2">
                    Acesso imediato a templates validados de funis prontos para importar, scripts de mensagens e de contorno de objeções de alta conversão, além de prompts e bases de conhecimento prontas para treinar a inteligência artificial do seu negócio.
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-border/20 mt-6 flex items-center justify-between text-xs font-semibold text-primary">
                <span>Modelos de Copys e Funis inclusos</span>
                <span className="bg-primary/10 px-2 py-1 rounded-md">Valor: R$ 197,00</span>
              </div>
            </div>

            {/* Bonus 4: Grupo de Networking */}
            <div className="bg-card border border-border/50 p-6 md:p-8 rounded-[32px] hover:border-primary/45 transition-all group flex flex-col justify-between shadow-lg hover:shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl -z-10" />
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-black tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded-full">Bônus 04</span>
                    <span className="text-[10px] uppercase font-black tracking-widest text-purple-500 bg-purple-500/10 px-2 py-0.5 rounded-full">Comunidade</span>
                  </div>
                  <h3 className="text-xl font-bold mt-2 text-foreground">Comunidade VIP & Networking</h3>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mt-2">
                    Grupo restrito no WhatsApp que conecta fundadores, gestores comerciais e especialistas em CRM para trocar experiências, hacks de automação, fluxos eficientes e estratégias reais de vendas que estão funcionando no dia a dia.
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-border/20 mt-6 flex items-center justify-between text-xs font-semibold text-primary">
                <span>Conexão com +300 empresários</span>
                <span className="bg-primary/10 px-2 py-1 rounded-md">Exclusivo</span>
              </div>
            </div>

          </div>

          {/* Call to Action Centralized Box */}
          <div className="bg-muted/30 border border-border p-8 rounded-[40px] text-center space-y-6 max-w-2xl mx-auto relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-primary/5 opacity-50 -z-10" />
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto ring-8 ring-primary/5">
              <Zap className="w-8 h-8 text-primary fill-current" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-black text-foreground italic">PRONTO PARA RESGATAR SEUS BÔNUS?</h3>
              <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed">
                Fale com um de nossos consultores para **confirmar seu agendamento de treinamento gratuito** e liberar as ferramentas, o acesso ao grupo de networking e o suporte.
              </p>
            </div>
            
            <div className="flex flex-col gap-3 items-center">
              <Button 
                id="btn-redeem-bonus-whatsapp"
                variant="cta"
                className="w-full max-w-md h-16 text-base md:text-lg font-black gap-3 shadow-xl rounded-2xl group relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
                onClick={handleConsultantRedirect}
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity" />
                <MessageSquare className="w-6 h-6 fill-current animate-bounce" />
                Confirmar Treinamento & Resgatar Bônus
              </Button>
              
              <Button 
                id="btn-back-to-home"
                variant="ghost" 
                size="sm" 
                className="text-muted-foreground hover:text-foreground text-xs font-bold gap-2 mt-2"
                onClick={() => navigate("/")}
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar para a página inicial
              </Button>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Bonus;
