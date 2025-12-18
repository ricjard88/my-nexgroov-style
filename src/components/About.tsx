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
          <Card className="border border-border/30 bg-card card-hover">
            <CardContent className="p-5 md:p-6">
              <h3 className="text-xl md:text-2xl font-serif font-medium text-foreground">
                Operating Conditions
              </h3>
              
              <p className="mt-4 text-muted-foreground font-sans leading-relaxed">
                I work in the gap between intention and outcome...
              </p>
              
              <ul className="mt-6 space-y-3 text-muted-foreground font-sans">
                <li className={`scroll-hidden stagger-1 ${isVisible ? 'scroll-visible' : ''}`}>
                  Burning capital on coordination instead of execution
                </li>
                <li className={`scroll-hidden stagger-2 ${isVisible ? 'scroll-visible' : ''}`}>
                  Leaders who care and are solving the wrong problems really well
                </li>
                <li className={`scroll-hidden stagger-3 ${isVisible ? 'scroll-visible' : ''}`}>
                  Teams misaligned after growth, crisis, or turnover
                </li>
                <li className={`scroll-hidden stagger-4 ${isVisible ? 'scroll-visible' : ''}`}>
                  Everyone knows something's wrong but no one agrees on what
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
