import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../lib/cn'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost'
  leftIcon?: ReactNode
}

export default function Button({ variant = 'primary', leftIcon, className, ...props }: Props) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition active:translate-y-[1px] disabled:opacity-60 disabled:cursor-not-allowed'

  const styles =
    variant === 'primary'
      ? 'bg-[rgb(var(--text))] text-[rgb(var(--bg))] hover:opacity-90'
      : variant === 'secondary'
        ? 'border border-[rgb(var(--border))] bg-[rgba(var(--card)_/_0.65)] hover:bg-[rgba(var(--card)_/_0.9)]'
        : 'hover:bg-[rgba(var(--card)_/_0.6)]'

  return (
    <button className={cn(base, styles, className)} {...props}>
      {leftIcon}
      {props.children}
    </button>
  )
}
