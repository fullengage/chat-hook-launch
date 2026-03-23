import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FinalCTASection = () => {
  const navigate = useNavigate();
  const handleAction = () => {
    navigate("/teste-gratis");
  };

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-8 max-w-4xl mx-auto leading-tight">
          Pronto para transformar seu WhatsApp em uma operação organizada de atendimento e vendas?
        </h2>
        <p className="text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto font-medium">
          Diga adeus à bagunça e comece hoje mesmo a usar o CRM que vive dentro do seu WhatsApp.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
           <Button 
             size="xl" 
             variant="secondary"
             className="text-primary font-bold px-12 h-16 text-lg hover:scale-105 transition-transform"
             onClick={handleAction}
           >
             Implantar meu atendimento agora
           </Button>
        </div>
        
        <p className="mt-8 text-sm text-primary-foreground/60 font-medium">Implantação guiada por especialistas incluída.</p>
      </div>
      
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-32 -mt-32 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full -mr-32 -mb-32 blur-3xl"></div>
    </section>
  );
};

export default FinalCTASection;
