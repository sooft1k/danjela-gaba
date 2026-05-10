"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative bg-shadow-deep text-paper overflow-hidden
                 grid grid-cols-[1.1fr_1fr] max-md:grid-cols-1 max-md:grid-rows-[50vh_50vh]
                 min-h-screen [min-height:100svh]"
    >
      {/* Image side */}
      <div className="relative overflow-hidden max-md:order-1">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=85"
          alt="Architektur"
          fill
          priority
          sizes="(max-width: 880px) 100vw, 55vw"
          className="object-cover animate-hero-zoom"
          style={{ filter: "brightness(0.85) contrast(1.05)" }}
        />
        {/* Right edge fade into the dark side */}
        <div
          className="absolute inset-0 pointer-events-none max-md:hidden"
          style={{
            background:
              "linear-gradient(90deg, transparent 60%, #0E0D0B 100%)",
          }}
        />
        {/* Top fade into dark — mobile (image is on top) */}
        <div
          className="absolute inset-0 pointer-events-none md:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(14,13,11,0) 60%, #0E0D0B 100%)",
          }}
        />
      </div>

      {/* Content side */}
      <div
        className="relative flex flex-col justify-between gap-10 max-md:order-2 max-md:gap-6"
        style={{
          padding:
            "clamp(80px, 12vh, 140px) var(--gutter) clamp(40px, 6vh, 80px)",
        }}
      >
        {/* Top meta */}
        <div className="flex justify-between items-start font-mono text-[11px] uppercase tracking-editorial opacity-70">
          <span>N° 001 / Studio</span>
          <span>2026</span>
        </div>

        {/* Vertical decorative meta — desktop only */}
        <div
          className="absolute top-1/2 max-md:hidden font-mono text-[10px] uppercase opacity-40 select-none"
          style={{
            right: "var(--gutter)",
            letterSpacing: "0.32em",
            transform: "translateY(-50%) rotate(180deg)",
            writingMode: "vertical-rl",
          }}
        >
          Diplom-Ingenieurin · Architektur
        </div>

        {/* Headline */}
        <motion.h1
          className="display-xl text-[clamp(64px,11vw,168px)]"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block font-mono text-[0.18em] uppercase tracking-editorial opacity-60 leading-none mb-[clamp(16px,2vh,24px)]">
            Studio Danjela Gaba
          </span>
          Räume,
          <br />
          die <em className="text-bone">bleiben.</em>
        </motion.h1>

        {/* Bottom row: description + CTAs */}
        <motion.div
          className="grid grid-cols-[1fr_auto] gap-8 items-end max-md:grid-cols-1 max-md:gap-6"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-[14px] leading-[1.65] max-w-[380px]"
            style={{ color: "rgba(244,241,235,0.7)" }}
          >
            Individuelle Architektur für Wohn- und Gewerbebau in Wien
            und Niederösterreich — geplant mit Präzision, gestaltet
            mit Blick fürs Wesentliche.
          </p>
          <div className="flex flex-col items-end gap-4 max-md:flex-row max-md:items-stretch">
            <a
              href="#portfolio"
              className="btn btn-fill max-md:flex-1 max-md:justify-center"
            >
              Projekte
            </a>
            <a
              href="#contact"
              className="btn btn-ghost max-md:flex-1 max-md:justify-center"
            >
              Kontakt
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
