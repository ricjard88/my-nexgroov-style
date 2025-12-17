import { useState, useEffect } from "react";

const Hero = () => {
  const fullText = "I identify & fix bottlenecks for organizations to operate at their highest capacity.";
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 60);
      return () => clearTimeout(timeout);
    } else {
      // Typing complete - fade out cursor after a moment
      const timeout = setTimeout(() => {
        setIsTypingComplete(true);
        setTimeout(() => setShowCursor(false), 500);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [displayedText]);

  // Split text to apply italic styling to the second part
  const splitIndex = "I identify & fix bottlenecks ".length;
  const firstPart = displayedText.slice(0, splitIndex);
  const secondPart = displayedText.slice(splitIndex);

  return (
    <section className="min-h-[65vh] flex items-center justify-center">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-serif leading-tight tracking-tight">
            {firstPart}
            {secondPart && (
              <em className="font-serif italic">{secondPart}</em>
            )}
            {showCursor && (
              <span 
                className={`inline-block w-[2px] h-[1em] bg-foreground ml-1 align-middle ${
                  isTypingComplete ? "opacity-0 transition-opacity duration-500" : "animate-blink"
                }`}
              />
            )}
          </h1>

          {/* Animated accent line - appears after typing */}
          <div 
            className={`mt-6 h-0.5 bg-accent-warm mx-auto max-w-xs transition-all duration-700 ${
              isTypingComplete ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
