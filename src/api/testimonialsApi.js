import { api } from "@/lib/api"

export const getTestimonials = async () => {
  const response = await api.get("/testimonial")
  return response.data
}
