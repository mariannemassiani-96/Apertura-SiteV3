import Lenis from "lenis";
import { gsap } from "./gsap";

export type LenisInstance = Lenis | null;

export const createLenis = () => {
  const lenis = new Lenis({
    duration: 1.1,
    smoothWheel: true,
    smoothTouch: false,
    lerp: 0.08
  });

  const raf = (time: number) => {
    lenis.raf(time);
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
