
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cookie, X } from "lucide-react";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà fait un choix
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    console.log('Cookies acceptés');
  };

  const handleRefuse = () => {
    localStorage.setItem('cookieConsent', 'refused');
    setShowBanner(false);
    console.log('Cookies refusés');
  };

  const handleClose = () => {
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="mx-auto max-w-4xl bg-white border border-gray-200 shadow-lg">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <Cookie className="h-6 w-6 text-[#00AEEF] flex-shrink-0 mt-1" />
            
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-[#004E7C] mb-2">
                Gestion des cookies
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Ce site utilise des cookies pour améliorer votre expérience de navigation et analyser le trafic. 
                Les cookies techniques sont nécessaires au fonctionnement du site. Vous pouvez accepter ou refuser 
                les cookies optionnels (analytics, marketing).
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleAccept}
                  className="bg-[#00AEEF] hover:bg-[#004E7C] text-white"
                >
                  Accepter tous les cookies
                </Button>
                <Button
                  onClick={handleRefuse}
                  variant="outline"
                  className="text-[#004E7C] border-[#004E7C] hover:bg-[#004E7C] hover:text-white"
                >
                  Refuser les cookies optionnels
                </Button>
              </div>
              
              <p className="text-xs text-gray-500 mt-3">
                Vous pouvez modifier vos préférences à tout moment en nous contactant.
              </p>
            </div>
            
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600 flex-shrink-0"
              aria-label="Fermer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CookieBanner;
