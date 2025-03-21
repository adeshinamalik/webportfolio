
import { useEffect, useRef } from "react";

const SkillProgress = ({ skill, percentage, color }: { skill: string; percentage: number; color: string }) => {
  const progressRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && progressRef.current) {
          progressRef.current.style.width = `${percentage}%`;
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (progressRef.current) {
      observer.observe(progressRef.current);
    }
    
    return () => observer.disconnect();
  }, [percentage]);
  
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium">{skill}</h3>
        <span className="text-xs text-muted-foreground">{percentage}%</span>
      </div>
      <div className="h-1.5 w-full bg-secondary/50 rounded-full overflow-hidden">
        <div
          ref={progressRef}
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: "0%", background: color }}
        ></div>
      </div>
    </div>
  );
};

const SkillCard = ({ title, items }: { title: string; items: string[] }) => {
  return (
    <div className="glass-morphism rounded-xl p-6 h-full hover:bg-white/5 transition-colors transform hover:-translate-y-1 duration-300">
      <h3 className="text-lg font-bold mb-4 text-gradient">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <span 
            key={index}
            className="neo-blur px-3 py-1 text-xs rounded-full"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const web2Skills = [
    { skill: "HTML/CSS", percentage: 95, color: "linear-gradient(90deg, #FF6B6B, #FFE66D)" },
    { skill: "JavaScript", percentage: 90, color: "linear-gradient(90deg, #4158D0, #C850C0)" },
    { skill: "React", percentage: 92, color: "linear-gradient(90deg, #0093E9, #80D0C7)" },
    { skill: "TypeScript", percentage: 85, color: "linear-gradient(90deg, #8EC5FC, #E0C3FC)" },
    { skill: "Next.js", percentage: 88, color: "linear-gradient(90deg, #D4FC79, #96E6A1)" },
  ];
  
  const web3Skills = [
    { skill: "Solidity", percentage: 80, color: "linear-gradient(90deg, #FF9A8B, #FF6A88)" },
    { skill: "Blockchain Concepts", percentage: 85, color: "linear-gradient(90deg, #FEE140, #FA709A)" },
    { skill: "Smart Contracts", percentage: 75, color: "linear-gradient(90deg, #3F2B96, #A8C0FF)" },
    { skill: "DApps", percentage: 70, color: "linear-gradient(90deg, #08AEEA, #2AF598)" },
    { skill: "Web3.js/Ethers.js", percentage: 78, color: "linear-gradient(90deg, #F857A6, #FF5858)" },
  ];
  
  const skillCategories = [
    { title: "Frontend", items: ["HTML5", "CSS3", "SASS", "Tailwind CSS", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Redux", "Animation", "Responsive Design"] },
    { title: "Backend", items: ["Node.js", "Express", "RESTful APIs", "GraphQL", "Firebase", "MongoDB", "PostgreSQL"] },
    { title: "Web3", items: ["Solidity", "Ethereum", "Smart Contracts", "Web3.js", "Ethers.js", "Hardhat", "Truffle", "IPFS", "NFTs", "DeFi"] },
    { title: "Tools & Others", items: ["Git", "Webpack", "Vite", "Jest", "Testing Library", "CI/CD", "Docker", "AWS", "Figma", "UI/UX", "Performance Optimization"] },
  ];
  
  return (
    <section id="skills" className="py-20 md:py-40 px-6 relative">
      <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-neon-blue rounded-full opacity-5 filter blur-[100px] animate-float" />
      <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-neon-purple rounded-full opacity-5 filter blur-[100px] animate-float" style={{ animationDelay: "-3s" }} />
      
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-sm uppercase tracking-widest mb-2 text-muted-foreground">What I Do</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">My Skills</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-neon-blue to-transparent mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="glass-morphism rounded-xl p-8 hover:bg-white/5 transition-all animate-slide-right">
            <h3 className="text-xl font-bold mb-6 text-gradient">Web2 Skills</h3>
            {web2Skills.map((skill, index) => (
              <SkillProgress 
                key={index} 
                skill={skill.skill} 
                percentage={skill.percentage} 
                color={skill.color} 
              />
            ))}
          </div>
          
          <div className="glass-morphism rounded-xl p-8 hover:bg-white/5 transition-all animate-slide-left">
            <h3 className="text-xl font-bold mb-6 text-gradient">Web3 Skills</h3>
            {web3Skills.map((skill, index) => (
              <SkillProgress 
                key={index} 
                skill={skill.skill} 
                percentage={skill.percentage} 
                color={skill.color} 
              />
            ))}
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={index} 
              title={category.title} 
              items={category.items} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
