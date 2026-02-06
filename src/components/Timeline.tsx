export type TimelineItem = {
  role: string
  company: string
  meta: string
  dates: string
  bullets: string[]
}

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative border-s border-[rgb(var(--border))]">
      {items.map((it) => (
        <li key={it.company + it.dates} className="ms-6 pb-10 last:pb-0">
          <span className="absolute -start-1.5 mt-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-[rgb(var(--accent))]" />
          <div className="card-muted p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="text-base font-semibold">
                  {it.role} • <span className="text-[rgb(var(--muted))]">{it.company}</span>
                </h3>
                <p className="mt-1 text-sm text-[rgb(var(--muted))]">{it.meta}</p>
              </div>
              <p className="text-sm font-semibold text-[rgb(var(--muted))]">{it.dates}</p>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-[rgb(var(--muted))]">
              {it.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[rgba(var(--accent2)_/_0.85)]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  )
}
