
import { useState } from "react";
import PixelAvatar from "./PixelAvatar";
import HobbyBadge from "./HobbyBadge";
import PixelButton from "./PixelButton";
import { Heart, X, MessageCircle } from "lucide-react";

export type UserProfile = {
  id: string;
  name: string;
  age: number;
  bio: string;
  avatar?: string;
  hobbies: string[];
  location: string;
  level?: number;
};

type ProfileCardProps = {
  profile: UserProfile;
  onLike: (id: string) => void;
  onPass: (id: string) => void;
  onMessage?: (id: string) => void;
  showActions?: boolean;
  showConnect?: boolean;
};

const ProfileCard = ({ 
  profile, 
  onLike, 
  onPass, 
  onMessage,
  showActions = true,
  showConnect = false
}: ProfileCardProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right' | ''>('');
  
  const handleLike = () => {
    setDirection('right');
    setIsAnimating(true);
    setTimeout(() => {
      onLike(profile.id);
      setIsAnimating(false);
      setDirection('');
    }, 500);
  };
  
  const handlePass = () => {
    setDirection('left');
    setIsAnimating(true);
    setTimeout(() => {
      onPass(profile.id);
      setIsAnimating(false);
      setDirection('');
    }, 500);
  };
  
  const handleMessage = () => {
    onMessage?.(profile.id);
  };
  
  return (
    <div 
      className={`pixel-card-vertical w-full max-w-[250px] mx-auto transition-all duration-500 
        ${isAnimating ? `transform ${direction === 'right' ? 'translate-x-full opacity-0' : 'translate-x-[-100%] opacity-0'}` : ''}`}
    >
      <div className="absolute top-2 left-2 font-pixel text-2xl text-vibe-white">
        {profile.id}
      </div>
      
      <div className="flex flex-col items-center gap-4 mt-10 mb-4">
        <PixelAvatar 
          src={profile.avatar} 
          alt={profile.name} 
          size="lg" 
          level={profile.level || 1} 
          showLevel={true} 
        />
        <div className="text-center">
          <h3 className="font-pixel text-lg text-vibe-black">{profile.name}, {profile.age}</h3>
          <p className="text-xs mt-1 text-vibe-black">{profile.location}</p>
        </div>
      </div>
      
      <div className="mb-4 text-center">
        <p className="text-xs mb-2 text-vibe-black font-medium">{profile.bio}</p>
      </div>
      
      <div className="mt-auto mb-4">
        <h4 className="font-pixel text-xs mb-2 text-vibe-black text-center">VIBES</h4>
        <div className="flex flex-wrap justify-center gap-2">
          {profile.hobbies.map(hobby => (
            <HobbyBadge key={hobby} hobby={hobby} active />
          ))}
        </div>
      </div>
      
      {showActions && (
        <div className="flex justify-center gap-6 mt-auto">
          <PixelButton
            variant="danger"
            onClick={handlePass}
            className="rounded-full flex items-center justify-center w-12 h-12 p-0"
          >
            <X className="w-6 h-6" />
          </PixelButton>
          
          <PixelButton
            variant="success"
            onClick={handleLike}
            className="rounded-full flex items-center justify-center w-12 h-12 p-0"
          >
            <Heart className="w-6 h-6" />
          </PixelButton>
        </div>
      )}
      
      {showConnect && (
        <div className="flex justify-center mt-4">
          <PixelButton
            variant="primary"
            onClick={handleMessage}
            className="flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" /> Message
          </PixelButton>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
