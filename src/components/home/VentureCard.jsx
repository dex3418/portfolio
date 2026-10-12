export default function VentureCard({ name, text, href, accent }) {
  return (
    <a className="venture glass" href={href} target="_blank" rel="noreferrer">
      <span className="venture__bar" style={{ background: accent }} />
      <h3 className="venture__name">{name}</h3>
      <p className="venture__text">{text}</p>
      <span className="venture__visit">Visit site</span>
    </a>
  )
}
