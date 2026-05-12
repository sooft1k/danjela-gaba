"use client";

import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const VALUES = [
  {
    num: "01",
    title: "Zeitlosigkeit",
    body: "Architektur, die in zwanzig Jahren genauso überzeugt wie heute. Keine Trends, keine Moden.",
  },
  {
    num: "02",
    title: "Funktion",
    body: "Jeder Quadratmeter hat eine Aufgabe. Räume, die so arbeiten wie die Menschen, die sie bewohnen.",
  },
  {
    num: "03",
    title: "Materialität",
    body: "Ehrliche Materialien, sorgfältig gewählt — Stein, Holz, Glas. Sie altern in Würde.",
  },
  {
    num: "04",
    title: "Nachhaltigkeit",
    body: "Gebäude, die effizient sind, lange halten und sich respektvoll in ihre Umgebung einfügen.",
  },
];

export default function Philosophy({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section id="philosophy" className="section-pad bg-ink text-paper">
      <div className="wrap">
        {!hideHeader && (
          <SectionHead num="04" label="Philosophie" dark>
            Werte &amp; <em className="text-bone">Haltung</em>
          </SectionHead>
        )}

        <Reveal delay={0.1}>
          <blockquote className="max-w-[1100px]">
            <p
              className="font-display text-paper text-[clamp(32px,5vw,72px)]"
              style={{
                fontWeight: 250,
                fontVariationSettings: '"opsz" 144, "SOFT" 80, "WONK" 0',
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
              }}
            >
              „Gutes Bauen bedeutet mehr als Funktionalität — es bedeutet,{" "}
              <em
                className="text-stone"
                style={{
                  fontStyle: "italic",
                  fontVariationSettings:
                    '"opsz" 144, "SOFT" 100, "WONK" 1',
                }}
              >
                Räume zu schaffen, die inspirieren,
              </em>{" "}
              den Menschen dienen und die Zeit überdauern."
            </p>
            <footer
              className="mt-12 md:mt-16 font-mono text-[11px] uppercase tracking-editorial flex items-center gap-4"
              style={{ color: "rgba(244,241,235,0.5)" }}
            >
              <span
                className="block w-8 h-px"
                style={{ background: "rgba(244,241,235,0.4)" }}
              />
              Danjela Gaba · Wiener Neudorf, 2026
            </footer>
          </blockquote>
        </Reveal>

        <div
          className="mt-20 md:mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
                     border-t"
          style={{ borderColor: "rgba(244,241,235,0.1)" }}
        >
          {VALUES.map((v, i) => (
            <Reveal key={v.num} delay={i * 0.1}>
              <div
                className={`pt-10 pl-0 lg:pl-8 pb-8 lg:pb-0 lg:min-h-[220px] relative
                            ${
                              i < VALUES.length - 1
                                ? "lg:border-r border-b lg:border-b-0"
                                : ""
                            }`}
                style={{ borderColor: "rgba(244,241,235,0.1)" }}
              >
                <div
                  className="font-mono text-[11px] uppercase tracking-editorial mb-6"
                  style={{ color: "rgba(244,241,235,0.4)" }}
                >
                  {v.num} / Werte
                </div>
                <h4
                  className="font-display text-paper text-[22px] mb-3"
                  style={{
                    fontWeight: 250,
                    fontVariationSettings: '"opsz" 36, "SOFT" 50',
                    lineHeight: 1.15,
                    letterSpacing: "-0.015em",
                  }}
                >
                  {v.title}
                </h4>
                <p
                  className="text-[13.5px] leading-[1.6] max-w-[28ch]"
                  style={{ color: "rgba(244,241,235,0.55)" }}
                >
                  {v.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
