import PageHeader from "../components/ui/PageHeader.jsx"
import StateMessage from "../components/ui/StateMessage.jsx"
import FeatureRow from "../components/initiatives/FeatureRow.jsx"
import { useNotion } from "../data/useNotion.js"

export default function Initiatives() {
  const { data, loading, error } = useNotion("/api/initiatives")
  return (
    <>
      <PageHeader path="initiatives" title="Initiatives" text="Work beyond the day job." />
      <StateMessage loading={loading} error={error} empty={data && data.length === 0} emptyText="No initiatives published yet." />
      {data && data.length > 0 && (
        <div className="features">
          {data.map((f) => <FeatureRow key={f.id} {...f} />)}
        </div>
      )}
    </>
  )
}
