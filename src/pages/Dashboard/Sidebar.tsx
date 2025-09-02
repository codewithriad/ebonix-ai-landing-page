import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { a } from "node_modules/framer-motion/dist/types.d-D0HXPxHm";
import { Link } from "react-router-dom";

const menu = {
  main: [
    { label: "Home", icon: "🏠" },
    { label: "Settings", icon: "⚙️" },
  ],
  tools: [
    { label: "Chat", icon: "💬" },
    { label: "Writer", icon: "✍️" },
    { label: "Coder", icon: "👨‍💻" },
    { label: "Imagine", icon: "🎨" },
    { label: "Transcriber", icon: "🎙️" },
    { label: "Voiceover", icon: "🎧" },
  ],
};

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <motion.aside
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", damping: 20 }}
      className={`${
        collapsed ? "w-16" : "w-64"
      } bg-[#111827] text-white h-screen flex flex-col transition-all duration-300 sticky top-0`}
    >
      {/* Top - Logo and Toggle */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {!collapsed && (
          <Link to={"/"}>
            <img
              src="/dark-nav-logo.png"
              className="h-8 w-auto"
              alt="main-logo"
            />
          </Link>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded hover:bg-gray-700"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Menu Items */}
      <div className="flex-1 overflow-y-auto px-2 py-4 space-y-4">
        {/* Main */}
        <div>
          {!collapsed && <p className="text-xs text-gray-400 mb-2">Main</p>}
          {menu.main.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700 cursor-pointer"
            >
              <span className="text-lg">{item.icon}</span>
              {!collapsed && <span>{item.label}</span>}
            </div>
          ))}
        </div>

        {/* Tools */}
        <div>
          {!collapsed && <p className="text-xs text-gray-400 mb-2">Tools</p>}
          {menu.tools.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700 cursor-pointer"
            >
              <span className="text-lg">{item.icon}</span>
              {!collapsed && <span>{item.label}</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom - Profile */}
      <div className="p-4 border-t border-gray-700 mt-auto flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="w-8 h-8 rounded-full"
        />
        {!collapsed && (
          <div>
            <p className="text-sm font-medium">Jayden Smith</p>
            <p className="text-xs text-gray-400">Free Plan</p>
          </div>
        )}
      </div>
    </motion.aside>
  );
};

export default Sidebar;
