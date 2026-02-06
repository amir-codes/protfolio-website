import { useMemo, useState } from 'react'
import Button from './Button'
import { profile } from '../data/profile'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactForm() {
  const endpoint = useMemo(() => import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined, [])
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [error, setError] = useState<string>('')

  const canSend = form.name.trim() && form.email.trim() && form.message.trim()

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!canSend) return

    // Option A (recommended): Formspree (or any endpoint) via VITE_FORMSPREE_ENDPOINT
    if (endpoint) {
      try {
        setStatus('sending')
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(form),
        })

        if (!res.ok) throw new Error('Request failed')
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
        return
      } catch (err) {
        setStatus('error')
        setError('Could not send message. Please email me directly.')
        return
      }
    }

    // Option B: fallback to mailto (works without any backend)
    const subject = encodeURIComponent(`New message from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={onSubmit} className="card p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-semibold">Name</span>
          <input
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="h-11 rounded-xl border border-[rgb(var(--border))] bg-[rgba(var(--card)_/_0.6)] px-3 outline-none focus:ring-2 focus:ring-[rgba(var(--accent)_/_0.35)]"
            placeholder="Your name"
            required
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold">Email</span>
          <input
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="h-11 rounded-xl border border-[rgb(var(--border))] bg-[rgba(var(--card)_/_0.6)] px-3 outline-none focus:ring-2 focus:ring-[rgba(var(--accent)_/_0.35)]"
            placeholder="you@email.com"
            type="email"
            required
          />
        </label>
      </div>

      <label className="mt-4 grid gap-2">
        <span className="text-sm font-semibold">Message</span>
        <textarea
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          className="min-h-32 resize-y rounded-xl border border-[rgb(var(--border))] bg-[rgba(var(--card)_/_0.6)] p-3 outline-none focus:ring-2 focus:ring-[rgba(var(--accent)_/_0.35)]"
          placeholder="Tell me about your project (goal, deadline, tech stack, budget)…"
          required
        />
      </label>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-[rgb(var(--muted))]">
          {endpoint ? 'This form sends via your configured endpoint.' : 'This form opens your email app (mailto).'}
        </p>

        <Button type="submit" disabled={status === 'sending' || !canSend} variant="primary">
          {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent ✓' : 'Send message'}
        </Button>
      </div>

      {status === 'error' || error ? (
        <p className="mt-3 text-sm text-red-500">{error || 'Something went wrong.'}</p>
      ) : null}
    </form>
  )
}
