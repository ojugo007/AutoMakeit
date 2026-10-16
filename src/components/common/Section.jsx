import { cn } from "@/lib/utils"
import Reveal from "@/components/common/Reveal"

export const Container = ({ className, children }) => (
  <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>
    {children}
  </div>
)

export const Section = ({ className, tone = "light", children, id }) => (
  <section
    id={id}
    className={cn(
      "py-20 sm:py-24",
      tone === "mist" && "bg-mist",
      tone === "dark" && "bg-navy text-white",
      className
    )}
  >
    <Container>{children}</Container>
  </section>
)

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}) => (
  <Reveal
    className={cn(
      "mb-12 max-w-2xl",
      align === "center" && "mx-auto text-center"
    )}
  >
    {eyebrow && (
      <p
        className={cn(
          "mb-3 text-xs font-semibold uppercase tracking-[0.2em]",
          dark ? "text-glow" : "text-brand"
        )}
      >
        {eyebrow}
      </p>
    )}

    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
      {title}
    </h2>

    {description && (
      <p
        className={cn(
          "mt-4 text-base leading-7",
          dark ? "text-white/70" : "text-body"
        )}
      >
        {description}
      </p>
    )}
  </Reveal>
)

export const LoadError = ({ message = "We couldn't load this right now.", onRetry }) => (
  <div className="rounded-2xl border border-dashed border-line bg-white p-8 text-center">
    <p className="text-sm text-body">{message}</p>

    {onRetry && (
      <button
        type="button"
        onClick={onRetry}
        className="mt-3 text-sm font-semibold text-brand hover:underline"
      >
        Try again
      </button>
    )}
  </div>
)

export const SkeletonCard = ({ className }) => (
  <div
    className={cn(
      "animate-pulse rounded-2xl border border-line bg-white p-6",
      className
    )}
  >
    <div className="mb-5 h-11 w-11 rounded-xl bg-mist" />
    <div className="mb-3 h-4 w-2/3 rounded bg-mist" />
    <div className="mb-2 h-3 w-full rounded bg-mist" />
    <div className="h-3 w-4/5 rounded bg-mist" />
  </div>
)
