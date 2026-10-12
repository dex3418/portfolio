import PageHeader from "../components/ui/PageHeader.jsx"
import StateMessage from "../components/ui/StateMessage.jsx"
import ServiceCard from "../components/services/ServiceCard.jsx"
import { useNotion } from "../data/useNotion.js"

export default function Services() {
  const { data, loading, error } = useNotion("/api/services")
  return (
    <>
      <PageHeader title="Services" text="What I can build or teach for you." />
      <StateMessage loading={loading} error={error} empty={data && data.length === 0} emptyText="No services published yet." />
      {data && data.length > 0 && (
        <div className="grid">
          {data.map((item) => (
            <ServiceCard key={item.id} {...item} />
          ))}
        </div>
      )}
    </>
  )
}
