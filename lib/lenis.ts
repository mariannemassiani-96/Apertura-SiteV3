import Lenis from "lenis";
import { gsap } from "./gsap";

export type LenisInstance = Lenis | null;

export const createLenis = () => {
  const lenis = new Lenis({
    duration: 1.1,
    smoothWheel: true,
    lerp: 0.08,
    // smoothTouch: false, // ❌ pas supporté par ta version de lenis (erreur TS)
  });

  // GSAP ticker fournit du temps en secondes -> Lenis attend des millisecondes
  const raf = (time: number) => {
    lenis.raf(time * 1000);
  };

  gsap.ticker.add(raf);
  gsap.ticker.lagSmoothing(0);

  return {
    lenis,
    destroy: () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    },
  };
};
