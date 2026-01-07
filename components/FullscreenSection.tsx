"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useIsomorphicLayoutEffect } from "@/lib/useIsomorphicLayoutEffect";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

type FullscreenSectionProps = {
  title: string;
  text: string;
  image?: string; // <- autorise undefined
  snap?: boolean;
};

export default function FullscreenSection({
  title,
  text,
  image,
  snap
}: FullscreenSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Fallback safe (évite <Image src={undefined} /> => erreurs / blanc)
  const safeImage =
    typeof image === "string" && image.trim() ? image : "/media/placeholder.jpg";

  useIsomorphicLayoutEffect(() => {
    if (prefersReducedMotion) return;

    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const media = el.querySelector<HTMLElement>(".fs-media");
      const content = el.querySelector<HTMLElement>(".fullscreen-content");

      // Parallaxe image : yPercent -5 -> +5 (scroll)
      if (media) {
        gsap.fromTo(
          media,
          { yPercent: -5 },
          {
            yPercent: 5,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: true
            }
          }
        );
      }

      // Texte : fade in (entrée)
      if (content) {
        gsap.fromTo(
          content,
          { y: 26, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 70%",
              end: "top 45%",
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true
            }
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      data-snap={snap ? "true" : undefined}
      className="relative flex h-[100svh] w-full items-end overflow-hidden"
    >
      {/* wrapper pour la parallaxe */}
      <div className="fs-media absolute inset-0">
        <Image
          src={safeImage}
          alt={title}
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
      </div>

      <div className="absolute inset-0 bg-ink/40" />

      <div className="fullscreen-content relative z-10 mx-auto w-full max-w-6xl px-6 pb-20">
        <h2 className="max-w-2xl text-3xl font-light text-white md:text-4xl">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-white/80 md:text-base">
          {text}
        </p>
      </div>
    </section>
  );
}
