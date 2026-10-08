import React, { useState } from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { Send, CheckCircle2, Building2, User, Mail, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { whatsappConfig } from '../config/whatsappConfig';

export const ContactB2B = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    services: {
      software: true,
      web: true,
      mobile: false,
      branding: false,
      paidMedia: false,
    }
  });

  const handleCheckboxChange = (serviceKey) => {
    setFormData((prev) => ({
      ...prev,
      services: {
        ...prev.services,
        [serviceKey]: !prev.services[serviceKey],
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedServicesList = Object.entries(formData.services)
      .filter(([_, active]) => active)
      .map(([key]) => {
        const labels = {
          software: 'Desarrollo de Software',
          web: 'Diseño Web',
          mobile: 'Desarrollo Móvil',
          branding: 'Branding & Identidad',
          paidMedia: 'Paid Media & SEO',
        };
        return labels[key] || key;
      })
      .join(', ');

    const textMsg = `Hola Romero Labs! Mi nombre es ${formData.name || 'Cliente'}${
      formData.company ? ` de ${formData.company}` : ''
    }.
Servicios de interés: ${selectedServicesList || 'Consulta general'}.
Correo: ${formData.email || 'No especificado'} | Teléfono: ${formData.phone || 'No especificado'}
Mensaje: ${formData.message || 'Deseo cotizar un proyecto digital.'}`;

    window.open(
      `https://wa.me/${whatsappConfig.phoneNumber}?text=${encodeURIComponent(textMsg)}`,
      '_blank'
    );
  };

  return (
    <section className="w-full bg-[#090a0f] py-24 border-t border-[#262933] relative" id="contacto">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Impact Stats */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14151a] border border-[#d49a53]/40 text-[#f7e1bc] font-label-sm text-xs uppercase mb-4">
                <Sparkles className="w-4 h-4 text-[#d49a53]" /> Innovación & Estrategia Digital
              </div>
              <h2 className="font-headline-lg text-3xl md:text-5xl text-white font-extrabold tracking-tight leading-tight mb-4">
                ¿Buscas llevar tu presencia en línea al siguiente nivel?
              </h2>
              <p className="font-body-md text-base text-[#a1a1aa] leading-relaxed mb-8">
                En <strong>Romero Labs</strong>, creamos experiencias digitales impactantes: desde páginas web de alta conversión y aplicaciones móviles hasta estrategias de marketing y branding personalizadas. ¡Contáctanos y descubre cómo podemos ayudarte a destacar en la web!
              </p>
            </div>

            {/* Stats Counter Cards */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#262933]">
              <div className="bg-[#14151a] border border-[#262933] hover:border-[#d49a53]/40 transition-colors p-5 rounded-2xl text-center shadow-lg">
                <div className="font-display-hero text-4xl md:text-5xl font-black text-[#f7e1bc] mb-1">
                  +100
                </div>
                <div className="font-label-sm text-xs text-[#d49a53] uppercase tracking-wider font-bold">
                  Clientes Satisfechos
                </div>
              </div>

              <div className="bg-[#14151a] border border-[#262933] hover:border-[#d49a53]/40 transition-colors p-5 rounded-2xl text-center shadow-lg">
                <div className="font-display-hero text-4xl md:text-5xl font-black text-[#f7e1bc] mb-1">
                  +150
                </div>
                <div className="font-label-sm text-xs text-[#d49a53] uppercase tracking-wider font-bold">
                  Proyectos Exitosos
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quote & Contact Form */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="bg-gradient-to-b from-[#14151a] to-[#0d0e12] border-2 border-[#d49a53]/30 p-8 md:p-12 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col items-center text-center gap-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[#d49a53]/5 blur-[80px] pointer-events-none"></div>
              
              <div className="w-20 h-20 bg-[#090a0f] rounded-full flex items-center justify-center border border-[#d49a53]/40 shadow-[0_0_30px_rgba(212,154,83,0.2)] z-10">
                <WhatsAppIcon className="w-10 h-10 fill-[#d49a53]" />
              </div>
              
              <div className="z-10">
                <h3 className="font-headline-md text-3xl text-white font-bold tracking-tight mb-3">
                  Hablemos de tu proyecto
                </h3>
                <p className="font-body-md text-[#a1a1aa] max-w-md mx-auto">
                  La vía más rápida para cotizar o resolver tus dudas. Nuestro equipo de expertos está listo para atenderte al instante.
                </p>
              </div>

              <a
                href={`https://wa.me/${whatsappConfig.phoneNumber}?text=${encodeURIComponent('Hola Romero Labs! Vengo de la página web y deseo cotizar un proyecto digital.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-5 bg-gradient-to-r from-[#d49a53] via-[#e5b878] to-[#f7e1bc] text-[#090a0f] font-headline-sm text-lg font-extrabold rounded-xl hover:shadow-[0_0_30px_rgba(212,154,83,0.4)] transition-all flex items-center justify-center gap-3 cursor-pointer transform hover:-translate-y-1 z-10"
              >
                <WhatsAppIcon className="w-6 h-6 fill-current" />
                <span>Iniciar Chat en WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
