"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

/**
 * Infinite Horizontal Scroll Shell.
 *
 * How it works:
 *  - The outer <section> is `vh * panels` tall so we have vertical scroll runway.
 *  - We stick the inner viewport to the top of the screen.
 *  - We translate a horizontal track based on vertical scroll progress.
 *  - On mobile (<lg) we fall back to a native vertical stack so it remains usable.
 *
 * Each child should be a full panel (100vw x 100vh) styled by the consumer.
 */
export function HorizontalShell({
  children,
  panels,
}: {
  children: React.ReactNode;
  panels: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const m = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(m.matches);
    update();
    m.addEventListener("change", update);
    return () => m.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Smoothed scroll for premium feel
  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.45,
  });

  // Translate the track from 0% to -((panels-1)/panels * 100)%
  const x = useTransform(
    smooth,
    [0, 1],
    ["0%", `-${((panels - 1) / panels) * 100}%`]
  );

  if (!isDesktop) {
    // Mobile-first vertical stack
    return <div className="flex flex-col">{children}</div>;
  }

  return (
    <section
      ref={ref}
      aria-label="Ultra Watches MX — experiencia horizontal"
      style={{ height: `${panels * 100}vh` }}
      className="relative"
    >
      <div className="sticky top-0 h-screen w-screen overflow-hidden">
        <motion.div
          style={{
            x,
            width: `${panels * 100}vw`,
          }}
          className="flex h-full"
        >
          {children}
        </motion.div>
        {/* Progress rail */}
        <ScrollProgress progress={smooth} />
      </div>
    </section>
  );
}

function ScrollProgress({ progress }: { progress: any }) {
  const width = useTransform(progress, [0, 1], ["0%", "100%"]);
  return (
    <div className="pointer-events-none absolute bottom-6 left-1/2 z-50 hidden -translate-x-1/2 lg:block">
      <div className="flex w-[320px] items-center gap-3">
        <span className="font-mono text-[10px] tracking-ultra text-cream/40">
          PROGRESO
        </span>
        <div className="relative h-px flex-1 bg-cream/10">
          <motion.div
            style={{ width }}
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-gold-200 to-gold-400"
          />
        </div>
      </div>
    </div>
  );
}

export function Panel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full min-h-screen overflow-visible lg:h-screen lg:w-screen lg:flex-shrink-0 lg:overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}
