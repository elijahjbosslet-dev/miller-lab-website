import { iconMap } from "./icon-map";
import CircleStamp from "./CircleStamp";
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

// Trims a segment back from each endpoint along its own direction, so lines
// stop at the edge of a node's circle instead of running into its center.
function trim(
  p1: { x: number; y: number },
  p2: { x: number; y: number },
  startGap: number,
  endGap: number,
) {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  return {
    x1: p1.x + ux * startGap,
    y1: p1.y + uy * startGap,
    x2: p2.x - ux * endGap,
    y2: p2.y - uy * endGap,
  };
}

const NODE_RADIUS = 4.4;
const HUB_RADIUS = 4;
const ARROW_LENGTH = 2.6;

export default function DisciplineWeb({
  areas,
}: {
  areas: typeof researchAreasType;
}) {
  const radius = 38;
  const center = { x: 50, y: 50 };
  const positions = areas.map((_, i) => nodePosition(i, areas.length, radius));

  return (
    <div className="relative mx-auto aspect-square w-full max-w-xl">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        <defs>
          <marker
            id="disc-web-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="4.5"
            markerHeight="4.5"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 z" fill="#161613" />
          </marker>
        </defs>

        {/* faint spokes: every discipline feeds the central synthesis */}
        <g stroke="#8a857a" strokeWidth="0.4" strokeDasharray="1.6 1.6">
          {positions.map((p, i) => {
            const seg = trim(p, center, NODE_RADIUS, HUB_RADIUS);
            return <line key={`spoke-${i}`} x1={seg.x1} y1={seg.y1} x2={seg.x2} y2={seg.y2} />;
          })}
        </g>

        {/* solid arrows: each discipline feeds the next, looping back around */}
        <g stroke="#161613" strokeWidth="0.7" fill="none">
          {positions.map((p, i) => {
            const next = positions[(i + 1) % positions.length];
            const seg = trim(p, next, NODE_RADIUS, NODE_RADIUS + ARROW_LENGTH);
            return (
              <line
                key={`flow-${i}`}
                x1={seg.x1}
                y1={seg.y1}
                x2={seg.x2}
                y2={seg.y2}
                markerEnd="url(#disc-web-arrow)"
              />
            );
          })}
        </g>
      </svg>

      {/* Hub */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left: "50%", top: "50%" }}
      >
        <CircleStamp lines={["Data", "to", "Insight"]} rotate={9} className="h-[86px] w-[86px]" />
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
            <div className="relative flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-card text-green-700 sm:h-12 sm:w-12">
              {Icon && <Icon size={20} strokeWidth={1.75} />}
              <span className="section-index absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full border border-ink bg-paper text-[8px] text-ink-mute">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <span className="font-sans text-xs font-bold leading-tight text-ink sm:text-sm">
              {area.title}
            </span>
          </div>
        );
      })}
    </div>
  );
}
