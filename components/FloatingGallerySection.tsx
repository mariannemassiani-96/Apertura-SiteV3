"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useIsomorphicLayoutEffect } from "@/lib/useIsomorphicLayoutEffect";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

type GalleryItem = {
  image: string;
  title: string;
  description: string;
};

type FloatingGallerySectionProps = {
  title: string;
  text: string;
  items: GalleryItem[];
  pinned?: boolean;
  snap?: boolean;
};

export default function FloatingGallerySection({
  title,
  text,
  items,
  pinned = false,
  snap
}: FloatingGallerySectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useIsomorphicLayoutEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    const element = sectionRef.current;
    if (!element) {
      return;
    }

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        if (!pinned) {
          return;
        }
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top top",
            end: "bottom+=30% top",
            scrub: true,
            pin: true
          }
        });

        tl.fromTo(
          element.querySelector(".gallery-track"),
          { y: 40, opacity: 0.8 },
          { y: -40, opacity: 1, ease: "none" }
        );

        return () => {
          mm.revert();
        };
      });

      gsap.fromTo(
        element.querySelector(".gallery-content"),
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 75%",
            end: "bottom 60%",
            scrub: false
          }
        }
      );
    }, element);

    return () => ctx.revert();
  }, [prefersReducedMotion, pinned]);

  return (
    <section ref={sectionRef} data-snap={snap ? "true" : undefined} className="py-24">
      <div className="gallery-content mx-auto flex w-full max-w-6xl flex-col gap-8 px-6">
        <div>
          <h2 className="text-3xl font-light text-ink md:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-sm text-ink/70 md:text-base">{text}</p>
        </div>
        <div className="gallery-track grid gap-6 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="flex flex-col gap-3">
              <div className="relative h-64 overflow-hidden rounded-3xl border border-ink/10">
                <Image src={item.image} alt="" fill className="object-cover" sizes="(min-width: 1024px) 30vw, 100vw" />
              </div>
              <h3 className="text-sm uppercase tracking-[0.2em] text-ink/70">{item.title}</h3>
              <p className="text-sm text-ink/60">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
