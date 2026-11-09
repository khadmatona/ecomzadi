"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/motion/useReducedMotion";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });

    // A fast scroll burst can occasionally outrun ScrollTrigger.update()'s
    // per-frame crossing detection, leaving a reveal stuck at its unplayed
    // state. Refreshing once scrolling settles re-evaluates every trigger
    // against the final position and self-corrects any that were missed.
    let refreshTimer: ReturnType<typeof setTimeout>;
    const scheduleRefresh = () => {
      clearTimeout(refreshTimer);
      refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 150);
    };

    lenis.on("scroll", () => {
      ScrollTrigger.update();
      scheduleRefresh();
    });

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      clearTimeout(refreshTimer);
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, [reducedMotion]);

  return <>{children}</>;
}
