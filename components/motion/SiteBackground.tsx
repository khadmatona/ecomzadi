"use client";

import { VideoBackground } from "@/components/motion/VideoBackground";
import { useMediaQuery } from "@/lib/motion/useMediaQuery";
import { MOBILE_BREAKPOINT } from "@/lib/motion/tokens";
import {
  HERO_VIDEO_SRC,
  HERO_VIDEO_MOBILE_SRC,
  HERO_VIDEO_DARK_SRC,
  HERO_VIDEO_DARK_MOBILE_SRC,
} from "@/lib/content";
import { useTheme } from "@/lib/useTheme";

export function SiteBackground() {
  const isDesktop = useMediaQuery(`(min-width: ${MOBILE_BREAKPOINT}px)`);
  const { theme } = useTheme();

  const src =
    theme === "dark"
      ? isDesktop
        ? HERO_VIDEO_DARK_SRC
        : HERO_VIDEO_DARK_MOBILE_SRC
      : isDesktop
        ? HERO_VIDEO_SRC
        : HERO_VIDEO_MOBILE_SRC;

  return (
    <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
      <VideoBackground src={src} />
    </div>
  );
}
