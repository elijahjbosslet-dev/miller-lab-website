"use client";

import { Sun, Moon } from "@phosphor-icons/react/dist/ssr";

// Light/dark mode switch — persists to localStorage("miller-theme"). The
// pre-paint script in layout.tsx owns [data-theme] on <html>; this only
// flips it on click. State (icon color, thumb position) is driven purely
// by the dark: variant (scoped to [data-theme=dark] in globals.css), not
// React state, so there's no client/server value to reconcile.
//
// Built as a physical rocker switch — flanking sun/moon icons, a
// recessed track, a raised thumb with real depth — because a plain
// text button read as just another nav link and got missed.
export default function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("miller-theme", next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light / dark mode"
      className="group inline-flex items-center gap-2"
    >
      <Sun
        size={14}
        weight="bold"
        className="text-green-text transition-colors dark:text-ink-4"
        aria-hidden="true"
      />
      <span className="relative inline-flex h-6 w-11 shrink-0 items-center border-[color:var(--hair-strong)] border bg-[color:var(--field-hover)] p-[3px] shadow-[inset_0_1px_2px_rgba(0,0,0,.18)] transition-colors group-hover:border-[color:var(--green-dim)]">
        <span
          className="h-[18px] w-[18px] bg-[linear-gradient(180deg,#6fd83f,var(--green))] shadow-[0_1px_2px_rgba(0,0,0,.45)] transition-transform duration-200 ease-out dark:translate-x-5"
          aria-hidden="true"
        />
      </span>
      <Moon
        size={14}
        weight="bold"
        className="text-ink-4 transition-colors dark:text-green-text"
        aria-hidden="true"
      />
    </button>
  );
}
