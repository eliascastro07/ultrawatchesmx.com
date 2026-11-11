import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-display",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description:
    "Casa de relojes de lujo en México. Compramos, vendemos y permutamos Rolex, Audemars Piguet, Patek Philippe, Cartier y más. Piezas 100% auténticas, asesoría personalizada, cotización por WhatsApp.",
  keywords: [
    "relojes de lujo México",
    "comprar Rolex México",
    "vender Rolex CDMX",
    "permuta de relojes",
    "Audemars Piguet México",
    "Patek Philippe México",
    "casa de relojes",
    "Ultra Watches MX",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description:
      "Compramos, vendemos y permutamos relojes de lujo en México. 100% auténticos. Cotiza por WhatsApp.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description:
      "Casa de relojes de lujo en México. Compra · Venta · Permuta.",
  },
  alternates: { canonical: SITE.url },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es-MX"
      className={`${inter.variable} ${cormorant.variable} ${jetbrains.variable}`}
    >
      <body className="bg-ink-950 text-cream antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              name: SITE.name,
              description:
                "Casa de relojes de lujo: compra, venta y permuta de Rolex, AP, Patek Philippe y más en México.",
              url: SITE.url,
              image: `${SITE.url}/og.jpg`,
              telephone: `+${SITE.whatsapp}`,
              address: {
                "@type": "PostalAddress",
                addressLocality: SITE.city,
                addressCountry: "MX",
              },

              sameAs: [SITE.instagram],
              priceRange: "$$$$",
            }),
          }}
        />
      </body>
    </html>
  );
}
