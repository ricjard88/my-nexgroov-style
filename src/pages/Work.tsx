import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Work = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-12">
        <div className="container max-w-3xl mx-auto px-6">
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
            <h1 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-8">
              The Work
            </h1>

            <div className="space-y-5 text-muted-foreground font-sans leading-relaxed">
              <p>
                I take a small number of clients and embed in the operation. Not advice from the outside — inside, with the team, until it runs.
              </p>

              <p className="text-foreground font-medium pt-2">It's a fit if:</p>

              <ul className="space-y-3">
                {[
                  "The revenue is real and operations are the bottleneck",
                  "You want the problem fixed, not managed",
                  "I have the authority to actually change things",
                  "You're thinking in months, not years",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-accent-warm mt-1">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="pt-4">
                <span className="text-foreground font-medium">How it goes:</span>{" "}
                First conversation is free and usually clarifies the problem on its own. If we work together, we define what success looks like before we start. I stay until the system runs without me — sometimes 90 days, sometimes a year — then I support as needed.
              </p>

              <p className="pt-4">
                <a
                  href="mailto:hello@richardgraystone.com"
                  className="text-accent-warm hover:underline transition-colors duration-200"
                >
                  hello@richardgraystone.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Work;
