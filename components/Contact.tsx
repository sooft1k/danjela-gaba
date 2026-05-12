"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const INFO = [
  {
    label: "E-Mail",
    value: "danjela.gaba@hotmail.com",
    href: "mailto:danjela.gaba@hotmail.com",
  },
  { label: "Telefon", value: "+43 676 693 1597", href: "tel:+436766931597" },
  {
    label: "Studio",
    value: "Reisenbauer-Ring 7/1/6\n2351 Wiener Neudorf, NÖ",
  },
  { label: "Mo–Fr", value: "08:00 – 18:00 Uhr" },
];

export default function Contact({ hideHeader = false }: { hideHeader?: boolean }) {
  const [accepted, setAccepted] = useState(false);

  return (
    <section id="contact" className={`section-pad bg-bone ${hideHeader ? "" : "border-t border-stone"}`}>
      <div className="wrap">
        {!hideHeader && (
          <SectionHead num="06" label="Kontakt">
            Lassen Sie uns <em className="text-moss">sprechen.</em>
          </SectionHead>
        )}

        <div className="grid md:grid-cols-[5fr_7fr] gap-10 md:gap-16 lg:gap-32 items-start">
          {/* Info column */}
          <Reveal>
            <div className="flex flex-col gap-10">
              <h3 className="display-l text-[clamp(40px,5vw,64px)]">
                Erstgespräch <em className="text-moss">kostenlos</em> &amp; unverbindlich
              </h3>
              <ul className="list-none flex flex-col gap-0">
                {INFO.map((item, idx) => (
                  <li
                    key={item.label}
                    className={`grid grid-cols-[100px_1fr] gap-4 items-baseline py-6 border-t border-stone
                                ${idx === INFO.length - 1 ? "border-b" : ""}`}
                  >
                    <dt className="font-mono text-[11px] uppercase tracking-editorial text-grey-warm">
                      {item.label}
                    </dt>
                    <dd
                      className="font-display text-[18px] leading-[1.4]"
                      style={{
                        fontWeight: 400,
                        fontVariationSettings: '"opsz" 24',
                        whiteSpace: "pre-line",
                      }}
                    >
                      {item.href ? (
                        <a
                          href={item.href}
                          className="transition-colors duration-300 hover:text-moss"
                        >
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Form column */}
          <Reveal delay={0.1}>
            <form
              className="bg-paper border border-bone p-8 md:p-12 flex flex-col gap-6"
              action="https://formspree.io/f/xnjgplkg"
              method="POST"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Name" name="name" required placeholder="Ihr Name" />
                <Field
                  label="E-Mail"
                  name="email"
                  type="email"
                  required
                  placeholder="ihre@adresse.at"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Telefon" name="phone" type="tel" placeholder="+43 …" />
                <SelectField
                  label="Projektart"
                  name="projekt"
                  options={[
                    "Einfamilienhaus Neubau",
                    "Mehrfamilienhaus",
                    "Gewerbeobjekt",
                    "Sanierung / Umbau",
                    "Interior Design",
                    "Beratung",
                  ]}
                />
              </div>
              <TextareaField
                label="Ihr Vorhaben"
                name="message"
                required
                placeholder="Standort, Größe, Zeitrahmen, Budget …"
              />

              <label
                htmlFor="dsgvo"
                className="flex gap-3 items-start text-[12.5px] leading-[1.5] text-grey-warm cursor-pointer"
              >
                <input
                  id="dsgvo"
                  type="checkbox"
                  required
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  className="mt-1 accent-ink"
                />
                <span>
                  Ich stimme der Verarbeitung meiner Daten gemäß der
                  Datenschutzerklärung zu.
                </span>
              </label>

              <button
                type="submit"
                className="btn btn-dark self-start mt-2"
              >
                Nachricht senden
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Tiny field primitives ─── */
function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="font-mono text-[10px] uppercase tracking-editorial text-grey-warm"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="font-body text-[15px] py-3.5 bg-transparent border-0 border-b border-stone
                   focus:border-ink outline-none transition-colors duration-400 ease-out-expo
                   placeholder:text-stone"
      />
    </div>
  );
}

function TextareaField({
  label,
  name,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="font-mono text-[10px] uppercase tracking-editorial text-grey-warm"
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={4}
        required={required}
        placeholder={placeholder}
        className="font-body text-[15px] py-3.5 bg-transparent border-0 border-b border-stone
                   focus:border-ink outline-none transition-colors duration-400 ease-out-expo
                   placeholder:text-stone resize-y min-h-[90px] leading-[1.6]"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="font-mono text-[10px] uppercase tracking-editorial text-grey-warm"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="font-body text-[15px] py-3.5 bg-transparent border-0 border-b border-stone
                   focus:border-ink outline-none transition-colors duration-400 ease-out-expo
                   text-ink"
      >
        <option value="" disabled>
          bitte wählen
        </option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
