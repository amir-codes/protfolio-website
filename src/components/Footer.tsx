import Container from './Container'
import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(var(--border)_/_0.7)] py-10">
      <Container>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-sm text-[rgb(var(--muted))]">
            © {new Date().getFullYear()} {profile.name}. Built with React + Tailwind.
          </p>

          <div className="flex items-center gap-3 text-sm">
            <a className="link" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <span className="text-[rgb(var(--muted))]">•</span>
            <a className="link" href={`https://${profile.linkedIn}`} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
