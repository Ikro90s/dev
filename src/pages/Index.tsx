import { Suspense, lazy } from "react";
import { Header } from "@/components/Header";
import { ParallaxBackground } from "@/components/ParallaxBackground";
import { BackToTop } from "@/components/BackToTop";
import { ThemeProvider } from "next-themes";

// Lazy load heavy sections
const HeroSection = lazy(() => import("@/components/HeroSection").then(m => ({ default: m.HeroSection })));
const AboutSection = lazy(() => import("@/components/AboutSection").then(m => ({ default: m.AboutSection })));
const ProjectsCarousel = lazy(() => import("@/components/ProjectsCarousel").then(m => ({ default: m.ProjectsCarousel })));
const TechStack = lazy(() => import("@/components/TechStack").then(m => ({ default: m.TechStack })));
const ContactSection = lazy(() => import("@/components/ContactSection").then(m => ({ default: m.ContactSection })));

const Index = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <div className="h-screen w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth relative">
        <ParallaxBackground />
        <Header />
        <main className="w-full relative">
          <Suspense fallback={<div className="min-h-screen" />}>
            <div className="relative z-[50]">
              <HeroSection />
            </div>
            <div className="relative z-[40]">
              <AboutSection />
            </div>
            <div className="relative z-[30]">
              <ProjectsCarousel />
            </div>
            <div className="relative z-[20]">
              <TechStack />
            </div>
            <div className="relative z-[10]">
              <ContactSection />
            </div>
          </Suspense>
        </main>
        <BackToTop />
      </div>
    </ThemeProvider>
  );
};

export default Index;
