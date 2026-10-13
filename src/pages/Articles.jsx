import PageHeader from "../components/ui/PageHeader.jsx"
import StateMessage from "../components/ui/StateMessage.jsx"
import ArticleRow from "../components/articles/ArticleRow.jsx"
import { useNotion } from "../data/useNotion.js"

export default function Articles() {
  const { data, loading, error } = useNotion("/api/articles")
  return (
    <>
      <PageHeader path="articles" title="Articles" text="Notes and posts from the work." />
      <StateMessage loading={loading} error={error} empty={data && data.length === 0} emptyText="No articles published yet." />
      {data && data.length > 0 && (
        <div className="rows glass">
          {data.map((a) => <ArticleRow key={a.id} {...a} />)}
        </div>
      )}
    </>
  )
}
