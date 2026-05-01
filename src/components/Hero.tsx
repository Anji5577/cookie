import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FadeIn } from "./ui/FadeIn";
import { StaggerText } from "./ui/StaggerText";
import { MagneticButton } from "./ui/MagneticButton";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-20">
      {/* Background Parallax Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/40 via-[#0A0A0A]/60 to-[#0A0A0A] z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=2600&auto=format&fit=crop" 
          alt="Cinematic cookie layout" 
          className="w-full h-[120%] object-cover object-center translate-y-[-10%]"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-16 flex flex-col items-center text-center">
        <FadeIn delay={0.2} distance={20}>
          <span className="text-brand-accent text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
            The Artisan Experience
          </span>
        </FadeIn>
        
        <StaggerText 
          text="Cookies Redefined." 
          className="font-serif text-[12vw] md:text-[110px] leading-[0.85] tracking-tight text-brand-text-light mb-8"
          delay={0.4}
        />
        
        <FadeIn delay={1.4} distance={30}>
          <p className="text-brand-text-light/60 text-lg font-sans max-w-xl mx-auto mb-12 font-light leading-relaxed">
            Crafted with uncompromising devotion to flavor and aesthetics. 
            Experience the pinnacle of culinary artistry in every bite.
          </p>
        </FadeIn>
        
        <FadeIn delay={1.6} distance={20}>
          <MagneticButton variant="filled">
            Explore Collection
          </MagneticButton>
        </FadeIn>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{ opacity }}
      >
        <span className="text-[10px] uppercase tracking-widest text-brand-text-light/50 mb-3 font-semibold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-text-light/50 to-transparent"></div>
      </motion.div>
    </section>
  );
}
