import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RichTextViewer from "@/components/RichTextViewer";
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  content: string;
  excerpt: string | null;
  cover_image: string | null;
  category: string | null;
  read_time: number;
  views: number;
  created_at: string;
  profiles: {
    full_name: string | null;
  };
}

const BlogPost = () => {
  const { id: slugOrId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPost();
  }, [slugOrId]);

  const fetchPost = async () => {
    try {
      // Try to fetch by slug first, then by ID
      let query = supabase
        .from("blog_posts")
        .select(`
          *,
          profiles (
            full_name
          )
        `)
        .eq("published", true);

      // Check if slugOrId looks like a UUID
      if (slugOrId?.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)) {
        query = query.eq("id", slugOrId);
      } else {
        query = query.eq("slug", slugOrId);
      }

      const { data, error } = await query.single();

      if (error) throw error;
      setPost(data);

      // Increment views
      await supabase
        .from("blog_posts")
        .update({ views: (data.views || 0) + 1 })
        .eq("id", data.id);

      // Fetch related posts
      if (data.category) {
        const { data: related } = await supabase
          .from("blog_posts")
          .select(`
            *,
            profiles (
              full_name
            )
          `)
          .eq("published", true)
          .eq("category", data.category)
          .neq("id", data.id)
          .limit(3);

        setRelatedPosts(related || []);
      }
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

  const shareUrl = window.location.href;
  const shareTitle = post?.title || "";

  const shareOnSocial = (platform: string) => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    };

    window.open(urls[platform as keyof typeof urls], "_blank", "width=600,height=400");
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
    <div className="min-h-screen flex flex-col bg-gray-50 pt-28">
      <Header />
      
      {/* Hero Section with Cover Image */}
      <div className="relative h-96 bg-gradient-to-br from-[#004E7C] to-[#00AEEF]">
        {post.cover_image && (
          <img
            src={post.cover_image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
        
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-12">
          <Button
            onClick={() => navigate("/blog")}
            variant="outline"
            className="self-start mb-6 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour au blog
          </Button>

          {post.category && (
            <Badge variant="secondary" className="self-start mb-4 text-lg px-4 py-2">
              {post.category}
            </Badge>
          )}

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl drop-shadow-2xl [text-shadow:_2px_2px_8px_rgb(0_0_0_/_80%)]">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span>{post.profiles?.full_name || "Auteur"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>
                {new Date(post.created_at).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{post.read_time} min de lecture</span>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Article Content */}
          <article className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
            {post.excerpt && (
              <div className="bg-secondary/10 border-l-4 border-secondary p-6 mb-8 rounded-r-lg">
                <p className="text-xl text-foreground italic leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            )}

            <RichTextViewer content={post.content} />

            {/* Share Buttons */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <span className="text-gray-600 font-medium flex items-center gap-2">
                  <Share2 className="h-5 w-5" />
                  Partager :
                </span>
                <Button
                  onClick={() => shareOnSocial("facebook")}
                  variant="outline"
                  size="sm"
                  className="hover:bg-blue-600 hover:text-white"
                >
                  <Facebook className="h-4 w-4 mr-2" />
                  Facebook
                </Button>
                <Button
                  onClick={() => shareOnSocial("twitter")}
                  variant="outline"
                  size="sm"
                  className="hover:bg-sky-500 hover:text-white"
                >
                  <Twitter className="h-4 w-4 mr-2" />
                  Twitter
                </Button>
                <Button
                  onClick={() => shareOnSocial("linkedin")}
                  variant="outline"
                  size="sm"
                  className="hover:bg-blue-700 hover:text-white"
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </article>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Articles similaires
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <div
                    key={relatedPost.id}
                    onClick={() => navigate(`/blog/${relatedPost.slug}`)}
                    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                  >
                    {relatedPost.cover_image ? (
                      <img
                        src={relatedPost.cover_image}
                        alt={relatedPost.title}
                        className="w-full h-40 object-cover"
                      />
                    ) : (
                      <div className="w-full h-40 bg-gradient-to-br from-[#004E7C] to-[#00AEEF]" />
                    )}
                    <div className="p-4">
                      <h3 className="font-bold text-[#004E7C] mb-2 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {relatedPost.excerpt || relatedPost.content.substring(0, 100)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="text-center bg-gradient-to-br from-[#004E7C] to-[#00AEEF] text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Découvrez plus d'articles</h3>
            <Button
              onClick={() => navigate("/blog")}
              className="bg-white text-[#004E7C] hover:bg-gray-100"
            >
              Voir tous les articles
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
