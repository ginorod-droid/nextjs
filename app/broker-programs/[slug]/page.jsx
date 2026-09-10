// app/broker-programs/[slug]/page.jsx
import { notFound } from 'next/navigation'
import { programs, getProgram, ProgramView } from '../shared'

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const p = getProgram(slug)
  if (!p) return {}
  return {
    title: `${p.name} | Broker Programs | Acoma Capital Partners`,
    description: `${p.name}: ${p.tagline}`,
  }
}

export default async function ProgramPage({ params }) {
  const { slug } = await params
  const program = getProgram(slug)
  if (!program) notFound()
  return <ProgramView program={program} />
}
