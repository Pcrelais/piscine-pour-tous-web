import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Save, Image as ImageIcon, Loader2, Upload, X } from "lucide-react";

const CATEGORIES = [
  "Entretien",
  "Construction",
  "Rénovation",
  "Équipement",
  "Conseils",
  "Actualités",
];

const BlogEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [readTime, setReadTime] = useState(5);
  const [published, setPublished] = useState(false);
  const [user, setUser] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  useEffect(() => {
    // Auto-calculate read time based on content
    const words = content.split(/\s+/).length;
    const calculatedTime = Math.max(1, Math.ceil(words / 200));
    setReadTime(calculatedTime);
  }, [content]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;

      setTitle(data.title);
      setSlug(data.slug || "");
      setExcerpt(data.excerpt || "");
      setContent(data.content);
      setCategory(data.category || "");
      setCoverImage(data.cover_image || "");
      setReadTime(data.read_time || 5);
      setPublished(data.published);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de charger l'article",
      });
      navigate("/blog/dashboard");
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast({
        variant: "destructive",
        title: "Fichier invalide",
        description: "Veuillez sélectionner une image",
      });
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        variant: "destructive",
        title: "Fichier trop volumineux",
        description: "La taille maximale est de 5MB",
      });
      return;
    }

    setUploading(true);

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${user.id}/${Date.now()}.${fileExt}`;

      const { error: uploadError, data } = await supabase.storage
        .from('blog-images')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('blog-images')
        .getPublicUrl(fileName);

      setCoverImage(publicUrl);
      
      toast({
        title: "Image uploadée",
        description: "L'image a été ajoutée avec succès",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Erreur d'upload",
        description: error.message,
      });
    } finally {
      setUploading(false);
    }
  };

  const handleRemoveImage = () => {
    setCoverImage("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);

    try {
      const postData = {
        title,
        slug: slug || undefined,
        excerpt: excerpt || null,
        content,
        category: category || null,
        cover_image: coverImage || null,
        read_time: readTime,
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

      navigate("/blog/dashboard");
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
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Button
              onClick={() => navigate("/blog/dashboard")}
              variant="outline"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour
            </Button>
            
            <h1 className="text-2xl font-bold text-[#004E7C]">
              {id ? "Éditer l'article" : "Nouvel article"}
            </h1>

            <Button
              onClick={handleSave}
              className="bg-[#00AEEF] hover:bg-[#0095CC]"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enregistrement...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Enregistrer
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <form onSubmit={handleSave} className="space-y-6">
          {/* Main Content */}
          <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
            <div>
              <Label htmlFor="title" className="text-lg font-semibold">
                Titre de l'article *
              </Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="Un titre accrocheur..."
                className="text-2xl font-bold mt-2 border-none shadow-none p-0 focus-visible:ring-0"
              />
            </div>

            <div>
              <Label htmlFor="slug" className="text-sm text-gray-600">
                URL personnalisée (optionnel)
              </Label>
              <Input
                id="slug"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="mon-article-super-interessant"
                className="mt-2"
              />
              <p className="text-xs text-gray-500 mt-1">
                Laissez vide pour génération automatique
              </p>
            </div>

            <div>
              <Label htmlFor="excerpt" className="text-lg font-semibold">
                Résumé (extrait)
              </Label>
              <Textarea
                id="excerpt"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="Un bref résumé qui apparaîtra sur la page d'accueil..."
                rows={3}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="content" className="text-lg font-semibold">
                Contenu de l'article *
              </Label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                placeholder="Écrivez votre article ici..."
                rows={20}
                className="mt-2 font-mono"
              />
              <p className="text-sm text-gray-500 mt-2">
                Temps de lecture estimé : {readTime} minute{readTime > 1 ? "s" : ""}
              </p>
            </div>
          </div>

          {/* Sidebar Settings */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
              <h3 className="font-semibold text-lg text-[#004E7C] mb-4">
                Paramètres
              </h3>

              <div>
                <Label htmlFor="category">Catégorie</Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger id="category" className="mt-2">
                    <SelectValue placeholder="Sélectionner une catégorie" />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2 pt-4">
                <input
                  type="checkbox"
                  id="published"
                  checked={published}
                  onChange={(e) => setPublished(e.target.checked)}
                  className="w-5 h-5 text-[#00AEEF] rounded"
                />
                <Label htmlFor="published" className="cursor-pointer text-base">
                  Publier l'article (visible publiquement)
                </Label>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
              <h3 className="font-semibold text-lg text-primary mb-4 flex items-center gap-2">
                <ImageIcon className="h-5 w-5" />
                Image de couverture
              </h3>

              <div className="space-y-4">
                <div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <Button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploading}
                    variant="outline"
                    className="w-full"
                  >
                    {uploading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Upload en cours...
                      </>
                    ) : (
                      <>
                        <Upload className="mr-2 h-4 w-4" />
                        Télécharger une image
                      </>
                    )}
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2">
                    Formats acceptés: JPG, PNG, WEBP (max 5MB)
                  </p>
                </div>

                <div className="relative">
                  <Label htmlFor="coverImageUrl" className="text-sm">
                    Ou saisissez une URL
                  </Label>
                  <Input
                    id="coverImageUrl"
                    value={coverImage}
                    onChange={(e) => setCoverImage(e.target.value)}
                    placeholder="https://example.com/image.jpg"
                    className="mt-2"
                  />
                </div>

                {coverImage && (
                  <div className="relative mt-4">
                    <p className="text-sm text-muted-foreground mb-2">Aperçu :</p>
                    <div className="relative group">
                      <img
                        src={coverImage}
                        alt="Aperçu"
                        className="w-full h-48 object-cover rounded-lg"
                        onError={(e) => {
                          e.currentTarget.src = "";
                          toast({
                            variant: "destructive",
                            title: "Image invalide",
                            description: "L'URL de l'image n'est pas valide",
                          });
                        }}
                      />
                      <Button
                        type="button"
                        onClick={handleRemoveImage}
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-end bg-white rounded-lg shadow-md p-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/blog/dashboard")}
            >
              Annuler
            </Button>
            <Button
              type="submit"
              className="bg-[#00AEEF] hover:bg-[#0095CC]"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enregistrement...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Enregistrer l'article
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogEditor;
