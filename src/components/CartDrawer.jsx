import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, Trash2, Plus, Minus, ShoppingBag, MapPin, Send } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    getCheckoutWhatsAppUrl,
  } = useCart();

  const [address, setAddress] = useState('');

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-[#090e10] border-l border-[#00f0d4]/30 h-full flex flex-col justify-between shadow-2xl p-6 overflow-y-auto">
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-[#223334]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#00f0d4]" />
              <h2 className="font-headline-sm text-xl text-white font-bold">Carrito de Cotización</h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-xl bg-[#162022] text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          {cart.length === 0 ? (
            <div className="py-16 text-center text-[#9cb2ad]">
              <ShoppingBag className="w-12 h-12 mx-auto mb-3 opacity-40 text-[#00f0d4]" />
              <p className="font-body-md text-sm">Tu carrito está vacío.</p>
              <p className="font-body-sm text-xs mt-1 text-[#627d78]">
                Navega en el catálogo para añadir servicios web.
              </p>
            </div>
          ) : (
            <div className="py-4 flex flex-col gap-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#0e1517] border border-[#223334] rounded-xl p-3.5 flex items-center gap-3 justify-between"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-14 h-14 rounded-lg object-cover bg-[#162022]"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-headline-sm text-sm text-white font-bold truncate">
                      {item.title}
                    </h4>
                    <div className="font-display-hero text-sm font-extrabold text-[#00f0d4] mt-0.5">
                      S/ {(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-2 bg-[#162022] rounded-lg px-2 py-1 border border-[#223334]">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="text-gray-400 hover:text-white"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-label-md text-xs text-white font-bold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="text-gray-400 hover:text-white"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-500 hover:text-[#ffb4ab] transition-colors p-1"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}

              <button
                onClick={clearCart}
                className="text-xs font-label-sm text-[#627d78] hover:text-[#ffb4ab] text-right self-end mt-1"
              >
                Vaciar carrito
              </button>
            </div>
          )}
        </div>

        {/* Footer Checkout */}
        {cart.length > 0 && (
          <div className="pt-4 border-t border-[#223334] flex flex-col gap-4">
            {/* Optional Address / Business Name Input */}
            <div>
              <label className="block font-label-sm text-xs text-[#9cb2ad] mb-1.5 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#00f0d4]" />
                <span>Nombre de tu Negocio / Ciudad (Opcional):</span>
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Ej. Tienda Sol de Lima, San Isidro"
                className="w-full bg-[#050708] border border-[#223334] focus:border-[#00f0d4] text-white px-3 py-2 rounded-xl text-xs outline-none transition-colors"
              />
            </div>

            {/* Subtotal */}
            <div className="flex items-center justify-between text-white font-headline-sm text-lg">
              <span>Total Estimado:</span>
              <span className="text-[#00f0d4] font-black text-2xl">
                S/ {subtotal.toFixed(2)}
              </span>
            </div>

            {/* WhatsApp Checkout Button */}
            <a
              href={getCheckoutWhatsAppUrl(address)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[3.25rem] py-3.5 bg-gradient-to-r from-[#00f0d4] to-[#42e0e5] text-[#003b34] font-label-md text-sm font-extrabold rounded-xl shadow-[0_0_20px_rgba(0,240,212,0.4)] flex items-center justify-center gap-2 hover:brightness-110 transition-all"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
              <span>Enviar Pedido a WhatsApp</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
