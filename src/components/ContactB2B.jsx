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
    <section className="w-full bg-[#140a06] py-24 border-t border-b border-[#3d2314]/60 relative" id="contacto">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Impact Stats */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3d2314] border border-[#d49a53]/40 text-[#f7e1bc] font-label-sm text-xs uppercase mb-4">
                <Sparkles className="w-4 h-4 text-[#d49a53]" /> Innovación & Estrategia Digital
              </div>
              <h2 className="font-headline-lg text-3xl md:text-5xl text-white font-extrabold tracking-tight leading-tight mb-4">
                ¿Buscas llevar tu presencia en línea al siguiente nivel?
              </h2>
              <p className="font-body-md text-base text-[#d6c4b2] leading-relaxed mb-8">
                En <strong>Romero Labs</strong>, creamos experiencias digitales impactantes: desde páginas web de alta conversión y aplicaciones móviles hasta estrategias de marketing y branding personalizadas. ¡Contáctanos y descubre cómo podemos ayudarte a destacar en la web!
              </p>
            </div>

            {/* Stats Counter Cards */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#4a2c1a]/50">
              <div className="bg-[#27170e] border border-[#d49a53]/40 p-5 rounded-2xl text-center shadow-[0_0_20px_rgba(212,154,83,0.15)]">
                <div className="font-display-hero text-4xl md:text-5xl font-black text-[#f7e1bc] mb-1">
                  +100
                </div>
                <div className="font-label-sm text-xs text-[#d49a53] uppercase tracking-wider font-bold">
                  Clientes Satisfechos
                </div>
              </div>

              <div className="bg-[#27170e] border border-[#d49a53]/40 p-5 rounded-2xl text-center shadow-[0_0_20px_rgba(212,154,83,0.15)]">
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
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-gradient-to-b from-[#27170e] to-[#1d1009] border-2 border-[#d49a53]/50 p-8 md:p-10 rounded-3xl shadow-[0_0_50px_rgba(212,154,83,0.2)] flex flex-col gap-6"
            >
              <div className="border-b border-[#4a2c1a]/60 pb-4">
                <h3 className="font-headline-md text-2xl text-white font-bold tracking-tight">
                  Cuéntanos tu proyecto
                </h3>
                <p className="font-body-sm text-xs text-[#d6c4b2] mt-1">
                  Completa tus datos y selecciona los servicios que necesitas. Te responderemos al instante.
                </p>
              </div>

              {/* Input Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-sm text-xs text-[#faf0dc] font-semibold flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#d49a53]" /> Nombres *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre completo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#140a06] border border-[#4a2c1a] text-white font-body-sm text-sm focus:outline-none focus:border-[#d49a53] transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-label-sm text-xs text-[#faf0dc] font-semibold flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-[#d49a53]" /> Empresa / Marca
                  </label>
                  <input
                    type="text"
                    placeholder="Nombre de tu empresa"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#140a06] border border-[#4a2c1a] text-white font-body-sm text-sm focus:outline-none focus:border-[#d49a53] transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-label-sm text-xs text-[#faf0dc] font-semibold flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#d49a53]" /> Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ejemplo@tuempresa.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#140a06] border border-[#4a2c1a] text-white font-body-sm text-sm focus:outline-none focus:border-[#d49a53] transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-label-sm text-xs text-[#faf0dc] font-semibold flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#d49a53]" /> Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+51 999 999 999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#140a06] border border-[#4a2c1a] text-white font-body-sm text-sm focus:outline-none focus:border-[#d49a53] transition-colors"
                  />
                </div>
              </div>

              {/* Service Selection Checkboxes */}
              <div>
                <label className="font-label-sm text-xs text-[#faf0dc] font-semibold mb-2.5 block">
                  Servicios de Interés:
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    { key: 'software', label: 'Desarrollo de Software' },
                    { key: 'web', label: 'Diseño Web' },
                    { key: 'mobile', label: 'Desarrollo Móvil' },
                    { key: 'branding', label: 'Branding' },
                    { key: 'paidMedia', label: 'Paid Media & SEO' },
                  ].map((srv) => (
                    <button
                      type="button"
                      key={srv.key}
                      onClick={() => handleCheckboxChange(srv.key)}
                      className={`px-4 py-2 rounded-xl text-xs font-label-md font-bold transition-all flex items-center gap-1.5 border ${
                        formData.services[srv.key]
                          ? 'bg-[#d49a53]/25 border-[#d49a53] text-[#f7e1bc] shadow-[0_0_10px_rgba(212,154,83,0.3)]'
                          : 'bg-[#140a06] border-[#4a2c1a] text-[#d6c4b2] hover:text-white'
                      }`}
                    >
                      <CheckCircle2
                        className={`w-3.5 h-3.5 ${
                          formData.services[srv.key] ? 'text-[#f7e1bc]' : 'opacity-40'
                        }`}
                      />
                      <span>{srv.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Textarea Message */}
              <div className="flex flex-col gap-1.5">
                <label className="font-label-sm text-xs text-[#faf0dc] font-semibold flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#d49a53]" /> Cuéntanos tu idea
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe brevemente los requerimientos de tu proyecto..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#140a06] border border-[#4a2c1a] text-white font-body-sm text-sm focus:outline-none focus:border-[#d49a53] transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#d49a53] via-[#e5b878] to-[#f7e1bc] text-[#140a06] font-headline-sm text-base font-extrabold rounded-xl hover:shadow-[0_0_30px_rgba(212,154,83,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current" />
                <span>Solicitar Cotización por WhatsApp &gt;</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
