import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Flux Dashboard",
    description: "A real-time analytics platform for SaaS companies. Designed and built the entire frontend experience.",
    tags: ["Product Design", "React", "Data Viz"],
  },
  {
    title: "Meridian",
    description: "Mobile-first banking app redesign. Focused on simplifying complex financial workflows.",
    tags: ["UX Research", "Mobile", "Fintech"],
  },
  {
    title: "Atlas Commerce",
    description: "E-commerce platform with AI-powered recommendations. Led design system creation.",
    tags: ["Design System", "AI/ML", "E-commerce"],
  },
];

const Work = () => {
  return (
    <section id="work" className="py-24">
      <div className="container max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-4">
          Selected Work
        </h2>
        <p className="text-muted-foreground font-sans mb-12 max-w-xl">
          A collection of projects where design meets engineering. Each one taught me something new.
        </p>
        
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group border border-border bg-card hover:bg-muted/30 transition-all duration-300 cursor-pointer"
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground font-sans">
                        0{index + 1}
                      </span>
                      <h3 className="text-xl md:text-2xl font-serif text-foreground group-hover:text-foreground/80 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="mt-3 text-muted-foreground font-sans leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="text-xs font-sans text-muted-foreground bg-muted px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
