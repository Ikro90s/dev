/**
 * Header Component
 * 
 * Responsive navigation header with mobile sidebar support.
 * Uses hamburger menu on mobile devices that triggers a slide-in sidebar.
 * 
 * @component
 */
import { useState } from "react";
import { Menu, X, Home, Briefcase, Code, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { label: "Início", href: "#home", icon: Home },
  { label: "Sobre", href: "#about", icon: User },
  { label: "Projetos", href: "#projects", icon: Briefcase },
  { label: "Tecnologias", href: "#tech", icon: Code },
  { label: "Contato", href: "#contact", icon: Mail },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            className="text-xl font-bold bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent"
          >
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-card">
              <div className="flex flex-col gap-8 mt-8">
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
                  Menu
                </span>
                <ul className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <button
                        onClick={() => scrollToSection(item.href)}
                        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 text-base font-medium w-full p-3 rounded-lg hover:bg-accent"
                      >
                        <item.icon className="h-5 w-5" />
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
};
