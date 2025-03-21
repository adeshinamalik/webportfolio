
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Cursor from "../components/Cursor";
import ParticleBackground from "../components/ParticleBackground";

const Index = () => {
  useEffect(() => {
    // Easter egg in console
    console.log("%c👋 Hello, fellow developer!", "font-size: 20px; font-weight: bold; color: #0ff;");
    console.log("%cThanks for checking out my portfolio website.", "font-size: 14px; color: #fff;");
    console.log("%cFeel free to explore the code and get in touch if you have any questions!", "font-size: 14px; color: #f0f;");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Cursor />
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
