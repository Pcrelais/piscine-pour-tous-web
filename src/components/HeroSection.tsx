
import { Button } from "@/components/ui/button";
import { MapPin, CheckCircle, Shield, ChevronDown } from "lucide-react";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section 
      id="accueil" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat pt-20 sm:pt-24 overflow-hidden w-full"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 78, 124, 0.8), rgba(0, 174, 239, 0.7)), url('/lovable-uploads/fd7c6e41-e86b-4c2f-84cf-aaadc2ffd40a.png')`
      }}
    >
      <div className="container mx-auto px-3 sm:px-4 text-center text-white relative z-10 w-full">
        <div className="max-w-5xl mx-auto w-full">
          {/* Titre principal */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            Votre piscine, notre métier
          </h1>
          
          {/* Sous-titre */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-6 sm:mb-8 text-[#A0E7E5]">
            Un chantier maîtrisé, une piscine pour tous les budgets
          </p>
          
          {/* Description */}
          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10 w-full">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto px-2">
              Chez PiscinePourTous, nous vous accompagnons de A à Z dans la pose de votre piscine en kit. 
              Que vous rêviez d'une piscine enterrée ou semi-enterrée, notre équipe met tout en œuvre 
              pour un chantier maîtrisé, rapide et économique.
            </p>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-[#A0E7E5] max-w-3xl mx-auto px-2">
              Profitez d'un projet personnalisé adapté à votre terrain, vos envies… et votre budget.
            </p>
          </div>
          
          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center mb-10 sm:mb-12 lg:mb-16 w-full px-2">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('contact')}
              className="bg-[#00AEEF] hover:bg-white hover:text-[#004E7C] text-white text-base sm:text-lg lg:text-xl px-4 sm:px-6 lg:px-10 py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              Demander un devis gratuit
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('realisations')}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#004E7C] text-base sm:text-lg lg:text-xl px-4 sm:px-6 lg:px-10 py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              Voir nos réalisations
            </Button>
          </div>

          {/* Zone d'intervention et garanties */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-3xl mx-auto w-full px-2">
            <div className="flex items-center justify-center space-x-2 sm:space-x-3">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-[#A0E7E5] flex-shrink-0" />
              <span className="font-medium text-sm sm:text-base lg:text-lg">Zone : Isère / Savoie</span>
            </div>
            <div className="flex items-center justify-center space-x-2 sm:space-x-3">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-[#A0E7E5] flex-shrink-0" />
              <span className="font-medium text-sm sm:text-base lg:text-lg">Pose rapide</span>
            </div>
            <div className="flex items-center justify-center space-x-2 sm:space-x-3">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-[#A0E7E5] flex-shrink-0" />
              <span className="font-medium text-sm sm:text-base lg:text-lg">Garantie qualité</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-white animate-bounce cursor-pointer" 
                     onClick={() => scrollToSection('apropos')} />
      </div>
    </section>
  );
};

export default HeroSection;
