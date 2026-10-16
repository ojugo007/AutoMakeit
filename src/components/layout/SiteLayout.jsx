import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"

import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [pathname])

  return null
}

const SiteLayout = () => (
  <div className="flex min-h-screen flex-col bg-white">
    <ScrollToTop />
    <Navbar />

    <main className="flex-1">
      <Outlet />
    </main>

    <Footer />
  </div>
)

export default SiteLayout
