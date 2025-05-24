import CoolestFeatures from "@/components/CoolestFeatures";
import Dashboard from "@/components/Dashboard/Dashboard";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mt-[7rem]">
        <HeroSection />
        <Dashboard />
        <CoolestFeatures />
        <PricingSection />
        {/* <FeaturesSection />
        <TestimonialsSection />
        <CTASection /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
