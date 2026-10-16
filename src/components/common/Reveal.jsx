import { useReveal } from "@/hooks/useReveal"
import { cn } from "@/lib/utils"

const Reveal = ({ children, delay = 0, className, as: Tag = "div" }) => {
  const { ref, visible } = useReveal()

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out",
        "motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none",
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className
      )}
    >
      {children}
    </Tag>
  )
}

export default Reveal
