"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HorizontalShell, Panel } from "@/components/HorizontalShell";
import { WatchDial } from "@/components/WatchDial";
import { FAQ } from "@/components/FAQ";
import {
  WhatsAppIcon,
  InstagramIcon,
  ArrowIcon,
  PlayIcon,
} from "@/components/icons";
import { SITE, waLink } from "@/lib/site";

const PANELS = 9;

const featuredBrands = [
  { name: "Rolex", line: "Submariner · Daytona · GMT", code: "01" },
  { name: "Audemars Piguet", line: "Royal Oak · Offshore", code: "02" },
  { name: "Patek Philippe", line: "Nautilus · Aquanaut", code: "03" },
  { name: "Cartier", line: "Santos · Tank · Panthère", code: "04" },
  { name: "Richard Mille", line: "RM 011 · RM 35", code: "05" },
  { name: "Omega", line: "Speedmaster · Seamaster", code: "06" },
  { name: "Hublot", line: "Big Bang · Classic Fusion", code: "07" },
  { name: "IWC", line: "Portugieser · Pilot", code: "08" },
];

const processSteps = [
  {
    n: "01",
    t: "Conversación",
    d: "Escríbenos por WhatsApp con la referencia o foto del reloj. Te respondemos en menos de 30 minutos.",
  },
  {
    n: "02",
    t: "Valuación",
    d: "Recibes una valuación honesta en 24h, basada en mercado spot, condición de la pieza y completitud.",
  },
  {
    n: "03",
    t: "Verificación",
    d: "Cita en showroom Guadalajara o envío seguro. Tres capas de autenticación, números de serie y movimiento.",
  },
  {
    n: "04",
    t: "Cierre",
    d: "Recibes tu pago, tu reloj nuevo, o ambos en caso de permuta. Garantía de 12 meses incluida.",
  },
];

const testimonials = [
  {
    name: "Eduardo R.",
    role: "Cliente — Polanco",
    text: "Vendí mi GMT Master II en una tarde. La valuación fue justa y el pago inmediato. Cero rodeos, cero juegos.",
  },
  {
    name: "Mariana S.",
    role: "Cliente — Guadalajara",
    text: "Permuté un Datejust por un Nautilus. El proceso fue impecable, transparente, y la diferencia me la financiaron a 6 meses.",
  },
  {
    name: "Andrés V.",
    role: "Cliente — Monterrey",
    text: "Llevo tres compras con Ultra. Es el único lugar en México donde sé que la pieza llega exactamente como me la prometieron.",
  },
];

