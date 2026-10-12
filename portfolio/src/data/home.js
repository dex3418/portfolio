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

export const sections = [
  { to: "/services", title: "Services", text: "What I can build or teach for you." },
  { to: "/projects", title: "Projects", text: "Things shipped and in progress." },
  { to: "/initiatives", title: "Initiatives", text: "Work beyond the day job." },
  { to: "/articles", title: "Articles", text: "Notes and posts from the work." },
  { to: "/team", title: "Team", text: "The people building alongside me." },
  { to: "/resume", title: "Resume", text: "Experience, education and skills." },
  { to: "/links", title: "Links", text: "Tools and resources I recommend." },
]
