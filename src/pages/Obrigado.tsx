import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle2, MessageSquare, ShieldCheck, ArrowLeft, Clock, Zap, Calendar, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

// Helper para calcular o próximo dia útil
const getNextBusinessDayDetails = () => {
  const date = new Date();
  const day = date.getDay(); // 0 = Domingo, 6 = Sábado
  let daysToAdd = 1;

  if (day === 5) {
    // Sexta -> Segunda
    daysToAdd = 3;
  } else if (day === 6) {
    // Sábado -> Segunda
    daysToAdd = 2;
  }

  const targetDate = new Date(date.getTime() + daysToAdd * 24 * 60 * 60 * 1000);
  
  // Formatador da data por extenso
  const formatter = new Intl.DateTimeFormat('pt-BR', { 
    weekday: 'long', 
    day: 'numeric', 
    month: 'long' 
  });
  
  const dateStr = formatter.format(targetDate);
  // Capitaliza a primeira letra
  const formattedDate = dateStr.charAt(0).toUpperCase() + dateStr.slice(1);

  return {
    label: daysToAdd === 1 ? `Amanhã (${formattedDate})` : formattedDate,
    rawLabel: daysToAdd === 1 ? "amanhã" : formattedDate.split(",")[0].toLowerCase(),
    formattedDay: formattedDate.split(",")[0], // Ex: "Segunda-feira"
  };
};

