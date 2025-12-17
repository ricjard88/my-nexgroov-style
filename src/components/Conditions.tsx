import { Card, CardContent } from "@/components/ui/card";

const Conditions = () => {
  return (
    <section id="conditions" className="py-6 bg-muted/30">
      <div className="container max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-2">
          Qualifying Conditions
        </h2>
        
        <Card className="border border-border/30 bg-card">
          <CardContent className="p-6 md:p-8">
            <ul className="space-y-4 text-muted-foreground font-sans">
              <li className="flex items-start gap-3">
                <span className="text-foreground mt-1">—</span>
                <span>A defensible revenue stream already exists</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground mt-1">—</span>
                <span>Chain of command is ambiguous or contested</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground mt-1">—</span>
                <span>Execution quality is inconsistent despite sufficient resources</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground mt-1">—</span>
                <span>Organizational output underperforms its structural potential</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Conditions;
