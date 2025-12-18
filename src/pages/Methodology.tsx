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
                I start by identifying what's actually broken: <span className="text-foreground">root causes</span>, not symptoms.
              </p>
              
              <p className="text-muted-foreground font-sans leading-relaxed">
                I work <span className="text-foreground">retained</span> with <span className="text-foreground">limited clients</span>. Access is <span className="text-foreground">embedded</span>, success criteria <span className="text-foreground">defined in advance</span>.
              </p>

              <p className="text-muted-foreground font-sans leading-relaxed">
                I stay until the system runs without me: sometimes 90 days, sometimes a year.
              </p>

              <p className="mt-3 text-foreground font-serif italic">
                Success for me is solving the challenge and departing.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MethodologyPage;
