import { ReactNode } from "react";

// Taped index card — see SKILL.md "Index card" recipe. Used for research
// areas and team members. `index` alternates rotation the same way the
// approved reference does.
const ROTATIONS = [-1.5, 1, -1, 1.5, -0.5];

export default function IndexCard({
  index,
  title,
  children,
  className = "",
}: {
  index: number;
  title: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  const rotate = ROTATIONS[index % ROTATIONS.length];
  return (
    <div
      className={`relative border-[2.5px] border-ink bg-card px-4 pb-4 pt-[18px] ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div
        aria-hidden="true"
        className="absolute -top-2 left-1/2 h-3 w-9 -translate-x-1/2 bg-green-600/85"
      />
      <p className="section-index text-[11px] text-ink-faint">
        {String(index + 1).padStart(2, "0")}
      </p>
      <p className="mt-1.5 font-sans text-[15px] font-bold text-ink">{title}</p>
      {children && (
        <div className="mt-[7px] text-[12.5px] leading-[1.55] text-ink-mute">{children}</div>
      )}
    </div>
  );
}
