import React, { createContext, useContext, useState, useEffect } from "react";

export type Section = "HOME" | "ABOUT" | "PROJECTS" | "TECH" | "CONTACT";

interface NavigationContextType {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
  lastChanged: number;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeSection, setActiveSectionState] = useState<Section>("HOME");
  const [lastChanged, setLastChanged] = useState(Date.now());

  const setActiveSection = (section: Section) => {
    if (section !== activeSection) {
      setActiveSectionState(section);
      setLastChanged(Date.now());
    }
  };

  return (
    <NavigationContext.Provider value={{ activeSection, setActiveSection, lastChanged }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};
