import PageHeader from "../components/ui/PageHeader.jsx"
import StateMessage from "../components/ui/StateMessage.jsx"
import InitiativeCard from "../components/initiatives/InitiativeCard.jsx"
import { useNotion } from "../data/useNotion.js"

export default function Initiatives() {
  const { data, loading, error } = useNotion("/api/initiatives")
  return (
    <>
      <PageHeader title="Initiatives" text="Work beyond the day job." />
      <StateMessage loading={loading} error={error} empty={data && data.length === 0} emptyText="No initiatives published yet." />
      {data && data.length > 0 && (
        <div className="grid">
          {data.map((item) => (
            <InitiativeCard key={item.id} {...item} />
          ))}
        </div>
      )}
    </>
  )
}
