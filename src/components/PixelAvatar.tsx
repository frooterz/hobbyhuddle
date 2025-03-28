
import { cn } from "@/lib/utils";

type PixelAvatarProps = {
  src?: string;
  alt?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  level?: number;
  showLevel?: boolean;
};

const PixelAvatar = ({ 
  src, 
  alt = "User avatar", 
  className, 
  size = "md", 
  level = 1,
  showLevel = false
}: PixelAvatarProps) => {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-16 h-16",
    lg: "w-24 h-24",
  };
  
  return (
    <div className="relative">
      <div 
        className={cn(
          "relative overflow-hidden pixel-borders bg-vibe-blue-light", 
          sizeClasses[size],
          className
        )}
      >
        {src ? (
          <img 
            src={src} 
            alt={alt} 
            className="object-cover w-full h-full"
            style={{ imageRendering: 'pixelated' }}
          />
        ) : (
          <div className="w-full h-full bg-vibe-blue flex items-center justify-center text-white font-pixel text-sm">
            {alt.substring(0, 2).toUpperCase()}
          </div>
        )}
      </div>
      
      {showLevel && (
        <div className="absolute -top-3 -left-3 bg-vibe-yellow text-vibe-black font-pixel text-xs w-8 h-8 flex items-center justify-center pixel-borders-sm">
          {level}
        </div>
      )}
    </div>
  );
};

export default PixelAvatar;
