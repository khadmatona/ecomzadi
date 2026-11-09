"use client";

import Image from "next/image";
import { useTheme } from "@/lib/useTheme";
import { SITE } from "@/lib/content";
import { cn } from "@/lib/cn";

export function Logo({ className, priority }: { className?: string; priority?: boolean }) {
  const { theme } = useTheme();
  const src = theme === "dark" ? "/logo-ecomzadi-dark.png" : "/logo-ecomzadi-v2.png";

  return (
    <Image
      src={src}
      alt={SITE.name}
      width={800}
      height={183}
      priority={priority}
      className={cn("w-auto", className)}
    />
  );
}
