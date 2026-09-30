import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { ShoppingCart, Menu, X, Rocket } from 'lucide-react';
import { whatsappConfig } from '../config/whatsappConfig';

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
          ? 'bg-[#070a0b]/95 backdrop-blur-2xl border-b border-[#223334] shadow-2xl h-16 sm:h-20'
          : 'bg-[#070a0b]/80 backdrop-blur-xl border-b border-[#223334]/50 h-20'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-12 h-full flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/images/logo.svg"
            alt="Romero Labs"
            className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <span className="font-headline-sm text-xl text-white font-extrabold tracking-tight flex items-center gap-1">
            Romero<span className="text-[#00f0d4]">Labs</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <a
            href="#catalogo"
            className="font-label-md text-sm text-[#9cb2ad] hover:text-[#bffff0] transition-colors flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f0d4]/40"></span>
            Catálogo Web
          </a>
          <a
            href="#planes"
            className="font-label-md text-sm text-[#9cb2ad] hover:text-[#bffff0] transition-colors flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f0d4]/40"></span>
            Planes & Precios
          </a>
          <a
            href="#como-funciona"
            className="font-label-md text-sm text-[#9cb2ad] hover:text-[#bffff0] transition-colors flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f0d4]/40"></span>
            Metodología
          </a>
          <a
            href="#garantia"
            className="font-label-md text-sm text-[#9cb2ad] hover:text-[#bffff0] transition-colors flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f0d4]/40"></span>
            Garantía 0% Riesgo
          </a>
          <a
            href="#faq"
            className="font-label-md text-sm text-[#9cb2ad] hover:text-[#bffff0] transition-colors flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f0d4]/40"></span>
            FAQ
          </a>
        </nav>

        {/* Right Action Items */}
        <div className="flex items-center gap-3">
          {/* Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 rounded-xl bg-[#162022] border border-[#223334] text-white hover:border-[#00f0d4] transition-all"
            aria-label="Abrir Carrito"
          >
            <ShoppingCart className="w-5 h-5 text-[#00f0d4]" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#00f0d4] text-[#003b34] font-label-sm text-[11px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center shadow-[0_0_10px_#00f0d4]">
                {totalItems}
              </span>
            )}
          </button>

          {/* WhatsApp Direct CTA */}
          <a
            href={`https://wa.me/${whatsappConfig.phoneNumber}?text=${encodeURIComponent(
              whatsappConfig.defaultMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#00f0d4] to-[#42e0e5] text-[#003b34] font-label-md text-xs md:text-sm font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,240,212,0.4)] transition-all transform hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current" />
            <span>Cotizar por WhatsApp</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-[#162022] border border-[#223334] text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#070a0b] border-b border-[#223334] px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          <a
            href="#catalogo"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-label-md text-base text-white hover:text-[#00f0d4]"
          >
            Catálogo Web
          </a>
          <a
            href="#planes"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-label-md text-base text-white hover:text-[#00f0d4]"
          >
            Planes & Precios
          </a>
          <a
            href="#como-funciona"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-label-md text-base text-white hover:text-[#00f0d4]"
          >
            Metodología
          </a>
          <a
            href="#garantia"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-label-md text-base text-white hover:text-[#00f0d4]"
          >
            Garantía 0% Riesgo
          </a>
          <a
            href="#faq"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-label-md text-base text-white hover:text-[#00f0d4]"
          >
            FAQ
          </a>
          <a
            href={`https://wa.me/${whatsappConfig.phoneNumber}?text=${encodeURIComponent(
              whatsappConfig.defaultMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#00f0d4] to-[#42e0e5] text-[#003b34] font-label-md text-sm font-bold rounded-xl"
          >
            <WhatsAppIcon className="w-5 h-5 fill-current" />
            <span>Hablar por WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
};
