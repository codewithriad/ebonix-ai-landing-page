import React from "react";

interface ToolCardProps {
  icon: string;
  title: string;
  description: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-[#1e1e1e] p-4 rounded-xl text-white hover:bg-[#292929] transition w-full md:w-[200px]">
      <div className="text-3xl mb-2">{icon}</div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
};

export default ToolCard;
