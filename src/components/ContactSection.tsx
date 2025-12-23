/**
 * ContactSection Component
 * 
 * Contact information and social media links section.
 * Features a clean layout with gradient accents.
 * 
 * @component
 */
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}

const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com", icon: Github },
  { name: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
  { name: "Twitter", url: "https://twitter.com", icon: Twitter },
  { name: "Instagram", url: "https://instagram.com", icon: Instagram },
];

const contactInfo: ContactInfo[] = [
  { icon: Mail, label: "Email", value: "seu@email.com", href: "mailto:seu@email.com" },
  { icon: Phone, label: "Telefone", value: "+55 (00) 00000-0000", href: "tel:+5500000000000" },
  { icon: MapPin, label: "Localização", value: "Sua Cidade, Brasil" },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-foreground/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-4">
            Contato
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos{" "}
            <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
              Conversar
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estou disponível para novos projetos e oportunidades. Entre em contato!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold">Informações de Contato</h3>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent-foreground/20">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a 
                        href={info.href} 
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold">Redes Sociais</h3>
            <p className="text-muted-foreground">
              Me siga nas redes sociais para acompanhar meus trabalhos e novidades.
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="outline"
                  size="lg"
                  className="gap-3 border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  asChild
                >
                  <a href={social.url} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-5 w-5" />
                    {social.name}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
