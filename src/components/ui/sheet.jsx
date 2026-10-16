import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Sheet = SheetPrimitive.Root
const SheetTrigger = SheetPrimitive.Trigger
const SheetClose = SheetPrimitive.Close

const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-navy/60 backdrop-blur-sm", className)}
    {...props}
  />
))
SheetOverlay.displayName = "SheetOverlay"

const sides = {
  right: "inset-y-0 right-0 h-full border-l",
  left: "inset-y-0 left-0 h-full border-r",
}

const SheetContent = React.forwardRef(
  ({ side = "right", className, children, ...props }, ref) => (
    <SheetPrimitive.Portal>
      <SheetOverlay />
      <SheetPrimitive.Content
        ref={ref}
        className={cn(
          "fixed z-50 flex max-w-[85vw] flex-col gap-4 border-line bg-white p-0 shadow-2xl",
          sides[side],
          className
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className="absolute right-4 top-4 rounded-full bg-mist p-2 text-navy hover:bg-line">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPrimitive.Portal>
  )
)
SheetContent.displayName = "SheetContent"

const SheetTitle = React.forwardRef(({ className, ...props }, ref) => (
  <SheetPrimitive.Title ref={ref} className={cn("font-semibold", className)} {...props} />
))
SheetTitle.displayName = "SheetTitle"

const SheetDescription = React.forwardRef(({ className, ...props }, ref) => (
  <SheetPrimitive.Description ref={ref} className={cn("text-sm", className)} {...props} />
))
SheetDescription.displayName = "SheetDescription"

export { Sheet, SheetTrigger, SheetClose, SheetContent, SheetTitle, SheetDescription }
