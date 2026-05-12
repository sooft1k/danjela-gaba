import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Kontakt — Danjela Gaba Architektur",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        num="05"
        eyebrow="Kontakt"
        title={
          <>
            Lassen Sie uns <em className="text-bone">sprechen.</em>
          </>
        }
        sub="Erstgespräch kostenlos und unverbindlich — erzählen Sie mir von Ihrem Vorhaben."
      />
      <Contact hideHeader />
    </>
  );
}
