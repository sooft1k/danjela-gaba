"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#about", label: "Über", num: "01" },
  { href: "#services", label: "Leistungen", num: "02" },
  { href: "#portfolio", label: "Projekte", num: "03" },
  { href: "#philosophy", label: "Philosophie", num: "04" },
  { href: "#testimonials", label: "Stimmen", num: "05" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <nav
        className={[
          "fixed top-0 left-0 right-0 z-[100] grid items-center gap-8 text-paper",
          "grid-cols-[auto_1fr_auto] md:grid-cols-[auto_1fr_auto] max-md:grid-cols-[1fr_auto]",
          "transition-[padding] duration-500 ease-elegant",
          scrolled ? "py-[14px]" : "py-[22px]",
        ].join(" ")}
        style={{
          paddingLeft: "var(--gutter)",
          paddingRight: "var(--gutter)",
          mixBlendMode: "difference",
        }}
      >
        <Link
          href="#top"
          className="font-display text-[17px] leading-tight"
          style={{
            fontVariationSettings: '"opsz" 36, "SOFT" 50',
            letterSpacing: "-0.01em",
            fontWeight: 300,
          }}
        >
          Danjela Gaba
          <span className="block font-mono text-[9.5px] uppercase tracking-editorial opacity-70 mt-[2px]">
            Architektur · Wien · NÖ
          </span>
        </Link>

        <ul className="flex justify-center gap-9 max-md:hidden list-none">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative font-mono text-[11px] uppercase tracking-editorial py-1 group"
              >
                {l.label}
                <span
                  className="absolute left-0 bottom-0 h-px w-full bg-current
                             scale-x-0 origin-right transition-transform duration-500 ease-elegant
                             group-hover:scale-x-100 group-hover:origin-left"
                />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="font-mono text-[11px] uppercase tracking-editorial inline-flex items-center gap-2
                     transition-[gap] duration-500 ease-elegant hover:gap-[14px] max-md:hidden
                     after:content-['→']"
        >
          Erstgespräch
        </a>

        <button
          aria-label="Menü"
          aria-expanded={open}
          className="md:hidden relative w-7 h-[18px] justify-self-end"
          onClick={() => setOpen((o) => !o)}
        >
          <span
            className={`absolute left-0 right-0 h-px bg-current transition-all duration-400 ease-elegant ${
              open ? "top-2 rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute left-0 right-0 h-px bg-current top-2 transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 right-0 h-px bg-current transition-all duration-400 ease-elegant ${
              open ? "top-2 -rotate-45" : "top-4"
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-ink text-paper z-[90] flex flex-col justify-between md:hidden"
            style={{
              padding: "100px var(--gutter) 40px",
            }}
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="flex flex-col gap-1 list-none">
              {NAV_LINKS.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.2 + i * 0.05,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="display-l flex items-baseline gap-[18px]
                               text-[clamp(40px,12vw,72px)]
                               transition-opacity duration-400 hover:opacity-50"
                  >
                    <span className="font-mono text-[11px] uppercase tracking-editorial opacity-40">
                      {l.num}
                    </span>
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="display-l flex items-baseline gap-[18px]
                             text-[clamp(40px,12vw,72px)]"
                  style={{ color: "var(--bone, #E8E2D5)" }}
                >
                  <span className="font-mono text-[11px] uppercase tracking-editorial opacity-40">
                    06
                  </span>
                  <em>Kontakt</em>
                </a>
              </motion.li>
            </ul>
            <div className="flex justify-between font-mono text-[11px] uppercase tracking-editorial opacity-60">
              <span>+43 676 693 1597</span>
              <span>Wiener Neudorf</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
