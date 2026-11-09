"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { useSectionScrollFX } from "@/lib/motion/useSectionScrollFX";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { SERVICES } from "@/lib/content";
import { cn } from "@/lib/cn";

const ORBIT_DURATION = 32;
const ORBIT_RADIUS = "-20%";
// Every card is the same size and stays perfectly square to the frame — only
// its position orbits the shared center (counter-rotation keeps it upright).
const ORBIT_CARD_SIZE = "32%";

export function Services() {
  const { enabled } = useSectionScrollFX();
  const pinWrapRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useGSAP(
    () => {
      const cards = cardRefs.current.filter((c): c is HTMLDivElement => Boolean(c));
      if (cards.length === 0) return;

      if (!enabled) {
        gsap.set(cards, { clearProps: "all" });
        return;
      }

      const wrap = pinWrapRef.current;
      if (!wrap) return;

      gsap.set(cards[0], { opacity: 1, yPercent: 0 });
      for (let i = 1; i < cards.length; i++) {
        gsap.set(cards[i], { opacity: 0, yPercent: 12 });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrap,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      // Rhythm per card-to-card cycle: HOLD (card sits calm) -> TRANSITION (takeover
      // motion) -> SETTLE (brief tail before the new hold begins).
      const HOLD = 0;
      const TRANSITION = 4;
      const SETTLE = 1;

      // Card 1 gets its own dedicated hold before anything moves at all.
      tl.to({}, { duration: HOLD });

      for (let i = 1; i < cards.length; i++) {
        tl.to(
          cards[i],
          { opacity: 1, yPercent: 0, ease: "power2.out", duration: TRANSITION },
          `swap${i}`,
        )
          .to(
            cards[i - 1],
            { scale: 0.9, opacity: 0.45, filter: "blur(6px)", ease: "power2.out", duration: TRANSITION },
            `swap${i}`,
          )
          .to({}, { duration: SETTLE })
          .to({}, { duration: HOLD });
      }
    },
    { dependencies: [enabled], scope: pinWrapRef },
  );

  return (
    <section id="services" className="bg-bg pt-24 pb-24 md:pt-32 md:pb-32">
      <div className="mx-auto max-w-[100rem] px-4 md:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal y={16} duration={0.6}>
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-ink">
                What We Do
              </span>
            </Reveal>
            <TextReveal
              as="h2"
              text="A full-service toolkit for digital growth."
              className="mt-4 max-w-2xl font-display text-4xl font-bold leading-[0.95] tracking-tight text-ink sm:text-5xl md:[text-shadow:0_2px_3px_rgba(255,255,255,0.9)]"
            />
          </div>
          <Reveal y={16} delay={0.15} className="max-w-sm text-ink-muted md:[text-shadow:0_1px_2px_rgba(255,255,255,0.9)]">
            <p>
              Every engagement draws from the same toolkit — combined differently
              depending on what will actually move your business forward.
            </p>
          </Reveal>
        </div>

        <div
          ref={pinWrapRef}
          className="relative mt-10 md:mt-16"
          style={enabled ? { height: `${SERVICES.length * 80}vh` } : undefined}
        >
        <CardsWrap enabled={enabled}>
          {SERVICES.map((service, i) => (
            <div
              key={service.index}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              style={enabled ? { zIndex: i + 1 } : undefined}
              className={cn(
                enabled
                  ? "absolute inset-x-0 inset-y-10 flex flex-col overflow-hidden rounded-3xl border border-line bg-bg p-8 shadow-[0_30px_80px_-30px_rgba(26,26,46,0.25)] md:inset-y-16 md:flex-row md:items-stretch md:gap-12 md:p-14"
                  : "group relative flex flex-col overflow-hidden border border-line bg-bg",
              )}
            >
              {!enabled && (
                <div className="p-6 pb-0">
                  <div className="relative aspect-square w-full overflow-hidden rounded-tr-[3.5rem] bg-bg-soft">
                    <Image
                      src={service.images[0]}
                      alt={`${service.title} — illustration`}
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              )}

              <div className={cn(enabled ? "flex flex-1 flex-col md:py-6 lg:py-10" : "flex flex-1 flex-col p-6")}>
                <h3
                  className={cn(
                    "font-display tracking-tight text-ink",
                    enabled
                      ? "font-bold leading-[0.95] text-[clamp(2.25rem,4.5vw,4.75rem)]"
                      : "text-2xl font-bold leading-[1.05]",
                  )}
                >
                  {service.title}
                </h3>

                <div className={cn("flex flex-wrap gap-2.5", enabled ? "mt-8" : "mt-4")}>
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className={cn(
                        "rounded-full border border-line text-ink-muted",
                        enabled ? "px-4 py-1 text-sm" : "font-display px-3 py-1 text-xs",
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p
                  className={cn(
                    "leading-relaxed text-ink-muted",
                    enabled ? "mt-8 max-w-xl text-lg md:text-xl" : "font-display mt-4 text-sm",
                  )}
                >
                  {service.description}
                </p>

                <a
                  href="/contact"
                  className={cn(
                    "group/link inline-flex w-fit items-center gap-2 font-medium transition-colors duration-300",
                    enabled
                      ? "mt-10 rounded-full border border-[var(--color-button)] px-6 py-3 text-sm text-[var(--color-button)] hover:bg-[var(--color-button)] hover:text-bg"
                      : "font-display mt-6 rounded-full bg-ink px-5 py-2.5 text-sm text-bg hover:bg-primary-dark",
                  )}
                >
                  {enabled ? "Find out more" : "Start your project"}
                  <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                </a>
              </div>

              {enabled && (
                <div className="relative hidden w-full max-w-xl shrink-0 self-center md:block lg:max-w-2xl xl:max-w-3xl">
                  <div className="relative aspect-square w-full">
                    <div
                      className="absolute inset-x-0 rounded-tr-[46%] bg-black shadow-2xl"
                      style={{ top: "4%", bottom: "4%" }}
                    />
                    {service.images.map((image, slot) => {
                      const delay = -(slot * (ORBIT_DURATION / service.images.length));
                      return (
                        <div
                          key={image}
                          className="absolute inset-0"
                          style={{
                            animation: `orbit-spin ${ORBIT_DURATION}s linear infinite`,
                            animationDelay: `${delay}s`,
                          }}
                        >
                          <div
                            className="absolute inset-0 flex items-center justify-center"
                            style={{ transform: `translateY(${ORBIT_RADIUS})` }}
                          >
                            <div
                              style={{
                                width: ORBIT_CARD_SIZE,
                                height: ORBIT_CARD_SIZE,
                                animation: `orbit-counter-spin ${ORBIT_DURATION}s linear infinite`,
                                animationDelay: `${delay}s`,
                              }}
                            >
                              <div className="h-full w-full overflow-hidden rounded-lg shadow-xl">
                                <Image
                                  src={image}
                                  alt={slot === 0 ? `${service.title} — illustration` : ""}
                                  fill
                                  sizes="(min-width: 1280px) 340px, (min-width: 1024px) 280px, 220px"
                                  className="object-cover"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </CardsWrap>
        </div>
      </div>
    </section>
  );
}

function CardsWrap({ enabled, children }: { enabled: boolean; children: React.ReactNode }) {
  if (enabled) {
    return (
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">{children}</div>
    );
  }

  return (
    <Reveal y={20} className="mx-auto flex max-w-[100rem] flex-col gap-4 md:px-6">
      {children}
    </Reveal>
  );
}
