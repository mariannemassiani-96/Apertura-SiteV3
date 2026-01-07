import HeroVideo from "@/components/HeroVideo";
import FullscreenSection from "@/components/FullscreenSection";
import FloatingGallerySection from "@/components/FloatingGallerySection";
import CTASection from "@/components/CTASection";
import { siteContent } from "@/lib/content";

export default function HomePage() {
  const { hero, sections, cta } = siteContent.home;

  return (
    <>
      <HeroVideo
        title={hero.title}
        subtitle={hero.subtitle}
        ctaLabel={hero.cta.label}
        ctaHref={hero.cta.href}
        videoSrc="/media/hero-home.mp4"
      />
      <FullscreenSection
        title={sections[0].title}
        text={sections[0].text}
        image={sections[0].image}
        snap
      />
      <FloatingGallerySection
        title={sections[1].title}
        text={sections[1].text}
        items={siteContent.vision.floatingGallery}
        pinned
        snap
      />
      <FullscreenSection
        title={sections[2].title}
        text={sections[2].text}
        image={sections[2].image}
        snap
      />
      <FloatingGallerySection
        title="Le projet comme parcours"
        text="Des volumes à l'usage quotidien, nous orchestrons chaque étape pour que l'ouverture devienne un moment d'architecture."
        items={siteContent.besoins.gallery}
        pinned
        snap
      />
      <FullscreenSection
        title={sections[3].title}
        text={sections[3].text}
        image={sections[3].image}
        snap
      />
      <FloatingGallerySection
        title="Cas'Apertura, signature de service"
        text="Une relation claire, un rythme maîtrisé, une esthétique qui dure."
        items={siteContent.casapertura.floatingGallery}
        pinned
        snap
      />
      <CTASection {...cta} />
    </>
  );
}
