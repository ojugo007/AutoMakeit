import { useState } from "react"
import { ArrowRight } from "lucide-react"

import PageHeader from "@/components/common/PageHeader"
import Reveal from "@/components/common/Reveal"
import {
  LoadError,
  Section,
  SkeletonCard,
} from "@/components/common/Section"
import CTA from "@/components/sections/CTA"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useProjects } from "@/hooks/useSiteData"
import { usePageTitle } from "@/hooks/usePageTitle"

const Block = ({ label, children }) =>
  children ? (
    <div>
      <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-brand">
        {label}
      </p>
      <div className="text-sm leading-7 text-body">{children}</div>
    </div>
  ) : null

const Work = () => {
  usePageTitle("Our work")

  const [selected, setSelected] = useState(null)
  const { data, isLoading, isError, refetch } = useProjects()

  const cs = selected?.caseStudy

  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title="Automations in action"
        description="A look at the workflows and systems we've built, and the problems they solved."
      />

      <Section>
        {isLoading && (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
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

        {data && data.length === 0 && (
          <LoadError message="Projects will be showcased here soon." />
        )}

        {data && data.length > 0 && (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {data.map((project, i) => (
              <Reveal
                key={project._id ?? project.projectTitle}
                delay={(i % 3) * 100}
              >
                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  className="group block h-full w-full overflow-hidden rounded-2xl border border-line bg-white text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10"
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
                    <h3 className="text-lg font-bold">
                      {project.projectTitle}
                    </h3>

                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-body">
                      {project.projectDesc}
                    </p>

                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                      {project.caseStudy ? "Read case study" : "View details"}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        )}
      </Section>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-h-[88vh] overflow-y-auto sm:max-w-3xl">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-2xl font-extrabold">
                  {selected.projectTitle}
                </DialogTitle>

                <DialogDescription className="text-body">
                  {selected.projectDesc}
                </DialogDescription>
              </DialogHeader>

              <img
                src={selected.projectImage}
                alt={selected.projectTitle}
                className="aspect-[16/9] w-full rounded-xl object-cover"
              />

              {cs && (
                <div className="space-y-6">
                  <Block label="Overview">{cs.overview}</Block>
                  <Block label="The challenge">{cs.challenge}</Block>
                  <Block label="Our solution">{cs.solution}</Block>

                  {cs.workflow?.length > 0 && (
                    <Block label="How it works">
                      <ol className="list-decimal space-y-1.5 pl-5">
                        {cs.workflow.map((step, i) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ol>
                    </Block>
                  )}

                  {cs.technologies?.length > 0 && (
                    <Block label="Technologies">
                      <div className="flex flex-wrap gap-2">
                        {cs.technologies.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </Block>
                  )}

                  {cs.results?.length > 0 && (
                    <Block label="Results">
                      <ul className="list-disc space-y-1.5 pl-5">
                        {cs.results.map((r, i) => (
                          <li key={i}>{r}</li>
                        ))}
                      </ul>
                    </Block>
                  )}

                  <Block label="Key takeaway">{cs.takeaway}</Block>
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>

      <CTA
        title="Have a process like this?"
        text="Tell us what's slowing your team down and we'll map out how to automate it."
      />
    </>
  )
}

export default Work
