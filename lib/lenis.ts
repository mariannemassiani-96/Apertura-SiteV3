// lib/lenis.ts
import Lenis from "lenis";
import { gsap } from "./gsap";

export type LenisInstance = Lenis | null;

export const createLenis = () => {
  const lenis = new Lenis({
    // tu peux garder duration si tu veux, mais le prompt Lenis recommandait lerp + wheelMultiplier
    // on reste proche de ton code existant
    duration: 1.1,
    smoothWheel: true,
    lerp: 0.08
  });

  // GSAP ticker gives time in seconds; Lenis expects milliseconds
  const raf = (timeSeconds: number) => {
    lenis.raf(timeSeconds * 1000);
  };

  gsap.ticker.add(raf);
  gsap.ticker.lagSmoothing(0);

  return {
    lenis,
    destroy: () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    }
  };
};
