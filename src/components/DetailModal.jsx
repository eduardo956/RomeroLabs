import React, { useState } from 'react';
import { useModal } from '../context/ModalContext';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { X, ShoppingBag, Check, Plus, Minus, ExternalLink } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { whatsappConfig } from '../config/whatsappConfig';

export const DetailModal = () => {
  const { activeProduct, closeDetailModal } = useModal();
  const { addToCart } = useCart();
  const { addToast } = useToast();
  const [quantity, setQuantity] = useState(1);

  if (!activeProduct) return null;

  const handleAdd = () => {
    addToCart(activeProduct, quantity);
    addToast(activeProduct.title);
    closeDetailModal();
    setQuantity(1);
  };

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#090a0f] border-2 border-[#d49a53]/30 rounded-2xl shadow-[0_0_50px_rgba(212,154,83,0.15)] max-h-[92vh] overflow-y-auto p-6 md:p-10 text-left">
        {/* Close Button */}
        <button
          onClick={closeDetailModal}
          className="absolute top-4 right-4 p-2 rounded-xl bg-[#14151a] border border-[#262933] text-gray-400 hover:text-white hover:border-[#d49a53] transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Product Image */}
          <div className="md:col-span-6 h-64 md:h-full min-h-[300px] rounded-2xl bg-[#14151a] overflow-hidden relative border border-[#262933]">
            <img
              src={activeProduct.image}
              alt={activeProduct.title}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-4 left-4 bg-[#d49a53] text-[#090a0f] font-label-sm text-xs font-extrabold px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(212,154,83,0.4)]">
              {activeProduct.badge}
            </span>
          </div>

          {/* Details */}
          <div className="md:col-span-6 flex flex-col justify-between h-full">
            <div>
              <span className="font-label-sm text-xs text-[#d49a53] uppercase font-bold tracking-wider">
                {activeProduct.category}
              </span>
              <h2 className="font-headline-sm text-3xl text-white font-extrabold mt-2 mb-3 leading-tight">
                {activeProduct.title}
              </h2>
              <div className="font-display-hero text-4xl font-extrabold text-[#f7e1bc] mb-5">
                S/ {activeProduct.price}
              </div>
              <p className="font-body-md text-base text-[#a1a1aa] leading-relaxed mb-6">
                {activeProduct.description}
              </p>

              {/* Technical Specs */}
              {activeProduct.specs && (
                <div className="bg-[#14151a] border border-[#262933] rounded-xl p-5 mb-6">
                  <div className="font-label-sm text-xs text-[#d49a53] uppercase font-bold mb-3">
                    VALOR AÑADIDO
                  </div>
                  <div className="flex flex-col gap-2.5 font-body-sm text-sm text-[#a1a1aa]">
                    {Object.entries(activeProduct.specs).map(([key, val]) => (
                      <div key={key} className="flex justify-between border-b border-[#262933] pb-2 last:border-0 last:pb-0">
                        <span className="text-white font-semibold">{key}:</span>
                        <span className="text-right">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quantity Selector & Action */}
            <div className="flex flex-col gap-4 pt-4 border-t border-[#262933]">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-sm text-white font-semibold">Licencias / Cantidad:</span>
                <div className="flex items-center gap-4 bg-[#14151a] border border-[#262933] rounded-lg px-4 py-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-[#a1a1aa] hover:text-[#d49a53] transition-colors"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="font-label-md text-base text-white font-bold w-4 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-[#a1a1aa] hover:text-[#d49a53] transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="font-body-sm text-xs text-[#a1a1aa] mb-1 italic">
                {activeProduct.details}
              </div>

              {activeProduct.demoUrl && (
                <a
                  href={activeProduct.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[3rem] px-4 mb-2 bg-[#d49a53]/10 hover:bg-[#d49a53]/20 text-[#f7e1bc] font-label-md text-sm font-bold rounded-xl transition-all border border-[#d49a53]/30 flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Ver Demo en Vivo</span>
                </a>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
                <button
                  onClick={handleAdd}
                  className="w-full min-h-[3.5rem] px-4 bg-gradient-to-r from-[#d49a53] to-[#f7e1bc] hover:brightness-110 text-[#090a0f] font-headline-sm text-base font-extrabold rounded-xl transition-all shadow-[0_0_20px_rgba(212,154,83,0.3)] flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Añadir al Carrito</span>
                </button>
                <a
                  href={`https://wa.me/${whatsappConfig.phoneNumber}?text=${whatsappConfig.formatProductMessage(
                    activeProduct
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[3.5rem] px-4 bg-[#14151a] hover:bg-[#1e2029] text-white font-headline-sm text-base font-bold rounded-xl transition-all border border-[#262933] flex items-center justify-center gap-2 group"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-current text-[#d49a53] group-hover:text-[#f7e1bc] transition-colors" />
                  <span>Cotizar Rápido</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
