import React from 'react';
import { Cpu, Smartphone, Sparkles, Target, Layout, Share2, CheckCircle } from 'lucide-react';

export const ResultsPillars = () => {
  const pillars = [
    {
      icon: Cpu,
      title: 'Optimización de procesos',
      desc: 'Automatización de flujos y herramientas digitales a la medida para reducir tiempos operativos y elevar tu productividad.',
      tag: 'Eficiencia Tech',
      color: '#00f0d4',
    },
    {
      icon: Smartphone,
      title: 'Aplicaciones intuitivas',
      desc: 'Desarrollo móvil y web con arquitectura fluida enfocado en la mejor experiencia para el usuario final.',
      tag: 'iOS & Android',
      color: '#42e0e5',
    },
    {
      icon: Sparkles,
      title: 'Identidad de marca',
      desc: 'Branding memorable, logotipos y lenguaje visual que posicionan a tu negocio por encima de la competencia.',
      tag: 'Branding 360°',
      color: '#00f0d4',
    },
    {
      icon: Target,
      title: 'Estrategias Personalizadas',
      desc: 'Planes digitales diseñados según el modelo de negocio, presupuesto y objetivos específicos de tu marca.',
      tag: 'Alta Conversión',
      color: '#42e0e5',
    },
    {
      icon: Layout,
      title: 'Diseño web atractivo',
      desc: 'Páginas web ultrarrápidas, adaptadas 100% a celulares y listas para vender tus productos y servicios 24/7.',
      tag: 'Web Speed 100%',
      color: '#00f0d4',
    },
    {
      icon: Share2,
      title: 'Gestión de redes sociales',
      desc: 'Contenidos estratégicos, campañas en Meta & Google Ads y community management enfocado en captar prospectos.',
      tag: 'Paid Media',
      color: '#42e0e5',
    },
  ];

  return (
    <section className="w-full bg-[#070a0b] py-24 relative z-10 border-t border-b border-[#223334]/30" id="resultados">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-label-sm text-xs md:text-sm text-[#bffff0] uppercase tracking-widest font-extrabold">
            RESULTADOS QUE TE IMPULSAN
          </span>
          <h2 className="font-headline-lg text-3xl md:text-5xl text-white font-extrabold tracking-tight mt-2">
            Tecnología & Estrategia Digital de Vanguardia
          </h2>
          <p className="font-body-md text-base text-[#9cb2ad] mt-3 leading-relaxed">
            Transformamos tu empresa con soluciones digitales hechas a la medida, acelerando tu presencia en internet y multiplicando tus ventas.
          </p>
        </div>

        {/* 6 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="neon-box-hover bg-gradient-to-b from-[#0e1619] to-[#090e10] border border-[#223334]/60 p-8 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#162022] border border-[#00f0d4]/30 flex items-center justify-center text-[#00f0d4] group-hover:scale-110 group-hover:border-[#00f0d4] transition-all shadow-[0_0_20px_rgba(0,240,212,0.15)]">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="font-label-sm text-[11px] font-bold text-[#00f0d4] bg-[#00f0d4]/10 px-3 py-1 rounded-full border border-[#00f0d4]/20 uppercase">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-headline-sm text-xl text-white font-bold mb-3 group-hover:text-[#00f0d4] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-body-md text-sm text-[#9cb2ad] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#223334]/40 flex items-center justify-between text-[#00f0d4] font-label-sm text-xs">
                  <span className="font-semibold tracking-wide">Estándar Romero Labs</span>
                  <CheckCircle className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
