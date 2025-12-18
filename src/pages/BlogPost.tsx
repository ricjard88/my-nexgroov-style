import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// This should match the posts in Blog.tsx - consider moving to a shared file
const blogPosts = [
  {
    id: "1",
    title: "Sample Blog Post",
    date: "2024-01-15",
    excerpt: "This is a sample blog post. Replace this with your actual content.",
    content: `This is the full content of your blog post. You can write as much as you want here.

Add paragraphs, insights, and thoughts about operational consulting, organizational improvement, or any topic relevant to your work.

Feel free to structure your posts with multiple paragraphs and share your expertise with your readers.`
  },
];

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
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
              {new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </time>
            <h1 className="text-3xl md:text-4xl font-serif font-medium text-foreground mt-2 mb-8">
              {post.title}
            </h1>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => (
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
