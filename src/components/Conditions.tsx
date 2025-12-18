import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Conditions = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="conditions" className="py-6 bg-muted/30">
      <div className="container max-w-5xl mx-auto px-6">
        <div 
          ref={ref}
          className={`scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
        >
          <h2 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-2">
            Qualifying Conditions
          </h2>
          
          <Card className="border border-border/30 bg-card card-hover">
            <CardContent className="p-5 md:p-6">
              <ul className="space-y-4 text-muted-foreground font-sans">
                <li className={`flex items-start gap-3 scroll-hidden stagger-1 ${isVisible ? 'scroll-visible' : ''}`}>
                  <span className="text-accent-warm mt-1">—</span>
                  <span>Revenue is real - the operations are the constraint</span>
                </li>
                <li className={`flex items-start gap-3 scroll-hidden stagger-2 ${isVisible ? 'scroll-visible' : ''}`}>
                  <span className="text-accent-warm mt-1">—</span>
                  <span>Leadership committed to solving the problem, not managing optics</span>
                </li>
                <li className={`flex items-start gap-3 scroll-hidden stagger-3 ${isVisible ? 'scroll-visible' : ''}`}>
                  <span className="text-accent-warm mt-1">—</span>
                  <span>Authority exists to implement, not just recommend</span>
                </li>
                <li className={`flex items-start gap-3 scroll-hidden stagger-4 ${isVisible ? 'scroll-visible' : ''}`}>
                  <span className="text-accent-warm mt-1">—</span>
                  <span>Timeline is quarters of execution, not years of planning</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Conditions;
