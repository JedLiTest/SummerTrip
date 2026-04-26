import { Attraction } from '../types'
import { Badge } from './ui/badge'
import { Clock, Heart } from 'lucide-react'

interface AttractionItemProps {
  attraction: Attraction
}

export default function AttractionItem({ attraction }: AttractionItemProps) {
  return (
    <div className="group rounded-xl overflow-hidden border border-gray-100 hover:border-primary-bright/30 transition-all duration-300 hover:shadow-md bg-white">
      {/* Image */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={attraction.imageUrl}
          alt={attraction.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {attraction.familyFriendly && (
          <div className="absolute top-2 right-2">
            <Badge variant="success" className="flex items-center gap-1">
              <Heart className="w-3 h-3" />
              亲子
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h4 className="font-semibold text-gray-800 mb-1">{attraction.name}</h4>
        <p className="text-xs text-gray-400 mb-2">{attraction.nameEn}</p>
        <p className="text-sm text-gray-600 line-clamp-2 mb-3 leading-relaxed">{attraction.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <Clock className="w-3.5 h-3.5" />
            <span>{attraction.duration}</span>
          </div>
          <div className="flex gap-1">
            {attraction.tags.slice(0, 2).map(tag => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
