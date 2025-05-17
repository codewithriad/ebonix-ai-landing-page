import { IconArrowBarLeft, IconArrowBarRight } from "@tabler/icons-react";
import React, { useState } from "react";

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { icon: "🏠", label: "Home" },
    { icon: "📚", label: "Library" },
    { icon: "💬", label: "Chat" },
    { icon: "✍️", label: "Writer" },
    { icon: "👨‍💻", label: "Coder" },
    { icon: "🎨", label: "Imagine" },
    { icon: "🎙️", label: "Voiceover" },
    { icon: "🔊", label: "Voice Isolator" },
  ];
  return (
    <div
      className={`${
        collapsed ? "w-20" : "w-64"
      } h-[700px] bg-grayBackground text-foreground p-6 relative transition-all duration-300`}
    >
      <div className="flex justify-between items-center">
        {!collapsed && <h1 className="text-2xl font-bold mb-8">Ebonix Ai</h1>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute top-4 right-4 text-gray-400"
        >
          {collapsed ? (
            <IconArrowBarRight size={20} className="text-para" />
          ) : (
            <IconArrowBarLeft size={20} className="text-para" />
          )}
        </button>
      </div>

      <ul className="space-y-3 text-base mt-12">
        {menuItems.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span>{item.icon}</span>
            {!collapsed && <span>{item.label}</span>}
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="text-base text-gray-400 absolute bottom-4">
        <p>{!collapsed ? "Jaylen Dean" : "👤"}</p>
        {!collapsed && <p className="text-[10px]">Free Plan</p>}
      </div>
    </div>
  );
};

export default Sidebar;
