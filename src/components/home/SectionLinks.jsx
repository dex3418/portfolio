import { Link } from "react-router-dom"
import { sections } from "../../data/home.js"

export default function SectionLinks() {
  return (
    <section className="block">
      <h2 className="block__title">Explore</h2>
      <div className="tiles">
        {sections.map((s) => (
          <Link key={s.to} to={s.to} className="tile glass">
            <h3 className="tile__title">{s.title}</h3>
            <p className="tile__text">{s.text}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
