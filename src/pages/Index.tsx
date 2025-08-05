import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import PlansSection from "@/components/PlansSection";
import BenefitsSection from "@/components/BenefitsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <PlansSection />
      <BenefitsSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
