import HeroImage from "@/components/HeroImage";
import Tabs from "@/components/Tabs";
import CardGrid from "@/components/CardGrid";
import FloatingGallerySection from "@/components/FloatingGallerySection";
import CTASection from "@/components/CTASection";
import { siteContent } from "@/lib/content";

export default function BesoinsPage() {
  const { hero, needs, rooms, gallery, cta } = siteContent.besoins;

  return (
    <>
      <HeroImage title={hero.title} subtitle={hero.subtitle} image={hero.image} />
      <Tabs items={rooms.map((room) => ({ title: room.title, content: room.text }))} />
      <CardGrid title="Besoins fondamentaux" items={needs} />
      <FloatingGallerySection
        title="Gestes justes, usages réels"
        text="Chaque détail est pensé pour répondre au quotidien, sans surcharge."
        items={gallery}
      />
      <CTASection {...cta} />
    </>
  );
}
