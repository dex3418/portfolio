import CircuitSet from "./CircuitSet.jsx"
import { makeTraces } from "./circuitGen.js"

// Loose, hand-placed traces (not a tiled pattern). A landscape set for wide screens
// and a separate portrait set so phones show the traces too.
const WIDE_HAND = {
  viewBox: "0 0 1200 900",
  traces: [
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
  ],
  nodes: [[820,220],[900,290],[1120,330],[860,80],[760,330],[120,300],[90,690],[320,860],[410,780],[540,830],[100,900],[1020,860],[1000,100],[1080,170]],
}

const TALL_HAND = {
  viewBox: "0 0 400 800",
  traces: [
    "M400 70 H330 L300 100 V170 L270 200 H200",
    "M400 150 H360 L335 175 V240 H260",
    "M320 0 V30 L290 60 H230",
    "M400 260 H370 L350 280 V330",
    "M0 330 H50 L80 360 V430 L110 460 H170",
    "M0 420 H30 L50 440 V500",
    "M0 620 H70 L100 650 V720 L130 750 H230",
    "M0 700 H40 L60 720 V800",
    "M140 800 V770 L170 740 H270 L295 715",
    "M400 560 H350 L325 585 V650 H280",
    "M400 720 H360 L340 740 V800",
  ],
  nodes: [[200,200],[260,240],[230,60],[350,330],[170,460],[50,500],[230,750],[295,715],[280,650],[60,800],[340,800],[300,100],[335,175]],
}

function combine(hand, extra) {
  return { viewBox: hand.viewBox, traces: [...hand.traces, ...extra.traces], nodes: [...hand.nodes, ...extra.nodes] }
}

const WIDE = combine(WIDE_HAND, makeTraces({ seed: 7, w: 1200, h: 900, count: 40 }))
const TALL = combine(TALL_HAND, makeTraces({ seed: 11, w: 400, h: 800, count: 34 }))

export default function Background() {
  return (
    <div className="bg" aria-hidden="true">
      <div className="bg__glow" />
      <CircuitSet className="bg__traces--wide" {...WIDE} />
      <CircuitSet className="bg__traces--tall" {...TALL} />
    </div>
  )
}
