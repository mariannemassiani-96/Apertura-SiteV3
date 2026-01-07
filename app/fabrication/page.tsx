import HeroImage from "@/components/HeroImage";
import StorySection from "@/components/StorySection";
import FullscreenSection from "@/components/FullscreenSection";
import FloatingGallerySection from "@/components/FloatingGallerySection";
import Accordion from "@/components/Accordion";
import CTASection from "@/components/CTASection";
import { siteContent } from "@/lib/content";

export default function FabricationPage() {
  const { hero, story, floatingGallery, quality, cta } = siteContent.fabrication;

  return (
    <>
      <HeroImage title={hero.title} subtitle={hero.subtitle} image={hero.image} />
      <StorySection title="Le parcours de fabrication" blocks={story} />
      <FullscreenSection
        title="Des délais maîtrisés"
        text="Nous privilégions une planification réaliste, alignée sur la capacité de l'atelier et la coordination chantier."
        image="/media/atelier-3.jpg"
      />
      <FloatingGallerySection
        title="L'atelier en mouvement"
        text="Une série de gestes qui garantissent précision et répétabilité."
        items={floatingGallery}
        pinned
      />
      <Accordion title="Qualité & contrôle" items={quality.map((item) => ({ question: item.title, answer: item.content }))} />
      <CTASection {...cta} />
    </>
  );
}
