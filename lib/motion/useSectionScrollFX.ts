"use client";

import { useRef } from "react";
import { useReducedMotion } from "@/lib/motion/useReducedMotion";
import { useMediaQuery } from "@/lib/motion/useMediaQuery";
import { MOBILE_BREAKPOINT } from "@/lib/motion/tokens";

/**
 * Shared gating for section-level "chapter" scroll transitions: only runs
 * on desktop (mobile keeps sections static/simple) and never under
 * prefers-reduced-motion.
 */
export function useSectionScrollFX<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);
  const reducedMotion = useReducedMotion();
  const isDesktop = useMediaQuery(`(min-width: ${MOBILE_BREAKPOINT}px)`);
  return { ref, enabled: isDesktop && !reducedMotion };
}
