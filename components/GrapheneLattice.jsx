/**
 * Animated graphitic-carbon (graphene) hex lattice used in the "Why Graphitic
 * Carbon" full-bleed section. The original page hard-coded a ~5k-char SVG path;
 * here the flat-top hexagon grid + pulsing nodes are generated procedurally,
 * which is equivalent and far easier to tweak (change R / spacing / density).
 */
const R = 40; // hex radius -> flat-top hexagon
const H = R * Math.sqrt(3); // vertical spacing (~69.3)
const COL = R * 1.5; // horizontal spacing (60)

function hexPath(cx, cy) {
  const dy = H / 2; // ~34.6
  return `M${cx + R},${cy} L${cx + R / 2},${cy + dy} L${cx - R / 2},${cy + dy} L${cx - R},${cy} L${cx - R / 2},${cy - dy} L${cx + R / 2},${cy - dy} Z`;
}

// deterministic pseudo-random so SSR/CSR match
function rand(seed) {
  const x = Math.sin(seed * 99.13) * 43758.5453;
  return x - Math.floor(x);
}

const hexes = [];
const nodes = [];
let seed = 1;
for (let c = 0; c <= 10; c++) {
  for (let row = -2; row <= 13; row++) {
    const cx = 30 + c * COL;
    const cy = row * H + (c % 2 ? H / 2 : 0);
    hexes.push(hexPath(cx, cy));
    if ((c + row) % 3 === 0) {
      seed++;
      nodes.push({
        cx,
        cy,
        fill: seed % 2 ? "#E4633A" : "#5F8F3E",
        dur: (2.7 + rand(seed) * 2.4).toFixed(1),
        delay: (rand(seed + 7) * 3.8).toFixed(1),
      });
    }
  }
}

export default function GrapheneLattice() {
  return (
    <div
      className="absolute inset-y-0 right-0 w-full md:w-[80%] lg:w-[68%] pointer-events-none overflow-hidden opacity-70 sm:opacity-100"
      style={{
        WebkitMaskImage: "linear-gradient(90deg,transparent,#000 20%,#000)",
        maskImage: "linear-gradient(90deg,transparent,#000 20%,#000)",
      }}
    >
      <svg
        className="absolute right-0 top-1/2 -translate-y-1/2 h-[130%] w-auto"
        viewBox="0 0 600 780"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        style={{ minWidth: "120%" }}
      >
        <g style={{ animation: "latticeShift 26s ease-in-out infinite" }}>
          <g fill="none" stroke="rgba(28,27,22,.09)" strokeWidth="1">
            {hexes.map((d, i) => (
              <path key={i} d={d} />
            ))}
          </g>
          <g>
            {nodes.map((n, i) => (
              <circle
                key={i}
                cx={n.cx}
                cy={n.cy}
                r="2.6"
                fill={n.fill}
                style={{
                  animation: `pulseNode ${n.dur}s ease-in-out ${n.delay}s infinite`,
                }}
              />
            ))}
          </g>
        </g>
      </svg>
      <div className="streak" style={{ left: "20%" }} />
    </div>
  );
}
