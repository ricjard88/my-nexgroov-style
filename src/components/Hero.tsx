const Hero = () => {
  return (
    <section className="flex items-center pt-24 pb-6">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="max-w-3xl">
          <h1 
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-serif leading-tight tracking-tight opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            I identify & fix bottlenecks{" "}
            <em className="font-serif italic">
              for organizations to operate at their highest capacity.
            </em>
          </h1>

          {/* Animated accent line */}
          <div 
            className="mt-4 h-0.5 bg-accent-warm opacity-0 animate-fade-in"
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
