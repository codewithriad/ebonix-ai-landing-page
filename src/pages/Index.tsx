import CoolestFeatures from "@/components/CoolestFeatures";
import Dashboard from "@/components/Dashboard/Dashboard";
import WhatItWork from "@/components/Dashboard/WhatItWork";
import Footer from "@/components/Footer";
import GetStartedSection from "@/components/GetStartedSection";
import HeroSection from "@/components/HeroSection";
import MarketingTeam from "@/components/MarketingTeam";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import React from "react";

const Index = React.memo(() => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mt-[7rem]">
        <HeroSection />
        <Dashboard />
        <MarketingTeam />
        <WhatItWork />
        <CoolestFeatures />
        <PricingSection />
        <TestimonialsSection />
        <GetStartedSection />
      </main>
      <Footer />
    </div>
  );
});

export default Index;
