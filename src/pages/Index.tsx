
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Wrench, 
  Users, 
  Shield, 
  Droplets,
  ChevronDown,
  Menu,
  X
} from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    commune: '',
    message: ''
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Ici on pourrait intégrer l'envoi du formulaire
    alert('Merci pour votre demande ! Nous vous recontacterons rapidement.');
  };

  const services = [
    {
      icon: <Droplets className="h-8 w-8 text-blue-500" />,
      title: "Fourniture et Pose",
      description: "Étude personnalisée, terrassement, installation complète et mise en eau de votre piscine en kit."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Accompagnement Technique",
      description: "Planification détaillée, conseils d'expert et interventions ponctuelles pour l'auto-construction."
    },
    {
      icon: <Wrench className="h-8 w-8 text-blue-500" />,
      title: "Entretien & Rénovation",
      description: "Mise en service, hivernage, vérifications techniques et rénovation de piscines existantes."
    }
  ];

  const realisations = [
    {
      id: 1,
      title: "Piscine familiale - Grenoble",
      image: "/placeholder.svg",
      description: "Installation complète d'une piscine 8x4m avec plage"
    },
    {
      id: 2,
      title: "Rénovation - Chambéry", 
      image: "/placeholder.svg",
      description: "Rénovation complète liner et équipements"
    },
    {
      id: 3,
      title: "Auto-construction accompagnée - Voiron",
      image: "/placeholder.svg",
      description: "Accompagnement technique pour auto-construction"
    },
    {
      id: 4,
      title: "Piscine hors-sol - Annecy",
      image: "/placeholder.svg",
      description: "Installation piscine hors-sol avec terrasse"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header / Navigation */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Droplets className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold text-blue-900">PiscinePourTous</span>
            </div>
            
            {/* Navigation Desktop */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('accueil')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Accueil
              </button>
              <button onClick={() => scrollToSection('apropos')} className="text-gray-700 hover:text-blue-600 transition-colors">
                À propos
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('realisations')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Réalisations
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </button>
            </nav>

            <Button onClick={() => scrollToSection('contact')} className="hidden md:block bg-blue-600 hover:bg-blue-700">
              Demander un devis gratuit
            </Button>

            {/* Menu Mobile */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Menu Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <button onClick={() => scrollToSection('accueil')} className="block text-gray-700 hover:text-blue-600">
                Accueil
              </button>
              <button onClick={() => scrollToSection('apropos')} className="block text-gray-700 hover:text-blue-600">
                À propos
              </button>
              <button onClick={() => scrollToSection('services')} className="block text-gray-700 hover:text-blue-600">
                Services
              </button>
              <button onClick={() => scrollToSection('realisations')} className="block text-gray-700 hover:text-blue-600">
                Réalisations
              </button>
              <button onClick={() => scrollToSection('contact')} className="block text-gray-700 hover:text-blue-600">
                Contact
              </button>
              <Button onClick={() => scrollToSection('contact')} className="w-full bg-blue-600 hover:bg-blue-700">
                Demander un devis gratuit
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Section Accueil */}
      <section id="accueil" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">
              Votre Piscine de Rêve
              <span className="block text-cyan-600">en Isère & Savoie</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Spécialistes de la vente et pose de piscines en kit, nous vous accompagnons 
              de A à Z dans votre projet piscine. Devis gratuit et transparent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
              >
                Demander un devis gratuit
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('realisations')}
                className="text-lg px-8 py-3"
              >
                Voir nos réalisations
              </Button>
            </div>
          </div>

          {/* Aperçu Services */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Zone d'intervention */}
          <div className="text-center mt-16 p-8 bg-white rounded-lg shadow-md">
            <MapPin className="h-8 w-8 text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-blue-900 mb-2">Zone d'intervention</h3>
            <p className="text-lg text-gray-600">Isère & Savoie - Déplacements gratuits</p>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="text-center pb-8">
          <ChevronDown className="h-8 w-8 text-blue-500 mx-auto animate-bounce cursor-pointer" 
                       onClick={() => scrollToSection('apropos')} />
        </div>
      </section>

      {/* Section À propos */}
      <section id="apropos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">À propos de PiscinePourTous</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Nous rendons accessible le rêve de la piscine à tous les budgets et tous les projets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-6">Notre Mission</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Depuis notre création, nous mettons notre expertise au service de particuliers 
                qui souhaitent concrétiser leur projet piscine en Isère et Savoie. Notre approche 
                se base sur l'accessibilité, la simplicité et la proximité.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-blue-500" />
                  <span className="text-gray-700">Garanties étendues et interlocuteur unique</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-blue-500" />
                  <span className="text-gray-700">Accompagnement personnalisé</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Wrench className="h-6 w-6 text-blue-500" />
                  <span className="text-gray-700">Expertise technique reconnue</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-lg">
              <h4 className="text-xl font-semibold text-blue-900 mb-4">Nos Valeurs</h4>
              <ul className="space-y-3 text-gray-600">
                <li><strong>Accessibilité :</strong> Des solutions pour tous les budgets</li>
                <li><strong>Simplicité :</strong> Un projet piscine sans stress</li>
                <li><strong>Maîtrise :</strong> Expertise technique éprouvée</li>
                <li><strong>Proximité :</strong> Service de proximité en Isère/Savoie</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Nos Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De la conception à la maintenance, nous vous accompagnons à chaque étape de votre projet piscine.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  {index === 0 && (
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Étude personnalisée de votre terrain</li>
                      <li>• Terrassement et préparation</li>
                      <li>• Installation complète</li>
                      <li>• Mise en eau et formation</li>
                    </ul>
                  )}
                  
                  {index === 1 && (
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Planification détaillée du projet</li>
                      <li>• Conseils techniques d'expert</li>
                      <li>• Interventions ponctuelles</li>
                      <li>• Suivi et assistance</li>
                    </ul>
                  )}
                  
                  {index === 2 && (
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Mise en service saisonnière</li>
                      <li>• Hivernage professionnel</li>
                      <li>• Vérifications techniques</li>
                      <li>• Rénovation et modernisation</li>
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 p-8 bg-blue-50 rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Nos Garanties</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Shield className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <p className="font-semibold">Garantie Étendue</p>
                <p className="text-sm text-gray-600">Sur tous nos équipements</p>
              </div>
              <div>
                <Users className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <p className="font-semibold">Interlocuteur Unique</p>
                <p className="text-sm text-gray-600">Du devis à la livraison</p>
              </div>
              <div>
                <Clock className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <p className="font-semibold">Prix Transparents</p>
                <p className="text-sm text-gray-600">Devis détaillé sans surprise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Réalisations */}
      <section id="realisations" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Nos Réalisations</h2>
            <p className="text-xl text-gray-600">
              Découvrez quelques-unes de nos plus belles réalisations en Isère et Savoie.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {realisations.map((realisation) => (
              <Card key={realisation.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Droplets className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-sm">Photo de réalisation</p>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{realisation.title}</CardTitle>
                  <CardDescription className="text-base">
                    {realisation.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Contactez-nous</h2>
            <p className="text-xl text-gray-600">
              Prêt à concrétiser votre projet piscine ? Demandez votre devis gratuit !
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulaire */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Demande de devis gratuit</CardTitle>
                <CardDescription>
                  Remplissez ce formulaire et nous vous recontacterons rapidement.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
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
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
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
                      <Label htmlFor="commune">Commune</Label>
                      <Input 
                        id="commune"
                        value={formData.commune}
                        onChange={(e) => setFormData({...formData, commune: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Votre projet</Label>
                    <Textarea 
                      id="message"
                      placeholder="Décrivez-nous votre projet : type de piscine, dimensions souhaitées, budget approximatif..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Envoyer ma demande
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Informations de contact */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Nos coordonnées</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-500" />
                    <div>
                      <p className="font-semibold">Téléphone</p>
                      <p className="text-gray-600">04 XX XX XX XX</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-500" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-600">contact@piscinepourtous.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-500" />
                    <div>
                      <p className="font-semibold">Zone d'intervention</p>
                      <p className="text-gray-600">Isère & Savoie</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-500" />
                    <div>
                      <p className="font-semibold">Horaires</p>
                      <p className="text-gray-600">Lun-Ven : 8h-18h<br />Sam : 9h-17h</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-xl">Infos utiles pour votre devis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Pour un devis précis et rapide, pensez à nous préciser :
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Dimensions souhaitées de la piscine</li>
                    <li>• Type de terrain (plat, en pente...)</li>
                    <li>• Accès au terrain (portail, largeur...)</li>
                    <li>• Budget approximatif</li>
                    <li>• Délai souhaité pour les travaux</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Mentions légales */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Droplets className="h-6 w-6" />
                <span className="text-xl font-bold">PiscinePourTous</span>
              </div>
              <p className="text-blue-200">
                Votre spécialiste piscine en Isère & Savoie
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-blue-200">
                <li>Vente et pose de piscines</li>
                <li>Accompagnement technique</li>
                <li>Entretien et rénovation</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-blue-200">
                <p>04 XX XX XX XX</p>
                <p>contact@piscinepourtous.com</p>
                <p>Isère & Savoie</p>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-blue-700" />
          
          <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-200">
            <div>
              <h5 className="font-semibold mb-2">Mentions légales</h5>
              <p className="mb-2">
                <strong>Éditeur :</strong> PiscinePourTous - Responsable publication : [Nom]
              </p>
              <p className="mb-2">
                <strong>Hébergeur :</strong> [Nom hébergeur, adresse]
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-2">Protection des données (RGPD)</h5>
              <p className="mb-2">
                Les données collectées via ce formulaire sont conservées 3 ans maximum.
                Vous disposez d'un droit d'accès, rectification et suppression.
              </p>
              <p>
                Contact : contact@piscinepourtous.com
              </p>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-blue-700 text-center text-sm text-blue-200">
            <p>© 2024 PiscinePourTous - Tous droits réservés</p>
            <p className="mt-2">
              Crédits visuels : Aquadiscount, Canva, photos clients avec autorisation
            </p>
            <p className="mt-2">
              🍪 Ce site utilise des cookies pour améliorer votre expérience de navigation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
