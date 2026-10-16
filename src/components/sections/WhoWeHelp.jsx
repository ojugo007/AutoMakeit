import { Rocket, Building, Building2 } from "lucide-react"

import Reveal from "@/components/common/Reveal"
import { Section, SectionHeading } from "@/components/common/Section"

export const audiences = [
  {
    icon: Rocket,
    title: "Startups",
    text: "Move fast without hiring for every repetitive task. We build lean automations that let a small team operate like a big one.",
  },
  {
    icon: Building,
    title: "Growing businesses",
    text: "Replace spreadsheets and manual hand-offs with connected systems that keep up as your customer base and team grow.",
  },
  {
    icon: Building2,
    title: "Large enterprises",
    text: "Streamline complex, multi-department processes and integrate legacy tools, with reliable, documented and maintainable workflows.",
  },
]

const WhoWeHelp = () => (
  <Section tone="mist">
    <SectionHeading
      eyebrow="Who we help"
      title="Automation that fits your stage"
      description="Whether you have five people or five thousand, the goal is the same: less busywork, fewer errors and more time for the work that matters."
    />

    <div className="grid gap-5 md:grid-cols-3">
      {audiences.map(({ icon: Icon, title, text }, i) => (
        <Reveal key={title} delay={i * 100}>
          <div className="h-full rounded-2xl border border-line bg-white p-7 transition-shadow hover:shadow-xl hover:shadow-brand/10">
            <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white">
              <Icon className="h-6 w-6" />
            </span>

            <h3 className="text-lg font-bold">{title}</h3>
            <p className="mt-2 text-sm leading-7 text-body">{text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
)

export default WhoWeHelp
