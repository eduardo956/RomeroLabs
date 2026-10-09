import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, Trash2, Plus, Minus, ShoppingBag, MapPin } from 'lucide-react';
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
    <div className="fixed inset-0 z-[100] flex justify-end bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-[#090a0f] border-l border-[#d49a53]/30 h-full flex flex-col justify-between shadow-[0_0_50px_rgba(212,154,83,0.15)] p-6 overflow-y-auto">
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-[#262933]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#d49a53]" />
              <h2 className="font-headline-sm text-xl text-white font-bold">Carrito de Cotización</h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-xl bg-[#14151a] border border-[#262933] text-gray-400 hover:text-white hover:border-[#d49a53] transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          {cart.length === 0 ? (
            <div className="py-16 text-center text-[#a1a1aa]">
              <ShoppingBag className="w-12 h-12 mx-auto mb-3 opacity-40 text-[#d49a53]" />
              <p className="font-body-md text-sm text-white font-semibold">Tu carrito está vacío.</p>
              <p className="font-body-sm text-xs mt-1 text-[#a1a1aa]">
                Navega en el catálogo para añadir servicios web.
              </p>
            </div>
          ) : (
            <div className="py-4 flex flex-col gap-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#14151a] border border-[#262933] rounded-xl p-3.5 flex items-center gap-3 justify-between"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-14 h-14 rounded-lg object-cover bg-[#1e2029]"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-headline-sm text-sm text-white font-bold truncate">
                      {item.title}
                    </h4>
                    <div className="font-display-hero text-sm font-extrabold text-[#f7e1bc] mt-0.5">
                      S/ {(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-2 bg-[#1e2029] rounded-lg px-2 py-1 border border-[#262933]">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="text-gray-400 hover:text-[#d49a53] transition-colors"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-label-md text-xs text-white font-bold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="text-gray-400 hover:text-[#d49a53] transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-500 hover:text-red-400 transition-colors p-1"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}

              <button
                onClick={clearCart}
                className="text-xs font-label-sm text-[#a1a1aa] hover:text-red-400 text-right self-end mt-1 transition-colors"
              >
                Vaciar carrito
              </button>
            </div>
          )}
        </div>

        {/* Footer Checkout */}
        {cart.length > 0 && (
          <div className="pt-4 border-t border-[#262933] flex flex-col gap-4">
            {/* Optional Address / Business Name Input */}
            <div>
              <label className="block font-label-sm text-xs text-[#a1a1aa] mb-1.5 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#d49a53]" />
                <span>Nombre de tu Negocio / Ciudad (Opcional):</span>
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Ej. Tienda Sol de Lima, San Isidro"
                className="w-full bg-[#14151a] border border-[#262933] focus:border-[#d49a53] text-white px-3 py-2.5 rounded-xl text-xs outline-none transition-colors"
              />
            </div>

            {/* Subtotal */}
            <div className="flex items-center justify-between text-white font-headline-sm text-lg">
              <span>Total Estimado:</span>
              <span className="text-[#f7e1bc] font-black text-2xl">
                S/ {subtotal.toFixed(2)}
              </span>
            </div>

            {/* WhatsApp Checkout Button */}
            <a
              href={getCheckoutWhatsAppUrl(address)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[3.25rem] py-3.5 bg-gradient-to-r from-[#d49a53] via-[#e5b878] to-[#f7e1bc] text-[#090a0f] font-headline-sm text-sm font-extrabold rounded-xl shadow-[0_0_20px_rgba(212,154,83,0.3)] flex items-center justify-center gap-2 hover:brightness-110 transition-all"
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
