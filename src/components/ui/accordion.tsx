import * as React from "react"
import { cn } from "../../lib/utils"
import { ChevronDown } from "lucide-react"

interface AccordionContextValue {
  openItems: string[]
  toggleItem: (value: string) => void
  type: "single" | "multiple"
}

const AccordionContext = React.createContext<AccordionContextValue>({
  openItems: [],
  toggleItem: () => {},
  type: "single",
})

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple"
  defaultValue?: string[]
  collapsible?: boolean
}

function Accordion({ type = "single", defaultValue = [], className, children, ...props }: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<string[]>(defaultValue)

  const toggleItem = React.useCallback((value: string) => {
    setOpenItems(prev => {
      if (type === "single") {
        return prev.includes(value) ? [] : [value]
      }
      return prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
    })
  }, [type])

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, type }}>
      <div className={cn("w-full", className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

function AccordionItem({ value, className, children, ...props }: AccordionItemProps) {
  return (
    <div className={cn("border-b border-gray-200", className)} data-value={value} {...props}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<{ itemValue?: string }>, { itemValue: value })
        }
        return child
      })}
    </div>
  )
}

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  itemValue?: string
}

function AccordionTrigger({ itemValue, className, children, ...props }: AccordionTriggerProps) {
  const { openItems, toggleItem } = React.useContext(AccordionContext)
  const isOpen = itemValue ? openItems.includes(itemValue) : false

  return (
    <button
      className={cn(
        "flex flex-1 w-full items-center justify-between py-4 font-medium transition-all hover:text-primary",
        className
      )}
      onClick={() => itemValue && toggleItem(itemValue)}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn("h-4 w-4 shrink-0 transition-transform duration-200", isOpen && "rotate-180")}
      />
    </button>
  )
}

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  itemValue?: string
}

function AccordionContent({ itemValue, className, children, ...props }: AccordionContentProps) {
  const { openItems } = React.useContext(AccordionContext)
  const isOpen = itemValue ? openItems.includes(itemValue) : false

  if (!isOpen) return null

  return (
    <div className={cn("pb-4 pt-0 text-sm text-gray-600", className)} {...props}>
      {children}
    </div>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
