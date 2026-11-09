"use client";

import { useTheme } from "@/lib/useTheme";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-ink bg-bg/40 text-ink transition-colors duration-300"
    >
      {theme === "dark" ? (
        <svg aria-hidden viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
          <path
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77"
          />
        </svg>
      ) : (
        <svg aria-hidden viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
          />
        </svg>
      )}
    </button>
  );
}
