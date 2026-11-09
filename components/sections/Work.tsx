"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { useSectionScrollFX } from "@/lib/motion/useSectionScrollFX";
import { WORK_ITEMS } from "@/lib/content";
import { TONE_OVERLAY, TONE_ACCENT, TONE_TEXT } from "@/lib/work-tones";
import { cn } from "@/lib/cn";

export function Work() {
  const { ref, enabled } = useSectionScrollFX<HTMLElement>();

  return (
    <section
      ref={ref as never}
      id="work"
      className="overflow-hidden bg-bg py-24 md:py-32"
    >
      <div className="mx-auto max-w-[100rem] px-4 md:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal y={16} duration={0.6}>
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-ink">
                Selected Work
              </span>
            </Reveal>
            <TextReveal
              as="h2"
              text="Brands we accompany from idea to growth."
              className="mt-4 max-w-2xl font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-ink sm:text-5xl"
            />
          </div>
          <Reveal y={16} delay={0.15} className="max-w-sm text-ink">
            <p>
              A look at real projects — branding, websites, and digital
              strategy built for brands across different industries.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-10 md:mt-16">
          {WORK_ITEMS.map((item, i) => (
            <WorkRow key={item.sector} item={item} index={i} enabled={enabled} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkRow({
  item,
  index,
  enabled,
}: {
  item: (typeof WORK_ITEMS)[number];
  index: number;
  enabled: boolean;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const reversed = index % 2 === 1;

  useGSAP(
    () => {
      const row = rowRef.current;
      const imageWrap = imageWrapRef.current;
      if (!row || !imageWrap) return;

      if (!enabled) {
        gsap.set(imageWrap, { clearProps: "all" });
        return;
      }

      gsap.fromTo(
        row.querySelectorAll("[data-reveal]"),
        { opacity: 0, y: 48 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        imageWrap,
        { yPercent: reversed ? -8 : 8 },
        {
          yPercent: reversed ? 8 : -8,
          ease: "none",
          scrollTrigger: {
            trigger: row,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        },
      );
    },
    { dependencies: [enabled, reversed], scope: rowRef },
  );

  return (
    <div
      ref={rowRef}
      className={cn(
        "group relative flex flex-col gap-8 border-t border-line py-12 first:border-none md:flex-row md:items-center md:gap-16 md:py-20",
        reversed && "md:flex-row-reverse",
      )}
    >
      <div
        ref={imageWrapRef}
        data-reveal
        className="relative z-10 w-full md:w-1/2"
      >
        <div className="relative">
          <div
            aria-hidden
            className={cn(
              "absolute -inset-3 -z-10 rotate-2 rounded-[2rem]",
              TONE_ACCENT[item.tone],
            )}
          />
          <Link
            href={`/work/${item.slug}`}
            className="relative block aspect-[4/3] overflow-hidden rounded-2xl"
          >
            <Image
              src={item.image}
              alt={`${item.name} — ${item.sector} case study`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="scale-[1.05] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.15]"
            />
            <div
              aria-hidden
              className={cn("absolute inset-0 bg-gradient-to-t to-transparent", TONE_OVERLAY[item.tone])}
            />
          </Link>
        </div>
      </div>

      <div data-reveal className="relative z-10 w-full md:w-1/2">
        <p className={cn("text-xs font-medium uppercase tracking-[0.14em]", TONE_TEXT[item.tone])}>
          {item.sector}
        </p>
        <h3
          className="mt-3 font-display font-bold uppercase leading-[0.95] tracking-tight text-ink transition-transform duration-300 group-hover:-translate-y-1"
          style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
        >
          {item.name}
        </h3>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-muted">
          {item.summary}
        </p>
        <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5">
          {item.services.map((service) => (
            <li
              key={service}
              className={cn("text-xs font-medium uppercase tracking-[0.1em]", TONE_TEXT[item.tone])}
            >
              {service}
            </li>
          ))}
        </ul>
        <Link
          href={`/work/${item.slug}`}
          className="mt-6 flex w-fit items-center gap-4"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ink text-ink transition-all duration-300 group-hover:-translate-y-1 group-hover:rotate-45 group-hover:bg-ink group-hover:text-bg">
            <svg aria-hidden viewBox="0 0 60 60" className="h-4 w-4" fill="none">
              <path
                d="M10 50 L50 10 M50 10 L50 26 M50 10 L34 10"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-sm font-medium text-ink">View the project</span>
        </Link>
      </div>
    </div>
  );
}
