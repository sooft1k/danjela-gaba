export default function Footer() {
  return (
    <footer className="bg-shadow-deep text-paper relative" style={{ paddingTop: "clamp(60px, 9vw, 100px)", paddingBottom: "32px" }}>
      <div className="wrap">
        <div
          className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-8 md:gap-12 pb-12 md:pb-20"
          style={{ borderBottom: "1px solid rgba(244,241,235,0.1)" }}
        >
          <div>
            <h2
              className="font-display mb-6 text-[clamp(40px,5vw,64px)]"
              style={{
                fontWeight: 250,
                fontVariationSettings: '"opsz" 144, "SOFT" 50',
                letterSpacing: "-0.025em",
                lineHeight: 0.95,
              }}
            >
              Danjela{" "}
              <em
                className="text-stone"
                style={{
                  fontStyle: "italic",
                  fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1',
                }}
              >
                Gaba
              </em>
            </h2>
            <p
              className="text-[14px] leading-[1.6] max-w-[36ch]"
              style={{ color: "rgba(244,241,235,0.6)" }}
            >
              Diplom-Ingenieurin für Architektur. Räume mit Haltung — in
              Wien, Niederösterreich und darüber hinaus.
            </p>
          </div>

          <FooterCol
            heading="Studio"
            items={[
              { label: "Über", href: "#about" },
              { label: "Leistungen", href: "#services" },
              { label: "Projekte", href: "#portfolio" },
              { label: "Philosophie", href: "#philosophy" },
            ]}
          />
          <FooterCol
            heading="Kontakt"
            items={[
              { label: "danjela.gaba@hotmail.com", href: "mailto:danjela.gaba@hotmail.com" },
              { label: "+43 676 693 1597", href: "tel:+436766931597" },
              { label: "Reisenbauer-Ring 7/1/6" },
              { label: "2351 Wiener Neudorf, NÖ" },
            ]}
          />
          <FooterCol
            heading="Rechtliches"
            items={[
              { label: "Impressum", href: "#" },
              { label: "Datenschutz", href: "#" },
            ]}
          />
        </div>

        <div
          className="pt-8 flex flex-wrap justify-between gap-4 font-mono text-[10.5px] uppercase tracking-editorial"
          style={{ color: "rgba(244,241,235,0.4)" }}
        >
          <span>© 2026 Studio Danjela Gaba</span>
          <span>Website by Lennard Gaba</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  heading,
  items,
}: {
  heading: string;
  items: { label: string; href?: string }[];
}) {
  return (
    <div>
      <h5
        className="font-mono text-[10px] uppercase tracking-editorial mb-5"
        style={{ color: "rgba(244,241,235,0.4)", fontWeight: 400 }}
      >
        {heading}
      </h5>
      <ul className="list-none flex flex-col gap-2.5">
        {items.map((it) => (
          <li key={it.label}>
            {it.href ? (
              <a
                href={it.href}
                className="text-[14px] inline-block transition-[padding,color] duration-500 ease-elegant hover:pl-1.5 hover:text-paper"
                style={{ color: "rgba(244,241,235,0.8)" }}
              >
                {it.label}
              </a>
            ) : (
              <span className="text-[14px]" style={{ color: "rgba(244,241,235,0.8)" }}>
                {it.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