export default function Page() {
  return (
    <main className="relative bg-ink-950 text-cream">
      <NavBar />
      <FloatingWhatsApp />
      <HorizontalShell panels={PANELS}>
        <HeroPanel />
        <ManifestoPanel />
        <PillarCompraPanel />
        <PillarVentaPanel />
        <PillarPermutaPanel />
        <ProcesoPanel />
        <AutenticidadPanel />
        <TestimoniosPanel />
        <CierrePanel />
      </HorizontalShell>
      <Footer />
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* NavBar                                                                     */
/* -------------------------------------------------------------------------- */

function NavBar() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#hero"
          className="pointer-events-auto flex items-center gap-2.5"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full border border-gold-300/40 bg-ink-900/60 backdrop-blur">
            <span className="text-gold-gradient font-display text-sm font-semibold">
              U
            </span>
          </span>
          <span className="hidden font-mono text-[10px] tracking-ultra text-cream/55 sm:block">
            ULTRA · WATCHES · MX
          </span>
        </a>
        <nav className="pointer-events-auto hidden items-center gap-7 font-mono text-[11px] tracking-ultra text-cream/55 md:flex">
          <a className="hover:text-cream" href="#compra">COMPRA</a>
          <a className="hover:text-cream" href="#venta">VENTA</a>
          <a className="hover:text-cream" href="#permuta">PERMUTA</a>
          <a className="hover:text-cream" href="#proceso">PROCESO</a>
        </nav>
        <a
          href={waLink("Hola, vengo del sitio. Me interesa cotizar un reloj.")}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto group inline-flex items-center gap-2 rounded-full border border-gold-300/50 bg-ink-900/60 px-4 py-2 font-mono text-[10px] tracking-ultra text-gold-100 backdrop-blur transition-colors hover:bg-gold-300 hover:text-ink-950"
        >
          <WhatsAppIcon className="h-3.5 w-3.5" />
          COTIZAR
        </a>
      </div>
    </header>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Hola Ultra Watches MX, me interesa cotizar.")}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 overflow-hidden rounded-full border border-gold-300/60 bg-ink-900/80 px-5 py-3 font-mono text-[10px] tracking-ultra text-gold-100 shadow-[0_18px_60px_-10px_rgba(199,154,44,0.4)] backdrop-blur-xl transition-all hover:bg-gold-300 hover:text-ink-950 md:bottom-10 md:right-10"
      aria-label="Cotizar por WhatsApp"
    >
      <span className="relative grid h-7 w-7 place-items-center rounded-full bg-gold-300 text-ink-950 transition-colors group-hover:bg-ink-950 group-hover:text-gold-200">
        <span className="absolute inset-0 animate-ping rounded-full bg-gold-300 opacity-40" />
        <WhatsAppIcon className="relative h-3.5 w-3.5" />
      </span>
      <span className="hidden sm:inline">COTIZAR · WHATSAPP</span>
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/* Panel 1 — HERO                                                             */
/* -------------------------------------------------------------------------- */

function HeroPanel() {
  return (
    <Panel className="noise bg-gradient-to-br from-ink-950 via-ink-900 to-ink-950">
      <div id="hero" className="relative w-full min-h-screen lg:absolute lg:inset-0">
        {/* Background grid + glow */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(232,227,214,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(232,227,214,0.6) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/15 blur-[100px] animate-pulse-glow" />

        <div className="relative z-10 grid min-h-screen grid-cols-1 items-center gap-10 px-6 pt-28 pb-20 md:px-16 lg:h-full lg:min-h-0 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-24 lg:pt-24 lg:pb-24">
          {/* Left — copy */}
          <div className="flex flex-col">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 inline-flex items-center gap-3 font-mono text-[11px] tracking-ultra text-gold-200/75"
            >
              <span className="h-px w-10 bg-gold-300/60" />
              MÉXICO · EST. 2024
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="font-display text-[14vw] font-light leading-[0.85] tracking-tight md:text-[10vw] lg:text-[7.4vw]"
            >
              Ultra
              <br />
              <span className="text-gold-gradient italic">Watches.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="mt-8 max-w-md font-display text-xl font-light leading-snug text-cream/75 md:text-2xl"
            >
              Casa de relojería de lujo en México.
              <br />
              <span className="text-cream/55">
                Compramos, vendemos y permutamos las piezas más codiciadas del
                mundo.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href={waLink(
                  "Hola, vengo de la landing. Me interesa una pieza."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-gold-300 px-7 py-3.5 text-sm font-medium text-ink-950 transition-all hover:bg-gold-200"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Cotizar por WhatsApp
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-cream/15 px-5 py-3 text-sm text-cream/75 transition-colors hover:border-gold-300/50 hover:text-gold-100"
              >
                <InstagramIcon className="h-4 w-4" />
                {SITE.instagramHandle}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="mt-14 flex items-baseline gap-8 font-mono text-[11px] tracking-ultra text-cream/45 lg:hidden"
            >
              <ScrollHint />
            </motion.div>
          </div>

          {/* Right — watch dial */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex h-full items-center justify-center"
          >
            <div className="aspect-square w-[min(78vw,520px)]">
              <WatchDial />
            </div>
            <div className="pointer-events-none absolute inset-0 flex items-end justify-center pb-4 font-mono text-[10px] tracking-ultra text-cream/40">
              REF. ULTRA-001 · CHRONOMETER
            </div>
          </motion.div>
        </div>

        {/* Scroll hint - desktop */}
        <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 lg:block">
          <ScrollHint />
        </div>
      </div>
    </Panel>
  );
}

function ScrollHint() {
  return (
    <div className="flex items-center gap-4 font-mono text-[10px] tracking-ultra text-cream/45">
      <motion.span
        animate={{ x: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        →
      </motion.span>
      DESLIZA PARA EXPLORAR
      <span className="h-px w-16 bg-cream/15" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Panel 2 — MANIFESTO                                                        */
/* -------------------------------------------------------------------------- */

function ManifestoPanel() {
  return (
    <Panel className="bg-ink-950">
      <div className="relative w-full min-h-screen grid grid-cols-1 items-center px-8 py-24 md:px-16 lg:absolute lg:inset-0 lg:grid-cols-12 lg:px-24">
        <div className="lg:col-span-2 lg:border-r lg:border-cream/10 lg:pr-8">
          <span className="font-mono text-[11px] tracking-ultra text-gold-200/70">
            / 01 — MANIFIESTO
          </span>
        </div>
        <div className="lg:col-span-8 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1 }}
            className="font-display text-3xl font-light leading-[1.05] md:text-5xl lg:text-[5.4vw]"
          >
            Un buen reloj no se compra.
            <br />
            <span className="italic text-cream/55">
              Se hereda, se persigue,
            </span>
            <br />
            <span className="text-gold-gradient">se busca con paciencia.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-10 max-w-2xl text-base leading-relaxed text-cream/65 md:text-lg"
          >
            En Ultra trabajamos para que cada transacción se sienta como una
            curaduría, no como una venta. Tres caminos, una misma obsesión:
            piezas auténticas, valuaciones justas, conversación sin rodeos.
          </motion.p>

          <div className="mt-14 grid grid-cols-3 gap-6 lg:gap-12">
            <Stat number="100%" label="Autenticidad verificada" />
            <Stat number="<24h" label="Valuación promedio" />
            <Stat number="12m" label="Garantía propia" />
          </div>
        </div>
      </div>
    </Panel>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-light text-gold-gradient md:text-5xl">
        {number}
      </div>
      <div className="mt-2 font-mono text-[10px] tracking-ultra text-cream/45">
        {label}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Panel 3 — COMPRA                                                           */
/* -------------------------------------------------------------------------- */

function PillarCompraPanel() {
  return (
    <Panel className="bg-gradient-to-br from-ink-900 via-ink-950 to-ink-900">
      <div id="compra" className="relative w-full min-h-screen grid grid-cols-1 lg:absolute lg:inset-0 lg:grid-cols-2">
        {/* Left — visual */}
        <div className="relative hidden overflow-hidden border-r border-cream/5 lg:block">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-12 rounded-full bg-gold-300/10 blur-3xl" />
              <div className="relative font-display text-[24vw] font-light leading-none text-gold-gradient">
                01
              </div>
            </div>
          </div>
          <PillarLabel text="COMPRA · I" />
        </div>

        {/* Right — copy */}
        <div className="relative flex flex-col justify-center px-6 py-20 md:px-16 md:py-24 lg:px-20">
          <span className="font-mono text-[11px] tracking-ultra text-gold-200/70 lg:hidden">
            / 02 — COMPRA
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.9 }}
            className="mt-4 font-display text-4xl font-light leading-[1.05] md:text-6xl lg:text-7xl"
          >
            Te compramos tu reloj.
            <br />
            <span className="italic text-gold-gradient">Hoy.</span>
          </motion.h2>

          <p className="mt-8 max-w-md text-base leading-relaxed text-cream/65 md:text-lg">
            Si tienes una pieza de lujo y buscas liquidez sin complicarte, te
            ofrecemos una valuación spot honesta en menos de 24 horas. Pago
            inmediato — transferencia, efectivo o esquema mixto.
          </p>

          <ul className="mt-10 space-y-4">
            <Bullet>Valuación en menos de 24h</Bullet>
            <Bullet>Pago inmediato al cerrar</Bullet>
            <Bullet>Sin comisiones ocultas</Bullet>
            <Bullet>Discreción y manejo seguro de la pieza</Bullet>
          </ul>

          <div className="mt-10">
            <a
              href={waLink(
                "Hola Ultra, tengo un reloj para vender. ¿Me ayudan con la valuación?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border-b border-gold-300/60 pb-1.5 font-mono text-[11px] tracking-ultra text-gold-100 transition-colors hover:text-gold-200"
            >
              SOLICITAR VALUACIÓN
              <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </Panel>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm text-cream/75 md:text-base">
      <span className="mt-2 h-1 w-6 flex-shrink-0 bg-gold-300/70" />
      {children}
    </li>
  );
}

function PillarLabel({ text }: { text: string }) {
  return (
    <div className="absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 font-mono text-[10px] tracking-ultra text-cream/35">
      {text}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Panel 4 — VENTA                                                            */
/* -------------------------------------------------------------------------- */

function PillarVentaPanel() {
  return (
    <Panel className="bg-ink-950">
      <div id="venta" className="relative w-full min-h-screen grid grid-cols-1 lg:absolute lg:inset-0 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Left — copy */}
        <div className="relative flex flex-col justify-center border-r border-cream/5 px-6 py-20 md:px-16 md:py-24 lg:px-20">
          <span className="font-mono text-[11px] tracking-ultra text-gold-200/70">
            / 03 — VENTA
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.9 }}
            className="mt-4 font-display text-4xl font-light leading-[1.05] md:text-6xl lg:text-[5.4vw]"
          >
            Catálogo
            <br />
            <span className="text-gold-gradient italic">curado.</span>
          </motion.h2>
          <p className="mt-8 max-w-sm text-base leading-relaxed text-cream/65 md:text-lg">
            Piezas seleccionadas a mano. Cada reloj viene con su documentación,
            verificación interna y garantía. Sin réplicas. Sin sorpresas.
          </p>
          <div className="mt-10">
            <a
              href={waLink("Hola, me interesa ver el catálogo disponible.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border-b border-gold-300/60 pb-1.5 font-mono text-[11px] tracking-ultra text-gold-100 transition-colors hover:text-gold-200"
            >
              PEDIR CATÁLOGO ACTUAL
              <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Right — brand grid */}
        <div className="relative p-6 md:p-10 lg:overflow-hidden lg:p-12">
          <div className="grid grid-cols-2 gap-3 md:gap-4 lg:h-full">
            {featuredBrands.map((b, i) => (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group relative flex flex-col justify-between overflow-hidden border border-cream/10 bg-ink-900/40 p-4 backdrop-blur transition-all hover:border-gold-300/40 hover:bg-ink-800/60 md:p-6"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] tracking-ultra text-cream/40">
                    {b.code}
                  </span>
                  <div className="h-1.5 w-1.5 rounded-full bg-gold-300/60 transition-colors group-hover:bg-gold-200" />
                </div>
                <div>
                  <div className="font-display text-lg font-light leading-tight transition-colors group-hover:text-gold-100 md:text-2xl">
                    {b.name}
                  </div>
                  <div className="mt-1 font-mono text-[9px] tracking-ultra text-cream/40 md:text-[10px]">
                    {b.line}
                  </div>
                </div>
                <div
                  className="absolute -bottom-px -right-px h-12 w-12 opacity-0 transition-opacity group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at bottom right, rgba(199,154,44,0.5), transparent 60%)",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Panel>
  );
}

/* -------------------------------------------------------------------------- */
/* Panel 5 — PERMUTA                                                          */
/* -------------------------------------------------------------------------- */

function PillarPermutaPanel() {
  return (
    <Panel className="bg-gradient-to-br from-ink-950 via-ink-900 to-ink-950">
      <div id="permuta" className="relative w-full min-h-screen grid grid-cols-1 lg:absolute lg:inset-0 lg:grid-cols-2">
        {/* Left — copy */}
        <div className="relative flex flex-col justify-center px-6 py-20 md:px-16 md:py-24 lg:px-20">
          <span className="font-mono text-[11px] tracking-ultra text-gold-200/70">
            / 04 — PERMUTA
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.9 }}
            className="mt-4 font-display text-4xl font-light leading-[1.05] md:text-6xl lg:text-7xl"
          >
            Cambia un reloj
            <br />
            <span className="italic text-gold-gradient">por otro.</span>
          </motion.h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-cream/65 md:text-lg">
            Tu colección evoluciona. La permuta es la forma más elegante de
            actualizarla. Valuamos tu pieza actual, la aplicamos como crédito y
            financiamos la diferencia hasta 6 meses sin intereses.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 max-w-md">
            <PermutaPoint k="01" v="Valuación spot" />
            <PermutaPoint k="02" v="Crédito inmediato" />
            <PermutaPoint k="03" v="Diferencia a meses" />
            <PermutaPoint k="04" v="Cierre en showroom" />
          </div>

          <div className="mt-10">
            <a
              href={waLink(
                "Hola, me interesa permutar mi reloj actual por otra pieza."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border-b border-gold-300/60 pb-1.5 font-mono text-[11px] tracking-ultra text-gold-100 transition-colors hover:text-gold-200"
            >
              INICIAR PERMUTA
              <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Right — diagram */}
        <div className="relative hidden items-center justify-center border-l border-cream/5 lg:flex">
          <PermutaDiagram />
          <PillarLabel text="PERMUTA · III" />
        </div>
      </div>
    </Panel>
  );
}

function PermutaPoint({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="font-mono text-[10px] text-gold-300/70 tnum">{k}</span>
      <span className="font-display text-base text-cream/85 md:text-lg">
        {v}
      </span>
    </div>
  );
}

function PermutaDiagram() {
  return (
    <svg viewBox="0 0 360 360" className="h-[60%] w-[60%]" aria-hidden>
      <defs>
        <linearGradient id="permgold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f5e7b8" />
          <stop offset="0.5" stopColor="#dcb751" />
          <stop offset="1" stopColor="#a87d1c" />
        </linearGradient>
      </defs>
      {/* Outer rings */}
      <circle cx="180" cy="180" r="160" stroke="rgba(199,154,44,0.15)" strokeWidth="1" fill="none" />
      <circle cx="180" cy="180" r="120" stroke="rgba(199,154,44,0.25)" strokeWidth="1" fill="none" strokeDasharray="2 6" />
      {/* Left watch */}
      <circle cx="100" cy="180" r="44" stroke="url(#permgold)" strokeWidth="2" fill="#0a0a0b" />
      <circle cx="100" cy="180" r="4" fill="url(#permgold)" />
      <line x1="100" y1="180" x2="100" y2="148" stroke="url(#permgold)" strokeWidth="2" strokeLinecap="round" />
      <line x1="100" y1="180" x2="122" y2="180" stroke="url(#permgold)" strokeWidth="2" strokeLinecap="round" />
      {/* Right watch */}
      <circle cx="260" cy="180" r="44" stroke="url(#permgold)" strokeWidth="2" fill="#0a0a0b" />
      <circle cx="260" cy="180" r="4" fill="url(#permgold)" />
      <line x1="260" y1="180" x2="260" y2="152" stroke="url(#permgold)" strokeWidth="2" strokeLinecap="round" />
      <line x1="260" y1="180" x2="284" y2="180" stroke="url(#permgold)" strokeWidth="2" strokeLinecap="round" />
      {/* Arrows */}
      <path d="M 150 170 Q 180 145 210 170" stroke="url(#permgold)" strokeWidth="1.4" fill="none" />
      <path d="M 205 165 L 212 170 L 205 175" stroke="url(#permgold)" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <path d="M 210 190 Q 180 215 150 190" stroke="url(#permgold)" strokeWidth="1.4" fill="none" />
      <path d="M 155 185 L 148 190 L 155 195" stroke="url(#permgold)" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      {/* Labels */}
      <text x="100" y="252" textAnchor="middle" fill="#e8e3d6" opacity="0.65" fontSize="10" fontFamily="monospace" letterSpacing="2">TU PIEZA</text>
      <text x="260" y="252" textAnchor="middle" fill="#e8e3d6" opacity="0.65" fontSize="10" fontFamily="monospace" letterSpacing="2">PIEZA NUEVA</text>
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Panel 6 — PROCESO                                                          */
/* -------------------------------------------------------------------------- */

function ProcesoPanel() {
  return (
    <Panel className="bg-ink-950">
      <div id="proceso" className="relative w-full min-h-screen flex flex-col justify-center px-6 py-20 md:px-16 lg:absolute lg:inset-0 lg:px-24 lg:py-24">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <span className="font-mono text-[11px] tracking-ultra text-gold-200/70">
              / 05 — PROCESO
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.8 }}
              className="mt-4 font-display text-4xl font-light leading-[1] md:text-6xl lg:text-7xl"
            >
              Cuatro pasos.
              <br />
              <span className="italic text-cream/55">Sin fricción.</span>
            </motion.h2>
          </div>
          <div className="hidden max-w-xs text-sm leading-relaxed text-cream/55 md:block">
            Diseñado para que la transacción sea tan refinada como la pieza
            misma. Desde el primer mensaje hasta tu reloj en mano.
          </div>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-cream/10 bg-cream/10 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group relative flex flex-col justify-between bg-ink-950 p-6 transition-colors hover:bg-ink-900 md:p-8 lg:min-h-[280px]"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-4xl font-light text-gold-gradient md:text-5xl">
                  {step.n}
                </span>
                <ArrowIcon className="h-4 w-4 text-cream/30 transition-transform group-hover:translate-x-1 group-hover:text-gold-200" />
              </div>
              <div className="mt-10">
                <h3 className="font-display text-xl font-light md:text-2xl">
                  {step.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/55">
                  {step.d}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Panel>
  );
}

/* -------------------------------------------------------------------------- */
/* Panel 7 — AUTENTICIDAD                                                     */
/* -------------------------------------------------------------------------- */

function AutenticidadPanel() {
  return (
    <Panel className="bg-gradient-to-bl from-ink-900 via-ink-950 to-ink-900">
      <div className="relative w-full min-h-screen grid grid-cols-1 lg:absolute lg:inset-0 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative flex flex-col justify-center px-6 py-20 md:px-16 md:py-24 lg:px-20">
          <span className="font-mono text-[11px] tracking-ultra text-gold-200/70">
            / 06 — AUTENTICIDAD
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.9 }}
            className="mt-4 font-display text-4xl font-light leading-[1.05] md:text-6xl lg:text-[4.8vw]"
          >
            La diferencia
            <br />
            entre un reloj
            <br />
            <span className="italic text-gold-gradient">y un Ultra.</span>
          </motion.h2>

          <p className="mt-8 max-w-md text-base leading-relaxed text-cream/65 md:text-lg">
            Cada pieza que pasa por nuestras manos cruza un protocolo de tres
            capas de autenticación. Si una sola capa falla, la pieza no entra a
            inventario. Sin excepciones.
          </p>

          <div className="mt-10 space-y-5">
            <TrustLayer n="I" t="Inspección visual" d="Bajo lupa 10x — caso, dial, manecillas, número de referencia y cierre." />
            <TrustLayer n="II" t="Verificación de movimiento" d="Apertura controlada para validar calibre, acabados y serie del movimiento." />
            <TrustLayer n="III" t="Cotejo con fabricante" d="Validación del número de serie contra registros oficiales cuando aplica." />
          </div>
        </div>

        {/* Right — visual ticker */}
        <div className="relative hidden items-center justify-center overflow-hidden border-l border-cream/5 lg:flex">
          <CertificateCard />
        </div>
      </div>
    </Panel>
  );
}

function TrustLayer({ n, t, d }: { n: string; t: string; d: string }) {
  return (
    <div className="flex gap-5 border-l border-gold-300/30 pl-5">
      <div>
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-[10px] tracking-ultra text-gold-300/80">
            CAPA {n}
          </span>
          <span className="h-px w-8 bg-cream/15" />
        </div>
        <h4 className="mt-1 font-display text-xl font-light text-cream md:text-2xl">
          {t}
        </h4>
        <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-cream/55">
          {d}
        </p>
      </div>
    </div>
  );
}

function CertificateCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: -2 }}
      whileInView={{ opacity: 1, y: 0, rotate: -2 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative w-[78%] max-w-sm border border-gold-300/30 bg-gradient-to-br from-ink-800 to-ink-900 p-8 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]"
    >
      <div className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full border border-gold-300/40">
        <span className="text-gold-gradient font-display text-base">U</span>
      </div>
      <div className="font-mono text-[10px] tracking-ultra text-gold-200/75">
        CERTIFICADO INTERNO
      </div>
      <div className="mt-1 font-display text-xs tracking-widest text-cream/40">
        Nº ULTRA-MX-2026-0429
      </div>
      <div className="mt-10">
        <div className="font-mono text-[10px] tracking-ultra text-cream/40">
          PIEZA
        </div>
        <div className="font-display text-2xl font-light text-cream">
          Submariner Date
        </div>
        <div className="font-mono text-[10px] text-cream/50">REF. 126610LN</div>
      </div>
      <div className="hairline my-7" />
      <div className="grid grid-cols-2 gap-y-3 font-mono text-[10px] tracking-ultra">
        <div className="text-cream/40">CAJA</div>
        <div className="text-right text-gold-200">VERIFICADA</div>
        <div className="text-cream/40">PAPELES</div>
        <div className="text-right text-gold-200">COMPLETOS</div>
        <div className="text-cream/40">MOVIMIENTO</div>
        <div className="text-right text-gold-200">CAL. 3235</div>
        <div className="text-cream/40">GARANTÍA</div>
        <div className="text-right text-gold-200">12 MESES</div>
      </div>
      <div className="mt-8 flex items-end justify-between">
        <div>
          <div className="font-display text-2xl italic text-cream/70">
            Ultra
          </div>
          <div className="mt-1 font-mono text-[8px] tracking-ultra text-cream/35">
            FIRMA AUTORIZADA · {SITE.name.toUpperCase()}
          </div>
        </div>
        <div className="font-mono text-[9px] text-cream/30">
          AUTH · {new Date().toISOString().slice(0, 10)}
        </div>
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* Panel 8 — TESTIMONIOS                                                      */
/* -------------------------------------------------------------------------- */

function TestimoniosPanel() {
  return (
    <Panel className="bg-ink-950">
      <div className="relative w-full min-h-screen flex flex-col px-6 py-20 md:px-16 lg:absolute lg:inset-0 lg:px-24">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="font-mono text-[11px] tracking-ultra text-gold-200/70">
              / 07 — TESTIMONIOS
            </span>
            <h2 className="mt-3 font-display text-3xl font-light leading-[1] md:text-5xl lg:text-6xl">
              Lo que dicen
              <br />
              <span className="italic text-gold-gradient">
                quienes ya están dentro.
              </span>
            </h2>
          </div>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Text testimonials */}
          <div className="flex flex-col justify-between gap-4">
            {testimonials.map((t, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="border-l-2 border-gold-300/50 bg-ink-900/40 p-6 backdrop-blur md:p-7"
              >
                <blockquote className="font-display text-lg font-light leading-snug text-cream/85 md:text-xl">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  <div className="grid h-8 w-8 place-items-center rounded-full border border-gold-300/40 bg-ink-800 font-display text-sm text-gold-200">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm text-cream">{t.name}</div>
                    <div className="font-mono text-[10px] tracking-ultra text-cream/45">
                      {t.role}
                    </div>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>

          {/* Video testimonials */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1">
            <VideoPlaceholder
              client="Carlos M."
              piece="Daytona 116500LN"
            />
            <VideoPlaceholder
              client="Renata G."
              piece="Royal Oak 15500ST"
            />
          </div>
        </div>
      </div>
    </Panel>
  );
}

function VideoPlaceholder({ client, piece }: { client: string; piece: string }) {
  return (
    <button className="group relative aspect-video w-full overflow-hidden border border-cream/10 bg-gradient-to-br from-ink-800 to-ink-900 transition-all hover:border-gold-300/40">
      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 30%, rgba(199,154,44,0.5), transparent 40%), radial-gradient(circle at 70% 70%, rgba(199,154,44,0.2), transparent 40%)",
        }}
      />
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid h-16 w-16 place-items-center rounded-full border border-gold-300/60 bg-ink-950/70 backdrop-blur transition-all group-hover:scale-110 group-hover:border-gold-200 group-hover:bg-gold-300 group-hover:text-ink-950">
          <PlayIcon className="h-5 w-5 translate-x-0.5 text-gold-100 transition-colors group-hover:text-ink-950" />
        </div>
      </div>
      {/* Label */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 text-left">
        <div>
          <div className="font-display text-base text-cream">{client}</div>
          <div className="font-mono text-[10px] tracking-ultra text-cream/55">
            {piece}
          </div>
        </div>
        <span className="font-mono text-[10px] tracking-ultra text-gold-200/70">
          VIDEO ·  01:24
        </span>
      </div>
    </button>
  );
}

/* -------------------------------------------------------------------------- */
/* Panel 9 — CIERRE (FAQ + CTA)                                               */
/* -------------------------------------------------------------------------- */

function CierrePanel() {
  return (
    <Panel className="bg-ink-950">
      <div className="relative w-full min-h-screen grid grid-cols-1 lg:absolute lg:inset-0 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Left — FAQ */}
        <div className="relative flex flex-col justify-center border-b border-cream/5 px-6 py-20 md:px-12 lg:overflow-y-auto lg:border-b-0 lg:border-r lg:py-24 lg:px-16">
          <span className="font-mono text-[11px] tracking-ultra text-gold-200/70">
            / 08 — FAQ
          </span>
          <h2 className="mt-3 font-display text-3xl font-light leading-[1] md:text-5xl">
            Preguntas
            <br />
            <span className="italic text-gold-gradient">frecuentes.</span>
          </h2>
          <div className="mt-10">
            <FAQ />
          </div>
        </div>

        {/* Right — CTA */}
        <CTAFinal />
      </div>
    </Panel>
  );
}

function CTAFinal() {
  return (
    <div className="noise relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-ink-900 via-ink-950 to-ink-800 px-6 py-20 md:px-16 md:py-24 lg:min-h-0">
      <div className="absolute inset-0">
        <div
          className="absolute left-1/2 top-1/2 h-[55vh] w-[55vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/20 blur-[120px] animate-pulse-glow"
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(232,227,214,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(232,227,214,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>
      <div className="relative z-10 max-w-md text-center">
        <span className="font-mono text-[11px] tracking-ultra text-gold-200/75">
          / 09 — TU PRÓXIMO RELOJ
        </span>
        <h2 className="mt-6 font-display text-5xl font-light leading-[0.95] md:text-7xl">
          ¿Listo
          <br />
          para hablar
          <br />
          <span className="italic text-gold-gradient">de tiempo?</span>
        </h2>
        <p className="mx-auto mt-7 max-w-sm text-base leading-relaxed text-cream/65 md:text-lg">
          Cuéntanos qué buscas o qué tienes. Un asesor te responde en menos de
          30 minutos por WhatsApp.
        </p>
        <a
          href={waLink(
            "Hola Ultra Watches MX, vengo de la landing. Me interesa cotizar."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-gold-300 px-8 py-4 text-base font-medium text-ink-950 transition-all hover:bg-gold-200"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Escribir por WhatsApp
          <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
        <div className="mt-8 flex items-center justify-center gap-6 font-mono text-[10px] tracking-ultra text-cream/45">
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-gold-100"
          >
            <InstagramIcon className="h-3.5 w-3.5" />
            INSTAGRAM
          </a>
          <span className="h-px w-8 bg-cream/15" />
          <span>{SITE.city.toUpperCase()}</span>
        </div>
        <div className="mt-6 font-mono text-[9px] tracking-ultra text-cream/30">
          CASA DE ALTA RELOJERÍA · <span className="text-gold-200/80">{SITE.name.toUpperCase()}</span>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Footer                                                                     */
/* -------------------------------------------------------------------------- */

function Footer() {
  return (
    <footer className="relative border-t border-cream/10 bg-ink-950 px-6 py-12 md:px-12">
      <div className="mx-auto max-w-[1600px]">
        {/* Top row — brand + contact */}
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-start">
          {/* Brand */}
          <div className="flex items-start gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-gold-300/40 bg-ink-900">
              <span className="text-gold-gradient font-display text-sm">U</span>
            </span>
            <div>
              <div className="font-mono text-[10px] tracking-ultra text-cream/55">
                ULTRA · WATCHES · MX
              </div>
              <div className="mt-1 font-display text-base italic text-cream/70">
                {SITE.tagline}
              </div>
              <div className="mt-3 font-mono text-[10px] tracking-ultra text-cream/40">
                {SITE.city.toUpperCase()} · MÉXICO
              </div>
            </div>
          </div>

          {/* Contacto */}
          <div className="flex flex-col gap-3 font-mono text-[11px] tracking-ultra text-cream/55">
            <div className="text-[10px] text-cream/35">CONTACTO</div>
            <a
              href={waLink("Hola Ultra Watches MX")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-gold-100"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              {SITE.whatsappDisplay}
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-gold-100"
            >
              <InstagramIcon className="h-3.5 w-3.5" />
              {SITE.instagramHandle}
            </a>
            <a href={`mailto:${SITE.email}`} className="hover:text-gold-100">
              {SITE.email}
            </a>
          </div>
        </div>

        {/* Hairline */}
        <div className="hairline my-10" />

        {/* Bottom row — propiedad + copyright */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="font-mono text-[10px] tracking-ultra text-gold-200/60">
              CASA DE RELOJES
            </div>
            <div className="mt-1.5 font-display text-xl font-light italic tracking-wide text-cream md:text-2xl">
              {SITE.name}
            </div>
          </div>
          <div className="font-mono text-[9px] tracking-ultra text-cream/30 md:text-right">
            © {new Date().getFullYear()} ULTRA WATCHES MX · TODOS LOS DERECHOS RESERVADOS
          </div>
        </div>
      </div>
    </footer>
  );
}
