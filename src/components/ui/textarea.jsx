import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "flex w-full border px-3.5 py-3 text-base outline-none transition-colors placeholder:text-body/60 focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/20 aria-invalid:border-red-400 md:text-sm",
      className
    )}
    {...props}
  />
))
Textarea.displayName = "Textarea"

export { Textarea }
