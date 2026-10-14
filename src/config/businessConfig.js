/**
 * AR SPORTS ISLAMABAD - Central Business Configuration
 * 
 * Configured with genuine store branch details, WhatsApp numbers, 
 * physical address in Rawalpindi/Islamabad, and Google Maps location.
 */
export const BUSINESS_CONFIG = {
  brandName: "AR SPORTS ISLAMABAD",
  shortName: "AR SPORTS",
  tagline: "SUBLIMATION SPORTS KITS HUB — YOUR TEAM. YOUR DESIGN. YOUR IDENTITY.",
  
  // PRIMARY WHATSAPP NUMBER (Without '+' or spaces)
  whatsappNumber: "923185098854", 
  
  // SECONDARY CONTACT / CALLING NUMBER
  callingPhone: "+92 318 5052449",
  whatsappPhoneDisplay: "+92 318 5098854",
  
  email: "orders@arsports.com",
  
  // PHYSICAL STORE ADDRESS & LOCATION
  address: "Jmal Plaza, Shop# 3, High Court Road, Near Car Chowk, Rawalpindi / Islamabad",
  locationDisplay: "High Court Road, Near Car Chowk, Rawalpindi",
  
  // GOOGLE MAPS DIRECT STORE & EMBED LINK (Uses env var if provided, otherwise verified store location)
  googleMapsUrl: import.meta.env?.VITE_GOOGLE_MAPS_URL || "https://www.google.com/maps/search/?api=1&query=Jmal+Plaza+Shop+3+High+Court+Road+Near+Car+Chowk+Rawalpindi",
  googleMapsEmbedUrl: import.meta.env?.VITE_GOOGLE_MAPS_EMBED_URL || "https://maps.google.com/maps?q=Jmal+Plaza+Shop+3+High+Court+Road+Near+Car+Chowk+Rawalpindi&t=&z=15&ie=UTF8&iwloc=&output=embed",
  
  businessHours: "Mon - Sat: 10:00 AM - 10:00 PM (PKT)",
  
  socials: {
    instagram: "https://instagram.com/arsportsislamabad1?utm_source=qr&psln=MTNobTUzamxpemx0Yw==",
    x: "https://x.com/arsportsis",
    threads: "https://www.threads.com/@arsportsislamabad1",
    tiktok: "https://www.tiktok.com/@arsportsislamabad?_r=1&_t=ZS-9AXWdtZalco",
    facebook: "https://www.facebook.com/share/19w2iJP7rp/"
  }
};

/**
 * Format and encode a WhatsApp message and generate the official wa.me chat URL.
 */
export function createWhatsAppUrl(messageText) {
  const number = BUSINESS_CONFIG.whatsappNumber ? BUSINESS_CONFIG.whatsappNumber.trim() : "";
  
  if (!number) {
    return {
      isValid: false,
      url: "",
      errorMessage: "WhatsApp number is not configured in BUSINESS_CONFIG."
    };
  }
  
  const encodedMessage = encodeURIComponent(messageText);
  return {
    isValid: true,
    url: `https://wa.me/${number}?text=${encodedMessage}`,
    errorMessage: null
  };
}

/**
 * Open WhatsApp in a new browser tab with given message text.
 */
export function openWhatsAppChat(messageText) {
  const { isValid, url, errorMessage } = createWhatsAppUrl(messageText);
  if (!isValid) {
    alert(`Configuration Notice: ${errorMessage}\nPlease update 'whatsappNumber' in src/config/businessConfig.js.`);
    return false;
  }
  window.open(url, '_blank', 'noopener,noreferrer');
  return true;
}
