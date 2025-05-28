// pages/dashboard.tsx
import {
  IconBook,
  IconCarouselHorizontal,
  IconCode,
  IconHeadphonesFilled,
  IconHome,
  IconMessageChatbot,
  IconMicrophone2,
  IconSettings,
  IconTopologyStar3,
} from "@tabler/icons-react";
import { Image } from "lucide-react";
import { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import SearchBox from "./SearchBox";
import Sidebar from "./Sidebar";
import ToolCard from "./ToolCard";

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { icon: <IconHome size={20} />, label: "Home" },
    { icon: <IconSettings size={20} />, label: "Settings" },
  ];

  const tools = [
    {
      icon: <IconMessageChatbot />,
      title: "Chat",
      description: "Chat with Ai assistants",
      prompt: "Ai Bot",
      className: "bg-cyan-500",
    },
    {
      icon: <IconBook />,
      title: "Writer",
      description: "Write SEO optimized blogs, sales emails and more...",
      prompt: "tool-two-prompt",
      className: "bg-amber-500",
    },
    {
      icon: <IconCode />,
      title: "Coader",
      description: "Ready to write code at the speed of light?",
      prompt: "tool-two-prompt",
      className: "bg-pink-500",
    },
    {
      icon: <Image />,
      title: "Imagine",
      description: "Visualize what you dream of. Create images from text.",
      prompt: "tool-two-prompt",
      className: "bg-violet-500",
    },
    {
      icon: <IconHeadphonesFilled />,
      title: "transcriber",
      description: "Instantly transcribe spoken words into text.",
      prompt: "tool-two-prompt",
      className: "bg-emerald-500",
    },
    {
      icon: <IconMicrophone2 />,
      title: "Voiceover",
      description: "Convert your texts into lifelike speech",
      prompt: "tool-two-prompt",
      className: "bg-lime-500",
    },
  ];

  const sidebarMenu = [
    { icon: "💬", label: "Chat" },
    { icon: "✍️", label: "Writer" },
    { icon: "👨‍💻", label: "Coder" },
    { icon: "🎨", label: "Imagine" },
    { icon: "🏠", label: "Home" },
    { icon: "📚", label: "Library" },
    { icon: "🎙️", label: "Voiceover" },
    { icon: "🔊", label: "Voice Isolator" },
  ];

  return (
    <div className="bg-background w-full md:max-w-7xl text-foreground border-[1rem] border-grayBackground rounded-xl mx-auto mt-10">
      <div className="flex flex-col md:flex-row w-full z-10 relative">
        {/* to-left corner icon */}
        <div className="absolute top-0 md:-top-8 left-0 md:-left-8 rotate-12 w-12 h-12 bg-[#e8f9ee] border-t border-l border-r-4 border-b-4 border-green-400 rounded-xl flex justify-center items-center z-50">
          <IconTopologyStar3 stroke={2} className="text-green-400 w-8 h-8" />
        </div>

        {/* Sidebar within dashboard */}

        {/* Sidebar content */}

        <Sidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          menuItems={menuItems}
        />

        {/* Main dashboard content */}
        <div className="flex-1 p-4 md:p-6 md:mx-8 lg:mx-24">
          <DashboardHeader />
          <SearchBox />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 relative">
            {/* bottom of tools card */}
            <div className="absolute -bottom-12 right-1/2 rotate-[30deg] w-12 h-12 bg-[#e8f9ee] border-t border-l border-r-4 border-b-4 border-[#00A6FB] rounded-xl flex justify-center items-center z-50">
              <IconCarouselHorizontal
                stroke={2}
                className="text-[#00A6FB] w-8 h-8"
              />
            </div>

            {tools.map((tool, idx) => (
              <ToolCard key={idx} {...tool} className={tool.className} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
