import React, { useRef } from "react";
import { FadeIn } from "./ui/FadeIn";
import { useScroll, useTransform, motion } from "motion/react";

export function OurStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Example of using scroll progress for a subtle effect if needed
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section id="our-story" className="bg-brand-dark text-brand-text-light relative">
      <div ref={containerRef} className="sticky-container flex flex-col md:flex-row relative">
        
        {/* Sticky Image Half - Pinned */}
        <div className="w-full md:w-1/2 h-screen sticky top-0 overflow-hidden">
          <div className="absolute inset-0 bg-brand-dark/20 z-10"></div>
          <motion.img 
            style={{ scale: imageScale }}
            src="https://images.unsplash.com/photo-1590080876477-d64fc567efce?q=80&w=1200&auto=format&fit=crop" 
            alt="Baking process" 
            className="w-full h-full object-cover"
          />
          {/* Overlay text on image */}
          <div className="absolute inset-x-0 bottom-12 z-20 px-8 md:px-16">
            <h2 className="font-serif text-5xl md:text-7xl font-light leading-none">
              The <br/> <span className="italic">Process.</span>
            </h2>
          </div>
        </div>

        {/* Scrolling Content Half */}
        <div className="w-full md:w-1/2 flex flex-col pt-32 pb-32 px-8 md:px-16 md:pl-24 justify-around gap-40">
          
          <div className="max-w-md">
            <FadeIn>
              <h3 className="text-xs uppercase tracking-[0.2em] text-brand-accent mb-6 font-semibold">01 / Ingredients</h3>
              <p className="font-serif text-3xl mb-6 font-light">Sourced with uncompromising standards.</p>
              <p className="text-white/60 text-sm leading-loose">
                We travel the world to find the perfect components. Single-origin chocolate from 
                small-batch producers in Ecuador, ceremonial matcha from Uji, and cultured butter 
                from Normandy. We believe greatness starts at the farm.
              </p>
            </FadeIn>
          </div>

          <div className="max-w-md">
            <FadeIn>
              <h3 className="text-xs uppercase tracking-[0.2em] text-brand-accent mb-6 font-semibold">02 / Technique</h3>
              <p className="font-serif text-3xl mb-6 font-light">Seventy-two hours of patient aging.</p>
              <p className="text-white/60 text-sm leading-loose">
                Time is an ingredient. Our dough undergoes a meticulous 72-hour cold fermentation 
                process. This allows enzymes to break down the starches, resulting in profound 
                flavor complexity and the perfect chewy-to-crispy texture ratio.
              </p>
            </FadeIn>
          </div>

          <div className="max-w-md">
            <FadeIn>
              <h3 className="text-xs uppercase tracking-[0.2em] text-brand-accent mb-6 font-semibold">03 / Artistry</h3>
              <p className="font-serif text-3xl mb-6 font-light">Hand-finished by artisans.</p>
              <p className="text-white/60 text-sm leading-loose">
                Every single cookie is weighed, shaped, and finished by human hands. A final 
                sprinkle of Maldon sea salt, a delicate brush of edible gold — because true luxury 
                lies in the imperfect perfection of the handmade.
              </p>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
}
