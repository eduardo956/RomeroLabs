import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ResultsPillars } from './components/ResultsPillars';
import { Portfolio } from './components/Portfolio';
import { Catalog } from './components/Catalog';
import { DetailModal } from './components/DetailModal';
import { Story } from './components/Story';
import { PackagesSection } from './components/PackagesSection';
import { ContactB2B } from './components/ContactB2B';
import { CartDrawer } from './components/CartDrawer';
import { ToastContainer } from './components/ToastContainer';
import { Footer } from './components/Footer';
import { ParallaxBackground } from './components/ParallaxBackground';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import { ModalProvider } from './context/ModalContext';
import { ChevronDown } from 'lucide-react';
import { WhatsAppIcon } from './components/icons/WhatsAppIcon';
import { whatsappConfig } from './config/whatsappConfig';

function App() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "¿Incluye dominio y hosting?",
      a: "Sí, te entregamos tu web con hosting y dominio base gratuito listo para funcionar desde el primer día. Si deseas un dominio personalizado con tu marca exacta (como tunegocio.com o tunegocio.pe), es aparte a precio de costo del registrador oficial y nosotros lo dejamos 100% configurado sin complicaciones técnicas para ti."
    },
    {
      q: "¿Necesito saber de computación para tener mi web?",
      a: "Para nada. En Romero Labs nos encargamos de toda la parte técnica, servidores y programación. Si contratas una tienda online, te entregamos un panel súper intuitivo donde podrás subir tus productos y fotos fácilmente desde tu propio celular. Además, te damos un video tutorial guiado."
    },
    {
      q: "¿Tendré que pagar mensualidades obligatorias?",
      a: "No. Todos nuestros planes de diseño web son de pago único. No te atamos a contratos mensuales ni comisiones sobre tus ventas. La web es completamente tuya."
    },
    {
      q: "¿Cómo me pagarán mis clientes en la tienda virtual?",
      a: "Integramos pasarelas de pago directas como Yape, Plin, transferencias bancarias locales (BCP, BBVA, Interbank) y pasarelas de tarjetas de crédito o débito (como Culqi o MercadoPago). El dinero va directo a tu cuenta bancaria."
    },
    {
      q: "¿Cuánto demora exactamente en estar lista mi página?",
      a: "El Pack Web Informativa se entrega en tan solo 3 a 5 días hábiles tras recibir tu información básica. Las tiendas virtuales y proyectos más complejos toman entre 5 a 8 días hábiles."
    }
  ];

  return (
    <CartProvider>
      <ToastProvider>
        <ModalProvider>
          <div className="min-h-screen bg-[#090a0f] text-white font-body-md relative overflow-hidden">
            {/* Ambient Dynamic Parallax Layer */}
            <ParallaxBackground />

            {/* Header & Navbar */}
            <Navbar />

            {/* Main Application Container */}
            <main className="w-full pt-20 relative">
              {/* Background ambient lighting */}
              <div className="absolute top-0 left-0 w-full h-[850px] hero-glow-radial pointer-events-none -z-10"></div>
              <div className="absolute top-0 left-0 w-full h-[900px] cyber-grid opacity-35 pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]"></div>

              {/* 1. Hero Section */}
              <Hero />

              {/* 2. Resultados que te Impulsan (Feature pillars) */}
              <ResultsPillars />

              {/* 3. Proyectos / Portafolio */}
              <Portfolio />

              {/* 4. Packages Section (Ofertas / Precios Transparentes) */}
              <PackagesSection />

              {/* 5. Catálogo de Servicios */}
              <Catalog />

              {/* 6. Story & Guarantee */}
              <Story />

              {/* 7. Contact B2B */}
              <ContactB2B />

              {/* 8. FAQ Section */}
              <section className="w-full py-28 max-w-[960px] mx-auto px-5 md:px-12" id="faq">
                <div className="text-center mb-16">
                  <span className="font-label-sm text-xs md:text-sm text-[#f7e1bc] uppercase tracking-widest font-bold">
                    RESOLVEMOS TUS DUDAS
                  </span>
                  <h2 className="font-headline-lg text-3xl md:text-4xl text-white font-extrabold tracking-tight mt-2">
                    Preguntas Frecuentes
                  </h2>
                  <p className="font-body-md text-base text-[#a1a1aa] mt-2">
                    Todo lo que necesitas saber antes de lanzar tu sitio web con Romero Labs.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-[#14151a] border border-[#262933] hover:border-[#d49a53]/40 rounded-xl overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-6 text-left flex items-center justify-between gap-4 font-headline-sm text-base md:text-lg font-bold text-white hover:text-[#f7e1bc] transition-colors"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-[#a1a1aa] transition-transform duration-300 ${
                            openFaqIndex === idx ? 'rotate-180 text-[#d49a53]' : ''
                          }`}
                        />
                      </button>
                      {openFaqIndex === idx && (
                        <div className="px-6 pb-6 pt-0 font-body-md text-sm md:text-base text-[#a1a1aa] leading-relaxed animate-in fade-in duration-200">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* 9. Final CTA Banner */}
              <section className="w-full bg-[#090a0f] py-24 border-t border-[#262933]">
                <div className="max-w-[1000px] mx-auto px-5 md:px-12 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d49a53]/15 border border-[#d49a53]/30 text-[#f7e1bc] font-label-sm text-xs uppercase mb-5">
                    <span className="w-2 h-2 rounded-full bg-[#d49a53] animate-pulse"></span>
                    Cupos de desarrollo limitados por semana
                  </div>
                  <h2 className="font-headline-lg text-3xl md:text-5xl text-white font-extrabold tracking-tight">
                    Deja de perder prospectos hoy mismo
                  </h2>
                  <p className="font-body-lg text-base md:text-lg text-[#a1a1aa] max-w-xl mx-auto mt-4 mb-10 leading-relaxed">
                    Haz que tu negocio transmita la confianza necesaria para que te compren a ti y no a tu competencia.
                  </p>
                  <a
                    href={`https://wa.me/${whatsappConfig.phoneNumber}?text=${encodeURIComponent(
                      'Hola Romero Labs, quiero comenzar mi web hoy.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#d49a53] via-[#e5b878] to-[#f7e1bc] text-[#090a0f] font-headline-sm text-lg md:text-xl font-extrabold rounded-xl shadow-[0_0_35px_rgba(212,154,83,0.3)] hover:brightness-110 transition-all transform hover:-translate-y-1 animate-cta-glow"
                  >
                    <WhatsAppIcon className="w-6 h-6 fill-current" />
                    <span>Hablar con un Asesor por WhatsApp</span>
                  </a>
                </div>
              </section>
            </main>

            {/* Floating Widgets & Modals */}
            <CartDrawer />
            <DetailModal />
            <ToastContainer />

            {/* Global Floating WhatsApp Widget */}
            <div className="fixed bottom-6 right-6 z-50 flex items-center group">
              <a
                href={`https://wa.me/${whatsappConfig.phoneNumber}?text=${encodeURIComponent(
                  whatsappConfig.defaultMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
                className="w-14 h-14 rounded-full bg-gradient-to-br from-[#d49a53] to-[#f7e1bc] text-[#090a0f] flex items-center justify-center shadow-[0_0_25px_rgba(212,154,83,0.5)] transition-transform hover:scale-110 relative"
              >
                <WhatsAppIcon className="w-7 h-7 fill-current" />
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#d49a53] border border-black flex items-center justify-center text-[10px] text-black font-extrabold">
                  1
                </span>
              </a>
            </div>

            {/* Footer */}
            <Footer />
          </div>
        </ModalProvider>
      </ToastProvider>
    </CartProvider>
  );
}

export default App;
