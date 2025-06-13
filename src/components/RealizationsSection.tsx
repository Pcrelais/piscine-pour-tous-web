
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const RealizationsSection = () => {
  const realisations = [
    {
      id: 1,
      title: "Piscine avec terrasse bois - Grenoble",
      image: "/uploads/7c927411-e657-4c40-b14e-76f721b0f9f3.png",
      description: "Installation complète d'une piscine avec terrasse bois intégrée"
    },
    {
      id: 2,
      title: "Piscine moderne avec plage - Chambéry", 
      image: "/uploads/13b45f99-1927-433e-9ef9-6bba4a96471c.png",
      description: "Réalisation d'une piscine moderne avec plage immergée"
    },
    {
      id: 3,
      title: "Piscine forme libre - Voiron",
      image: "/uploads/9da0d685-b4f6-4fd8-85ec-5a58e15b006a.png",
      description: "Piscine aux formes organiques parfaitement intégrée"
    },
    {
      id: 4,
      title: "Piscine rectangulaire - Annecy",
      image: "/uploads/66cfe920-2fc3-4198-ac18-75adffc5deab.png",
      description: "Installation piscine rectangulaire avec margelles en pierre"
    },
    {
      id: 5,
      title: "Piscine design moderne - Aix-les-Bains",
      image: "/uploads/72d10308-2115-473e-8264-744d72e7d671.png",
      description: "Piscine au design contemporain avec éclairage LED"
    },
    {
      id: 6,
      title: "Piscine avec spa intégré - La Motte-Servolex",
      image: "/uploads/b1ee128e-b479-4f7f-94e9-7d336e778edd.png",
      description: "Installation complète piscine et spa intégré"
    },
    {
      id: 7,
      title: "Piscine familiale - Saint-Égrève",
      image: "/uploads/0dbd2342-24e5-4df4-8bcb-27edc6e87335.png",
      description: "Piscine familiale avec escalier roman et plage"
    }
  ];

  return (
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
  );
};

export default RealizationsSection;
