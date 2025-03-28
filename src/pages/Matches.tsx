
import { useState, useEffect } from "react";
import ProfileCard, { UserProfile } from "@/components/ProfileCard";
import Navbar from "@/components/Navbar";
import { useNavigate } from "react-router-dom";

// Mock matched profiles
const matchedProfiles: UserProfile[] = [
  {
    id: "1",
    name: "Alex",
    age: 28,
    bio: "Enthusiastic gamer and hiking lover. Looking for people to game with or explore trails!",
    avatar: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=150&h=150&q=80",
    hobbies: ["Gaming", "Hiking", "Cooking"],
    location: "Seattle, WA",
    level: 2
  },
  {
    id: "2",
    name: "Riley",
    age: 29,
    bio: "Music producer and gamer. Let's game together or collaborate on tracks!",
    avatar: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=150&h=150&q=80",
    hobbies: ["Music", "Gaming", "Art"],
    location: "Austin, TX",
    level: 3
  }
];

// Get liked profiles from localStorage if available
const getLikedProfiles = (): UserProfile[] => {
  try {
    const storedLikes = localStorage.getItem('likedProfiles');
    if (storedLikes) {
      return JSON.parse(storedLikes);
    }
  } catch (error) {
    console.error("Error loading liked profiles", error);
  }
  return [];
};

const MatchesPage = () => {
  // Combine mock profiles with any liked profiles from localStorage
  const [matches, setMatches] = useState<UserProfile[]>([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    // In a real app, this would be a fetch call to an API
    const likedProfiles = getLikedProfiles();
    // Combine stored likes with mock data, avoiding duplicates
    const combinedProfiles = [...matchedProfiles];
    
    likedProfiles.forEach(profile => {
      if (!combinedProfiles.some(p => p.id === profile.id)) {
        combinedProfiles.push(profile);
      }
    });
    
    setMatches(combinedProfiles);
  }, []);
  
  const handleMessage = (id: string) => {
    navigate(`/messages/${id}`);
  };
  
  const handleLike = (id: string) => {
    // This would typically be a server call to update the match status
    console.log(`Keeping match with ${id}`);
  };
  
  const handlePass = (id: string) => {
    // Remove the match from the list
    setMatches(prev => prev.filter(match => match.id !== id));
    
    // Also remove from localStorage if it exists there
    try {
      const storedLikes = localStorage.getItem('likedProfiles');
      if (storedLikes) {
        const likedProfiles = JSON.parse(storedLikes);
        const updatedLikes = likedProfiles.filter((profile: UserProfile) => profile.id !== id);
        localStorage.setItem('likedProfiles', JSON.stringify(updatedLikes));
      }
    } catch (error) {
      console.error("Error updating liked profiles", error);
    }
  };
  
  return (
    <div className="min-h-screen bg-white">
      <header className="py-6 text-center">
        <h1 className="font-pixel text-2xl text-vibe-black">Your Matches</h1>
        <p className="text-sm mt-2 text-vibe-black">People who share your vibes</p>
      </header>
      
      <main className="px-4 pb-24 pt-4 max-w-md mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
          {matches.length > 0 ? (
            matches.map(match => (
              <ProfileCard 
                key={match.id}
                profile={match}
                onLike={handleLike}
                onPass={handlePass}
                onMessage={handleMessage}
                showActions={false}
                showConnect={true}
              />
            ))
          ) : (
            <div className="pixel-card flex flex-col items-center justify-center p-8 col-span-full bg-[#DEDEDE]">
              <h2 className="font-pixel text-xl text-vibe-black mb-4">No matches yet!</h2>
              <p className="text-center mb-6">Keep exploring profiles to find people who share your interests.</p>
              <div className="animate-pulse-pixel">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="12" y="4" width="8" height="8" fill="#E43B44" />
                  <rect x="20" y="4" width="8" height="8" fill="#E43B44" />
                  <rect x="36" y="4" width="8" height="8" fill="#E43B44" />
                  <rect x="44" y="4" width="8" height="8" fill="#E43B44" />
                  <rect x="4" y="12" width="8" height="8" fill="#E43B44" />
                  <rect x="12" y="12" width="8" height="8" fill="#E43B44" />
                  <rect x="20" y="12" width="8" height="8" fill="#E43B44" />
                  <rect x="28" y="12" width="8" height="8" fill="#E43B44" />
                  <rect x="36" y="12" width="8" height="8" fill="#E43B44" />
                  <rect x="44" y="12" width="8" height="8" fill="#E43B44" />
                  <rect x="52" y="12" width="8" height="8" fill="#E43B44" />
                  <rect x="4" y="20" width="8" height="8" fill="#E43B44" />
                  <rect x="12" y="20" width="8" height="8" fill="#E43B44" />
                  <rect x="20" y="20" width="8" height="8" fill="#E43B44" />
                  <rect x="28" y="20" width="8" height="8" fill="#E43B44" />
                  <rect x="36" y="20" width="8" height="8" fill="#E43B44" />
                  <rect x="44" y="20" width="8" height="8" fill="#E43B44" />
                  <rect x="52" y="20" width="8" height="8" fill="#E43B44" />
                  <rect x="12" y="28" width="8" height="8" fill="#E43B44" />
                  <rect x="20" y="28" width="8" height="8" fill="#E43B44" />
                  <rect x="28" y="28" width="8" height="8" fill="#E43B44" />
                  <rect x="36" y="28" width="8" height="8" fill="#E43B44" />
                  <rect x="44" y="28" width="8" height="8" fill="#E43B44" />
                  <rect x="20" y="36" width="8" height="8" fill="#E43B44" />
                  <rect x="28" y="36" width="8" height="8" fill="#E43B44" />
                  <rect x="36" y="36" width="8" height="8" fill="#E43B44" />
                  <rect x="28" y="44" width="8" height="8" fill="#E43B44" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Navbar />
    </div>
  );
};

export default MatchesPage;
