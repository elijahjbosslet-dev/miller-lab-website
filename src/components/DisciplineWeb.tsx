import { iconMap } from "./icon-map";
import type { researchAreas as researchAreasType } from "@/lib/content";

// Places N nodes evenly around a circle in a 0-100 coordinate space,
// starting from the top and going clockwise.
function nodePosition(index: number, total: number, radius: number) {
  const angle = (-90 + index * (360 / total)) * (Math.PI / 180);
  return {
    x: 50 + radius * Math.cos(angle),
    y: 50 + radius * Math.sin(angle),
  };
}

export default function DisciplineWeb({
  areas,
}: {
  areas: typeof researchAreasType;
}) {
  const radius = 38;
  const positions = areas.map((_, i) => nodePosition(i, areas.length, radius));

  return (
    <div className="relative mx-auto aspect-square w-full max-w-xl">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        <g stroke="currentColor" className="text-green-300" strokeWidth="0.4">
          {/* hub spokes */}
          {positions.map((p, i) => (
            <line key={`spoke-${i}`} x1="50" y1="50" x2={p.x} y2={p.y} />
          ))}
          {/* ring connecting each discipline to the next */}
          {positions.map((p, i) => {
            const next = positions[(i + 1) % positions.length];
            return <line key={`ring-${i}`} x1={p.x} y1={p.y} x2={next.x} y2={next.y} />;
          })}
        </g>
      </svg>

      {/* Hub */}
      <div
        className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-navy-900 text-center shadow-lg"
        style={{ left: "50%", top: "50%", width: "22%", height: "22%" }}
      >
        <span className="px-1 text-[0.55rem] font-semibold uppercase leading-tight tracking-wide text-green-400 sm:text-[0.65rem]">
          Data to Insight
        </span>
      </div>

      {/* Discipline nodes */}
      {areas.map((area, i) => {
        const Icon = iconMap[area.icon];
        const p = positions[i];
        return (
          <div
            key={area.slug}
            className="absolute flex w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 text-center sm:w-28"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-green-600 shadow-md ring-1 ring-slate-200 sm:h-12 sm:w-12">
              {Icon && <Icon size={20} strokeWidth={1.75} />}
            </div>
            <span className="font-display text-xs font-semibold leading-tight text-slate-900 sm:text-sm">
              {area.title}
            </span>
          </div>
        );
      })}
    </div>
  );
}
