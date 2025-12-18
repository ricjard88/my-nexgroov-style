import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-8">
      <div className="container max-w-3xl mx-auto px-6">
        <div 
          ref={ref}
          className={`scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
        >
          <p className="text-lg md:text-xl text-muted-foreground font-sans leading-relaxed">
            Organizations with revenue but leaking execution. Founder-led teams stuck in decision debt. 
            Systems that should work, but don't.
          </p>
          
          <p className="mt-6 text-foreground font-serif italic">
            If the system exists, I improve it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
