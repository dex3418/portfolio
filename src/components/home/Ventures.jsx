import VentureCard from "./VentureCard.jsx"
import { ventures } from "../../data/home.js"

export default function Ventures() {
  return (
    <section className="block">
      <h2 className="block__title">What I am building</h2>
      <div className="ventures">
        {ventures.map((v) => (
          <VentureCard key={v.name} {...v} />
        ))}
      </div>
    </section>
  )
}
