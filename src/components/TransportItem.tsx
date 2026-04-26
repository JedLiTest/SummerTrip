import { Transport } from '../types'
import { Badge } from './ui/badge'
import { TrainFront, Bus, Footprints, Ship, CableCar, Plane, ArrowRight, Lightbulb } from 'lucide-react'

interface TransportItemProps {
  transport: Transport
}

const transportIcons: Record<string, typeof TrainFront> = {
  train: TrainFront,
  bus: Bus,
  walk: Footprints,
  boat: Ship,
  'cable-car': CableCar,
  flight: Plane,
}

const transportColors: Record<string, string> = {
  train: 'bg-blue-50 text-blue-600 border-blue-200',
  bus: 'bg-green-50 text-green-600 border-green-200',
  walk: 'bg-amber-50 text-amber-600 border-amber-200',
  boat: 'bg-cyan-50 text-cyan-600 border-cyan-200',
  'cable-car': 'bg-purple-50 text-purple-600 border-purple-200',
  flight: 'bg-red-50 text-red-600 border-red-200',
}

const transportLabels: Record<string, string> = {
  train: '火车',
  bus: '巴士/地铁',
  walk: '步行',
  boat: '游船',
  'cable-car': '缆车',
  flight: '航班',
}

export default function TransportItem({ transport }: TransportItemProps) {
  const Icon = transportIcons[transport.type] || TrainFront
  const colorClass = transportColors[transport.type] || transportColors.train

  return (
    <div className="rounded-xl border border-gray-100 p-4 hover:shadow-md transition-all bg-white">
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className={`shrink-0 w-10 h-10 rounded-lg border flex items-center justify-center ${colorClass}`}>
          <Icon className="w-5 h-5" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <Badge variant="outline" className="text-xs">
              {transportLabels[transport.type]}
            </Badge>
            <span className="text-sm font-medium text-gray-700">{transport.from}</span>
            <ArrowRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            <span className="text-sm font-medium text-gray-700">{transport.to}</span>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
            <span>⏱ {transport.duration}</span>
            <span>💰 {transport.cost}</span>
          </div>

          {transport.bookingTip && (
            <div className="flex items-start gap-1.5 mt-2 text-xs text-amber-700 bg-amber-50 rounded-lg p-2">
              <Lightbulb className="w-3.5 h-3.5 shrink-0 mt-0.5" />
              <span>{transport.bookingTip}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
