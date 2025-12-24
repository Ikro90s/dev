import React, { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { TranslationKey } from "@/i18n/translations";
import { ExternalLink, Github, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  caseStudy: {
    problem: string;
    solution: string;
    choice: string;
  };
}

const ProjectCard = React.memo(({ project, isSelected, t }: { project: Project; isSelected: boolean; t: TranslationKey }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div 
      className="p-2 h-full"
      animate={{ 
        opacity: isSelected ? 1 : 0.4,
        scale: isSelected ? 1 : 0.9,
        z: isSelected ? 0 : -100
      }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="h-full perspective-1000"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
      >
        <Card className="h-full bg-white/80 dark:bg-stone-900/50 backdrop-blur-xl border-white/20 dark:border-white/5 overflow-hidden flex flex-col group/card shadow-2xl transition-colors duration-500 hover:border-primary/20">
          <div className="relative h-48 md:h-64 overflow-hidden">
            <motion.img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700"
              animate={{ scale: isExpanded ? 1.1 : 1 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <div className="w-fit px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-xl border border-white/20 shadow-lg">
                <h3 className="text-xl md:text-2xl font-serif italic font-medium text-stone-900 tracking-tight leading-none">
                  {project.title}
                </h3>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-[10px] uppercase tracking-widest text-stone-100 hover:text-white bg-stone-900/30 backdrop-blur-sm"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? "Close" : "Case Study"}
              </Button>
            </div>
          </div>
      
          <CardContent className="p-6 flex flex-col flex-grow gap-4 relative">
            <AnimatePresence mode="wait">
              {!isExpanded ? (
                <motion.div
                  key="description"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col h-full"
                >
                  <p className="text-stone-600 dark:text-stone-300 font-light text-sm line-clamp-3 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-stone-100 dark:bg-white/10 text-stone-500 dark:text-white/60 border-stone-200 dark:border-white/10 font-mono text-[9px] uppercase tracking-tighter">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="casestudy"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-primary font-bold">Problem</span>
                    <p className="text-sm font-light text-stone-800 dark:text-white/80 leading-snug">{project.caseStudy.problem}</p>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-primary font-bold">Solution</span>
                    <p className="text-sm font-light text-stone-800 dark:text-white/80 leading-snug">{project.caseStudy.solution}</p>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-primary font-bold">Technical Choice</span>
                    <p className="text-sm font-light text-stone-800 dark:text-white/80 leading-snug">{project.caseStudy.choice}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
        
            <div className="flex gap-4 pt-4 mt-auto border-t border-stone-200/50">
              <Button className="flex-1 gap-2 bg-stone-900 text-stone-50 hover:bg-stone-800 rounded-none text-xs uppercase tracking-widest font-medium h-9" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3 w-3" />
                  {t.buttons.liveDemo}
                </a>
              </Button>
              <Button variant="outline" className="flex-1 gap-2 border-stone-200 hover:bg-stone-50 rounded-none text-xs uppercase tracking-widest font-medium h-9 text-stone-600" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-3 w-3" />
                  {t.buttons.code}
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
});

ProjectCard.displayName = "ProjectCard";

export const ProjectsCarousel = () => {
  const { t } = useLanguage();
  
  const projects: Project[] = [
    {
      id: 1,
      title: t.projectsData.webgame.title,
      description: t.projectsData.webgame.description,
      image: "/webgame.png",
      tags: ["Logic", "Interaction", "2D"],
      liveUrl: "https://ikro-dev.vercel.app/",
      githubUrl: "https://vercel.com/ikros-projects/ikro-dev/4oEnBnUmBYz8wREqQ5uG9fBS3jrV/source",
      caseStudy: t.projectsData.webgame.caseStudy
    },
    {
      id: 2,
      title: t.projectsData.shortly.title,
      description: t.projectsData.shortly.description,
      image: "/encurta.png",
      tags: ["Design", "Layout", "Objective"],
      liveUrl: "https://shortly-web-site.vercel.app/",
      githubUrl: "https://vercel.com/ikros-projects/shortly-web-site/ALJSsPers6Jdcpkxq8Wy1Rw6fJg6/source",
      caseStudy: t.projectsData.shortly.caseStudy
    },
    {
      id: 3,
      title: t.projectsData.webcloud.title,
      description: t.projectsData.webcloud.description,
      image: "/cloud.png",
      tags: ["UI Design", "Aesthetics", "Organization"],
      liveUrl: "https://bookmark-website-teal.vercel.app/",
      githubUrl: "https://vercel.com/ikros-projects/bookmark-website/7NmZMCFB9coBYmMuxadadq4zcZgr/source",
      caseStudy: t.projectsData.webcloud.caseStudy
    }
  ];
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 10000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section 
      id="projects" 
      className="min-h-screen py-24 md:py-24 relative overflow-visible flex flex-col items-center justify-center snap-start snap-always scroll-mt-0 md:scroll-mt-20" 
    >
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-visible">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-foreground/5 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-6 h-full flex flex-col justify-center">
        <div className="relative max-w-5xl mx-auto w-full group">
          <div className="overflow-visible" ref={emblaRef}>
            <div className="flex touch-pan-y -ml-4">
              {projects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="pl-4 min-w-0 flex-[0_0_100%] md:flex-[0_0_70%] lg:flex-[0_0_60%]"
                >
                  <ProjectCard 
                    project={project} 
                    isSelected={index === selectedIndex}
                    t={t}
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="hidden md:block absolute top-[40%] -left-12 -right-12 justify-between pointer-events-none">
             <Button
                variant="outline"
                size="icon"
                className="absolute left-0 pointer-events-auto rounded-full h-12 w-12 border-primary/20 hover:bg-primary/10 hover:text-primary"
                onClick={scrollPrev}
              >
                <ArrowLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-0 pointer-events-auto rounded-full h-12 w-12 border-primary/20 hover:bg-primary/10 hover:text-primary"
                onClick={scrollNext}
              >
                <ArrowRight className="h-6 w-6" />
              </Button>
          </div>
        </div>
        
         <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex ? "w-8 bg-primary" : "w-2 bg-primary/20"
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
      </div>
    </section>
  );
};
