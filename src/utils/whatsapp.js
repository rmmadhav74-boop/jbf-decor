// ─── WhatsApp Utility ───
// Generates a pre-filled WhatsApp message URL for a product enquiry

const WHATSAPP_NUMBER = "919999999999"; // Replace with actual JBF Decor WhatsApp number

/**
 * Generate a WhatsApp enquiry link for a product
 * @param {string} productName
 * @param {string} [category]
 * @param {string} [price]
 * @returns {string} WhatsApp URL
 */
export const generateWhatsAppLink = (productName, category = "", price = "") => {
  const message = encodeURIComponent(
    `Hello JBF Decor! 👋\n\nI'm interested in the following product:\n\n` +
    `🛋️ *Product:* ${productName}\n` +
    (category ? `📂 *Category:* ${category}\n` : "") +
    (price ? `💰 *Price:* ${price}\n` : "") +
    `\nPlease share more details about this product, availability, and customization options.\n\nThank you!`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

/**
 * Generate a general quote request WhatsApp link
 * @param {string} [context] - Additional context
 * @returns {string} WhatsApp URL
 */
export const generateQuoteLink = (context = "") => {
  const message = encodeURIComponent(
    `Hello JBF Decor! 👋\n\nI'd like to request a quote for interior design / furniture.\n\n` +
    (context ? `Details: ${context}\n\n` : "") +
    `Please get in touch with me at your earliest convenience.\n\nThank you!`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

/**
 * Open WhatsApp link
 */
export const openWhatsApp = (link) => {
  window.open(link, "_blank", "noopener,noreferrer");
};

export default WHATSAPP_NUMBER;
