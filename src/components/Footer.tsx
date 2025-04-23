
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="glass-morphism border-t border-white/10 py-8 md:py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a 
              href="#home" 
              className="text-xl font-bold tracking-tighter link-underline"
            >
              <span className="text-gradient">Developer.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Building digital experiences for the web of tomorrow.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://github.com/adeshinamalik" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            
            <a 
              href="https://x.com/Ahmed_malik19" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-white transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/malikatonda" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            
            <a 
              href="mailto:atondaahmed@gmail.com" 
              aria-label="Email"
              className="hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Frontend & Web3 Developer. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-xs text-muted-foreground">
              <li>
                <a href="#" className="hover:text-white transition-colors link-underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors link-underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors link-underline">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
