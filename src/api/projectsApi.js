import { api } from "@/lib/api"

export const getProjects = async () => {
  const response = await api.get("/project")
  return response.data
}
