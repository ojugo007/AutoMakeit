import { Link } from "react-router-dom"
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Mail,
  Receipt,
  Sparkles,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/common/Section"

const steps = [
  { icon: Mail, label: "New enquiry arrives", tone: "bg-brand/10 text-brand" },
  { icon: Users, label: "Added to CRM & scored", tone: "bg-glow/15 text-brand" },
  { icon: FileText, label: "Proposal drafted", tone: "bg-brand/10 text-brand" },
  { icon: Receipt, label: "Invoice sent on approval", tone: "bg-glow/15 text-brand" },
]

const Hero = () => (
  <section className="relative overflow-hidden">
    <div className="bg-grid pointer-events-none absolute inset-0" />
    <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-brand/15 blur-3xl" />
    <div className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-glow/20 blur-3xl" />

    <Container className="relative grid items-center gap-14 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:pb-28 lg:pt-24">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-brand backdrop-blur">
          <Sparkles className="h-3.5 w-3.5" />
          Process automation for modern teams
        </span>

        <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
          Stop doing it by hand.
          <br />
          <span className="text-gradient">Automate it.</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-body">
          AutoMakeIt Systems designs and builds automations that connect your
          tools, remove repetitive work and let your team focus on growth.
          For startups, growing businesses and large enterprises.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-brand px-7 text-white shadow-lg shadow-brand/25 hover:bg-brand-dark"
          >
            <Link to="/contact">
              Book a free call
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-line bg-white/70 px-7 backdrop-blur"
          >
            <Link to="/work">See our work</Link>
          </Button>
        </div>

        <p className="mt-10 text-sm font-medium tracking-wide text-body">
          Automate <span className="mx-2 text-brand">·</span> Integrate
          <span className="mx-2 text-brand">·</span> Grow
        </p>
      </div>

      {/* Workflow illustration */}
      <div className="relative mx-auto w-full max-w-md">
        <div className="animate-float rounded-3xl border border-line bg-white/90 p-6 shadow-2xl shadow-navy/10 backdrop-blur">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-sm font-semibold">Lead-to-invoice workflow</p>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Running
            </span>
          </div>

          <ol className="relative space-y-3">
            <span className="absolute bottom-6 left-[21px] top-6 w-px bg-gradient-to-b from-brand/40 to-glow/40" />

            {steps.map(({ icon: Icon, label, tone }) => (
              <li
                key={label}
                className="relative flex items-center gap-3 rounded-2xl border border-line bg-white p-3"
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${tone}`}
                >
                  <Icon className="h-4 w-4" />
                </span>

                <span className="flex-1 text-sm font-medium">{label}</span>

                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              </li>
            ))}
          </ol>

          <p className="mt-5 rounded-xl bg-mist px-4 py-3 text-xs leading-5 text-body">
            Every step runs on its own, with no copy-pasting, no forgotten
            follow-ups and no manual data entry.
          </p>
        </div>

        <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-navy px-4 py-3 text-xs font-medium text-white shadow-xl sm:block">
          <span className="text-glow">●</span> Hours back to your team, every week
        </div>
      </div>
    </Container>
  </section>
)

export default Hero
