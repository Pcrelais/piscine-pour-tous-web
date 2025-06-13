
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Users, Wrench } from "lucide-react";

const ServicesPreview = () => {
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

  return (
    <section className="py-16 bg-gradient-to-br from-[#E0F2FE] via-[#F0F9FF] to-[#A0E7E5]/40">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
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
    </section>
  );
};

export default ServicesPreview;
