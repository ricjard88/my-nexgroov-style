import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Methodology = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="methodology" className="py-10">
      <div className="container max-w-5xl mx-auto px-6">
        <div 
          ref={ref}
          className={`scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
        >
          <h2 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-2">
            Methodology
          </h2>
          
          <div className="max-w-2xl space-y-4">
            <p className="text-muted-foreground font-sans leading-relaxed">
              The work begins with diagnosis: identify root bottlenecks rather than symptoms.
            </p>
            
            <p className="text-muted-foreground font-sans leading-relaxed">
              Engagement is <span className="text-foreground">retained</span>. 
              Clients are <span className="text-foreground">limited</span>. 
              Access is <span className="text-foreground">embedded</span>. 
              Success criteria is <span className="text-foreground">defined in advance</span>.
            </p>

            <div className="pt-4 border-t border-border/40">
              <p className="text-muted-foreground font-sans leading-relaxed">
                I remain until the system can run without me.
                Sometimes it's 90 days. Sometimes it's a year.
              </p>
              <p className="mt-3 text-foreground font-serif italic">
                My job is to make myself unnecessary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
