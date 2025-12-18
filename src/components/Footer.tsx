import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-6 border-t border-border/40">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <div>
            <Link to="/manage" className="text-sm text-foreground font-serif hover:text-foreground">
              Strategic Operator
            </Link>
            <p className="text-sm text-muted-foreground font-sans">
              Hard Problems
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground font-sans">
              Operating through Graystone Industries
            </p>
            <img src={logo} alt="Graystone Industries" className="h-5 w-5 opacity-70" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
