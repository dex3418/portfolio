// Loose, hand-placed circuit traces (not a tiled pattern). Dense in two corners, sparse elsewhere.
// A short bright pulse of "current" runs along each trace at its own speed.
const TRACES = [
  "M1200 60 H1040 L1000 100 V180 L960 220 H820",
  "M1200 140 H1110 L1080 170 V260 H930 L900 290",
  "M1200 240 H1150 L1120 270 V330",
  "M980 0 V40 L940 80 H860",
  "M1100 0 V50 L1140 90 H1200",
  "M880 220 V300 L850 330 H760",
  "M0 200 H90 L120 230 V300",
  "M0 620 H60 L90 650 V690",
  "M0 700 H110 L150 740 V820 L190 860 H320",
  "M0 790 H70 L100 820 V900",
  "M200 900 V850 L240 810 H380 L410 780",
  "M300 860 H420 L450 830 H540",
  "M1200 760 H1130 L1100 790 V860 H1020",
]
const NODES = [[820,220],[900,290],[1120,330],[860,80],[760,330],[120,300],[90,690],[320,860],[410,780],[540,830],[100,900],[1020,860],[1000,100],[1080,170]]

const pulseColor = (i) => (i % 4 === 1 ? "var(--vouchr-green)" : i % 6 === 2 ? "var(--vouchr-magenta)" : "var(--cyan)")

export default function Background() {
  return (
    <div className="bg" aria-hidden="true">
      <div className="bg__glow" />
      <svg className="bg__traces" viewBox="0 0 1200 900" preserveAspectRatio="xMidYMid slice">
        <g className="bg__base" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round">
          {TRACES.map((d) => <path key={d} d={d} />)}
        </g>
        <g className="bg__base" fill="var(--bg-deep)" stroke="currentColor" strokeWidth="1.2">
          {NODES.map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="3.5" />)}
        </g>
        <g fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {TRACES.map((d, i) => (
            <path
              key={d}
              d={d}
              pathLength="100"
              className="bg__pulse"
              stroke={pulseColor(i)}
              style={{ animationDuration: `${5 + ((i * 1.7) % 5)}s`, animationDelay: `-${(i * 2.3) % 7}s` }}
            />
          ))}
        </g>
      </svg>
    </div>
  )
}
