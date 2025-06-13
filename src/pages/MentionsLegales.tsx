
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Scale, Shield, Cookie, ExternalLink, Camera, Database } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MentionsLegales = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Retour à l'accueil</span>
            </Button>
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/ea68e63d-bb2b-410f-8209-ed0611a8db57.png" 
                alt="PiscinePourTous Logo" 
                className="h-12 w-auto"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Scale className="h-12 w-12 text-[#00AEEF]" />
            </div>
            <h1 className="text-4xl font-bold text-[#004E7C] mb-4">
              Mentions légales & Politique de confidentialité
            </h1>
            <p className="text-gray-600">
              Informations légales et protection des données personnelles
            </p>
          </div>

          <div className="space-y-8">
            {/* Éditeur du site */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-[#004E7C]">
                  <span className="text-2xl">1.</span>
                  <span>Éditeur du site</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p><strong>Nom de l'entreprise :</strong> PiscinePourTous</p>
                    <p><strong>Forme juridique :</strong> [À compléter]</p>
                    <p><strong>Responsable de la publication :</strong> Jacques Gioello</p>
                  </div>
                  <div>
                    <p><strong>Adresse :</strong> Longechenal</p>
                    <p><strong>Téléphone :</strong> 06.60.16.65.26</p>
                    <p><strong>Email :</strong> contact@piscinepourtous.com</p>
                  </div>
                </div>
                <div className="pt-3 text-sm text-gray-600">
                  <p><strong>Numéro SIRET :</strong> [À compléter]</p>
                  <p><strong>TVA intracommunautaire :</strong> [À compléter]</p>
                </div>
              </CardContent>
            </Card>

            {/* Hébergement */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-[#004E7C]">
                  <span className="text-2xl">2.</span>
                  <span>Hébergement du site</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p><strong>Hébergeur :</strong> [Nom de l'hébergeur – ex. OVH, Wix, IONOS, etc.]</p>
                <p><strong>Adresse :</strong> [Adresse de l'hébergeur]</p>
                <p><strong>Téléphone :</strong> [Numéro de l'hébergeur]</p>
                <p><strong>Site web :</strong> [URL de l'hébergeur]</p>
              </CardContent>
            </Card>

            {/* Propriété intellectuelle */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-[#004E7C]">
                  <span className="text-2xl">3.</span>
                  <span>Propriété intellectuelle</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Le contenu de ce site (textes, images, logo, charte graphique, etc.) est la propriété 
                  exclusive de PiscinePourTous, sauf mention contraire. Toute reproduction, totale ou partielle, 
                  sans autorisation préalable est interdite.
                </p>
              </CardContent>
            </Card>

            {/* RGPD */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-[#004E7C]">
                  <Shield className="h-6 w-6 text-[#00AEEF]" />
                  <span className="text-2xl">4.</span>
                  <span>Protection des données personnelles (RGPD)</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="flex items-center space-x-2 font-semibold text-[#004E7C] mb-3">
                    <Database className="h-5 w-5 text-[#00AEEF]" />
                    <span>Collecte des données</span>
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Les données personnelles recueillies via le formulaire de contact (nom, e-mail, téléphone, 
                    localisation, etc.) sont utilisées uniquement pour vous répondre ou établir un devis. 
                    Elles ne sont jamais vendues ou cédées à des tiers.
                  </p>
                </div>

                <div>
                  <h4 className="flex items-center space-x-2 font-semibold text-[#004E7C] mb-3">
                    <span>🔒</span>
                    <span>Durée de conservation</span>
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Vos données sont conservées pendant une durée maximale de 3 ans à compter du dernier échange, 
                    sauf obligation légale contraire.
                  </p>
                </div>

                <div>
                  <h4 className="flex items-center space-x-2 font-semibold text-[#004E7C] mb-3">
                    <span>📩</span>
                    <span>Droit d'accès, de rectification et de suppression</span>
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    Conformément au RGPD, vous disposez d'un droit d'accès, de modification et de suppression 
                    de vos données personnelles.
                  </p>
                  <p className="text-gray-700">
                    <strong>Pour exercer ce droit, contactez-nous par e-mail à :</strong>{" "}
                    <a href="mailto:contact@piscinepourtous.com" className="text-[#00AEEF] hover:underline">
                      contact@piscinepourtous.com
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-[#004E7C]">
                  <Cookie className="h-6 w-6 text-[#00AEEF]" />
                  <span className="text-2xl">5.</span>
                  <span>Cookies</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ce site peut utiliser des cookies pour :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Mesurer l'audience (ex : Google Analytics)</li>
                  <li>Améliorer votre navigation</li>
                </ul>
                <p className="text-gray-700">
                  Vous pouvez à tout moment modifier vos préférences de cookies via votre navigateur.
                </p>
              </CardContent>
            </Card>

            {/* Liens externes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-[#004E7C]">
                  <ExternalLink className="h-6 w-6 text-[#00AEEF]" />
                  <span className="text-2xl">6.</span>
                  <span>Liens externes</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Le site PiscinePourTous peut contenir des liens vers d'autres sites. Nous ne sommes pas 
                  responsables du contenu ou des pratiques de confidentialité de ces sites.
                </p>
              </CardContent>
            </Card>

            {/* Crédits photos */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-[#004E7C]">
                  <Camera className="h-6 w-6 text-[#00AEEF]" />
                  <span className="text-2xl">7.</span>
                  <span>Crédits photos</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Les photographies, illustrations et visuels présents sur le site PiscinePourTous sont :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>soit la propriété exclusive de l'entreprise PiscinePourTous,</li>
                  <li>soit libres de droits et utilisés conformément à leurs conditions d'utilisation,</li>
                  <li>soit fournis avec l'autorisation expresse de leurs auteurs ou clients.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Toute reproduction, représentation ou diffusion des visuels présents sur ce site sans 
                  autorisation préalable est interdite.
                </p>
                <p className="text-gray-700">
                  <strong>Pour toute question relative à l'utilisation d'un visuel ou pour demander un retrait, 
                  veuillez nous contacter à l'adresse suivante :</strong>{" "}
                  <a href="mailto:contact@piscinepourtous.com" className="text-[#00AEEF] hover:underline">
                    contact@piscinepourtous.com
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>

          <Separator className="my-12" />

          <div className="text-center">
            <Button 
              onClick={() => navigate('/')}
              className="bg-[#00AEEF] hover:bg-[#004E7C] text-white"
            >
              Retour à l'accueil
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;
