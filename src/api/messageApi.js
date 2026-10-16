import { api } from "@/lib/api"

export const sendMessage = async ({ name, email, message }) => {
  const response = await api.post("/message/send-message", {
    name,
    email,
    message,
  })
  return response.data
}
