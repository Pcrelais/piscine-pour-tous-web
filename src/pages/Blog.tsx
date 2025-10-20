import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string | null;
  created_at: string;
  profiles: {
    full_name: string | null;
  };
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    fetchPublishedPosts();
  }, []);

  const fetchPublishedPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("blog_posts")
        .select(`
          *,
          profiles (
            full_name
          )
        `)
        .eq("published", true)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de charger les articles",
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-[#004E7C] text-xl">Chargement...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-[#004E7C] mb-2">Blog</h1>
            <p className="text-gray-600">Découvrez nos derniers articles</p>
          </div>
          
          {user ? (
            <Button
              onClick={() => navigate("/blog/dashboard")}
              className="bg-[#00AEEF] hover:bg-[#0095CC]"
            >
              Mon tableau de bord
            </Button>
          ) : (
            <Button
              onClick={() => navigate("/auth")}
              variant="outline"
              className="border-[#004E7C] text-[#004E7C]"
            >
              Se connecter pour écrire
            </Button>
          )}
        </div>

        {posts.length === 0 ? (
          <Card className="p-12 text-center">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg mb-4">
              Aucun article publié pour le moment
            </p>
            {user && (
              <Button
                onClick={() => navigate("/blog/new")}
                className="bg-[#00AEEF] hover:bg-[#0095CC]"
              >
                Écrire le premier article
              </Button>
            )}
          </Card>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.id} className="p-6 hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-bold text-[#004E7C] mb-3">
                  {post.title}
                </h2>

                <p className="text-gray-600 mb-4 line-clamp-4">
                  {post.excerpt || post.content.substring(0, 200) + "..."}
                </p>

                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span>
                    Par {post.profiles?.full_name || "Auteur"}
                  </span>
                  <span>
                    {new Date(post.created_at).toLocaleDateString("fr-FR")}
                  </span>
                </div>

                <Button
                  onClick={() => navigate(`/blog/${post.id}`)}
                  variant="outline"
                  className="w-full border-[#00AEEF] text-[#00AEEF] hover:bg-[#00AEEF] hover:text-white"
                >
                  Lire l'article
                </Button>
              </Card>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
