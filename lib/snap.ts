import type Lenis from "lenis";

type SnapOptions = {
  selector?: string;
  debounceMs?: number;
};

export const createSnapManager = (
  lenis: Lenis,
  { selector = "[data-snap='true']", debounceMs = 180 }: SnapOptions = {}
) => {
  let timeout: NodeJS.Timeout | null = null;

  const handle = () => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      const anchors = Array.from(document.querySelectorAll<HTMLElement>(selector));
      if (!anchors.length) {
        return;
      }

      const viewportHeight = window.innerHeight;
      const current = lenis.scroll;
      const closest = anchors
        .map((anchor) => {
          const rect = anchor.getBoundingClientRect();
          const offset = rect.top + current;
          return { anchor, offset, distance: Math.abs(offset - current) };
        })
        .sort((a, b) => a.distance - b.distance)[0];

      if (!closest) {
        return;
      }

      const threshold = viewportHeight * 0.12;
      if (closest.distance < threshold) {
        lenis.scrollTo(closest.offset, { duration: 0.8 });
      }
    }, debounceMs);
  };

  window.addEventListener("scroll", handle, { passive: true });

  return () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    window.removeEventListener("scroll", handle);
  };
};
