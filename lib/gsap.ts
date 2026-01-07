// lib/gsap.ts
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const prefersReducedMotionQuery = "(prefers-reduced-motion: reduce)";

let pluginsRegistered = false;

/**
 * Register GSAP plugins (client-only) — safe with Next.js App Router.
 * Call this ONCE in a client component (e.g. Providers.tsx useEffect).
 */
export function registerGsapPlugins() {
  if (pluginsRegistered) return;

  // SSR guard
  if (typeof window === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);
  pluginsRegistered = true;

  // Recommended with Lenis + ScrollTrigger
  ScrollTrigger.config({
    ignoreMobileResize: true
  });
}

/**
 * Convenience: returns true only on client.
 */
export const isBrowser = () => typeof window !== "undefined";

export { gsap, ScrollTrigger };
