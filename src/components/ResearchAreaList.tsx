import IndexCard from "./IndexCard";
import type { researchAreas as researchAreasType } from "@/lib/content";

// Row of taped index cards — see SKILL.md "RESEARCH AREAS" pattern.
export default function ResearchAreaList({
  areas,
}: {
  areas: typeof researchAreasType;
}) {
  return (
    <div className="mt-8 flex flex-wrap gap-6">
      {areas.map((area, i) => (
        <IndexCard key={area.slug} index={i} title={area.title} className="w-[186px]">
          {area.blurb}
        </IndexCard>
      ))}
    </div>
  );
}
