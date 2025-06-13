
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
            <button onClick={() => handleMenuClick('accueil')} className="block text-[#004E7C] hover:text-[#00AEEF]">
              Accueil
            </button>
            <button onClick={() => handleMenuClick('apropos')} className="block text-[#004E7C] hover:text-[#00AEEF]">
              À propos
            </button>
            <button onClick={() => handleMenuClick('services')} className="block text-[#004E7C] hover:text-[#00AEEF]">
              Services
            </button>
            <button onClick={() => handleMenuClick('realisations')} className="block text-[#004E7C] hover:text-[#00AEEF]">
              Réalisations
            </button>
            <button onClick={() => handleMenuClick('contact')} className="block text-[#004E7C] hover:text-[#00AEEF]">
              Contact
            </button>
            <Button onClick={() => handleMenuClick('contact')} className="w-full bg-[#00AEEF] hover:bg-[#004E7C] text-white">
              Demander un devis gratuit
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
