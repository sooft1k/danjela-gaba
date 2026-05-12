"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/",            label: "Studio",      num: "00" },
  { href: "/ueber",       label: "Über",        num: "01" },
  { href: "/leistungen",  label: "Leistungen",  num: "02" },
  { href: "/projekte",    label: "Projekte",    num: "03" },
  { href: "/philosophie", label: "Philosophie", num: "04" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-[100]",
          "transition-all duration-500 ease-elegant",
          scrolled
            ? "bg-paper/95 backdrop-blur-md border-b border-stone shadow-[0_1px_0_rgba(31,29,26,0.04)]"
            : "bg-paper border-b border-bone",
        ].join(" ")}
      >
        <nav
          className={[
            "grid items-center gap-8 grid-cols-[auto_1fr_auto] max-md:grid-cols-[1fr_auto]",
            "transition-[padding] duration-500 ease-elegant",
            scrolled ? "py-3" : "py-5",
          ].join(" ")}
          style={{
            paddingLeft: "var(--gutter)",
            paddingRight: "var(--gutter)",
          }}
        >
          <Link href="/" className="flex items-baseline gap-3">
            <span
              className="font-display text-[22px] leading-none text-ink"
              style={{
                fontVariationSettings: '"opsz" 36, "SOFT" 50',
                letterSpacing: "-0.015em",
                fontWeight: 500,
              }}
            >
              Danjela Gaba
            </span>
            <span className="font-mono text-[10px] uppercase tracking-editorial text-grey-warm max-md:hidden">
              Architektur · Wien · NÖ
            </span>
          </Link>

          <ul className="flex justify-center gap-1 max-md:hidden list-none">
            {NAV_LINKS.map((l) => {
              const active = isActive(l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={[
                      "relative font-mono uppercase tracking-editorial",
                      "text-[12px] font-medium px-4 py-2.5",
                      "transition-colors duration-300",
                      active ? "text-ink" : "text-grey-warm hover:text-ink",
                    ].join(" ")}
                  >
                    {l.label}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-3 right-3 -bottom-px h-[2px] bg-ink"
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/kontakt"
            className="max-md:hidden font-mono uppercase tracking-editorial
                       text-[12px] font-medium inline-flex items-center gap-2.5
                       px-5 py-3 transition-all duration-500 ease-elegant
                       border bg-ink text-paper border-ink
                       hover:bg-transparent hover:text-ink"
          >
            Erstgespräch
            <span aria-hidden>→</span>
          </Link>

          <button
            aria-label="Menü"
            aria-expanded={open}
            className="md:hidden relative w-8 h-5 justify-self-end text-ink"
            onClick={() => setOpen((o) => !o)}
          >
            <span
              className={`absolute left-0 right-0 h-[2px] bg-current transition-all duration-400 ease-elegant ${
                open ? "top-[9px] rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 right-0 h-[2px] bg-current top-[9px] transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 right-0 h-[2px] bg-current transition-all duration-400 ease-elegant ${
                open ? "top-[9px] -rotate-45" : "top-[18px]"
              }`}
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-ink text-paper z-[90] flex flex-col justify-between md:hidden"
            style={{ padding: "100px var(--gutter) 40px" }}
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
                  transition={{ delay: 0.2 + i * 0.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display flex items-baseline gap-4
                               text-[clamp(40px,12vw,72px)] leading-[1.05]
                               transition-opacity duration-400 hover:opacity-60"
                    style={{
                      fontVariationSettings: '"opsz" 144, "SOFT" 50',
                      fontWeight: 300,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    <span className="font-mono text-[11px] uppercase tracking-editorial opacity-40">
                      {l.num}
                    </span>
                    {l.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href="/kontakt"
                  onClick={() => setOpen(false)}
                  className="font-display flex items-baseline gap-4
                             text-[clamp(40px,12vw,72px)] leading-[1.05]"
                  style={{
                    fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1',
                    fontWeight: 300,
                    letterSpacing: "-0.02em",
                    fontStyle: "italic",
                    color: "#E8E2D5",
                  }}
                >
                  <span className="font-mono text-[11px] uppercase tracking-editorial opacity-40 not-italic">
                    05
                  </span>
                  Kontakt
                </Link>
              </motion.li>
            </ul>
            <div className="flex justify-between font-mono text-[11px] uppercase tracking-editorial opacity-60">
              <span>+43 676 693 1597</span>
              <span>Wiener Neudorf</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={scrolled ? "h-[62px]" : "h-[74px]"} aria-hidden="true" />
    </>
  );
}
