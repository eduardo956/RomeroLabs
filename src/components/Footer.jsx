import React from 'react';
import { companyInfo } from '../data/companyInfo';
import { MapPin, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="w-full bg-[#0d0604] border-t border-[#3d2314]/60 py-16">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1 & 2: Brand Info */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <a href="#" className="flex items-center gap-3 group">
              <img
                src="/images/cat-logo-transparent.png"
                alt="Romero Labs"
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105 filter drop-shadow-[0_0_12px_rgba(212,154,83,0.35)]"
              />
              <span className="font-headline-sm text-xl text-[#f7e1bc] font-extrabold tracking-tight flex items-center gap-1">
                Romero<span className="text-[#d49a53]">Labs</span>
              </span>
            </a>
            <p className="font-body-sm text-sm text-[#d6c4b2] max-w-md leading-relaxed">
              Ingeniería de software, desarrollo web de alta conversión y soluciones digitales avanzadas para fundadores, marcas y empresas en Perú y Latinoamérica.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-2 h-2 rounded-full bg-[#d49a53] animate-pulse"></span>
              <span className="font-label-sm text-xs text-[#f7e1bc] uppercase font-bold tracking-wide">
                Disponibilidad inmediata para nuevos proyectos
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
              className="font-body-sm text-sm text-[#d6c4b2] hover:text-[#d49a53] transition-colors"
            >
              Servicios Digitales
            </a>
            <a
              href="#resultados"
              className="font-body-sm text-sm text-[#d6c4b2] hover:text-[#d49a53] transition-colors"
            >
              Resultados que te Impulsan
            </a>
            <a
              href="#planes"
              className="font-body-sm text-sm text-[#d6c4b2] hover:text-[#d49a53] transition-colors"
            >
              Planes & Precios
            </a>
            <a
              href="#garantia"
              className="font-body-sm text-sm text-[#d6c4b2] hover:text-[#d49a53] transition-colors"
            >
              Garantía 0% Riesgo
            </a>
            <a
              href="#faq"
              className="font-body-sm text-sm text-[#d6c4b2] hover:text-[#d49a53] transition-colors"
            >
              Preguntas Frecuentes
            </a>
          </div>

          {/* Col 4: Contact Direct */}
          <div className="flex flex-col gap-3">
            <span className="font-label-md text-sm text-white uppercase tracking-wider font-extrabold">
              Contacto Directo
            </span>
            <div className="flex items-center gap-2 text-[#d6c4b2] font-body-sm text-sm">
              <MapPin className="w-4 h-4 text-[#d49a53] shrink-0" />
              <span>San Isidro, Lima, Perú</span>
            </div>
            <div className="flex items-center gap-2 text-[#d6c4b2] font-body-sm text-sm">
              <Mail className="w-4 h-4 text-[#d49a53] shrink-0" />
              <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition-colors">
                {companyInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-2 text-[#d6c4b2] font-body-sm text-sm">
              <Phone className="w-4 h-4 text-[#d49a53] shrink-0" />
              <span>{companyInfo.phoneDisplay}</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-[#3d2314]/60 flex flex-col md:flex-row items-center justify-between gap-4 text-[#d6c4b2] font-label-sm text-xs">
          <p>© 2026 Romero Labs. Todos los derechos reservados. RUC {companyInfo.ruc}</p>
          <div className="flex items-center gap-4">
            <span className="text-[#8c5a3c]">Infraestructura optimizada para ventas</span>
            <span className="w-1 h-1 rounded-full bg-[#3d2314]"></span>
            <span className="text-[#8c5a3c]">Hecho para LATAM</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
