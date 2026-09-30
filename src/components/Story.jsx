import React from 'react';
import { ShieldCheck, Zap, Users, Code } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { whatsappConfig } from '../config/whatsappConfig';

export const Story = () => {
  return (
    <section className="w-full bg-[#050708] py-24 border-t border-b border-[#223334]/30" id="garantia">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        {/* Story & Guarantee Header */}
        <div className="bg-gradient-to-r from-[#0c1618] via-[#091012] to-[#0c1618] border-2 border-[#00f0d4]/40 p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-[0_0_50px_rgba(0,240,212,0.15)] flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
          <div className="flex items-start gap-5 max-w-2xl">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00f0d4] to-[#42e0e5] text-[#003b34] flex items-center justify-center shrink-0 shadow-[0_0_25px_rgba(0,240,212,0.4)]">
              <ShieldCheck className="w-9 h-9 font-bold" />
            </div>
            <div>
              <span className="font-label-sm text-xs text-[#bffff0] uppercase tracking-wider font-extrabold">
                SEGURIDAD TOTAL PARA TU DINERO
              </span>
              <h3 className="font-headline-lg text-2xl md:text-3xl text-white font-extrabold tracking-tight mt-1 mb-2">
                Garantía Romero Labs: 0% Riesgo
              </h3>
              <p className="font-body-md text-sm md:text-base text-[#9cb2ad] leading-relaxed">
                Trabajamos con el esquema más justo del mercado: solo pagas el{' '}
                <strong className="text-white">50% al inicio</strong> para comenzar el desarrollo y el{' '}
                <strong className="text-[#00f0d4]">
                  50% restante solo cuando la web esté 100% terminada y aprobada por ti
                </strong>
                . Tu inversión está totalmente protegida.
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full lg:w-auto">
            <a
              href={`https://wa.me/${whatsappConfig.phoneNumber}?text=${encodeURIComponent(
                'Hola Romero Labs, deseo iniciar mi proyecto con el 50% de anticipo.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#bffff0] text-[#003730] font-headline-sm text-base font-extrabold rounded-xl hover:bg-[#00f0d4] hover:shadow-[0_0_25px_rgba(0,240,212,0.4)] transition-all cursor-pointer"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
              <span>Iniciar con 50% de Anticipo</span>
            </a>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0c1315] border border-[#223334]/60 p-8 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-[#00f0d4]/15 text-[#00f0d4] flex items-center justify-center mb-5">
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="font-headline-sm text-xl text-white font-bold mb-2">Sprints de 3 a 5 Días</h4>
            <p className="font-body-sm text-xs text-[#9cb2ad] leading-relaxed">
              No esperes meses. Nuestra arquitectura basada en componentes reutilizables nos permite lanzar tu web en tiempo récord.
            </p>
          </div>

          <div className="bg-[#0c1315] border border-[#223334]/60 p-8 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-[#00f0d4]/15 text-[#00f0d4] flex items-center justify-center mb-5">
              <Code className="w-6 h-6" />
            </div>
            <h4 className="font-headline-sm text-xl text-white font-bold mb-2">Código Limpio & SEO</h4>
            <p className="font-body-sm text-xs text-[#9cb2ad] leading-relaxed">
              Páginas optimizadas para posicionar en Google con tiempos de respuesta menores a 0.6 segundos en dispositivos móviles.
            </p>
          </div>

          <div className="bg-[#0c1315] border border-[#223334]/60 p-8 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-[#00f0d4]/15 text-[#00f0d4] flex items-center justify-center mb-5">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="font-headline-sm text-xl text-white font-bold mb-2">Soporte Continuo</h4>
            <p className="font-body-sm text-xs text-[#9cb2ad] leading-relaxed">
              Te capacitamos y estamos contigo para cualquier consulta técnica o actualización post-lanzamiento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
