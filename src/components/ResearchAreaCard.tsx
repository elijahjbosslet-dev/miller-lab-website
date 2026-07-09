import { iconMap } from "./icon-map";
import type { researchAreas } from "@/lib/content";

export default function ResearchAreaCard({
  area,
}: {
  area: (typeof researchAreas)[number];
}) {
  const Icon = iconMap[area.icon];

  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-green-200 hover:shadow-lg hover:shadow-slate-200/60">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-green-400 transition-colors group-hover:bg-green-500 group-hover:text-white">
        {Icon && <Icon size={22} strokeWidth={1.75} />}
      </div>
      <h3 className="mt-4 text-base font-semibold text-slate-900">{area.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{area.blurb}</p>
    </div>
  );
}
