import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/common/Section"
import { usePageTitle } from "@/hooks/usePageTitle"

const NotFound = () => {
  usePageTitle("Page not found")

  return (
    <section className="py-32">
      <Container className="text-center">
        <p className="font-display text-7xl font-extrabold text-gradient">404</p>

        <h1 className="mt-4 text-2xl font-extrabold">Page not found</h1>

        <p className="mt-2 text-body">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>

        <Button
          asChild
          className="mt-8 rounded-full bg-brand text-white hover:bg-brand-dark"
        >
          <Link to="/">Back to home</Link>
        </Button>
      </Container>
    </section>
  )
}

export default NotFound
