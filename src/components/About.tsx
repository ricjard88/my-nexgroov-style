import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container max-w-5xl mx-auto px-6">
        <Card className="border border-border bg-card shadow-sm">
          <CardContent className="p-8 md:p-12">
            <h3 className="text-xl md:text-2xl font-serif font-medium text-foreground">
              A Designer Who Codes
            </h3>
            
            <p className="mt-4 text-muted-foreground font-sans leading-relaxed">
              I believe great products come from understanding both the pixels and the code. 
              With over 5 years of experience bridging design and development, I create 
              interfaces that are not just beautiful but functional, accessible, and scalable. 
              My approach is systematic yet creative—every decision serves a purpose.
            </p>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground font-sans uppercase tracking-wider">Focus</p>
                <p className="font-serif text-foreground">Product Design</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground font-sans uppercase tracking-wider">Tools</p>
                <p className="font-serif text-foreground">Figma, React, TypeScript</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground font-sans uppercase tracking-wider">Location</p>
                <p className="font-serif text-foreground">San Francisco, CA</p>
              </div>
            </div>

            <div className="mt-8">
              <Button variant="card">
                Download Resume
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
