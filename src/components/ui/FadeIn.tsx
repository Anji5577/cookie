import { motion } from "motion/react";
import React, { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
}

export function FadeIn({ children, delay = 0, className = "", direction = "up", distance = 40 }: FadeInProps) {
  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction],
        scale: 0.96 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0,
        scale: 1
      }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ 
        duration: 0.8, 
        ease: [0.21, 0.47, 0.32, 0.98], // Apple-like easing (easeOutCubic/Quint-ish)
        delay: delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
