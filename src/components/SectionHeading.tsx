import { cn } from '../lib/cn'

export default function SectionHeading({
  eyebrow,
  title,
  desc,
  className,
}: {
  eyebrow?: string
  title: string
  desc?: string
  className?: string
}) {
  return (
    <div className={cn('mb-10', className)}>
      {eyebrow ? (
        <p className="text-sm font-semibold tracking-wide text-[rgb(var(--muted))]">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {desc ? <p className="mt-2 max-w-2xl text-[rgb(var(--muted))]">{desc}</p> : null}
    </div>
  )
}
