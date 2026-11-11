"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusIcon } from "./icons";

const faqs = [
  {
    q: "¿Cómo verifican la autenticidad de los relojes?",
    a: "Cada pieza pasa por un protocolo de autenticación de tres capas: revisión visual por relojeros certificados, verificación de movimiento bajo lupa y cotejo de números de serie contra registros del fabricante. No vendemos nada sin un certificado interno firmado.",
  },
  {
    q: "¿Cómo funciona la permuta de relojes?",
    a: "Nos envías fotos y referencia de tu reloj actual, te damos una valuación en 24h. Si aceptas, agendamos una cita presencial o envío seguro, verificamos la pieza y aplicamos el valor al reloj que deseas adquirir. Pagas o recibes la diferencia.",
  },
  {
    q: "¿Compran cualquier marca o solo high-end?",
    a: "Nos especializamos en relojería de lujo: Rolex, Audemars Piguet, Patek Philippe, Cartier, Richard Mille, Omega, IWC, Vacheron Constantin, Hublot, Panerai y otras de tier similar. Si tienes una marca distinta, escríbenos y evaluamos.",
  },
  {
    q: "¿Aceptan pagos a meses o financiamiento?",
    a: "Sí. Manejamos meses sin intereses con tarjetas participantes, transferencia bancaria, efectivo y permuta parcial. Para cotizaciones de financiamiento personalizado, contáctanos directo por WhatsApp.",
  },
  {
    q: "¿Hacen envíos a toda la República?",
    a: "Sí. Hacemos envíos asegurados a nivel nacional con paquetería especializada en alto valor. El reloj se entrega únicamente al titular con identificación. Cobertura incluida durante el tránsito.",
  },
  {
    q: "¿Ofrecen garantía después de la compra?",
    a: "Todos los relojes incluyen garantía propia de 12 meses sobre movimiento. Si la pieza original cuenta con garantía vigente del fabricante (Rolex Card, etc.), te la entregamos a tu nombre.",
  },
  {
    q: "¿Puedo ver el reloj antes de comprar?",
    a: "Por supuesto. Agendamos cita en showroom privado en Guadalajara. Solo escríbenos por WhatsApp con la referencia que te interesa y coordinamos día y hora.",
  },
  {
    q: "¿Cuánto tarda la valuación para vender mi reloj?",
    a: "Menos de 24 horas hábiles. Envías fotos del reloj, caja y papeles por WhatsApp, recibes una valuación inicial. Si avanzas, hacemos la verificación física y cerramos en el mismo día.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto w-full max-w-3xl">
      <ul className="divide-y divide-cream/10 border-y border-cream/10">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <li key={i}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-start justify-between gap-6 py-5 text-left transition-colors hover:text-gold-200"
                aria-expanded={isOpen}
              >
                <span className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-gold-300/60 tnum">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-xl leading-snug md:text-2xl">
                    {item.q}
                  </span>
                </span>
                <span
                  className={`mt-2 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-cream/20 transition-all duration-300 ${
                    isOpen ? "rotate-45 border-gold-300 text-gold-200" : ""
                  }`}
                >
                  <PlusIcon className="h-3.5 w-3.5" />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 pl-10 pr-10 text-sm leading-relaxed text-cream/65 md:text-base">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
