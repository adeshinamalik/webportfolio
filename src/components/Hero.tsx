
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !nameRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      
      // Calculate percentage of mouse position relative to container
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      // Subtle text shadow effect based on mouse position
      const textElement = nameRef.current;
      if (textElement) {
        const shadowX = (x - 0.5) * 10;
        const shadowY = (y - 0.5) * 10;
        const distance = Math.min(5, Math.sqrt(shadowX * shadowX + shadowY * shadowY));
        const blur = distance * 2;
        
        textElement.style.textShadow = `
          ${shadowX}px ${shadowY}px ${blur}px rgba(0, 255, 255, 0.3),
          ${shadowX * 1.5}px ${shadowY * 1.5}px ${blur * 2}px rgba(255, 0, 255, 0.2)
        `;
      }
    };
    
    containerRef.current.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);
  
  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-neon-blue rounded-full opacity-5 filter blur-[100px] animate-float" />
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-neon-purple rounded-full opacity-5 filter blur-[100px] animate-float" style={{ animationDelay: "-2s" }} />
      
      <div className="text-center max-w-5xl z-10 animate-slide-up">
        <p className="text-sm md:text-base uppercase tracking-widest mb-3 md:mb-5 text-muted-foreground">
          Frontend & Web3 Developer
        </p>
        
        <h1 
          ref={nameRef}
          className="text-4xl md:text-7xl font-bold tracking-tight mb-4 md:mb-8 text-gradient neon-glow"
        >
          Building the Future of the Web
        </h1>
        
        <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-12">
          I create cutting-edge digital experiences using modern frontend technologies and blockchain innovation.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#projects" 
            className="glass-morphism group py-4 px-6 rounded-full flex items-center justify-center transition-all hover:bg-white/10 hover:neon-box"
          >
            <span className="mr-2">View My Work</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          
          <a 
            href="#contact" 
            className="neo-blur py-4 px-6 rounded-full transition-all hover:bg-white/5"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-sm opacity-70 hover:opacity-100 transition-opacity">
          <span className="mb-2">Scroll Down</span>
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
