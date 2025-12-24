import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface Premium3DCardProps {
  children: React.ReactNode;
  className?: string;
}

export const Premium3DCard = ({ children, className = "" }: Premium3DCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to center of card
    // range: -0.5 to 0.5
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    // Rotate X is based on Mouse Y (tilt up/down)
    // Rotate Y is based on Mouse X (tilt left/right)
    // Multipliers determine intensity
    const rotateX = mouseY * -15; // Invert so mouse up tilts up
    const rotateY = mouseX * 15;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      className={`relative transform-gpu perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ scale: 1 }}
      whileHover={{ 
        scale: 1.05,
        y: -10,
        zIndex: 10
      }}
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20,
        mass: 0.8
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <div 
        className="h-full w-full shadow-lg transition-all duration-300 group-hover:shadow-2xl brightness-100 group-hover:brightness-110 rounded-2xl overflow-hidden"
        style={{
          boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
};
