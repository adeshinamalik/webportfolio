
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import ParticleBackground from "../components/ParticleBackground";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-4">
      <ParticleBackground />
      
      <div className="glass-morphism rounded-xl p-8 md:p-12 max-w-md text-center animate-scale-up">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-gradient neon-glow">404</h1>
        <p className="text-xl md:text-2xl mb-8">Oops! Page not found</p>
        <p className="text-muted-foreground mb-8">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <a 
          href="/" 
          className="glass-morphism group py-3 px-6 rounded-full inline-flex items-center transition-all hover:bg-white/10 hover:neon-box"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          <span>Return Home</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
