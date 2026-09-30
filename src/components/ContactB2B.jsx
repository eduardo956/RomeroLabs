import React from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { Headset } from 'lucide-react';
import { whatsappConfig } from '../config/whatsappConfig';

export const ContactB2B = () => {
  return (
    <section className="w-full bg-[#050708] py-20 border-t border-b border-[#223334]/30">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        <div className="bg-gradient-to-r from-[#0c1618] via-[#091012] to-[#0c1618] border-2 border-[#00f0d4]/30 p-8 md:p-12 rounded-3xl text-center max-w-3xl mx-auto shadow-[0_0_40px_rgba(0,240,212,0.12)]">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00f0d4]/15 border border-[#00f0d4]/30 text-[#00f0d4] font-label-sm text-xs uppercase mb-4">
            <Headset className="w-4 h-4" /> Asesoría Directa 1 a 1
          </div>
          <h2 className="font-headline-md text-2xl md:text-4xl text-white font-extrabold tracking-tight mb-3">
            Atención Inmediata por WhatsApp
          </h2>
          <p className="font-body-md text-sm md:text-base text-[#9cb2ad] max-w-xl mx-auto mb-8 leading-relaxed">
            ¿Tienes dudas sobre qué plan elegir para tu tipo de negocio? Escríbenos directamente y te asesoramos sin ningún compromiso.
          </p>
          <a
            href={`https://wa.me/${whatsappConfig.phoneNumber}?text=${encodeURIComponent(
              whatsappConfig.defaultMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#00f0d4] hover:bg-[#18ebd0] text-[#003b34] font-label-md text-sm md:text-base font-extrabold rounded-xl transition-all shadow-[0_0_20px_rgba(0,240,212,0.35)] hover:scale-105"
          >
            <WhatsAppIcon className="w-5 h-5 fill-current" />
            <span>Hablar con un Asesor en WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
