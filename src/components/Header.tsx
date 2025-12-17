import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="container max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Flame className="h-5 w-5 text-foreground" />
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <Button variant="nav" onClick={() => scrollToSection("about")}>
            About
          </Button>
          <Button variant="nav" onClick={() => scrollToSection("work")}>
            Work
          </Button>
          <Button variant="nav" onClick={() => scrollToSection("contact")}>
            Contact
          </Button>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="hero" size="sm" onClick={() => scrollToSection("contact")}>
            Get in Touch
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
