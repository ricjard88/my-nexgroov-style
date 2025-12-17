const Methodology = () => {
  return (
    <section id="methodology" className="py-24">
      <div className="container max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-8">
          Methodology
        </h2>
        
        <div className="max-w-2xl space-y-6">
          <p className="text-muted-foreground font-sans leading-relaxed">
            The work begins with diagnosis: identify root bottlenecks rather than symptoms.
          </p>
          
          <div className="pt-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground font-sans uppercase tracking-wider mb-1">Engagement</p>
                <p className="font-serif text-foreground">Retained</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-sans uppercase tracking-wider mb-1">Clients</p>
                <p className="font-serif text-foreground">Limited</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-sans uppercase tracking-wider mb-1">Access</p>
                <p className="font-serif text-foreground">Embedded</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-sans uppercase tracking-wider mb-1">Success Criteria</p>
                <p className="font-serif text-foreground">Defined in advance</p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-border">
            <p className="text-muted-foreground font-sans leading-relaxed">
              I remain until the system can run without me.
            </p>
            <p className="mt-4 text-muted-foreground font-sans">
              Sometimes it's 90 days. Sometimes it's a year.
            </p>
            <p className="mt-4 text-foreground font-serif italic">
              My job is to make myself unnecessary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
