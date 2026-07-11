import type { researchAreas as researchAreasType } from "@/lib/content";

// Fields-of-inquiry matrix — five equal columns divided by hairlines, each
// a field code + serif title + mono description. No ordinal numbers: these
// are parallel programs, not a sequence. See
// .claude/skills/miller-instrument-theme/SKILL.md "Fields-of-inquiry matrix".
const FIELD_CODES: Record<string, string> = {
  "artificial-intelligence": "AI",
  "molecular-simulation": "SIM",
  "computational-biophysics": "BPX",
  "drug-discovery": "DRG",
  bioinformatics: "BIO",
};

export default function ResearchAreaList({
  areas,
}: {
  areas: typeof researchAreasType;
}) {
  return (
    <div className="grid border-t-[color:var(--hair-strong)] border-t sm:grid-cols-2 lg:grid-cols-5">
      {areas.map((area) => (
        <div
          key={area.slug}
          className="border-b-[color:var(--hair-faint)] border-b px-1 py-5 transition-colors last:border-b-0 hover:bg-[color:var(--panel)] lg:border-b-0 lg:border-r-[color:var(--hair-faint)] lg:border-r lg:px-[18px] lg:py-6 lg:last:border-r-0"
        >
          <p className="tag">
            <span className="dot mr-1.5 inline-block" aria-hidden="true" />
            {FIELD_CODES[area.slug] ?? "—"}
          </p>
          <h3 className="font-serif mt-3 text-[19px] leading-[1.1] text-ink-bright">
            {area.title}
          </h3>
          <p className="mt-2 text-[11.5px] leading-[1.6] text-ink-2">{area.blurb}</p>
        </div>
      ))}
    </div>
  );
}
