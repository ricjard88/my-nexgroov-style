import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Story = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-[44rem] mx-auto px-5 sm:px-6 py-12 md:py-20">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-sans text-sm">Back</span>
        </Link>

        <header className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-accent-warm/40" />
            <span className="text-[10px] font-semibold tracking-[0.2em] text-accent-warm uppercase">SO WHO IS THIS DUDE?</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-normal text-foreground tracking-tight leading-[1.1] mb-4">
            My Story So Far
          </h1>
          <p className="text-muted-foreground text-sm italic">A journey through work, failure, and rhythm.</p>
        </header>

        <article className="text-[1.0625rem] md:text-lg text-muted-foreground font-sans leading-[1.8]">
          {/* Chapter: origins */}
          <section className="space-y-7">
            <p>
              I didn't start at the top nor with any accolades or big names behind my existence. I come from <span className="font-semibold text-foreground">proud hard working people</span> who did a lot to ensure I could have the opportunity to see beyond what they knew. <span className="font-semibold text-foreground">My mother was a teacher</span> who laid a strict foundation for both the appreciation and focus required to learn something. My first job, I <span className="font-semibold text-foreground">started in the dirt</span>. Raking, mowing, mulching, planting and getting berated (for my own good lol) by oldschool business guys. Who taught me about such things like looking a man in his eye, shaking hands, working hard, not asking questions but getting it done. Needless to say I had a lot of training at an early age thanks to a mom who wanted her son to learn from all the people she could find who did great things. By 18 I had 3 years doing real work and labor with only my instincts and sheer wonder to guide that aim. Though a <span className="font-semibold text-foreground">no name kid out of a Midwest country town in Ohio</span>, I had big plans to learn as much as possible.
            </p>

            <p>
              <span className="font-semibold text-foreground">Over the next 15 years I dove deeper</span>, looking for challenges that could inform my ultimate goal to <span className="font-semibold text-foreground">produce value consistently</span>.
            </p>
          </section>

          <div className="my-14 md:my-16 h-px w-16 bg-accent-warm/30" />

          {/* Chapter: kitchens and the hill */}
          <section className="space-y-7">
            <p>
              <span className="font-semibold text-foreground">I started that &nbsp;journey in restaurants:</span> Not that nice go lucky shit you see on t.v. No, the raw, rough and direct world that was as close to pirate ships as one can get. The only rule was to not punk out. No place to hide and the only way to survive was to get to it and not be left behind. I had the privilege to work in dish pits to ultimately finding myself becoming a chef to a general manager. I was fortunate to work at many mom and pops and many early restaurants like sweetgreen, earls kitchen and bar and a few others. I'll drop <span className="font-semibold text-foreground">Market 65</span> because I have Pat and T to thank for pushing me to open up my view of my own potential. I had found that my interest went not just from the prepping and cooking of the food but to the serving as well and that was the first seed of my interest in the word operations.
            </p>
            <p>
              I had left home for a bit to study theology and I just couldn't get past the amount of ego attached to my peers and figured I missed the honesty of the kitchens. At the encouragement of my M65 crew, I decided to go back to school. I moved to D.C. with one dream: to open a <span className="font-semibold text-foreground">hotdog stand</span> that served regular hotdogs and veggie hot dogs. That dream lasted all of 2 months as I realized that I did not like food trucks. Enter, Capitol Hill. I was in school for psychology and communications which demanded we do an internship. I was one of the lucky interns that got to work on Capitol Hill in Senator Browns office. My duties? Answer the phones when constituents call and give people tours of the Capitol if they showed up unannounced but mainly the phones. I was still in the midst of my hotdog dreams. I remember the Senator sat down with the interns and asked us what we wanted to be, everyone said judge or lawyer all with very clear ladders of why they were there. My answer? <span className="font-semibold text-foreground">Hot dogs baby!</span> Needless to say I was shunned by my peers after that. Theres a whole arc of 3 years where I worked in <span className="font-semibold text-foreground">Maryland politics</span> and ran a campaign and set records but needless to say I did the political thing and <span className="font-semibold text-foreground">came back to kitchens</span> because I appreciated the simplicity of a meal.
            </p>
          </section>

          <div className="my-14 md:my-16 h-px w-16 bg-accent-warm/30" />

          {/* Chapter: the sauce god and the fall */}
          <section className="space-y-7">
            <p>
              So all gungho I left the suit and tie world and came back to my roots. I became what they call a <span className="font-semibold text-foreground">Saucier or a Sauce god</span>. Meaning I'm busting out sauces like a maniac, I loved it. I loved it so much I took another job in kitchens just to grow my skills. Like in the past I found myself on the management track and management at that time was chill because I had a bit more control of the environment. Where am I going with this? Oh yeah, I was in bliss but also wanted to <span className="font-semibold text-foreground">open my own space</span> (remember the hot dogs) anyways, I go the opportunity to open a restaurant, my big dream, I had finally reached the pinnacle of the training, the hard years, the mopping, the dish washing, the hours standing on my feet. To commemorate the occasion I even got a special jacket made just for me with my name and the title. I had thought I had hit the jackpot. It was a small co-op that the restaurant was located in that was owned by someone for 25 years and they had brought me in to run my own kitchen. Needless to say a lot of things went very left, I could blame a lot of elements but ultimately I was responsible for it and I did my absolute best but I just didn't have the experience to deal with a community that had a lot of opinions, instead of sticking to what I knew I yes manned things believing I could be Hercules and get it all done, which I did, but my health (95 hour weeks) and my temperament both took turns in the wrong direction. That lack of rest coupled with the space proved to be an incompatible paring. I was <span className="font-semibold text-foreground">fired unceremoniously</span>. One of my hero's Homaro Cantu, as well as Anthony Bourdain had eliminated their lives and for the first time I felt like I needed to be open to something outside of restaurants.
            </p>
          </section>

          <div className="my-14 md:my-16 h-px w-16 bg-accent-warm/30" />

          {/* Chapter: west */}
          <section className="space-y-7">
            <p>
              So what does one do? I had met a <span className="font-semibold text-foreground">beautiful woman from California</span> who told me I should try moving out there. I had been lucky to have a best bud from highschool who let me stay in his <span className="font-semibold text-foreground">spare bedroom in Vallejo</span>. Now, I didn't know anything about Silicon Valley, funny enough I had actually got a job with Sweetgreen but got fired after I was in training in D.C. (My first stint there I had told the district manager I wouldn't shake his hand because I didn't respect him before I quit) needless to say he rose in rank and saw me working in one of his stores training… I was on a plane back home 24 hours later. Fired 2x in a year having never been fired before with no idea what to do. So I started to explore and got an interview with some random small tech company called <span className="font-semibold text-foreground">Piazza</span>. Having zero idea what tech was or even the cultured I was amazed by how fast and intense the interview process was. There I was mentored by folks who were a part of companies I would learn were no small deal such as <span className="font-semibold text-foreground">Palantir and Youtube</span>. Here I grew, I threw myself at the problems for years and earned a clear understanding at building at scale.
            </p>
            <p>
              After a while tragedy struck and I took time off to just breathe. That took 2 years, then I reopened a bar, reopened a restaurant, built and grew a coffee company. Then came on as <span className="font-semibold text-foreground">employee #3</span> to a tech/hardware company that was commissioned to support two companies, one of those companies which had a market cap of 18.4b. Here I was given <span className="font-semibold text-foreground">full cart blanche</span> to get it all done and made a significant leap both in the learning as well as the rewards. Running that company, building the team, let me know that <span className="font-semibold text-foreground">I could build an organization</span> and not only that but a <span className="font-semibold text-foreground">culture that could stick</span>. All of those places I had found the key to the kind of culture in which I believe is best for growth.&nbsp;
            </p>
            <p>
              Then I spent the next 4 years <span className="font-semibold text-foreground">running experiments</span> by creating a bunch of different businesses, all great concepts but lacking the backbone to stick through. I guess I was more concerned with the learning, being bootstrapped didn't help but I believe that that's never really the main problem. That beings said, I did A LOT of experiments and did not create boundaries around that exploration. Over time I began to help other businesses with their problems and realized I had a gift of <span className="font-semibold text-foreground">multiplying revenue</span> via creating operational systems based on the resources (mainly people) that the companies had.&nbsp;
            </p>
          </section>

          {/* The philosophy */}
          <div className="my-16 md:my-20 border-l-2 border-accent-warm/40 pl-6 md:pl-8">
            <p className="font-serif text-2xl md:text-[1.75rem] font-normal text-muted-foreground leading-[1.4] tracking-tight">
              Through all of this, I learned something simple: <span className="font-semibold text-foreground">Mastery is in the rhythm</span> and that rhythm requires discernment through unconditional understanding.
            </p>
          </div>

          {/* Lessons */}
          <div className="my-16 md:my-20 space-y-4">
            <p>In <span className="font-semibold text-foreground">kitchens</span>, I learned <span className="font-semibold text-foreground">throughput and pressure</span>.</p>
            <p>In <span className="font-semibold text-foreground">hospitality</span>, I learned <span className="font-semibold text-foreground">emotion under constraints</span>.</p>
            <p>In <span className="font-semibold text-foreground">politics</span>, I learned what <span className="font-semibold text-foreground">power and persuasion</span> actually do.</p>
            <p>In <span className="font-semibold text-foreground">startups</span>, I learned <span className="font-semibold text-foreground">scale, debt, and consequences</span>.</p>
          </div>

          {/* Today */}
          <section className="space-y-7">
            <p>I've experienced the pain of <span className="font-semibold text-foreground">too much noise and lack of clarity</span>.</p>
            <p>There's a lot more to the story but the advantage has always been <span className="font-semibold text-foreground">curiosity</span>.</p>
            <p>Today, I mainly <span className="font-semibold text-foreground">design systems and experiences</span> to enhance companies operations and revenue.&nbsp;</p>
            <p>I also on the rare occasion will work with leaders to solve problems that are strange enough to stretch the imagination and demand genuine growth.</p>
            <p>Outside the work, I spend time <span className="font-semibold text-foreground">training my understanding</span>. I do that with a combination of learning from my kids, Dj'ing in the city, watching anime, reading and a lot of nature walks.</p>
            <p>Thanks for reading, I hope this gave you a bit more insight about me and a bit more background around who I am.&nbsp;</p>
          </section>

          <p className="mt-14 md:mt-16 font-serif text-3xl md:text-4xl text-foreground tracking-tight">Forward Ever.</p>
        </article>

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
