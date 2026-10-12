import { useState } from "react"
import { NavLink } from "react-router-dom"

// Add or remove entries here when a page is added or removed.
const LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/articles", label: "Articles" },
  { to: "/team", label: "Team" },
  { to: "/resume", label: "Resume" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="nav glass" aria-label="Main">
      <NavLink to="/" className="nav__brand" onClick={() => setOpen(false)}>
        dev<span>.</span>
      </NavLink>
      <button className="nav__toggle" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen(!open)}>
        {open ? "✕" : "☰"}
      </button>
      <ul className={`nav__links ${open ? "open" : ""}`}>
        {LINKS.map((l) => (
          <li key={l.to}>
            <NavLink
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => `nav__link ${isActive ? "active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
