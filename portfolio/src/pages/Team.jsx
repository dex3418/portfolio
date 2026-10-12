import PageHeader from "../components/ui/PageHeader.jsx"
import StateMessage from "../components/ui/StateMessage.jsx"
import TeamCard from "../components/team/TeamCard.jsx"
import { useNotion } from "../data/useNotion.js"

export default function Team() {
  const { data, loading, error } = useNotion("/api/team")
  return (
    <>
      <PageHeader title="Team" text="The people building alongside me." />
      <StateMessage loading={loading} error={error} empty={data && data.length === 0} emptyText="No team members published yet." />
      {data && data.length > 0 && (
        <div className="grid">
          {data.map((item) => (
            <TeamCard key={item.id} {...item} />
          ))}
        </div>
      )}
    </>
  )
}
