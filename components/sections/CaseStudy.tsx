import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { Stagger } from "@/components/motion/Stagger";
import { WORK_ITEMS } from "@/lib/content";
import { TONE_ACCENT, TONE_TEXT, TONE_BORDER, TONE_SOLID } from "@/lib/work-tones";
import { cn } from "@/lib/cn";

type WorkItem = (typeof WORK_ITEMS)[number];

export function CaseStudy({ item }: { item: WorkItem }) {
  return (
    <>
      <section className="bg-bg pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-[100rem] px-4 md:px-6">
          <Reveal y={12} duration={0.6}>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              ← All work
            </Link>
          </Reveal>

          <Reveal y={16} delay={0.1} duration={0.6}>
            <span className={cn("mt-8 block text-xs font-medium uppercase tracking-[0.18em]", TONE_TEXT[item.tone])}>
              {item.sector}
            </span>
          </Reveal>
          <TextReveal
            as="h1"
            text={item.name}
            delay={0.15}
            className="mt-4 max-w-4xl font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink sm:text-6xl md:text-7xl"
          />

          <Reveal y={16} delay={0.3} className="mt-8">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {item.services.map((service) => (
                <li
                  key={service}
                  className={cn(
                    "rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.1em]",
                    TONE_BORDER[item.tone],
                    TONE_TEXT[item.tone],
                  )}
                >
                  {service}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="mt-14 md:mt-20 md:grid md:grid-cols-12 md:items-center md:gap-12">
            <div className="relative md:col-span-7">
              <div
                aria-hidden
                className={cn(
                  "absolute -inset-4 -z-10 -rotate-1 rounded-[3rem]",
                  TONE_ACCENT[item.tone],
                )}
              />
              <ImageReveal
                src={item.image}
                alt={`${item.name} — ${item.sector} case study`}
                className="aspect-[8/5] w-full rounded-3xl"
                sizes="(min-width: 768px) 56rem, 100vw"
                priority
              />
            </div>
            <div className="mt-10 md:col-span-5 md:mt-0">
              <Reveal y={16}>
                <span className={cn("text-xs font-medium uppercase tracking-[0.18em]", TONE_TEXT[item.tone])}>
                  The Mission
                </span>
              </Reveal>
              <Reveal y={16} delay={0.1}>
                <p className="mt-4 font-display text-2xl font-normal leading-[1.3] tracking-tight text-ink sm:text-3xl">
                  {item.mission}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg pb-24 md:pb-32">
        <div className="mx-auto max-w-[100rem] px-4 md:px-6">
          <Reveal y={16}>
            <span className={cn("text-xs font-medium uppercase tracking-[0.18em]", TONE_TEXT[item.tone])}>
              What We Delivered
            </span>
          </Reveal>

          <Stagger className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-14">
            {item.achievements.map((achievement) => (
              <div
                key={achievement.title}
                className="rounded-3xl border border-line bg-bg/60 p-10 backdrop-blur-xl"
              >
                <h3 className="flex items-center gap-3 font-display text-2xl font-bold tracking-tight text-ink">
                  <span aria-hidden className={cn("h-2 w-2 shrink-0 rounded-full", TONE_SOLID[item.tone])} />
                  {achievement.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-muted">
                  {achievement.description}
                </p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="border-t border-line bg-bg py-24 md:py-32">
        <div className="mx-auto max-w-[100rem] px-4 text-center md:px-6">
          <Reveal y={16} duration={0.6}>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-ink">
              Start a Project
            </span>
          </Reveal>
          <TextReveal
            as="h2"
            text="Have a similar project in mind?"
            className="mx-auto mt-4 max-w-2xl font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-ink sm:text-5xl"
          />
          <Reveal y={16} delay={0.25} className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-button)] px-7 py-3.5 text-sm font-semibold text-ink transition-colors duration-300 hover:bg-accent hover:text-bg"
            >
              Start a Project
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
