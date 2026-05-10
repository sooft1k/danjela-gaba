import Reveal from "./Reveal";
import type { ReactNode } from "react";

interface Props {
  num: string;
  label: string;
  children: ReactNode; // headline content (supports <em>)
  dark?: boolean;
}

export default function SectionHead({ num, label, children, dark }: Props) {
  return (
    <Reveal
      as="div"
      className="grid grid-cols-1 md:grid-cols-[1fr_2fr] items-end mb-[clamp(48px,8vw,120px)]"
      // gap kept here since dynamic clamp can't be in tailwind directly
    >
      <div
        className={`flex flex-col gap-4 font-mono text-[11px] uppercase tracking-editorial mb-6 md:mb-0 md:pr-12
                    ${dark ? "text-paper/50" : "text-grey-warm"}`}
      >
        <span>N° {num}</span>
        <span>{label}</span>
      </div>
      <h2
        className={`display-l text-[clamp(40px,6.5vw,96px)] ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        {children}
      </h2>
    </Reveal>
  );
}
