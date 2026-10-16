export const SITE_URL = (
  import.meta.env.VITE_SITE_URL ||
  (typeof window !== "undefined" ? window.location.origin : "")
).replace(/\/$/, "")

export const SITE_NAME = "AutoMakeIt Systems"
export const DEFAULT_TITLE = "AutoMakeIt Systems | Business Process Automation Agency"
export const DEFAULT_DESCRIPTION =
  "AutoMakeIt Systems helps startups, growing businesses and enterprises automate repetitive work, connect their tools and scale. Automate. Integrate. Grow."
export const OG_IMAGE = `${SITE_URL}/og-image.png`