import React, { useEffect, useRef } from 'react';
import { packages } from '../data/packages';
import { CheckCircle2, Zap, ArrowRight } from 'lucide-react';
import { whatsappConfig } from '../config/whatsappConfig';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const PackagesSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        // Staggered vertical depth parallax for packages cards
        const cards = gsap.utils.toArray('.package-card-parallax');
        cards.forEach((card, index) => {
          const depthOffset = (index % 2 === 0 ? 35 : -25);
          gsap.fromTo(
            card,
            { y: depthOffset },
            {
              y: -depthOffset,
              ease: 'none',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.2,
              },
            }
          );
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-28 max-w-[1280px] mx-auto px-5 md:px-12 relative z-10" id="planes">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="font-label-sm text-xs md:text-sm text-[#bffff0] uppercase tracking-widest font-bold">
          PLANES ACCESIBLES SIN LETRAS CHICAS
        </span>
        <h2 className="font-headline-lg text-3xl md:text-5xl text-[#e6edf0] font-extrabold tracking-tight mt-2">
          Inversión Transparente. Pago Único.
        </h2>
        <p className="font-body-md text-base text-[#9cb2ad] mt-3">
          Sin mensualidades forzadas. Entregas ultra-rápidas con arquitectura optimizada para ventas.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch relative">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`package-card-parallax bg-[#0c1315] rounded-2xl p-7 md:p-8 flex flex-col justify-between relative transition-all duration-300 ${
              pkg.isPopular
                ? 'border-2 border-[#00f0d4] shadow-[0_0_35px_rgba(0,240,212,0.25)] z-10'
                : 'border border-[#223334]/60 hover:border-[#223334]'
            }`}
          >
            {pkg.isPopular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#00f0d4] text-[#003b34] font-label-sm text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-[0_0_15px_#00f0d4] flex items-center gap-1 whitespace-nowrap">
                <Zap className="w-3.5 h-3.5" />
                <span>MÁS VENDIDO</span>
              </div>
            )}

            <div>
              <div className="font-label-sm text-[11px] uppercase tracking-wider text-[#627d78] font-bold mb-2">
                {pkg.badge}
              </div>
              <h3 className="font-headline-sm text-2xl text-white font-bold tracking-tight mb-5 leading-tight">
                {pkg.name}
              </h3>

              <div className="mb-5">
                <div className="font-label-sm text-[11px] text-[#627d78] uppercase tracking-wider mb-1">
                  Precio Desde:
                </div>
                <div className="flex items-baseline gap-2">
                  <span
                    className={`font-display-hero text-4xl md:text-[40px] font-black tracking-tight ${
                      pkg.isPopular ? 'text-[#00f0d4]' : 'text-white'
                    }`}
                  >
                    S/ {pkg.price}
                  </span>
                  <span className="font-label-sm text-xs text-[#627d78] font-normal">pago único</span>
                </div>
              </div>

              <p className="font-body-sm text-[13px] text-[#9cb2ad] leading-relaxed mb-6">
                {pkg.subtitle}
              </p>

              <div className="font-label-sm text-[11px] font-bold text-[#627d78] uppercase tracking-wider mb-4">
                ¿QUÉ INCLUYE?
              </div>

              <ul className="flex flex-col gap-3.5 font-body-sm text-[13px] text-[#9cb2ad] mb-8">
                {pkg.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00f0d4] shrink-0 mt-0.5" />
                    <span className="leading-snug">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={`https://wa.me/${whatsappConfig.phoneNumber}?text=${whatsappConfig.formatPackageMessage(
                pkg
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full py-3.5 px-4 rounded-xl font-headline-sm text-sm font-bold text-center transition-all flex items-center justify-center gap-2 ${
                pkg.isPopular
                  ? 'bg-[#00f0d4] hover:bg-[#18ebd0] text-[#003b34] shadow-[0_0_20px_rgba(0,240,212,0.4)]'
                  : 'bg-[#162022] hover:bg-[#1e2628] text-white border border-[#223334]'
              }`}
            >
              <span>{pkg.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center font-label-sm text-[12px] text-[#627d78] tracking-wide select-none">
        * Todos los precios son pagos únicos de desarrollo, no pagas mensualidad a Romero Labs.
      </div>
    </section>
  );
};
