import PageHero from "@/components/PageHero";
import Projects from "@/components/Projects";

export const metadata = {
  title: "Projekte — Danjela Gaba Architektur",
};

export default function ProjektePage() {
  return (
    <>
      <PageHero
        num="03"
        eyebrow="Ausgewählte Projekte"
        title={
          <>
            Werk &amp; <em className="text-bone">Realisierung</em>
          </>
        }
        sub="Eine Auswahl architektonischer Arbeiten aus über 15 Jahren Praxis in Wien und Niederösterreich."
      />
      <Projects hideHeader />
    </>
  );
}
