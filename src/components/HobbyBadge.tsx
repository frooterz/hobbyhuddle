
import { cn } from "@/lib/utils";

type HobbyBadgeProps = {
  hobby: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
};

const HobbyBadge = ({ hobby, active = false, onClick, className }: HobbyBadgeProps) => {
  const colorMap: Record<string, string> = {
    "Gaming": "bg-vibe-blue",
    "Hiking": "bg-vibe-green",
    "Cooking": "bg-vibe-orange",
    "Art": "bg-vibe-purple",
    "Music": "bg-vibe-pink",
    "Reading": "bg-vibe-yellow",
    "Sports": "bg-vibe-red",
  };
  
  const defaultColor = "bg-vibe-teal";
  const bgColor = colorMap[hobby] || defaultColor;
  
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-3 py-1 text-xs font-pixel text-white transition-all",
        active ? `${bgColor} pixel-borders-sm` : "bg-gray-200 border-2 border-gray-400",
        "hover:translate-y-[1px]",
        className
      )}
    >
      {hobby}
    </button>
  );
};

export default HobbyBadge;
