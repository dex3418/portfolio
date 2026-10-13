import PageHeader from "../components/ui/PageHeader.jsx"
import StateMessage from "../components/ui/StateMessage.jsx"
import ResumeSection from "../components/resume/ResumeSection.jsx"
import { useNotion } from "../data/useNotion.js"

const ORDER = ["Experience", "Education", "Skills", "Certifications", "Achievements"]

export default function Resume() {
  const { data, loading, error } = useNotion("/api/resume")
  const groups = data ? ORDER.map((name) => ({ name, items: data.filter((d) => d.section === name) })).filter((g) => g.items.length) : []

  return (
    <>
      <PageHeader path="resume" title="Resume" text="Experience, education and skills." />
      <StateMessage loading={loading} error={error} empty={data && data.length === 0} emptyText="No resume entries published yet." />
      {groups.map((g) => (
        <ResumeSection key={g.name} name={g.name} items={g.items} />
      ))}
    </>
  )
}
