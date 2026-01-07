"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useIsomorphicLayoutEffect } from "@/lib/useIsomorphicLayoutEffect";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

type HeroImageProps = {
  title: string;
  subtitle: string;
  image: string;
};

export default function HeroImage({ title, subtitle, image }: HeroImageProps) {
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
      gsap.fromTo(
        element.querySelector(".hero-content"),
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 60%",
            scrub: false
          }
        }
      );
    }, element);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section ref={containerRef} className="relative h-[70svh] w-full overflow-hidden">
      <Image src={image} alt="" fill className="object-cover" sizes="100vw" priority />
      <div className="absolute inset-0 bg-ink/40" />
      <div className="hero-content relative z-10 flex h-full w-full items-end">
        <div className="mx-auto w-full max-w-6xl px-6 pb-16">
          <h1 className="max-w-3xl text-4xl font-light leading-tight text-white md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-white/80 md:text-base">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
