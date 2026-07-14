"use client";

import { Sun, Moon } from "@phosphor-icons/react/dist/ssr";

// Light/dark mode switch — persists to localStorage("miller-theme"). The
// pre-paint script in layout.tsx owns [data-theme] on <html>; this only
// flips it on click. Visual state (which icon glows, which way the
// paddle rocks) is driven by plain [data-theme="dark"] CSS selectors in
// globals.css (see .rocker), not React state — nothing to sync.
export default function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("miller-theme", next);
  }

  return (
    <button type="button" onClick={toggle} aria-label="Toggle light / dark mode" className="rocker">
      <span className="rocker-paddle">
        <Sun size={13} weight="fill" className="rocker-icon-sun" aria-hidden="true" />
        <Moon size={13} weight="fill" className="rocker-icon-moon" aria-hidden="true" />
      </span>
    </button>
  );
}
