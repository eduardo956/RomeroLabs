import React, { useState } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { useModal } from '../context/ModalContext';
import { ShoppingBag, Eye, Check } from 'lucide-react';
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
    <section className="w-full py-24 max-w-[1280px] mx-auto px-5 md:px-12" id="catalogo">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="font-label-sm text-xs md:text-sm text-[#bffff0] uppercase tracking-widest font-bold">
          CATÁLOGO INTERACTIVO DE SOLUCIONES WEB
        </span>
        <h2 className="font-headline-lg text-3xl md:text-5xl text-[#e6edf0] font-extrabold tracking-tight mt-2">
          Páginas y Servicios Diseñados Para Convertir
        </h2>
        <p className="font-body-md text-base text-[#9cb2ad] mt-3">
          Selecciona una opción para ver especificaciones técnicas o añadir a tu cotización directa.
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
                ? 'bg-[#00f0d4] text-[#003b34] shadow-[0_0_15px_#00f0d4]'
                : 'bg-[#162022] text-[#9cb2ad] border border-[#223334] hover:text-white hover:border-[#00f0d4]/50'
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
            className="neon-box-hover bg-gradient-to-b from-[#0c1315] to-[#080d0e] border border-[#223334]/60 rounded-2xl overflow-hidden flex flex-col justify-between cursor-pointer group"
          >
            <div>
              {/* Product Image & Badge */}
              <div className="h-48 relative overflow-hidden bg-[#162022]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-[#00f0d4] text-[#003b34] font-label-sm text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-[0_0_10px_#00f0d4]">
                  {product.badge}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openDetailModal(product);
                  }}
                  className="absolute bottom-3 right-3 bg-black/70 hover:bg-[#00f0d4] hover:text-[#003b34] text-white p-2 rounded-lg backdrop-blur-md transition-colors"
                  title="Vista Rápida"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-5">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-label-sm text-[11px] text-[#627d78] uppercase font-bold">
                    {product.category}
                  </span>
                  <span className="font-display-hero text-xl font-bold text-[#00f0d4]">
                    S/ {product.price}
                  </span>
                </div>
                <h3 className="font-headline-sm text-lg text-white font-bold leading-tight mb-2 group-hover:text-[#00f0d4] transition-colors">
                  {product.title}
                </h3>
                <p className="font-body-sm text-xs text-[#9cb2ad] leading-relaxed line-clamp-3">
                  {product.shortDesc}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="p-5 pt-0 flex flex-col gap-2">
              <button
                onClick={(e) => handleAddToCart(e, product)}
                className="w-full py-2.5 px-3 bg-[#162022] hover:bg-[#00f0d4] text-white hover:text-[#003b34] font-label-md text-xs font-bold rounded-xl transition-all border border-[#223334] hover:border-[#00f0d4] flex items-center justify-center gap-2"
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
                className="w-full py-2 px-3 bg-transparent text-[#9cb2ad] hover:text-[#00f0d4] font-label-md text-[11px] font-semibold flex items-center justify-center gap-1.5"
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
