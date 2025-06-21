import CoolestFeatures from "@/components/CoolestFeatures";
import Dashboard from "@/components/Dashboard/Dashboard";
import WhatItWork from "@/components/Dashboard/WhatItWork";
import ChatWidget from "@/components/Fixed/ChatWidget";
import Footer from "@/components/Footer";
import GetStartedSection from "@/components/GetStartedSection";
import HeroSection from "@/components/HeroSection";
import MarketingTeam from "@/components/MarketingTeam";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import React from "react";
import AiDemoComingSoon from "./HomePage/AiDemoComingSoon";
import TextToVoice from "./HomePage/TextToVoice";

const Index = React.memo(() => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mt-[7rem]">
        <HeroSection />
        <Dashboard />
        <AiDemoComingSoon />
        <TextToVoice />
        <MarketingTeam />
        <WhatItWork />
        <CoolestFeatures />
        <PricingSection />
        <TestimonialsSection />
        <GetStartedSection />
        <ChatWidget />
      </main>
      <Footer />
    </div>
  );
});

export default Index;
