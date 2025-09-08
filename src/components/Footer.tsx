import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-[#004E7C] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/uploads/ea68e63d-bb2b-410f-8209-ed0611a8db57.png" 
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
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Vente et construction de piscines
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Accompagnement à l'auto construction
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Entretien et rénovation
                </button>
              </li>
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
          <p>© 2025 PiscinePourTous - Tous droits réservés</p>
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
  );
};

export default Footer;
