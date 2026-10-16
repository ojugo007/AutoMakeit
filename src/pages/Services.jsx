import { CheckCircle2 } from "lucide-react"

import PageHeader from "@/components/common/PageHeader"
import Reveal from "@/components/common/Reveal"
import { Section, SectionHeading } from "@/components/common/Section"
import ServicesGrid from "@/components/sections/ServicesGrid"
import CTA from "@/components/sections/CTA"
import { usePageTitle } from "@/hooks/usePageTitle"

const included = [
  "A discovery session to understand your process and tools",
  "A clear scope and workflow design you approve before we build",
  "Integration with the software your team already uses",
  "Testing against real and edge-case scenarios",
  "Documentation and team training at hand-over",
  "Monitoring and support after launch",
]

const faqs = [
  {
    q: "What kinds of processes can be automated?",
    a: "Anything repetitive and rule-based: lead capture and follow-up, invoicing and payment reminders, reporting, document handling, onboarding, data syncing between tools, and customer support routing. If you do it the same way more than a few times a week, it's a candidate.",
  },
  {
    q: "Do we have to replace our current tools?",
    a: "Usually not. We connect the tools you already use, so your team keeps working in familiar software while the busywork happens in the background.",
  },
  {
    q: "How long does a project take?",
    a: "It depends on scope. A single focused workflow can be live within a couple of weeks, while larger multi-department systems are delivered in phases so you see value early.",
  },
  {
    q: "What if something breaks later?",
    a: "Tools update and APIs change. We build in error handling and alerts, and we offer ongoing support so issues are caught and fixed quickly.",
  },
  {
    q: "Is our data safe?",
    a: "We follow the principle of least access, use secure credentials management and only connect what's needed. We're happy to work within your company's security requirements.",
  },
]

const Services = () => {
  usePageTitle("Services")

  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Automation services built around your business"
        description="Pick a single workflow or transform how a whole department operates. Every solution is designed, built and supported by us."
      />

      <Section>
        <ServicesGrid />
      </Section>

      <Section tone="mist">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              What&apos;s included
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              More than a one-off script
            </h2>

            <p className="mt-4 leading-7 text-body">
              Every engagement covers the full journey, so what we build keeps
              working long after launch day.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <ul className="space-y-3">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-line bg-white p-4 text-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="FAQ" title="Questions we often hear" />

        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map(({ q, a }) => (
            <Reveal key={q}>
              <details className="group rounded-xl border border-line bg-white p-5 open:shadow-md">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  {q}
                  <span className="text-xl text-brand transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-3 text-sm leading-7 text-body">{a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  )
}

export default Services
