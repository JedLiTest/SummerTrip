import { motion } from 'framer-motion'
import { TimelineEvent } from '../types'
import {
  MapPin,
  Car,
  UtensilsCrossed,
  Bed,
  Plane,
  Coffee,
  Camera,
  Clock,
  Sun,
  Sunset,
  Moon,
  Train,
  Footprints
} from 'lucide-react'

interface DayTimelineProps {
  timeline: TimelineEvent[]
}

// 根据事件类型返回图标和颜色
function getEventStyle(event: TimelineEvent) {
  switch (event.type) {
    case 'attraction':
      return {
        icon: <MapPin className="w-3.5 h-3.5" />,
        bgColor: 'bg-blue-500',
        borderColor: 'border-blue-200',
        bgLight: 'bg-blue-50',
        textColor: 'text-blue-700',
        dotColor: 'bg-blue-500'
      }
    case 'transport':
      return {
        icon: <Car className="w-3.5 h-3.5" />,
        bgColor: 'bg-amber-500',
        borderColor: 'border-amber-200',
        bgLight: 'bg-amber-50',
        textColor: 'text-amber-700',
        dotColor: 'bg-amber-500'
      }
    case 'meal':
      return {
        icon: <UtensilsCrossed className="w-3.5 h-3.5" />,
        bgColor: 'bg-orange-500',
        borderColor: 'border-orange-200',
        bgLight: 'bg-orange-50',
        textColor: 'text-orange-700',
        dotColor: 'bg-orange-500'
      }
    case 'hotel':
      return {
        icon: <Bed className="w-3.5 h-3.5" />,
        bgColor: 'bg-purple-500',
        borderColor: 'border-purple-200',
        bgLight: 'bg-purple-50',
        textColor: 'text-purple-700',
        dotColor: 'bg-purple-500'
      }
    case 'flight':
      return {
        icon: <Plane className="w-3.5 h-3.5" />,
        bgColor: 'bg-sky-500',
        borderColor: 'border-sky-200',
        bgLight: 'bg-sky-50',
        textColor: 'text-sky-700',
        dotColor: 'bg-sky-500'
      }
    case 'free':
      return {
        icon: <Coffee className="w-3.5 h-3.5" />,
        bgColor: 'bg-emerald-500',
        borderColor: 'border-emerald-200',
        bgLight: 'bg-emerald-50',
        textColor: 'text-emerald-700',
        dotColor: 'bg-emerald-500'
      }
    case 'rest':
      return {
        icon: <Moon className="w-3.5 h-3.5" />,
        bgColor: 'bg-indigo-500',
        borderColor: 'border-indigo-200',
        bgLight: 'bg-indigo-50',
        textColor: 'text-indigo-700',
        dotColor: 'bg-indigo-500'
      }
    default:
      return {
        icon: <Clock className="w-3.5 h-3.5" />,
        bgColor: 'bg-gray-500',
        borderColor: 'border-gray-200',
        bgLight: 'bg-gray-50',
        textColor: 'text-gray-700',
        dotColor: 'bg-gray-500'
      }
  }
}

// 获取时间段图标（早上/下午/晚上）
function getTimeOfDayIcon(time: string) {
  const hour = parseInt(time.split(':')[0])
  if (hour < 12) return <Sun className="w-3 h-3 text-yellow-500" />
  if (hour < 18) return <Sunset className="w-3 h-3 text-orange-500" />
  return <Moon className="w-3 h-3 text-indigo-500" />
}

// 获取自定义emoji图标
function getCustomIcon(event: TimelineEvent, style: ReturnType<typeof getEventStyle>) {
  if (event.icon) {
    return <span className="text-sm leading-none">{event.icon}</span>
  }
  // 根据标题智能匹配图标
  const title = event.title.toLowerCase()
  if (title.includes('火车') || title.includes('齿轨') || title.includes('rer') || title.includes('火车站')) return <Train className="w-3.5 h-3.5" />
  if (title.includes('步行') || title.includes('漫步') || title.includes('散步') || title.includes('徒步')) return <Footprints className="w-3.5 h-3.5" />
  if (title.includes('拍照') || title.includes('摄影') || title.includes('日出') || title.includes('日落') || title.includes('观景')) return <Camera className="w-3.5 h-3.5" />
  if (title.includes('航班') || title.includes('飞') || title.includes('机场')) return <Plane className="w-3.5 h-3.5" />
  return style.icon
}

export default function DayTimeline({ timeline }: DayTimelineProps) {
  if (!timeline || timeline.length === 0) return null

  return (
    <div className="space-y-0">
      {timeline.map((event, index) => {
        const style = getEventStyle(event)
        const isLast = index === timeline.length - 1

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="relative flex gap-3"
          >
            {/* 时间轴线和圆点 */}
            <div className="flex flex-col items-center pt-1">
              <div className={`w-7 h-7 rounded-full ${style.bgColor} flex items-center justify-center text-white shadow-sm flex-shrink-0 z-10`}>
                {getCustomIcon(event, style)}
              </div>
              {!isLast && (
                <div className="w-0.5 bg-gray-200 flex-grow min-h-[16px] mt-1" />
              )}
            </div>

            {/* 内容 */}
            <div className={`flex-grow pb-4 ${isLast ? 'pb-1' : ''}`}>
              <div className={`rounded-lg border ${style.borderColor} ${style.bgLight} p-2.5 transition-all hover:shadow-sm`}>
                {/* 头部：时间 + 标题 */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-grow min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className={`text-xs font-bold ${style.textColor} font-mono bg-white/70 px-1.5 py-0.5 rounded flex items-center gap-1`}>
                        {getTimeOfDayIcon(event.time)}
                        {event.time}{event.endTime ? ` - ${event.endTime}` : ''}
                      </span>
                      {event.duration && (
                        <span className="text-[10px] text-gray-400 flex items-center gap-0.5">
                          <Clock className="w-2.5 h-2.5" />{event.duration}
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm font-semibold text-gray-800 mt-1 leading-snug">
                      {event.icon && <span className="mr-1">{event.icon}</span>}
                      {event.title}
                    </h4>
                  </div>
                </div>

                {/* 描述 */}
                {event.description && (
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    {event.description}
                  </p>
                )}

                {/* 地点标签 */}
                {event.location && (
                  <div className="flex items-center gap-1 mt-1.5">
                    <MapPin className="w-2.5 h-2.5 text-gray-400" />
                    <span className="text-[10px] text-gray-400">{event.location}</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
