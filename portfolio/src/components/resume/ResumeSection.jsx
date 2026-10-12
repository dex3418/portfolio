import { monthYear } from "../../data/format.js"

export default function ResumeSection({ name, items }) {
  return (
    <section className="resume__section">
      <h2 className="resume__heading">{name}</h2>
      <div className="resume__list">
        {items.map((it) => {
          const dates = it.start ? `${monthYear(it.start)} to ${it.end ? monthYear(it.end) : "Present"}` : ""
          return (
            <article className="glass resume__item" key={it.id}>
              <h3 className="card__title">{it.title}</h3>
              {(it.organization || dates) && (
                <p className="card__meta">{[it.organization, dates].filter(Boolean).join("  ·  ")}</p>
              )}
              {it.details && <p className="card__text">{it.details}</p>}
            </article>
          )
        })}
      </div>
    </section>
  )
}
