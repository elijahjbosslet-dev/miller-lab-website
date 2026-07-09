// Bespoke "compute cluster" visualization — replaces a generic stock photo
// of a server room with a stylized grid of nodes, standing in for the lab's
// HPC infrastructure without pretending to be a real photo of it.

// Deterministic PRNG (mulberry32) so the pattern is stable across builds
// instead of reshuffling on every deploy.
function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function ComputeGrid({ className = "" }: { className?: string }) {
  const cols = 36;
  const rows = 14;
  const cell = 20;
  const gap = 6;
  const width = cols * cell;
  const height = rows * cell;
  const rand = mulberry32(42);

  const cells = Array.from({ length: cols * rows }, (_, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const r = rand();
    const active = r > 0.82;
    const bright = active && r > 0.94;
    return { col, row, active, bright };
  });

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      <rect x={0} y={0} width={width} height={height} className="fill-navy-950" />
      {cells.map(({ col, row, active, bright }, i) => (
        <rect
          key={i}
          x={col * cell + gap / 2}
          y={row * cell + gap / 2}
          width={cell - gap}
          height={cell - gap}
          rx={1.5}
          className={
            bright
              ? "fill-green-400"
              : active
                ? "fill-green-700"
                : "fill-white/10"
          }
        />
      ))}
    </svg>
  );
}
