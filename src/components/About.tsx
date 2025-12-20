import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-6 bg-muted/30">
      <div className="container max-w-5xl mx-auto px-6">
        <div 
          ref={ref}
          className={`scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
        >
          <h2 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-2">
            Operating Conditions
          </h2>
          
          <Card className="border border-border/30 bg-card card-hover">
            <CardContent className="p-5 md:p-6">
              <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                My depth is in the gap between intention and outcome.
              </p>
              
              <ul className="space-y-4 text-muted-foreground font-sans">
                <li className={`flex items-start gap-3 scroll-hidden stagger-1 ${isVisible ? 'scroll-visible' : ''}`}>
                  <span className="text-accent-warm mt-1">—</span>
                  <span>Burning capital on coordination instead of execution</span>
                </li>
                <li className={`flex items-start gap-3 scroll-hidden stagger-2 ${isVisible ? 'scroll-visible' : ''}`}>
                  <span className="text-accent-warm mt-1">—</span>
                  <span>Leaders solving the wrong problems really well</span>
                </li>
                <li className={`flex items-start gap-3 scroll-hidden stagger-3 ${isVisible ? 'scroll-visible' : ''}`}>
                  <span className="text-accent-warm mt-1">—</span>
                  <span>Teams misaligned after growth, crisis, or turnover</span>
                </li>
                <li className={`flex items-start gap-3 scroll-hidden stagger-4 ${isVisible ? 'scroll-visible' : ''}`}>
                  <span className="text-accent-warm mt-1">—</span>
                  <span>Everyone knows something's wrong but no one agrees what</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
