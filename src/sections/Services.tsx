import { Bell, CreditCard, MapPinned, MessagesSquare, Rocket, Wrench } from 'lucide-react'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { profile } from '../data/profile'

const icons = [Rocket, MessagesSquare, MapPinned, Bell, CreditCard, Wrench]

export default function Services() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="Services"
        title="How I can help"
        desc="Popular tasks clients hire me for on Upwork/Freelancer."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {profile.services.map((s, idx) => {
          const Icon = icons[idx] ?? Rocket
          return (
            <Reveal key={s.title} delay={idx * 0.03}>
              <div className="card p-6">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[rgb(var(--border))] bg-[rgba(var(--card)_/_0.65)]">
                    <Icon size={18} />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold">{s.title}</h3>
                    <p className="mt-1 text-sm text-[rgb(var(--muted))]">{s.desc}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
