import { useEffect, useState, useRef } from 'react'

export function useScrollSpy(sectionIds: string[], offset = 120) {
  const [activeId, setActiveId] = useState<string>('')
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const elements = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    if (elements.length === 0) return

    observer.current = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter(entry => entry.isIntersecting)
        if (visibleEntries.length > 0) {
          const sorted = visibleEntries.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          )
          setActiveId(sorted[0].target.id)
        }
      },
      {
        rootMargin: `-${offset}px 0px -50% 0px`,
        threshold: 0,
      }
    )

    elements.forEach(el => observer.current?.observe(el))

    return () => {
      observer.current?.disconnect()
    }
  }, [sectionIds, offset])

  return activeId
}
