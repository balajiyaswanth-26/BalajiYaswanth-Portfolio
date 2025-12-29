import { Badge } from "@/components/ui/badge";
import { Code, Database, Server, Workflow } from "lucide-react";

const TechStack = ({ id }: { id?: string }) => {
  const techCategories = [
    {
      title: "Frontend",
      icon: <Code className="w-5 h-5" />,
      skills: ["React.js", "Angular", "React Native", "TypeScript", "Tailwind CSS", "SCSS", "HTML5/CSS3"]
    },
    {
      title: "Backend",
      icon: <Server className="w-5 h-5" />,
      skills: [".NET Core", "Node.js", "RESTful APIs"]
    },
    {
      title: "Databases",
      icon: <Database className="w-5 h-5" />,
      skills: ["MySQL", "MongoDB", "SQL Server"]
    },
    {
      title: "Methodologies",
      icon: <Workflow className="w-5 h-5" />,
      skills: ["Agile Scrum", "CI/CD", "Git Flow"]
    }
  ];

  return (
    <section id={id} className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Tech Stack</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized in modern technologies for building scalable applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {techCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;