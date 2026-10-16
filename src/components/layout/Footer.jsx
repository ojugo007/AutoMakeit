import { Link } from "react-router-dom"

import Logo from "@/components/common/Logo"
import { navLinks } from "@/components/layout/Navbar"

const Footer = () => (
  <footer className="relative overflow-hidden bg-navy text-white">
    <div className="bg-grid-dark pointer-events-none absolute inset-0" />

    <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo dark />

          <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
            We help startups, growing businesses and large enterprises
            automate repetitive work, connect their tools and scale without
            adding headcount.
          </p>

          <p className="mt-6 text-sm font-medium tracking-wide text-glow">
            Automate · Integrate · Grow
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            Explore
          </h3>

          <ul className="space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-white/70 transition-colors hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            Let&apos;s talk
          </h3>

          <p className="text-sm leading-7 text-white/70">
            Have a process that eats your team&apos;s time? Tell us about it
            and we&apos;ll show you what can be automated.
          </p>

          <Link
            to="/contact"
            className="mt-4 inline-block text-sm font-semibold text-glow hover:underline"
          >
            Start a conversation →
          </Link>
        </div>
      </div>

      <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
        <p>© {new Date().getFullYear()} AutoMakeIt Systems. All rights reserved.</p>
        <p>Built to save you time.</p>
      </div>
    </div>
  </footer>
)

export default Footer
