const TERMS = [
  "Wohnbau",
  "Gewerbe",
  "Sanierung",
  "Innenarchitektur",
  "Beratung",
  "Bauaufsicht",
];

export default function Marquee() {
  // Render twice for seamless loop
  const items = [...TERMS, ...TERMS, ...TERMS, ...TERMS];

  return (
    <div
      className="bg-ink text-paper py-[18px] overflow-hidden"
      style={{
        borderTop: "1px solid rgba(244,241,235,0.06)",
        borderBottom: "1px solid rgba(244,241,235,0.06)",
      }}
    >
      <div className="flex gap-16 animate-marquee whitespace-nowrap w-max">
        {items.map((t, i) => (
          <span
            key={i}
            className="font-mono text-[11px] uppercase tracking-editorial opacity-45 inline-flex items-center gap-4"
          >
            {t}
            <span className="opacity-40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
