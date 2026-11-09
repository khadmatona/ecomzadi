"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { CSS_EASE } from "@/lib/motion/tokens";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full border-b border-ink/25 bg-transparent py-3 text-ink placeholder:text-ink-soft focus:border-primary focus:outline-none transition-colors duration-300";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const form = event.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok || !json.ok) {
        setStatus("error");
        setError(json.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: CSS_EASE.premium }}
        className="rounded-2xl border border-primary/30 bg-primary-light px-6 py-8"
      >
        <p className="font-display text-xl font-medium text-ink">Message sent.</p>
        <p className="mt-2 text-sm text-ink">
          Thanks for reaching out — we&apos;ll get back to you shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
      <div>
        <label htmlFor="name" className="text-xs font-medium uppercase tracking-[0.14em] text-ink">
          Name
        </label>
        <input id="name" name="name" type="text" required className={inputClasses} />
      </div>

      <div>
        <label htmlFor="email" className="text-xs font-medium uppercase tracking-[0.14em] text-ink">
          Email
        </label>
        <input id="email" name="email" type="email" required className={inputClasses} />
      </div>

      <div>
        <label htmlFor="message" className="text-xs font-medium uppercase tracking-[0.14em] text-ink">
          Message
        </label>
        <textarea id="message" name="message" required rows={4} className={inputClasses} />
      </div>

      {status === "error" && <p className="text-sm text-accent">{error}</p>}

      <motion.button
        type="submit"
        disabled={status === "submitting"}
        whileTap={{ scale: 0.97 }}
        className="mt-2 w-fit rounded-full bg-[var(--color-button)] px-7 py-3.5 text-sm font-semibold text-ink transition-colors duration-300 hover:bg-bg disabled:opacity-50"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </motion.button>
    </form>
  );
}
