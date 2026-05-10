"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const STATS = [
  { num: "15", suffix: "+", label: "Jahre Praxis" },
  { num: "40", suffix: "+", label: "Realisierte Projekte" },
  { num: "1", suffix: ":1", label: "Persönliche Betreuung" },
  { num: "0", suffix: "", label: "Kompromisse" },
];

export default function About() {
  return (
    <section id="about" className="section-pad border-t border-bone">
      <div className="wrap">
        <SectionHead num="01" label="Über das Studio">
          Architektur ist <em className="text-moss">Haltung</em>, kein Beruf.
        </SectionHead>

        <div className="grid md:grid-cols-[5fr_7fr] gap-8 md:gap-12 lg:gap-24 items-start">
          {/* Portrait */}
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden bg-bone group">
              <Image
                src="https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=900&q=85"
                alt="Danjela Gaba — Portrait"
                fill
                sizes="(max-width: 880px) 100vw, 40vw"
                className="object-cover transition-[transform,filter] duration-[1400ms] ease-elegant
                           group-hover:scale-[1.04]"
                style={{ filter: "grayscale(0.15) contrast(1.04)" }}
              />
              <span
                className="absolute left-6 bottom-6 font-mono text-[10px] uppercase tracking-editorial text-paper"
                style={{ mixBlendMode: "difference" }}
              >
                Wiener Neudorf · 2026
              </span>
            </div>
          </Reveal>

          {/* Body */}
          <div className="pt-3">
            <Reveal delay={0.1}>
              <p className="lede">
                Mit über 15 Jahren Praxis begleite ich Bauherren von der ersten
                Skizze bis zur Schlüsselübergabe. Jedes Projekt beginnt mit einer
                einzigen Frage:{" "}
                <em>Was brauchen die Menschen, die hier leben werden?</em>
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="lede mt-8">
                Studium an der Polytechnischen Universität Tirana, Nostrifikation
                an der TU Wien — und seither selbstständig in der Region tätig.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 mt-12 md:mt-20 border-t border-stone pt-8">
                {STATS.map((s) => (
                  <div key={s.label} className="pr-4">
                    <div
                      className="font-display text-[clamp(40px,5vw,72px)] leading-none"
                      style={{
                        fontWeight: 300,
                        fontVariationSettings: '"opsz" 144, "SOFT" 50',
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {s.num}
                      {s.suffix && (
                        <em
                          className="font-mono opacity-60 not-italic"
                          style={{ fontSize: "0.3em", verticalAlign: "super" }}
                        >
                          {s.suffix}
                        </em>
                      )}
                    </div>
                    <div className="font-mono text-[11px] uppercase tracking-editorial text-grey-warm mt-3">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
