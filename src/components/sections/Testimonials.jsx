import { Star } from "lucide-react"

import Reveal from "@/components/common/Reveal"
import {
  LoadError,
  Section,
  SectionHeading,
  SkeletonCard,
} from "@/components/common/Section"
import { useTestimonials } from "@/hooks/useSiteData"

const initials = (name = "") =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("")

const Testimonials = ({ limit = 6 }) => {
  const { data, isLoading, isError, refetch } = useTestimonials()

  // Hide the whole section quietly if there's nothing to show.
  if (!isLoading && !isError && (!data || data.length === 0)) return null

  return (
    <Section>
      <SectionHeading
        eyebrow="Testimonials"
        title="What clients say"
        description="The people we've worked with, in their own words."
      />

      {isLoading && (
        <div className="grid gap-5 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      )}

      {isError && (
        <LoadError
          message="We couldn't load testimonials right now."
          onRetry={refetch}
        />
      )}

      {data && data.length > 0 && (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {data.slice(0, limit).map((t, i) => (
            <Reveal key={t._id ?? t.fullName} delay={(i % 3) * 100}>
              <figure className="flex h-full flex-col rounded-2xl border border-line bg-white p-7">
                <div
                  className="mb-4 flex gap-0.5"
                  aria-label={`${t.rating} out of 5 stars`}
                >
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className={`h-4 w-4 ${
                        s < t.rating
                          ? "fill-amber-400 text-amber-400"
                          : "text-line"
                      }`}
                    />
                  ))}
                </div>

                <blockquote className="flex-1 text-sm leading-7 text-navy">
                  “{t.testimonial}”
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  {t.avatar ? (
                    <img
                      src={t.avatar}
                      alt={t.fullName}
                      loading="lazy"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand">
                      {initials(t.fullName)}
                    </span>
                  )}

                  <div>
                    <p className="text-sm font-semibold">{t.fullName}</p>
                    <p className="text-xs text-body">{t.position}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  )
}

export default Testimonials
