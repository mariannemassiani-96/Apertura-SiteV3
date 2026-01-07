"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type Lenis from "lenis";
import { registerGsapPlugins, ScrollTrigger } from "@/lib/gsap";
import { createLenis } from "@/lib/lenis";
import { createSnapManager } from "@/lib/snap";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

const LenisContext = createContext<Lenis | null>(null);

export const useLenis = () => useContext(LenisContext);

export default function Providers({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);

  useEffect(() => {
    registerGsapPlugins();
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setLenisInstance(null);
      ScrollTrigger.killAll();
      return;
    }

    const { lenis, destroy } = createLenis();
    setLenisInstance(lenis);

    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    const media = window.matchMedia("(min-width: 1024px)");
    let cleanupSnap: (() => void) | null = null;

    if (media.matches) {
      cleanupSnap = createSnapManager(lenis);
    }

    return () => {
      cleanupSnap?.();
      destroy();
      setLenisInstance(null);
    };
  }, [prefersReducedMotion]);

  const value = useMemo(() => lenisInstance, [lenisInstance]);

  return <LenisContext.Provider value={value}>{children}</LenisContext.Provider>;
}
