import { motion, useScroll, useTransform } from "motion/react";
import React, { useEffect, useState } from "react";
import { MagneticButton } from "./ui/MagneticButton";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 80);
    });
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 flex items-center justify-between px-12 ${
        isScrolled 
          ? "h-20 backdrop-blur-xl bg-white/5 border-b border-white/10" 
          : "h-24 bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="flex-1">
        <a href="#" className="font-serif text-2xl italic tracking-tighter text-brand-text-light hover:opacity-80 transition-opacity">
          Lumière.
        </a>
      </div>

      {/* Links Center */}
      <div className="hidden md:flex flex-1 justify-center items-center gap-10">
        {["Shop", "Our Story", "Menu", "Journal"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            className="text-[11px] uppercase tracking-[0.2em] font-medium opacity-70 hover:opacity-100 text-brand-text-light transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      {/* CTA Right */}
      <div className="flex-1 flex justify-end">
        <MagneticButton variant={isScrolled ? "filled" : "outlined"}>
          Order Now
        </MagneticButton>
      </div>
    </motion.nav>
  );
}
