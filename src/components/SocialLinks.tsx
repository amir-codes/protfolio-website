import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { profile } from '../data/profile'
import { cn } from '../lib/cn'

type Item = {
  label: string
  href: string
  icon: JSX.Element
}

export default function SocialLinks({ className }: { className?: string }) {
  const items: Item[] = [
    {
      label: 'Email',
      href: `mailto:${profile.email}`,
      icon: <Mail size={18} />,
    },
    {
      label: 'Phone',
      href: `tel:${profile.phone.replaceAll(' ', '')}`,
      icon: <Phone size={18} />,
    },
    {
      label: 'LinkedIn',
      href: `https://${profile.linkedIn}`,
      icon: <Linkedin size={18} />,
    },
    // Optional: add GitHub once you have a public profile link
    {
      label: 'GitHub',
      href: 'https://github.com/',
      icon: <Github size={18} />,
    },
  ]

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {items.map((it) => (
        <a
          key={it.label}
          href={it.href}
          target={it.href.startsWith('http') ? '_blank' : undefined}
          rel={it.href.startsWith('http') ? 'noreferrer' : undefined}
          className="inline-flex items-center gap-2 rounded-xl border border-[rgb(var(--border))] bg-[rgba(var(--card)_/_0.6)] px-3 py-2 text-sm hover:bg-[rgba(var(--card)_/_0.9)]"
        >
          {it.icon}
          <span>{it.label}</span>
        </a>
      ))}
    </div>
  )
}
