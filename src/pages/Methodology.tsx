import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const MethodologyPage = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-12">
        <div className="container max-w-5xl mx-auto px-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="font-sans text-sm">Back</span>
          </Link>
          
          <div 
            ref={ref}
            className={`scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
          >
            <h1 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-6">
              Methodology
            </h1>
            
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

              <div className="pt-3 border-t border-border/40">
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
      </main>
      <Footer />
    </div>
  );
};

export default MethodologyPage;
