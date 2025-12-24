import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const isLight = theme === "light";

  const toggleTheme = () => {
    setTheme(isLight ? "dark" : "light");
  };

  // User's logic scaled to ~25% (further 40% reduction from last 12px scale)
  // Base unit: 8px
  // Translation: 4px
  
  // Mapping for the 16 segments of the stick (nth-child 1 to 16)
  const getStickColor = (index: number, light: boolean) => {
    const colors: Record<number, string> = light ? {
      1: "#7c623e", 2: "#4c3d26", 3: "#937344", 4: "#3c2f1c", 5: "#937344", 
      6: "#423522", 7: "#9f7f50", 8: "#403320", 9: "#977748", 10: "#3c2f1c", 
      11: "#675231", 12: "#3d301d", 13: "#987849", 14: "#3b2e1b", 15: "#675231", 16: "#372a17"
    } : {
      1: "#443622", 2: "#2e2517", 3: "#4b3b23", 4: "#251e12", 5: "#4b3b23", 
      6: "#292115", 7: "#4b3c26", 8: "#292115", 9: "#4b3a21", 10: "#251e12", 
      11: "#3d311d", 12: "#2c2315", 13: "#493a22", 14: "#2b2114", 15: "#3d311d", 16: "#271e10"
    };
    return colors[index + 1];
  };

  return (
    <motion.div 
      className="relative cursor-pointer select-none flex flex-col items-center group py-2"
      onClick={toggleTheme}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="relative w-8 h-12 flex justify-center items-center perspective-1000">
        <div className={cn(
          "relative w-[8px] h-[40px] transition-all duration-500 [transform-style:preserve-3d] [transform:rotateX(-30deg)_rotateY(45deg)]"
        )}>
          {/* Torch Head */}
          <div className="absolute top-0 left-0 w-[8px] h-[8px] [transform-style:preserve-3d]">
            {/* Top Face */}
            <div className={cn(
              "absolute inset-0 grid grid-cols-2 grid-rows-2 [transform:rotateX(90deg)_translateZ(4px)] [transform-style:preserve-3d] transition-all duration-500 bg-black",
              isLight && "shadow-[0_0_1px_rgb(255,255,255),0_0_6px_rgba(255,237,156,0.7),0_0_15px_rgba(255,227,101,0.4)]"
            )}>
              <div className={cn("w-[107%] h-[107%]", isLight ? "bg-[#ffff97]" : "bg-[#ffff9760]")} />
              <div className={cn("w-[107%] h-[107%]", isLight ? "bg-[#ffd800]" : "bg-[#ffd80060]")} />
              <div className={cn("w-[107%] h-[107%]", isLight ? "bg-[#ffffff]" : "bg-[#ffffff60]")} />
              <div className={cn("w-[107%] h-[107%]", isLight ? "bg-[#ff8f00]" : "bg-[#ff8f0060]")} />
            </div>
            {/* Left Face */}
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 [transform:rotateY(-90deg)_translateZ(4px)] [transform-style:preserve-3d] bg-black">
              <div className={cn("w-[107%] h-[107%]", isLight ? "bg-[#ffd800]" : "bg-[#ffd80060]")} />
              <div className={cn("w-[107%] h-[107%]", isLight ? "bg-[#ff8f00]" : "bg-[#ff8f0060]")} />
              <div className={cn("w-[107%] h-[107%]", isLight ? "bg-[#ffff97]" : "bg-[#ffff9760]")} />
              <div className={cn("w-[107%] h-[107%]", isLight ? "bg-[#ffffff]" : "bg-[#ffffff60]")} />
            </div>
            {/* Right Face */}
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 [transform:rotateY(0deg)_translateZ(4px)] [transform-style:preserve-3d] bg-black">
              <div className={cn("w-[107%] h-[107%]", isLight ? "bg-[#ffd800]" : "bg-[#ffd80060]")} />
              <div className={cn("w-[107%] h-[107%]", isLight ? "bg-[#ff8f00]" : "bg-[#ff8f0060]")} />
              <div className={cn("w-[107%] h-[107%]", isLight ? "bg-[#ffff97]" : "bg-[#ffff9760]")} />
              <div className={cn("w-[107%] h-[107%]", isLight ? "bg-[#ffffff]" : "bg-[#ffffff60]")} />
            </div>
          </div>

          {/* Torch Stick */}
          <div className="absolute top-[8px] left-0 w-[8px] h-[32px] [transform-style:preserve-3d]">
            {/* Stick Left Face */}
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-[repeat(8,12.5%)] [transform:rotateY(-90deg)_translateZ(4px)_translateY(2px)] transition-all duration-500">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-[107%] h-[107%]" style={{ backgroundColor: getStickColor(i, isLight) }} />
              ))}
            </div>
            {/* Stick Right Face */}
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-[repeat(8,12.5%)] [transform:rotateY(0deg)_translateZ(4px)_translateY(2px)] transition-all duration-500">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-[107%] h-[107%]" style={{ backgroundColor: getStickColor(i, isLight) }} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

