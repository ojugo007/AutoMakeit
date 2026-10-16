import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

import Reveal from "@/components/common/Reveal"
import {
  LoadError,
  Section,
  SectionHeading,
  SkeletonCard,
} from "@/components/common/Section"
import { useProjects } from "@/hooks/useSiteData"

const FeaturedProjects = ({ limit = 3 }) => {
  const { data, isLoading, isError, refetch } = useProjects()

  return (
    <Section tone="mist">
      <SectionHeading
        eyebrow="Selected work"
        title="Automations we've built"
        description="Real workflows, real results. Here are a few of the systems we've delivered."
      />

      {isLoading && (
        <div className="grid gap-5 md:grid-cols-3">
          {Array.from({ length: limit }).map((_, i) => (
            <SkeletonCard key={i} className="h-72" />
          ))}
        </div>
      )}

      {isError && (
        <LoadError
          message="We couldn't load our projects right now."
          onRetry={refetch}
        />
      )}

      {data && data.length > 0 && (
        <div className="grid gap-5 md:grid-cols-3">
          {data.slice(0, limit).map((project, i) => (
            <Reveal key={project._id ?? project.projectTitle} delay={i * 100}>
              <Link
                to="/work"
                className="group block h-full overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10"
              >
                <div className="aspect-[16/10] overflow-hidden bg-mist">
                  <img
                    src={project.projectImage}
                    alt={project.projectTitle}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold">{project.projectTitle}</h3>

                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-body">
                    {project.projectDesc}
                  </p>

                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                    View case study
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      )}

      <div className="mt-10 text-center">
        <Link
          to="/work"
          className="text-sm font-semibold text-brand hover:underline"
        >
          View all projects →
        </Link>
      </div>
    </Section>
  )
}

export default FeaturedProjects
