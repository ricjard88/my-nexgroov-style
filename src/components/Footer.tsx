import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-6 border-t border-border/40">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <div>
            <p className="text-sm text-foreground font-serif">
              Independent Operator
            </p>
            <p className="text-sm text-muted-foreground font-sans">
              Special Situations
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground font-sans">
              Operating through Graystone Industries
            </p>
            <img src={logo} alt="Graystone Industries" className="h-5 w-5 opacity-70 dark:invert" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
