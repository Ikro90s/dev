import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 right-8 z-50 transform-gpu perspective-1000"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileHover={{ 
            y: -5, 
            rotateX: 10,
            scale: 1.1,
            rotateZ: -5
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="h-14 w-14 rounded-full bg-gradient-to-r from-primary to-accent-foreground shadow-[0_10px_30px_-10px_rgba(var(--primary),0.5)] border-0 hover:shadow-[0_20px_40px_-10px_rgba(var(--primary),0.8)] transition-all duration-300"
          >
            <ArrowUp className="h-6 w-6 text-primary-foreground" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
