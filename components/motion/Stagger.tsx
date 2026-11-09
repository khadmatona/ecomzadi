"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/motion/useReducedMotion";
import { DURATION, GSAP_EASE, STAGGER } from "@/lib/motion/tokens";
import { cn } from "@/lib/cn";

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  y?: number;
  scale?: number;
  stagger?: number;
  start?: string;
};

export function Stagger({
  children,
  className,
  y = 24,
  scale = 1,
  stagger = STAGGER.base,
  start = "top 85%",
}: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const items = Array.from(el.children);
      if (items.length === 0) return;

      if (reducedMotion) {
        gsap.set(items, { opacity: 1, y: 0, scale: 1 });
        return;
      }

      gsap.fromTo(
        items,
        { opacity: 0, y, scale },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: DURATION.base,
          stagger,
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
