import PageHero from "@/components/PageHero";
import Philosophy from "@/components/Philosophy";
import Testimonials from "@/components/Testimonials";

export const metadata = {
  title: "Philosophie — Danjela Gaba Architektur",
};

export default function PhilosophiePage() {
  return (
    <>
      <PageHero
        num="04"
        eyebrow="Philosophie"
        title={
          <>
            Werte &amp; <em className="text-bone">Haltung</em>
          </>
        }
        sub="Architektur, die in zwanzig Jahren genauso überzeugt wie heute. Keine Trends, keine Moden."
      />
      <Philosophy hideHeader />
      <Testimonials />
    </>
  );
}
