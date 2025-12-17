import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="max-w-2xl">
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
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:order@richardgraystone.com">
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
