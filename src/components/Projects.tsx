import { useState, useRef } from "react";
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
    title: "EstatePulse",
    description: "Real estate platform with Firebase authentication and responsive UI using React.js and Tailwind CSS. Features login/logout and real-time data updates.",
    image: "https://via.placeholder.com/600x400/1E1E2E/FFFFFF?text=EstatePulse",
    tags: ["React.js", "Firebase", "Tailwind CSS", "Authentication"],
    type: "web2",
    github: "https://github.com/adeshinamalik/estatepulse",
    demo: "https://estatepulse.vercel.app"
  },
  {
    id: 2,
    title: "NaijaProperty",
    description: "Property listing site with search filters and modern UI, optimized for performance and cross-browser compatibility.",
    image: "https://via.placeholder.com/600x400/1E1E2E/FFFFFF?text=NaijaProperty",
    tags: ["JavaScript", "CSS", "Responsive Design", "Search Filters"],
    type: "web2",
    github: "https://github.com/adeshinamalik/naijaproperty",
    demo: "https://naijaproperty.vercel.app"
  },
  {
    id: 3,
    title: "SoccerPredictor",
    description: "Soccer prediction platform with featured pools, how it works sections, and leaderboards using React.js for dynamic interfaces.",
    image: "https://via.placeholder.com/600x400/1E1E2E/FFFFFF?text=SoccerPredictor",
    tags: ["React.js", "Dynamic UI", "Leaderboards"],
    type: "web2",
    github: "https://github.com/adeshinamalik/soccerpredictor",
    demo: "https://soccerpredictor.vercel.app"
  },
  {
    id: 4,
    title: "UnilorinLawpress",
    description: "Dynamic website for Law Students' Press Society with blog, gallery, and social media integration.",
    image: "https://via.placeholder.com/600x400/1E1E2E/FFFFFF?text=UnilorinLawpress",
    tags: ["HTML", "CSS", "JavaScript", "CMS"],
    type: "web2",
    github: "https://github.com/adeshinamalik/lsps-hub-legal",
    demo: "https://unilorinlawpress.vercel.app"
  },
  {
    id: 5,
    title: "InnovativeFarmers",
    description: "Web platform for agricultural management with responsive design and integrated data analytics for farm insights.",
    image: "https://via.placeholder.com/600x400/1E1E2E/FFFFFF?text=InnovativeFarmers",
    tags: ["React", "Data Analytics", "Responsive Design"],
    type: "web2",
    github: "https://github.com/adeshinamalik/innovativefarmers",
    demo: "https://innovativefarmers.vercel.app"
  },
  {
    id: 6,
    title: "IoT Poultry Management",
    description: "IoT system and web app for real-time poultry farm monitoring and automation, featuring environmental control and health monitoring.",
    image: "https://via.placeholder.com/600x400/1E1E2E/FFFFFF?text=IoT+Poultry",
    tags: ["IoT", "Web App", "Real-time Data", "Automation"],
    type: "web3",
    github: "https://github.com/adeshinamalik",
    demo: "#"
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
