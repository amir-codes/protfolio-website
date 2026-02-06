import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import ProjectCard from '../components/ProjectCard'
import { profile } from '../data/profile'

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Case studies"
        desc="A few projects similar to what clients frequently request."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {profile.projects.map((p, idx) => (
          <Reveal key={p.name} delay={idx * 0.04}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>

      <p className="mt-6 text-sm text-[rgb(var(--muted))]">
        Want to see more? I can share additional screenshots, APK builds, or private repo walkthroughs during a call.
      </p>
    </Section>
  )
}
