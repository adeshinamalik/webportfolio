
import { useState, useRef, useEffect } from "react";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  type: "web2" | "web3";
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "NFT Marketplace",
    description: "A full-featured NFT marketplace built with Next.js, Ethereum, and IPFS",
    image: "https://via.placeholder.com/600x400/1E1E2E/FFFFFF?text=NFT+Marketplace",
    tags: ["Next.js", "Ethereum", "Smart Contracts", "IPFS", "Tailwind CSS"],
    type: "web3",
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Modern portfolio website with 3D animations and interactive elements",
    image: "https://via.placeholder.com/600x400/1E1E2E/FFFFFF?text=Portfolio",
    tags: ["React", "Three.js", "GSAP", "Tailwind CSS"],
    type: "web2",
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    id: 3,
    title: "DeFi Dashboard",
    description: "Dashboard for DeFi protocols with real-time data and portfolio tracking",
    image: "https://via.placeholder.com/600x400/1E1E2E/FFFFFF?text=DeFi+Dashboard",
    tags: ["React", "Web3.js", "Ethereum", "ChartJS", "MUI"],
    type: "web3",
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    id: 4,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce platform with product management and payment processing",
    image: "https://via.placeholder.com/600x400/1E1E2E/FFFFFF?text=E-commerce",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redux"],
    type: "web2",
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    id: 5,
    title: "DAO Governance Platform",
    description: "Platform for creating and managing DAOs with voting mechanisms",
    image: "https://via.placeholder.com/600x400/1E1E2E/FFFFFF?text=DAO+Platform",
    tags: ["React", "Solidity", "TheGraph", "Hardhat", "IPFS"],
    type: "web3",
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    id: 6,
    title: "Music Streaming App",
    description: "Music streaming application with custom audio player and playlists",
    image: "https://via.placeholder.com/600x400/1E1E2E/FFFFFF?text=Music+App",
    tags: ["React", "Node.js", "MongoDB", "AWS S3", "WebAudio API"],
    type: "web2",
    github: "https://github.com",
    demo: "https://example.com"
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group rounded-xl overflow-hidden glass-morphism h-full transform transition-all duration-300 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div>
            <span className={`text-xs px-2 py-1 rounded-full ${
              project.type === 'web3' ? 'bg-neon-purple/20 text-neon-purple' : 'bg-neon-blue/20 text-neon-blue'
            }`}>
              {project.type === 'web3' ? 'Web3' : 'Web2'}
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gradient group-hover:neon-glow">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span key={index} className="text-xs px-2 py-1 neo-blur rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:text-white transition-colors"
            aria-label="GitHub Repository"
          >
            <Github size={16} />
            <span>Code</span>
          </a>
          
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:text-white transition-colors"
            aria-label="Live Demo"
          >
            <ExternalLink size={16} />
            <span>Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState<"all" | "web2" | "web3">("all");
  const [visibleProjects, setVisibleProjects] = useState<Project[]>(projects);
  
  useEffect(() => {
    if (filter === "all") {
      setVisibleProjects(projects);
    } else {
      setVisibleProjects(projects.filter(project => project.type === filter));
    }
  }, [filter]);
  
  return (
    <section id="projects" className="py-20 md:py-40 px-6 relative">
      <div className="absolute top-1/4 right-1/4 w-60 h-60 bg-neon-pink rounded-full opacity-5 filter blur-[100px] animate-float" />
      
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-sm uppercase tracking-widest mb-2 text-muted-foreground">My Work</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">Featured Projects</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-neon-blue to-transparent mx-auto mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                filter === "all" 
                  ? "glass-morphism hover:bg-white/10 neon-box" 
                  : "neo-blur hover:bg-white/5"
              }`}
            >
              All Projects
            </button>
            
            <button 
              onClick={() => setFilter("web2")}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                filter === "web2" 
                  ? "glass-morphism hover:bg-white/10 neon-box" 
                  : "neo-blur hover:bg-white/5"
              }`}
            >
              Web2
            </button>
            
            <button 
              onClick={() => setFilter("web3")}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                filter === "web3" 
                  ? "glass-morphism hover:bg-white/10 neon-box" 
                  : "neo-blur hover:bg-white/5"
              }`}
            >
              Web3
            </button>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {visibleProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass-morphism inline-flex items-center gap-2 py-3 px-6 rounded-full transition-all hover:bg-white/10 hover:neon-box"
          >
            <span>View More on GitHub</span>
            <Github size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
