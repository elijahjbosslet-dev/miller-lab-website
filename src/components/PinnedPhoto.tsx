import Image from "next/image";

// Instrument-framed photo — hairline panel with green corner brackets. See
// .claude/skills/miller-instrument-theme/SKILL.md "Instrument readout
// panel". `caption` is a mono field label ("FIG // ..."); omit `src` for
// the honest placeholder used where we don't have photography yet.
export default function PinnedPhoto({
  src,
  alt,
  caption,
  className = "",
}: {
  src?: string;
  alt?: string;
  caption?: string;
  className?: string;
}) {
  return (
    <div className={`panel w-full max-w-[380px] p-4 ${className}`}>
      <span className="panel-bracket tl" aria-hidden="true" />
      <span className="panel-bracket br" aria-hidden="true" />
      {caption && (
        <p className="tag mb-3">
          <span className="dot mr-1.5 inline-block" aria-hidden="true" />
          {caption}
        </p>
      )}
      <div className="relative h-[240px] w-full overflow-hidden border-[color:var(--hair)] border sm:h-[270px]">
        {src ? (
          <Image src={src} alt={alt ?? ""} fill className="object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-graphite-2 font-mono text-xs text-ink-3">
            [ lab photo ]
          </div>
        )}
      </div>
    </div>
  );
}
