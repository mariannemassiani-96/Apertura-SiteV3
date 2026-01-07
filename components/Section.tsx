"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useIsomorphicLayoutEffect } from "@/lib/useIsomorphicLayoutEffect";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  title: string;
  text: string;
  image?: string;
  children?: React.ReactNode;
  className?: string;
  snap?: boolean;
};

export default function Section({
  id,
  title,
  text,
  image,
  children,
  className,
  snap
}: SectionProps) {
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
        element.querySelector(".section-inner"),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
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
    <section
      ref={sectionRef}
      id={id}
      data-snap={snap ? "true" : undefined}
      className={cn("py-20", className)}
    >
      <div className="section-inner mx-auto flex w-full max-w-6xl flex-col gap-8 px-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-light text-ink md:text-4xl">{title}</h2>
          <p className="max-w-2xl text-sm text-ink/70 md:text-base">{text}</p>
        </div>
        {image ? (
          <div className="relative h-[420px] overflow-hidden rounded-3xl border border-ink/10">
            <Image src={image} alt="" fill className="object-cover" sizes="(min-width: 1024px) 80vw, 100vw" />
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
