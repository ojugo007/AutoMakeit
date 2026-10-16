import Reveal from "@/components/common/Reveal"
import { LoadError, SkeletonCard } from "@/components/common/Section"
import { useServices } from "@/hooks/useSiteData"
import { getServiceIcon } from "@/lib/serviceIcon"

const ServicesGrid = ({ limit }) => {
  const { data, isLoading, isError, refetch } = useServices()

  if (isLoading) {
    return (
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: limit ?? 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    )
  }

  if (isError) {
    return (
      <LoadError
        message="We couldn't load our services right now."
        onRetry={refetch}
      />
    )
  }

  const services = limit ? data.slice(0, limit) : data

  if (!services.length) {
    return <LoadError message="Services will be listed here soon." />
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, i) => {
        const Icon = getServiceIcon(service.serviceType)

        return (
          <Reveal key={service._id ?? service.serviceType} delay={(i % 3) * 100}>
            <div className="group h-full rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/10">
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <Icon className="h-6 w-6" />
              </span>

              <h3 className="text-lg font-bold">{service.serviceType}</h3>

              <p className="mt-2 text-sm leading-7 text-body">
                {service.description}
              </p>
            </div>
          </Reveal>
        )
      })}
    </div>
  )
}

export default ServicesGrid
