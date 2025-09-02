
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Users, Wrench, Shield, ShoppingCart } from "lucide-react";

const ServicesSection =  () => {
  return (
    <section id="services" className="py-16 bg-gradient-to-br from-[#F8FAFC] via-[#F1F5F9] to-[#FEF7ED]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#004E7C] mb-6">Nos Services</h2>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
          <Card className="h-full hover:shadow-xl transition-shadow bg-gradient-to-br from-[#E0F2FE] via-[#F0F9FF] to-[#A0E7E5]/40 backdrop-blur-sm">
            <CardHeader className="text-center">
              <Droplets className="h-12 w-12 text-[#00AEEF] mx-auto mb-4" />
              <CardTitle className="text-2xl text-[#004E7C]">Construction de votre piscine de A à Z</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription className="text-base leading-relaxed">
                Construction de piscines enterrées et semi-enterrées.
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

          <Card className="h-full hover:shadow-xl transition-shadow bg-gradient-to-br from-[#E0F2FE] via-[#F0F9FF] to-[#A0E7E5]/40 backdrop-blur-sm">
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

          <Card className="h-full hover:shadow-xl transition-shadow bg-gradient-to-br from-[#E0F2FE] via-[#F0F9FF] to-[#A0E7E5]/40 backdrop-blur-sm">
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

          <Card className="h-full hover:shadow-xl transition-shadow bg-gradient-to-br from-[#E0F2FE] via-[#F0F9FF] to-[#A0E7E5]/40 backdrop-blur-sm">
            <CardHeader className="text-center">
              <ShoppingCart className="h-12 w-12 text-[#00AEEF] mx-auto mb-4" />
              <CardTitle className="text-2xl text-[#004E7C]">Vente de marchandises liées au monde de la piscine</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription className="text-base leading-relaxed">
                Produits d'entretien, matériel de nettoyage, équipement de confort et de sécurité, …
              </CardDescription>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Produits chimiques pour l'entretien</li>
                <li>• Matériel de nettoyage et accessoires</li>
                <li>• Équipements de confort et de sécurité</li>
              </ul>
              <p className="text-sm text-[#004E7C] font-medium">
                Tout ce dont vous avez besoin pour profiter pleinement de votre piscine.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center p-8 bg-gradient-to-br from-[#E0F2FE] via-[#F0F9FF] to-[#A0E7E5]/40 backdrop-blur-sm rounded-lg border border-white/40">
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
  );
};

export default ServicesSection;
