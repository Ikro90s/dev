/**
 * Index Page - Portfolio Home
 * 
 * Main portfolio page that composes all sections together.
 * Implements a single-page layout with smooth scrolling navigation.
 * 
 * @page
 */
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsCarousel } from "@/components/ProjectsCarousel";
import { TechStack } from "@/components/TechStack";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsCarousel />
        <TechStack />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
