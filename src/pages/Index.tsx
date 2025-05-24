import CoolestFeatures from "@/components/CoolestFeatures";
import Dashboard from "@/components/Dashboard/Dashboard";
import WhatItWork from "@/components/Dashboard/WhatItWork";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mt-[7rem]">
        <HeroSection />
        <Dashboard />
        <WhatItWork />
        <CoolestFeatures />
        <PricingSection />
        <TestimonialsSection />
        {/* <FeaturesSection />
        <CTASection /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
