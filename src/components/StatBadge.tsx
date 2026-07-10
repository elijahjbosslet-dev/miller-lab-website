// Static stat badge (no count-up) — see SKILL.md "Stat badge" recipe.
// `index` alternates rotation direction and picks a radius variant so a
// row of these reads as hand-placed rather than a repeated component.
const RADII = ["44% 56% 52% 48%", "50% 50% 46% 54%", "48% 52% 44% 56%"];

export default function StatBadge({
  value,
  label,
  index = 0,
}: {
  value: string;
  label: string;
  index?: number;
}) {
  const rotate = index % 2 === 0 ? 2 : -2;
  return (
    <div
      className="hard-shadow-sm inline-flex flex-col items-center border-[2.5px] border-ink bg-card px-6 py-4"
      style={{ transform: `rotate(${rotate}deg)`, borderRadius: RADII[index % RADII.length] }}
    >
      <p className="font-display text-[30px] text-ink">{value}</p>
      <p className="section-index mt-1 text-[11px] uppercase tracking-[0.05em] text-ink-mute">
        {label}
      </p>
    </div>
  );
}
