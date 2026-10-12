import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <section className="glass" style={{ padding: "40px 28px" }}>
      <h1 style={{ margin: "0 0 8px" }}>Page not found</h1>
      <p style={{ color: "var(--text-dim)", marginTop: 0 }}>This page does not exist or has been removed.</p>
      <Link to="/" className="btn btn--primary">Go home</Link>
    </section>
  )
}
