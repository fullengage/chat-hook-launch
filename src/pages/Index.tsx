import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import PlansSection from "@/components/PlansSection";
import BenefitsSection from "@/components/BenefitsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <PlansSection />
      <div id="benefits-section">
        <BenefitsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
