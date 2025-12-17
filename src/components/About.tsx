import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-10 bg-muted/30">
      <div className="container max-w-5xl mx-auto px-6">
        <Card className="border border-border/30 bg-card">
          <CardContent className="p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-serif font-medium text-foreground">
              Where I'm Useful
            </h3>
            
            <p className="mt-4 text-muted-foreground font-sans leading-relaxed">
              I work inside real environments with real consequences.
            </p>
            
            <ul className="mt-6 space-y-3 text-muted-foreground font-sans">
              <li>Companies with revenue but leaking execution</li>
              <li>Founder-led orgs stuck in decision debt</li>
              <li>Teams misaligned after growth, crisis, or turnover</li>
              <li>Organizations where operations should work, but don't</li>
            </ul>

            <p className="mt-8 text-foreground font-serif italic">
              If the system exists, I improve it.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