const Obrigado = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const nextDayInfo = getNextBusinessDayDetails();

  // Recupera o nome e whatsapp passados pelo estado da rota ou do localStorage (fallback para caso de F5/refresh)
  const state = (location.state as { name?: string; whatsapp?: string }) || {};
  const [name, setName] = useState<string>(() => {
    return state.name || localStorage.getItem("chathook_lead_name") || "";
  });
  const [whatsapp, setWhatsapp] = useState<string>(() => {
    return state.whatsapp || localStorage.getItem("chathook_lead_whatsapp") || "";
  });

  // Lista de horários padrão para agendamento
  const timeSlots = [
    { value: "09:30", label: "09h30" },
    { value: "10:30", label: "10h30" },
    { value: "14:00", label: "14h00" },
    { value: "15:30", label: "15h30" },
    { value: "outro", label: "Outro horário" }
  ];

  const [selectedSlot, setSelectedSlot] = useState<string>("09:30");

  useEffect(() => {
    window.scrollTo(0, 0);

    // Disparar eventos de conversão de tráfego pago
    if (typeof window !== "undefined") {
      const anyWindow = window as any;

      if (typeof anyWindow.fbq === "function") {
        anyWindow.fbq("track", "Lead");
      }

      if (typeof anyWindow.gtag === "function") {
        const conversionLabel = import.meta.env.VITE_GOOGLE_ADS_CONVERSION_LABEL || "teste-gratis";
        anyWindow.gtag("event", "conversion", {
          send_to: `AW-18050299093/${conversionLabel}`,
        });
      }
    }
  }, []);

  // Geração do texto personalizado para o WhatsApp
  const leadName = name ? name.trim() : "Cliente";
  const slotLabel = timeSlots.find(s => s.value === selectedSlot)?.label;
  
  let personalizedText = "";
  if (selectedSlot === "outro") {
    personalizedText = `Olá, Richard! Acabei de solicitar o teste de 7 dias para ${leadName}. Gostaria de acelerar minha implantação e combinar um melhor horário para nossa ativação guiada.`;
  } else {
    personalizedText = `Olá, Richard! Acabei de solicitar o teste de 7 dias para ${leadName}. Gostaria de acelerar minha implantação e já agendar nossa ativação guiada para ${nextDayInfo.rawLabel} às ${slotLabel}.`;
  }

  const handleWhatsAppRedirect = () => {
    const encodedText = encodeURIComponent(personalizedText);
    // Usamos window.location.href para redirecionar na mesma aba. Isso evita páginas em branco 
    // e abre diretamente o aplicativo nativo do WhatsApp no celular/computador.
    window.location.href = `https://wa.me/5511955501090?text=${encodedText}`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 flex flex-col justify-between relative overflow-hidden">
      {/* Decorative Glow Backgrounds */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />

      {/* Header */}
      <header className="py-4 border-b border-border/10 bg-background/50 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <img 
            src="/icons.png" 
            alt="Logo" 
            className="w-24 h-24 md:w-32 md:h-32 object-contain cursor-pointer hover:scale-105 transition-transform" 
            onClick={() => navigate("/")}
            width={128}
            height={128}
          />
          <div className="flex items-center gap-2 text-[10px] md:text-sm text-muted-foreground bg-muted/30 px-4 py-2 rounded-full border border-border/10">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="font-bold uppercase tracking-widest leading-none">Conexão Segura SSL</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 flex-grow flex items-center justify-center">
        <div className="max-w-2xl w-full space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
          
          {/* Card Success container */}
          <div className="bg-card border border-border p-6 md:p-10 rounded-[32px] shadow-2xl text-center space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-green-500 to-emerald-400" />
            
            {/* Success icon */}
            <div className="relative w-20 h-20 mx-auto">
              <div className="absolute inset-0 bg-green-500/20 rounded-full blur-lg animate-pulse" />
              <div className="relative w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center ring-8 ring-green-500/5">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl font-black text-foreground tracking-tight leading-none italic">
                Quase tudo pronto{name ? `, ${name.split(" ")[0]}` : ""}!
              </h1>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-lg mx-auto">
                Seu cadastro de teste foi recebido. Para você não perder tempo no caos do WhatsApp, agende agora a sua **ativação guiada gratuita (20min)**.
              </p>
            </div>

            {/* Interactive Scheduler Widget */}
            <div className="bg-muted/40 p-6 rounded-2xl border border-border/50 text-left space-y-5">
              <div className="flex items-center gap-2 text-primary font-bold text-sm">
                <Calendar className="w-4 h-4" />
                <span>Escolha seu horário para a ativação:</span>
              </div>
              
              <div className="p-3 bg-background/50 border border-border/40 rounded-xl flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Dia do agendamento:</span>
                <span className="font-extrabold text-foreground bg-primary/10 text-primary px-3 py-1 rounded-full uppercase tracking-tighter">
                  {nextDayInfo.label}
                </span>
              </div>

              {/* Time slots selector */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {timeSlots.map((slot) => {
                  const isSelected = selectedSlot === slot.value;
                  return (
                    <button
                      key={slot.value}
                      type="button"
                      onClick={() => setSelectedSlot(slot.value)}
                      className={`h-12 text-xs font-bold rounded-xl border flex items-center justify-center gap-2 transition-all duration-200 ${
                        isSelected
                          ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 scale-[1.03]"
                          : "bg-background/80 hover:bg-background border-border/60 hover:border-primary/40 text-foreground"
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5" />}
                      {slot.label}
                    </button>
                  );
                })}
              </div>

              {/* Message preview box */}
              <div className="space-y-2">
                <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Visualização da mensagem que será enviada:</p>
                <div className="p-4 bg-background/80 border border-border/40 rounded-xl text-xs text-muted-foreground italic leading-relaxed relative">
                  <div className="absolute top-0 right-0 bg-primary/5 text-primary text-[9px] font-bold px-2 py-0.5 rounded-bl-xl border-l border-b border-border/30">
                    Mensagem do WhatsApp
                  </div>
                  "{personalizedText}"
                </div>
              </div>
            </div>

            {/* Steps explanation */}
            <div className="grid gap-4 md:grid-cols-3 text-left bg-muted/20 p-5 rounded-2xl border border-border/20">
              <div className="flex gap-2 items-start">
                <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-[10px] mt-0.5 shrink-0">1</div>
                <div>
                  <h5 className="font-bold text-xs text-foreground">Agende e clique</h5>
                  <p className="text-[10px] text-muted-foreground">Selecione o horário acima e clique no botão abaixo.</p>
                </div>
              </div>
              <div className="flex gap-2 items-start">
                <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-[10px] mt-0.5 shrink-0">2</div>
                <div>
                  <h5 className="font-bold text-xs text-foreground">Confirmação</h5>
                  <p className="text-[10px] text-muted-foreground">Richard receberá o horário escolhido e confirmará no chat.</p>
                </div>
              </div>
              <div className="flex gap-2 items-start">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-500 to-emerald-400 text-white flex items-center justify-center font-bold text-[10px] mt-0.5 shrink-0 shadow-md">3</div>
                <div>
                  <h5 className="font-bold text-xs text-foreground">Liberação rápida</h5>
                  <p className="text-[10px] text-muted-foreground">Fazemos a ativação guiada e seu CRM fica pronto para rodar.</p>
                </div>
              </div>
            </div>

            {/* CRM PDF Bonus Download Section */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 p-6 rounded-2xl text-left space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-xl -z-10" />
              <div className="flex items-center gap-2 text-primary font-bold text-base">
                <span>🎁 Seu Bônus Especial Liberado!</span>
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Aqui está o seu <strong>Guia Completo CRM ChatHook WhatsApp</strong> para acelerar seus resultados comerciais. Clique no botão abaixo para baixar agora:
              </p>
              <Button 
                variant="outline" 
                size="sm"
                className="w-full h-11 border-primary/30 hover:border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                onClick={() => window.open("https://zzehxqgyberjewihsliu.supabase.co/storage/v1/object/public/pdfs/ChatHook_WhatsApp_CRM.pdf", "_blank")}
              >
                Baixar PDF do CRM WhatsApp
              </Button>
            </div>

            {/* Call to Action Button */}
            <div className="space-y-3">
              <Button 
                className="w-full h-16 text-lg font-black gap-3 shadow-xl shadow-primary/25 rounded-2xl group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-primary/45"
                onClick={handleWhatsAppRedirect}
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity" />
                <MessageSquare className="w-6 h-6 fill-current animate-bounce" />
                {selectedSlot === "outro" ? "Falar com Consultor no WhatsApp" : `Confirmar Horário (${slotLabel})`}
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-muted-foreground hover:text-foreground text-xs font-bold gap-2"
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

export default Obrigado;
