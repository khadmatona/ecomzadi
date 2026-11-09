"use client";

import { Fragment, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/motion/useReducedMotion";
import { DURATION, GSAP_EASE, STAGGER } from "@/lib/motion/tokens";

type TextRevealProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  className?: string;
  delay?: number;
  stagger?: number;
  start?: string;
};

export function TextReveal({
  text,
  as = "h2",
  className,
  delay = 0,
  stagger = STAGGER.tight,
  start = "top 88%",
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const words = text.split(" ");
  const Tag = as;

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const inner = el.querySelectorAll<HTMLElement>("[data-word-inner]");

      if (reducedMotion) {
        gsap.set(inner, { yPercent: 0, filter: "blur(0px)" });
        return;
      }

      gsap.fromTo(
        inner,
        { yPercent: 115, filter: "blur(14px)" },
        {
          yPercent: 0,
          filter: "blur(0px)",
          duration: DURATION.base + 0.15,
          delay,
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
    <Tag ref={ref as never} className={className}>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className="-mt-[0.2em] inline-block overflow-hidden pb-[0.35em] pt-[0.2em] align-top">
            <span data-word-inner className="inline-block will-change-transform">
              {word}
            </span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </Tag>
  );
}
