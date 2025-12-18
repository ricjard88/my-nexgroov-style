import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Trash2, Edit, Plus } from "lucide-react";

const ADMIN_PASSWORD = "graystone2024";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  status: string;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
};

const AdminWrite = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Form state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isPublished, setIsPublished] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("admin_auth");
    if (stored === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchPosts();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem("admin_auth", "true");
      setIsAuthenticated(true);
    } else {
      toast({ title: "Invalid password", variant: "destructive" });
    }
  };

  const fetchPosts = async () => {
    setLoading(true);
    // Use service role via edge function to bypass RLS for admin
    const { data, error } = await supabase.functions.invoke("admin-blog", {
      body: { action: "list" },
    });
    
    if (error) {
      toast({ title: "Error fetching posts", variant: "destructive" });
    } else {
      setPosts(data?.posts || []);
    }
    setLoading(false);
  };

  const resetForm = () => {
    setEditingId(null);
    setTitle("");
    setContent("");
    setIsPublished(false);
  };

  const handleEdit = (post: BlogPost) => {
    setEditingId(post.id);
    setTitle(post.title);
    setContent(post.content);
    setIsPublished(post.status === "published");
  };

  const handleSave = async () => {
    if (!title.trim() || !content.trim()) {
      toast({ title: "Title and content are required", variant: "destructive" });
      return;
    }

    setSaving(true);
    const slug = generateSlug(title);
    const status = isPublished ? "published" : "draft";
    const published_at = isPublished ? new Date().toISOString() : null;

    const { error } = await supabase.functions.invoke("admin-blog", {
      body: {
        action: editingId ? "update" : "create",
        id: editingId,
        title: title.trim(),
        slug,
        content: content.trim(),
        status,
        published_at,
      },
    });

    if (error) {
      toast({ title: "Error saving post", variant: "destructive" });
    } else {
      toast({ title: editingId ? "Post updated" : "Post created" });
      resetForm();
      fetchPosts();
    }
    setSaving(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this post?")) return;

    const { error } = await supabase.functions.invoke("admin-blog", {
      body: { action: "delete", id },
    });

    if (error) {
      toast({ title: "Error deleting post", variant: "destructive" });
    } else {
      toast({ title: "Post deleted" });
      fetchPosts();
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <Card className="w-full max-w-sm">
          <CardContent className="pt-6">
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-serif font-medium text-foreground">Blog Admin</h1>
          {editingId && (
            <Button variant="outline" onClick={resetForm}>
              <Plus className="h-4 w-4 mr-2" /> New Post
            </Button>
          )}
        </div>

        {/* Form */}
        <Card>
          <CardContent className="pt-6 space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Post title"
              />
            </div>
            <div>
              <Label htmlFor="content">Body</Label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your post (markdown supported)"
                rows={12}
                className="font-mono text-sm"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Switch
                  id="publish"
                  checked={isPublished}
                  onCheckedChange={setIsPublished}
                />
                <Label htmlFor="publish">Publish</Label>
              </div>
              <Button onClick={handleSave} disabled={saving}>
                {saving ? "Saving..." : "Save"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Posts List */}
        <div className="space-y-3">
          <h2 className="text-lg font-serif font-medium text-foreground">All Posts</h2>
          {loading ? (
            <p className="text-muted-foreground">Loading...</p>
          ) : posts.length === 0 ? (
            <p className="text-muted-foreground">No posts yet.</p>
          ) : (
            posts.map((post) => (
              <Card key={post.id} className="border border-border/30">
                <CardContent className="p-4 flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">{post.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {post.status === "published" ? "Published" : "Draft"} •{" "}
                      {new Date(post.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" onClick={() => handleEdit(post)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(post.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminWrite;
