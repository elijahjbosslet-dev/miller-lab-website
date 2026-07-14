"use client";

// Light/dark mode switch — persists to localStorage("miller-theme"). The
// pre-paint script in layout.tsx owns [data-theme] on <html>; this only
// flips it on click. The label uses the dark: variant (scoped to
// [data-theme=dark] in globals.css) instead of React state, so there's
// no client/server value to reconcile and nothing to sync in an effect.
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
      className="inline-flex items-center gap-[7px] border-[color:var(--hair-strong)] border px-[11px] py-[6px] font-mono text-[10px] font-semibold tracking-[0.14em] text-ink-3 transition-colors hover:border-[color:var(--green-dim)] hover:text-green-text"
    >
      <span
        className="h-2 w-2 rounded-full bg-green shadow-[0_0_8px_var(--green)]"
        aria-hidden="true"
      />
      <span className="dark:hidden">LIGHT</span>
      <span className="hidden dark:inline">DARK</span>
    </button>
  );
}
