import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Save } from "lucide-react";

const BlogEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [published, setPublished] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (!session) {
        navigate("/auth");
      }
    });
  }, [navigate]);

  useEffect(() => {
    if (id && user) {
      fetchPost();
    }
  }, [id, user]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;

      setTitle(data.title);
      setExcerpt(data.excerpt || "");
      setContent(data.content);
      setPublished(data.published);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de charger l'article",
      });
      navigate("/blog");
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);

    try {
      const postData = {
        title,
        excerpt: excerpt || null,
        content,
        published,
        user_id: user.id,
      };

      if (id) {
        const { error } = await supabase
          .from("blog_posts")
          .update(postData)
          .eq("id", id);

        if (error) throw error;

        toast({
          title: "Article mis à jour",
          description: "Vos modifications ont été enregistrées",
        });
      } else {
        const { error } = await supabase.from("blog_posts").insert([postData]);

        if (error) throw error;

        toast({
          title: "Article créé",
          description: "Votre article a été créé avec succès",
        });
      }

      navigate("/blog");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <Button
            onClick={() => navigate("/blog")}
            variant="outline"
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour
          </Button>

          <h1 className="text-4xl font-bold text-[#004E7C]">
            {id ? "Éditer l'article" : "Nouvel article"}
          </h1>
        </div>

        <form onSubmit={handleSave} className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <div>
            <Label htmlFor="title">Titre de l'article *</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Un titre accrocheur..."
              className="text-lg"
            />
          </div>

          <div>
            <Label htmlFor="excerpt">Extrait (résumé court)</Label>
            <Textarea
              id="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Un bref résumé de votre article..."
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="content">Contenu *</Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              placeholder="Écrivez votre article ici..."
              rows={15}
              className="font-mono"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="published"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
              className="w-4 h-4 text-[#00AEEF] rounded"
            />
            <Label htmlFor="published" className="cursor-pointer">
              Publier l'article (visible publiquement)
            </Label>
          </div>

          <div className="flex gap-4">
            <Button
              type="submit"
              className="bg-[#00AEEF] hover:bg-[#0095CC]"
              disabled={loading}
            >
              <Save className="mr-2 h-4 w-4" />
              {loading ? "Enregistrement..." : "Enregistrer"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/blog")}
            >
              Annuler
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogEditor;
