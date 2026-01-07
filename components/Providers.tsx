"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import type Lenis from "lenis";
import { gsap, registerGsapPlugins, ScrollTrigger } from "@/lib/gsap";
import { createLenis } from "@/lib/lenis";
import { createSnapManager } from "@/lib/snap";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

const LenisContext = createContext<Lenis | null>(null);

export const useLenis = () => useContext(LenisContext);

export default function Providers({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);

  // Register plugins once (client-only safe)
  useEffect(() => {
    registerGsapPlugins();
  }, []);

  useEffect(() => {
    // Reduced motion: no Lenis, no ScrollTrigger-driven smoothness
    if (prefersReducedMotion) {
      setLenisInstance(null);

      // Soft cleanup: kill triggers created so far + clear listeners
      try {
        ScrollTrigger.getAll().forEach((t) => t.kill(true));
        ScrollTrigger.clearMatchMedia();
      } catch {
        // ignore
      }
      return;
    }

    const { lenis, destroy } = createLenis();
    setLenisInstance(lenis);

    // Sync Lenis -> ScrollTrigger
    const onLenisScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onLenisScroll);

    // Optional subtle snap (desktop only)
    const media = window.matchMedia("(min-width: 1024px)");
    let cleanupSnap: (() => void) | null = null;

    if (media.matches) {
      // createSnapManager should internally collect anchors [data-snap="true"]
      cleanupSnap = createSnapManager(lenis);
    }

    // Refresh after load (images/video/layout)
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    // Also refresh on resize (debounced-ish)
    let rAf = 0;
    const onResize = () => {
      cancelAnimationFrame(rAf);
      rAf = requestAnimationFrame(() => ScrollTrigger.refresh());
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("load", onLoad);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rAf);

      cleanupSnap?.();

      // Detach listener BEFORE destroy
      try {
        lenis.off("scroll", onLenisScroll);
      } catch {
        // ignore
      }

      destroy();
      setLenisInstance(null);
    };
  }, [prefersReducedMotion]);

  const value = useMemo(() => lenisInstance, [lenisInstance]);

  return <LenisContext.Provider value={value}>{children}</LenisContext.Provider>;
}
