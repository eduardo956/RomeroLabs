import React from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { whatsappConfig } from '../config/whatsappConfig';

export const Footer = () => {
  return (
    <footer className="w-full bg-[#090a0f] border-t border-[#262933] py-16 text-[#a1a1aa] font-body-sm">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand info */}
        <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src="/images/cat-logo-transparent.png" 
              alt="Romero Labs Logo" 
              className="h-10 w-auto object-contain transition-transform group-hover:scale-105 filter drop-shadow-[0_0_12px_rgba(212,154,83,0.4)]"
            />
            <span className="font-headline-sm text-xl text-white font-extrabold tracking-tight">
              Romero<span className="text-[#d49a53]">Labs</span>
            </span>
          </a>
          <p className="text-xs text-[#a1a1aa] max-w-sm">
            Laboratorio de Software, Desarrollo Web & Estrategias Digitales de Alta Conversión.
          </p>
        </div>

        {/* Navigation Quick Links */}
        <div className="flex items-center gap-8 text-xs font-label-md">
          <a href="#servicios" className="hover:text-[#f7e1bc] transition-colors">Servicios</a>
          <a href="#resultados" className="hover:text-[#f7e1bc] transition-colors">Beneficios</a>
          <a href="#planes" className="hover:text-[#f7e1bc] transition-colors">Planes</a>
          <a href="#garantia" className="hover:text-[#f7e1bc] transition-colors">Garantía</a>
          <a href="#contacto" className="hover:text-[#f7e1bc] transition-colors">Contacto</a>
        </div>

        {/* WhatsApp CTA & Rights */}
        <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
          <a 
            href={`https://wa.me/${whatsappConfig.phoneNumber}?text=${encodeURIComponent('Hola Romero Labs, quiero consultar sobre sus servicios.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#14151a] border border-[#d49a53]/40 text-[#f7e1bc] hover:border-[#d49a53] transition-all text-xs font-label-md font-bold"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current text-[#d49a53]" />
            <span>Atención Directa</span>
          </a>
          <span className="text-[11px] text-[#71717a] mt-1">
            © {new Date().getFullYear()} Romero Labs. Todos los derechos reservados.
          </span>
        </div>

      </div>
    </footer>
  );
};
