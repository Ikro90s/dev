import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { usePerformancePreference } from "@/hooks/usePerformancePreference";

export const CustomCursor = () => {
  const [isTouch, setIsTouch] = useState(false);
  const [isTapping, setIsTapping] = useState(false);
  const [magneticTarget, setMagneticTarget] = useState<HTMLElement | null>(null);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const { simplifyEffects } = usePerformancePreference();

  const springConfig = isTouch 
    ? { damping: 30, stiffness: 200, mass: 0.5 }
    : { damping: 30, stiffness: 400, mass: 0.2 }; 

  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkTouch = () => {
      const hasTouch = (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches
      );
      setIsTouch(hasTouch);
    };
    checkTouch();

    const handleMouseMove = (e: MouseEvent) => {
      if (isTouch) return;
      
      const target = e.target as HTMLElement;
      const interactive = target.closest('button, a, [role="button"], .magnetic-area');
      
      if (interactive) {
        setMagneticTarget(interactive as HTMLElement);
        const rect = interactive.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const pull = 0.3;
        const targetX = e.clientX + (centerX - e.clientX) * pull;
        const targetY = e.clientY + (centerY - e.clientY) * pull;
        
        mouseX.set(targetX);
        mouseY.set(targetY);
      } else {
        setMagneticTarget(null);
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setIsTouch(true);
      setIsTapping(true);
      mouseX.set(e.touches[0].clientX);
      mouseY.set(e.touches[0].clientY);
    };

    const handleTouchEnd = () => {
      setIsTapping(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [mouseX, mouseY, isTouch]);

  if (isTouch && !isTapping) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
    >
      <AnimatePresence>
        {!isTouch ? (
          <motion.div
            key="desktop-cursor"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            style={{ x: "-2px", y: "-2px" }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                filter: simplifyEffects ? "none" : "drop-shadow(0 0 8px hsl(var(--primary) / 0.9)) drop-shadow(0 0 15px hsl(var(--primary) / 0.6))",
              }}
            >
              <path
                d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
                fill="hsl(var(--primary))"
                stroke="white"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            {!simplifyEffects && (
              <div 
                className="absolute top-0 left-0 w-1 h-1 bg-primary rounded-full"
                style={{
                  boxShadow: "0 0 30px 15px hsl(var(--primary) / 0.5), 0 0 60px 30px hsl(var(--primary) / 0.2)",
                }}
              />
            )}
          </motion.div>
        ) : (
          <motion.div
            key="mobile-glow"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1,
              scale: 1.2,
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="w-12 h-12 rounded-full flex items-center justify-center translate-x-[-50%] translate-y-[-50%]"
            style={{
              background: simplifyEffects ? "none" : "radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)",
              boxShadow: simplifyEffects ? "none" : "0 0 40px 10px hsl(var(--primary) / 0.2)",
              border: simplifyEffects ? "1px solid hsl(var(--primary) / 0.2)" : "none"
            }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};
