
import { useRef } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const Timeline = () => {
  const timelineItems = [
    { 
      year: "2022", 
      title: "Got Started with Web Design & Development", 
      description: "Began my journey into tech by learning web design principles and building static websites using HTML, CSS, and JavaScript." 
    },
    { 
      year: "2023", 
      title: "Specialized in React & Modern Frontend Tools", 
      description: "Mastered React.js, Tailwind CSS, and Next.js. Built responsive web apps with dynamic interfaces and clean UI/UX." 
    },
    { 
      year: "2024", 
      title: "Full Stack Skills & Exploring Web3", 
      description: "Expanded into backend development with Node.js and Express. Began exploring Web3 and smart contract development." 
    },
    { 
      year: "2025", 
      title: "Freelancing & Offering Web Services", 
      description: "Started offering services in Web Design, Web Development, and Web3 Development, helping businesses launch modern digital products." 
    },
  ];
  

  return (
    <div className="space-y-10 my-10">
      {timelineItems.map((item, index) => (
        <div 
          key={index} 
          className={`flex flex-col md:flex-row gap-6 md:items-center ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}
          data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          data-aos-delay={index * 100}
        >
          <div className="flex-shrink-0 w-20 h-20 rounded-full glass-morphism flex items-center justify-center text-gradient font-bold">
            {item.year}
          </div>

          <div className={`relative ${
            index !== timelineItems.length - 1 ? 'before:content-[\'\'] before:absolute before:w-px before:bg-gradient-to-b before:from-white/10 before:to-transparent before:h-16 md:before:h-24 before:top-full' : ''
          } ${
            index % 2 === 0 ? 'before:left-10 md:before:right-auto' : 'before:left-10 md:before:left-auto'
          }`}>
            <h3 className="text-xl font-bold text-gradient mb-2">{item.title}</h3>
            <p className="text-muted-foreground">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const About = () => {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section 
      id="about" 
      ref={containerRef} 
      className="py-20 md:py-40 px-6 relative"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-sm uppercase tracking-widest mb-2 text-muted-foreground">Get to know me</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">About Me</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-neon-blue to-transparent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          {/* LEFT: Profile photo and social icons */}
          <div className="space-y-6 animate-slide-right flex flex-col items-center">
            <div className="aspect-square rounded-xl overflow-hidden glass-morphism flex items-center justify-center w-full">
              <Avatar className="w-36 h-36 md:w-44 md:h-44 text-6xl mx-auto">
                <AvatarImage 
                  src="/lovable-uploads/aaafab71-735b-406d-b4e0-66acfb37f7f7.png"
                  alt="Ahmed Malik Photo" 
                  className="object-cover"
                />
                <AvatarFallback>AM</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex justify-center gap-4">
              <a 
                href="https://github.com/adeshinamalik" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full neo-blur flex items-center justify-center hover:neon-box transition-all"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>

              <a 
                href="https://linkedin.com/in/malikatonda" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full neo-blur flex items-center justify-center hover:neon-box transition-all"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              <a 
                href="https://twitter.com/atondaahmed" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full neo-blur flex items-center justify-center hover:neon-box transition-all"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT: Bio, intro, and video */}
          <div className="space-y-8 animate-slide-left">
            <p className="text-xl font-bold text-gradient leading-snug select-none pointer-events-none">Hi, I'm Ahmed Malik</p>
            <p className="text-muted-foreground leading-relaxed">
              Innovative web designer and developer specializing in responsive, user-centric web applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I hold a Bachelor's in Mechatronics Engineering with a focus on Software Engineering and IoT systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about creating impactful projects by leveraging technology to solve real-world problems and delivering cutting-edge web and Web3 solutions for modern businesses.
            </p>

            {/* Video introduction */}
            <div className="pt-2 mb-6">
              <h3 className="font-bold mb-2">Video Introduction</h3>
              <div className="aspect-video rounded-lg overflow-hidden border border-white/10 glass-morphism flex items-center justify-center relative">
                <video 
                  controls 
                  poster="/lovable-uploads/aaafab71-735b-406d-b4e0-66acfb37f7f7.png"
                  className="w-full h-full object-cover"
                >
                  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <span className="absolute top-0 left-0 text-xs bg-black/30 text-white px-2 py-1 rounded-br-lg z-10">
                  This is a placeholder video. I'll update with my real intro soon!
                </span>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="font-bold mb-4">My Journey</h3>
              <Timeline />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
