// Shared Notion reader. Files starting with _ are not exposed as endpoints by Vercel.
const VERSION = "2022-06-28"

export const DB = {
  projects: "54a831c0f1a943318d690d3037931d77",
  team: "44c5503c10054254ab0be3d408ee93fc",
  articles: "aef755f27f7d43d1be2f88d4e360731d",
  services: "c19e03dc8f15403a94042051ebb622d1",
  initiatives: "1172598e87c540beb20cce5c5fe5b553",
  links: "46570268469f425e824f80d86c3355cc",
  resume: "002b7e170961446f8cd592e986d34db9",
}

async function notion(path, body) {
  const token = process.env.NOTION_TOKEN
  if (!token) throw new Error("NOTION_TOKEN is not set")
  const res = await fetch(`https://api.notion.com/v1${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Notion-Version": VERSION,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
  if (!res.ok) throw new Error(`Notion ${res.status}: ${await res.text()}`)
  return res.json()
}

// Returns only rows with Published ticked, sorted by Order by default.
export async function queryPublished(dbId, sorts = [{ property: "Order", direction: "ascending" }]) {
  let results = []
  let cursor
  do {
    const data = await notion(`/databases/${dbId}/query`, {
      filter: { property: "Published", checkbox: { equals: true } },
      sorts,
      page_size: 100,
      ...(cursor ? { start_cursor: cursor } : {}),
    })
    results = results.concat(data.results)
    cursor = data.has_more ? data.next_cursor : undefined
  } while (cursor)
  return results
}

export const getText = (p) => (p?.title || p?.rich_text || []).map((t) => t.plain_text).join("")
export const getUrl = (p) => p?.url || ""
export const getSelect = (p) => p?.select?.name || ""
export const getNumber = (p) => (typeof p?.number === "number" ? p.number : null)
export const getRelationIds = (p) => (p?.relation || []).map((r) => r.id)
export const getFile = (p) => {
  const f = p?.files?.[0]
  return f ? f.file?.url || f.external?.url || "" : ""
}

// Notion file links expire after about an hour, so cache for less than that.
export function send(res, data) {
  res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=300")
  res.status(200).json(data)
}

export function fail(res, err) {
  console.error(err)
  res.status(500).json({ error: "Could not load content" })
}
