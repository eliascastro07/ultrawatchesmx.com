"use client";

import { motion } from "framer-motion";

/**
 * A pure-SVG luxury watch dial — used as a visual hero anchor.
 * No external image needed; renders crisply at any size and never blocks LCP.
 */
export function WatchDial({ size }: { size?: number }) {
  const sizeStyle = size ? { width: size, height: size } : undefined;
  return (
    <div
      className={`relative ${size ? "" : "h-full w-full"}`}
      style={sizeStyle}
      aria-hidden
    >
      {/* Glow behind */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(199,154,44,0.35), rgba(199,154,44,0.05) 60%, transparent 75%)",
          filter: "blur(20px)",
        }}
      />
      <motion.svg
        viewBox="0 0 200 200"
        className="relative z-10 h-full w-full"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <defs>
          <radialGradient id="case" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#3a3531" />
            <stop offset="55%" stopColor="#0d0c0b" />
            <stop offset="100%" stopColor="#000" />
          </radialGradient>
          <radialGradient id="dial" cx="50%" cy="42%" r="65%">
            <stop offset="0%" stopColor="#1a1714" />
            <stop offset="65%" stopColor="#0a0908" />
            <stop offset="100%" stopColor="#050505" />
          </radialGradient>
          <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f5e7b8" />
            <stop offset="0.5" stopColor="#dcb751" />
            <stop offset="1" stopColor="#a87d1c" />
          </linearGradient>
          <linearGradient id="rim" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#e6d18e" />
            <stop offset="0.5" stopColor="#8b6612" />
            <stop offset="1" stopColor="#dcb751" />
          </linearGradient>
        </defs>

        {/* Case outer */}
        <circle cx="100" cy="100" r="96" fill="url(#case)" />
        {/* Bezel */}
        <circle
          cx="100"
          cy="100"
          r="92"
          fill="none"
          stroke="url(#rim)"
          strokeWidth="3"
        />
        <circle cx="100" cy="100" r="86" fill="url(#dial)" />

        {/* Hour markers */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x1 = 100 + Math.sin(angle) * 78;
          const y1 = 100 - Math.cos(angle) * 78;
          const x2 = 100 + Math.sin(angle) * 70;
          const y2 = 100 - Math.cos(angle) * 70;
          const isCardinal = i % 3 === 0;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#gold)"
              strokeWidth={isCardinal ? 2.5 : 1.2}
              strokeLinecap="round"
            />
          );
        })}

        {/* Brand text */}
        <text
          x="100"
          y="62"
          textAnchor="middle"
          fill="url(#gold)"
          fontSize="6.5"
          fontFamily="serif"
          letterSpacing="2"
          fontWeight="600"
        >
          ULTRA
        </text>
        <text
          x="100"
          y="72"
          textAnchor="middle"
          fill="#c79a2c"
          fontSize="3.2"
          fontFamily="monospace"
          letterSpacing="2"
          opacity="0.65"
        >
          MEXICO · EST. 2024
        </text>

        {/* Sub-dial (chronograph hint) */}
        <circle
          cx="100"
          cy="130"
          r="14"
          fill="none"
          stroke="url(#gold)"
          strokeWidth="0.6"
          opacity="0.6"
        />
        <text
          x="100"
          y="133"
          textAnchor="middle"
          fill="#dcb751"
          fontSize="3"
          fontFamily="monospace"
          opacity="0.7"
        >
          60
        </text>

        {/* Hour hand */}
        <motion.line
          x1="100"
          y1="100"
          x2="100"
          y2="55"
          stroke="url(#gold)"
          strokeWidth="3"
          strokeLinecap="round"
          style={{ transformOrigin: "100px 100px" }}
          initial={{ rotate: -90 }}
          animate={{ rotate: 50 }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        />
        {/* Minute hand */}
        <motion.line
          x1="100"
          y1="100"
          x2="100"
          y2="38"
          stroke="url(#gold)"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ transformOrigin: "100px 100px" }}
          initial={{ rotate: -180 }}
          animate={{ rotate: 220 }}
          transition={{ duration: 2.6, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
        />
        {/* Second hand */}
        <motion.line
          x1="100"
          y1="106"
          x2="100"
          y2="32"
          stroke="#c79a2c"
          strokeWidth="0.8"
          strokeLinecap="round"
          style={{ transformOrigin: "100px 100px" }}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, ease: "linear", repeat: Infinity }}
        />
        {/* Center */}
        <circle cx="100" cy="100" r="2.5" fill="url(#gold)" />

        {/* Crown */}
        <rect
          x="194"
          y="92"
          width="6"
          height="16"
          rx="1"
          fill="url(#rim)"
        />
      </motion.svg>
    </div>
  );
}
