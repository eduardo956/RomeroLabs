import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const ParallaxBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        // 1. Grid Parallax (slow deep background movement)
        gsap.to('.parallax-grid', {
          yPercent: 30,
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.5,
          },
        });

        // 2. Neon Gold Orbs Parallax
        gsap.to('.parallax-orb-1', {
          y: -180,
          scale: 1.15,
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
          },
        });

        gsap.to('.parallax-orb-2', {
          y: -280,
          scale: 1.25,
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.2,
          },
        });

        gsap.to('.parallax-orb-3', {
          y: -200,
          rotation: 45,
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.8,
          },
        });

        // 3. Geometric Floating Objects
        gsap.to('.parallax-shape-1', {
          y: -350,
          rotation: 180,
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.5,
          },
        });

        gsap.to('.parallax-shape-2', {
          y: -420,
          rotation: -120,
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.8,
          },
        });

        gsap.to('.parallax-shape-3', {
          y: -250,
          rotation: 90,
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.1,
          },
        });
      });

      // Mobile optimized gentle parallax
      mm.add("(max-width: 767px)", () => {
        gsap.to('.parallax-orb-1', {
          y: -60,
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.5,
          },
        });

        gsap.to('.parallax-orb-2', {
          y: -80,
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.5,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Cyber Grid */}
      <div className="parallax-grid absolute -top-24 -left-24 -right-24 -bottom-24 cyber-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,white,transparent_85%)]" />

      {/* Floating Gold Orbs */}
      <div className="parallax-orb-1 absolute top-[10%] left-[-100px] w-[450px] h-[450px] rounded-full bg-[#d49a53]/8 blur-[120px]" />
      <div className="parallax-orb-2 absolute top-[45%] right-[-120px] w-[550px] h-[550px] rounded-full bg-[#f7e1bc]/6 blur-[140px]" />
      <div className="parallax-orb-3 absolute top-[75%] left-[10%] w-[400px] h-[400px] rounded-full bg-[#d49a53]/6 blur-[100px]" />

      {/* Floating 3D Geometric Objects (Gold Themed) */}
      <div className="parallax-shape-1 absolute top-[18%] right-[5%] hidden lg:block opacity-40">
        <div className="w-16 h-16 rounded-2xl border border-[#d49a53]/40 bg-[#14151a]/60 backdrop-blur-md shadow-[0_0_20px_rgba(212,154,83,0.15)] flex items-center justify-center transform rotate-12">
          <span className="text-[#f7e1bc] font-mono text-sm font-bold">&lt;/&gt;</span>
        </div>
      </div>

      <div className="parallax-shape-2 absolute top-[52%] left-[3%] hidden lg:block opacity-35">
        <div className="w-20 h-20 rounded-full border border-[#d49a53]/30 bg-[#14151a]/50 backdrop-blur-md shadow-[0_0_25px_rgba(212,154,83,0.15)] flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-dashed border-[#d49a53] animate-spin" style={{ animationDuration: '12s' }}></div>
        </div>
      </div>

      <div className="parallax-shape-3 absolute top-[80%] right-[4%] hidden lg:block opacity-40">
        <div className="px-4 py-2.5 rounded-xl border border-[#d49a53]/40 bg-[#14151a]/60 backdrop-blur-md shadow-[0_0_20px_rgba(212,154,83,0.15)] flex items-center gap-1.5 transform -rotate-6">
          <Zap className="w-4 h-4 text-[#d49a53] fill-[#d49a53]/20" />
          <span className="text-[#f7e1bc] font-bold text-xs tracking-wider font-mono">24/7</span>
        </div>
      </div>
    </div>
  );
};
