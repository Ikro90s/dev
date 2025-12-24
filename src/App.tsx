import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { CustomCursor } from "@/components/CustomCursor";

import { NavigationProvider } from "@/contexts/NavigationContext";

import { SectionIndicator } from "@/components/SectionIndicator";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <NavigationProvider>
        <TooltipProvider>
        <div className="fixed inset-0 -z-50 h-full w-full bg-[#1a0b2e] overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute top-0 left-[-10%] h-[500px] w-[500px] rounded-full bg-[#ad5389] opacity-20 blur-[100px] animate-blob" />
          <div className="absolute bottom-0 right-[-10%] h-[500px] w-[500px] rounded-full bg-[#3c1053] opacity-40 blur-[100px] animate-blob animation-delay-2000" />
          <div className="absolute top-[40%] left-[40%] h-[400px] w-[400px] rounded-full bg-[#3c1053] opacity-30 blur-[100px] animate-blob animation-delay-4000" />
        </div>

        <div className="grain" aria-hidden="true" />
        <CustomCursor />
        <SectionIndicator />

        <Toaster />
        <Sonner />
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
      </NavigationProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
