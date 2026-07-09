import { ReactNode } from "react";

// Offset double-frame: a border panel sits behind the main content, shifted
// down-right, so photos and bespoke art read as layered/lifted rather than
// flat rectangles pasted on the page.
export default function FramedPanel({
  children,
  className = "",
  frameClassName = "border-green-500",
}: {
  children: ReactNode;
  className?: string;
  frameClassName?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden="true"
        className={`absolute -bottom-3 -right-3 h-full w-full rounded-2xl border-2 ${frameClassName}`}
      />
      <div className="relative h-full w-full overflow-hidden rounded-2xl">{children}</div>
    </div>
  );
}
