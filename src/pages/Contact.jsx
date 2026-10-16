import { useState } from "react"
import { CheckCircle2, Loader2, MessageSquare, Search, Rocket } from "lucide-react"
import { toast } from "sonner"

import PageHeader from "@/components/common/PageHeader"
import Reveal from "@/components/common/Reveal"
import { Section } from "@/components/common/Section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useSendMessage } from "@/hooks/useSiteData"
import Seo from "@/components/common/Seo"


const initial = { name: "", email: "", message: "", website: "" }

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

const next = [
  { icon: MessageSquare, text: "We read your message and review what you've described." },
  { icon: Search, text: "We reply by email, and if it's a fit we'll set up a short discovery call." },
  { icon: Rocket, text: "You get an honest view of what can be automated and how." },
]

const Contact = () => {

  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const mutation = useSendMessage()

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const validate = () => {
    const errs = {}
    if (values.name.trim().length < 2) errs.name = "Please enter your name."
    if (!emailOk(values.email.trim())) errs.email = "Please enter a valid email."
    if (values.message.trim().length < 10)
      errs.message = "Please tell us a little more (at least 10 characters)."
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Honeypot: real visitors never see or fill this field.
    if (values.website) return

    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length) return

    mutation.mutate(
      {
        name: values.name.trim(),
        email: values.email.trim(),
        message: values.message.trim(),
      },
      {
        onSuccess: () => {
          toast.success("Message sent. We'll be in touch soon.")
          setValues(initial)
          setSent(true)
        },
        onError: (error) => {
          toast.error(
            error.response?.data?.message ||
            "Something went wrong. Please try again."
          )
        },
      }
    )
  }

  const fieldClass = "rounded-xl border-line bg-white"

  return (
    <>
      <Seo
        title="Contact"
        path="/contact"
        description="Tell us about a process that slows your team down and we'll show you what can be automated. Book a free call."
      />
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your automation"
        description="Describe the process that's costing you time. No jargon needed. We'll take it from there."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            {sent ? (
              <div className="rounded-2xl border border-line bg-white p-10 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-500" />

                <h2 className="mt-4 text-2xl font-extrabold">Thank you!</h2>

                <p className="mt-2 text-sm leading-7 text-body">
                  We&apos;ve received your message and will reply by email.
                </p>

                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setSent(false)}
                  className="mt-6 rounded-full"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="relative space-y-5 rounded-2xl border border-line bg-white p-6 sm:p-8"
              >
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                    Your name
                  </label>

                  <Input
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    autoComplete="name"
                    aria-invalid={!!errors.name}
                    className={fieldClass}
                  />

                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                    Email address
                  </label>

                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    className={fieldClass}
                  />

                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                    What would you like to automate?
                  </label>

                  <Textarea
                    id="message"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    placeholder="Tell us about the process, the tools you use and what you'd like to improve..."
                    aria-invalid={!!errors.message}
                    className={`${fieldClass} min-h-40`}
                  />

                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
                  )}
                </div>

                {/* Honeypot field */}
                <input
                  type="text"
                  name="website"
                  value={values.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute -left-[9999px] h-0 w-0 opacity-0"
                />

                <Button
                  type="submit"
                  size="lg"
                  disabled={mutation.isPending}
                  className="w-full rounded-full bg-brand text-white hover:bg-brand-dark sm:w-auto sm:px-10"
                >
                  {mutation.isPending && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  {mutation.isPending ? "Sending..." : "Send message"}
                </Button>
              </form>
            )}
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl bg-navy p-8 text-white">
              <h2 className="text-xl font-extrabold">What happens next</h2>

              <ol className="mt-6 space-y-5">
                {next.map(({ icon: Icon, text }, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-glow">
                      <Icon className="h-5 w-5" />
                    </span>

                    <p className="text-sm leading-6 text-white/75">{text}</p>
                  </li>
                ))}
              </ol>

              <p className="mt-8 border-t border-white/10 pt-6 text-sm font-medium tracking-wide text-glow">
                Automate · Integrate · Grow
              </p>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  )
}

export default Contact
