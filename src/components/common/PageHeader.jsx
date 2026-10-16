import Reveal from "@/components/common/Reveal"
import { Container } from "@/components/common/Section"

const PageHeader = ({ eyebrow, title, description }) => (
  <section className="relative overflow-hidden border-b border-line bg-mist">
    <div className="bg-grid pointer-events-none absolute inset-0" />
    <div className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-glow/20 blur-3xl" />

    <Container className="relative py-16 sm:py-20">
      <Reveal className="max-w-3xl">
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            {eyebrow}
          </p>
        )}

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          {title}
        </h1>

        {description && (
          <p className="mt-5 text-lg leading-8 text-body">{description}</p>
        )}
      </Reveal>
    </Container>
  </section>
)

export default PageHeader
