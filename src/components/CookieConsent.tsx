import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";
import { Button } from "./ui/button";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("chathook-cookie-consent");
    if (!consent) {
      // Small timeout for entry animation elegance
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("chathook-cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("chathook-cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 animate-in slide-in-from-bottom-8 duration-500">
      <div className="bg-background/80 backdrop-blur-xl border border-border/80 rounded-2xl p-6 shadow-2xl relative flex flex-col gap-4">
        <button 
          onClick={handleDecline}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Fechar"
        >
          <X className="w-4 h-4" />
        </button>
        
        <div className="flex gap-4 items-start">
          <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
            <Cookie className="w-6 h-6 animate-pulse" />
          </div>
          <div className="space-y-1">
            <h4 className="font-bold text-foreground">Controle de Cookies & Privacidade</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Nós utilizamos cookies e tecnologias semelhantes para melhorar a sua experiência, 
              personalizar conteúdo e analisar o tráfego do nosso site, em conformidade com a LGPD.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 mt-2">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleDecline}
            className="text-xs w-full sm:w-auto order-2 sm:order-1"
          >
            Recusar
          </Button>
          <div className="flex gap-2 w-full justify-end order-1 sm:order-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="text-xs w-full sm:w-auto text-muted-foreground hover:text-foreground"
              asChild
            >
              <Link to="/privacidade">Preferências</Link>
            </Button>
            <Button 
              variant="cta" 
              size="sm" 
              onClick={handleAccept}
              className="text-xs w-full sm:w-auto"
            >
              Aceitar Todos
            </Button>
          </div>
        </div>
        
        <div className="text-[10px] text-muted-foreground/60 text-center sm:text-left">
          Ao clicar em "Aceitar Todos", você concorda com nossa{" "}
          <Link to="/privacidade" className="underline hover:text-primary transition-colors">
            Política de Privacidade
          </Link>{" "}
          e{" "}
          <Link to="/lgpd" className="underline hover:text-primary transition-colors">
            Termos de LGPD
          </Link>.
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
