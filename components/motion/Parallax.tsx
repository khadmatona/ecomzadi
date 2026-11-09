"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/motion/useReducedMotion";
import { MOBILE_BREAKPOINT } from "@/lib/motion/tokens";
import { cn } from "@/lib/cn";

type ParallaxProps = {
  children: React.ReactNode;
  className?: string;
  distance?: number;
};

export function Parallax({ children, className, distance = 50 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || reducedMotion || window.innerWidth < MOBILE_BREAKPOINT) return;

      gsap.fromTo(
        el,
        { y: -distance },
        {
          y: distance,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    },
    { dependencies: [reducedMotion], scope: ref },
  );

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
