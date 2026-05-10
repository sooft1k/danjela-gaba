"use client";

import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import type { ReactNode } from "react";

interface Service {
  num: string;
  title: string;
  body: string;
  icon: ReactNode;
}

const SERVICES: Service[] = [
  {
    num: "01",
    title: "Architekturplanung",
    body: "Maßgeschneiderte Konzepte für Neubauten — vom ersten Strich bis zum genehmigten Plan.",
    icon: (
      <path d="M8 48V20L28 6l20 14v28M8 48h40M20 48V32h16v16" strokeLinecap="square" />
    ),
  },
  {
    num: "02",
    title: "Wohnbau",
    body: "Einfamilienhäuser und Mehrfamilienanlagen mit durchdachten Grundrissen.",
    icon: (
      <path
        d="M6 48h44M10 48V18l18-10 18 10v30M22 48V30h12v18M28 18v6"
        strokeLinecap="square"
      />
    ),
  },
  {
    num: "03",
    title: "Umbau & Sanierung",
    body: "Behutsame Modernisierung mit Respekt vor der bestehenden Bausubstanz.",
    icon: (
      <path
        d="M8 48V14l16-8 24 14v28M8 48h40M20 36V20h12v16M16 28h2M36 28h2"
        strokeLinecap="square"
      />
    ),
  },
  {
    num: "04",
    title: "Interior Design",
    body: "Räume, die Atmosphäre schaffen — von der Materialwahl bis zur letzten Lichtquelle.",
    icon: (
      <path
        d="M6 48h44M10 48V20h36v28M16 36h6v-8h-6zM34 36h6v-8h-6zM22 48v-12h12v12"
        strokeLinecap="square"
      />
    ),
  },
  {
    num: "05",
    title: "Projektmanagement",
    body: "Behördenabwicklung, Ausschreibung und Bauaufsicht — eine Hand, ein Ansprechpartner.",
    icon: (
      <path
        d="M8 48h40M14 48V20l14-8 14 8v28M22 48V30h12v18M14 14l-4-4M42 14l4-4"
        strokeLinecap="square"
      />
    ),
  },
  {
    num: "06",
    title: "Beratung",
    body: "Erstgespräche, Bestandsbewertung, Planungs-Sparring — kostenfrei und unverbindlich.",
    icon: (
      <>
        <circle cx="28" cy="22" r="14" strokeLinecap="square" />
        <path d="M22 22h12M28 16v12M14 50c2-8 7-12 14-12s12 4 14 12" strokeLinecap="square" />
      </>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad bg-bone border-t border-stone">
      <div className="wrap">
        <SectionHead num="02" label="Leistungen">
          Alles aus <em className="text-moss">einer Hand</em>
        </SectionHead>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-stone">
          {SERVICES.map((s, i) => (
            <Reveal key={s.num} delay={(i % 3) * 0.1} as="article">
              <div
                className="border-r border-b border-stone p-8 lg:p-12 flex flex-col gap-6
                           min-h-[360px] sm:min-h-[320px] group
                           transition-colors duration-700 ease-elegant hover:bg-paper"
              >
                <div className="flex justify-between items-start">
                  <span className="font-mono text-[11px] uppercase tracking-editorial text-grey-warm">
                    {s.num}
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-[18px] h-[18px] stroke-ink transition-transform duration-700 ease-elegant
                               group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    <path d="M7 17L17 7M17 7H8M17 7V16" strokeWidth="1.4" />
                  </svg>
                </div>
                <svg
                  viewBox="0 0 56 56"
                  className="w-14 h-14 stroke-ink fill-none transition-transform duration-700 ease-elegant
                             group-hover:rotate-[8deg] group-hover:scale-105"
                  strokeWidth="1"
                >
                  {s.icon}
                </svg>
                <div className="mt-auto">
                  <h3 className="display-m text-[clamp(22px,2.4vw,30px)] mb-3">
                    {s.title}
                  </h3>
                  <p className="text-[13.5px] leading-[1.65] text-grey-warm max-w-[28ch]">
                    {s.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
