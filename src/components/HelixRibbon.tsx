// Bespoke double-helix line art — replaces the generic "AI-startup" dot and
// line network graphic with something that specifically reads as molecular
// biology, tying the decorative graphic to what the lab actually does.
export default function HelixRibbon({ className = "" }: { className?: string }) {
  const width = 400;
  const height = 520;
  const amplitude = 92;
  const centerX = width / 2;
  const turns = 3.25;
  const samples = 90;

  const strand = (phase: number) => {
    const points: [number, number][] = [];
    for (let i = 0; i <= samples; i++) {
      const t = i / samples;
      const y = t * height;
      const x = centerX + amplitude * Math.sin(t * turns * Math.PI * 2 + phase);
      points.push([x, y]);
    }
    return points;
  };

  const strandA = strand(0);
  const strandB = strand(Math.PI);

  const toPath = (points: [number, number][]) =>
    points.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");

  const rungCount = 16;
  const rungs = Array.from({ length: rungCount }, (_, i) => {
    const idx = Math.round((i / (rungCount - 1)) * samples);
    return [strandA[idx], strandB[idx]] as const;
  });

  const nodeEvery = 6;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid meet"
      className={className}
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.4" fill="none">
        <path d={toPath(strandA)} />
        <path d={toPath(strandB)} />
      </g>
      <g stroke="currentColor" strokeOpacity="0.22" strokeWidth="1">
        {rungs.map(([a, b], i) => (
          <line key={i} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} />
        ))}
      </g>
      <g fill="currentColor">
        {strandA
          .filter((_, i) => i % nodeEvery === 0)
          .map(([x, y], i) => (
            <circle key={`a-${i}`} cx={x} cy={y} r={i % 2 === 0 ? 3.2 : 2} fillOpacity="0.9" />
          ))}
        {strandB
          .filter((_, i) => i % nodeEvery === 0)
          .map(([x, y], i) => (
            <circle key={`b-${i}`} cx={x} cy={y} r={i % 2 === 0 ? 3.2 : 2} fillOpacity="0.9" />
          ))}
      </g>
    </svg>
  );
}
