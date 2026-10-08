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
          scrub: 1.5, // Increased from 1 to 1.5 for smoother scrubbing
          pin: true, // Let GSAP handle the pinning
          pinSpacing: true, // Prevents elements below from shifting up too early
          anticipatePin: 1, // Smooths out the initial pin and unpin snap
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

      // 4. Animate Text 3 (The Main Titles - Typewriter effect)
      // Snap the container to visible so characters can begin animating
      tl.to(text3Ref.current, { opacity: 1, duration: 0.01 }, 0.75);
      
      // Typewriter effect: stagger the characters' opacity
      tl.to('.typewriter-char', {
        opacity: 1,
        stagger: 0.003,
        ease: "none",
        duration: 0.01,
      }, 0.75);

      // Fade in the sub-paragraph after typing
      tl.to('.hero-paragraph', {
        opacity: 1,
        y: 0,
        duration: 0.1,
      }, 0.85);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const splitText = (text) => {
    return text.split('').map((char, i) => (
      <span key={i} className="typewriter-char opacity-0 inline-block">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-[#090a0f] overflow-hidden -mt-20">
      {/* Container that holds the visual content */}
      <div className="relative w-full h-full flex flex-col items-center justify-center pt-20">
        
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
          <h1 className="font-display-hero text-4xl sm:text-5xl md:text-6xl lg:text-[66px] font-extrabold text-white max-w-5xl tracking-tight leading-[1.1] mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f7e1bc] to-[#d49a53] drop-shadow-[0_0_35px_rgba(212,154,83,0.3)] inline-block">
              {splitText("Tus Clientes Están Buscando En Google.")}
            </span>
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d49a53] via-[#f7e1bc] to-white drop-shadow-[0_0_35px_rgba(212,154,83,0.3)] inline-block mt-2">
              {splitText("Hacemos Que Te Compren A Ti.")}
            </span>
          </h1>

          <p className="hero-paragraph opacity-0 translate-y-4 font-body-lg text-lg md:text-xl text-[#a1a1aa] max-w-2xl mx-auto mb-6 leading-relaxed">
            Páginas web de alta velocidad, tiendas virtuales y software a la medida diseñados para generar ventas 24/7 directas a tu WhatsApp.
          </p>
        </div>

      </div>
    </section>
  );
};
