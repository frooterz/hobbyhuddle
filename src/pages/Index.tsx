
import { useState, useEffect } from "react";
import ProfileCard, { UserProfile } from "@/components/ProfileCard";
import Navbar from "@/components/Navbar";
import { toast } from "@/hooks/use-toast";

// Mock data
const mockProfiles: UserProfile[] = [
  {
    id: "1",
    name: "Alex",
    age: 28,
    bio: "Enthusiastic gamer and hiking lover. Looking for people to game with or explore trails!",
    avatar: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=150&h=150&q=80",
    hobbies: ["Gaming", "Hiking", "Cooking"],
    location: "Seattle, WA"
  },
  {
    id: "2",
    name: "Jordan",
    age: 25,
    bio: "Art lover and amateur musician. Would love to jam together or visit galleries!",
    hobbies: ["Art", "Music", "Reading"],
    location: "Portland, OR"
  },
  {
    id: "3",
    name: "Casey",
    age: 30,
    bio: "Sports fanatic and cooking enthusiast. Let's catch a game or try a new recipe together!",
    avatar: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=150&h=150&q=80",
    hobbies: ["Sports", "Cooking", "Gaming"],
    location: "San Francisco, CA"
  },
  {
    id: "4",
    name: "Taylor",
    age: 26,
    bio: "Book worm and hiking enthusiast. Tell me about your favorite trails and novels!",
    hobbies: ["Reading", "Hiking", "Art"],
    location: "Denver, CO"
  },
  {
    id: "5",
    name: "Riley",
    age: 29,
    bio: "Music producer and gamer. Let's game together or collaborate on tracks!",
    avatar: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=150&h=150&q=80",
    hobbies: ["Music", "Gaming", "Art"],
    location: "Austin, TX"
  }
];

const DiscoverPage = () => {
  const [profiles, setProfiles] = useState<UserProfile[]>([]);
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  
  useEffect(() => {
    // In a real app, this would be a fetch call to an API
    setProfiles(mockProfiles);
  }, []);
  
  const handleLike = (id: string) => {
    toast({
      title: "Hobby Match!",
      description: "You liked this profile!",
    });
    
    if (currentProfileIndex < profiles.length - 1) {
      setCurrentProfileIndex(prev => prev + 1);
    } else {
      // No more profiles to show
      setProfiles([]);
    }
  };
  
  const handlePass = (id: string) => {
    if (currentProfileIndex < profiles.length - 1) {
      setCurrentProfileIndex(prev => prev + 1);
    } else {
      // No more profiles to show
      setProfiles([]);
    }
  };
  
  const currentProfile = profiles[currentProfileIndex];
  
  return (
    <div className="min-h-screen bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAXSURBVDiNY/z//z8DNYCJgUbAaCANDQQAE4kMGO4wIRQAAAAASUVORK5CYII=')] bg-repeat">
      <header className="py-6 text-center">
        <h1 className="font-pixel text-2xl text-game-black">HobbyHive</h1>
        <p className="text-sm mt-2">Find friends who share your hobbies!</p>
      </header>
      
      <main className="px-4 pb-24 pt-4 max-w-md mx-auto">
        {profiles.length > 0 ? (
          <ProfileCard 
            profile={currentProfile}
            onLike={handleLike}
            onPass={handlePass}
          />
        ) : (
          <div className="pixel-card flex flex-col items-center justify-center p-8">
            <h2 className="font-pixel text-xl text-game-black mb-4">No more profiles!</h2>
            <p className="text-center mb-6">We've run out of people to show you. Check back later!</p>
            <div className="animate-bounce-slight">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="8" height="8" fill="#63C74D" />
                <rect x="12" y="4" width="8" height="8" fill="#63C74D" />
                <rect x="20" y="4" width="8" height="8" fill="#63C74D" />
                <rect x="28" y="4" width="8" height="8" fill="#63C74D" />
                <rect x="36" y="4" width="8" height="8" fill="#63C74D" />
                <rect x="44" y="4" width="8" height="8" fill="#63C74D" />
                <rect x="52" y="4" width="8" height="8" fill="#63C74D" />
                <rect x="4" y="12" width="8" height="8" fill="#63C74D" />
                <rect x="52" y="12" width="8" height="8" fill="#63C74D" />
                <rect x="4" y="20" width="8" height="8" fill="#63C74D" />
                <rect x="52" y="20" width="8" height="8" fill="#63C74D" />
                <rect x="4" y="28" width="8" height="8" fill="#63C74D" />
                <rect x="52" y="28" width="8" height="8" fill="#63C74D" />
                <rect x="4" y="36" width="8" height="8" fill="#63C74D" />
                <rect x="52" y="36" width="8" height="8" fill="#63C74D" />
                <rect x="4" y="44" width="8" height="8" fill="#63C74D" />
                <rect x="52" y="44" width="8" height="8" fill="#63C74D" />
                <rect x="4" y="52" width="8" height="8" fill="#63C74D" />
                <rect x="12" y="52" width="8" height="8" fill="#63C74D" />
                <rect x="20" y="52" width="8" height="8" fill="#63C74D" />
                <rect x="28" y="52" width="8" height="8" fill="#63C74D" />
                <rect x="36" y="52" width="8" height="8" fill="#63C74D" />
                <rect x="44" y="52" width="8" height="8" fill="#63C74D" />
                <rect x="52" y="52" width="8" height="8" fill="#63C74D" />
                <rect x="20" y="28" width="8" height="8" fill="#4D97FF" />
                <rect x="36" y="28" width="8" height="8" fill="#4D97FF" />
                <rect x="20" y="36" width="8" height="8" fill="#4D97FF" />
                <rect x="28" y="36" width="8" height="8" fill="#4D97FF" />
                <rect x="36" y="36" width="8" height="8" fill="#4D97FF" />
              </svg>
            </div>
          </div>
        )}
      </main>
      
      <Navbar />
    </div>
  );
};

export default DiscoverPage;
