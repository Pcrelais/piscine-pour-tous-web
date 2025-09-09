import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header scrollToSection={scrollToSection} />
      
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 text-[#004E7C]">404</h1>
          <p className="text-2xl text-gray-600 mb-8">Oops! Page introuvable</p>
          <p className="text-gray-500 mb-8">La page que vous recherchez n'existe pas ou a été déplacée.</p>
          <Button 
            onClick={() => navigate('/')}
            className="bg-[#00AEEF] hover:bg-[#004E7C] text-white px-8 py-3"
          >
            Retour à l'accueil
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
