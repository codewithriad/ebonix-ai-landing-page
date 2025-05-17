import React from "react";
import DashboardHeader from "./DashboardHeader";
import Sidebar from "./Sidebar";

const tools = [
  {
    icon: "💬",
    title: "Chat",
    description: "Chat with AI assistants",
  },
  {
    icon: "✍️",
    title: "Writer",
    description: "Write SEO optimized blogs, sales emails...",
  },
  {
    icon: "👨‍💻",
    title: "Coder",
    description: "Ready to write code at the speed of light?",
  },
  {
    icon: "🎨",
    title: "Imagine",
    description: "Create images from text",
  },
  {
    icon: "🧏",
    title: "Transcriber",
    description: "Instantly transcribe spoken words into text",
  },
  {
    icon: "🎙️",
    title: "Voiceover",
    description: "Convert your texts into lifelike speech",
  },
];

const Dashboard: React.FC = () => {
  return (
    <div className="flex bg-background md:max-w-7xl md:max-h-[740px] text-foreground border-[1rem] border-grayBackground rounded-xl mx-auto mt-20">
      <Sidebar />

      <div className="ml-32">
        <DashboardHeader />
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {tools.map((tool, idx) => (
            <ToolCard key={idx} {...tool} />
          ))}
        </div> */}
    </div>
  );
};

export default Dashboard;
