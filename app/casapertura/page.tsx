import HeroImage from "@/components/HeroImage";
import StorySection from "@/components/StorySection";
import FloatingGallerySection from "@/components/FloatingGallerySection";
import CardGrid from "@/components/CardGrid";
import CTASection from "@/components/CTASection";
import { siteContent } from "@/lib/content";

export default function CasaAperturaPage() {
  const { hero, story, floatingGallery, services, agencies, cta } = siteContent.casapertura;

  return (
    <>
      <HeroImage title={hero.title} subtitle={hero.subtitle} image={hero.image} />
      <StorySection title="Le parcours" blocks={story} />
      <FloatingGallerySection
        title="Une expérience fluide"
        text="Quelques repères visuels pour comprendre l'attention portée aux détails."
        items={floatingGallery}
        pinned
      />
      <CardGrid title="Services dédiés" items={services} />
      <CardGrid title="Agences & relais" items={agencies} />
      <CTASection {...cta} />
    </>
  );
}
