import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Methodology = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="methodology" className="py-8">
      <div className="container max-w-3xl mx-auto px-6">
        <div 
          ref={ref}
          className={`scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
        >
          <p className="text-lg md:text-xl text-muted-foreground font-sans leading-relaxed">
            Diagnosis first. Root causes, not symptoms. I embed until the system runs without me.
          </p>
          
          <p className="mt-6 text-foreground font-serif italic">
            My job is to make myself unnecessary.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
