import { Briefcase, Calendar } from "lucide-react";

const Experience = ({ id }: { id?: string }) => {
  const experiences = [
    {
      company: "Mettler Toledo India Pvt. Ltd.",
      role: "Full-Stack Developer",
      period: "2023 - Present",
      achievements: [
        "Led the end-to-end development of enterprise web, desktop, and mobile platforms, delivering scalable asset management solutions across multiple ecosystems.",
        "Drove the architecture and rollout of secure JWT-based SSO and role-based access control, strengthening system security and compliance.",
        "Spearheaded a cross-platform desktop application with real-time analytics dashboards, enabling data-driven operational decisions.",
        "Owned the iOS mobile application lifecycle, successfully upgrading Expo SDK v37 → v51 and managing TestFlight releases for rapid user feedback.",
        "Championed a dynamic PDF reporting engine with live previews and customizable visualizations, significantly improving reporting efficiency.",
        "Directed the automation of complex data migrations using SSIS and SQL Server, ensuring reliable, scalable, and error-free transitions."
      ]
    }
  ];

  return (
    <section id={id} className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground">
            Professional journey building enterprise applications
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={exp.company}
              className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start gap-3 mb-2 md:mb-0">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <ul className="space-y-2 ml-14">
                {exp.achievements.map((achievement, i) => (
                  <li 
                    key={i} 
                    className="text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-primary mt-1.5">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;