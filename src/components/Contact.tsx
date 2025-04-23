
import { useState } from "react";
import { Mail, Send, Github, Linkedin, Twitter, Globe } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setFormState("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset state after 3 seconds
      setTimeout(() => {
        setFormState("idle");
      }, 3000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 md:py-40 px-6 relative">
      <div className="absolute bottom-1/4 left-1/4 w-60 h-60 bg-neon-blue rounded-full opacity-5 filter blur-[100px] animate-float" />
      <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-neon-purple rounded-full opacity-5 filter blur-[100px] animate-float" style={{ animationDelay: "-4s" }} />
      
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-sm uppercase tracking-widest mb-2 text-muted-foreground">Get In Touch</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">Contact Me</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-neon-blue to-transparent mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-[2fr_1fr] gap-10">
          <div className="glass-morphism rounded-xl p-8 animate-slide-right">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gradient">
              <Mail className="w-5 h-5" />
              <span>Send Me a Message</span>
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 neo-blur rounded-lg bg-white/5 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-neon-blue/50 transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 neo-blur rounded-lg bg-white/5 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-neon-blue/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 neo-blur rounded-lg bg-white/5 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-neon-blue/50 transition-all resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>
              
              <button
                type="submit"
                disabled={formState === "loading"}
                className="w-full py-3 rounded-lg glass-morphism hover:bg-white/10 flex items-center justify-center gap-2 transition-all hover:neon-box disabled:opacity-70"
              >
                {formState === "loading" ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                      <circle 
                        className="opacity-25" 
                        cx="12" 
                        cy="12" 
                        r="10" 
                        stroke="currentColor" 
                        strokeWidth="4"
                        fill="none"
                      ></circle>
                      <path 
                        className="opacity-75" 
                        fill="currentColor" 
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : formState === "success" ? (
                  <span className="flex items-center gap-2">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="w-5 h-5" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    Message Sent!
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </span>
                )}
              </button>
            </form>
          </div>
          
          <div className="glass-morphism rounded-xl p-8 animate-slide-left">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gradient">
              <Globe className="w-5 h-5" />
              <span>Connect With Me</span>
            </h3>
            
            <div className="space-y-6">
              <a 
                href="mailto:contact@example.com"
                className="flex items-center gap-3 p-3 neo-blur rounded-lg hover:bg-white/5 transition-all"
              >
                <Mail className="w-5 h-5 text-neon-blue" />
                <span>atondaahmed@gmail.com</span>
              </a>
              
              <a 
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 neo-blur rounded-lg hover:bg-white/5 transition-all"
              >
                <Github className="w-5 h-5 text-neon-blue" />
                <span>github.com/adeshinamalik</span>
              </a>
              
              <a 
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 neo-blur rounded-lg hover:bg-white/5 transition-all"
              >
                <Linkedin className="w-5 h-5 text-neon-blue" />
                <span>linkedin.com/in/malikatonda</span>
              </a>
              
              <a 
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 neo-blur rounded-lg hover:bg-white/5 transition-all"
              >
                <Twitter className="w-5 h-5 text-neon-blue" />
                <span>x.com/Ahmed_malik19</span>
              </a>
              
              <div className="p-3 neo-blur rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Want to see my Web3 credentials? Connect your wallet using the button below.
                </p>
                <button 
                  className="mt-3 w-full py-2 rounded-lg glass-morphism hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-sm hover:neon-box"
                  onClick={() => console.log("Connect wallet clicked")}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 16V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Connect Wallet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
