import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { OurStory } from "./components/OurStory";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";
import { CursorGlow } from "./components/ui/CursorGlow";

export default function App() {
  return (
    <div className="relative antialiased selection:bg-brand-accent selection:text-brand-dark">
      {/* Background Noise Texture */}
      <div className="noise-overlay"></div>
      
      {/* Custom Cursor Glow */}
      <CursorGlow />

      <Navbar />
      
      <main>
        <Hero />
        <FeaturedProducts />
        <OurStory />
        <Testimonials />
      </main>
      
      <Footer />
    </div>
  );
}

