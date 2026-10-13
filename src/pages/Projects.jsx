import PageHeader from "../components/ui/PageHeader.jsx"
import StateMessage from "../components/ui/StateMessage.jsx"
import ProjectCard from "../components/projects/ProjectCard.jsx"
import { useNotion } from "../data/useNotion.js"

export default function Projects() {
  const { data, loading, error } = useNotion("/api/projects")
  return (
    <>
      <PageHeader path="projects" title="Projects" text="Things shipped and in progress." />
      <StateMessage loading={loading} error={error} empty={data && data.length === 0} emptyText="No projects published yet." />
      {data && data.length > 0 && (
        <div className="projects">
          {data.map((p, i) => <ProjectCard key={p.id} {...p} featured={i === 0 && data.length > 2} />)}
        </div>
      )}
    </>
  )
}
