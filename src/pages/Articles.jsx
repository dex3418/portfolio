import PageHeader from "../components/ui/PageHeader.jsx"
import StateMessage from "../components/ui/StateMessage.jsx"
import ArticleCard from "../components/articles/ArticleCard.jsx"
import { useNotion } from "../data/useNotion.js"

export default function Articles() {
  const { data, loading, error } = useNotion("/api/articles")
  return (
    <>
      <PageHeader title="Articles" text="Notes and posts from the work." />
      <StateMessage loading={loading} error={error} empty={data && data.length === 0} emptyText="No articles published yet." />
      {data && data.length > 0 && (
        <div className="grid">
          {data.map((item) => (
            <ArticleCard key={item.id} {...item} />
          ))}
        </div>
      )}
    </>
  )
}
