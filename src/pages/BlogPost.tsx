import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, User } from "lucide-react";

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

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from("blog_posts")
        .select(`
          *,
          profiles (
            full_name
          )
        `)
        .eq("id", id)
        .eq("published", true)
        .single();

      if (error) throw error;
      setPost(data);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Article introuvable ou non publié",
      });
      navigate("/blog");
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

  if (!post) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <Button
          onClick={() => navigate("/blog")}
          variant="outline"
          className="mb-6 border-[#004E7C] text-[#004E7C]"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour au blog
        </Button>

        <article className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#004E7C] mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-4 text-gray-600 mb-8 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-[#00AEEF]" />
              <span>{post.profiles?.full_name || "Auteur"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-[#00AEEF]" />
              <span>
                {new Date(post.created_at).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>

          {post.excerpt && (
            <div className="bg-blue-50 border-l-4 border-[#00AEEF] p-4 mb-8">
              <p className="text-lg text-gray-700 italic">{post.excerpt}</p>
            </div>
          )}

          <div className="prose prose-lg max-w-none">
            <div className="text-gray-800 whitespace-pre-wrap leading-relaxed">
              {post.content}
            </div>
          </div>
        </article>

        <div className="mt-8 text-center">
          <Button
            onClick={() => navigate("/blog")}
            className="bg-[#00AEEF] hover:bg-[#0095CC]"
          >
            Lire d'autres articles
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
