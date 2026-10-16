import {
  Workflow,
  Target,
  Receipt,
  BarChart3,
  Bot,
  Mail,
  Plug,
  FileText,
  Headset,
  UserCheck,
  Globe,
  CalendarClock,
} from "lucide-react"

// Services come from the API as { serviceType, description } with no icon,
// so we pick one by keyword. Add keywords here as new services appear.
const rules = [
  [["crm", "lead", "sales", "pipeline"], Target],
  [["invoice", "payment", "finance", "billing", "account"], Receipt],
  [["report", "dashboard", "analytic", "data"], BarChart3],
  [["ai", "chatbot", "agent", "gpt", "llm"], Bot],
  [["email", "marketing", "campaign", "newsletter"], Mail],
  [["integrat", "api", "sync", "connect"], Plug],
  [["document", "pdf", "form", "contract"], FileText],
  [["support", "ticket", "customer", "helpdesk"], Headset],
  [["hr", "onboard", "recruit", "payroll"], UserCheck],
  [["web", "scrap", "browser"], Globe],
  [["schedul", "calendar", "booking", "appointment"], CalendarClock],
]

export const getServiceIcon = (serviceType = "") => {
  const text = serviceType.toLowerCase()
  const match = rules.find(([keywords]) =>
    keywords.some((k) => text.includes(k))
  )
  return match ? match[1] : Workflow
}
