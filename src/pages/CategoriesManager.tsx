import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Plus, Edit, Trash2, Save, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  color: string;
}

const CategoriesManager = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);
  const [formData, setFormData] = useState({ name: "", slug: "", description: "", color: "#00AEEF" });
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from("categories")
        .select("*")
        .order("name");

      if (error) throw error;
      setCategories(data || []);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de charger les catégories",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async () => {
    if (!formData.name.trim()) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Le nom de la catégorie est requis",
      });
      return;
    }

    try {
      const slug = formData.slug || formData.name.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

      const { error } = await supabase.from("categories").insert([{
        name: formData.name,
        slug,
        description: formData.description || null,
        color: formData.color,
      }]);

      if (error) throw error;

      toast({
        title: "Catégorie créée",
        description: "La catégorie a été ajoutée avec succès",
      });

      setFormData({ name: "", slug: "", description: "", color: "#00AEEF" });
      setCreating(false);
      fetchCategories();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: error.message,
      });
    }
  };

  const handleUpdate = async (id: string) => {
    try {
      const { error } = await supabase
        .from("categories")
        .update({
          name: formData.name,
          slug: formData.slug,
          description: formData.description || null,
          color: formData.color,
        })
        .eq("id", id);

      if (error) throw error;

      toast({
        title: "Catégorie modifiée",
        description: "Les modifications ont été enregistrées",
      });

      setEditing(null);
      fetchCategories();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: error.message,
      });
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Êtes-vous sûr de vouloir supprimer la catégorie "${name}" ?`)) return;

    try {
      const { error } = await supabase
        .from("categories")
        .delete()
        .eq("id", id);

      if (error) throw error;

      toast({
        title: "Catégorie supprimée",
        description: "La catégorie a été supprimée avec succès",
      });

      fetchCategories();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: error.message,
      });
    }
  };

  const startEdit = (category: Category) => {
    setFormData({
      name: category.name,
      slug: category.slug,
      description: category.description || "",
      color: category.color,
    });
    setEditing(category.id);
    setCreating(false);
  };

  const cancelEdit = () => {
    setEditing(null);
    setCreating(false);
    setFormData({ name: "", slug: "", description: "", color: "#00AEEF" });
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Chargement...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12 pt-32">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-primary mb-2">Gestion des catégories</h1>
              <p className="text-muted-foreground">Organisez vos articles par catégories</p>
            </div>
            <Button onClick={() => navigate("/blog/dashboard")} variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour au dashboard
            </Button>
          </div>

          {/* Formulaire de création */}
          {!creating && !editing && (
            <Button onClick={() => setCreating(true)} className="mb-6" variant="secondary">
              <Plus className="mr-2 h-4 w-4" />
              Nouvelle catégorie
            </Button>
          )}

          {creating && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Nouvelle catégorie</CardTitle>
                <CardDescription>Ajoutez une nouvelle catégorie pour vos articles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nom *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Construction"
                    />
                  </div>
                  <div>
                    <Label htmlFor="slug">Slug</Label>
                    <Input
                      id="slug"
                      value={formData.slug}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      placeholder="construction"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Description de la catégorie..."
                    rows={2}
                  />
                </div>
                <div>
                  <Label htmlFor="color">Couleur</Label>
                  <div className="flex gap-2 items-center">
                    <Input
                      type="color"
                      id="color"
                      value={formData.color}
                      onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                      className="w-20 h-10"
                    />
                    <Input
                      value={formData.color}
                      onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                      className="flex-1"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button onClick={handleCreate} variant="secondary">
                    <Save className="mr-2 h-4 w-4" />
                    Créer
                  </Button>
                  <Button onClick={cancelEdit} variant="outline">
                    <X className="mr-2 h-4 w-4" />
                    Annuler
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Liste des catégories */}
          <div className="grid gap-4">
            {categories.map((category) => (
              <Card key={category.id}>
                {editing === category.id ? (
                  <CardContent className="pt-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor={`edit-name-${category.id}`}>Nom *</Label>
                        <Input
                          id={`edit-name-${category.id}`}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor={`edit-slug-${category.id}`}>Slug</Label>
                        <Input
                          id={`edit-slug-${category.id}`}
                          value={formData.slug}
                          onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor={`edit-description-${category.id}`}>Description</Label>
                      <Textarea
                        id={`edit-description-${category.id}`}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        rows={2}
                      />
                    </div>
                    <div>
                      <Label htmlFor={`edit-color-${category.id}`}>Couleur</Label>
                      <div className="flex gap-2 items-center">
                        <Input
                          type="color"
                          id={`edit-color-${category.id}`}
                          value={formData.color}
                          onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                          className="w-20 h-10"
                        />
                        <Input
                          value={formData.color}
                          onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                          className="flex-1"
                        />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={() => handleUpdate(category.id)} variant="secondary">
                        <Save className="mr-2 h-4 w-4" />
                        Enregistrer
                      </Button>
                      <Button onClick={cancelEdit} variant="outline">
                        <X className="mr-2 h-4 w-4" />
                        Annuler
                      </Button>
                    </div>
                  </CardContent>
                ) : (
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: category.color }}
                          />
                          <h3 className="text-xl font-semibold">{category.name}</h3>
                          <span className="text-sm text-muted-foreground">/{category.slug}</span>
                        </div>
                        {category.description && (
                          <p className="text-muted-foreground">{category.description}</p>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          onClick={() => startEdit(category)}
                          variant="outline"
                          size="sm"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          onClick={() => handleDelete(category.id, category.name)}
                          variant="outline"
                          size="sm"
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CategoriesManager;
