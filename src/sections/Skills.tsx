import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Badge from '../components/Badge'
import { profile } from '../data/profile'

function SkillGroup({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div className="card p-6">
      <h3 className="text-base font-semibold">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((s) => (
          <Badge key={s}>{s}</Badge>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="Tech I use to ship reliable apps"
        desc="A focused stack for fast development and stable production releases."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        <Reveal>
          <SkillGroup title="Mobile" items={profile.skills.mobile} />
        </Reveal>
        <Reveal delay={0.05}>
          <SkillGroup title="Backend & Data" items={profile.skills.backend} />
        </Reveal>
        <Reveal delay={0.1}>
          <SkillGroup title="Tools & Practices" items={profile.skills.tools} />
        </Reveal>
        <Reveal delay={0.15}>
          <SkillGroup title="Focus Areas" items={profile.skills.focus} />
        </Reveal>
      </div>
    </Section>
  )
}
