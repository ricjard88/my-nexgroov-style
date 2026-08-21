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
          <p className="text-foreground font-medium">I didn't start at the top nor with any accolades or big names behind my existence. </p>
          <p>
            I come from proud hard working people who moved a lot to ensure I could have the opportunity to see beyond what they knew. My mother was a teacher who laid a strict foundation for both the appreciation and focus required to learn something. 

            My first job, I started in the dirt.

            Raking, mowing, mulching, planting and getting berated (for my own good lol) by oldschool business guys. Who taught me about such things like looking at a man in his eye, shaking hands, working hard, not asking questions but getting it done. Needless to say I had a lot of training at an early age thanks to a mom who wanted her son to learn from all the people she could find who did great things.
          </p>
          <p>By 18 I had 3 years doing real work and labor with only my instincts and sheer wonder to guide that aim. Though a no name kid out of a Midwest country town in Ohio, I had big plans to learn as much as possible. </p>
          <p><br /></p>
          <p><br /></p>

          <p className="text-foreground font-medium">Over the next 15 years I dove deeper, looking for challenges that could inform my ultimate goal to produce value consistently.</p>
          <p>
            <span className="text-foreground">i started my journey in restaurants:</span> Not that nice go lucky shit you see on t.v. no raw, rough and direct. No place to hide and the only way to survive was to get to it and not be left behind. I had the privilege to work in dish pits to ultimately finding myself becoming a chef to a general manager. I was fortunate to work at many mom and pops and many early restaurants like sweetgreen, earls kitchen and bar and a few others. I'll drop Market 65 because I have Pat and T to thank for pushing me to open up my view of my own potential. I had found that my interest went not just from the prepping and cooking of the food but to the serving as well and that was the first seed of my interest in the word operations.
          </p>
          <p><span className="text-foreground">At the behest of a strong menton Capitol Hill:</span> Answered phones ringing with angry constituents.</p>
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
            Today, I design systems and experiences to test and expand human capacity and connection with an amazing team (
            <a 
              href="https://www.kabifi.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
            >
              www.kabifi.com
            </a>
            ).
          </p>
          <p>In parallel, I do take on a small number of clients to solve problems that are strange enough to stretch the imagination and demand curious thinking.</p>

          <p>Outside the work, I spend time training my understanding of frequency. I do that with a combination of learning from my kids, Dj'ing in the city, watching anime, billiards, making eyeglasses and a lot of nature walks.</p>

          <p className="text-foreground font-medium"><br /></p>
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
