import { Link } from "react-router-dom"
import { fullDate } from "../../data/format.js"

export default function ArticleCard({ title, slug, type, cover, summary, date }) {
  return (
    <Link to={`/articles/${slug}`} className="card glass card--media">
      {cover && <img className="card__img" src={cover} alt="" loading="lazy" />}
      <div className="card__body">
        <p className="card__meta">{[type, fullDate(date)].filter(Boolean).join("  ·  ")}</p>
        <h2 className="card__title">{title}</h2>
        {summary && <p className="card__text">{summary}</p>}
      </div>
    </Link>
  )
}
