/**
 * Footer Component
 * 
 * Website footer with copyright information and quick links.
 * Features a gradient border and clean minimal design.
 * 
 * @component
 */
import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border">
      {/* Gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <p className="text-xl font-bold bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent mb-2">
              Portfolio
            </p>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Seu Nome. Todos os direitos reservados.
            </p>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Feito com</span>
            <Heart className="h-4 w-4 text-primary fill-primary" />
            <span>usando React & TypeScript</span>
          </div>

          {/* Back to top */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>

        {/* Quick links */}
        <div className="mt-8 pt-8 border-t border-border/50">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {["Início", "Sobre", "Projetos", "Tecnologias", "Contato"].map((link) => (
              <button
                key={link}
                onClick={() => {
                  const href = `#${link.toLowerCase().replace("í", "i").replace("ó", "o")}`;
                  const sectionId = link === "Início" ? "#home" : 
                                   link === "Sobre" ? "#about" :
                                   link === "Projetos" ? "#projects" :
                                   link === "Tecnologias" ? "#tech" : "#contact";
                  document.querySelector(sectionId)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
