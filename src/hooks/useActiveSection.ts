import { useEffect, useMemo, useState } from 'react'

export function useActiveSection(sectionIds: string[]) {
  const ids = useMemo(() => sectionIds, [sectionIds.join('|')])
  const [active, setActive] = useState(ids[0] ?? 'home')

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!els.length) return

    const obs = new IntersectionObserver(
      (entries) => {
        // Pick the most visible intersecting section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]
        if (visible?.target?.id) setActive(visible.target.id)
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.7],
        rootMargin: '-15% 0px -65% 0px',
      },
    )

    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [ids])

  return { active, setActive }
}
