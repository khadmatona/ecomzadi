"use client";

import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { ContactForm } from "@/components/ui/ContactForm";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-bg pt-28 pb-24 md:pt-32 md:pb-32"
    >
      <div className="relative mx-auto grid max-w-[100rem] grid-cols-1 gap-16 px-4 md:grid-cols-2 md:px-6">
        <div>
          <Reveal y={16} duration={0.6}>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-ink">
              Get In Touch
            </span>
          </Reveal>
          <TextReveal
            as="h2"
            text="Let's build your next campaign."
            className="mt-4 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-ink sm:text-5xl"
          />
          <Reveal y={16} delay={0.15} className="mt-6 max-w-md text-ink">
            <p>
              Tell us a little about your project and we&apos;ll get back to you.
              Prefer to talk directly? Reach us using the details in the footer.
            </p>
          </Reveal>
        </div>

        <Reveal y={24} delay={0.1} duration={0.7}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
