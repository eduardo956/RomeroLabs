import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Monitor, Smartphone } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Somanos",
    category: "E-Commerce & Branding",
    url: "https://somanos.com.pe/",
    description: "Plataforma de comercio electrónico con un diseño premium, optimizado para conversiones y velocidad de carga excepcional."
  },
  {
    id: 2,
    title: "Romina Portafolio",
    category: "Portafolio Personal",
    url: "https://portafolio-romina.vercel.app/",
    description: "Diseño minimalista y elegante para destacar proyectos profesionales, enfocado en una experiencia de usuario fluida y visual."
  }
];

const DesktopIframe = ({ url }) => {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setScale(entry.contentRect.width / 1280);
      }
    });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full relative aspect-[16/10] bg-[#090a0f] overflow-hidden group rounded-t-lg md:rounded-t-xl cursor-pointer">
      <div className="absolute inset-0 bg-[#090a0f] flex items-center justify-center z-0">
        <span className="w-8 h-8 border-2 border-[#d49a53] border-t-transparent rounded-full animate-spin"></span>
      </div>
      <div 
        className="absolute top-0 left-0 origin-top-left w-[1280px] h-[800px] z-10"
        style={{ transform: `scale(${scale})` }}
      >
        <iframe 
          src={url} 
          className="w-full h-full border-0 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-1000 bg-white" 
          scrolling="yes" 
          title="Desktop view"
        />
      </div>
    </div>
  );
};

const MobileIframe = ({ url }) => {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setScale(entry.contentRect.width / 375);
      }
    });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full relative aspect-[9/19] bg-[#090a0f] overflow-hidden group rounded-[20px] md:rounded-[26px] cursor-pointer">
      <div className="absolute inset-0 bg-[#090a0f] flex items-center justify-center z-0">
        <span className="w-5 h-5 border-2 border-[#d49a53] border-t-transparent rounded-full animate-spin"></span>
      </div>
      <div 
        className="absolute top-0 left-0 origin-top-left w-[375px] h-[792px] z-10"
        style={{ transform: `scale(${scale})` }}
      >
        <iframe 
          src={url} 
          className="w-full h-full border-0 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-1000 bg-white" 
          scrolling="yes" 
          title="Mobile view"
        />
      </div>
    </div>
  );
};

export const Portfolio = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.portfolio-card', {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      });

      // Hover animation for the mockups
      gsap.utils.toArray('.mockup-container').forEach(container => {
        const laptop = container.querySelector('.laptop-mockup');
        const mobile = container.querySelector('.mobile-mockup');

        container.addEventListener('mouseenter', () => {
          gsap.to(laptop, { rotateY: 0, rotateX: 0, scale: 1.02, duration: 0.6, ease: 'power2.out' });
          gsap.to(mobile, { y: -15, rotateY: 0, rotateX: 0, scale: 1.05, duration: 0.6, ease: 'power2.out' });
        });

        container.addEventListener('mouseleave', () => {
          gsap.to(laptop, { rotateY: -5, rotateX: 5, scale: 1, duration: 0.8, ease: 'power2.out' });
          gsap.to(mobile, { y: 0, rotateY: 10, rotateX: 5, scale: 1, duration: 0.8, ease: 'power2.out' });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="portafolio" className="w-full py-24 bg-[#090a0f] relative border-t border-[#262933] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#d49a53]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#f7e1bc]/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-[1280px] mx-auto px-5 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#d49a53]/15 border border-[#d49a53]/30 text-[#f7e1bc] font-label-sm text-xs mb-4">
            <span className="w-2 h-2 rounded-full bg-[#d49a53] animate-ping"></span>
            <span>NUESTRO TRABAJO</span>
          </div>
          <h2 className="font-headline-lg text-4xl md:text-5xl text-white font-extrabold tracking-tight mb-4">
            Proyectos Destacados
          </h2>
          <p className="font-body-md text-base md:text-lg text-[#a1a1aa] max-w-2xl mx-auto">
            Explora algunos de los últimos proyectos que hemos desarrollado con nuestra arquitectura de ventas y diseño de alto impacto.
          </p>
        </div>

        <div className="flex flex-col gap-28">
          {projects.map((project, index) => (
            <div key={project.id} className={`portfolio-card flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Mockups Container */}
              <div className="mockup-container w-full lg:w-[55%] relative perspective-1000">
                {/* Laptop Mockup */}
                <div 
                  className="laptop-mockup relative w-full max-w-[750px] mx-auto z-10 transform-gpu"
                  style={{ transform: 'rotateY(-5deg) rotateX(5deg)' }}
                >
                  <div className="w-full bg-[#14151a] rounded-t-xl md:rounded-t-2xl p-2 md:p-3 pb-0 border border-[#262933] border-b-0 shadow-2xl">
                    <DesktopIframe url={project.url} />
                  </div>
                  <div className="w-full h-4 md:h-6 bg-[#1f2029] rounded-b-xl md:rounded-b-2xl relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#262933] border-t-0">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-1 md:h-1.5 bg-[#090a0f] rounded-b-md"></div>
                  </div>
                </div>

                {/* Mobile Mockup - Overlapping */}
                <div 
                  className="mobile-mockup absolute -bottom-10 -right-4 lg:-right-12 w-28 md:w-40 lg:w-48 z-20 transform-gpu"
                  style={{ transform: 'rotateY(10deg) rotateX(5deg)' }}
                >
                  <div className="w-full bg-[#1f2029] rounded-[24px] md:rounded-[32px] p-1.5 md:p-2 border-2 border-[#262933] shadow-[0_20px_40px_rgba(0,0,0,0.6)] relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-4 bg-[#1f2029] rounded-b-xl md:rounded-b-2xl z-30 flex justify-center pt-1">
                      <div className="w-8 h-1 rounded-full bg-[#090a0f]"></div>
                    </div>
                    <MobileIframe url={project.url} />
                  </div>
                </div>
              </div>

              {/* Info Container */}
              <div className="w-full lg:w-[45%] flex flex-col justify-center text-left">
                <div className="font-label-sm text-xs font-bold text-[#d49a53] tracking-widest uppercase mb-3">
                  {project.category}
                </div>
                <h3 className="font-headline-md text-3xl md:text-4xl lg:text-5xl text-white font-extrabold mb-5 leading-tight">
                  {project.title}
                </h3>
                <p className="font-body-md text-[#a1a1aa] text-base md:text-lg mb-8 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#d49a53] to-[#f7e1bc] hover:brightness-110 text-[#090a0f] font-headline-sm font-extrabold rounded-xl transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(212,154,83,0.3)]"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Visitar Sitio Web</span>
                  </a>
                  <div className="flex items-center gap-2 px-4 py-3 bg-[#14151a] border border-[#262933] rounded-xl text-[#a1a1aa]">
                    <Monitor className="w-5 h-5" />
                    <Smartphone className="w-5 h-5" />
                    <span className="text-sm font-medium">Responsive Design</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
