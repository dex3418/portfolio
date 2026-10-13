// Home page content. Later this will be replaced by data from Notion.
export const hero = {
  name: "Devashish Markam",
  headline: "I build hands-on tech education and local talent networks.",
  lead: "Founder of Novaforge Labs and Vouchr. Teaching AI and embedded systems by building, and connecting skilled people in Dantewada, Sukma and Bijapur with real work.",
}

export const terminal = [
  { prompt: true, text: "whoami" },
  { text: "Devashish Markam" },
  { prompt: true, text: "cat roles.txt" },
  { text: "Founder, Novaforge Labs" },
  { text: "Founder, Vouchr" },
  { prompt: true, text: "ls explore/" },
  { text: "services/  projects/  articles/  team/  resume/" },
]

export const ventures = [
  {
    name: "Novaforge Labs",
    text: "Practical AI, embedded systems and agentic AI training for polytechnic and tier-3 college students.",
    href: "https://nova-forge-labs.vercel.app",
    accent: "var(--cyan)",
  },
  {
    name: "Vouchr",
    text: "A hyperlocal network that connects job seekers, skill learners and businesses across Dantewada, Sukma and Bijapur.",
    href: "https://vouchr-dun.vercel.app",
    accent: "var(--vouchr-gradient)",
  },
]

// Pages that live under "More" in the navbar, shown at the bottom of Home.
export const more = [
  { to: "/initiatives", label: "initiatives/" },
  { to: "/team", label: "team/" },
  { to: "/resume", label: "resume/" },
  { to: "/links", label: "links/" },
]
