import axios from "axios"

// Set VITE_API_URL in .env to override (no trailing slash).
export const API_URL =
  import.meta.env.VITE_API_URL ?? "https://portfolio-backend-zj29.onrender.com"

export const api = axios.create({ baseURL: API_URL })

// The backend replies with { message, data, success, code }.
// Treat success: false as an error so the UI shows its error state.
api.interceptors.response.use((response) => {
  if (response.data && response.data.success === false) {
    const error = new Error(response.data.message || "Request failed")
    error.response = response
    return Promise.reject(error)
  }
  return response
})

// Lists live in the envelope's `data` field. A bare array is also accepted.
export const toList = (res) =>
  Array.isArray(res) ? res : Array.isArray(res?.data) ? res.data : []
