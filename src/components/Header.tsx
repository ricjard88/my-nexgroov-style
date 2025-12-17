import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="container max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-serif text-sm tracking-wide">
          Richard Graystone
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <Button variant="nav" onClick={() => scrollToSection("methodology")}>
            Methodology
          </Button>
          <Button variant="nav" onClick={() => scrollToSection("conditions")}>
            Conditions
          </Button>
          <Button variant="nav" onClick={() => scrollToSection("contact")}>
            Contact
          </Button>
        </nav>

        <div className="flex items-center">
          <Button variant="hero" size="sm" onClick={() => scrollToSection("contact")}>
            Reach Out
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
