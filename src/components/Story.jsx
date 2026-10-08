import React from 'react';
import { ShieldCheck, Zap, Users, Code } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { whatsappConfig } from '../config/whatsappConfig';

export const Story = () => {
  return (
    <section className="w-full bg-[#090a0f] py-24 border-t border-b border-[#231b15]" id="garantia">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        {/* Story & Guarantee Header */}
        <div className="bg-gradient-to-r from-[#14151a] via-[#1a1c24] to-[#14151a] border-2 border-[#d49a53]/40 p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-[0_0_50px_rgba(212,154,83,0.15)] flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
          <div className="flex items-start gap-5 max-w-2xl">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#d49a53] to-[#f7e1bc] text-[#090a0f] flex items-center justify-center shrink-0 shadow-[0_0_25px_rgba(212,154,83,0.4)]">
              <ShieldCheck className="w-9 h-9 font-bold" />
            </div>
            <div>
              <span className="font-label-sm text-xs text-[#f7e1bc] uppercase tracking-wider font-extrabold">
                SEGURIDAD TOTAL PARA TU DINERO
              </span>
              <h3 className="font-headline-lg text-2xl md:text-3xl text-white font-extrabold tracking-tight mt-1 mb-2">
                Garantía Romero Labs: 0% Riesgo
              </h3>
              <p className="font-body-md text-sm md:text-base text-[#a1a1aa] leading-relaxed">
                Trabajamos con el esquema más justo del mercado: solo pagas el{' '}
                <strong className="text-white">50% al inicio</strong> para comenzar el desarrollo y el{' '}
                <strong className="text-[#f7e1bc]">
                  50% restante solo cuando tu proyecto esté 100% terminado y aprobado por ti
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
              className="w-full lg:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#f7e1bc] text-[#090a0f] font-headline-sm text-base font-extrabold rounded-xl hover:bg-[#d49a53] hover:shadow-[0_0_25px_rgba(212,154,83,0.4)] transition-all cursor-pointer"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
              <span>Iniciar con 50% de Anticipo</span>
            </a>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#14151a] border border-[#262933] p-8 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-[#d49a53]/15 text-[#f7e1bc] flex items-center justify-center mb-5">
              <Zap className="w-6 h-6 text-[#d49a53]" />
            </div>
            <h4 className="font-headline-sm text-xl text-white font-bold mb-2">Sprints de 3 a 5 Días</h4>
            <p className="font-body-sm text-xs text-[#a1a1aa] leading-relaxed">
              Sin demoras innecesarias. Nuestra arquitectura optimizada nos permite entregar tu proyecto web funcionando en tiempo récord.
            </p>
          </div>

          <div className="bg-[#14151a] border border-[#262933] p-8 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-[#d49a53]/15 text-[#f7e1bc] flex items-center justify-center mb-5">
              <Code className="w-6 h-6 text-[#d49a53]" />
            </div>
            <h4 className="font-headline-sm text-xl text-white font-bold mb-2">Código Limpio & SEO</h4>
            <p className="font-body-sm text-xs text-[#a1a1aa] leading-relaxed">
              Sitios optimizados para escalar posiciones en Google con tiempos de carga menores a 0.6 segundos en dispositivos móviles.
            </p>
          </div>

          <div className="bg-[#14151a] border border-[#262933] p-8 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-[#d49a53]/15 text-[#f7e1bc] flex items-center justify-center mb-5">
              <Users className="w-6 h-6 text-[#d49a53]" />
            </div>
            <h4 className="font-headline-sm text-xl text-white font-bold mb-2">Soporte Continuo</h4>
            <p className="font-body-sm text-xs text-[#a1a1aa] leading-relaxed">
              Te capacitamos en el uso de tu plataforma y te brindamos asistencia técnica permanente para que nunca te quedes solo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
