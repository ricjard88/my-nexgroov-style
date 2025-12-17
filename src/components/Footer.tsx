const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground font-sans">
            © {new Date().getFullYear()} — Designed & built with intention.
          </p>
          
          <p className="text-sm text-muted-foreground font-sans">
            Currently in San Francisco
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
