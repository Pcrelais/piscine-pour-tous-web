import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
import CookieBanner from "@/components/CookieBanner";
import { useEmailJS } from "@/hooks/useEmailJS";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    commune: '',
    message: ''
  });

  const { sendEmail, isLoading } = useEmailJS();
  const { toast } = useToast();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = await sendEmail(formData);
    
    if (result.success) {
      toast({
        title: "Message envoyé !",
        description: "Merci pour votre demande ! Nous vous recontacterons rapidement.",
      });
      // Réinitialiser le formulaire
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

  const heroSlides = [
    {
      image: "/lovable-uploads/8f07b898-1bc3-4f84-844f-0e7d05451f63.png",
      title: "Votre piscine, notre métier",
      subtitle: "Un chantier maîtrisé, une piscine pour tous les budgets",
      description: "Chez PiscinePourTous, nous vous accompagnons de A à Z dans la pose de votre piscine en kit. Que vous rêviez d'une piscine enterrée ou semi-enterrée, notre équipe met tout en œuvre pour un chantier maîtrisé, rapide et économique.",
      highlight: "Profitez d'un projet personnalisé adapté à votre terrain, vos envies… et votre budget."
    }
  ];

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
      title: "Piscine avec terrasse bois - Grenoble",
      image: "/lovable-uploads/7c927411-e657-4c40-b14e-76f721b0f9f3.png",
      description: "Installation complète d'une piscine avec terrasse bois intégrée"
    },
    {
      id: 2,
      title: "Piscine moderne avec plage - Chambéry", 
      image: "/lovable-uploads/13b45f99-1927-433e-9ef9-6bba4a96471c.png",
      description: "Réalisation d'une piscine moderne avec plage immergée"
    },
    {
      id: 3,
      title: "Piscine forme libre - Voiron",
      image: "/lovable-uploads/9da0d685-b4f6-4fd8-85ec-5a58e15b006a.png",
      description: "Piscine aux formes organiques parfaitement intégrée"
    },
    {
      id: 4,
      title: "Piscine rectangulaire - Annecy",
      image: "/lovable-uploads/66cfe920-2fc3-4198-ac18-75adffc5deab.png",
      description: "Installation piscine rectangulaire avec margelles en pierre"
    },
    {
      id: 5,
      title: "Piscine design moderne - Aix-les-Bains",
      image: "/lovable-uploads/72d10308-2115-473e-8264-744d72e7d671.png",
      description: "Piscine au design contemporain avec éclairage LED"
    },
    {
      id: 6,
      title: "Piscine avec spa intégré - La Motte-Servolex",
      image: "/lovable-uploads/b1ee128e-b479-4f7f-94e9-7d336e778edd.png",
      description: "Installation complète piscine et spa intégré"
    },
    {
      id: 7,
      title: "Piscine familiale - Saint-Égrève",
      image: "/lovable-uploads/0dbd2342-24e5-4df4-8bcb-27edc6e87335.png",
      description: "Piscine familiale avec escalier roman et plage"
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
                className="h-16 w-auto"
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

      {/* Section Accueil avec Slider - Dégradé bleu/turquoise */}
      <section id="accueil" className="pt-20 pb-16 bg-gradient-to-br from-[#E0F2FE] via-[#F0F9FF] to-[#A0E7E5]/40">
        <div className="container mx-auto px-4 py-16">
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {heroSlides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Contenu textuel */}
                    <div className="text-center lg:text-left space-y-6">
                      <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#004E7C] mb-4">
                          {slide.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-[#00AEEF] font-semibold mb-6">
                          {slide.subtitle}
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <p className="text-lg text-gray-600 leading-relaxed">
                          {slide.description}
                        </p>
                        <p className="text-lg text-[#004E7C] font-medium">
                          {slide.highlight}
                        </p>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
                      <div className="grid md:grid-cols-3 gap-4 pt-6">
                        <div className="flex items-center justify-center lg:justify-start space-x-2 text-[#004E7C]">
                          <MapPin className="h-5 w-5 text-[#00AEEF]" />
                          <span className="font-medium">Zone : Isère / Savoie</span>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start space-x-2 text-[#004E7C]">
                          <CheckCircle className="h-5 w-5 text-[#00AEEF]" />
                          <span className="font-medium">Pose rapide</span>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start space-x-2 text-[#004E7C]">
                          <Shield className="h-5 w-5 text-[#00AEEF]" />
                          <span className="font-medium">Garantie qualité</span>
                        </div>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="relative">
                      <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                        <img 
                          src={slide.image} 
                          alt="Piscine cristalline"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#004E7C]/20 to-transparent"></div>
                      </div>
                      {/* Effet décoratif */}
                      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#00AEEF]/20 rounded-full blur-xl"></div>
                      <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#A0E7E5]/30 rounded-full blur-xl"></div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex" />
          </Carousel>

          {/* Aperçu Services */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <h3 className="col-span-full text-3xl font-bold text-[#004E7C] text-center mb-8">
              Des solutions pour tous les projets
            </h3>
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm border-[#A0E7E5]">
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

      {/* Section À propos - Fond blanc pur */}
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

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
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

            {/* Image ajoutée pour illustrer la section à propos */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/25de7da0-5191-4730-883b-cbec2bd482cd.png" 
                  alt="Piscine rectangulaire moderne avec terrasse verte"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#004E7C]/10 to-transparent"></div>
              </div>
              {/* Effet décoratif */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#00AEEF]/20 rounded-full blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#A0E7E5]/30 rounded-full blur-xl"></div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-center mb-8">
              <h4 className="text-3xl font-bold text-[#004E7C] mb-4">Nos Valeurs</h4>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Les principes qui guident notre travail au quotidien
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {valeurs.map((valeur, index) => (
                <div key={index} className="bg-white rounded-xl p-6 hover:shadow-md transition-all duration-300 border border-gray-100">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-gradient-to-br from-[#00AEEF]/10 to-[#A0E7E5]/20 rounded-full p-4 mb-4">
                      {valeur.icon}
                    </div>
                    <h5 className="text-xl font-semibold text-[#004E7C] mb-3">{valeur.title}</h5>
                    <p className="text-gray-600 leading-relaxed">{valeur.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100 mt-12">
            <div className="text-center mb-8">
              <h4 className="text-3xl font-bold text-[#004E7C] mb-4">Pourquoi nous faire confiance ?</h4>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Notre expertise et notre engagement font la différence sur chaque projet
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {engagements.map((engagement, index) => (
                <div key={index} className="bg-white rounded-xl p-6 hover:shadow-md transition-all duration-300 border border-gray-100">
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

      {/* Section Services - Fond gris/beige marqué */}
      <section id="services" className="py-16 bg-gradient-to-br from-[#F8FAFC] via-[#F1F5F9] to-[#FEF7ED]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#004E7C] mb-6">Nos Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des piscines en kit, un accompagnement sur mesure. Nous ne vous proposons pas seulement une piscine : 
              nous vous accompagnons pour réaliser un projet clair, bien encadré et adapté à votre budget.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="h-full hover:shadow-xl transition-shadow bg-white/90 backdrop-blur-sm">
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

            <Card className="h-full hover:shadow-xl transition-shadow bg-white/90 backdrop-blur-sm">
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

            <Card className="h-full hover:shadow-xl transition-shadow bg-white/90 backdrop-blur-sm">
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

          <div className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-lg border border-white/40">
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

      {/* Section Réalisations - Fond blanc pur */}
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

          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {realisations.map((realisation) => (
                <CarouselItem key={realisation.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow h-full">
                    <div className="aspect-video">
                      <img 
                        src={realisation.image} 
                        alt={realisation.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-[#004E7C]">{realisation.title}</CardTitle>
                      <CardDescription className="text-base">
                        {realisation.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Section Contact - Fond bleu clair marqué */}
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
            <Card className="bg-white/90 backdrop-blur-sm">
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
              <Card className="bg-white/90 backdrop-blur-sm">
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
                      <p className="text-gray-600">Isère & Savoie</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/60 backdrop-blur-sm border-white/40">
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
                  className="h-12 w-auto"
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
                <li>Entretien & rénovation</li>
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
            <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <p>🍪 Ce site utilise des cookies pour améliorer votre expérience de navigation.</p>
              <Button 
                variant="link" 
                onClick={() => {
                  const element = document.createElement('a');
                  element.href = '/mentions-legales';
                  element.click();
                }}
                className="text-[#A0E7E5] hover:text-white underline text-sm p-0 h-auto"
              >
                ⚖️ Mentions légales & Politique de confidentialité
              </Button>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Banner */}
      <CookieBanner />
    </div>
  );
};

export default Index;
