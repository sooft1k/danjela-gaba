# Studio Danjela Gaba — Architektur-Portfolio

Premium Editorial-Magazine-Style Architektur-Portfolio.
Built with **Next.js 15 (App Router) · React · TypeScript · Tailwind CSS · Framer Motion**.

---

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Öffne dann [http://localhost:3000](http://localhost:3000).

---

## 📁 Projektstruktur

```
/app
  layout.tsx        Root-Layout, Fonts, Metadata
  page.tsx          Hauptseite — fügt alle Sections zusammen
  globals.css       Design-System: Tokens, Type-Primitives, Buttons

/components
  Navbar.tsx        Sticky-Nav mit difference-blend + Mobile-Menü
  Hero.tsx          Asymmetrischer Split-Hero
  Marquee.tsx       Endlos-Lauftext-Strip
  About.tsx         Portrait + Lede + Stats
  Services.tsx      6-Karten-Grid mit individuellen SVG-Icons
  Projects.tsx      Alternierende Project-Reihen
  Philosophy.tsx    Dunkle Pull-Quote + Werte-Grid
  Testimonials.tsx  Bauherren-Zitate
  Contact.tsx       Info-Liste + Form
  Footer.tsx        Minimalistischer Footer
  SectionHead.tsx   Wiederverwendbarer Section-Header
  Reveal.tsx        Animation-Wrapper (scroll-triggered fade+lift)
```

---

## 🎨 Design-System

### Farben
- **paper** `#F4F1EB` — primary off-white background
- **bone** `#E8E2D5` — mid surface, dividers
- **stone** `#C8C0B2` — inactive borders
- **grey-warm** `#88827A` — secondary text
- **slate** `#3A3733` — hover-text
- **ink** `#1F1D1A` — primary text, dark surfaces
- **shadow-deep** `#0E0D0B` — hero/footer
- **moss** `#3D453B` — single accent (atmospheric green)

### Typografie
- **Fraunces** — display serif (mit Optical-Size + SOFT + WONK Variable Axes)
- **Manrope** — body sans (geometric grotesque)
- **JetBrains Mono** — monospace für Eyebrows + technische Labels

Alle drei Schriften via `next/font/google` (selbst-gehostet, kein CLS).

### Motion
- Reveal-Animation: `Reveal`-Komponente wrapper
- Page-load: gestaffelt im Hero
- Hover: gap, transform, color via cubic-bezier(0.22, 1, 0.36, 1)
- Respektiert `prefers-reduced-motion`

---

## 📷 Bilder

Aktuell verwendet die Site Unsplash-Demobilder (siehe `next.config.js` whitelist).
Für die Produktivversion:

1. Lege deine Bilder in `/public/bilder/...`
2. Ersetze die Unsplash-URLs in `Hero.tsx`, `About.tsx`, `Projects.tsx`
3. Optional: entferne den Unsplash-Eintrag in `next.config.js`

---

## 📝 Inhalte anpassen

- **Services**: Array `SERVICES` in `components/Services.tsx`
- **Projekte**: Array `PROJECTS` in `components/Projects.tsx`
- **Testimonials**: Array `ITEMS` in `components/Testimonials.tsx`
- **Werte**: Array `VALUES` in `components/Philosophy.tsx`
- **Stats**: Array `STATS` in `components/About.tsx`
- **Kontakt-Infos**: Array `INFO` in `components/Contact.tsx`
- **Form-Action**: in `Contact.tsx` ist Formspree (`xnjgplkg`) eingestellt

---

## 🚢 Deployment

Vercel ist ein Klick:
```bash
npm i -g vercel
vercel
```

Oder als statisches Build:
```bash
npm run build
```
