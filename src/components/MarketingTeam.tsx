"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const MarketingTeam = () => {
  const { theme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (theme === "system") {
      setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    } else {
      setIsDark(theme === "dark");
    }
  }, [theme]);

  return (
    <>
      <section className="mt-12">
        <div className="mt-8">
          <h2 className="text-center text-4xl text-foreground font-bold">
            <span>Ebonix Ai</span> helps
            <br />
            <span className="text-transparent bg-gradient-to-r from-[#D3F36B] to-[#6BAAF3] bg-clip-text">
              Marketing Teams
            </span>
          </h2>
        </div>
      </section>
    </>
  );
};

export default MarketingTeam;
