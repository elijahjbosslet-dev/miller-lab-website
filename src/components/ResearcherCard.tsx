import type { Researcher } from "@/lib/content";

const ROTATIONS = [-1.5, 1, -1, 1.5, -0.5];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

// Taped index card with the initials as a small circle stamp, per
// SKILL.md's ResearcherCard mapping.
export default function ResearcherCard({
  researcher,
  index = 0,
}: {
  researcher: Researcher;
  index?: number;
}) {
  const rotate = ROTATIONS[index % ROTATIONS.length];
  return (
    <div
      className="relative h-full border-[2.5px] border-ink bg-card p-4"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div
        aria-hidden="true"
        className="absolute -top-2 left-1/2 h-3 w-9 -translate-x-1/2 bg-green-600/85"
      />
      <div className="section-index flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink text-[11px] text-ink">
        {initials(researcher.name)}
      </div>
      <p className="mt-3 font-sans text-[15px] font-bold text-ink">
        {researcher.name}
        {researcher.credentials ? `, ${researcher.credentials}` : ""}
      </p>
      <p className="section-index mt-0.5 text-xs text-ink-faint">{researcher.program}</p>
      {researcher.focus && (
        <p className="mt-2 text-[12.5px] leading-[1.55] text-ink-mute">{researcher.focus}</p>
      )}
    </div>
  );
}
