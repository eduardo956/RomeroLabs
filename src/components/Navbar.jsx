import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Menu, X, Rocket } from 'lucide-react';

export const Navbar = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#140a06]/95 backdrop-blur-2xl border-b border-[#3d2314] shadow-2xl h-16 sm:h-20'
          : 'bg-[#140a06]/85 backdrop-blur-xl border-b border-[#3d2314]/60 h-20'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-12 h-full flex items-center justify-between gap-4">
        {/* Brand Logo with Siamese Cat R Icon */}
        <a href="#" className="flex items-center gap-3 group py-1">
          <img
            src="/images/cat-logo-transparent.png"
            alt="Romero Labs"
            className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105 filter drop-shadow-[0_0_12px_rgba(212,154,83,0.35)]"
          />
          <span className="font-headline-sm text-xl text-[#f7e1bc] font-extrabold tracking-tight flex items-center gap-1">
            Romero<span className="text-[#d49a53]">Labs</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <a
            href="#catalogo"
            className="font-label-md text-sm text-[#d6c4b2] hover:text-[#f7e1bc] transition-colors flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#d49a53]"></span>
            Servicios Digitales
          </a>
          <a
            href="#resultados"
            className="font-label-md text-sm text-[#d6c4b2] hover:text-[#f7e1bc] transition-colors flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#d49a53]"></span>
            Resultados
          </a>
          <a
            href="#planes"
            className="font-label-md text-sm text-[#d6c4b2] hover:text-[#f7e1bc] transition-colors flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#d49a53]"></span>
            Planes & Precios
          </a>
          <a
            href="#garantia"
            className="font-label-md text-sm text-[#d6c4b2] hover:text-[#f7e1bc] transition-colors flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#d49a53]"></span>
            Garantía
          </a>
          <a
            href="#contacto"
            className="font-label-md text-sm text-[#d6c4b2] hover:text-[#f7e1bc] transition-colors flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#d49a53]"></span>
            Contacto
          </a>
        </nav>

        {/* Right Action Items */}
        <div className="flex items-center gap-3">
          {/* Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 rounded-xl bg-[#27170e] border border-[#4a2c1a] text-[#f7e1bc] hover:border-[#d49a53] transition-all"
            aria-label="Abrir Carrito"
          >
            <ShoppingCart className="w-5 h-5 text-[#d49a53]" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#d49a53] text-[#140a06] font-label-sm text-[11px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center shadow-[0_0_10px_#d49a53]">
                {totalItems}
              </span>
            )}
          </button>

          {/* Action CTA Button */}
          <a
            href="#contacto"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#d49a53] via-[#e5b878] to-[#f7e1bc] text-[#140a06] font-label-md text-xs md:text-sm font-extrabold rounded-xl hover:shadow-[0_0_20px_rgba(212,154,83,0.5)] transition-all transform hover:-translate-y-0.5"
          >
            <Rocket className="w-4 h-4" />
            <span>Solicitar Cotización</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-[#27170e] border border-[#4a2c1a] text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#140a06] border-b border-[#4a2c1a] px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          <a
            href="#catalogo"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-label-md text-base text-[#f7e1bc] hover:text-[#d49a53]"
          >
            Servicios Digitales
          </a>
          <a
            href="#resultados"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-label-md text-base text-[#f7e1bc] hover:text-[#d49a53]"
          >
            Resultados
          </a>
          <a
            href="#planes"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-label-md text-base text-[#f7e1bc] hover:text-[#d49a53]"
          >
            Planes & Precios
          </a>
          <a
            href="#garantia"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-label-md text-base text-[#d6c4b2] hover:text-[#d49a53]"
          >
            Garantía 0% Riesgo
          </a>
          <a
            href="#contacto"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#d49a53] to-[#f7e1bc] text-[#140a06] font-label-md text-sm font-extrabold rounded-xl"
          >
            <Rocket className="w-5 h-5" />
            <span>Solicitar Cotización</span>
          </a>
        </div>
      )}
    </header>
  );
};
