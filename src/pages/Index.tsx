
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
  X,
  CheckCircle,
  Award,
  UserCheck,
  Settings
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
    alert('Merci pour votre demande ! Nous vous recontacterons rapidement.');
  };

  const services = [
    {
      icon: <Droplets className="h-8 w-8 text-[#00AEEF]" />,
      title: "Fourniture et Pose",
      description: "Installation complète de piscines en kit enterrées ou hors-sol avec volet roulant et bloc de filtration."
    },
    {
      icon: <Users className="h-8 w-8 text-[#00AEEF]" />,
      title: "Accompagnement à l'Auto-construction",
      description: "Aide à la planification, astuces de pose et interventions ponctuelles pour les bricoleurs autonomes."
    },
    {
      icon: <Wrench className="h-8 w-8 text-[#00AEEF]" />,
      title: "Entretien & Rénovation",
      description: "Mise en service, hivernage, vérification des équipements et rénovation de piscines existantes."
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

  const valeurs = [
    {
      icon: <CheckCircle className="h-6 w-6 text-[#00AEEF]" />,
      title: "Accessibilité",
      description: "Des solutions pour tous les budgets, sans sacrifier la qualité"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-[#00AEEF]" />,
      title: "Simplicité",
      description: "Un accompagnement clair à chaque étape, même si vous débutez"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-[#00AEEF]" />,
      title: "Maîtrise",
      description: "Des équipes rigoureuses, un chantier bien encadré"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-[#00AEEF]" />,
      title: "Proximité",
      description: "Un service de proximité, à l'écoute de vos attentes"
    }
  ];

  const engagements = [
    {
      icon: <Award className="h-8 w-8 text-[#00AEEF]" />,
      title: "Expertise terrain",
      description: "Chaque projet est unique, nous adaptons la pose à votre environnement"
    },
    {
      icon: <UserCheck className="h-8 w-8 text-[#00AEEF]" />,
      title: "Conseils personnalisés",
      description: "Pose complète ou accompagnement, nous sommes là pour vous guider"
    },
    {
      icon: <Settings className="h-8 w-8 text-[#00AEEF]" />,
      title: "Satisfaction client",
      description: "Notre meilleure publicité, ce sont les retours positifs de nos clients"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header / Navigation */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/ea68e63d-bb2b-410f-8209-ed0611a8db57.png" 
                alt="PiscinePourTous Logo" 
                className="h-12 w-auto"
              />
            </div>
            
            {/* Navigation Desktop */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('accueil')} className="text-[#004E7C] hover:text-[#00AEEF] transition-colors font-medium">
                Accueil
              </button>
              <button onClick={() => scrollToSection('apropos')} className="text-[#004E7C] hover:text-[#00AEEF] transition-colors font-medium">
                À propos
              </button>
              <button onClick={() => scrollToSection('services')} className="text-[#004E7C] hover:text-[#00AEEF] transition-colors font-medium">
                Services
              </button>
              <button onClick={() => scrollToSection('realisations')} className="text-[#004E7C] hover:text-[#00AEEF] transition-colors font-medium">
                Réalisations
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-[#004E7C] hover:text-[#00AEEF] transition-colors font-medium">
                Contact
              </button>
            </nav>

            <Button onClick={() => scrollToSection('contact')} className="hidden md:block bg-[#00AEEF] hover:bg-[#004E7C] text-white">
              Demander un devis gratuit
            </Button>

            {/* Menu Mobile */}
            <button 
              className="md:hidden text-[#004E7C]"
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
              <button onClick={() => scrollToSection('accueil')} className="block text-[#004E7C] hover:text-[#00AEEF]">
                Accueil
              </button>
              <button onClick={() => scrollToSection('apropos')} className="block text-[#004E7C] hover:text-[#00AEEF]">
                À propos
              </button>
              <button onClick={() => scrollToSection('services')} className="block text-[#004E7C] hover:text-[#00AEEF]">
                Services
              </button>
              <button onClick={() => scrollToSection('realisations')} className="block text-[#004E7C] hover:text-[#00AEEF]">
                Réalisations
              </button>
              <button onClick={() => scrollToSection('contact')} className="block text-[#004E7C] hover:text-[#00AEEF]">
                Contact
              </button>
              <Button onClick={() => scrollToSection('contact')} className="w-full bg-[#00AEEF] hover:bg-[#004E7C] text-white">
                Demander un devis gratuit
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Section Accueil */}
      <section id="accueil" className="pt-20 pb-16 bg-gradient-to-br from-[#F5F5F5] to-[#A0E7E5]/20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-[#004E7C] mb-4">
              Votre piscine, notre métier
            </h1>
            <p className="text-2xl text-[#00AEEF] font-semibold mb-6">
              Un chantier maîtrisé, une piscine pour tous les budgets
            </p>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Chez PiscinePourTous, nous vous accompagnons de A à Z dans la pose de votre piscine en kit. 
              Que vous rêviez d'une piscine enterrée ou semi-enterrée, notre équipe met tout en œuvre pour 
              un chantier maîtrisé, rapide et économique. Nous vous accompagnons avec passion, du premier 
              conseil jusqu'au dernier plongeon.
            </p>
            <p className="text-lg text-[#004E7C] mb-8 font-medium">
              Profitez d'un projet personnalisé adapté à votre terrain, vos envies… et votre budget.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="bg-[#00AEEF] hover:bg-[#004E7C] text-white text-lg px-8 py-3"
              >
                Demander un devis gratuit
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('realisations')}
                className="text-[#004E7C] border-[#004E7C] hover:bg-[#004E7C] hover:text-white text-lg px-8 py-3"
              >
                Voir nos réalisations
              </Button>
            </div>

            {/* Zone d'intervention et garanties */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="flex items-center justify-center space-x-2 text-[#004E7C]">
                <MapPin className="h-5 w-5 text-[#00AEEF]" />
                <span className="font-medium">Zone : Isère / Savoie</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-[#004E7C]">
                <CheckCircle className="h-5 w-5 text-[#00AEEF]" />
                <span className="font-medium">Pose rapide</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-[#004E7C]">
                <Shield className="h-5 w-5 text-[#00AEEF]" />
                <span className="font-medium">Garantie qualité</span>
              </div>
            </div>
          </div>

          {/* Aperçu Services */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <h3 className="col-span-full text-3xl font-bold text-[#004E7C] text-center mb-8">
              Des solutions pour tous les projets
            </h3>
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-[#A0E7E5]">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-[#004E7C]">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="text-center pb-8">
          <ChevronDown className="h-8 w-8 text-[#00AEEF] mx-auto animate-bounce cursor-pointer" 
                       onClick={() => scrollToSection('apropos')} />
        </div>
      </section>

      {/* Section À propos */}
      <section id="apropos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-[#004E7C] mb-6">À propos de PiscinePourTous</h2>
            <p className="text-xl text-[#00AEEF] font-semibold mb-6">
              Une passion pour la piscine, un engagement pour vos projets
            </p>
            <p className="text-gray-600 leading-relaxed">
              Chez PiscinePourTous, nous croyons que chacun mérite de profiter d'un espace de détente chez soi, 
              sans compromis sur la qualité ni le budget. C'est cette conviction qui nous pousse chaque jour à 
              proposer des solutions accessibles, fiables et esthétiques pour tous vos projets de piscines en kit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-[#004E7C] mb-6">Qui sommes-nous ?</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nous sommes une entreprise spécialisée dans la pose de piscines en kit, conçue pour offrir 
                à nos clients un accompagnement professionnel et transparent. Grâce à notre expérience terrain 
                et notre exigence technique, nous assurons un chantier bien maîtrisé, de la préparation à la mise en eau.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nous intervenons aussi bien auprès des particuliers que des résidences secondaires, avec un seul 
                objectif : vous livrer une piscine qui vous ressemble, sans mauvaise surprise.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#F5F5F5] to-[#A0E7E5]/20 p-8 rounded-lg">
              <h4 className="text-xl font-semibold text-[#004E7C] mb-6">Nos Valeurs</h4>
              <div className="space-y-4">
                {valeurs.map((valeur, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    {valeur.icon}
                    <div>
                      <h5 className="font-semibold text-[#004E7C]">{valeur.title}</h5>
                      <p className="text-sm text-gray-600">{valeur.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#A0E7E5]/10 via-white to-[#F4EBD0]/30 rounded-2xl p-8 shadow-lg border border-[#A0E7E5]/20">
            <div className="text-center mb-8">
              <h4 className="text-3xl font-bold text-[#004E7C] mb-4">Pourquoi nous faire confiance ?</h4>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Notre expertise et notre engagement font la différence sur chaque projet
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {engagements.map((engagement, index) => (
                <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl p-6 hover:shadow-md transition-all duration-300 hover:bg-white/80">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-gradient-to-br from-[#00AEEF]/10 to-[#A0E7E5]/20 rounded-full p-4 mb-4">
                      {engagement.icon}
                    </div>
                    <h5 className="text-xl font-semibold text-[#004E7C] mb-3">{engagement.title}</h5>
                    <p className="text-gray-600 leading-relaxed">{engagement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section id="services" className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#004E7C] mb-6">Nos Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des piscines en kit, un accompagnement sur mesure. Nous ne vous proposons pas seulement une piscine : 
              nous vous accompagnons pour réaliser un projet clair, bien encadré et adapté à votre budget.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="h-full hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Droplets className="h-12 w-12 text-[#00AEEF] mx-auto mb-4" />
                <CardTitle className="text-2xl text-[#004E7C]">Fourniture et pose de piscines en kit</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  Nous installons des piscines en kit enterrées ou hors-sol, conçues pour durer et faciles à entretenir 
                  (volet roulant et bloc de filtration).
                </CardDescription>
                <p className="text-sm font-semibold text-[#00AEEF]">
                  Notre promesse : un chantier rapide, propre, et un rendu professionnel à prix maîtrisé.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Étude de faisabilité sur votre terrain</li>
                  <li>• Terrassement, installation et mise en eau</li>
                  <li>• Conseils d'entretien de votre bassin</li>
                </ul>
                <p className="text-sm text-[#004E7C] font-medium">
                  Idéal pour ceux qui veulent un résultat clé-en-main, sans stress.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-[#00AEEF] mx-auto mb-4" />
                <CardTitle className="text-2xl text-[#004E7C]">Accompagnement à l'auto-construction</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  Vous souhaitez poser vous-même votre piscine en kit, mais avez besoin d'un coup de pouce ? 
                  Nous proposons un accompagnement technique personnalisé.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Aide à la planification</li>
                  <li>• Astuces de pose et bonnes pratiques</li>
                  <li>• Intervention ponctuelle sur chantier (optionnel)</li>
                </ul>
                <p className="text-sm text-[#004E7C] font-medium">
                  Pour les particuliers bricoleurs qui veulent rester autonomes, avec la sécurité d'un vrai pro en soutien.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Wrench className="h-12 w-12 text-[#00AEEF] mx-auto mb-4" />
                <CardTitle className="text-2xl text-[#004E7C]">Entretien & rénovation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  Nous proposons également des services pour prolonger la vie de votre piscine.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Mise en service et hivernage</li>
                  <li>• Vérification des équipements (pompe, filtration, liner)</li>
                  <li>• Rénovation de piscines existantes (liner, margelles, filtration)</li>
                </ul>
                <p className="text-sm text-[#004E7C] font-medium">
                  Prolongez la vie de votre piscine avec un entretien fiable et régulier.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center p-8 bg-[#A0E7E5]/20 rounded-lg">
            <h3 className="text-2xl font-semibold text-[#004E7C] mb-6">Pourquoi choisir PiscinePourTous ?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <Shield className="h-8 w-8 text-[#00AEEF] mb-2" />
                <p className="font-semibold text-[#004E7C]">Prix transparents</p>
                <p className="text-sm text-gray-600">Adaptés à tous les budgets</p>
              </div>
              <div className="flex flex-col items-center">
                <Wrench className="h-8 w-8 text-[#00AEEF] mb-2" />
                <p className="font-semibold text-[#004E7C]">Expertise technique</p>
                <p className="text-sm text-gray-600">Sur le terrain</p>
              </div>
              <div className="flex flex-col items-center">
                <Users className="h-8 w-8 text-[#00AEEF] mb-2" />
                <p className="font-semibold text-[#004E7C]">Interlocuteur unique</p>
                <p className="text-sm text-gray-600">Pour un chantier maîtrisé</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Réalisations */}
      <section id="realisations" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#004E7C] mb-6">Nos Réalisations</h2>
            <p className="text-xl text-gray-600 mb-4">
              Ils nous ont fait confiance. Pourquoi pas vous ?
            </p>
            <p className="text-gray-600">
              Chez PiscinePourTous, chaque projet est unique. Que ce soit une petite piscine familiale ou 
              un bassin plus élaboré, notre équipe s'adapte à vos envies, à votre terrain… et à votre budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {realisations.map((realisation) => (
              <Card key={realisation.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-[#A0E7E5]/20 to-[#00AEEF]/20 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Droplets className="h-16 w-16 mx-auto mb-4 text-[#00AEEF]" />
                    <p className="text-sm">Photo de réalisation</p>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-[#004E7C]">{realisation.title}</CardTitle>
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
      <section id="contact" className="py-16 bg-[#F5F5F5]">
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
            <Card>
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
                  
                  <Button type="submit" className="w-full bg-[#00AEEF] hover:bg-[#004E7C] text-white">
                    Envoyer
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Informations de contact */}
            <div className="space-y-8">
              <Card>
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
                      <p className="text-gray-600">Lundi au ven - 7h à 17h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-[#00AEEF]" />
                    <div>
                      <p className="font-semibold text-[#004E7C]">Zone d'intervention</p>
                      <p className="text-gray-600">Isère / Savoie</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#A0E7E5]/20">
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

      {/* Footer / Mentions légales */}
      <footer className="bg-[#004E7C] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/ea68e63d-bb2b-410f-8209-ed0611a8db57.png" 
                  alt="PiscinePourTous Logo" 
                  className="h-8 w-auto filter brightness-0 invert"
                />
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
                <p>06.60.16.65.26</p>
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
                <strong>Éditeur :</strong> PiscinePourTous - Responsable publication : Jacques Gioello
              </p>
              <p className="mb-2">
                <strong>Adresse :</strong> Longechenal
              </p>
              <p className="mb-2">
                <strong>Téléphone :</strong> 06.60.16.65.26
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
              Crédits visuels : Réalisations PiscinePourTous, CANVA, photos clients avec autorisation
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
