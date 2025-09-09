
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useEmailJS } from "@/hooks/useEmailJS";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    commune: '',
    message: ''
  });

  const { sendEmail, isLoading } = useEmailJS();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = await sendEmail(formData);
    
    if (result.success) {
      toast({
        title: "Message envoyé !",
        description: "Merci pour votre demande ! Nous vous recontacterons rapidement.",
      });
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        commune: '',
        message: ''
      });
    } else {
      toast({
        title: "Erreur d'envoi",
        description: "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-[#EFF6FF] via-[#DBEAFE] to-[#E0F2FE]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#004E7C] mb-6">Contact</h2>
          <p className="text-xl text-gray-600 mb-4">
            Un projet de piscine ? Parlons-en.
          </p>
          <p className="text-gray-600">
            Que vous soyez au début de votre réflexion ou prêt à lancer votre chantier, nous sommes là pour vous accompagner.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulaire */}
          <Card className="bg-white/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-[#004E7C]">Formulaire de contact</CardTitle>
              <CardDescription>
                Remplissez ce formulaire et nous vous recontacterons rapidement.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="nom">Nom *</Label>
                  <Input 
                    id="nom"
                    required
                    value={formData.nom}
                    onChange={(e) => setFormData({...formData, nom: e.target.value})}
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Adresse e-mail *</Label>
                  <Input 
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                
                <div>
                  <Label htmlFor="telephone">Téléphone *</Label>
                  <Input 
                    id="telephone"
                    required
                    value={formData.telephone}
                    onChange={(e) => setFormData({...formData, telephone: e.target.value})}
                  />
                </div>
                
                <div>
                  <Label htmlFor="commune">Votre commune</Label>
                  <Input 
                    id="commune"
                    value={formData.commune}
                    onChange={(e) => setFormData({...formData, commune: e.target.value})}
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message / Détail de votre projet</Label>
                  <Textarea 
                    id="message"
                    placeholder="Décrivez-nous votre projet : type de piscine, dimensions souhaitées, budget approximatif..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-[#00AEEF] hover:bg-[#004E7C] text-white"
                  disabled={isLoading}
                >
                  {isLoading ? "Envoi en cours..." : "Envoyer"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Informations de contact */}
          <div className="space-y-8">
            <Card className="bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-[#004E7C]">Nos coordonnées</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-[#00AEEF]" />
                  <div>
                    <p className="font-semibold text-[#004E7C]">Téléphone</p>
                    <p className="text-gray-600">06.60.16.65.26</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-[#00AEEF]" />
                  <div>
                    <p className="font-semibold text-[#004E7C]">E-mail</p>
                    <p className="text-gray-600">contact@piscinepourtous.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-[#00AEEF]" />
                  <div>
                    <p className="font-semibold text-[#004E7C]">Horaires</p>
                    <p className="text-gray-600">Lundi au ven - 7h à 19h</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-[#00AEEF]" />
                  <div>
                    <p className="font-semibold text-[#004E7C]">Zone d'intervention</p>
                    <p className="text-gray-600">Isère & Savoie</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#E0F2FE] via-[#F0F9FF] to-[#A0E7E5]/40 border-white/40">
              <CardHeader>
                <CardTitle className="text-xl text-[#004E7C]">Astuce</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Pour un devis rapide, n'hésitez pas à nous préciser :
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Le type de piscine souhaité (enterrée, hors-sol, semi-enterrée)</li>
                  <li>• Les dimensions approximatives</li>
                  <li>• Les contraintes de votre terrain (pente, accès, etc.)</li>
                  <li>• Si vous souhaitez poser vous-même ou faire appel à nos services</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
