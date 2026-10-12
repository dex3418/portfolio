export default function InitiativeCard({ title, description, image, link }) {
  return (
    <article className="card glass card--media">
      {image && <img className="card__img" src={image} alt={title} loading="lazy" />}
      <div className="card__body">
        <h2 className="card__title">{title}</h2>
        {description && <p className="card__text">{description}</p>}
        {link && (
          <a className="card__link" href={link} target="_blank" rel="noreferrer">Learn more</a>
        )}
      </div>
    </article>
  )
}
