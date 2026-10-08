import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // The timeline that controls the entire scroll sequence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=300%', // Scrolls for 3 screen heights
          scrub: 1, // Smooth scrubbing
          pin: true, // Let GSAP handle the pinning
          pinSpacing: true, // Prevents elements below from shifting up too early
        }
      });

      // 1. Zoom the background image continuously throughout the whole scroll
      tl.to(imageRef.current, {
        scale: 3.5,
        transformOrigin: "center center",
        ease: "power1.inOut",
      }, 0); // Start at time 0

      // 2. Animate Text 1 (Fades in, then fades out)
      tl.to(text1Ref.current, { opacity: 1, y: 0, duration: 0.1 }, 0)
        .to(text1Ref.current, { opacity: 0, y: -50, duration: 0.1 }, 0.25);

      // 3. Animate Text 2 (Fades in, then fades out)
      tl.fromTo(text2Ref.current, 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 0.1 }, 0.35)
        .to(text2Ref.current, { opacity: 0, y: -50, duration: 0.1 }, 0.6);

      // 4. Animate Text 3 (The Main Titles - Fades in and stays)
      tl.fromTo(text3Ref.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.2 }, 0.75);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-[#090a0f] overflow-hidden">
      {/* Container that holds the visual content */}
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        
        {/* The Tunnel Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img 
            ref={imageRef}
            src="/images/hero-pathway.jpg" 
            alt="Digital Pathway" 
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay for better text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#090a0f]/80 via-[#090a0f]/50 to-[#090a0f]/90"></div>
        </div>

        {/* Text 1 */}
        <div ref={text1Ref} className="absolute z-10 text-center px-5 opacity-0 translate-y-12">
          <h2 className="font-headline-md text-3xl md:text-5xl text-white font-bold tracking-tight">
            El ecosistema digital avanza rápido.
          </h2>
        </div>

        {/* Text 2 */}
        <div ref={text2Ref} className="absolute z-10 text-center px-5 opacity-0 translate-y-12">
          <h2 className="font-headline-md text-3xl md:text-5xl text-[#d49a53] font-bold tracking-tight">
            ¿Tu negocio se está quedando atrás?
          </h2>
        </div>

        {/* Text 3 (Main Titles) */}
        <div ref={text3Ref} className="absolute z-10 text-center px-5 opacity-0 flex flex-col items-center">
          {/* Real-time Status Badge */}
          <div className="inline-flex items-center gap-3 px-4.5 py-2 rounded-full bg-[#14151a] border border-[#d49a53]/40 backdrop-blur-xl shadow-[0_0_25px_rgba(212,154,83,0.15)] mb-8">
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

          <h1 className="font-display-hero text-4xl sm:text-5xl md:text-6xl lg:text-[66px] font-extrabold text-white max-w-5xl tracking-tight leading-[1.1] mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f7e1bc] to-[#d49a53] drop-shadow-[0_0_35px_rgba(212,154,83,0.3)] inline-block">
              Tus Clientes Están Buscando En Google.
            </span>
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d49a53] via-[#f7e1bc] to-white drop-shadow-[0_0_35px_rgba(212,154,83,0.3)] inline-block mt-2">
              Hacemos Que Te Compren A Ti.
            </span>
          </h1>

          <p className="font-body-lg text-lg md:text-xl text-[#a1a1aa] max-w-2xl mx-auto mb-6 leading-relaxed">
            Páginas web de alta velocidad, tiendas virtuales y software a la medida diseñados para generar ventas 24/7 directas a tu WhatsApp.
          </p>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-pulse">
          <span className="font-label-sm text-xs text-[#d49a53] tracking-widest uppercase">Haz Scroll para avanzar</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#d49a53] to-transparent"></div>
        </div>

      </div>
    </section>
  );
};
