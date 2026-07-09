// Decorative molecular/neural-network motif used behind the hero section.
// Pure SVG so it stays crisp at any size and needs no image asset.
export default function NetworkPattern({ className = "" }: { className?: string }) {
  const nodes = [
    [40, 60], [160, 30], [300, 80], [420, 40], [540, 100],
    [90, 160], [230, 190], [380, 170], [520, 200],
    [60, 280], [200, 300], [340, 270], [480, 300],
    [130, 380], [280, 400], [430, 370],
  ];

  const edges: [number, number][] = [
    [0, 1], [1, 2], [2, 3], [3, 4],
    [0, 5], [1, 5], [1, 6], [2, 6], [2, 7], [3, 7], [3, 8], [4, 8],
    [5, 6], [6, 7], [7, 8],
    [5, 9], [6, 10], [7, 11], [8, 12],
    [9, 10], [10, 11], [11, 12],
    [9, 13], [10, 13], [10, 14], [11, 14], [11, 15], [12, 15],
    [13, 14], [14, 15],
  ];

  return (
    <svg
      viewBox="0 0 600 440"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeOpacity="0.35" strokeWidth="1">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a][0]}
            y1={nodes[a][1]}
            x2={nodes[b][0]}
            y2={nodes[b][1]}
          />
        ))}
      </g>
      <g fill="currentColor">
        {nodes.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 4 : 2.5} fillOpacity="0.9" />
        ))}
      </g>
    </svg>
  );
}
