import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "filled" | "outlined" | "ghost";
  onClick?: () => void;
}

export function MagneticButton({ children, className = "", variant = "filled", onClick }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = buttonRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative inline-flex items-center justify-center overflow-hidden rounded-full font-sans transition-all duration-300";
  
  const variants = {
    filled: "bg-brand-accent text-black hover:scale-105 font-bold",
    outlined: "border border-white/20 text-brand-text-light hover:bg-white hover:text-black font-semibold",
    ghost: "text-brand-text-light hover:text-brand-accent font-semibold",
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10 px-6 py-2 text-xs uppercase tracking-widest">{children}</span>
    </motion.button>
  );
}
