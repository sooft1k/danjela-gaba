"use client";

import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const ITEMS = [
  {
    quote:
      "Wir kamen mit einem Grundstück und einer vagen Idee. Was wir bekamen, war ein Zuhause, das genau so wirkt wie wir es uns insgeheim immer vorgestellt haben — nur präziser.",
    author: "M. & A. Hofbauer",
    meta: ["Einfamilienhaus", "Leopoldsdorf · 2024"],
  },
  {
    quote:
      "Frau Gaba hat das gesamte Projekt — von der Einreichung bis zur Schlüsselübergabe — so ruhig durchgezogen, dass wir uns als Bauherren nie überfordert gefühlt haben.",
    author: "Dr. T. Reichhart",
    meta: ["Gewerbebau", "Traiskirchen"],
  },
  {
    quote:
      "Was uns überrascht hat: jedes Detail wurde einzeln durchdacht — Materialien, Lichtführung, sogar wo die Steckdosen sitzen. Das ist Handwerk.",
    author: "Familie Petrovic",
    meta: ["Sanierung", "Wien"],
  },
  {
    quote:
      "Wir haben mit drei Architekten gesprochen. Bei Frau Gaba haben wir nach 20 Minuten gewusst: das ist die richtige Person für unser Haus.",
    author: "Familie Bauer",
    meta: ["Neubau", "Niederösterreich"],
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad border-t border-bone">
      <div className="wrap">
        <SectionHead num="05" label="Stimmen der Bauherren">
          Was <em className="text-moss">geblieben</em> ist
        </SectionHead>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {ITEMS.map((t, i) => (
            <Reveal key={t.author} delay={(i % 2) * 0.1} as="article">
              <div
                className="bg-paper border border-bone p-8 md:p-12 flex flex-col gap-8 h-full
                           transition-[border-color,transform] duration-700 ease-elegant
                           hover:border-stone hover:-translate-y-1"
              >
                <p
                  className="font-display text-ink"
                  style={{
                    fontWeight: 300,
                    fontVariationSettings: '"opsz" 36, "SOFT" 80',
                    fontSize: "clamp(20px, 2.2vw, 26px)",
                    lineHeight: 1.4,
                    letterSpacing: "-0.012em",
                  }}
                >
                  <span
                    className="block font-display text-moss opacity-50 mb-4"
                    style={{ fontSize: "64px", lineHeight: 0.5 }}
                  >
                    “
                  </span>
                  {t.quote}
                </p>
                <div className="flex justify-between items-end mt-auto pt-6 border-t border-bone">
                  <div className="font-display text-base font-normal">
                    {t.author}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-editorial text-grey-warm text-right leading-[1.6]">
                    {t.meta.map((m, idx) => (
                      <div key={idx}>{m}</div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
