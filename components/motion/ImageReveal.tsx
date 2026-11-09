"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/motion/useReducedMotion";
import { DURATION, GSAP_EASE } from "@/lib/motion/tokens";
import { cn } from "@/lib/cn";

type ImageRevealProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function ImageReveal({ src, alt, className, sizes, priority }: ImageRevealProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      const wrap = wrapRef.current;
      const img = imgRef.current;
      if (!wrap || !img) return;

      if (reducedMotion) {
        gsap.set(wrap, { clipPath: "inset(0% round 0px)" });
        gsap.set(img, { scale: 1 });
        return;
      }

      const trigger = {
        trigger: wrap,
        start: "top 85%",
        toggleActions: "play none none none",
      };

      gsap.fromTo(
        wrap,
        { clipPath: "inset(10% round 0px)" },
        {
          clipPath: "inset(0% round 0px)",
          duration: DURATION.cinematic,
          ease: GSAP_EASE.premium,
          scrollTrigger: trigger,
        },
      );

      gsap.fromTo(
        img,
        { scale: 1.18 },
        {
          scale: 1,
          duration: DURATION.cinematic,
          ease: GSAP_EASE.premium,
          scrollTrigger: trigger,
        },
      );
    },
    { dependencies: [reducedMotion], scope: wrapRef },
  );

  return (
    <div ref={wrapRef} className={cn("relative overflow-hidden", className)}>
      <div ref={imgRef} className="relative h-full w-full">
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
    </div>
  );
}
