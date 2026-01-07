import type Lenis from "lenis";

type SnapOptions = {
  selector?: string;        // sections marquées data-snap="true"
  debounceMs?: number;      // délai après fin de scroll
  thresholdPct?: number;    // 0.10 -> 0.14
  offset?: number;          // offset header
  duration?: number;        // 0.6 -> 0.9
  enabled?: boolean;        // toggle (desktop only, reduced motion, etc.)
};

export const createSnapManager = (
  lenis: Lenis,
  {
    selector = "[data-snap='true']",
    debounceMs = 180,
    thresholdPct = 0.12,
    offset = -80,
    duration = 0.8,
    enabled = true
  }: SnapOptions = {}
) => {
  if (!enabled) return () => {};

  let timeout: ReturnType<typeof setTimeout> | null = null;
  let isUserActivelyScrolling = false;
  let isSnapping = false;

  const clear = () => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };

  const collectAnchors = () =>
    Array.from(document.querySelectorAll<HTMLElement>(selector)).filter(Boolean);

  // Si l’utilisateur scrolle (wheel/touch), on évite de “forcer” un snap.
  const onUserInputStart = () => {
    isUserActivelyScrolling = true;

    // Si un snap est en cours, on le coupe (soft cancel)
    if (isSnapping) {
      isSnapping = false;
      try {
        // stop net de l'animation en cours (selon version Lenis)
        (lenis as any).scrollTo?.((lenis as any).scroll ?? window.scrollY, { immediate: true });
      } catch {
        // no-op
      }
    }

    clear();
  };

  const onUserInputEnd = () => {
    // On laisse la logique debounce gérer le snap après 180ms
    isUserActivelyScrolling = false;
  };

  const maybeSnap = () => {
    if (isUserActivelyScrolling) return;

    const anchors = collectAnchors();
    if (!anchors.length) return;

    const vh = window.innerHeight || 1;
    const threshold = vh * thresholdPct;

    // On prend l'ancre la plus proche du haut de viewport
    const closest = anchors
      .map((el) => {
        const rect = el.getBoundingClientRect();
        return { el, distance: Math.abs(rect.top) };
      })
      .sort((a, b) => a.distance - b.distance)[0];

    if (!closest) return;
    if (closest.distance > threshold) return;

    // Snap doux vers l'ancre (element scrollTo)
    isSnapping = true;
    try {
      lenis.scrollTo(closest.el, {
        offset,
        duration,
        easing: (t: number) => 1 - Math.pow(1 - t, 3) // easeOutCubic doux
      } as any);
    } finally {
      // on relâche le flag après la durée
      window.setTimeout(() => {
        isSnapping = false;
      }, Math.round(duration * 1000));
    }
  };

  // IMPORTANT: on écoute Lenis (pas window scroll)
  const onLenisScroll = () => {
    clear();
    timeout = setTimeout(() => {
      maybeSnap();
    }, debounceMs);
  };

  // Wheel/touch = signaux d'intention utilisateur
  window.addEventListener("wheel", onUserInputStart, { passive: true });
  window.addEventListener("touchstart", onUserInputStart, { passive: true });
  window.addEventListener("touchmove", onUserInputStart, { passive: true });

  window.addEventListener("wheel", onUserInputEnd, { passive: true });
  window.addEventListener("touchend", onUserInputEnd, { passive: true });

  // Hook Lenis
  lenis.on("scroll", onLenisScroll);

  // Au chargement / resize, on clear (évite snaps bizarres)
  const onResize = () => clear();
  window.addEventListener("resize", onResize);

  return () => {
    clear();
    window.removeEventListener("wheel", onUserInputStart);
    window.removeEventListener("touchstart", onUserInputStart);
    window.removeEventListener("touchmove", onUserInputStart);

    window.removeEventListener("wheel", onUserInputEnd);
    window.removeEventListener("touchend", onUserInputEnd);

    window.removeEventListener("resize", onResize);

    try {
      lenis.off("scroll", onLenisScroll);
    } catch {
      // selon version Lenis, off peut ne pas exister
    }
  };
};
