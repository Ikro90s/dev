import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigation } from "@/contexts/NavigationContext";
import { useLanguage } from "@/contexts/LanguageContext";

export const SectionIndicator = () => {
  const { activeSection, lastChanged } = useNavigation();
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show indicator on section change OR language change
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500); // 1.5s visibility

    return () => clearTimeout(timer);
  }, [activeSection, lastChanged, language]);

  // Map section ID to translated label
  const sectionLabels: Record<string, string> = {
    HOME: "IKRO90S",
    ABOUT: t.nav.about,
    PROJECTS: t.nav.projects,
    TECH: t.skills.title,
    CONTACT: t.nav.contact
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
           key={`${activeSection}-${language}`}
           initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
           animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
           exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="fixed inset-0 z-[200] flex items-center justify-center pointer-events-none"
        >
          <div className="relative">
            {/* Soft Glow Background */}
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
            
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-medium tracking-[0.1em] text-primary/80 font-serif italic select-none relative z-10">
              {sectionLabels[activeSection] || activeSection}
            </h2>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
