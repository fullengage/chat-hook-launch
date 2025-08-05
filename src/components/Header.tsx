import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const scrollToPlans = () => {
    const plansSection = document.getElementById('plans-section');
    plansSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBenefits = () => {
    const benefitsSection = document.getElementById('benefits-section');
    benefitsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHowItWorks = () => {
    const howItWorksSection = document.getElementById('how-it-works');
    howItWorksSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-bold text-foreground">Chathook</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={scrollToHowItWorks}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Como funciona
            </button>
            <button
              onClick={scrollToPlans}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Planos
            </button>
            <button
              onClick={scrollToBenefits}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Benefícios
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="outline-primary" size="sm" onClick={scrollToPlans}>
              Ver planos
            </Button>
            <Button variant="cta" size="sm" onClick={scrollToPlans}>
              Teste grátis
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;