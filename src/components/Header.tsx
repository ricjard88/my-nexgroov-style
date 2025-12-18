import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

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
          <Link to="/methodology">
            <Button variant="nav">Methodology</Button>
          </Link>
          {isHomePage && (
            <Button variant="nav" onClick={() => scrollToSection("conditions")}>
              Conditions
            </Button>
          )}
          <Link to="/blog">
            <Button variant="nav">Blog</Button>
          </Link>
          {isHomePage && (
            <Button variant="nav" onClick={() => scrollToSection("contact")}>
              Contact
            </Button>
          )}
        </nav>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
