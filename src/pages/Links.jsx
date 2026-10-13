import PageHeader from "../components/ui/PageHeader.jsx"
import StateMessage from "../components/ui/StateMessage.jsx"
import Prompt from "../components/ui/Prompt.jsx"
import LinkCard from "../components/links/LinkCard.jsx"
import { useNotion } from "../data/useNotion.js"

export default function Links() {
  const { data, loading, error } = useNotion("/api/links")
  // Group by category, keeping the order categories first appear in.
  const groups = []
  ;(data || []).forEach((l) => {
    const name = l.category || "Other"
    let g = groups.find((x) => x.name === name)
    if (!g) groups.push((g = { name, items: [] }))
    g.items.push(l)
  })
  return (
    <>
      <PageHeader path="links" title="Links" text="Tools and resources I use and recommend. Some are affiliate links." />
      <StateMessage loading={loading} error={error} empty={data && data.length === 0} emptyText="No links published yet." />
      {groups.map((g) => (
        <section className="block" key={g.name}>
          <Prompt path={`links/${g.name.toLowerCase()}`} />
          <div className="grid grid--compact">
            {g.items.map((l) => <LinkCard key={l.id} {...l} />)}
          </div>
        </section>
      ))}
    </>
  )
}
