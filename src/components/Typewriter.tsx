import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TypewriterProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  cursorClassName?: string;
  onComplete?: () => void;
  showCursor?: boolean;
}

export const Typewriter = ({
  text,
  delay = 0,
  speed = 50,
  className = "",
  cursorClassName = "",
  onComplete,
  showCursor = true,
}: TypewriterProps) => {
  const [displayText, setDisplayText] = useState("");
  const [started, setStarted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const startTimeout = setTimeout(() => {
        setStarted(true);
      }, delay);
      return () => clearTimeout(startTimeout);
    } else {
      setStarted(false);
      setDisplayText("");
      setIsCompleted(false);
    }
  }, [isInView, delay]);

  // Reset when text changes (e.g. language change)
  useEffect(() => {
    setDisplayText("");
    setStarted(false);
    setIsCompleted(false);
    
    // Re-trigger if already in view
    if (isInView) {
      const startTimeout = setTimeout(() => {
        setStarted(true);
      }, speed); // Use speed for instant re-type start or delay
      return () => clearTimeout(startTimeout);
    }
  }, [text, isInView, speed]);

  useEffect(() => {
    if (!started || isCompleted || !isInView) return;

    if (displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      setIsCompleted(true);
      if (onComplete) onComplete();
    }
  }, [displayText, text, speed, started, isCompleted, onComplete, isInView]);

  return (
    <span ref={containerRef} className={className}>
      {displayText}
      {showCursor && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className={`inline-block w-2 h-2 rounded-full bg-primary ml-1 mb-1 align-baseline ${cursorClassName}`}
        />
      )}
    </span>
  );
};
