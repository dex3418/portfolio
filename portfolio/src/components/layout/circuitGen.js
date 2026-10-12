// Generates extra irregular circuit traces (90 and 45 degree bends) from a fixed seed,
// so the layout is the same on every load but never a repeating tile.
function rng(seed) {
  let s = seed
  return () => (s = (s * 1664525 + 1013904223) % 4294967296) / 4294967296
}

export function makeTraces({ seed, w, h, count }) {
  const r = rng(seed)
  const traces = []
  const nodes = []
  const inside = (x, y) => x >= 0 && x <= w && y >= 0 && y <= h

  for (let i = 0; i < count; i++) {
    const side = Math.floor(r() * 4)
    let x, y, dx, dy
    if (side === 0) { x = 0; y = Math.round(r() * h); dx = 1; dy = 0 }
    else if (side === 1) { x = w; y = Math.round(r() * h); dx = -1; dy = 0 }
    else if (side === 2) { y = 0; x = Math.round(r() * w); dx = 0; dy = 1 }
    else { y = h; x = Math.round(r() * w); dx = 0; dy = -1 }

    let d = `M${x} ${y}`
    const bends = 2 + Math.floor(r() * 3)
    for (let b = 0; b < bends; b++) {
      const len = Math.round((w + h) * (0.03 + r() * 0.07))
      const sx = x + dx * len
      const sy = y + dy * len
      if (!inside(sx, sy)) break
      d += dx !== 0 ? ` H${sx}` : ` V${sy}`
      x = sx; y = sy
      const t = r() < 0.5 ? 1 : -1
      const nx = -dy * t
      const ny = dx * t
      const dg = Math.round(18 + r() * 22)
      const ex = x + (dx + nx) * dg
      const ey = y + (dy + ny) * dg
      if (!inside(ex, ey)) break
      d += ` L${ex} ${ey}`
      x = ex; y = ey; dx = nx; dy = ny
    }
    if (d.includes("L")) {
      traces.push(d)
      nodes.push([x, y])
    }
  }
  return { traces, nodes }
}
