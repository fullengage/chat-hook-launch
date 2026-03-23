import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import KanbanSection from "@/components/KanbanSection";
import CaptainIASection from "@/components/CaptainIASection";
import TeamSection from "@/components/TeamSection";
import HowItWorks from "@/components/HowItWorks";
import ComparisonSection from "@/components/ComparisonSection";
import WhoIsItForSection from "@/components/WhoIsItForSection";
import PlansSection from "@/components/PlansSection";
import ImplementationSection from "@/components/ImplementationSection";
import SecuritySection from "@/components/SecuritySection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <KanbanSection />
      <CaptainIASection />
      <TeamSection />
      <HowItWorks />
      <ComparisonSection />
      <WhoIsItForSection />
      <PlansSection />
      <ImplementationSection />
      <SecuritySection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
