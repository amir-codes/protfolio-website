import { Mail, Phone, MapPin } from 'lucide-react'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import ContactForm from '../components/ContactForm'
import { profile } from '../data/profile'

export default function Contact() {
  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build your app"
        desc="Send a quick message and I’ll reply with a plan + timeline."
      />

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <div className="card p-6">
            <h3 className="text-base font-semibold">Contact details</h3>

            <div className="mt-4 space-y-3 text-sm">
              <a className="flex items-center gap-2 text-[rgb(var(--muted))] hover:text-[rgb(var(--text))]" href={`mailto:${profile.email}`}>
                <Mail size={16} />
                <span className="link">{profile.email}</span>
              </a>
              <a className="flex items-center gap-2 text-[rgb(var(--muted))] hover:text-[rgb(var(--text))]" href={`tel:${profile.phone.replaceAll(' ', '')}`}>
                <Phone size={16} />
                <span className="link">{profile.phone}</span>
              </a>
              <p className="flex items-center gap-2 text-[rgb(var(--muted))]">
                <MapPin size={16} />
                <span>{profile.location}</span>
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-[rgb(var(--border))] bg-[rgba(var(--card)_/_0.65)] p-4">
              <p className="text-sm font-semibold">What to include in your message</p>
              <ul className="mt-3 space-y-2 text-sm text-[rgb(var(--muted))]">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[rgba(var(--accent2)_/_0.85)]" />
                  App type (logistics / marketplace / booking / etc.)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[rgba(var(--accent2)_/_0.85)]" />
                  Must-have features (auth, maps, payments, notifications)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[rgba(var(--accent2)_/_0.85)]" />
                  Timeline + budget range (optional but helps)
                </li>
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  )
}
