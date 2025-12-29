import { CheckCircle } from "lucide-react";

const About = ({ id }: { id?: string }) => {
  const highlights = [
    "2+ years building end-to-end web, mobile & desktop applications",
    "Expert in React, Angular, and React Native ecosystems",
    "Strong backend development with .NET Core and Node.js",
    "Agile collaboration with designers and cross-functional teams",
    "Focus on reusable architecture and clean code practices",
    "Passionate about user experience and performance optimization"
  ];

  return (
    <section id={id} className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground">
            Full-Stack Software Engineer building scalable, user-focused digital solutions
          </p>
        </div>
        
        <div className="space-y-6 animate-fade-in">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I’m a Full-Stack Developer specializing in frontend and full-stack web development using React, Angular, .NET Core, and Node.js. I build scalable, secure, and user-centric applications with a strong focus on performance, clean architecture, and modern UI/UX.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
           I collaborate in Agile teams to deliver high-quality, maintainable solutions that drive real business impact, while continuously learning and applying modern web technologies.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 pt-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;