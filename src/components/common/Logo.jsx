import { Link } from "react-router-dom"

// Simple SVG stand-in for the logo mark (an "A" with a rising arrow).
// To use the real artwork, drop it in /public/logo-mark.png and replace
// <LogoMark /> below with <img src="/logo-mark.png" alt="" className="h-8 w-8" />.
export const LogoMark = ({ className = "h-8 w-8" }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
    <path
      d="M8 42 21 6h6l13 36h-7.5L24 17l-8.5 25H8Z"
      fill="currentColor"
    />
    <path
      d="M4 35c10 6 27 2 36-19"
      stroke="#2563EB"
      strokeWidth="3.2"
      strokeLinecap="round"
    />
    <path d="m33.5 13.5 10-4.5-2 11-8-6.5Z" fill="#2563EB" />
  </svg>
)

const Logo = ({ dark = false, withTagline = false }) => (
  <Link
    to="/"
    className={`inline-flex items-center gap-2.5 ${
      dark ? "text-white" : "text-navy"
    }`}
    aria-label="AutoMakeIt Systems home"
  >
    <LogoMark />

    <span className="leading-none">
      <span className="block font-display text-[19px] font-extrabold tracking-tight">
        Auto<span className="text-brand">Make</span>It
      </span>

      <span
        className={`mt-1 block text-[9px] font-medium uppercase tracking-[0.32em] ${
          dark ? "text-white/60" : "text-body"
        }`}
      >
        Systems
      </span>
    </span>

    {withTagline && (
      <span className="sr-only">Automate. Integrate. Grow.</span>
    )}
  </Link>
)

export default Logo
