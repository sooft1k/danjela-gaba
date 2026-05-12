"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

/**
 * Three compact teaser blocks for the home page,
 * each linking to its full subpage.
 */
export default function HomePreview() {
  return (
    <section className="bg-paper">
      {/* About teaser */}
      <div className="border-t border-bone">
        <div className="wrap section-pad">
          <div className="grid md:grid-cols-[5fr_7fr] gap-10 md:gap-16 lg:gap-24 items-center">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden bg-bone">
                <Image
                  src="/bilder/ueber-mich/Profilbild.png"
                  alt="Danjela Gaba — Architektin"
                  fill
                  sizes="(max-width: 880px) 100vw, 40vw"
                  className="object-cover"
                  style={{ filter: "grayscale(0.15) contrast(1.04)" }}
                />
              </div>
            </Reveal>

            <div>
              <Reveal>
                <span className="eyebrow block mb-6">N° 01 / Über das Studio</span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="display-l text-[clamp(36px,5.5vw,80px)] mb-8">
                  Architektur ist <em className="text-moss">Haltung</em>,
                  <br />kein Beruf.
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="lede mb-10 max-w-[44ch]">
                  Mit über 15 Jahren Praxis begleite ich Bauherren von der ersten
                  Skizze bis zur Schlüsselübergabe.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <Link
                  href="/ueber"
                  className="font-mono text-[11px] uppercase tracking-editorial
                             inline-flex gap-3 items-center pb-2 border-b border-ink
                             transition-[gap] duration-500 ease-elegant hover:gap-5"
                >
                  Mehr über mich <span>→</span>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      {/* Projects teaser — three image tiles */}
      <div className="border-t border-bone bg-bone">
        <div className="wrap section-pad">
          <div className="flex items-end justify-between mb-12 md:mb-20 gap-8 flex-wrap">
            <div>
              <Reveal>
                <span className="eyebrow block mb-4">N° 03 / Ausgewählte Projekte</span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="display-l text-[clamp(36px,5.5vw,80px)]">
                  Werk &amp; <em className="text-moss">Realisierung</em>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <Link
                href="/projekte"
                className="font-mono text-[11px] uppercase tracking-editorial
                           inline-flex gap-3 items-center pb-2 border-b border-ink
                           transition-[gap] duration-500 ease-elegant hover:gap-5"
              >
                Alle Projekte <span>→</span>
              </Link>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                src: "/bilder/einfamilienhaeuser/eingang.jpeg",
                num: "01",
                title: "Haus am Feldrand",
                meta: "Leopoldsdorf · 2024",
                href: "/projekte/haus-am-feldrand",
              },
              {
                src: "/bilder/wohnhaeuser/wohnhaus.jpeg",
                num: "02",
                title: "Wohnanlage",
                meta: "Wien · 2023",
                href: "/projekte/wohnanlage",
              },
              {
                src: "/bilder/gewerbeobjekte/gewerbeobjekt.JPEG",
                num: "03",
                title: "Büro & Lagerhalle",
                meta: "Traiskirchen · 2008",
                href: "/projekte/buero-lagerhalle",
              },
            ].map((p, i) => (
              <Reveal key={p.num} delay={i * 0.1}>
                <Link href={p.href} className="block group">
                  <div className="relative aspect-[4/5] overflow-hidden bg-stone mb-5">
                    <Image
                      src={p.src}
                      alt={p.title}
                      fill
                      sizes="(max-width: 880px) 100vw, 33vw"
                      className="object-cover transition-transform duration-[1400ms] ease-elegant
                                 group-hover:scale-[1.04]"
                    />
                    <span
                      className="absolute top-5 left-5 font-display text-paper text-[64px] leading-[0.9]"
                      style={{
                        fontVariationSettings: '"opsz" 144',
                        fontWeight: 200,
                        mixBlendMode: "difference",
                        letterSpacing: "-0.04em",
                      }}
                    >
                      {p.num}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <h3 className="display-m text-[22px]">{p.title}</h3>
                    <span className="font-mono text-[10px] uppercase tracking-editorial text-grey-warm">
                      {p.meta}
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-stone bg-ink text-paper">
        <div className="wrap section-pad text-center">
          <Reveal>
            <span className="eyebrow block mb-8" style={{ color: "rgba(244,241,235,0.5)" }}>
              Ihr nächstes Projekt
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-l text-[clamp(40px,7vw,96px)] mb-8 max-w-[18ch] mx-auto">
              Lassen Sie uns <em className="text-bone">sprechen.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-[15px] opacity-70 mb-10 max-w-[40ch] mx-auto">
              Erstgespräch kostenlos und unverbindlich.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Link
              href="/kontakt"
              className="font-mono text-[11px] uppercase tracking-editorial
                         inline-flex items-center gap-3 px-8 py-[18px]
                         bg-paper text-ink border border-paper
                         transition-[gap,background,color] duration-500 ease-elegant
                         hover:bg-transparent hover:text-paper hover:gap-5"
            >
              Jetzt Kontakt aufnehmen <span>→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
