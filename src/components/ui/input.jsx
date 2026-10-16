import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type = "text", ...props }, ref) => (
  <input
    ref={ref}
    type={type}
    className={cn(
      "flex h-11 w-full border px-3.5 py-2 text-base outline-none transition-colors placeholder:text-body/60 focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/20 aria-invalid:border-red-400 md:text-sm",
      className
    )}
    {...props}
  />
))
Input.displayName = "Input"

export { Input }
