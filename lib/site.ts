export const SITE = {
  name: "Ultra Watches MX",
  shortName: "ULTRA",
  tagline: "Compra · Venta · Permuta de Relojes de Lujo",
  url: "https://ultrawatchesmx.com",
  city: "Guadalajara, Jalisco",
  whatsapp: "523333200109",
  whatsappDisplay: "+52 33 3320 0109",
  instagram: "https://www.instagram.com/ultrawatches__mx/",
  instagramHandle: "@ultrawatches__mx",
  email: "contacto@ultrawatchesmx.com",
};

export const waLink = (msg: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
