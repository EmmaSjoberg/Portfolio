import type { ReactNode } from 'react'

type ProjectSectionProps = {
  eyebrow: string
  title: string
  children: ReactNode
  className?: string
}

export default function ProjectSection({
  eyebrow,
  title,
  children,
  className = '',
}: ProjectSectionProps) {
  return (
    <section className={`project-section ${className}`.trim()}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children}
    </section>
  )
}
