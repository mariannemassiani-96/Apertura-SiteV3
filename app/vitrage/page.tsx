import HeroImage from "@/components/HeroImage";
import StorySection from "@/components/StorySection";
import Tabs from "@/components/Tabs";
import FloatingGallerySection from "@/components/FloatingGallerySection";
import CTASection from "@/components/CTASection";
import { siteContent } from "@/lib/content";

export default function VitragePage() {
  const { hero, story, tabs, gallery, cta } = siteContent.vitrage;

  return (
    <>
      <HeroImage title={hero.title} subtitle={hero.subtitle} image={hero.image} />
      <StorySection title="Le rôle du vitrage" blocks={story} />
      <Tabs items={tabs} />
      <FloatingGallerySection
        title="Matières de lumière"
        text="Des solutions techniques pour transformer la sensation intérieure."
        items={gallery}
      />
      <CTASection {...cta} />
    </>
  );
}
