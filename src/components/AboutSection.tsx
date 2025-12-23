/**
 * AboutSection Component
 * 
 * Brief about me section with personal information and highlights.
 * 
 * @component
 */
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";

interface InfoItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}

const infoItems: InfoItem[] = [
  { icon: Briefcase, label: "Experiência", value: "X+ anos" },
  { icon: GraduationCap, label: "Formação", value: "Sua Formação" },
  { icon: MapPin, label: "Localização", value: "Sua Cidade" },
  { icon: Calendar, label: "Disponibilidade", value: "Freelance" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium text-sm tracking-wider uppercase mb-4">
              Sobre Mim
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Conheça um pouco{" "}
              <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
                da minha história
              </span>
            </h2>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Sou um desenvolvedor apaixonado por tecnologia e inovação. Minha jornada 
                na programação começou há alguns anos e desde então venho me dedicando 
                a criar soluções digitais elegantes e eficientes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Acredito que um bom código vai além da funcionalidade — ele deve ser 
                limpo, escalável e fácil de manter. Busco sempre aplicar as melhores 
                práticas de desenvolvimento em todos os meus projetos.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Quando não estou codando, gosto de aprender novas tecnologias, 
                contribuir para projetos open source e compartilhar conhecimento 
                com a comunidade.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              {infoItems.map((item) => (
                <div
                  key={item.label}
                  className="p-5 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="flex flex-col gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent-foreground/20 w-fit">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="font-semibold group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
