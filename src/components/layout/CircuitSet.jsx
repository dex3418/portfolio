// One set of loose circuit traces plus a travelling pulse of green "current" on each.
// Speeds are mixed: a third fast, a third medium, a third slow.
function speed(i) {
  if (i % 3 === 0) return (2 + ((i * 0.37) % 1.4)).toFixed(1)
  if (i % 3 === 1) return (5 + ((i * 0.9) % 2.5)).toFixed(1)
  return (11 + ((i * 1.3) % 5)).toFixed(1)
}

export default function CircuitSet({ className, viewBox, traces, nodes }) {
  return (
    <svg className={`bg__traces ${className}`} viewBox={viewBox} preserveAspectRatio="xMidYMid slice">
      <g className="bg__base" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round">
        {traces.map((d, i) => <path key={i} d={d} />)}
      </g>
      <g className="bg__base" style={{ fill: "var(--bg-deep)" }} stroke="currentColor" strokeWidth="1.2">
        {nodes.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="3.5" />)}
      </g>
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        {traces.map((d, i) => {
          const timing = { animationDuration: `${speed(i)}s`, animationDelay: `-${(i * 2.3) % 7}s`, stroke: "var(--vouchr-green)" }
          return (
            <g key={i}>
              {i % 2 === 0 && <path d={d} pathLength="100" className="bg__pulse bg__pulse--halo" style={timing} />}
              <path d={d} pathLength="100" className="bg__pulse bg__pulse--core" style={timing} />
            </g>
          )
        })}
      </g>
    </svg>
  )
}
