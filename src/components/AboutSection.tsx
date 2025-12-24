/**
 * AboutSection Component
 * 
 * Brief about me section with personal information and highlights.
 * 
 * @component
 */
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { User, Briefcase, GraduationCap, MapPin, Calendar, Target, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Premium3DCard } from "@/components/ui/premium-3d-card";

interface InfoItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}

export const AboutSection = () => {
  const { t } = useLanguage();
  
  const infoItems: InfoItem[] = [
    { icon: Briefcase, label: t.about.experience, value: t.about.experienceValue },
    { icon: GraduationCap, label: t.about.education, value: t.about.educationValue },
    { icon: MapPin, label: t.about.location, value: t.about.locationValue },
    { icon: Calendar, label: t.about.availability, value: t.about.availabilityValue },
    { icon: Target, label: t.about.focus, value: t.about.focusValue },
    { icon: Globe, label: t.about.languages, value: t.about.languagesValue },
  ];
  return (
    <section 
      id="about" 
      className="min-h-screen py-24 md:py-24 relative overflow-visible flex items-center justify-center snap-start snap-always scroll-mt-0"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-visible">
        <div className="absolute top-1/4 left-[-20%] h-[600px] w-[600px] rounded-full bg-[#ad5389] opacity-03 blur-[120px] animate-blob" />
        <div className="absolute bottom-1/4 right-[-20%] h-[600px] w-[600px] rounded-full bg-[#3c1053] opacity-06 blur-[120px] animate-blob animation-delay-4000" />
      </div>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}

          {/* Info Cards - Clean and Focused Layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {infoItems.map((item, index) => (
              <motion.div
                key={item.label}
                className="p-5 md:p-6 rounded-2xl bg-white/80 dark:bg-black/60 backdrop-blur-xl border border-white/20 hover:border-primary/30 transition-all duration-500 group overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover="hover"
                variants={{
                  hover: { y: -8, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }
                }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex flex-col gap-3">
                  <motion.div 
                    className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent-foreground/20 w-fit"
                    variants={{
                      hover: { scale: 1.1, rotate: 12 }
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  >
                    <item.icon className="h-5 w-5 text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)]" />
                  </motion.div>
                  <div>
                    <p className="text-xs text-stone-500 uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="font-semibold text-stone-900 dark:text-white group-hover:text-primary transition-colors mt-1">
                      {item.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
