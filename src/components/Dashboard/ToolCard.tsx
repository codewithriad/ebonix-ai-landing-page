interface ToolCardProps {
  icon: string;
  title: string;
  description: string;
  prompt: string;
}

const ToolCard: React.FC<ToolCardProps> = ({
  icon,
  title,
  description,
  prompt,
}) => {
  return (
    <div className="bg-background p-4 rounded-xl text-foreground hover:bg-[#292929] transition-all duration-200 w-full max-w-xs border relative">
      <div className="text-2xl mb-2">{icon}</div>
      <h4 className="font-semibold text-base mb-1">{title}</h4>
      <p className="text-sm text-para mb-6">{description}</p>
      <div className="text-[10px] text-para border rounded px-2 py-1 absolute bottom-4">
        {prompt}
      </div>
    </div>
  );
};

export default ToolCard;
