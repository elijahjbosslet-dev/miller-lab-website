// Horizontal ribbon-style double helix, matching the logo's twisting-ribbon
// mark: solid curved bands that pinch to nothing at each crossing (real
// negative space) and properly weave over/under each other, instead of a
// thin wireframe strand with cross rungs.
export default function HelixThread({ className = "" }: { className?: string }) {
  const width = 1000;
  const height = 200;
  const centerY = height / 2;
  const amplitude = height * 0.42;
  const maxHalfWidth = height * 0.15;
  const cycles = 4;
  const samples = 480;

  type Sample = { x: number; yA: number; yB: number; w: number; c: number };

  const data: Sample[] = [];
  for (let i = 0; i <= samples; i++) {
    const t = i / samples;
    const theta = t * cycles * Math.PI * 2;
    const x = t * width;
    const yA = centerY + amplitude * Math.sin(theta);
    const yB = centerY - amplitude * Math.sin(theta);
    const c = Math.cos(theta);
    const w = maxHalfWidth * Math.abs(c);
    data.push({ x, yA, yB, w, c });
  }

  const ribbonPath = (indices: number[], strand: "A" | "B") => {
    if (indices.length < 2) return "";
    const top = indices.map((i) => {
      const s = data[i];
      const y = strand === "A" ? s.yA : s.yB;
      return `${s.x.toFixed(1)},${(y - s.w).toFixed(1)}`;
    });
    const bottom = indices
      .slice()
      .reverse()
      .map((i) => {
        const s = data[i];
        const y = strand === "A" ? s.yA : s.yB;
        return `${s.x.toFixed(1)},${(y + s.w).toFixed(1)}`;
      });
    return `M${top.join(" L")} L${bottom.join(" L")} Z`;
  };

  // Split into segments wherever the front/back strand swaps (i.e. cos
  // changes sign) — that's exactly where the ribbon pinches to zero width.
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
      preserveAspectRatio="none"
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
