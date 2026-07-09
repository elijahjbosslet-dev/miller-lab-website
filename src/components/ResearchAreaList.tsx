import { iconMap } from "./icon-map";
import type { researchAreas as researchAreasType } from "@/lib/content";

// Editorial numbered index instead of an icon-card grid — reads as a table
// of contents for the lab's work rather than a generic SaaS feature grid.
export default function ResearchAreaList({
  areas,
}: {
  areas: typeof researchAreasType;
}) {
  return (
    <div className="mt-4 border-b border-slate-200">
      {areas.map((area, i) => {
        const Icon = iconMap[area.icon];
        return (
          <div
            key={area.slug}
            className="grid gap-3 border-t border-slate-200 py-7 sm:grid-cols-12 sm:items-center sm:gap-6"
          >
            <span className="section-index text-sm text-slate-400 sm:col-span-1">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-900 text-green-400 sm:col-span-1">
              {Icon && <Icon size={18} strokeWidth={1.75} />}
            </div>
            <h3 className="font-display text-xl font-semibold text-slate-900 sm:col-span-3">
              {area.title}
            </h3>
            <p className="text-sm leading-6 text-slate-600 sm:col-span-7">{area.blurb}</p>
          </div>
        );
      })}
    </div>
  );
}
