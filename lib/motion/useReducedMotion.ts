"use client";

import { useMediaQuery } from "@/lib/motion/useMediaQuery";

export function useReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
