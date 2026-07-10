// Rubber-stamp circle — see SKILL.md "Circle stamp" recipe. Use at most
// once per page, overlapping a corner of a hero or photo.
export default function CircleStamp({
  lines,
  className = "",
  rotate = 8,
}: {
  lines: string[];
  className?: string;
  rotate?: number;
}) {
  return (
    <div
      className={`flex h-[105px] w-[105px] shrink-0 items-center justify-center rounded-full border-[2.5px] border-ink bg-paper text-center ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <p className="section-index px-2 text-[11px] uppercase leading-[1.5] text-ink">
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </p>
    </div>
  );
}
