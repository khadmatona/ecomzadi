"use client";

import { useReducedMotion } from "@/lib/motion/useReducedMotion";
import { cn } from "@/lib/cn";

type VideoBackgroundProps = {
  src?: string;
  poster?: string;
  className?: string;
};

export function VideoBackground({ src, poster, className }: VideoBackgroundProps) {
  const reducedMotion = useReducedMotion();

  if (src && !reducedMotion) {
    return (
      <video
        key={src}
        className={cn("h-full w-full object-cover", className)}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
      />
    );
  }

  return (
    <div
      className={cn(
        "h-full w-full animate-drift bg-gradient-to-br from-[#0f0d0a] via-primary-dark/40 to-[#0f0d0a]",
        className,
      )}
    />
  );
}
