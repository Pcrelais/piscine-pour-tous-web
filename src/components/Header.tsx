

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white border-b border-gray-200 z-50 shadow-sm">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex justify-between items-center lg:justify-between">
          {/* Menu Mobile - Gauche sur mobile uniquement */}
          <button 
            className="lg:hidden text-[#004E7C] p-2 flex-shrink-0 hover:bg-gray-50 rounded-md transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo - Centré sur mobile, à gauche sur desktop */}
          <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0 lg:order-none absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none">
            <img 
              src="/uploads/ea68e63d-bb2b-410f-8209-ed0611a8db57.png" 
              alt="PiscinePourTous Logo" 
              className="h-14 sm:h-16 lg:h-16 w-auto"
            />
          </div>
          
          {/* Navigation Desktop */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            <button onClick={() => scrollToSection('accueil')} className="text-[#004E7C] hover:text-[#00AEEF] transition-colors font-medium text-sm xl:text-base">
              Accueil
            </button>
            <button onClick={() => scrollToSection('apropos')} className="text-[#004E7C] hover:text-[#00AEEF] transition-colors font-medium text-sm xl:text-base">
              À propos
            </button>
            <button onClick={() => scrollToSection('services')} className="text-[#004E7C] hover:text-[#00AEEF] transition-colors font-medium text-sm xl:text-base">
              Services
            </button>
            <button onClick={() => scrollToSection('realisations')} className="text-[#004E7C] hover:text-[#00AEEF] transition-colors font-medium text-sm xl:text-base">
              Réalisations
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-[#004E7C] hover:text-[#00AEEF] transition-colors font-medium text-sm xl:text-base">
              Contact
            </button>
          </nav>

          <Button 
            onClick={() => scrollToSection('contact')} 
            className="hidden lg:block bg-[#00AEEF] hover:bg-[#004E7C] text-white text-sm xl:text-base px-4 xl:px-6 py-2"
          >
            <span className="hidden xl:inline">Demander un devis gratuit</span>
            <span className="xl:hidden">Devis gratuit</span>
          </Button>

          {/* Espace invisible pour équilibrer sur mobile */}
          <div className="lg:hidden w-10 flex-shrink-0"></div>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="container mx-auto px-3 sm:px-4 py-4 space-y-3">
            <button 
              onClick={() => handleMenuClick('accueil')} 
              className="block w-full text-left py-3 px-2 text-[#004E7C] hover:text-[#00AEEF] hover:bg-gray-50 font-medium rounded-md transition-colors"
            >
              Accueil
            </button>
            <button 
              onClick={() => handleMenuClick('apropos')} 
              className="block w-full text-left py-3 px-2 text-[#004E7C] hover:text-[#00AEEF] hover:bg-gray-50 font-medium rounded-md transition-colors"
            >
              À propos
            </button>
            <button 
              onClick={() => handleMenuClick('services')} 
              className="block w-full text-left py-3 px-2 text-[#004E7C] hover:text-[#00AEEF] hover:bg-gray-50 font-medium rounded-md transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => handleMenuClick('realisations')} 
              className="block w-full text-left py-3 px-2 text-[#004E7C] hover:text-[#00AEEF] hover:bg-gray-50 font-medium rounded-md transition-colors"
            >
              Réalisations
            </button>
            <button 
              onClick={() => handleMenuClick('contact')} 
              className="block w-full text-left py-3 px-2 text-[#004E7C] hover:text-[#00AEEF] hover:bg-gray-50 font-medium rounded-md transition-colors"
            >
              Contact
            </button>
            <div className="pt-2 px-2">
              <Button 
                onClick={() => handleMenuClick('contact')} 
                className="w-full bg-[#00AEEF] hover:bg-[#004E7C] text-white py-3"
              >
                Demander un devis gratuit
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

