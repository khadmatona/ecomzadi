"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { NAV_LINKS, SITE } from "@/lib/content";
import { CSS_EASE } from "@/lib/motion/tokens";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/cn";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        open
          ? "bg-bg shadow-[0_1px_0_0_var(--color-line)]"
          : scrolled
            ? "bg-bg/90 backdrop-blur-md shadow-[0_1px_0_0_var(--color-line)]"
            : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-18 max-w-[100rem] items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center">
          <Logo priority className="h-7 sm:h-8" />
        </Link>

        <div className="flex items-center gap-3 md:gap-4">
          <a
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-[var(--color-button)] px-5 py-2.5 text-sm font-semibold text-ink transition-colors duration-300 hover:bg-accent hover:text-bg sm:inline-flex"
          >
            Start a Project
            <span aria-hidden>→</span>
          </a>

          <ThemeToggle />

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-10 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-ink bg-bg/40 transition-colors duration-300"
          >
            <span
              className={cn(
                "block h-px w-5 bg-ink transition-all duration-300",
                open && "translate-y-[3.5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-px w-5 bg-ink transition-all duration-300",
                open && "-translate-y-[3.5px] -rotate-45",
              )}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: CSS_EASE.premium }}
            className="fixed inset-x-0 top-18 bottom-0 z-40 flex flex-col justify-between bg-bg px-6 py-10 md:px-16 md:py-16"
          >
            <ul className="flex flex-1 flex-col justify-center gap-1 md:gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.05 * i, ease: CSS_EASE.premium }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between border-b border-line py-4 font-display text-4xl font-bold text-ink transition-colors duration-300 hover:text-primary-dark sm:text-6xl md:text-7xl"
                  >
                    {link.label}
                    <span className="text-lg text-ink-soft opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:text-2xl">
                      →
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col gap-4 pt-8 text-sm text-ink sm:flex-row sm:items-center sm:justify-between">
              <a href={`mailto:${SITE.email}`} className="hover:text-primary-dark">
                {SITE.email}
              </a>
              <a href={SITE.phoneHref} className="hover:text-primary-dark">
                {SITE.phoneDisplay}
              </a>
              <span>{SITE.addressLine}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
