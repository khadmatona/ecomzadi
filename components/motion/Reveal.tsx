"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/motion/useReducedMotion";
import { DURATION, GSAP_EASE } from "@/lib/motion/tokens";
import { cn } from "@/lib/cn";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  duration?: number;
  start?: string;
};

export function Reveal({
  children,
  className,
  y = 28,
  delay = 0,
  duration = DURATION.slow,
  start = "top 85%",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      if (reducedMotion) {
        gsap.set(el, { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: GSAP_EASE.premium,
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: "play none none none",
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
