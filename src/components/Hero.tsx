import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 pt-32 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 animate-fade-in" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center animate-fade-in">
          {/* Left Side - Name and Description */}
          <div className="space-y-8 text-center md:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                <span className="block text-foreground">Balaji Yaswanth B</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Full-Stack Developer
              </h2>
              <p className="text-lg md:text-xl text-muted">
                Specialist in Scalable Web Applications
              </p>
            </div>
            
            <p className="text-base md:text-lg text-muted-foreground">
              Building secure, scalable, and user-centric applications with modern technologies. 
              Passionate about creating exceptional digital experiences that solve real problems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              {/* <Button 
                size="lg" 
                className="group"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button> */}
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </Button>
              <Button 
                size="lg" 
                variant="secondary"
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </div>
          </div>

          {/* Right Side - Profile Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-20 blur-3xl rounded-full"></div>
              <img
                src={profileImage}
                alt="Balaji Yaswanth B - Full-Stack Developer"
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-border shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;