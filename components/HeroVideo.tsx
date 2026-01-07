"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useIsomorphicLayoutEffect } from "@/lib/useIsomorphicLayoutEffect";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

type HeroVideoProps = {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  videoSrc: string;
};

export default function HeroVideo({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  videoSrc
}: HeroVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useIsomorphicLayoutEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    const element = containerRef.current;
    if (!element) {
      return;
    }

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top top",
            end: "bottom+=20% top",
            scrub: true,
            pin: true
          }
        });

        tl.fromTo(
          element.querySelector(".hero-inner"),
          { scale: 1, opacity: 1 },
          { scale: 0.96, opacity: 0.92, ease: "none" }
        );

        return () => {
          mm.revert();
        };
      });
    }, element);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [prefersReducedMotion]);

  return (
    <section ref={containerRef} className="relative h-[100svh] w-full overflow-hidden">
      <div className="hero-inner absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/media/hero-home.jpg"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-ink/30" />
      </div>
      <div className="relative z-10 flex h-full w-full items-end">
        <div className="mx-auto w-full max-w-6xl px-6 pb-20">
          <h1 className="max-w-3xl text-4xl font-light leading-tight text-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-white/80 md:text-base">{subtitle}</p>
          <a
            href={ctaHref}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2 text-xs uppercase tracking-[0.3em] text-white"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
