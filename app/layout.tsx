import type { Metadata } from "next";
import { Fraunces, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: "variable",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["300", "400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Danjela Gaba — Architektur",
  description:
    "Diplom-Ingenieurin für Architektur. Wohn- und Gewerbebau in Wien und Niederösterreich. Räume, die bleiben.",
  openGraph: {
    title: "Danjela Gaba — Architektur",
    description:
      "Räume, die bleiben. Individuelle Architektur für Wohn- und Gewerbebau in Wien und Niederösterreich.",
    locale: "de_AT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${fraunces.variable} ${manrope.variable} ${jetbrains.variable}`}
    >
      <body>
        <div className="grain" aria-hidden="true" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
