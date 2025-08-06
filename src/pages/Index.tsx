import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProgramsSection from "@/components/ProgramsSection";
import AboutSection from "@/components/AboutSection";
import NewsSection from "@/components/NewsSection";
import StatsSection from "@/components/StatsSection";
import CalendarSection from "@/components/CalendarSection";
import AlumniSection from "@/components/AlumniSection";
import AdmissionSection from "@/components/AdmissionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ProgramsSection />
      <AboutSection />
      <NewsSection />
      <StatsSection />
      <CalendarSection />
      <AlumniSection />
      <AdmissionSection />
      <Footer />
    </div>
  );
};

export default Index;
