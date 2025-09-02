import { CheckCircle, Award, UserCheck, Settings } from "lucide-react";

const AboutSection = () => {
  const valeurs = [
    {
      icon: <CheckCircle className="h-6 w-6 text-[#00AEEF]" />,
      title: "Accessibilité",
      description: "Des solutions pour tous les budgets, sans sacrifier la qualité"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-[#00AEEF]" />,
      title: "Simplicité",
      description: "Un accompagnement clair à chaque étape, même si vous débutez"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-[#00AEEF]" />,
      title: "Maîtrise",
      description: "Des équipes rigoureuses, un chantier bien encadré"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-[#00AEEF]" />,
      title: "Proximité",
      description: "Un service de proximité, à l'écoute de vos attentes"
    }
  ];

  const engagements = [
    {
      icon: <Award className="h-8 w-8 text-[#00AEEF]" />,
      title: "Expertise terrain",
      description: "Chaque projet est unique, nous adaptons la pose à votre environnement"
    },
    {
      icon: <UserCheck className="h-8 w-8 text-[#00AEEF]" />,
      title: "Conseils personnalisés",
      description: "Pose complète ou accompagnement, nous sommes là pour vous guider"
    },
    {
      icon: <Settings className="h-8 w-8 text-[#00AEEF]" />,
      title: "Satisfaction client",
      description: "Notre meilleure publicité, ce sont les retours positifs de nos clients"
    }
  ];

  return (
    <section id="apropos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-[#004E7C] mb-6">À propos de PiscinePourTous</h2>
          <p className="text-xl text-[#00AEEF] font-semibold mb-6">
            Une passion pour la piscine, un engagement pour vos projets
          </p>
          <p className="text-gray-600 leading-relaxed">
            Chez PiscinePourTous, nous mettons notre savoir-faire au service de tous les projets de construction de piscine, 
            du petit bassin citadin à la grande piscine familiale, toujours avec la même exigence de qualité. 
            C'est cette conviction qui nous pousse chaque jour à proposer des solutions accessibles, fiables et esthétiques 
            pour tous vos projets de piscines.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-[#004E7C] mb-6">Qui sommes-nous ?</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Nous sommes une entreprise spécialisée dans la construction de piscines, conçue pour offrir 
              à nos clients un accompagnement professionnel. Grâce à notre expérience terrain 
              et notre exigence technique, nous assurons un chantier bien maîtrisé, de la conception à la mise en eau.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Qu'il s'agisse d'un chantier compact en milieu urbain ou d'une grande installation sur terrain vaste, 
              notre objectif reste le même : vous livrer une piscine qui vous ressemble, sans mauvaise surprise.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/uploads/25de7da0-5191-4730-883b-cbec2bd482cd.png" 
                alt="Piscine rectangulaire moderne avec terrasse verte"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#004E7C]/10 to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#00AEEF]/20 rounded-full blur-xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#A0E7E5]/30 rounded-full blur-xl"></div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#E0F2FE] via-[#F0F9FF] to-[#A0E7E5]/40 rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="text-center mb-8">
            <h4 className="text-3xl font-bold text-[#004E7C] mb-4">Nos Valeurs</h4>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident notre travail au quotidien
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valeurs.map((valeur, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl p-6 hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-br from-[#00AEEF]/10 to-[#A0E7E5]/20 rounded-full p-4 mb-4">
                    {valeur.icon}
                  </div>
                  <h5 className="text-xl font-semibold text-[#004E7C] mb-3">{valeur.title}</h5>
                  <p className="text-gray-600 leading-relaxed">{valeur.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#E0F2FE] via-[#F0F9FF] to-[#A0E7E5]/40 rounded-2xl p-8 shadow-lg border border-gray-100 mt-12">
          <div className="text-center mb-8">
            <h4 className="text-3xl font-bold text-[#004E7C] mb-4">Pourquoi nous faire confiance ?</h4>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Notre expertise et notre engagement font la différence sur chaque projet
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {engagements.map((engagement, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl p-6 hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-br from-[#00AEEF]/10 to-[#A0E7E5]/20 rounded-full p-4 mb-4">
                    {engagement.icon}
                  </div>
                  <h5 className="text-xl font-semibold text-[#004E7C] mb-3">{engagement.title}</h5>
                  <p className="text-gray-600 leading-relaxed">{engagement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
