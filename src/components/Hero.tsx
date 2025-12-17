import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="container max-w-5xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight tracking-tight opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Crafting digital experiences that{" "}
            <em className="not-italic font-serif italic text-foreground/90">
              resonate with purpose.
            </em>
          </h1>
          
          <p 
            className="mt-8 text-lg md:text-xl text-muted-foreground font-sans leading-relaxed max-w-2xl opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            I'm a designer and developer focused on building thoughtful products. 
            Clean aesthetics. Intentional interactions. Meaningful results.
          </p>
          
          <div 
            className="mt-10 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            >
              View my work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
