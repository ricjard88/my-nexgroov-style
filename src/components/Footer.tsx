const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="text-sm text-foreground font-serif">
              Independent Operator
            </p>
            <p className="text-sm text-muted-foreground font-sans">
              Special Situations
            </p>
          </div>
          
          <p className="text-sm text-muted-foreground font-sans">
            Operating through Graystone Industries
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
