import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Analytics Dashboard Platform",
      description: "Enterprise-grade analytics platform with real-time data visualization, custom reporting, and multi-tenant architecture. Served 10K+ daily active users.",
      image: project1,
      tech: ["React.js", "Node.js", "MongoDB", "Chart.js"],
      github: "#",
      demo: "#"
    },
    {
      title: "E-Commerce Mobile App",
      description: "Cross-platform mobile application with seamless shopping experience, payment integration, and real-time inventory management.",
      image: project2,
      tech: ["React Native", ".NET Core", "SQL Server", "Stripe"],
      github: "#",
      demo: "#"
    },
    {
      title: "Collaboration Tool",
      description: "Real-time team collaboration platform with video conferencing, chat, file sharing, and project management features.",
      image: project3,
      tech: ["Angular", "Node.js", "WebRTC", "Socket.io"],
      github: "#",
      demo: "#"
    },
    {
      title: "Financial Management System",
      description: "Secure financial platform for transaction tracking, budget planning, and comprehensive financial reporting with bank integrations.",
      image: project4,
      tech: ["React.js", ".NET Core", "MySQL", "Redux"],
      github: "#",
      demo: "#"
    }
  ];

  // return (
  //   <section id="projects" className="py-20 px-4 bg-muted/30">
  //     <div className="container mx-auto">
  //       <div className="text-center mb-12 animate-fade-in">
  //         <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
  //         <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
  //           Showcase of recent work demonstrating full-stack development capabilities
  //         </p>
  //       </div>
        
  //       <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
  //         {projects.map((project, index) => (
  //           <div 
  //             key={project.title}
  //             className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl animate-fade-in"
  //             style={{ animationDelay: `${index * 100}ms` }}
  //           >
  //             <div className="relative overflow-hidden aspect-video">
  //               <img 
  //                 src={project.image} 
  //                 alt={project.title}
  //                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
  //               />
  //             </div>
              
  //             <div className="p-6 space-y-4">
  //               <h3 className="text-2xl font-semibold">{project.title}</h3>
  //               <p className="text-muted-foreground">{project.description}</p>
                
  //               <div className="flex flex-wrap gap-2">
  //                 {project.tech.map((tech) => (
  //                   <Badge key={tech} variant="secondary">
  //                     {tech}
  //                   </Badge>
  //                 ))}
  //               </div>
                
  //               <div className="flex gap-3 pt-2">
  //                 <Button variant="outline" size="sm" className="group/btn">
  //                   <Github className="w-4 h-4 mr-2" />
  //                   Code
  //                   <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
  //                 </Button>
  //                 <Button size="sm" className="group/btn">
  //                   Live Demo
  //                   <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
  //                 </Button>
  //               </div>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );
};

export default Projects;