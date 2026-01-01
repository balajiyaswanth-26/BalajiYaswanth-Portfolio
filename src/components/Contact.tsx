import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = ({ id }: { id?: string }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // EMAILJS CONFIG
  const SERVICE_ID = "service_ltfptza";
  const PUBLIC_KEY = "sKT-fYqZDotrt4Jl7";
  const TEMPLATE_ID = "template_v6hajq4";

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      )
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("Failed to send message. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <section id={id} className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">
            Let's discuss your next project or opportunity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6 animate-fade-in">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out through any of these channels. I'm always open to discussing
                new projects, creative ideas, or opportunities.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:balajiyaswanth2001@gmail.com"
                className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    balajiyaswanth2001@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/balajiyaswanth"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    Connect with me
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/balajiyaswanth-26"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    View my code
                  </p>
                </div>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <div>
              <Input
                placeholder="Your Name"
                 className="w-full p-3 rounded-md border"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <Input
                type="email"
                className="w-full p-3 rounded-md border"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                className="w-full p-3 rounded-md border"
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
               className="w-full group"
            >
              <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
              {loading ? "Sending..." : "Send Message"}
            </Button>

            {status && (
              <p className="text-center text-sm mt-2">{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;