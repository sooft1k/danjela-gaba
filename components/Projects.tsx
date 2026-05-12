"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

interface Project {
  num: string;
  title: string;
  titleEm: string;
  meta: string[];
  body: string;
  src: string;
  alt: string;
}

const PROJECTS: Project[] = [
  {
    num: "01",
    title: "Haus am",
    titleEm: "Feldrand",
    meta: ["Leopoldsdorf", "Wohnbau", "2024"],
    body:
      "Ein Einfamilienhaus, das sich aus dem Hang formt — großzügige Öffnungen lassen den Garten ins Innere strömen, klare Linien rahmen das Wesentliche.",
    src: "/bilder/einfamilienhaeuser/eingang.jpeg",
    alt: "Einfamilienhaus Leopoldsdorf — Eingangsansicht",
  },
  {
    num: "02",
    title: "Wohnanlage",
    titleEm: "2.500 m²",
    meta: ["Wien", "Mehrfamilienhaus", "2023"],
    body:
      "Hochwertiger urbaner Wohnraum für mehrere Familien. Verdichtung ohne Kompromisse: Privatsphäre, Belichtung, Grünflächen — alles bedacht.",
    src: "/bilder/wohnhaeuser/wohnhaus.jpeg",
    alt: "Moderne Wohnanlage Wien",
  },
  {
    num: "03",
    title: "Büro &",
    titleEm: "Lagerhalle",
    meta: ["Traiskirchen", "Gewerbebau", "2008"],
    body:
      "Repräsentativer Bürobereich vorne, funktionale Lagerflächen dahinter — eine klare Hierarchie, mit der Fassade als architektonischem Argument.",
    src: "/bilder/gewerbeobjekte/gewerbeobjekt.JPEG",
    alt: "Büro & Lagerhalle Traiskirchen — Gesamtansicht",
  },
];

export default function Projects({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section id="portfolio" className={`section-pad ${hideHeader ? "" : "border-t border-bone"}`}>
      <div className="wrap">
        {!hideHeader && (
          <SectionHead num="03" label="Ausgewählte Projekte">
            Werk &amp; <em className="text-moss">Realisierung</em>
          </SectionHead>
        )}

        <div className="flex flex-col gap-20 md:gap-32 lg:gap-40">
          {PROJECTS.map((p, i) => {
            const reverse = i % 2 === 1;
            return (
              <Reveal key={p.num} as="article">
                <div
                  className={`grid items-center gap-8 md:gap-12 lg:gap-20 grid-cols-1
                              ${
                                reverse
                                  ? "md:grid-cols-[5fr_7fr]"
                                  : "md:grid-cols-[7fr_5fr]"
                              }`}
                >
                  {/* Image */}
                  <a
                    href="#contact"
                    className={`relative aspect-[4/3] overflow-hidden bg-bone block group ${
                      reverse ? "md:order-2" : ""
                    }`}
                  >
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes="(max-width: 880px) 100vw, 60vw"
                      className="object-cover transition-transform duration-[1600ms] ease-elegant group-hover:scale-[1.04]"
                    />
                    <span
                      className="absolute top-6 left-6 font-display font-thin text-paper leading-[0.9]
                                 text-[clamp(64px,8vw,120px)]"
                      style={{
                        fontVariationSettings: '"opsz" 144',
                        mixBlendMode: "difference",
                        letterSpacing: "-0.04em",
                      }}
                    >
                      {p.num}
                    </span>
                  </a>

                  {/* Info */}
                  <div className={`px-3 ${reverse ? "md:order-1" : ""}`}>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-editorial text-grey-warm mb-6">
                      {p.meta.map((m, idx) => (
                        <span key={m} className="flex items-center">
                          {m}
                          {idx < p.meta.length - 1 && (
                            <span className="ml-4 inline-block w-1 h-1 bg-stone rounded-full" />
                          )}
                        </span>
                      ))}
                    </div>
                    <h3 className="display-l text-[clamp(32px,4.5vw,64px)] mb-6">
                      {p.title} <em>{p.titleEm}</em>
                    </h3>
                    <p className="text-grey-warm text-[15px] leading-[1.7] max-w-[40ch] mb-8">
                      {p.body}
                    </p>
                    <a
                      href="#contact"
                      className="font-mono text-[11px] uppercase tracking-editorial inline-flex gap-3 items-center
                                 pb-2 border-b border-ink transition-[gap] duration-500 ease-elegant
                                 hover:gap-5"
                    >
                      Case Study lesen <span>→</span>
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
