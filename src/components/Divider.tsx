const Divider = () => {
  return (
    <div className="container max-w-5xl mx-auto px-6">
      <div className="flex items-center justify-center py-4">
        <div className="h-px w-16 bg-border/50" />
        <div className="mx-3 w-1.5 h-1.5 rounded-full bg-accent-warm/40" />
        <div className="h-px w-16 bg-border/50" />
      </div>
    </div>
  );
};

export default Divider;
