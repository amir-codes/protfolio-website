import { ExternalLink } from 'lucide-react'
import Badge from './Badge'

export type Project = {
  name: string
  description: string
  tech: string[]
  impact: string[]
  links?: { label: string; href: string }[]
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card p-6">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
      </div>

      <p className="mt-2 text-[rgb(var(--muted))]">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>

      <ul className="mt-4 space-y-1 text-sm text-[rgb(var(--muted))]">
        {project.impact.map((i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[rgba(var(--accent)_/_0.8)]" />
            <span>{i}</span>
          </li>
        ))}
      </ul>

      {project.links?.length ? (
        <div className="mt-5 flex flex-wrap gap-3">
          {project.links.map((l) => (
            <a key={l.href} href={l.href} className="link inline-flex items-center gap-1 text-sm">
              {l.label} <ExternalLink size={14} />
            </a>
          ))}
        </div>
      ) : null}
    </div>
  )
}
