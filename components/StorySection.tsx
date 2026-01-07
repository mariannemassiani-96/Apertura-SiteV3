"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useIsomorphicLayoutEffect } from "@/lib/useIsomorphicLayoutEffect";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

type StorySectionProps = {
  title: string;
  blocks: { title: string; text: string }[];
};

export default function StorySection({ title, blocks }: StorySectionProps) {
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
        element.querySelector(".story-grid"),
        { y: 30, opacity: 0 },
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
  }, [prefersReducedMotion]);

  return (
    <section ref={sectionRef} className="py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6">
        <h2 className="text-3xl font-light text-ink md:text-4xl">{title}</h2>
        <div className="story-grid grid gap-6 md:grid-cols-2">
          {blocks.map((block) => (
            <article key={block.title} className="rounded-3xl border border-ink/10 bg-white/60 p-6">
              <h3 className="text-sm uppercase tracking-[0.2em] text-ink/60">{block.title}</h3>
              <p className="mt-3 text-sm text-ink/70 md:text-base">{block.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
