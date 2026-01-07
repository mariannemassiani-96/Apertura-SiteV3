import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const registerGsapPlugins = () => {
  gsap.registerPlugin(ScrollTrigger);
};

export const prefersReducedMotionQuery = "(prefers-reduced-motion: reduce)";

export { gsap, ScrollTrigger };
