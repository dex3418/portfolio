import { Link, useParams } from "react-router-dom"
import StateMessage from "../components/ui/StateMessage.jsx"
import BlockRenderer from "../components/articles/BlockRenderer.jsx"
import { useNotion } from "../data/useNotion.js"
import { fullDate } from "../data/format.js"

export default function ArticleDetail() {
  const { slug } = useParams()
  const { data, loading, error } = useNotion(`/api/article?slug=${encodeURIComponent(slug)}`)

  return (
    <article className="article">
      <Link to="/articles" className="card__link">Back to articles</Link>
      <StateMessage loading={loading} error={error} />
      {data && (
        <>
          <p className="card__meta" style={{ marginTop: 24 }}>{[data.type, fullDate(data.date)].filter(Boolean).join("  ·  ")}</p>
          <h1 className="article__title">{data.title}</h1>
          {data.cover && <img className="article__cover" src={data.cover} alt="" />}
          <BlockRenderer blocks={data.blocks} />
        </>
      )}
    </article>
  )
}
