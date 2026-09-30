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
      <div className="relative w-full max-w-2xl bg-[#090e10] border-2 border-[#00f0d4]/40 rounded-2xl shadow-[0_0_50px_rgba(0,240,212,0.2)] max-h-[92vh] overflow-y-auto p-6 md:p-8 text-left">
        {/* Close Button */}
        <button
          onClick={closeDetailModal}
          className="absolute top-4 right-4 p-2 rounded-xl bg-[#162022] border border-[#223334] text-gray-400 hover:text-white hover:border-[#00f0d4] transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Product Image */}
          <div className="md:col-span-5 h-56 md:h-full min-h-[200px] rounded-xl bg-[#162022] overflow-hidden relative border border-[#223334]">
            <img
              src={activeProduct.image}
              alt={activeProduct.title}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-3 left-3 bg-[#00f0d4] text-[#003b34] font-label-sm text-xs font-extrabold px-3 py-1 rounded-full">
              {activeProduct.badge}
            </span>
          </div>

          {/* Details */}
          <div className="md:col-span-7 flex flex-col justify-between">
            <div>
              <span className="font-label-sm text-xs text-[#627d78] uppercase font-bold tracking-wider">
                {activeProduct.category}
              </span>
              <h2 className="font-headline-sm text-2xl text-white font-extrabold mt-1 mb-2">
                {activeProduct.title}
              </h2>
              <div className="font-display-hero text-3xl font-extrabold text-[#00f0d4] mb-4">
                S/ {activeProduct.price}
              </div>
              <p className="font-body-md text-sm text-[#9cb2ad] leading-relaxed mb-5">
                {activeProduct.description}
              </p>

              {/* Technical Specs */}
              {activeProduct.specs && (
                <div className="bg-[#0e1517] border border-[#223334] rounded-xl p-4 mb-5">
                  <div className="font-label-sm text-xs text-[#00f0d4] uppercase font-bold mb-2">
                    ESPECIFICACIONES TÉCNICAS
                  </div>
                  <div className="flex flex-col gap-1.5 font-body-sm text-xs text-[#9cb2ad]">
                    {Object.entries(activeProduct.specs).map(([key, val]) => (
                      <div key={key} className="flex justify-between border-b border-[#223334]/50 pb-1">
                        <span className="text-white font-medium">{key}:</span>
                        <span>{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quantity Selector & Action */}
            <div className="flex flex-col gap-3 pt-2 border-t border-[#223334]">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-xs text-white font-semibold">Cantidad:</span>
                <div className="flex items-center gap-3 bg-[#162022] border border-[#223334] rounded-lg px-3 py-1.5">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-gray-400 hover:text-white"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-label-md text-sm text-white font-bold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-gray-400 hover:text-white"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {activeProduct.demoUrl && (
                <a
                  href={activeProduct.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[3rem] px-4 mb-2 bg-[#00f0d4]/15 hover:bg-[#00f0d4]/25 text-[#00f0d4] font-label-md text-xs font-bold rounded-xl transition-all border border-[#00f0d4]/40 flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Ver Demo en Vivo (https://poc-romeagency.freedev.app/#)</span>
                </a>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
                <button
                  onClick={handleAdd}
                  className="w-full min-h-[3.25rem] px-4 bg-[#00f0d4] hover:bg-[#18ebd0] text-[#003b34] font-label-md text-sm font-extrabold rounded-xl transition-all shadow-[0_0_15px_rgba(0,240,212,0.3)] flex items-center justify-center gap-2"
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
                  className="w-full min-h-[3.25rem] px-4 bg-[#162022] hover:bg-[#1e2628] text-white font-label-md text-sm font-bold rounded-xl transition-all border border-[#223334] flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-current text-[#00f0d4]" />
                  <span>Pedir por WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
