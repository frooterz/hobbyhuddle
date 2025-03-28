
import { useState, useEffect } from "react";
import ProfileCard, { UserProfile } from "@/components/ProfileCard";
import PixelButton from "@/components/PixelButton";
import Navbar from "@/components/Navbar";
import { Shuffle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

// Mock data for profiles
const mockProfiles: UserProfile[] = [
  {
    id: "profile-1",
    name: "Jordan",
    age: 24,
    bio: "Pixel art enthusiast and indie game lover. Looking for friends to game with!",
    hobbies: ["Gaming", "Art", "Music"],
    location: "Portland, OR",
    level: 3
  },
  {
    id: "profile-2",
    name: "Taylor",
    age: 26,
    bio: "Hiking addict and amateur chef. Would love to share recipes or hit the trails!",
    hobbies: ["Hiking", "Cooking", "Photography"],
    location: "Denver, CO",
    level: 2
  },
  {
    id: "profile-3",
    name: "Casey",
    age: 29,
    bio: "Bookworm and board game collector. Always up for a good game night!",
    hobbies: ["Reading", "Gaming", "Crafting"],
    location: "Chicago, IL",
    level: 4
  },
  {
    id: "profile-4",
    name: "Morgan",
    age: 25,
    bio: "Music producer and concert enthusiast. Let's talk about your favorite bands!",
    hobbies: ["Music", "Art", "Dancing"],
    location: "Austin, TX",
    level: 5
  }
];

// Function to save liked profiles to localStorage
const saveLikedProfile = (profile: UserProfile) => {
  try {
    const existingLikes = localStorage.getItem('likedProfiles');
    let likedProfiles: UserProfile[] = existingLikes ? JSON.parse(existingLikes) : [];
    
    // Check if profile is already liked to avoid duplicates
    if (!likedProfiles.some(p => p.id === profile.id)) {
      likedProfiles.push(profile);
      localStorage.setItem('likedProfiles', JSON.stringify(likedProfiles));
    }
  } catch (error) {
    console.error("Error saving liked profile", error);
  }
};

const IndexPage = () => {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [profiles, setProfiles] = useState<UserProfile[]>([]);
  
  useEffect(() => {
    // In a real app, this would be a fetch call to an API
    setProfiles(mockProfiles);
  }, []);
  
  const currentProfile = profiles[currentProfileIndex];
  
  const handleLike = (id: string) => {
    if (currentProfile) {
      // Save the liked profile to localStorage
      saveLikedProfile(currentProfile);
      
      toast({
        title: "New Match!",
        description: `You matched with ${currentProfile.name}`,
      });
    }
    
    // Move to the next profile
    if (currentProfileIndex < profiles.length - 1) {
      setCurrentProfileIndex(prev => prev + 1);
    } else {
      // Reset to the beginning if we've gone through all profiles
      setCurrentProfileIndex(0);
      toast({
        title: "That's everyone!",
        description: "You've seen all profiles. Starting over...",
      });
    }
  };
  
  const handlePass = (id: string) => {
    // Move to the next profile
    if (currentProfileIndex < profiles.length - 1) {
      setCurrentProfileIndex(prev => prev + 1);
    } else {
      // Reset to the beginning if we've gone through all profiles
      setCurrentProfileIndex(0);
      toast({
        title: "That's everyone!",
        description: "You've seen all profiles. Starting over...",
      });
    }
  };
  
  const handleShuffle = () => {
    // Shuffle the profiles
    const shuffled = [...profiles].sort(() => Math.random() - 0.5);
    setProfiles(shuffled);
    setCurrentProfileIndex(0);
    
    toast({
      title: "Profiles Shuffled!",
      description: "Finding new vibes for you...",
    });
  };
  
  if (!currentProfile) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="min-h-screen bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAXSURBVDiNY/z//z8DNYCJgUbAaCANDQQAE4kMGO4wIRQAAAAASUVORK5CYII=')] bg-repeat">
      <header className="py-6 text-center">
        <h1 className="font-pixel text-2xl text-vibe-black">VibeMatch</h1>
        <p className="text-sm mt-2">Find friends with matching vibes</p>
      </header>
      
      <main className="px-4 pb-24 pt-4 flex flex-col items-center">
        <div className="mb-6 flex justify-center">
          {currentProfile && (
            <ProfileCard 
              profile={currentProfile}
              onLike={handleLike}
              onPass={handlePass}
            />
          )}
        </div>
        
        <PixelButton
          variant="secondary"
          onClick={handleShuffle}
          className="flex items-center gap-2"
        >
          <Shuffle className="w-4 h-4" /> Shuffle Vibes
        </PixelButton>
      </main>
      
      <Navbar />
    </div>
  );
};

export default IndexPage;
