import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import Reveal from "@/components/common/Reveal"
import { Container } from "@/components/common/Section"

const CTA = ({
  title = "Ready to get your time back?",
  text = "Tell us about a process that slows your team down. We'll tell you honestly what can be automated and what it would take.",
}) => (
  <section className="py-20 sm:py-24">
    <Container>
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-16 text-center text-white sm:px-12">
          <div className="bg-grid-dark pointer-events-none absolute inset-0" />
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-brand/40 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              {title}
            </h2>

            <p className="mt-4 leading-7 text-white/70">{text}</p>

            <Button
              asChild
              size="lg"
              className="mt-8 rounded-full bg-brand px-8 text-white hover:bg-brand-dark"
            >
              <Link to="/contact">
                Book a free call
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </Container>
  </section>
)

export default CTA
