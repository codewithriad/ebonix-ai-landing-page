// pages/dashboard.tsx
import { IconHome, IconSettings } from "@tabler/icons-react";
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
      icon: "🛠️",
      title: "Tool One",
      description: "This is tool one.",
      prompt: "tool-one-prompt",
    },
    {
      icon: "📊",
      title: "Tool Two",
      description: "This is tool two.",
      prompt: "tool-two-prompt",
    },
    {
      icon: "📊",
      title: "Tool Two",
      description: "This is tool two.",
      prompt: "tool-two-prompt",
    },
    {
      icon: "📊",
      title: "Tool Two",
      description: "This is tool two.",
      prompt: "tool-two-prompt",
    },
    {
      icon: "📊",
      title: "Tool Two",
      description: "This is tool two.",
      prompt: "tool-two-prompt",
    },
    {
      icon: "📊",
      title: "Tool Two",
      description: "This is tool two.",
      prompt: "tool-two-prompt",
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
    <div className="bg-background w-full md:max-w-7xl text-foreground border-[1rem] border-grayBackground rounded-xl mx-auto mt-20 overflow-hidden">
      <div className="flex flex-col md:flex-row w-full">
        {/* Sidebar within dashboard */}

        {/* <div
          className={`${
            collapsed ? "w-20" : "w-64"
          } hidden md:block bg-grayBackground text-foreground transition-all duration-300 p-4 md:p-6 rounded-l-xl`}
        >
          </div> */}
        {/* Sidebar content */}

        <Sidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          menuItems={menuItems}
        />

        {/* Main dashboard content */}
        <div className="flex-1 p-4 md:p-6">
          <DashboardHeader />
          <SearchBox />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {tools.map((tool, idx) => (
              <ToolCard key={idx} {...tool} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
