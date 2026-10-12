import { Link } from "react-router-dom"
import { hero } from "../../data/home.js"
import Terminal from "./Terminal.jsx"

export default function Hero() {
  return (
    <section className="hero">
      <div>
        <h1 className="hero__title">{hero.headline}</h1>
        <p className="hero__lead">{hero.lead}</p>
        <div className="hero__actions">
          <Link to="/projects" className="btn btn--primary">See projects</Link>
          <Link to="/services" className="btn btn--ghost">View services</Link>
        </div>
      </div>
      <Terminal />
    </section>
  )
}
