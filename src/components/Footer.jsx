import React from 'react';
import { companyInfo } from '../data/companyInfo';
import { MapPin, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="w-full bg-[#030506] border-t border-[#223334]/30 py-16">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1 & 2: Brand Info */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo-white.png"
                alt="Romero Labs"
                className="h-10 sm:h-12 w-auto object-contain transition-transform hover:scale-105 filter drop-shadow-[0_0_12px_rgba(0,240,212,0.3)]"
              />
            </div>
            <p className="font-body-sm text-sm text-[#9cb2ad] max-w-md leading-relaxed">
              Ingeniería de páginas web de alta conversión para fundadores, marcas y pymes en Perú y Latinoamérica. Arquitectura digital enfocada en ventas directas a WhatsApp.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-2 h-2 rounded-full bg-[#00f0d4] animate-pulse"></span>
              <span className="font-label-sm text-xs text-[#bffff0] uppercase font-bold tracking-wide">
                Disponibilidad para sprints inmediatos
              </span>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="flex flex-col gap-3">
            <span className="font-label-md text-sm text-white uppercase tracking-wider font-extrabold">
              Navegación
            </span>
            <a
              href="#catalogo"
              className="font-body-sm text-sm text-[#9cb2ad] hover:text-[#00f0d4] transition-colors"
            >
              Catálogo de Páginas
            </a>
            <a
              href="#planes"
              className="font-body-sm text-sm text-[#9cb2ad] hover:text-[#00f0d4] transition-colors"
            >
              Inversión Transparente
            </a>
            <a
              href="#garantia"
              className="font-body-sm text-sm text-[#9cb2ad] hover:text-[#00f0d4] transition-colors"
            >
              Garantía de Satisfacción 0% Riesgo
            </a>
            <a
              href="#faq"
              className="font-body-sm text-sm text-[#9cb2ad] hover:text-[#00f0d4] transition-colors"
            >
              Preguntas Frecuentes
            </a>
          </div>

          {/* Col 4: Contact Direct */}
          <div className="flex flex-col gap-3">
            <span className="font-label-md text-sm text-white uppercase tracking-wider font-extrabold">
              Contacto Directo
            </span>
            <div className="flex items-center gap-2 text-[#9cb2ad] font-body-sm text-sm">
              <MapPin className="w-4 h-4 text-[#00f0d4] shrink-0" />
              <span>{companyInfo.address}</span>
            </div>
            <div className="flex items-center gap-2 text-[#9cb2ad] font-body-sm text-sm">
              <Mail className="w-4 h-4 text-[#00f0d4] shrink-0" />
              <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition-colors">
                {companyInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-2 text-[#9cb2ad] font-body-sm text-sm">
              <Phone className="w-4 h-4 text-[#00f0d4] shrink-0" />
              <span>{companyInfo.phoneDisplay}</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-[#223334]/30 flex flex-col md:flex-row items-center justify-between gap-4 text-[#9cb2ad] font-label-sm text-xs">
          <p>© 2026 Romero Labs. Todos los derechos reservados. RUC {companyInfo.ruc}</p>
          <div className="flex items-center gap-4">
            <span className="text-[#627d78]">Infraestructura optimizada para ventas</span>
            <span className="w-1 h-1 rounded-full bg-[#223334]"></span>
            <span className="text-[#627d78]">Hecho para LATAM</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
