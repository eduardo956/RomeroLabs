import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Ticker } from './components/Ticker';
import { ResultsPillars } from './components/ResultsPillars';
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
import { ChevronDown, HelpCircle, AlertTriangle, CheckCircle } from 'lucide-react';
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
          <div className="min-h-screen bg-[#070a0b] text-[#e6edf0] font-body-md relative overflow-hidden">
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

              {/* 2. Ticker Marquee */}
              <Ticker />

              {/* 3. Resultados que te Impulsan (gato.pe feature pillars) */}
              <ResultsPillars />

              {/* 3. Diagnóstico de Pérdidas Section */}
              <section className="w-full bg-[#050708] py-24 relative border-t border-b border-[#223334]/30">
                <div className="max-w-[1280px] mx-auto px-5 md:px-12">
                  <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#93000a]/20 border border-[#ffb4ab]/30 text-[#ffb4ab] font-label-sm text-xs uppercase mb-3">
                      <AlertTriangle className="w-4 h-4" /> Diagnóstico de Pérdidas
                    </div>
                    <h2 className="font-headline-lg text-3xl md:text-4xl text-[#e6edf0] font-extrabold tracking-tight">
                      ¿Por qué estás perdiendo ventas hoy?
                    </h2>
                    <p className="font-body-md text-base text-[#9cb2ad] mt-3">
                      Tener un negocio activo en redes sociales no garantiza pedidos si no cuentas con una plataforma que cierre ventas las 24 horas.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="neon-box-hover bg-gradient-to-b from-[#0e1619] to-[#090e10] border border-[#223334]/60 p-8 rounded-2xl flex flex-col justify-between">
                      <div>
                        <div className="w-14 h-14 rounded-xl bg-[#162022] border border-[#00f0d4]/30 flex items-center justify-center text-[#00f0d4] mb-6 shadow-[0_0_20px_rgba(0,240,212,0.15)]">
                          <AlertTriangle className="w-7 h-7" />
                        </div>
                        <h3 className="font-headline-sm text-xl text-white font-bold mb-3">
                          Invisibles en Google
                        </h3>
                        <p className="font-body-md text-sm text-[#9cb2ad] leading-relaxed">
                          Tus clientes buscan todos los días tus servicios en el buscador. Si solo estás en Instagram, tus competidores con página web se quedan con tus clientes calificados.
                        </p>
                      </div>
                      <div className="mt-8 pt-4 border-t border-[#223334]/40 flex items-center justify-between text-[#00f0d4] font-label-sm text-xs">
                        <span className="font-semibold tracking-wide">SOLUCIÓN: SEO Local Posicionado</span>
                        <CheckCircle className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="neon-box-hover bg-gradient-to-b from-[#0e1619] to-[#090e10] border border-[#223334]/60 p-8 rounded-2xl flex flex-col justify-between">
                      <div>
                        <div className="w-14 h-14 rounded-xl bg-[#162022] border border-[#42e0e5]/30 flex items-center justify-center text-[#42e0e5] mb-6 shadow-[0_0_20px_rgba(66,224,229,0.15)]">
                          <HelpCircle className="w-7 h-7" />
                        </div>
                        <h3 className="font-headline-sm text-xl text-white font-bold mb-3">
                          Cansado de responder precios
                        </h3>
                        <p className="font-body-md text-sm text-[#9cb2ad] leading-relaxed">
                          ¿Pasas horas contestando "¿precio al inbox?" para que luego te dejen en visto? Tu web filtra prospectos, muestra tu catálogo y te envía contactos listos para transferir.
                        </p>
                      </div>
                      <div className="mt-8 pt-4 border-t border-[#223334]/40 flex items-center justify-between text-[#42e0e5] font-label-sm text-xs">
                        <span className="font-semibold tracking-wide">SOLUCIÓN: Catálogo & Precios Claros</span>
                        <CheckCircle className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="neon-box-hover bg-gradient-to-b from-[#0e1619] to-[#090e10] border border-[#223334]/60 p-8 rounded-2xl flex flex-col justify-between">
                      <div>
                        <div className="w-14 h-14 rounded-xl bg-[#162022] border border-[#41fce2]/30 flex items-center justify-center text-[#41fce2] mb-6 shadow-[0_0_20px_rgba(65,252,226,0.15)]">
                          <CheckCircle className="w-7 h-7" />
                        </div>
                        <h3 className="font-headline-sm text-xl text-white font-bold mb-3">
                          Perfil de Instagram no es suficiente
                        </h3>
                        <p className="font-body-md text-sm text-[#9cb2ad] leading-relaxed">
                          Los algoritmos bajan el alcance orgánico sin previo aviso. Una página web propia es un activo digital tuyo que nadie te puede apagar ni restringir.
                        </p>
                      </div>
                      <div className="mt-8 pt-4 border-t border-[#223334]/40 flex items-center justify-between text-[#41fce2] font-label-sm text-xs">
                        <span className="font-semibold tracking-wide">SOLUCIÓN: Canal Propio 100% Tuyo</span>
                        <CheckCircle className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 4. Interactive Catalog */}
              <Catalog />

              {/* 5. Packages Section */}
              <PackagesSection />

              {/* 6. Story & Guarantee */}
              <Story />

              {/* 7. Contact B2B */}
              <ContactB2B />

              {/* 8. FAQ Section */}
              <section className="w-full py-28 max-w-[960px] mx-auto px-5 md:px-12" id="faq">
                <div className="text-center mb-16">
                  <span className="font-label-sm text-xs md:text-sm text-[#bffff0] uppercase tracking-widest font-bold">
                    RESOLVEMOS TUS DUDAS
                  </span>
                  <h2 className="font-headline-lg text-3xl md:text-4xl text-[#e6edf0] font-extrabold tracking-tight mt-2">
                    Preguntas Frecuentes
                  </h2>
                  <p className="font-body-md text-base text-[#9cb2ad] mt-2">
                    Todo lo que necesitas saber antes de lanzar tu sitio web con Romero Labs.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-b from-[#0c1315] to-[#080d0e] border border-[#223334]/60 rounded-xl overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-6 text-left flex items-center justify-between gap-4 font-headline-sm text-base md:text-lg font-bold text-white hover:text-[#00f0d4] transition-colors"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-[#627d78] transition-transform duration-300 ${
                            openFaqIndex === idx ? 'rotate-180 text-[#00f0d4]' : ''
                          }`}
                        />
                      </button>
                      {openFaqIndex === idx && (
                        <div className="px-6 pb-6 pt-0 font-body-md text-sm md:text-base text-[#9cb2ad] leading-relaxed animate-in fade-in duration-200">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* 9. Final CTA Banner */}
              <section className="w-full bg-gradient-to-b from-[#070a0b] via-[#050708] to-[#030405] py-24 border-t border-[#223334]/40">
                <div className="max-w-[1000px] mx-auto px-5 md:px-12 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00f0d4]/15 border border-[#00f0d4]/30 text-[#00f0d4] font-label-sm text-xs uppercase mb-5">
                    <span className="w-2 h-2 rounded-full bg-[#00f0d4] animate-pulse"></span>
                    Cupos de desarrollo limitados por semana
                  </div>
                  <h2 className="font-headline-lg text-3xl md:text-5xl text-white font-extrabold tracking-tight">
                    Deja de perder prospectos hoy mismo
                  </h2>
                  <p className="font-body-lg text-base md:text-lg text-[#9cb2ad] max-w-xl mx-auto mt-4 mb-10 leading-relaxed">
                    Haz que tu negocio transmita la confianza necesaria para que te compren a ti y no a tu competencia.
                  </p>
                  <a
                    href={`https://wa.me/${whatsappConfig.phoneNumber}?text=${encodeURIComponent(
                      'Hola Romero Labs, quiero comenzar mi web hoy.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#00f0d4] via-[#18ebd0] to-[#42e0e5] text-[#003b34] font-headline-sm text-lg md:text-xl font-extrabold rounded-xl shadow-[0_0_35px_rgba(0,240,212,0.4)] hover:brightness-110 transition-all transform hover:-translate-y-1 animate-cta-glow"
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
                className="hidden sm:flex items-center gap-2 mr-3 px-4 py-2 bg-[#0c1315]/95 border border-[#00f0d4]/40 backdrop-blur-xl rounded-xl text-[#e6edf0] font-label-sm text-xs shadow-2xl hover:text-[#00f0d4] transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-[#00f0d4] animate-ping"></span>
                <span>¿En qué te ayudamos hoy? <strong>Cotiza aquí</strong></span>
              </a>
              <a
                href={`https://wa.me/${whatsappConfig.phoneNumber}?text=${encodeURIComponent(
                  whatsappConfig.defaultMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
                className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00f0d4] to-[#42e0e5] text-[#003b34] flex items-center justify-center shadow-[0_0_25px_rgba(0,240,212,0.5)] transition-transform hover:scale-110 relative"
              >
                <WhatsAppIcon className="w-7 h-7 fill-current" />
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border border-black flex items-center justify-center text-[10px] text-black font-extrabold">
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
