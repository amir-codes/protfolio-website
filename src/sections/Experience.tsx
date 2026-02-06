import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Timeline from '../components/Timeline'
import { profile } from '../data/profile'

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Professional timeline"
        desc="Full-time roles + freelance deliveries."
      />

      <Reveal>
        <Timeline items={[...profile.experience]} />
      </Reveal>
    </Section>
  )
}
