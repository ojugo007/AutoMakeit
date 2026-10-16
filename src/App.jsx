import { BrowserRouter, Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "sonner"

import SiteLayout from "@/components/layout/SiteLayout"
import Home from "@/pages/Home"
import About from "@/pages/About"
import Services from "@/pages/Services"
import Work from "@/pages/Work"
import ProcessPage from "@/pages/ProcessPage"
import Contact from "@/pages/Contact"
import NotFound from "@/pages/NotFound"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
  },
})

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>

    <Toaster richColors position="top-right" />
  </QueryClientProvider>
)

export default App
