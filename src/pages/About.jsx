import { Eye, ShieldCheck, Handshake, LineChart } from "lucide-react"

import PageHeader from "@/components/common/PageHeader"
import Reveal from "@/components/common/Reveal"
import { Section, SectionHeading } from "@/components/common/Section"
import WhoWeHelp from "@/components/sections/WhoWeHelp"
import CTA from "@/components/sections/CTA"
import Seo from "@/components/common/Seo"

const values = [
  {
    icon: Eye,
    title: "Clarity",
    text: "Plain language, honest scoping and documentation you can actually read. You always know what's built and how it works.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    text: "Automations touch real customers and real money, so we test edge cases, add error handling and monitor after launch.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    text: "We work alongside your team, not around it. We keep humans in the loop where judgment matters.",
  },
  {
    icon: LineChart,
    title: "Measurable results",
    text: "Every automation has a goal: time saved, errors reduced, faster response. We design with that outcome in mind.",
  },
]

const About = () => {
  return (
    <>
      <Seo
        title="About"
        path="/about"
        description="Learn how AutoMakeIt Systems helps companies of every size replace repetitive manual work with reliable automations and integrations."
      />
      <PageHeader
        eyebrow="About us"
        title="We turn repetitive work into systems that run themselves"
        description="AutoMakeIt Systems is an automation agency helping companies of every size connect their tools, streamline their processes and grow without growing their workload."
      />

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight">
              Why we exist
            </h2>
          </Reveal>

          <Reveal delay={100} className="space-y-5 text-base leading-8 text-body">
            <p>
              Most teams lose hours every week to work a system could do:
              copying data between tools, chasing approvals, building the same
              report again, answering the same questions. It's slow, it's
              error-prone, and it keeps talented people from doing their best
              work.
            </p>

            <p>
              We started AutoMakeIt Systems to fix that. We look at how your
              business really runs, find where time is being lost, and build
              dependable automations and integrations that remove the friction.
            </p>

            <p>
              The result is a business that responds faster, makes fewer
              mistakes and scales without constantly adding headcount.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeading
          eyebrow="Our values"
          title="How we approach every project"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="h-full rounded-2xl border border-line bg-white p-6">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icon className="h-5 w-5" />
                </span>

                <h3 className="font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-body">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <WhoWeHelp />
      <CTA />
    </>
  )
}

export default About
