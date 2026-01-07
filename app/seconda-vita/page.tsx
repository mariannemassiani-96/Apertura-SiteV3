import HeroImage from "@/components/HeroImage";
import StorySection from "@/components/StorySection";
import CardGrid from "@/components/CardGrid";
import Accordion from "@/components/Accordion";
import CTASection from "@/components/CTASection";
import { siteContent } from "@/lib/content";

export default function SecondaVitaPage() {
  const { hero, story, cards, faq, cta } = siteContent.secondaVita;

  return (
    <>
      <HeroImage title={hero.title} subtitle={hero.subtitle} image={hero.image} />
      <StorySection title="Une autre manière de produire" blocks={story} />
      <CardGrid title="Le cycle Seconda Vita" items={cards} />
      <Accordion title="Questions fréquentes" items={faq.map((item) => ({ question: item.question, answer: item.answer }))} />
      <CTASection {...cta} />
    </>
  );
}
