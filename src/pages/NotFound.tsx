
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import PixelButton from "@/components/PixelButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAXSURBVDiNY/z//z8DNYCJgUbAaCANDQQAE4kMGO4wIRQAAAAASUVORK5CYII=')] bg-repeat">
      <div className="pixel-card text-center max-w-md w-full">
        <h1 className="font-pixel text-4xl mb-6 text-game-black">404</h1>
        <div className="mb-6">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
            <rect x="4" y="4" width="8" height="8" fill="#E43B44" />
            <rect x="12" y="4" width="8" height="8" fill="#E43B44" />
            <rect x="20" y="4" width="8" height="8" fill="#E43B44" />
            <rect x="28" y="4" width="8" height="8" fill="#E43B44" />
            <rect x="36" y="4" width="8" height="8" fill="#E43B44" />
            <rect x="44" y="4" width="8" height="8" fill="#E43B44" />
            <rect x="52" y="4" width="8" height="8" fill="#E43B44" />
            <rect x="4" y="12" width="8" height="8" fill="#E43B44" />
            <rect x="52" y="12" width="8" height="8" fill="#E43B44" />
            <rect x="4" y="20" width="8" height="8" fill="#E43B44" />
            <rect x="28" y="20" width="8" height="8" fill="#E43B44" />
            <rect x="52" y="20" width="8" height="8" fill="#E43B44" />
            <rect x="4" y="28" width="8" height="8" fill="#E43B44" />
            <rect x="20" y="28" width="8" height="8" fill="#E43B44" />
            <rect x="36" y="28" width="8" height="8" fill="#E43B44" />
            <rect x="52" y="28" width="8" height="8" fill="#E43B44" />
            <rect x="4" y="36" width="8" height="8" fill="#E43B44" />
            <rect x="20" y="36" width="8" height="8" fill="#E43B44" />
            <rect x="28" y="36" width="8" height="8" fill="#E43B44" />
            <rect x="36" y="36" width="8" height="8" fill="#E43B44" />
            <rect x="52" y="36" width="8" height="8" fill="#E43B44" />
            <rect x="4" y="44" width="8" height="8" fill="#E43B44" />
            <rect x="52" y="44" width="8" height="8" fill="#E43B44" />
            <rect x="4" y="52" width="8" height="8" fill="#E43B44" />
            <rect x="12" y="52" width="8" height="8" fill="#E43B44" />
            <rect x="20" y="52" width="8" height="8" fill="#E43B44" />
            <rect x="28" y="52" width="8" height="8" fill="#E43B44" />
            <rect x="36" y="52" width="8" height="8" fill="#E43B44" />
            <rect x="44" y="52" width="8" height="8" fill="#E43B44" />
            <rect x="52" y="52" width="8" height="8" fill="#E43B44" />
          </svg>
        </div>
        <p className="font-pixel text-xl text-game-black mb-6">Level Not Found!</p>
        <p className="text-gray-600 mb-8">Oops! Looks like you wandered into an uncharted area of HobbyHive.</p>
        <PixelButton onClick={() => window.location.href = "/"}>
          Return to Home
        </PixelButton>
      </div>
    </div>
  );
};

export default NotFound;
