import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigation, Section } from "@/contexts/NavigationContext";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { motion, AnimatePresence } from "framer-motion";
export const Header = () => {
  const { activeSection, setActiveSection } = useNavigation();
  const { t } = useLanguage();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px",
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id.toUpperCase() as Section;
          setActiveSection(id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = ["home", "about", "projects", "tech", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [setActiveSection]);
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sectionLabels: Record<string, string> = {
    HOME: "IKRO90S",
    ABOUT: t.nav.about,
    PROJECTS: t.nav.projects,
    TECH: t.skills.title,
    CONTACT: t.nav.contact
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-[100] px-6 md:px-12 py-6 md:py-8"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Logo */}
        <motion.a 
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#home");
          }}
          className="text-xl md:text-2xl font-medium text-primary relative tracking-tight font-serif italic"
          whileHover={{ scale: 1.02 }}
        >
          Ikro90s
        </motion.a>

        {/* Center Display - Active Section */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.span 
              key={`${activeSection}-${t.nav.about}`} // Dependency on activeSection AND translations
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-[10px] md:text-xs font-extralight tracking-[0.6em] text-primary/60 uppercase"
            >
              {sectionLabels[activeSection] || activeSection}
            </motion.span>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-12">
          {/* Controls Symmetry */}
          <div className="flex items-center gap-8 h-12">
            <div className="flex items-center gap-6 h-full">
              <div className="flex items-center justify-center h-full">
                <LanguageToggle />
              </div>
              <div className="w-[1px] h-3 bg-primary/20" />
              <div className="flex items-center justify-center h-full">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};
