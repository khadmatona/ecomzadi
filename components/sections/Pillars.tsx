"use client";

import { Fragment } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { Stagger } from "@/components/motion/Stagger";
import { PILLARS } from "@/lib/content";

export function Pillars() {
  return (
    <section className="bg-transparent pt-20 pb-4 md:pt-28 md:pb-6">
      <div className="mx-auto max-w-[100rem] px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-start">
          <TextReveal
            as="h2"
            text="Strategy that's grounded, creative that performs, and growth that compounds."
            className="font-display text-3xl font-bold leading-[1.05] tracking-tight text-ink sm:text-4xl md:col-span-8 md:text-5xl"
          />
          <Reveal y={16} delay={0.25} className="md:col-span-4">
            <p className="text-base leading-relaxed text-ink md:mt-2">
              Every campaign starts with a clear read on where a brand stands —
              then a plan built to move the numbers that matter, one cycle at a
              time.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-16 flex flex-col gap-6 md:mt-24 md:flex-row md:items-stretch md:gap-0">
          {PILLARS.map((pillar, i) => (
            <Fragment key={pillar.index}>
              <div className="flex flex-1 items-stretch md:basis-0">
                <div className="flex w-full min-h-[19rem] flex-col rounded-3xl rounded-tr-[4rem] border border-line bg-bg/60 p-10 backdrop-blur-xl md:min-h-[22rem] md:p-12">
                  <span className="font-display text-sm font-medium uppercase tracking-[0.18em] text-ink">
                    {pillar.index} —
                  </span>
                  <h3 className="mt-8 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink">
                    {pillar.title}
                  </h3>
                  <p className="mt-5 text-base leading-relaxed text-ink">
                    {pillar.description}
                  </p>
                </div>
              </div>
              {i < PILLARS.length - 1 && (
                <div className="hidden shrink-0 items-center justify-center px-6 md:flex">
                  <span aria-hidden className="font-display text-4xl text-ink">
                    ×
                  </span>
                </div>
              )}
            </Fragment>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
