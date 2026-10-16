import { useMutation, useQuery } from "@tanstack/react-query"

import { getServices } from "@/api/servicesApi"
import { getProjects } from "@/api/projectsApi"
import { getTestimonials } from "@/api/testimonialsApi"
import { sendMessage } from "@/api/messageApi"
import { toList } from "@/lib/api"

const options = {
  staleTime: 1000 * 60 * 10,
  // The backend may be on a free tier that sleeps, so retry a couple of times.
  retry: 2,
  retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 8000),
}

export const useServices = () =>
  useQuery({
    queryKey: ["services"],
    queryFn: getServices,
    select: toList,
    ...options,
  })

export const useProjects = () =>
  useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
    select: (res) =>
      [...toList(res)].sort((a, b) => (a.order ?? 0) - (b.order ?? 0)),
    ...options,
  })

export const useTestimonials = () =>
  useQuery({
    queryKey: ["testimonials"],
    queryFn: getTestimonials,
    select: toList,
    ...options,
  })

export const useSendMessage = () =>
  useMutation({
    mutationFn: sendMessage,
  })
