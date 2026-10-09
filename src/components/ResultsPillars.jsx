import React, { useEffect, useRef } from 'react';
import { Cpu, Smartphone, Sparkles, Target, Layout, Share2, CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ResultsPillars = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.pillar-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const pillars = [
    {
      icon: Cpu,
      title: 'Optimización de procesos',
      desc: 'Automatización de flujos y herramientas digitales a la medida para reducir tiempos operativos y elevar tu productividad.',
      tag: 'Eficiencia Tech',
      color: '#d49a53',
    },
    {
      icon: Smartphone,
      title: 'Aplicaciones intuitivas',
      desc: 'Desarrollo móvil y web con arquitectura fluida enfocado en la mejor experiencia para el usuario final.',
      tag: 'iOS & Android',
      color: '#f7e1bc',
    },
    {
      icon: Sparkles,
      title: 'Identidad de marca',
      desc: 'Branding memorable, logotipos y lenguaje visual que posicionan a tu negocio por encima de la competencia.',
      tag: 'Branding 360°',
      color: '#d49a53',
    },
    {
      icon: Target,
      title: 'Estrategias Personalizadas',
      desc: 'Planes digitales diseñados según el modelo de negocio, presupuesto y objetivos específicos de tu marca.',
      tag: 'Alta Conversión',
      color: '#f7e1bc',
    },
    {
      icon: Layout,
      title: 'Diseño web atractivo',
      desc: 'Páginas web ultrarrápidas, adaptadas 100% a celulares y listas para vender tus productos y servicios 24/7.',
      tag: 'Web Speed 100%',
      color: '#d49a53',
    },
    {
      icon: Share2,
      title: 'Gestión de redes sociales',
      desc: 'Contenidos estratégicos, campañas en Meta & Google Ads y community management enfocado en captar prospectos.',
      tag: 'Paid Media',
      color: '#f7e1bc',
    },
  ];

  return (
    <section ref={sectionRef} className="w-full bg-[#090a0f] py-24 relative z-10 border-t border-b border-[#262933]" id="resultados">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-label-sm text-xs md:text-sm text-[#f7e1bc] uppercase tracking-widest font-extrabold">
            RESULTADOS QUE TE IMPULSAN
          </span>
          <h2 className="font-headline-lg text-3xl md:text-5xl text-white font-extrabold tracking-tight mt-2">
            Tecnología & Estrategia Digital de Vanguardia
          </h2>
          <p className="font-body-md text-base text-[#a1a1aa] mt-3 leading-relaxed">
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
                className="pillar-card neon-box-hover bg-gradient-to-b from-[#14151a] to-[#0d0e12] border border-[#262933] p-8 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#090a0f] border border-[#d49a53]/40 flex items-center justify-center text-[#d49a53] group-hover:scale-110 group-hover:border-[#f7e1bc] transition-all shadow-[0_0_20px_rgba(212,154,83,0.2)]">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="font-label-sm text-[11px] font-bold text-[#f7e1bc] bg-[#1e2029] px-3 py-1 rounded-full border border-[#d49a53]/30 uppercase">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-headline-sm text-xl text-white font-bold mb-3 group-hover:text-[#f7e1bc] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-body-md text-sm text-[#a1a1aa] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#262933] flex items-center justify-between text-[#d49a53] font-label-sm text-xs">
                  <span className="font-semibold tracking-wide">Estándar Romero Labs</span>
                  <CheckCircle className="w-4 h-4 text-[#f7e1bc]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
