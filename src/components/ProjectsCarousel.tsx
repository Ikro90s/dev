/**
 * ProjectsCarousel Component
 * 
 * A carousel showcasing portfolio projects with smooth transitions.
 * Uses Embla Carousel for touch-friendly navigation.
 * 
 * @component
 */
import { ExternalLink, Github } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Projeto 1",
    description: "Uma descrição breve sobre este projeto incrível e as tecnologias utilizadas.",
    image: "",
    tags: ["React", "TypeScript", "Tailwind"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "Projeto 2",
    description: "Outro projeto fantástico com funcionalidades modernas e design responsivo.",
    image: "",
    tags: ["Next.js", "Node.js", "MongoDB"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "Projeto 3",
    description: "Um sistema completo desenvolvido com as melhores práticas do mercado.",
    image: "",
    tags: ["Vue.js", "Firebase", "SCSS"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 4,
    title: "Projeto 4",
    description: "Aplicação mobile-first com foco em experiência do usuário.",
    image: "",
    tags: ["React Native", "Expo", "Redux"],
    githubUrl: "#",
    liveUrl: "#",
  },
];

export const ProjectsCarousel = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-foreground/10 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-4">
            Portfólio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meus{" "}
            <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
              Projetos
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes e relevantes
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {projects.map((project) => (
              <CarouselItem key={project.id} className="pl-4 md:basis-1/2 lg:basis-1/2">
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden group hover:border-primary/50 transition-all duration-300 h-full">
                  {/* Project Image Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent-foreground/20 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="text-muted-foreground text-sm">Imagem do Projeto</span>
                  </div>
                  
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-2">
                      {project.githubUrl && (
                        <Button variant="ghost" size="sm" className="gap-2" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                            Código
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button variant="ghost" size="sm" className="gap-2" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 border-primary/30 hover:bg-primary/10" />
          <CarouselNext className="hidden md:flex -right-12 border-primary/30 hover:bg-primary/10" />
        </Carousel>
      </div>
    </section>
  );
};
