import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground">
            Let's build something{" "}
            <em className="not-italic font-serif italic">together.</em>
          </h2>
          
          <p className="mt-6 text-muted-foreground font-sans leading-relaxed">
            Currently open to new opportunities and interesting projects. 
            Whether you have a question or just want to say hello, I'd love to hear from you.
          </p>
          
          <div className="mt-8">
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:hello@example.com">
                <Mail className="h-4 w-4 mr-2" />
                hello@example.com
              </a>
            </Button>
          </div>
          
          <div className="mt-12 flex gap-4">
            <Button variant="outline" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
