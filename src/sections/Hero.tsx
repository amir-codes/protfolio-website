import { ArrowDownRight, Download, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import LinkButton from '../components/LinkButton'
import Section from '../components/Section'
import SocialLinks from '../components/SocialLinks'
import Reveal from '../components/Reveal'
import Badge from '../components/Badge'

export default function Hero() {
  return (
    <Section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" aria-hidden />
      <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <Reveal>
            <div className="flex flex-wrap items-center gap-2">
              <Badge>Open to freelance</Badge>
              <Badge>Remote</Badge>
              <Badge>{profile.location}</Badge>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              {profile.name}
              <span className="block bg-gradient-to-r from-[rgb(var(--accent))] to-[rgb(var(--accent2))] bg-clip-text text-transparent">
                {profile.title}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-lg text-[rgb(var(--muted))]">{profile.summary}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-7 flex flex-wrap gap-3">
              <LinkButton variant="primary" href="#projects" leftIcon={<ArrowDownRight size={16} />}>
                View Projects
              </LinkButton>
              <LinkButton variant="secondary" href="#contact" leftIcon={<Mail size={16} />}>
                Contact Me
              </LinkButton>
              <LinkButton variant="ghost" href="/cv.pdf" leftIcon={<Download size={16} />}>
                Download CV
              </LinkButton>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8">
              <SocialLinks />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.05}>
          <div className="card p-6">
            <p className="text-sm font-semibold text-[rgb(var(--muted))]">Quick stats</p>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {profile.highlights.map((h) => (
                <div key={h.label} className="card-muted p-4 text-center">
                  <p className="text-2xl font-semibold">{h.value}</p>
                  <p className="mt-1 text-xs text-[rgb(var(--muted))]">{h.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-[rgb(var(--border))] bg-[rgba(var(--card)_/_0.65)] p-4">
              <p className="text-sm font-semibold">What you can hire me for</p>
              <ul className="mt-3 space-y-2 text-sm text-[rgb(var(--muted))]">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[rgba(var(--accent)_/_0.85)]" />
                  Building Flutter MVPs fast (clean architecture + scalable code)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[rgba(var(--accent)_/_0.85)]" />
                  Supabase/Firebase integrations (auth, db, realtime)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[rgba(var(--accent)_/_0.85)]" />
                  Push notifications (FCM), Maps, and payment flows
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
