import { motion } from "framer-motion";
import React from "react";
import { 
  Palette,
  Lightbulb,
  Square,
  Cpu,
  Target,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

interface Skill {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  brandColor: string;
  hoverRotate: string;
}

const professionalSkills: Skill[] = [
  { id: "design", icon: Palette, brandColor: "168, 85, 247", hoverRotate: "hover:rotate-3" },
  { id: "brainstorm", icon: Lightbulb, brandColor: "168, 85, 247", hoverRotate: "hover:rotate-6" },
  { id: "minimalism", icon: Square, brandColor: "168, 85, 247", hoverRotate: "hover:-rotate-3" },
  { id: "logic", icon: Cpu, brandColor: "168, 85, 247", hoverRotate: "hover:-rotate-6" },
  { id: "strategy", icon: Target, brandColor: "168, 85, 247", hoverRotate: "hover:rotate-1" },
  { id: "impact", icon: Zap, brandColor: "168, 85, 247", hoverRotate: "hover:-rotate-1" },
];

const SkillItem = React.memo(({ skill, index, t }: { skill: Skill; index: number; t: any }) => (
  <motion.div
    className="flex justify-center"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
  >
    <button
      className={cn(
        "p-6 rounded-[1.5rem] backdrop-blur-xl border bg-white/80 dark:bg-black/60 border-stone-200 dark:border-white/20 hover:bg-black/5 dark:hover:bg-black/70 shadow-xl hover:scale-105 active:scale-95 transition-all duration-500 ease-out cursor-none group relative overflow-hidden w-32 h-32 md:w-40 md:h-40 flex items-center justify-center",
        skill.hoverRotate
      )}
      data-magnetic
    >
      {/* Shimmer Effect */}
      <div
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out opacity-10"
        style={{ 
          background: `linear-gradient(90deg, transparent, rgba(${skill.brandColor}, 0.5), transparent)` 
        }}
      />
      
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="transition-all duration-500 group-hover:scale-110">
          <span 
            style={{ 
              color: `rgb(${skill.brandColor})`,
              filter: `drop-shadow(0 0 8px rgba(${skill.brandColor}, 0.2))`
            }}
          >
            <skill.icon className="w-8 h-8 md:w-10 md:h-10 transition-all duration-500 text-stone-700 dark:text-inherit" />
          </span>
        </div>
        
        {/* Animated Label */}
        <div className="h-6 overflow-hidden relative w-full flex items-center justify-center">
          <motion.span
            key={`${skill.id}-${t.skills[skill.id as keyof typeof t.skills]}`}
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 0.9 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.16, 1, 0.3, 1],
              delay: index * 0.1 + 0.5
            }}
            className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-stone-900 dark:text-white/80 whitespace-nowrap leading-none"
          >
            {t.skills[skill.id as keyof typeof t.skills]}
          </motion.span>
        </div>
      </div>
    </button>
  </motion.div>
));

SkillItem.displayName = "SkillItem";

export const TechStack = () => {
  const { t } = useLanguage();
  return (
    <section 
      id="tech" 
      className="min-h-screen py-24 md:py-24 relative overflow-visible flex flex-col items-center justify-center snap-start snap-always scroll-mt-0"
    >
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-visible pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#ad5389] opacity-05 blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[#3c1053] opacity-10 blur-[120px] animate-blob" />
      </div>
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 max-w-2xl mx-auto">
          {professionalSkills.map((skill, index) => (
            <SkillItem key={skill.id} skill={skill} index={index} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};
