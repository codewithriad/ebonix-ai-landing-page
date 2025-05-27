"use client";

import AIBlogSection from "@/components/AIBlogSection";
import AiChatBot from "./AiChatBot";
import SpeechTextApp from "./SpeechTextApp";
import { useTheme } from "./ThemeProvider";
import DarkPageLogo from "/dark-nav-logo.png";
import LightPageLogo from "/light-nav-logo.png";

const MarketingTeam = () => {
  const { theme } = useTheme();

  const src = theme === "dark" ? DarkPageLogo : LightPageLogo;

  return (
    <>
      <section className="mt-20">
        <div className="mt-8">
          <h2 className="text-center text-4xl text-foreground font-bold">
            <div className="flex justify-center items-center space-x-2">
              <img src={src} alt="main-logo" className="w-60 h-14" />
              <span>helps</span>
            </div>
            <span className="block text-transparent bg-gradient-to-r from-[#D3F36B] to-[#6BAAF3] bg-clip-text">
              Marketing Teams
            </span>
          </h2>
        </div>
        {/* ai blog section */}
        <div className="mt-16">
          <AIBlogSection />
        </div>

        {/* chat with ai section */}
        <div className="mt-16">
          <AiChatBot />
        </div>

        {/* ai speech to text section */}
        <div className="mt-20">
          <SpeechTextApp />
        </div>
      </section>
    </>
  );
};

export default MarketingTeam;
