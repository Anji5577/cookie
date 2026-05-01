import React from "react";
import { FadeIn } from "./ui/FadeIn";
import { motion } from "motion/react";

const products = [
  {
    id: 1,
    name: "Noir Hazelnut",
    desc: "Single-origin dark chocolate, toasted Piedmont hazelnuts.",
    price: "$36 / Box",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Brown Butter Vanilla",
    desc: "Madagascar vanilla bean, caramelized cultured butter.",
    price: "$32 / Box",
    image: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Matcha Macadamia",
    desc: "Ceremonial grade Uji matcha, roasted macadamia nuts.",
    price: "$38 / Box",
    image: "https://images.unsplash.com/photo-1621236378699-859eccfbdfa4?q=80&w=800&auto=format&fit=crop"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }
};

export function FeaturedProducts() {
  return (
    <section id="shop" className="bg-brand-light text-brand-text-dark py-32 px-6 md:px-16 min-h-screen z-10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <FadeIn distance={30}>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-accent mb-4 block">
              Curated Selection
            </span>
            <h2 className="font-serif text-5xl md:text-7xl leading-none">
              Signature <br />
              <span className="italic font-light">Collection.</span>
            </h2>
          </FadeIn>
          <FadeIn distance={30} delay={0.2}>
            <p className="max-w-sm text-sm uppercase tracking-wide leading-relaxed opacity-70">
              Only the finest ingredients sourced globally. Baked to order in limited daily batches.
            </p>
          </FadeIn>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariants} className="group cursor-pointer">
              {/* Image Container */}
              <div className="overflow-hidden rounded-[40px] mb-6 aspect-[4/5] bg-gradient-to-br from-[#1A1A1A] to-[#121212] border border-white/10 relative">
                {product.id === 1 && (
                  <span className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold text-white absolute top-6 left-6 z-10">Best Seller</span>
                )}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover hover-zoom-img"
                  loading="lazy"
                />
              </div>
              
              {/* Product Info */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl mb-2 group-hover:text-brand-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm opacity-60 max-w-[80%] leading-relaxed">
                    {product.desc}
                  </p>
                </div>
                <span className="text-sm font-medium tracking-wide whitespace-nowrap">
                  {product.price}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
