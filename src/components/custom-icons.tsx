// Bespoke line-icon set for the five research areas, replacing generic
// icon-library glyphs (which read as "every AI startup's icon set") with
// marks drawn specifically for what each discipline actually does.

type IconProps = { size?: number; strokeWidth?: number; className?: string };

const base = { fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export function AIIcon({ size = 22, strokeWidth = 1.6, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base} stroke="currentColor" strokeWidth={strokeWidth}>
      <circle cx="12" cy="6" r="2.2" />
      <circle cx="5.5" cy="16" r="2.2" />
      <circle cx="18.5" cy="16" r="2.2" />
      <circle cx="12" cy="14.5" r="1.4" />
      <path d="M12 8.2v4.5M10.9 15.3 7 16M13.1 15.3 17 16" />
    </svg>
  );
}

export function MolecularIcon({ size = 22, strokeWidth = 1.6, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base} stroke="currentColor" strokeWidth={strokeWidth}>
      <circle cx="6" cy="7" r="2.1" />
      <circle cx="18" cy="7" r="2.1" />
      <circle cx="12" cy="17" r="2.4" />
      <path d="M7.8 8.3 10.3 15M16.2 8.3 13.7 15M8.1 7h7.8" />
    </svg>
  );
}

export function BiophysicsIcon({ size = 22, strokeWidth = 1.6, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base} stroke="currentColor" strokeWidth={strokeWidth}>
      <path d="M3 6c2.5 0 2.5 4 5 4s2.5-4 5-4 2.5 4 5 4" />
      <path d="M3 14c2.5 0 2.5 4 5 4s2.5-4 5-4 2.5 4 5 4" />
    </svg>
  );
}

export function DrugDiscoveryIcon({ size = 22, strokeWidth = 1.6, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base} stroke="currentColor" strokeWidth={strokeWidth}>
      <rect x="4" y="9" width="16" height="7.5" rx="3.75" transform="rotate(-35 12 12.75)" />
      <path d="M9.5 9.8 14.5 15.7" />
    </svg>
  );
}

export function BioinformaticsIcon({ size = 22, strokeWidth = 1.6, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base} stroke="currentColor" strokeWidth={strokeWidth}>
      <path d="M4 17V11M8.5 17V7M13 17V13M17.5 17V5" />
      <path d="M4 17h13.5" strokeOpacity="0.35" />
    </svg>
  );
}
