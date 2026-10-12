import { Link } from "react-router-dom"
import { hero, status } from "../../data/home.js"

export default function Hero() {
  return (
    <section className="hero">
      <div>
        <p className="hero__name">{hero.name}</p>
        <h1 className="hero__title">{hero.headline}</h1>
        <p className="hero__lead">{hero.lead}</p>
        <div className="hero__actions">
          <Link to="/projects" className="btn btn--primary">See projects</Link>
          <Link to="/services" className="btn btn--ghost">View services</Link>
        </div>
      </div>
      <div className="status glass" role="list" aria-label="Current ventures">
        {status.map((s) => (
          <div className="status__row" role="listitem" key={s.label}>
            <span className="status__dot" style={{ background: s.color }} />
            <span className="status__label">{s.label}</span>
            <span className="status__text">{s.text}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
