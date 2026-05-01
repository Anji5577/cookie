import React from "react";
import { FadeIn } from "./ui/FadeIn";
import { MagneticButton } from "./ui/MagneticButton";

export function Footer() {
  return (
    <>
      <section className="bg-brand-dark text-brand-text-light pt-40 pb-20 px-6 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark to-[#161210]"></div>
        
        <div className="max-w-5xl mx-auto relative z-10 text-center flex flex-col items-center">
          <FadeIn distance={40}>
            <h2 className="font-serif text-6xl md:text-8xl font-light leading-[0.9] mb-8">
              Indulge in <br />
              <span className="italic text-brand-accent">Perfection.</span>
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2} distance={20}>
            <p className="text-white/60 max-w-md mx-auto mb-12">
              Our weekly batch sells out quickly. Order now to secure your allocation of our artisanal collection.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4} distance={20}>
            <MagneticButton variant="filled" className="scale-110">
              Secure Your Order
            </MagneticButton>
          </FadeIn>
        </div>

        {/* Footer Content */}
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12 mt-40 pt-16 border-t border-white/10 text-sm">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-3xl font-light mb-6">Lumière.</h3>
            <p className="text-white/60 max-w-xs leading-relaxed">
              Elevating the art of baking through uncompromising ingredient curation and meticulous technique.
            </p>
          </div>
          
          <div>
            <h4 className="uppercase tracking-widest text-xs font-semibold mb-6">Explore</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Our Menu</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">The Process</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Corporate Gifting</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Journal</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="uppercase tracking-widest text-xs font-semibold mb-6">Connect</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">hello@lumiere.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 mt-20 flex flex-col md:flex-row justify-between items-center text-xs tracking-widest text-white/40">
          <p>&copy; {new Date().getFullYear()} Lumière. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </section>
    </>
  );
}
