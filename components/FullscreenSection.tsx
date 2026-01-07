"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useIsomorphicLayoutEffect } from "@/lib/useIsomorphicLayoutEffect";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

type FullscreenSectionProps = {
  title: string;
  text: string;
  image: string;
  snap?: boolean;
};

export default function FullscreenSection({
  title,
  text,
  image,
  snap
}: FullscreenSectionProps) {
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
      gsap.fromTo(
        element.querySelector(".fullscreen-content"),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 70%",
            end: "bottom 50%",
            scrub: false
          }
        }
      );
    }, element);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      data-snap={snap ? "true" : undefined}
      className="relative flex h-[90svh] items-end overflow-hidden"
    >
      <Image src={image} alt="" fill className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-ink/40" />
      <div className="fullscreen-content relative z-10 mx-auto w-full max-w-6xl px-6 pb-20">
        <h2 className="max-w-2xl text-3xl font-light text-white md:text-4xl">{title}</h2>
        <p className="mt-4 max-w-2xl text-sm text-white/80 md:text-base">{text}</p>
      </div>
    </section>
  );
}
