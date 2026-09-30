import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

        // 2. Neon Glow Orbs Parallax (medium speed, floating feel)
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

        // 3. Geometric Floating Objects (Faster Parallax for depth perception)
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

      {/* Floating Neon Orbs */}
      <div className="parallax-orb-1 absolute top-[10%] left-[-100px] w-[450px] h-[450px] rounded-full bg-[#00f0d4]/12 blur-[120px]" />
      <div className="parallax-orb-2 absolute top-[45%] right-[-120px] w-[550px] h-[550px] rounded-full bg-[#42e0e5]/10 blur-[140px]" />
      <div className="parallax-orb-3 absolute top-[75%] left-[10%] w-[400px] h-[400px] rounded-full bg-[#00f0d4]/8 blur-[100px]" />

      {/* Floating 3D Geometric Objects (Parallax Decorative Elements) */}
      <div className="parallax-shape-1 absolute top-[18%] right-[5%] hidden lg:block opacity-40">
        <div className="w-16 h-16 rounded-2xl border border-[#00f0d4]/40 bg-[#0e1619]/40 backdrop-blur-md shadow-[0_0_20px_rgba(0,240,212,0.15)] flex items-center justify-center transform rotate-12">
          <span className="text-[#00f0d4] font-mono text-sm font-bold">&lt;/&gt;</span>
        </div>
      </div>

      <div className="parallax-shape-2 absolute top-[52%] left-[3%] hidden lg:block opacity-35">
        <div className="w-20 h-20 rounded-full border border-[#42e0e5]/30 bg-[#090e10]/50 backdrop-blur-md shadow-[0_0_25px_rgba(66,224,229,0.15)] flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-dashed border-[#00f0d4] animate-spin" style={{ animationDuration: '12s' }}></div>
        </div>
      </div>

      <div className="parallax-shape-3 absolute top-[80%] right-[4%] hidden lg:block opacity-30">
        <div className="w-14 h-14 rounded-xl border border-[#00f0d4]/30 bg-[#0e1619]/30 backdrop-blur-md shadow-[0_0_15px_rgba(0,240,212,0.1)] flex items-center justify-center transform -rotate-6">
          <span className="text-[#00f0d4] font-bold text-xs">⚡ 24/7</span>
        </div>
      </div>
    </div>
  );
};
