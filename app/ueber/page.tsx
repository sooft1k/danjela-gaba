import PageHero from "@/components/PageHero";
import About from "@/components/About";

export const metadata = {
  title: "Über — Danjela Gaba Architektur",
};

export default function UeberPage() {
  return (
    <>
      <PageHero
        num="01"
        eyebrow="Über das Studio"
        title={
          <>
            Architektur ist <em className="text-bone">Haltung</em>,<br />
            kein Beruf.
          </>
        }
        sub="Diplom-Ingenieurin für Architektur · seit über 15 Jahren in Wien und Niederösterreich tätig."
      />
      <About hideHeader />
    </>
  );
}
