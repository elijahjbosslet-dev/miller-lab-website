// Vertical ribbon-style double helix — same twisting-ribbon technique as
// HelixThread, oriented top-to-bottom for use as standalone art (e.g. the
// About page's molecular panel) rather than threaded behind a headline.
export default function HelixRibbon({ className = "" }: { className?: string }) {
  const width = 400;
  const height = 520;
  const centerX = width / 2;
  const amplitude = width * 0.34;
  const maxHalfWidth = width * 0.14;
  const cycles = 3.25;
  const samples = 480;

  type Sample = { y: number; xA: number; xB: number; w: number; c: number };

  const data: Sample[] = [];
  for (let i = 0; i <= samples; i++) {
    const t = i / samples;
    const theta = t * cycles * Math.PI * 2;
    const y = t * height;
    const xA = centerX + amplitude * Math.sin(theta);
    const xB = centerX - amplitude * Math.sin(theta);
    const c = Math.cos(theta);
    const w = maxHalfWidth * Math.abs(c);
    data.push({ y, xA, xB, w, c });
  }

  const ribbonPath = (indices: number[], strand: "A" | "B") => {
    if (indices.length < 2) return "";
    const left = indices.map((i) => {
      const s = data[i];
      const x = strand === "A" ? s.xA : s.xB;
      return `${(x - s.w).toFixed(1)},${s.y.toFixed(1)}`;
    });
    const right = indices
      .slice()
      .reverse()
      .map((i) => {
        const s = data[i];
        const x = strand === "A" ? s.xA : s.xB;
        return `${(x + s.w).toFixed(1)},${s.y.toFixed(1)}`;
      });
    return `M${left.join(" L")} L${right.join(" L")} Z`;
  };

  const segments: number[][] = [];
  let current: number[] = [0];
  for (let i = 1; i < data.length; i++) {
    const prevSign = Math.sign(data[i - 1].c) || 1;
    const sign = Math.sign(data[i].c) || 1;
    if (sign !== prevSign) {
      current.push(i);
      segments.push(current);
      current = [i];
    } else {
      current.push(i);
    }
  }
  segments.push(current);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid meet"
      className={className}
      aria-hidden="true"
    >
      {segments.map((seg, i) => {
        const front = data[seg[Math.floor(seg.length / 2)]].c >= 0 ? "A" : "B";
        const back = front === "A" ? "B" : "A";
        return (
          <g key={i}>
            <path d={ribbonPath(seg, back)} fill="currentColor" fillOpacity="0.35" />
            <path d={ribbonPath(seg, front)} fill="currentColor" fillOpacity="0.85" />
          </g>
        );
      })}
    </svg>
  );
}
