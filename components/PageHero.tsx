"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  eyebrow: string;
  num: string;
  title: ReactNode;
  sub?: string;
}

export default function PageHero({ eyebrow, num, title, sub }: Props) {
  return (
    <section className="relative bg-ink text-paper overflow-hidden">
      {/* Subtle grain (already global) + decorative grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #F4F1EB 1px, transparent 1px), linear-gradient(to bottom, #F4F1EB 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />
      <div
        className="wrap relative"
        style={{
          paddingTop: "clamp(80px, 14vw, 160px)",
          paddingBottom: "clamp(64px, 10vw, 120px)",
        }}
      >
        {/* Eyebrow row */}
        <motion.div
          className="flex justify-between items-start font-mono text-[11px] uppercase tracking-editorial mb-16 md:mb-24"
          style={{ color: "rgba(244,241,235,0.55)" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>N° {num}</span>
          <span>{eyebrow}</span>
        </motion.div>

        {/* Big title */}
        <motion.h1
          className="display-xl text-[clamp(56px,9vw,140px)] max-w-[16ch]"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>

        {sub && (
          <motion.p
            className="lede mt-10 md:mt-12 max-w-[42ch]"
            style={{ color: "rgba(244,241,235,0.7)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {sub}
          </motion.p>
        )}
      </div>
    </section>
  );
}
