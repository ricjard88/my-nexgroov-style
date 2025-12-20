import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-6">
      <div className="container max-w-5xl mx-auto px-6">
        <div 
          ref={ref}
          className={`max-w-2xl scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
        >
          <h2 className="text-2xl md:text-3xl font-serif font-medium text-foreground">
            Contact
          </h2>
          
          <p className="mt-6 text-muted-foreground font-sans leading-relaxed">
            Most introductions come through referrals. Discretion is standard.
          </p>
          
          <p className="mt-4 text-muted-foreground font-sans leading-relaxed">
            If you believe your organization should be functioning better than it is, please feel free to reach out.
          </p>
          
          <div className="mt-6">
            <a 
              href="mailto:hello@richardgraystone.com"
              className="text-accent-warm hover:underline transition-colors duration-200"
            >
              hello@richardgraystone.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
