import Image from "next/image";

// Taped polaroid — see SKILL.md "Pinned photo" recipe. Pass `src` for a
// real photo, or omit it for the honest striped placeholder the approved
// reference uses where we don't have real lab photography yet. No caption
// text: just the blank polaroid margin.
export default function PinnedPhoto({
  src,
  alt,
  rotate = -2,
  className = "",
}: {
  src?: string;
  alt?: string;
  rotate?: number;
  className?: string;
}) {
  return (
    <div
      className={`photo-shadow relative w-full max-w-[340px] bg-card px-3.5 pb-6 pt-3.5 ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div
        aria-hidden="true"
        className="absolute -top-3 left-1/2 h-[26px] w-[90px] -translate-x-1/2 bg-green-600/50"
        style={{ transform: "rotate(-3deg)" }}
      />
      <div className="relative h-[220px] w-full overflow-hidden sm:h-[250px]">
        {src ? (
          <Image src={src} alt={alt ?? ""} fill className="object-cover" />
        ) : (
          <div
            className="section-index flex h-full w-full items-center justify-center text-xs text-ink-mute"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #d8d4c8, #d8d4c8 10px, #e4e0d4 10px, #e4e0d4 20px)",
            }}
          >
            [ lab photo ]
          </div>
        )}
      </div>
    </div>
  );
}
