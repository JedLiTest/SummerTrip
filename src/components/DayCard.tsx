import { motion } from 'framer-motion'
import { MapPin, Bed, UtensilsCrossed, TrainFront, Clock } from 'lucide-react'
import { DayPlan } from '../types'
import { Card, CardContent, CardHeader } from './ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs'
import AttractionItem from './AttractionItem'
import HotelItem from './HotelItem'
import RestaurantItem from './RestaurantItem'
import TransportItem from './TransportItem'
import WeatherCard from './WeatherCard'
import DayTimeline from './DayTimeline'
import { timelineData } from '../data/timelineData'

interface DayCardProps {
  day: DayPlan
  index: number
}

export default function DayCard({ day, index }: DayCardProps) {
  const timeline = timelineData[day.day]
  const hasTimeline = timeline && timeline.length > 0

  // 计算tab列数
  const tabCount = 1 + (hasTimeline ? 1 : 0) + (day.hotel ? 1 : 0) + (day.restaurants && day.restaurants.length > 0 ? 1 : 0) + 1
  const gridClass = `grid-cols-${Math.min(tabCount, 5)}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden card-shadow hover:card-shadow-hover transition-shadow duration-300 border-0">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-bright text-white font-bold text-lg shadow-md shadow-primary/20">
                {day.day}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-gray-800">{day.title}</h3>
                </div>
                <p className="text-sm text-gray-500">{day.date} · Day {day.day}</p>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">{day.summary}</p>

          {/* 天气卡片 */}
          <div className="mt-3">
            <WeatherCard cityId={day.cityId} tripDate={day.date} />
          </div>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="attractions">
            <TabsList className={`w-full h-12 bg-gradient-to-r from-gray-50 to-gray-100/80 grid rounded-xl border border-gray-200/50`} style={{ gridTemplateColumns: `repeat(${tabCount}, 1fr)` }}>
              <TabsTrigger value="attractions" className="flex items-center gap-1.5 text-xs md:text-sm group">
                <MapPin className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span className="text-xs font-medium">景点</span>
              </TabsTrigger>
              {hasTimeline && (
                <TabsTrigger value="timeline" className="flex items-center gap-1.5 text-xs md:text-sm group">
                  <Clock className="w-4 h-4 transition-transform group-hover:scale-110" />
                  <span className="text-xs font-medium">行程</span>
                </TabsTrigger>
              )}
              {day.hotel && (
                <TabsTrigger value="hotel" className="flex items-center gap-1.5 text-xs md:text-sm group">
                  <Bed className="w-4 h-4 transition-transform group-hover:scale-110" />
                  <span className="text-xs font-medium">住宿</span>
                </TabsTrigger>
              )}
              {day.restaurants && day.restaurants.length > 0 && (
                <TabsTrigger value="food" className="flex items-center gap-1.5 text-xs md:text-sm group">
                  <UtensilsCrossed className="w-4 h-4 transition-transform group-hover:scale-110" />
                  <span className="text-xs font-medium">美食</span>
                </TabsTrigger>
              )}
              <TabsTrigger value="transport" className="flex items-center gap-1.5 text-xs md:text-sm group">
                <TrainFront className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span className="text-xs font-medium">交通</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="attractions">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
                {day.attractions.map((attraction) => (
                  <AttractionItem key={attraction.name} attraction={attraction} />
                ))}
              </div>
            </TabsContent>

            {hasTimeline && (
              <TabsContent value="timeline">
                <div className="mt-4">
                  <DayTimeline timeline={timeline} />
                </div>
              </TabsContent>
            )}

            {day.hotel && (
              <TabsContent value="hotel">
                <div className="mt-4">
                  <HotelItem hotel={day.hotel} />
                </div>
              </TabsContent>
            )}

            {day.restaurants && day.restaurants.length > 0 && (
              <TabsContent value="food">
                <div className="grid gap-4 md:grid-cols-2 mt-4">
                  {day.restaurants.map((restaurant) => (
                    <RestaurantItem key={restaurant.name} restaurant={restaurant} />
                  ))}
                </div>
              </TabsContent>
            )}

            <TabsContent value="transport">
              <div className="space-y-3 mt-4">
                {day.transport.map((t, i) => (
                  <TransportItem key={i} transport={t} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </motion.div>
  )
}
