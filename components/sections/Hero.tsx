"use client";

import { useRouter } from "next/navigation";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { SiteBackground } from "@/components/motion/SiteBackground";

export function Hero() {
  const router = useRouter();

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-10"
    >
      <SiteBackground />

      <div className="relative mx-auto flex w-full max-w-[100rem] flex-col px-4 md:px-6">
        <h1 className="max-w-6xl font-display text-5xl font-extrabold lowercase leading-[0.9] tracking-tight text-[var(--color-hero-title)] sm:text-7xl lg:text-8xl">
          <TextReveal as="span" text="Marketing built for" delay={0.15} className="block" />
          <span className="flex flex-wrap items-center gap-x-4">
            <TextReveal as="span" text="measurable" delay={0.28} className="block" />
            <TextReveal as="span" text="growth." delay={0.36} className="block" />
          </span>
        </h1>

        <Reveal y={20} delay={0.55} className="mt-8 max-w-xl">
          <p className="text-lg leading-relaxed text-ink">
            Ecomzadi is a digital marketing agency helping ambitious brands turn
            strategy, content, and media into results that show up in the numbers.
          </p>
        </Reveal>

        <Reveal y={16} delay={0.7} className="mt-10 flex flex-wrap items-center gap-6">
          <MagneticButton
            className="rounded-full bg-[var(--color-button)] px-7 py-3.5 text-sm font-semibold text-ink transition-colors duration-300 hover:bg-bg"
            onClick={() => router.push("/contact")}
          >
            Start a Project
          </MagneticButton>

          <a
            href="#work"
            className="group inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-primary-dark"
          >
            View Our Work
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
