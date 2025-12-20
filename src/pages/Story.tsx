import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Story = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-3xl mx-auto px-4 py-12 md:py-20">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-sans text-sm">Back</span>
        </Link>

        <h1 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-12">
          My Story So Far
        </h1>

        <div className="space-y-6 text-muted-foreground font-sans leading-relaxed">
          <p className="text-foreground font-medium">I didn't start at the top.</p>
          <p>I started in the dirt. Literally.</p>
          <p>A no name out of the way Midwest country town in Ohio.</p>
          <p>Cut lawns and trees, moved mulch, dug holes.</p>
          <p>By 18, I had 3 years of full-time work under my belt with only instinct and sheer wonder to guide me.</p>

          <p className="text-foreground font-medium">I dove deeper, looking for something interesting.</p>
          <p><span className="text-foreground">Restaurants:</span> Worked from dish pits to service to a Chef to a GM, ultimately rebuilding a restaurant from scratch. Menu, equipment, operations to every thing you can think of.</p>
          <p><span className="text-foreground">In Capitol Hill:</span> Answered phones ringing with angry constituents.</p>
          <p><span className="text-foreground">Maryland Campaigns:</span> Knocked on doors setting state records for voting.</p>
          <p>Studied theology and communications to understand marketing.</p>
          <p>Became a tech bro in Silicon Valley to understand the potential for the future. Created systems for 8 then 11 figure businesses - and left them scaled, staffed, and stable.</p>

          <p className="text-foreground font-medium italic">
            Through all of this, I learned something simple: Mastery is in the rhythm and that rhythm requires discernment through unconditional understanding.
          </p>

          <p>In kitchens, I've learned throughput and pressure.</p>
          <p>In hospitality, I've learned emotion under constraints.</p>
          <p>In politics, I've learned what power and persuasion actually do.</p>
          <p>In startups, I've learned scale, debt, and consequences.</p>

          <p className="text-foreground font-medium">
            I advance not just because I speak well but because I show up and see what isn't working and what can work.
          </p>

          <p>Founded a company from zero, raised capital.</p>
          <p>And experienced the pain of too much noise and lack of clarity.</p>

          <p className="text-foreground font-medium">The advantage has always been curiosity.</p>

          <p>
            Today, I design games and experiences to test and expand human capacity and connection with an amazing team (
            <a 
              href="https://www.nexgroov.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
            >
              www.nexgroov.com
            </a>
            ).
          </p>
          <p>In parallel, I take on a small number of clients to solve problems that are strange enough to stretch the imagination and demand curious thinking.</p>

          <p>Outside the work, I spend my time training my understanding of frequency. I do that with a combination of chasing my kids, Dj'ing in the city, watching anime, billiards, making eyeglasses and a lot of nature walks.</p>

          <p className="text-foreground font-medium">Thanks for coming to my Ted Talk!</p>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-sans text-sm">Back to home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Story;
