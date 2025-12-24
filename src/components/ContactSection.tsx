import { Github, Instagram, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
  action: string;
  tailwindColor: string;
  brandColor: string;
}

export const ContactSection = () => {
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll();
  
  // Parallax offsets for a "weighted" feel
  const yParallax = useTransform(scrollYProgress, [0.7, 1], [50, 0]);
  const opacityParallax = useTransform(scrollYProgress, [0.8, 1], [0.6, 1]);
  const scaleParallax = useTransform(scrollYProgress, [0.8, 1], [0.95, 1]);

  const contactInfo: ContactInfo[] = [
    { 
      icon: MessageCircle, 
      label: "WhatsApp", 
      value: "+55 (95) 98419-1207", 
      href: "https://wa.me/5595984191207", 
      action: t.contact.chat,
      tailwindColor: "green",
      brandColor: "37, 211, 102"
    },
    { 
      icon: Github, 
      label: "GitHub", 
      value: "github.com/Ikro90s", 
      href: "https://github.com/Ikro90s", 
      action: t.contact.follow,
      tailwindColor: "slate",
      brandColor: "0, 0, 0"
    },
    { 
      icon: Instagram, 
      label: "Instagram", 
      value: "@ikro90s_eng", 
      href: "https://www.instagram.com/ikro90s_eng", 
      action: t.contact.follow,
      tailwindColor: "pink",
      brandColor: "225, 48, 108"
    },
    { 
      icon: Send, 
      label: "Telegram", 
      value: "+55 (95) 98419-1207", 
      href: "https://t.me/+5595984191207", 
      action: t.contact.message,
      tailwindColor: "blue",
      brandColor: "0, 136, 204"
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-24 md:py-16 relative overflow-visible flex flex-col items-center justify-center snap-start snap-always scroll-mt-0">
      {/* Background decoration with parallax */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0.7, 1], [0, -100]) }}
        className="absolute top-0 left-0 w-full h-full -z-10 overflow-visible pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#ad5389] opacity-05 blur-[130px] animate-blob" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#3c1053] opacity-10 blur-[120px] animate-blob animation-delay-5000" />
      </motion.div>

      <div className="container mx-auto px-6">
        <motion.div 
          style={{ y: yParallax, opacity: opacityParallax, scale: scaleParallax }}
          className="max-w-4xl mx-auto flex flex-col justify-center"
        >
          {/* Ultra-Minimalist Quadrant Cards Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-5 max-w-[280px] md:max-w-md mx-auto w-full">
            {contactInfo.map((item, index) => {
              const borderRadius = 
                index === 0 ? "rounded-[60px_8px_8px_8px] md:rounded-[80px_12px_12px_12px]" :
                index === 1 ? "rounded-[8px_60px_8px_8px] md:rounded-[12px_80px_12px_12px]" :
                index === 2 ? "rounded-[8px_8px_8px_60px] md:rounded-[12px_12px_12px_80px]" :
                "rounded-[8px_8px_60px_8px] md:rounded-[12px_12px_80px_12px]";

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="flex justify-center"
                >
                  <a 
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "p-6 md:p-8 backdrop-blur-xl border bg-white/80 dark:bg-stone-900/50 border-white/20 dark:border-white/5 hover:border-primary/30 shadow-2xl transition-all duration-500 ease-out cursor-none group relative overflow-hidden w-full aspect-square flex flex-col items-center justify-center gap-2",
                      borderRadius
                    )}
                    data-magnetic
                  >
                    {/* Shimmer Effect */}
                    <div
                      className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out opacity-40"
                      style={{ 
                        background: `linear-gradient(90deg, transparent, rgba(${item.brandColor}, 0.1), transparent)` 
                      }}
                    />
                    
                    <div className="relative z-10 transition-all duration-500 group-hover:scale-125">
                      <span 
                        style={item.label === "GitHub" ? {} : { 
                          color: `rgb(${item.brandColor})`,
                          filter: `drop-shadow(0 0 15px rgba(${item.brandColor}, 0.3))`
                        }}
                        className={cn(item.label === "GitHub" && "text-black dark:text-white")}
                      >
                        <item.icon className="w-8 h-8 md:w-10 md:h-10" />
                      </span>
                    </div>
                  </a>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
