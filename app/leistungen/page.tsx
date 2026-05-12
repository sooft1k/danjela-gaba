import PageHero from "@/components/PageHero";
import Services from "@/components/Services";

export const metadata = {
  title: "Leistungen — Danjela Gaba Architektur",
};

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        num="02"
        eyebrow="Leistungen"
        title={
          <>
            Alles aus <em className="text-bone">einer Hand</em>
          </>
        }
        sub="Von der ersten Idee bis zur Schlüsselübergabe — Ihr Projekt in besten Händen."
      />
      <Services hideHeader />
    </>
  );
}
