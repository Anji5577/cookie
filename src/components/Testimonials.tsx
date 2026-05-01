import React, { useState, useEffect } from "react";
import { FadeIn } from "./ui/FadeIn";
import { motion, AnimatePresence } from "framer-motion";
import { SmoothCounter } from "./ui/SmoothCounter";

const reviews = [
  {
    quote: "A transformative culinary experience. These aren't just cookies; they are edible masterpieces of texture and deep, complex flavor.",
    author: "Jonathan Gold Award Winner",
    publication: "The Culinary Times"
  },
  {
    quote: "Lumière has elevated the humble chocolate chip cookie to an art form worthy of a Michelin-starred tasting menu.",
    author: "Sarah Jenkins",
    publication: "Gastronomic Review"
  },
  {
    quote: "I've traveled to Paris for macarons and Vienna for Sacher-Torte. I travel here for the Noir Hazelnut. Extraordinary.",
    author: "Marcus Vance",
    publication: "Epicurean Magazine"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-brand-light text-brand-text-dark py-32 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Testimonial Carousel */}
        <div className="min-h-[300px] flex flex-col items-center justify-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute w-full"
            >
              <h3 className="font-serif text-3xl md:text-5xl font-light italic leading-tight mb-8 px-4">
                "{reviews[currentIndex].quote}"
              </h3>
              <p className="text-sm uppercase tracking-widest font-semibold mb-1">
                {reviews[currentIndex].author}
              </p>
              <p className="text-xs uppercase tracking-wider opacity-60">
                {reviews[currentIndex].publication}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                i === currentIndex ? "bg-brand-accent w-8" : "bg-brand-text-dark/20"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Stats Section with Smooth Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-32 border-t border-brand-text-dark/10 pt-16">
          
          <div className="flex flex-col items-center">
            <p className="font-serif text-5xl font-light mb-2">
              <SmoothCounter value={72} />
              <span className="text-2xl ml-1 text-brand-accent">hr</span>
            </p>
            <p className="text-xs uppercase tracking-widest opacity-60">Maturation</p>
          </div>
          
          <div className="flex flex-col items-center">
            <p className="font-serif text-5xl font-light mb-2">
              <SmoothCounter value={100} duration={3} />
              <span className="text-2xl ml-1 text-brand-accent">%</span>
            </p>
            <p className="text-xs uppercase tracking-widest opacity-60">Artisanal</p>
          </div>
          
          <div className="flex flex-col items-center">
            <p className="font-serif text-5xl font-light mb-2">
              <SmoothCounter value={5} />
              <span className="text-2xl ml-1 text-brand-accent pt-2 block md:inline"></span>
            </p>
            <p className="text-xs uppercase tracking-widest opacity-60">Core Flavors</p>
          </div>
          
          <div className="flex flex-col items-center">
            <p className="font-serif text-5xl font-light mb-2">
              <SmoothCounter value={10000} formatting={(v) => v.toLocaleString() + "+"} duration={3.5} />
            </p>
            <p className="text-xs uppercase tracking-widest opacity-60">Happy Clients</p>
          </div>

        </div>

      </div>
    </section>
  );
}
