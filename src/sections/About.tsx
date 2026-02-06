import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { profile } from '../data/profile'
import Badge from '../components/Badge'

export default function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About"
        title="I build production-ready Flutter apps"
        desc="Fast delivery, clean architecture, and great communication."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="card p-6">
            <p className="text-[rgb(var(--muted))]">
              {profile.summary}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <Badge>Clean Architecture</Badge>
              <Badge>GetX</Badge>
              <Badge>Supabase</Badge>
              <Badge>Firebase</Badge>
              <Badge>Maps</Badge>
              <Badge>Payments</Badge>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="card p-6">
            <h3 className="text-base font-semibold">How I work</h3>
            <ul className="mt-4 space-y-3 text-sm text-[rgb(var(--muted))]">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[rgba(var(--accent2)_/_0.85)]" />
                Clarify scope → define milestones (so the project stays predictable).
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[rgba(var(--accent2)_/_0.85)]" />
                Ship fast → iterate with feedback (weekly demos or daily updates).
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[rgba(var(--accent2)_/_0.85)]" />
                Keep code clean → scalable structure, robust error handling, testing where needed.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[rgba(var(--accent2)_/_0.85)]" />
                Deliver well → documentation + handover so you can maintain the app easily.
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
