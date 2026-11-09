export const DURATION = {
  fast: 0.2,
  base: 0.5,
  slow: 0.9,
  section: 1.1,
  cinematic: 1.4,
  ambient: 14,
} as const;

export const STAGGER = {
  tight: 0.05,
  base: 0.09,
  loose: 0.15,
} as const;

export const GSAP_EASE = {
  premium: "power4.out",
  snappy: "power2.out",
  smooth: "power1.inOut",
  cinematic: "expo.out",
} as const;

export const CSS_EASE = {
  premium: [0.16, 1, 0.3, 1],
  snappy: [0.65, 0, 0.35, 1],
  smooth: [0.4, 0, 0.2, 1],
} as const;

export const MOBILE_BREAKPOINT = 768;
