import PageHeader from "../components/ui/PageHeader.jsx"
import StateMessage from "../components/ui/StateMessage.jsx"
import LinkCard from "../components/links/LinkCard.jsx"
import { useNotion } from "../data/useNotion.js"

export default function Links() {
  const { data, loading, error } = useNotion("/api/links")
  return (
    <>
      <PageHeader title="Links" text="Tools and resources I use and recommend. Some are affiliate links." />
      <StateMessage loading={loading} error={error} empty={data && data.length === 0} emptyText="No links published yet." />
      {data && data.length > 0 && (
        <div className="grid">
          {data.map((item) => (
            <LinkCard key={item.id} {...item} />
          ))}
        </div>
      )}
    </>
  )
}
