
import { useState } from "react";
import PixelAvatar from "@/components/PixelAvatar";
import HobbyBadge from "@/components/HobbyBadge";
import PixelButton from "@/components/PixelButton";
import Navbar from "@/components/Navbar";
import { toast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { PlusCircle } from "lucide-react";

// List of available hobbies
const allHobbies = [
  "Gaming", "Hiking", "Cooking", "Art", 
  "Music", "Reading", "Sports", "Photography",
  "Gardening", "Crafting", "Dancing", "Writing"
];

const ProfilePage = () => {
  const [name, setName] = useState("Your Name");
  const [age, setAge] = useState(25);
  const [bio, setBio] = useState("Tell other users about yourself and your hobbies!");
  const [location, setLocation] = useState("Your City, State");
  const [selectedHobbies, setSelectedHobbies] = useState<string[]>(["Gaming", "Hiking"]);
  const [isEditing, setIsEditing] = useState(false);
  const [customHobby, setCustomHobby] = useState("");
  
  const toggleHobby = (hobby: string) => {
    if (selectedHobbies.includes(hobby)) {
      setSelectedHobbies(prev => prev.filter(h => h !== hobby));
    } else {
      if (selectedHobbies.length < 5) {
        setSelectedHobbies(prev => [...prev, hobby]);
      } else {
        toast({
          title: "Maximum Hobbies Reached",
          description: "You can select up to 5 hobbies.",
          variant: "destructive"
        });
      }
    }
  };
  
  const addCustomHobby = () => {
    if (!customHobby.trim()) {
      toast({
        title: "Empty Hobby",
        description: "Please enter a hobby name",
        variant: "destructive"
      });
      return;
    }
    
    if (selectedHobbies.includes(customHobby)) {
      toast({
        title: "Duplicate Hobby",
        description: "This hobby is already in your list",
        variant: "destructive"
      });
      return;
    }
    
    if (selectedHobbies.length >= 5) {
      toast({
        title: "Maximum Hobbies Reached",
        description: "You can select up to 5 hobbies.",
        variant: "destructive"
      });
      return;
    }
    
    setSelectedHobbies(prev => [...prev, customHobby]);
    setCustomHobby("");
  };
  
  const handleSave = () => {
    // Validate
    if (!name.trim() || !bio.trim() || !location.trim() || selectedHobbies.length === 0) {
      toast({
        title: "Missing Information",
        description: "Please complete all fields and select at least one hobby.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, this would be a server call to update the profile
    toast({
      title: "Profile Updated",
      description: "Your changes have been saved!",
    });
    
    setIsEditing(false);
  };
  
  return (
    <div className="min-h-screen bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAXSURBVDiNY/z//z8DNYCJgUbAaCANDQQAE4kMGO4wIRQAAAAASUVORK5CYII=')] bg-repeat">
      <header className="py-6 text-center">
        <h1 className="font-pixel text-2xl text-game-black">Your Profile</h1>
        <p className="text-sm mt-2">Edit your information and hobbies</p>
      </header>
      
      <main className="px-4 pb-24 pt-4 max-w-md mx-auto">
        <div className="pixel-card mb-6">
          <div className="flex items-center gap-4 mb-6">
            <PixelAvatar size="lg" alt={name} />
            
            <div>
              {isEditing ? (
                <div className="space-y-2">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="pixel-input w-full"
                  />
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(parseInt(e.target.value || "0"))}
                    placeholder="Age"
                    className="pixel-input w-full"
                  />
                </div>
              ) : (
                <>
                  <h2 className="font-pixel text-lg text-game-black">{name}, {age}</h2>
                  <p className="text-sm mt-1">{location}</p>
                </>
              )}
            </div>
          </div>
          
          {isEditing ? (
            <div className="mb-4">
              <label className="font-pixel text-sm block mb-2 text-game-black">LOCATION</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="City, State"
                className="pixel-input w-full"
              />
            </div>
          ) : null}
          
          <div className="mb-6">
            <label className="font-pixel text-sm block mb-2 text-game-black">ABOUT ME</label>
            {isEditing ? (
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Tell others about yourself..."
                className="pixel-input w-full h-24 resize-none"
              />
            ) : (
              <p className="text-sm">{bio}</p>
            )}
          </div>
          
          <div className="mb-6">
            <h3 className="font-pixel text-sm mb-3 text-game-black">MY HOBBIES</h3>
            
            {isEditing ? (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
                  {allHobbies.map(hobby => (
                    <HobbyBadge
                      key={hobby}
                      hobby={hobby}
                      active={selectedHobbies.includes(hobby)}
                      onClick={() => toggleHobby(hobby)}
                    />
                  ))}
                </div>
                
                <div className="flex gap-2 mb-4">
                  <Input
                    type="text"
                    value={customHobby}
                    onChange={(e) => setCustomHobby(e.target.value)}
                    placeholder="Add custom hobby"
                    className="pixel-input flex-1"
                    onKeyDown={(e) => e.key === 'Enter' && addCustomHobby()}
                  />
                  <PixelButton
                    variant="primary"
                    onClick={addCustomHobby}
                    className="px-3"
                  >
                    <PlusCircle className="w-5 h-5" />
                  </PixelButton>
                </div>
                
                <div className="mb-2">
                  <h4 className="font-pixel text-xs mb-2 text-game-black">SELECTED VIBES ({selectedHobbies.length}/5)</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedHobbies.map(hobby => (
                      <HobbyBadge
                        key={hobby}
                        hobby={hobby}
                        active
                        onClick={() => toggleHobby(hobby)}
                      />
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-wrap gap-2">
                {selectedHobbies.map(hobby => (
                  <HobbyBadge key={hobby} hobby={hobby} active />
                ))}
              </div>
            )}
          </div>
          
          <div className="flex justify-center">
            {isEditing ? (
              <div className="space-x-4">
                <PixelButton
                  variant="danger"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </PixelButton>
                
                <PixelButton
                  variant="success"
                  onClick={handleSave}
                >
                  Save
                </PixelButton>
              </div>
            ) : (
              <PixelButton
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </PixelButton>
            )}
          </div>
        </div>
      </main>
      
      <Navbar />
    </div>
  );
};

export default ProfilePage;
