# Ultra Watches MX — Landing

Sitio cinematográfico para **Ultra Watches MX**, casa de relojería de lujo en México (compra · venta · permuta).

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS · Framer Motion.
**Aesthetic:** Dark Mode Luxe (gunmetal + acento dorado).
**Estructura:** Infinite Horizontal Scroll (9 paneles) en desktop, stack vertical responsive en móvil.

---

## Correr en local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
npm start
```

La página se prerenderiza como estática (`○ Static`), lista para CDN.

---

## Configurar antes de publicar

Edita [lib/site.ts](lib/site.ts):

```ts
whatsapp: "5215555555555",   // ⇠ tu número en formato 521 + 10 dígitos
whatsappDisplay: "+52 1 ...",
email: "contacto@...",
url: "https://ultrawatchesmx.com",
```

Todos los CTAs de WhatsApp del sitio leen de este archivo — un solo cambio actualiza la página completa.

---

## Estructura

```
app/
 ├─ layout.tsx       Root layout + fuentes + metadata SEO + JSON-LD
 ├─ page.tsx         9 paneles del horizontal scroll
 └─ globals.css      Variables, utilidades dark-luxe, scrollbar
components/
 ├─ HorizontalShell.tsx   Motor de scroll horizontal (Framer Motion)
 ├─ WatchDial.tsx         Esfera de reloj SVG animada (hero)
 ├─ FAQ.tsx               Acordeón de preguntas frecuentes
 └─ icons.tsx             Iconos SVG inline (WhatsApp, Instagram, etc.)
lib/
 └─ site.ts          Configuración global del sitio
```

## Paneles (horizontal)

| #  | Panel              | Propósito |
|----|--------------------|-----------|
| 01 | Hero               | Reveal de marca + esfera animada |
| 02 | Manifiesto         | Tesis de marca + métricas de confianza |
| 03 | Pilar I — Compra   | "Te compramos tu reloj. Hoy." |
| 04 | Pilar II — Venta   | Catálogo curado + grid de marcas |
| 05 | Pilar III — Permuta| Cambia un reloj por otro |
| 06 | Proceso            | 4 pasos sin fricción |
| 07 | Autenticidad       | Protocolo de 3 capas + certificado |
| 08 | Testimonios        | Texto + video (placeholders listos) |
| 09 | FAQ + CTA final    | 8 preguntas + WhatsApp |

## Notas de implementación

- **Responsivo:** El shell horizontal detecta `min-width: 1024px`. En móvil hace un stack vertical limpio, sin scroll horizontal forzado.
- **Reduced motion:** Las animaciones se desactivan vía `prefers-reduced-motion: reduce`.
- **SEO:** Title template, Open Graph, Twitter Card, JSON-LD `Store` schema, canonical, favicon SVG. Heading hierarchy correcta (un H1, H2 por panel, H3 en sub-items).
- **Performance:** Cero imágenes raster — la esfera de reloj y el diagrama de permuta son SVG inline. Las fuentes usan `next/font` con `display: swap`. Página prerenderizada como estática.
- **Sustituir videos:** Los `VideoPlaceholder` están listos para conectar a un `<video>` real o lightbox (YouTube/Vimeo) cuando tengas los testimoniales filmados.

## Próximos pasos sugeridos

1. **Configurar WhatsApp real** en `lib/site.ts`.
2. **Conectar videos de testimoniales** (Mux, Vimeo, o `<video>` con CDN propio).
3. **Agregar dominio + OG image** (`public/og.jpg`, 1200×630).
4. **Tracking:** GA4 o Plausible para medir clicks a WhatsApp (event: `whatsapp_click`).
5. **Inventario dinámico:** Si más adelante quieres mostrar el catálogo real, conecta una fuente de datos (Sanity, Notion, Airtable o Sheets) y reemplaza el array `featuredBrands` en `app/page.tsx`.
