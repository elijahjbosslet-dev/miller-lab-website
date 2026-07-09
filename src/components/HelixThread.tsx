// Horizontal double-helix line art sized to run behind/through a headline,
// echoing the logo's helix-across-the-wordmark composition instead of
// sitting off to the side as pure decoration.
export default function HelixThread({ className = "" }: { className?: string }) {
  const width = 1000;
  const height = 200;
  const amplitude = 62;
  const centerY = height / 2;
  const cycles = 4;
  const samples = 160;

  const strand = (phase: number) => {
    const points: [number, number][] = [];
    for (let i = 0; i <= samples; i++) {
      const t = i / samples;
      const x = t * width;
      const y = centerY + amplitude * Math.sin(t * cycles * Math.PI * 2 + phase);
      points.push([x, y]);
    }
    return points;
  };

  const strandA = strand(0);
  const strandB = strand(Math.PI);

  const toPath = (points: [number, number][]) =>
    points.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");

  const rungCount = 26;
  const rungs = Array.from({ length: rungCount }, (_, i) => {
    const idx = Math.round((i / (rungCount - 1)) * samples);
    return [strandA[idx], strandB[idx]] as const;
  });

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="4" fill="none">
        <path d={toPath(strandA)} />
        <path d={toPath(strandB)} />
      </g>
      <g stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.55">
        {rungs.map(([a, b], i) => (
          <line key={i} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} />
        ))}
      </g>
    </svg>
  );
}
