import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string | null;
  slug: string;
  created_at: string;
  read_time: number | null;
  category: string | null;
  cover_image: string | null;
}

const LatestNews = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLatestPosts();
  }, []);

  const fetchLatestPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("id, title, excerpt, slug, created_at, read_time, category, cover_image")
        .eq("published", true)
        .order("created_at", { ascending: false })
        .limit(3);

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error("Erreur lors du chargement des articles:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Nos dernières actualités
          </h2>
          <div className="text-center text-gray-500">Chargement...</div>
        </div>
      </section>
    );
  }

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          Nos dernières actualités
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              {post.cover_image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.cover_image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                {post.category && (
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-[#00AEEF] bg-[#00AEEF]/10 rounded-full mb-3">
                    {post.category}
                  </span>
                )}
                <h3 className="text-xl font-bold text-[#004E7C] mb-3 line-clamp-2">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                )}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(post.created_at)}</span>
                  </div>
                  {post.read_time && (
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.read_time} min</span>
                    </div>
                  )}
                </div>
                <Link to={`/blog/${post.slug}`}>
                  <Button variant="outline" className="w-full">
                    Lire la suite
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/blog">
            <Button className="bg-[#00AEEF] hover:bg-[#0095CC] text-white">
              Voir tous les articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
