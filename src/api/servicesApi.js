import { api } from "@/lib/api"

export const getServices = async () => {
  const response = await api.get("/service")
  return response.data
}
