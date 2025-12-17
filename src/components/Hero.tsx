const Hero = () => {
  return (
    <section className="min-h-[50vh] flex items-center pt-24">
      <div className="container max-w-5xl mx-auto px-6 py-4">
        <div className="max-w-3xl">
          <h1 
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-serif leading-tight tracking-tight opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            I work with organizations that already exist, but{" "}
            <em className="font-serif italic">
              don't function the way they know they could.
            </em>
          </h1>
          
          <p 
            className="mt-5 text-lg text-muted-foreground font-sans leading-relaxed max-w-2xl opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            When priorities blur, teams drift, and execution breaks down, I restore or create order through operational resolution.
          </p>

          {/* Animated accent line */}
          <div 
            className="mt-6 h-0.5 bg-accent-warm opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="h-full bg-accent-warm w-0 animate-grow-width" style={{ animationDelay: "0.7s" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
