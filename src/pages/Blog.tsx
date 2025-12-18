import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// Add your blog posts here
const blogPosts = [
  {
    id: "1",
    title: "Sample Blog Post",
    date: "2024-01-15",
    excerpt: "This is a sample blog post. Replace this with your actual content.",
    content: `
      This is the full content of your blog post. You can write as much as you want here.
      
      Add paragraphs, insights, and thoughts about operational consulting, organizational improvement, or any topic relevant to your work.
    `
  },
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-12">
        <div className="container max-w-5xl mx-auto px-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="font-sans text-sm">Back</span>
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-8">
            Blog
          </h1>
          
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`}>
                <Card className="border border-border/30 bg-card card-hover">
                  <CardContent className="p-5 md:p-6">
                    <time className="text-sm text-muted-foreground font-sans">
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </time>
                    <h2 className="text-xl font-serif font-medium text-foreground mt-2">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-muted-foreground font-sans leading-relaxed">
                      {post.excerpt}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
