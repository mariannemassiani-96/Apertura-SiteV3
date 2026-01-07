"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useIsomorphicLayoutEffect } from "@/lib/useIsomorphicLayoutEffect";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
useIsomorphicLayoutEffect(() => {
  ensureGsap();
  if (prefersReducedMotion) return;
  ...
}, [prefersReducedMotion]);

type HeroVideoProps = {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  videoSrc?: string;   // <- autorise undefined
  posterSrc?: string;  // <- autorise undefined
};

export default function HeroVideo({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  videoSrc,
  posterSrc
}: HeroVideoProps) {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Fallbacks sûrs (évite src="undefined")
  const safeVideoSrc = typeof videoSrc === "string" && videoSrc.trim() ? videoSrc : "/media/hero.mp4";
  const safePosterSrc =
    typeof posterSrc === "string" && posterSrc.trim() ? posterSrc : "/media/hero.jpg";

  useIsomorphicLayoutEffect(() => {
    if (prefersReducedMotion) return;

    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const inner = el.querySelector<HTMLElement>(".hero-inner");
        const overlay = el.querySelector<HTMLElement>(".hero-overlay");
        const headline = el.querySelector<HTMLElement>(".hero-headline");

        if (!inner) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "+=70%",
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true
          }
        });

        // video container scale 1 -> 1.05
        tl.fromTo(inner, { scale: 1 }, { scale: 1.05, ease: "none" }, 0);

        // overlay opacity 0.15 -> 0.35
        if (overlay) {
          tl.fromTo(overlay, { opacity: 0.15 }, { opacity: 0.35, ease: "none" }, 0);
        }

        // headline opacity 1 -> 0 ; y 0 -> 20
        if (headline) {
          tl.fromTo(
            headline,
            { opacity: 1, y: 0 },
            { opacity: 0, y: 20, ease: "none" },
            0
          );
        }

        return () => {
          mm.revert();
        };
      });
    }, el);

    return () => {
      ctx.revert();
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
          preload="metadata"
          poster={safePosterSrc}
        >
          <source src={safeVideoSrc} type="video/mp4" />
        </video>

        {/* overlay ciblable par GSAP */}
        <div className="hero-overlay absolute inset-0 bg-ink/30 opacity-[0.15]" />
      </div>

      <div className="relative z-10 flex h-full w-full items-end">
        <div className="mx-auto w-full max-w-6xl px-6 pb-20">
          <h1 className="hero-headline max-w-3xl text-4xl font-light leading-tight text-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-white/80 md:text-base">
            {subtitle}
          </p>
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
