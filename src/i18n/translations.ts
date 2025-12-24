export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      tech: "Tech",
      contact: "Contact",
    },
    // Hero Section
    hero: {
      name: "Ikro90s",
      subtitle1: "Fullstack Developer",
      subtitle2: "Raccoon Developer",
      tagline: "Design, logic and impact",
      projectsBtn: "Projects",
      contactBtn: "Contact",
    },
    // About Section
    about: {
      title: "MyRaccoon",
      experience: "Experience",
      experienceValue: "2 years",
      education: "Education",
      educationValue: "Software Eng.",
      location: "Location",
      locationValue: "MT/RR",
      availability: "Availability",
      availabilityValue: "Freelance",
      focus: "Focus",
      focusValue: "Fullstack",
      languages: "Languages",
      languagesValue: "PT/EN/ES",
    },
    // Projects Section
    projects: {
      title: "Personal Projects",
    },
    // Skills Section
    skills: {
      title: "Mindset",
      design: "Design",
      brainstorm: "Brainstorm",
      minimalism: "Minimalism",
      logic: "Logic",
      strategy: "Strategy",
      impact: "Impact",
    },
    // Contact Section
    contact: {
      title: "Contact",
      chat: "Chat",
      follow: "Follow",
      message: "Message",
    },
    // Projects
    projectsData: {
      webgame: {
        title: "2d-game",
        description: "Experimental 2D game created for testing logic, interaction, and basic mechanics.",
        caseStudy: {
          problem: "Visualizing complex interaction patterns in a 2D space without performance lag.",
          solution: "Implemented custom sprite-based rendering with spatial partitioning.",
          choice: "Vanilla Canvas API for raw performance and pixel-level control."
        }
      },
      shortly: {
        title: "Shortly",
        description: "Project focused on design and layout, exploring a simple and objective solution for link shortening.",
        caseStudy: {
          problem: "Cluttered URL management interfaces that overwhelm the user.",
          solution: "Focused on a single-action UX with immediate visual feedback.",
          choice: "Next.js for SSR and instant page loads."
        }
      },
      webcloud: {
        title: "WebCloud",
        description: "Basic project focused on interface design, exploring aesthetics, spacing, and visual organization.",
        caseStudy: {
          problem: "Representing hierarchical data in a flat design without losing context.",
          solution: "Multi-layered glassmorphism to indicate depth and parent-child relationships.",
          choice: "Tailwind CSS for fine-grained control over translucency and blur."
        }
      },
    },
    // Button labels
    buttons: {
      liveDemo: "Live Demo",
      code: "Code",
    },
  },
  pt: {
    // Navigation
    nav: {
      home: "Início",
      about: "Sobre",
      projects: "Projetos",
      tech: "Tecnologias",
      contact: "Contato",
    },
    // Hero Section
    hero: {
      name: "Ikro90s",
      subtitle1: "Desenvolvedor Fullstack",
      subtitle2: "Desenvolvedor Guaxinin",
      tagline: "Design, lógica e impacto",
      projectsBtn: "Projetos",
      contactBtn: "Contato",
    },
    // About Section
    about: {
      title: "MyRaccoon",
      experience: "Experiência",
      experienceValue: "2 anos",
      education: "Formação",
      educationValue: "Eng. de Software",
      location: "Localização",
      locationValue: "MT/RR",
      availability: "Disponibilidade",
      availabilityValue: "Freelance",
      focus: "Foco",
      focusValue: "Fullstack",
      languages: "Idiomas",
      languagesValue: "PT/EN/ES",
    },
    // Projects Section
    projects: {
      title: "Projetos Pessoais",
    },
    // Skills Section
    skills: {
      title: "Mindset",
      design: "Design",
      brainstorm: "Ideação",
      minimalism: "Minimalismo",
      logic: "Lógica",
      strategy: "Estratégia",
      impact: "Impacto",
    },
    // Contact Section
    contact: {
      title: "Contatos",
      chat: "Conversar",
      follow: "Seguir",
      message: "Mensagem",
    },
    // Projects
    projectsData: {
      webgame: {
        title: "2d-game",
        description: "Jogo 2D experimental criado para testes de lógica, interação e mecânicas básicas.",
        caseStudy: {
          problem: "Visualizar padrões de interação complexos em espaço 2D sem lag de performance.",
          solution: "Lógica de renderização baseada em sprites com particionamento espacial.",
          choice: "Vanilla Canvas API para performance bruta e controle total de pixels."
        }
      },
      shortly: {
        title: "Shortly",
        description: "Projeto focado em design e layout, explorando uma solução simples e objetiva para encurtamento de links.",
        caseStudy: {
          problem: "Interfaces de gerenciamento de URLs poluídas que sobrecarregam o usuário.",
          solution: "UX de ação única com feedback visual imediato.",
          choice: "Next.js para SSR e carregamentos de página instantâneos."
        }
      },
      webcloud: {
        title: "WebCloud",
        description: "Projeto básico voltado para design de interfaces, explorando estética, espaçamento e organização visual.",
        caseStudy: {
          problem: "Representar dados hierárquicos em um design flat sem perder o contexto.",
          solution: "Glassmorphism em camadas para indicar profundidade e relações pai-filho.",
          choice: "Tailwind CSS para controle refinado de translucidez e desfoque."
        }
      },
    },
    // Button labels
    buttons: {
      liveDemo: "Demo ao Vivo",
      code: "Código",
    },
  },
};

export type Language = "en" | "pt";
export type TranslationKey = typeof translations.en;
