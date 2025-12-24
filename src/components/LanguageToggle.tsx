import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "pt" : "en");
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center justify-center pt-2"
    >
      <button
        onClick={toggleLanguage}
        className="flex flex-col items-center justify-center gap-0.5 group transition-all duration-300"
        aria-label="Toggle language"
      >
        <Languages className="h-4 w-4 text-primary transition-transform duration-300 group-hover:scale-110" />
        <span className="text-[10px] font-extralight tracking-[0.2em] text-primary/70 group-hover:text-primary transition-colors leading-none">
          {language.toUpperCase()}
        </span>
      </button>
    </motion.div>
  );
};
