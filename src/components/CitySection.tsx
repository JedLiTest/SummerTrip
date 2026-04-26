import { motion } from 'framer-motion'
import { City, DayPlan } from '../types'
import DayCard from './DayCard'
import { Badge } from './ui/badge'

interface CitySectionProps {
  city: City
  days: DayPlan[]
  dayStartIndex: number
}

export default function CitySection({ city, days, dayStartIndex }: CitySectionProps) {
  return (
    <section id={`city-${city.id}`} className="scroll-mt-24">
      {/* City Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="relative rounded-2xl overflow-hidden mb-8 card-shadow"
      >
        {/* City banner image */}
        <div className="relative h-48 md:h-64">
          <img
            src={city.imageUrl}
            alt={city.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          {/* City info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="flex items-end justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-white/20 text-white border-0">
                    {city.country}
                  </Badge>
                  <Badge variant="secondary" className="bg-white/20 text-white border-0">
                    Day {dayStartIndex + 1}-{dayStartIndex + city.days}
                  </Badge>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {city.name}
                  <span className="text-lg font-normal text-white/60 ml-3">{city.nameEn}</span>
                </h2>
                <p className="text-white/80 text-sm md:text-base max-w-2xl mt-2">
                  {city.description}
                </p>
              </div>
              <div className="hidden md:flex items-center gap-2 shrink-0">
                {city.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="border-white/30 text-white/80 text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Day Cards */}
      <div className="space-y-6">
        {days.map((day, i) => (
          <DayCard key={day.day} day={day} index={i} />
        ))}
      </div>
    </section>
  )
}
