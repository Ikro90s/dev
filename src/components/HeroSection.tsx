/**
 * HeroSection Component
 * 
 * Main hero section with introduction text and profile photo placeholder.
 * Features gradient background effects and smooth animations.
 * 
 * @component
 */
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Gradient Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-foreground/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-accent-foreground/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <p className="text-primary font-medium text-sm tracking-wider uppercase">
              Bem-vindo ao meu portfólio
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Olá, eu sou{" "}
              <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
                Seu Nome
              </span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
              Desenvolvedor apaixonado por criar experiências digitais incríveis 
              e transformar ideias em código elegante e funcional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button 
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-primary to-accent-foreground hover:opacity-90 transition-opacity text-primary-foreground px-8 py-6"
              >
                Ver Projetos
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                className="border-primary/30 hover:bg-primary/10 px-8 py-6"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Entre em Contato
              </Button>
            </div>
          </div>

          {/* Profile Photo Placeholder */}
          <div className="flex-shrink-0">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent-foreground rounded-full blur-lg opacity-50 animate-pulse" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent-foreground/20 border-2 border-primary/30 flex items-center justify-center overflow-hidden">
                {/* Replace this div with an img tag containing your photo */}
                <div className="text-center p-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-3xl">👤</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Sua foto aqui
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
