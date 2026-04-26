import { cn } from '../lib/utils'
import { cities } from '../data/cities'
import { MapPin } from 'lucide-react'

interface NavigationProps {
  activeCity: string
}

export default function Navigation({ activeCity }: NavigationProps) {
  const handleClick = (cityId: string) => {
    const el = document.getElementById(`city-${cityId}`)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-16 gap-1 overflow-x-auto scrollbar-hide">
          {/* Logo */}
          <div className="flex items-center gap-2 mr-4 shrink-0">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-sm font-bold text-primary hidden md:block">
              法瑞之旅
            </span>
          </div>

          {/* Divider */}
          <div className="w-px h-8 bg-gray-200 mr-2 shrink-0" />

          {/* City tabs */}
          <div className="flex items-center gap-1">
            {cities.map((city) => (
              <button
                key={city.id}
                onClick={() => handleClick(city.id)}
                className={cn(
                  'relative flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer',
                  activeCity === city.id
                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                    : 'text-gray-600 hover:text-primary hover:bg-ocean-50'
                )}
              >
                <span>{city.name}</span>
                <span className={cn(
                  'text-xs px-1.5 py-0.5 rounded-full',
                  activeCity === city.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-100 text-gray-400'
                )}>
                  {city.days}天
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
