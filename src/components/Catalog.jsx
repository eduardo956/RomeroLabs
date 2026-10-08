import React, { useState } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { useModal } from '../context/ModalContext';
import { ShoppingBag, Eye } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { whatsappConfig } from '../config/whatsappConfig';

export const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const { addToCart } = useCart();
  const { addToast } = useToast();
  const { openDetailModal } = useModal();

  const categories = ['Todos', ...new Set(products.map((p) => p.category))];

  const filteredProducts =
    selectedCategory === 'Todos'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    addToCart(product, 1);
    addToast(product.title);
  };

  return (
    <section className="w-full py-24 max-w-[1280px] mx-auto px-5 md:px-12" id="servicios">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="font-label-sm text-xs md:text-sm text-[#f7e1bc] uppercase tracking-widest font-extrabold">
          CATÁLOGO DE SERVICIOS DIGITALES
        </span>
        <h2 className="font-headline-lg text-3xl md:text-5xl text-white font-extrabold tracking-tight mt-2">
          Catálogo de Soluciones Digitales
        </h2>
        <p className="font-body-md text-base text-[#a1a1aa] mt-3">
          Selecciona una solución para explorar especificaciones técnicas o solicitar una cotización directa.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2.5 rounded-full font-label-md text-xs sm:text-sm font-semibold transition-all ${
              selectedCategory === cat
                ? 'bg-[#d49a53] text-[#090a0f] shadow-[0_0_15px_rgba(212,154,83,0.4)]'
                : 'bg-[#14151a] text-[#a1a1aa] border border-[#262933] hover:text-white hover:border-[#d49a53]/50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => openDetailModal(product)}
            className="neon-box-hover bg-gradient-to-b from-[#14151a] to-[#0d0e12] border border-[#262933] rounded-2xl overflow-hidden flex flex-col justify-between cursor-pointer group"
          >
            <div>
              {/* Product Image & Badge */}
              <div className="h-48 relative overflow-hidden bg-[#181a20]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-[#d49a53] text-[#090a0f] font-label-sm text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-[0_0_10px_rgba(212,154,83,0.4)]">
                  {product.badge}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openDetailModal(product);
                  }}
                  className="absolute bottom-3 right-3 bg-black/70 hover:bg-[#d49a53] hover:text-[#090a0f] text-white p-2 rounded-lg backdrop-blur-md transition-colors"
                  title="Vista Rápida"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-5">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-label-sm text-[11px] text-[#d49a53] uppercase font-bold">
                    {product.category}
                  </span>
                  <span className="font-display-hero text-xl font-bold text-[#f7e1bc]">
                    S/ {product.price}
                  </span>
                </div>
                <h3 className="font-headline-sm text-lg text-white font-bold leading-tight mb-2 group-hover:text-[#f7e1bc] transition-colors">
                  {product.title}
                </h3>
                <p className="font-body-sm text-xs text-[#a1a1aa] leading-relaxed line-clamp-3">
                  {product.shortDesc}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="p-5 pt-0 flex flex-col gap-2">
              <button
                onClick={(e) => handleAddToCart(e, product)}
                className="w-full py-2.5 px-3 bg-[#1e2029] hover:bg-[#d49a53] text-white hover:text-[#090a0f] font-label-md text-xs font-bold rounded-xl transition-all border border-[#262933] hover:border-[#d49a53] flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Añadir al Carrito</span>
              </button>
              <a
                href={`https://wa.me/${whatsappConfig.phoneNumber}?text=${whatsappConfig.formatProductMessage(
                  product
                )}`}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 bg-transparent text-[#a1a1aa] hover:text-[#f7e1bc] font-label-md text-[11px] font-semibold flex items-center justify-center gap-1.5"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                <span>Consultar por WhatsApp</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
