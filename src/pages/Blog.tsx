import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Search, Clock, TrendingUp } from "lucide-react";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  content: string;
  excerpt: string | null;
  cover_image: string | null;
  category: string | null;
  read_time: number;
  created_at: string;
  profiles: {
    full_name: string | null;
  };
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
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

  useEffect(() => {
    filterPosts();
  }, [searchTerm, selectedCategory, posts]);

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

  const filterPosts = () => {
    let filtered = posts;

    if (searchTerm) {
      filtered = filtered.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    setFilteredPosts(filtered);
  };

  const categories = Array.from(new Set(posts.map((p) => p.category).filter(Boolean)));

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-[#004E7C] text-xl">Chargement...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Blog Piscine Pour Tous
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Conseils, actualités et expertise piscine
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Rechercher un article..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-6 text-lg bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/70 focus:bg-white/20 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1 container mx-auto px-4 py-12">
        {/* Categories & Actions */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={() => setSelectedCategory(null)}
              variant={selectedCategory === null ? "secondary" : "outline"}
            >
              Tous
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "secondary" : "outline"}
              >
                {category}
              </Button>
            ))}
          </div>
          
          {user ? (
            <Button
              onClick={() => navigate("/blog/dashboard")}
              variant="default"
            >
              Mon tableau de bord
            </Button>
          ) : (
            <Button
              onClick={() => navigate("/auth")}
              variant="outline"
            >
              Se connecter pour écrire
            </Button>
          )}
        </div>

        {/* Posts Grid */}
        {filteredPosts.length === 0 ? (
          <Card className="p-12 text-center">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg mb-4">
              {searchTerm || selectedCategory 
                ? "Aucun article trouvé" 
                : "Aucun article publié pour le moment"}
            </p>
            {user && !searchTerm && !selectedCategory && (
              <Button
                onClick={() => navigate("/blog/new")}
                variant="secondary"
              >
                Écrire le premier article
              </Button>
            )}
          </Card>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => navigate(`/blog/${post.slug}`)}
              >
                {/* Cover Image */}
                {post.cover_image ? (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.cover_image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <BookOpen className="h-16 w-16 text-white opacity-50" />
                  </div>
                )}

                <div className="p-6">
                  {/* Category Badge */}
                  {post.category && (
                    <Badge variant="secondary" className="mb-3">
                      {post.category}
                    </Badge>
                  )}

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt || post.content.substring(0, 150) + "..."}
                  </p>

                  {/* Meta Info */}
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <TrendingUp className="h-4 w-4" />
                      {post.profiles?.full_name || "Auteur"}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.read_time} min
                    </span>
                  </div>
                </div>
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
