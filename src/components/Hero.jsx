import React, { useEffect, useRef } from 'react';
import { Rocket, ArrowRight, Check, Lock, Smartphone, Store, ExternalLink, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { HeroTurntable } from './HeroTurntable';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo('.parallax-hero-badge', 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      )
      .fromTo('.parallax-hero-title span.text-transparent', 
        { y: 40, opacity: 0, rotationX: -20 }, 
        { y: 0, opacity: 1, rotationX: 0, duration: 1, stagger: 0.1, ease: 'back.out(1.2)' },
        "-=0.5"
      )
      .fromTo('.parallax-hero-subtitle',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
        "-=0.6"
      );

      gsap.to('.parallax-hero-title', {
        y: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.7,
        },
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative w-full max-w-[1280px] mx-auto px-5 md:px-12 pt-12 md:pt-16 pb-16 flex flex-col items-center text-center">
      {/* Real-time Status Badge */}
      <div className="parallax-hero-badge inline-flex items-center gap-3 px-4.5 py-2 rounded-full bg-[#14151a] border border-[#d49a53]/40 backdrop-blur-xl shadow-[0_0_25px_rgba(212,154,83,0.15)] mb-8">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d49a53] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#f7e1bc]"></span>
        </span>
        <span className="font-label-sm text-xs md:text-sm text-[#f7e1bc] uppercase tracking-widest font-extrabold flex items-center gap-2">
          <span>⚡ ROMERO LABS</span>
          <span className="text-[#3b2d23]">•</span>
          <span>SOFTWARE & DESARROLLO WEB</span>
        </span>
      </div>

      {/* Main Punchy Headline (Neuroscience Hook) */}
      <h1 className="parallax-hero-title font-display-hero text-4xl sm:text-5xl md:text-6xl lg:text-[66px] font-extrabold text-white max-w-5xl tracking-tight leading-[1.1] mb-6" style={{ perspective: '1000px' }}>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f7e1bc] to-[#d49a53] drop-shadow-[0_0_35px_rgba(212,154,83,0.3)] inline-block">
          Tus Clientes Están Buscando En Google.
        </span>
        <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d49a53] via-[#f7e1bc] to-white drop-shadow-[0_0_35px_rgba(212,154,83,0.3)] inline-block">
          Hacemos Que Te Compren A Ti.
        </span>
      </h1>

      {/* Subtitle */}
      <p className="parallax-hero-subtitle font-body-lg text-lg md:text-xl text-[#a1a1aa] max-w-2xl mx-auto mb-6 leading-relaxed">
        Páginas web de alta velocidad, tiendas virtuales y software a la medida diseñados para generar ventas 24/7 directas a tu WhatsApp.
      </p>

      {/* 3D Audiovisual Turntable Scrollytelling Stage */}
      <div className="w-full relative z-10 flex flex-col items-center">
        <HeroTurntable />
      </div>
    </section>
  );
};
