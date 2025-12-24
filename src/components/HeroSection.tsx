import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { Typewriter } from "./Typewriter";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

export const HeroSection = () => {
  const { t } = useLanguage();
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-visible py-16 md:py-0 snap-start snap-always scroll-mt-0"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-visible">
        <div className="absolute top-0 left-[-10%] h-[500px] w-[500px] rounded-full bg-[#ad5389] opacity-05 blur-[120px] animate-blob" />
        <div className="absolute bottom-0 right-[-10%] h-[500px] w-[500px] rounded-full bg-[#3c1053] opacity-10 blur-[120px] animate-blob animation-delay-2000" />
      </div>      <div className="container mx-auto px-6 h-full flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-8 w-full max-w-5xl -mt-16 lg:mt-0"> 
          {/* Text Content - Left Side */}
          <motion.div 
            className="flex-1 text-center lg:text-left space-y-6 max-w-xl order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative overflow-visible">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight neon-title tracking-tight title-glow font-serif italic py-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              >
                <Typewriter 
                  text={t.hero.name} 
                  delay={500} 
                  speed={200} 
                  className="text-primary"
                  showCursor={true}
                />
              </motion.h1>
            </div>
            <div className="overflow-visible">
              <motion.div 
                className="text-muted-foreground text-base md:text-lg max-w-md mx-auto lg:mx-0 -mt-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              >
                <div className="flex flex-col items-center lg:items-start gap-2">
                  <Typewriter 
                    text={t.hero.subtitle2} 
                    delay={1000} 
                    speed={50}
                    showCursor={false}
                    className="font-medium text-primary uppercase tracking-[0.4em] text-xs md:text-sm"
                  />
                  <Typewriter 
                    text={t.hero.tagline} 
                    delay={2500} 
                    speed={30} 
                    showCursor={false}
                    className="text-xs md:text-sm italic opacity-40 font-extralight"
                  />
                </div>
              </motion.div>
            </div>
            <motion.div 
              className="flex justify-center lg:justify-start pt-6 overflow-visible"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.5 }}
            >
              <button 
                onClick={scrollToProjects}
                className="neon-btn cursor-none"
              >
                {t.hero.projectsBtn}
              </button>
            </motion.div>
          </motion.div>

          {/* Profile Photo - Right Side & Glowing */}
          <motion.div 
            className="flex-shrink-0 lg:ml-6 order-1 lg:order-2 w-full max-w-md lg:max-w-2xl relative -mt-8 lg:-mt-20 z-10" 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              style={{ y: y1 }}
              animate={{ y: [0, -15, 0] }}
              transition={{ 
                y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
              }}
              className="relative flex justify-center"
            >
              {/* Neon Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-primary/40 blur-[100px] -z-10 rounded-full pointer-events-none" />

              <div className="w-full lg:w-[170%] aspect-[4/5] flex items-center justify-center overflow-visible bg-transparent relative lg:-right-20">
                 <img
                  src="/ikro_raccon.png"
                  alt="Profile"
                  className="w-full h-full object-contain drop-shadow-2xl"
                 />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
