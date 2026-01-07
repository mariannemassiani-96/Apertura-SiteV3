import HeroImage from "@/components/HeroImage";
import CTASection from "@/components/CTASection";
import Accordion from "@/components/Accordion";
import { siteContent } from "@/lib/content";

export default function GammesPage() {
  const { hero, ranges, comparison, cta } = siteContent.gammes;

  return (
    <>
      <HeroImage title={hero.title} subtitle={hero.subtitle} image={hero.image} />
      <section className="py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 lg:grid-cols-2">
          {ranges.map((range) => (
            <article key={range.title} className="rounded-3xl border border-ink/10 bg-white/70 p-6">
              <h2 className="text-2xl font-light text-ink">{range.title}</h2>
              <p className="mt-3 text-sm text-ink/70 md:text-base">{range.text}</p>
              <ul className="mt-4 space-y-2 text-sm text-ink/60">
                {range.points.map((point) => (
                  <li key={point}>— {point}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-ink/70">
                <strong className="font-medium">Pour qui :</strong> {range.audience}
              </p>
              <p className="mt-2 text-sm text-ink/70">
                <strong className="font-medium">Exemples :</strong> {range.example}
              </p>
            </article>
          ))}
        </div>
      </section>
      <Accordion title="Comparer les gammes" items={comparison.map((item) => ({ question: item.title, answer: item.content }))} />
      <CTASection {...cta} />
    </>
  );
}
