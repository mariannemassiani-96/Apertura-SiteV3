import HeroImage from "@/components/HeroImage";
import FloatingGallerySection from "@/components/FloatingGallerySection";
import CTASection from "@/components/CTASection";
import StorySection from "@/components/StorySection";
import { siteContent } from "@/lib/content";

export default function VisionPage() {
  const { hero, manifesto, floatingGallery, cta } = siteContent.vision;

  return (
    <>
      <HeroImage title={hero.title} subtitle={hero.subtitle} image={hero.image} />
      <StorySection title="Manifeste" blocks={manifesto.map((item) => ({ title: item.title, text: item.text }))} />
      <FloatingGallerySection
        title="Une lumière orchestrée"
        text="Quelques instants de nos projets, entre ouverture panoramique et intimité maîtrisée."
        items={floatingGallery}
        pinned
      />
      <CTASection {...cta} />
    </>
  );
}
