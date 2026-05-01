import React from "react";
import Header from "@/components/Header";
import CartDrawer from "@/components/CartDrawer";
import { ProductsProvider, useProducts } from "@/context/ProductsContext";
import ProductModal from "@/components/ProductModal";
import { Hero } from "@/components/Hero";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { OurStory } from "@/components/OurStory";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/ui/CursorGlow";

function HomeContent() {
  const { categories, selectedProduct, setSelectedProduct } = useProducts();

  return (
    <main className="relative">
      <Hero />
      <FeaturedProducts />
      <OurStory />
      <Testimonials />
      <ProductModal 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        product={selectedProduct} 
      />
    </main>
  );
}

export default function Home() {
  return (
    <ProductsProvider>
      <div className="min-h-screen bg-brand-dark text-brand-text-light antialiased selection:bg-brand-accent selection:text-brand-dark cursor-none">
        <div className="noise-overlay"></div>
        <CursorGlow />
        <Header />
        <CartDrawer />
        <HomeContent />
        <Footer />
      </div>
    </ProductsProvider>
  );
}
