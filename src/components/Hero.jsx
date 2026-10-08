import React, { useEffect, useRef } from 'react';
import { Rocket, ArrowRight, Check, Lock, Smartphone, Store, ExternalLink } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const heroRef = useRef(null);
  const mockupRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        // Hero Elements Scroll Parallax Layers
        gsap.to('.parallax-hero-badge', {
          y: -25,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.5,
          },
        });

        gsap.to('.parallax-hero-title', {
          y: -35,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.7,
          },
        });

        gsap.to('.parallax-hero-showcase', {
          y: -60,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });

        // Floating WhatsApp Order Alert (Faster Layer for depth)
        gsap.to('.parallax-hero-alert', {
          y: -110,
          scale: 1.03,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.4,
          },
        });
      });

      // Mouse Parallax / 3D Tilt on Desktop Mockup
      const mockup = mockupRef.current;
      if (mockup && window.innerWidth >= 1024) {
        const handleMouseMove = (e) => {
          const rect = mockup.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;

          gsap.to(mockup, {
            rotateY: x * 0.02,
            rotateX: -y * 0.02,
            duration: 0.6,
            ease: 'power2.out',
            transformPerspective: 1000,
          });
        };

        const handleMouseLeave = () => {
          gsap.to(mockup, {
            rotateY: 0,
            rotateX: 0,
            duration: 0.8,
            ease: 'power2.out',
          });
        };

        const container = mockup.parentElement;
        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          container.removeEventListener('mousemove', handleMouseMove);
          container.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative w-full max-w-[1280px] mx-auto px-5 md:px-12 pt-12 md:pt-16 pb-16 flex flex-col items-center text-center">
      {/* Real-time Status Badge with Romero Labs Identity */}
      <div className="parallax-hero-badge inline-flex items-center gap-3 px-4.5 py-2 rounded-full bg-[#11191c]/90 border border-[#00f0d4]/40 backdrop-blur-xl shadow-[0_0_20px_rgba(0,240,212,0.2)] mb-8">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0d4] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00f0d4]"></span>
        </span>
        <span className="font-label-sm text-xs md:text-sm text-[#bffff0] uppercase tracking-widest font-bold flex items-center gap-2">
          <span>⚡ ROMERO LABS</span>
          <span className="text-[#627d78]">•</span>
          <span>PÁGINAS WEB QUE VENDEN 24/7</span>
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="parallax-hero-title font-display-hero text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold text-[#e6edf0] max-w-5xl tracking-tight leading-[1.12] mb-6">
        Tu Negocio Necesita Clientes, No Solo Seguidores. <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#bffff0] to-[#00f0d4] drop-shadow-[0_0_35px_rgba(0,240,212,0.35)]">
          Creamos Páginas Web Que Venden.
        </span>
      </h1>

      {/* Subtitle */}
      <p className="font-body-lg text-lg md:text-xl text-[#9cb2ad] max-w-2xl mx-auto mb-10 leading-relaxed">
        Te entregamos tu página web lista en menos de 5 días con botón directo a tu WhatsApp y optimizada para aparecer en Google cuando busquen lo que vendes.
      </p>

      {/* Conversion CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mb-12 z-10">
        <a
          href="#planes"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4.5 bg-gradient-to-r from-[#00f0d4] via-[#18ebd0] to-[#42e0e5] text-[#003b34] font-headline-sm text-base md:text-lg font-extrabold rounded-xl transition-all transform hover:-translate-y-1 hover:brightness-110 animate-cta-glow cursor-pointer"
        >
          <Rocket className="w-5 h-5" />
          <span>Elegir Mi Plan Web (Desde S/ 300)</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
        <a
          href="https://poc-romeagency.freedev.app/#"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4.5 bg-[#162022] hover:bg-[#1e2628] text-white font-headline-sm text-base md:text-lg font-bold rounded-xl border border-[#223334] hover:border-[#00f0d4] transition-all transform hover:-translate-y-0.5"
        >
          <ExternalLink className="w-5 h-5 text-[#00f0d4]" />
          <span>Ver Demo Web Informativa</span>
        </a>
      </div>

      {/* Micro Trust Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mb-14">
        <div className="flex items-center justify-center gap-2.5 bg-[#0e1517]/70 border border-[#223334]/40 px-4 py-3.5 rounded-xl backdrop-blur-sm">
          <div className="w-5 h-5 rounded-full bg-[#00f0d4] text-[#003b34] flex items-center justify-center shadow-[0_0_8px_#00f0d4] shrink-0">
            <Check className="w-3.5 h-3.5 font-bold" />
          </div>
          <span className="font-label-sm text-xs md:text-sm text-[#e6edf0] font-medium">Pago 50% al inicio y 50% conforme</span>
        </div>
        <div className="flex items-center justify-center gap-2.5 bg-[#0e1517]/70 border border-[#223334]/40 px-4 py-3.5 rounded-lg backdrop-blur-sm">
          <div className="w-5 h-5 rounded-full bg-[#00f0d4] text-[#003b34] flex items-center justify-center shadow-[0_0_8px_#00f0d4] shrink-0">
            <Check className="w-3.5 h-3.5 font-bold" />
          </div>
          <span className="font-label-sm text-xs md:text-sm text-[#e6edf0] font-medium">Lista en 3 a 5 Días</span>
        </div>
        <div className="flex items-center justify-center gap-2.5 bg-[#0e1517]/70 border border-[#223334]/40 px-4 py-3.5 rounded-lg backdrop-blur-sm">
          <div className="w-5 h-5 rounded-full bg-[#00f0d4] text-[#003b34] flex items-center justify-center shadow-[0_0_8px_#00f0d4] shrink-0">
            <Check className="w-3.5 h-3.5 font-bold" />
          </div>
          <span className="font-label-sm text-xs md:text-sm text-[#e6edf0] font-medium">100% Adaptada a Celulares</span>
        </div>
      </div>

      {/* High-Tech Desktop Showcase Container with Parallax & 3D Tilt */}
      <div id="showcase" className="parallax-hero-showcase w-full max-w-5xl relative group perspective-1000">
        {/* Glow backdrop */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#00f0d4]/20 via-[#42e0e5]/15 to-[#00f0d4]/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity"></div>
        
        <div
          ref={mockupRef}
          className="relative w-full rounded-2xl bg-[#090e10] border border-[#00f0d4]/30 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden transition-transform ease-out"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Top Browser Bar */}
          <div className="h-11 bg-[#0e1619] border-b border-[#223334]/40 px-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ffb4ab]/70"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/70"></span>
              <span className="w-3 h-3 rounded-full bg-[#00f0d4]"></span>
            </div>
            <div className="bg-[#060a0b] border border-[#223334]/40 px-6 py-1 rounded-full text-[#9cb2ad] text-label-sm text-xs flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-[#00f0d4]" />
              <span>https://romerolabs.pe/clientes/tienda-demo-online</span>
            </div>
            <div className="flex items-center gap-2 text-[#627d78]">
              <Smartphone className="w-4 h-4" />
              <span className="font-label-sm text-[11px] text-[#00f0d4] font-semibold">100% Core Vitals</span>
            </div>
          </div>

          {/* Desktop Platform Content */}
          <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left bg-gradient-to-br from-[#0a1113] via-[#090d0f] to-[#070b0c]">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#00f0d4]/15 border border-[#00f0d4]/30 text-[#00f0d4] font-label-sm text-xs mb-4">
                <span className="w-2 h-2 rounded-full bg-[#00f0d4] animate-ping"></span>
                <span>ARQUITECTURA DE PEDIDOS DIRECTOS A WHATSAPP</span>
              </div>
              <h2 className="font-headline-md text-2xl md:text-3xl text-white font-bold leading-snug mb-3">
                Tu tienda digital vendiendo 24/7 sin comisiones abusivas
              </h2>
              <p className="font-body-md text-sm md:text-base text-[#9cb2ad] mb-6 leading-relaxed">
                Tus clientes seleccionan el producto, hacen clic en comprar y recibes en tu celular el pedido listo con nombre, dirección y comprobante de pago por Yape o Plin.
              </p>
              
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#223334]/40">
                <div>
                  <div className="font-display-hero text-2xl md:text-3xl font-extrabold text-[#00f0d4]">+320%</div>
                  <div className="font-label-sm text-xs text-[#627d78]">Consultas WhatsApp</div>
                </div>
                <div>
                  <div className="font-display-hero text-2xl md:text-3xl font-extrabold text-[#42e0e5]">&lt; 0.6s</div>
                  <div className="font-label-sm text-xs text-[#627d78]">Velocidad Carga</div>
                </div>
                <div>
                  <div className="font-display-hero text-2xl md:text-3xl font-extrabold text-white">0%</div>
                  <div className="font-label-sm text-xs text-[#627d78]">Comisión Ventas</div>
                </div>
              </div>
            </div>

            {/* Integrated Card Showcase with Embedded Real-time Order Alert */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="w-full max-w-sm rounded-xl bg-[#0e1517] border border-[#223334]/60 p-4 shadow-xl relative">
                <div className="flex items-center justify-between pb-3 border-b border-[#223334]/40 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#00f0d4]/20 text-[#00f0d4] flex items-center justify-center">
                      <Store className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-label-md text-xs font-bold text-white">Boutique Lima Premium</div>
                      <div className="font-label-sm text-[10px] text-[#00f0d4]">● Pedidos Abiertos</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-label-sm bg-[#00f0d4]/20 text-[#00f0d4] font-bold">Catálogo 2024</span>
                </div>

                <div className="h-36 rounded-lg bg-[#162022] overflow-hidden relative mb-3">
                  <img
                    src="/images/star-product.jpg"
                    alt="Producto Estrella"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded font-label-sm text-xs text-[#00f0d4] font-bold">
                    S/ 180.00
                  </div>
                </div>

                <div className="w-full py-2.5 bg-gradient-to-r from-[#00f0d4] to-[#42e0e5] text-[#003b34] rounded-lg font-label-md text-xs font-bold flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(0,240,212,0.3)] mb-3">
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Pedir directo por WhatsApp</span>
                </div>

                {/* Embedded Inline WhatsApp Sales Toast (Parallax Floating layer) */}
                <div className="parallax-hero-alert bg-[#162022]/95 border border-[#00f0d4]/50 p-3 rounded-xl shadow-[0_10px_30px_rgba(0,240,212,0.2)] flex items-start gap-2.5 text-left transform transition-transform">
                  <div className="w-7 h-7 rounded-full bg-emerald-500 text-black flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_10px_rgba(16,185,129,0.5)]">
                    <WhatsAppIcon className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <div className="font-label-sm text-[11px] font-bold text-white flex items-center gap-1">
                      ¡Nueva venta recibida! <span className="text-[#00f0d4]">+S/ 180</span>
                    </div>
                    <div className="font-body-sm text-[10px] text-[#9cb2ad] leading-tight mt-0.5">
                      "Hola, quiero confirmar el pedido del catálogo. Ya transferí por Yape..."
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
