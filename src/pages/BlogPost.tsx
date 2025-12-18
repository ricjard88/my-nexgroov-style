import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  published_at: string | null;
}

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("status", "published")
        .maybeSingle();

      if (error || !data) {
        setNotFound(true);
      } else {
        setPost(data);
      }
      setLoading(false);
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-12">
          <div className="container max-w-3xl mx-auto px-6">
            <p className="text-muted-foreground">Loading...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (notFound) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-12">
        <div className="container max-w-3xl mx-auto px-6">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="font-sans text-sm">Back to Blog</span>
          </Link>
          
          <article>
            <time className="text-sm text-muted-foreground font-sans">
              {post?.published_at && new Date(post.published_at).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </time>
            <h1 className="text-3xl md:text-4xl font-serif font-medium text-foreground mt-2 mb-8">
              {post?.title}
            </h1>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              {post?.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-muted-foreground font-sans leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
