import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-10">
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
          
          <div className="mt-8">
            <Button 
              variant="hero" 
              size="lg" 
              asChild
              className="relative overflow-hidden group"
            >
              <a href="mailto:order@richardgraystone.com">
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-warm transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <Mail className="h-4 w-4 mr-2" />
                order@richardgraystone.com
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
