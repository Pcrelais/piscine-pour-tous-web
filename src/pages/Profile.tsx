import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { User, Lock, LogOut } from "lucide-react";
import { z } from "zod";

const profileSchema = z.object({
  full_name: z.string().trim().max(100, { message: "Le nom doit faire moins de 100 caractères" }),
});

const passwordSchema = z.object({
  newPassword: z.string().min(6, { message: "Le mot de passe doit contenir au moins 6 caractères" }),
  confirmPassword: z.string(),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas",
  path: ["confirmPassword"],
});

const Profile = () => {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState({ full_name: "" });
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
        fetchProfile(session.user.id);
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (!session) {
          navigate("/auth");
        } else {
          setUser(session.user);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [navigate]);

  const fetchProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();

      if (error) throw error;
      setProfile({ full_name: data.full_name || "" });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de charger le profil",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      profileSchema.parse(profile);
      
      const { error } = await supabase
        .from("profiles")
        .update({ full_name: profile.full_name })
        .eq("id", user.id);

      if (error) throw error;

      toast({
        title: "Profil mis à jour",
        description: "Vos informations ont été mises à jour avec succès",
      });
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        toast({
          variant: "destructive",
          title: "Erreur de validation",
          description: error.errors[0].message,
        });
      } else {
        toast({
          variant: "destructive",
          title: "Erreur",
          description: error.message,
        });
      }
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      passwordSchema.parse({ newPassword, confirmPassword });

      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (error) throw error;

      toast({
        title: "Mot de passe modifié",
        description: "Votre mot de passe a été changé avec succès",
      });
      
      setNewPassword("");
      setConfirmPassword("");
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        toast({
          variant: "destructive",
          title: "Erreur de validation",
          description: error.errors[0].message,
        });
      } else {
        toast({
          variant: "destructive",
          title: "Erreur",
          description: error.message,
        });
      }
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-primary text-xl">Chargement...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background pt-32">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2">Mon Profil</h1>
            <p className="text-muted-foreground">Gérez vos informations personnelles et votre sécurité</p>
          </div>

          {/* Profile Information */}
          <Card className="p-6 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <User className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">Informations personnelles</h2>
            </div>
            
            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={user?.email || ""}
                  disabled
                  className="bg-muted"
                />
                <p className="text-sm text-muted-foreground mt-1">
                  L'email ne peut pas être modifié
                </p>
              </div>

              <div>
                <Label htmlFor="full_name">Nom complet</Label>
                <Input
                  id="full_name"
                  type="text"
                  value={profile.full_name}
                  onChange={(e) => setProfile({ ...profile, full_name: e.target.value })}
                  placeholder="Votre nom"
                />
              </div>

              <Button type="submit" className="bg-secondary hover:bg-primary">
                Mettre à jour le profil
              </Button>
            </form>
          </Card>

          {/* Change Password */}
          <Card className="p-6 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">Changer le mot de passe</h2>
            </div>
            
            <form onSubmit={handleChangePassword} className="space-y-4">
              <div>
                <Label htmlFor="newPassword">Nouveau mot de passe</Label>
                <Input
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Minimum 6 caractères"
                />
              </div>

              <div>
                <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Retapez le mot de passe"
                />
              </div>

              <Button type="submit" className="bg-secondary hover:bg-primary">
                Modifier le mot de passe
              </Button>
            </form>
          </Card>

          {/* Actions */}
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-lg text-primary mb-1">Déconnexion</h3>
                <p className="text-sm text-muted-foreground">
                  Se déconnecter de votre compte
                </p>
              </div>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="gap-2"
              >
                <LogOut className="h-4 w-4" />
                Déconnexion
              </Button>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;