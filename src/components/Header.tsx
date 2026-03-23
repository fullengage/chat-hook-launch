import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/icons.png" alt="Logo" className="w-14 h-14" />
          </div>

          {/* Navigation */}
          <nav className="hidden xl:flex items-center space-x-6">
            <button onClick={() => scrollToSection('kanban')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              CRM & Kanban
            </button>
            <button onClick={() => scrollToSection('captain-ia')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Captain IA
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Como funciona
            </button>
            <button onClick={() => scrollToSection('plans-section')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Planos
            </button>
            <button onClick={() => scrollToSection('implementation')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Implantação
            </button>
            <button onClick={() => scrollToSection('security')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Segurança
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="outline-primary" size="sm" className="hidden sm:flex" onClick={() => scrollToSection('plans-section')}>
              Ver planos
            </Button>
            <Button variant="cta" size="sm" onClick={() => navigate("/teste-gratis")}>
              Agendar Demo
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;