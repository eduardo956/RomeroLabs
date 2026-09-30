export const whatsappConfig = {
  phoneNumber: "51922187720", // Número centralizado de WhatsApp
  defaultMessage: "Hola Romero Labs, quiero cotizar una página web que venda.",
  formatProductMessage: (product) => {
    return encodeURIComponent(
      `Hola Romero Labs, quiero consultar por el servicio: "${product.title}" (Precio: S/ ${product.price}).`
    );
  },
  formatPackageMessage: (pkg) => {
    return encodeURIComponent(
      `Hola Romero Labs, quiero contratar el "${pkg.name}" (Precio: S/ ${pkg.price}).`
    );
  },
  formatCartCheckout: (cartItems, subtotal, address = "") => {
    const today = new Date().toLocaleDateString('es-PE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    let text = `🚀 *NUEVO PEDIDO DE DESARROLLO WEB*\n`;
    text += `📅 Fecha: ${today}\n\n`;
    text += `📋 *DESGLOSE DE COTIZACIÓN / PRODUCTOS:*\n`;

    cartItems.forEach((item, idx) => {
      text += `${idx + 1}. *${item.title}* x${item.quantity} - S/ ${(item.price * item.quantity).toFixed(2)}\n`;
    });

    text += `\n💰 *SUBTOTAL ESTIMADO:* S/ ${subtotal.toFixed(2)}\n`;
    if (address.trim()) {
      text += `📍 *DIRECCIÓN / UBICACIÓN DEL NEGOCIO:* ${address.trim()}\n`;
    }
    text += `\nQuedo a la espera de la confirmación para iniciar el proyecto con el 50% de anticipo.`;

    return encodeURIComponent(text);
  }
};
