import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { supabase } from "@/integrations/supabase/client";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  published_at: string | null;
}

const Index = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("id, title, slug, published_at")
        .eq("status", "published")
        .order("published_at", { ascending: false })
        .limit(10);

      if (!error && data) setPosts(data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container max-w-3xl mx-auto px-6">
          <section className="mb-10">
            <h1 className="text-3xl md:text-4xl lg:text-[2.5rem] font-serif leading-tight tracking-tight text-foreground">
              Creating long term operational systems.
            </h1>
            <div className="mt-6 h-0.5 bg-accent-warm max-w-xs" />
          </section>

          <section
            ref={ref}
            className={`space-y-5 text-muted-foreground font-sans leading-relaxed scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
          >
            <p>
              I've been fortunate to be a part of extremely successful teams and extremely unsuccessful ones.
            </p>
            <p>
              One thing I've learned is that the best systems are the ones that are the simplest. Though simple doesn't mean easy...
            </p>
            <p>
              When a business makes real money but everything behind it is harder than it should be that's where I come in.
            </p>
            <p>
              This site is mostly my writing: real problems, how I thought through them, what worked. Read a few posts and you'll know how I work.
            </p>
          </section>

          <section className="mt-10">
            {loading ? (
              <p className="text-muted-foreground font-sans text-sm">Loading…</p>
            ) : posts.length === 0 ? (
              <p className="text-muted-foreground font-sans text-sm">No posts yet.</p>
            ) : (
              <div className="space-y-4">
                {posts.map((post) => (
                  <Link key={post.id} to={`/blog/${post.slug}`}>
                    <Card className="border border-border/30 bg-card card-hover">
                      <CardContent className="p-5 md:p-6">
                        <time className="text-sm text-muted-foreground font-sans">
                          {post.published_at && new Date(post.published_at).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                        <h2 className="text-lg md:text-xl font-serif font-medium text-foreground mt-1">
                          {post.title}
                        </h2>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </section>

          <section className="mt-12 text-muted-foreground font-sans leading-relaxed">
            <p>
              Got a problem?{" "}
              <a
                href="mailto:hello@richardgraystone.com"
                className="text-accent-warm hover:underline transition-colors duration-200"
              >
                hello@richardgraystone.com
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
