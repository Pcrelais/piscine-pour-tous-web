
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesPreview from "@/components/ServicesPreview";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import RealizationsSection from "@/components/RealizationsSection";
import LatestNews from "@/components/LatestNews";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <ServicesPreview scrollToSection={scrollToSection} />
      <AboutSection />
      <ServicesSection />
      <RealizationsSection />
      <LatestNews />
      <ContactSection />
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
