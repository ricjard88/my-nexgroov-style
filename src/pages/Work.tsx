import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Seo from "@/components/Seo";

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
                I try to find problems that can create a win-win scenario so here's some things I try to get on the table if there was to be any kind of forward motion...
              </p>

              <p className="text-foreground font-medium pt-2 whitespace-pre-line">{"\n"}</p>

              <ul className="space-y-3">
                {[
                  "Your product is \"gold\", meaning that there's something uniquely valuable about it that you'v been able to prove to both yourself and others.",
                  "You want the problem fixed, and you understand that you don't necessarily know how.",
                  "You're comfortable letting go because you trust what you created.",
                  "You're not afraid of hard conversations\u00A0",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-accent-warm mt-1">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="pt-4">
                I have things I'm internally I'm looking for but my main aim when working with anyone is can I help this person by removing bottlenecks in their business in order to multiply return. I like to say I'm a multiplier so at least for now, as long as you have something I can build it, if your still figuring it out it's a bit too early because the space for experimentation is vast and you're responsible for the anchoring.{"\u00A0"}
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
