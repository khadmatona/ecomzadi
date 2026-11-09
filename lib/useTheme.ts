"use client";

import { useCallback, useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "ecomzadi-theme";
const THEME_CHANGE_EVENT = "ecomzadi:theme-change";

function readTheme(): Theme {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

export function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // localStorage unavailable (private browsing, etc.) — theme just won't persist.
  }
  window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
}

export function useTheme() {
  const subscribe = useCallback((callback: () => void) => {
    window.addEventListener(THEME_CHANGE_EVENT, callback);
    return () => window.removeEventListener(THEME_CHANGE_EVENT, callback);
  }, []);

  const getSnapshot = useCallback(() => readTheme(), []);
  const getServerSnapshot = useCallback((): Theme => "light", []);

  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = useCallback(() => {
    applyTheme(theme === "dark" ? "light" : "dark");
  }, [theme]);

  return { theme, toggle, setTheme: applyTheme };
}
