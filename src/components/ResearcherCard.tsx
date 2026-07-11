import type { Researcher } from "@/lib/content";

// Roster row — name + program/role, with focus areas and a scholar link on
// a second line when present. See
// .claude/skills/miller-instrument-theme/SKILL.md "roster-row".
export default function ResearcherCard({
  researcher,
  role,
}: {
  researcher: Researcher;
  role: string;
}) {
  return (
    <div className="roster-row flex flex-col items-stretch gap-1.5">
      <div className="flex items-baseline justify-between gap-4">
        <span className="font-mono text-[13px] text-ink-bright">
          {researcher.name}
          {researcher.credentials ? `, ${researcher.credentials}` : ""}
        </span>
        <span className="label shrink-0">{role}</span>
      </div>
      {(researcher.focus || researcher.scholarUrl) && (
        <div className="flex flex-wrap items-baseline gap-3 text-[11.5px] text-ink-2">
          {researcher.focus && <span>{researcher.focus}</span>}
          {researcher.scholarUrl && (
            <a
              href={researcher.scholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 border-b border-green pb-px font-mono text-[10.5px] uppercase tracking-[0.08em] text-green transition-colors hover:text-green-bright"
            >
              Google Scholar
            </a>
          )}
        </div>
      )}
    </div>
  );
}
