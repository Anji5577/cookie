import { motion, useScroll } from "framer-motion";
import React, { useEffect, useState } from "react";
import { User, ShoppingCart, LogOut, Settings, Menu, X, ChevronDown } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router";
import { useProducts } from "@/context/ProductsContext";
import { MagneticButton } from "./ui/MagneticButton";

export default function Header() {
  const { toggleCart, totalItems } = useCart();
  const { user, isAdmin, logout } = useAuth();
  const { categories, products } = useProducts();
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 80);
    });
  }, [scrollY]);

  const activeCategories = categories.filter((cat) =>
    products.some((p) => p.category.toLowerCase() === cat.name.toLowerCase())
  );

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Buy Cookies",
      href: "#",
      children: [
        "All Cookies",
        ...activeCategories.map((cat) => cat.name),
      ],
    },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 flex items-center justify-between px-6 md:px-12 ${
          isScrolled 
            ? "h-20 backdrop-blur-xl bg-white/5 border-b border-white/10" 
            : "h-24 bg-transparent"
        }`}
      >
        {/* Logo */}
        <div className="flex-1 flex items-center gap-3">
          <a href="/" className="flex items-center gap-3 font-serif text-2xl italic tracking-tighter text-brand-accent hover:opacity-80 transition-opacity">
            <img
              src="/images/logo.jpeg"
              alt="Zixo Cookies"
              className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border border-brand-accent/50"
            />
            <span className="hidden md:inline font-bold">ZIXOCOOKIES.</span>
          </a>
        </div>

        {/* Links Center */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-10">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={item.href}
                className="flex text-[11px] uppercase tracking-[0.2em] font-medium opacity-70 hover:opacity-100 text-brand-text-light transition-colors items-center gap-1 cursor-pointer"
              >
                {item.label}
                {item.children && <ChevronDown className="w-3 h-3 text-brand-accent" />}
              </a>
              {item.children && activeDropdown === item.label && (
                <div className="absolute top-full -left-4 pt-4 pb-2 z-50">
                  <div className="bg-brand-dark/95 backdrop-blur-lg border border-white/10 p-2 min-w-[200px]">
                    {item.children.map((child) => (
                      <a
                        key={child}
                        href={child === "All Cookies" ? "/#" : `/#${child.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-4 py-3 text-[10px] uppercase tracking-[0.1em] text-brand-text-light hover:bg-brand-accent/10 hover:text-brand-accent transition-colors"
                      >
                        {child}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Actions Right */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <div className="hidden md:flex items-center gap-4 mr-4">
            {isAdmin && (
              <button 
                onClick={() => navigate("/admin")}
                className="text-[11px] uppercase tracking-[0.2em] font-medium text-brand-accent hover:opacity-80 transition-opacity flex items-center gap-1"
              >
                <Settings className="w-3.5 h-3.5" />
                Admin
              </button>
            )}
            
            {user && !user.isAnonymous ? (
              <button 
                onClick={logout}
                className="text-[11px] uppercase tracking-[0.2em] font-medium text-brand-text-light hover:opacity-80 transition-opacity flex items-center gap-1"
              >
                <LogOut className="w-3.5 h-3.5" />
                Logout
              </button>
            ) : (
              <button 
                onClick={() => navigate("/auth")}
                className="text-[11px] uppercase tracking-[0.2em] font-medium text-brand-text-light hover:opacity-80 transition-opacity flex items-center gap-1"
              >
                <User className="w-3.5 h-3.5 text-brand-accent" />
                Sign In
              </button>
            )}
          </div>

          <button
            onClick={toggleCart}
            className="relative p-2 opacity-70 hover:opacity-100 transition-opacity text-brand-text-light flex items-center gap-1"
          >
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute top-0 -right-1 bg-brand-accent text-brand-dark text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-white/5 text-brand-text-light rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 bg-brand-dark/95 backdrop-blur-xl z-30 md:hidden overflow-y-auto border-t border-white/10 pb-20">
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-2 gap-4 pb-6 border-b border-white/10">
              {isAdmin && (
                <button 
                  onClick={() => { navigate("/admin"); setMobileMenuOpen(false); }}
                  className="flex flex-col items-center p-4 bg-white/5 rounded border border-white/10 gap-2"
                >
                  <Settings className="w-5 h-5 text-brand-accent" />
                  <span className="text-[10px] uppercase tracking-[0.1em] font-bold text-brand-text-light">Admin</span>
                </button>
              )}
              {user && !user.isAnonymous ? (
                <button 
                  onClick={() => { logout(); setMobileMenuOpen(false); }}
                  className="flex flex-col items-center p-4 bg-white/5 rounded border border-white/10 gap-2"
                >
                  <LogOut className="w-5 h-5 text-brand-accent" />
                  <span className="text-[10px] uppercase tracking-[0.1em] font-bold text-brand-text-light">Logout</span>
                </button>
              ) : (
                <button 
                  onClick={() => { navigate("/auth"); setMobileMenuOpen(false); }}
                  className="flex flex-col items-center p-4 bg-white/5 rounded border border-white/10 gap-2"
                >
                  <User className="w-5 h-5 text-brand-accent" />
                  <span className="text-[10px] uppercase tracking-[0.1em] font-bold text-brand-text-light">Sign In</span>
                </button>
              )}
            </div>

            {navItems.map((item) => (
              <div key={item.label}>
                <a
                  href={item.href}
                  onClick={() => !item.children && setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-4 text-xs tracking-[0.2em] uppercase font-bold text-brand-accent border-b border-white/5"
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </a>
                {item.children && (
                  <div className="pl-4 py-2 grid grid-cols-1 gap-1">
                    {item.children.map((child) => (
                      <a
                        key={child}
                        href={child === "All Cookies" ? "/#" : `/#${child.toLowerCase().replace(/\s+/g, '-')}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-3 text-[10px] uppercase tracking-[0.1em] text-brand-text-light/80 hover:text-brand-accent border-b border-white/5 last:border-0"
                      >
                        {child}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
