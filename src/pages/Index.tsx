import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TechStack id="tech-stack" />
      <About id="about" />
      {/* <Projects /> */}
      <Experience id="experience" />
      <Contact id="contact" />
      
      <footer className="py-4 px-4 bg-muted/30 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2025 Full-Stack Developer Portfolio. Built with React, TypeScript & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;