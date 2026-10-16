import { Link } from "react-router-dom"

import Hero from "@/components/sections/Hero"
import WhoWeHelp from "@/components/sections/WhoWeHelp"
import ServicesGrid from "@/components/sections/ServicesGrid"
import Process from "@/components/sections/Process"
import FeaturedProjects from "@/components/sections/FeaturedProjects"
import Testimonials from "@/components/sections/Testimonials"
import CTA from "@/components/sections/CTA"
import { Section, SectionHeading } from "@/components/common/Section"
import { usePageTitle } from "@/hooks/usePageTitle"

const Home = () => {
  usePageTitle()

  return (
    <>
      <Hero />

      <Section>
        <SectionHeading
          eyebrow="What we do"
          title="Automation across your whole business"
          description="From the first enquiry to the final invoice, we connect your tools and remove the manual work in between."
        />

        <ServicesGrid limit={6} />

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="text-sm font-semibold text-brand hover:underline"
          >
            Explore all services →
          </Link>
        </div>
      </Section>

      <WhoWeHelp />
      <Process />
      <FeaturedProjects limit={3} />
      <Testimonials limit={3} />
      <CTA />
    </>
  )
}

export default Home
