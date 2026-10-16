import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { ArrowRight, Menu } from "lucide-react"

import Logo from "@/components/common/Logo"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export const navLinks = [
  { name: "Home", to: "/" },
  { name: "Services", to: "/services" },
  { name: "Work", to: "/work" },
  { name: "Process", to: "/process" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-line bg-white/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo />

        {/* Desktop links */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-brand/10 text-brand"
                    : "text-body hover:text-navy"
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            asChild
            className="rounded-full bg-navy px-5 text-white hover:bg-navy-800"
          >
            <Link to="/contact">
              Book a free call
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Open menu"
              className="rounded-lg p-2 text-navy lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>

          <SheetContent side="right" className="w-72 bg-white">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <SheetDescription className="sr-only">
              Site navigation
            </SheetDescription>

            <div className="mt-10 flex flex-col gap-1 px-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "rounded-xl px-4 py-3 text-base font-medium",
                      isActive ? "bg-brand/10 text-brand" : "text-navy"
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <Button
                asChild
                onClick={() => setOpen(false)}
                className="mt-4 rounded-full bg-brand text-white hover:bg-brand-dark"
              >
                <Link to="/contact">Book a free call</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default Navbar
