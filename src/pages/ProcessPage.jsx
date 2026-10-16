import PageHeader from "@/components/common/PageHeader"
import Reveal from "@/components/common/Reveal"
import { Section } from "@/components/common/Section"
import { processSteps } from "@/components/sections/Process"
import CTA from "@/components/sections/CTA"
import { usePageTitle } from "@/hooks/usePageTitle"

const ProcessPage = () => {
  usePageTitle("Process")

  return (
    <>
      <PageHeader
        eyebrow="Our process"
        title="From first call to a working system"
        description="A clear, four-stage approach so you always know what's happening, what's next and what you'll get."
      />

      <Section>
        <div className="relative mx-auto max-w-3xl space-y-6">
          <span className="absolute bottom-8 left-[27px] top-8 hidden w-px bg-gradient-to-b from-brand/40 via-glow/40 to-transparent sm:block" />

          {processSteps.map(({ icon: Icon, title, long, outcome }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="relative flex gap-5 rounded-2xl border border-line bg-white p-6">
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy text-white">
                  <Icon className="h-6 w-6" />
                </span>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                    Step {i + 1}
                  </p>

                  <h2 className="mt-1 text-xl font-extrabold">{title}</h2>
                  <p className="mt-2 text-sm leading-7 text-body">{long}</p>

                  <p className="mt-4 inline-block rounded-full bg-mist px-3 py-1 text-xs font-semibold text-navy">
                    You get: {outcome}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  )
}

export default ProcessPage
