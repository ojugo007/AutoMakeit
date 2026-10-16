import { Search, PencilRuler, Hammer, Rocket } from "lucide-react"

import Reveal from "@/components/common/Reveal"
import { Section, SectionHeading } from "@/components/common/Section"

export const processSteps = [
  {
    icon: Search,
    title: "Discover",
    short: "We map how work really flows today and find the tasks costing you the most time.",
    long: "We sit down with your team, walk through your current process and your tools, and identify the repetitive, error-prone steps that cost the most time. You get a clear list of what's worth automating first, and what isn't.",
    outcome: "A prioritized automation roadmap",
  },
  {
    icon: PencilRuler,
    title: "Design",
    short: "We design the workflow, integrations and safeguards before building anything.",
    long: "We design the end-to-end workflow: triggers, data flow, the tools involved, error handling and where a human should stay in the loop. You review and approve the design before we build.",
    outcome: "An agreed workflow blueprint",
  },
  {
    icon: Hammer,
    title: "Build",
    short: "We build and test the automation against real scenarios, not just the happy path.",
    long: "We build the automation, connect your systems and test it against real and edge-case data. We show progress along the way so there are no surprises at the end.",
    outcome: "A tested, working automation",
  },
  {
    icon: Rocket,
    title: "Launch & support",
    short: "We go live, train your team and keep monitoring so it keeps working.",
    long: "We launch, document how everything works and train your team. Then we monitor and improve it, because tools change and a good automation keeps up.",
    outcome: "Live automation with ongoing support",
  },
]

const Process = () => (
  <Section>
    <SectionHeading
      eyebrow="How we work"
      title="A simple, predictable process"
      description="No black boxes. You know what we're building, why, and what it will do for your team at every stage."
    />

    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {processSteps.map(({ icon: Icon, title, short }, i) => (
        <Reveal key={title} delay={i * 100}>
          <div className="relative h-full rounded-2xl border border-line bg-white p-6">
            <span className="absolute right-5 top-4 font-display text-4xl font-extrabold text-brand/10">
              0{i + 1}
            </span>

            <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white">
              <Icon className="h-5 w-5" />
            </span>

            <h3 className="text-base font-bold">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-body">{short}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
)

export default Process
