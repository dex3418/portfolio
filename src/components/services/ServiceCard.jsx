export default function ServiceCard({ title, description, price }) {
  return (
    <article className="card glass">
      <h2 className="card__title">{title}</h2>
      {description && <p className="card__text">{description}</p>}
      {price && <p className="card__meta">{price}</p>}
    </article>
  )
}
