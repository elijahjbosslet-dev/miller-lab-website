// Top status strip — sets the instrument tone on every page. See
// .claude/skills/miller-instrument-theme/SKILL.md "Status ribbon" recipe.
export default function StatusRibbon() {
  return (
    <div className="rule flex items-center justify-between gap-4 overflow-x-auto px-6 py-[11px] text-[10px] tracking-[0.18em] text-ink-3 lg:px-[34px]">
      <span className="flex shrink-0 items-center gap-2">
        <span className="live-dot" aria-hidden="true" />
        SYSTEM ONLINE
      </span>
      <span className="hidden shrink-0 sm:inline">41.9948&deg;N &middot; 87.6556&deg;W</span>
      <span className="hidden shrink-0 md:inline">COMPUTATIONAL&nbsp;BIOMEDICINE</span>
      <span className="shrink-0 text-ink-2">LOYOLA UNIVERSITY CHICAGO</span>
    </div>
  );
}
