import type { ReactNode } from 'react'
import Container from './Container'
import { cn } from '../lib/cn'

export default function Section({
  id,
  children,
  className,
}: {
  id: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={cn('py-16 sm:py-20', className)}>
      <Container>{children}</Container>
    </section>
  )
}
