import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'
import { bookingItems, BookingItem } from '../data/bookingData'
import { Ticket, CalendarClock, ExternalLink, CheckCircle2, AlertTriangle, Clock, ChevronDown, ChevronUp, Filter } from 'lucide-react'

type WeekRange = { label: string; startDay: number; endDay: number }

const weekRanges: WeekRange[] = [
  { label: '第1周 (Day 1-7)', startDay: 1, endDay: 7 },
  { label: '第2周 (Day 8-15)', startDay: 8, endDay: 15 },
  { label: '全部', startDay: 1, endDay: 15 },
]

type FilterType = 'all' | 'pending' | 'booked'

const urgencyConfig = {
  critical: { label: '必须', color: 'bg-red-500', textColor: 'text-red-400', borderColor: 'border-red-500/30', bgColor: 'bg-red-500/10' },
  recommended: { label: '建议', color: 'bg-amber-500', textColor: 'text-amber-400', borderColor: 'border-amber-500/30', bgColor: 'bg-amber-500/10' },
  optional: { label: '可选', color: 'bg-gray-500', textColor: 'text-gray-400', borderColor: 'border-gray-500/30', bgColor: 'bg-gray-500/10' },
}

const typeConfig = {
  ticket: { label: '购票', icon: '🎫' },
  reservation: { label: '预约', icon: '📋' },
  rental: { label: '租车', icon: '🚗' },
  pass: { label: '通票', icon: '🎟️' },
}

const statusConfig = {
  pending: { label: '待办', icon: <Clock className="w-4 h-4" />, color: 'text-amber-400' },
  booked: { label: '已订', icon: <CheckCircle2 className="w-4 h-4" />, color: 'text-emerald-400' },
  not_needed: { label: '无需', icon: <CheckCircle2 className="w-4 h-4" />, color: 'text-gray-500' },
}

function BookingCard({ item, onToggleStatus }: { item: BookingItem; onToggleStatus: (id: string) => void }) {
  const [expanded, setExpanded] = useState(false)
  const urgency = urgencyConfig[item.urgency]
  const type = typeConfig[item.type]
  const status = statusConfig[item.status]

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-xl border ${item.status === 'booked' ? 'border-emerald-500/20 bg-emerald-500/5' : urgency.borderColor + ' ' + urgency.bgColor} p-4 transition-all hover:bg-white/5`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <span className="text-lg">{type.icon}</span>
            <h4 className="font-semibold text-white text-sm md:text-base truncate">{item.attractionName}</h4>
          </div>
          <div className="flex items-center gap-3 text-xs text-gray-400 flex-wrap">
            <span className="flex items-center gap-1">
              <CalendarClock className="w-3 h-3" />
              Day {item.day} · {item.date}
            </span>
            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${urgency.color} text-white`}>
              {urgency.label}
            </span>
            <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${item.status === 'booked' ? 'border-emerald-500/50 text-emerald-400' : 'border-amber-500/50 text-amber-400'}`}>
              {type.label}
            </span>
          </div>
        </div>

        {/* Status toggle */}
        <button
          onClick={() => onToggleStatus(item.id)}
          className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
            item.status === 'booked'
              ? 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30'
              : 'bg-white/10 text-gray-400 hover:bg-white/20'
          }`}
        >
          {status.icon}
          <span>{status.label}</span>
        </button>
      </div>

      {/* Price & Tip preview */}
      <div className="mt-3 flex items-center justify-between">
        <span className="text-primary-bright font-bold text-sm">{item.price}</span>
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-300 transition-colors cursor-pointer"
        >
          <span>{expanded ? '收起' : '详情'}</span>
          {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        </button>
      </div>

      {/* Expanded details */}
      {expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-3 pt-3 border-t border-white/10 space-y-2"
        >
          <p className="text-sm text-gray-300">{item.bookingTip}</p>
          {item.deadlineNote && (
            <div className="flex items-start gap-2 text-xs text-amber-400">
              <AlertTriangle className="w-3.5 h-3.5 mt-0.5 shrink-0" />
              <span>{item.deadlineNote}</span>
            </div>
          )}
          {item.advanceDays > 0 && (
            <p className="text-xs text-gray-500">⏰ 建议提前 {item.advanceDays} 天预订</p>
          )}
          {item.bookingUrl && (
            <a
              href={item.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-primary-bright hover:underline mt-1"
            >
              <ExternalLink className="w-3 h-3" />
              前往购票/预约
            </a>
          )}
        </motion.div>
      )}
    </motion.div>
  )
}

export default function BookingReminder() {
  const [selectedWeek, setSelectedWeek] = useState<WeekRange>(weekRanges[0])
  const [filter, setFilter] = useState<FilterType>('all')
  const [bookingStatuses, setBookingStatuses] = useState<Record<string, BookingItem['status']>>(() => {
    const initial: Record<string, BookingItem['status']> = {}
    bookingItems.forEach(item => { initial[item.id] = item.status })
    return initial
  })

  const filteredItems = useMemo(() => {
    let items = bookingItems
      .filter(item => item.day >= selectedWeek.startDay && item.day <= selectedWeek.endDay)
      .map(item => ({ ...item, status: bookingStatuses[item.id] || item.status }))

    if (filter === 'pending') {
      items = items.filter(item => item.status === 'pending')
    } else if (filter === 'booked') {
      items = items.filter(item => item.status === 'booked')
    }

    return items
  }, [selectedWeek, filter, bookingStatuses])

  const stats = useMemo(() => {
    const weekItems = bookingItems
      .filter(item => item.day >= selectedWeek.startDay && item.day <= selectedWeek.endDay)
      .map(item => ({ ...item, status: bookingStatuses[item.id] || item.status }))
    
    return {
      total: weekItems.length,
      pending: weekItems.filter(i => i.status === 'pending').length,
      booked: weekItems.filter(i => i.status === 'booked').length,
      critical: weekItems.filter(i => i.status === 'pending' && i.urgency === 'critical').length,
    }
  }, [selectedWeek, bookingStatuses])

  const handleToggleStatus = (id: string) => {
    setBookingStatuses(prev => ({
      ...prev,
      [id]: prev[id] === 'booked' ? 'pending' : 'booked'
    }))
  }

  return (
    <section className="bg-surface-dark py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Ticket className="w-8 h-8 text-primary-bright" />
              <h2 className="text-3xl font-bold text-white">购票 & 预约提醒</h2>
            </div>
            <p className="text-gray-400">提前规划，从容出行 — 标记已预订的项目，追踪待办事项</p>
          </div>

          {/* Week Selector */}
          <div className="flex justify-center gap-2 mb-6">
            {weekRanges.map(week => (
              <button
                key={week.label}
                onClick={() => setSelectedWeek(week)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  selectedWeek.label === week.label
                    ? 'bg-primary-bright text-white shadow-md'
                    : 'bg-white/10 text-gray-400 hover:bg-white/20'
                }`}
              >
                {week.label}
              </button>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            <div className="bg-white/5 rounded-xl p-3 text-center">
              <div className="text-2xl font-bold text-white">{stats.total}</div>
              <div className="text-xs text-gray-400">总项目</div>
            </div>
            <div className="bg-white/5 rounded-xl p-3 text-center">
              <div className="text-2xl font-bold text-amber-400">{stats.pending}</div>
              <div className="text-xs text-gray-400">待办</div>
            </div>
            <div className="bg-white/5 rounded-xl p-3 text-center">
              <div className="text-2xl font-bold text-emerald-400">{stats.booked}</div>
              <div className="text-xs text-gray-400">已订</div>
            </div>
            <div className="bg-white/5 rounded-xl p-3 text-center">
              <div className={`text-2xl font-bold ${stats.critical > 0 ? 'text-red-400' : 'text-emerald-400'}`}>{stats.critical}</div>
              <div className="text-xs text-gray-400">紧急待办</div>
            </div>
          </div>

          {/* Filter */}
          <div className="flex items-center gap-2 mb-6">
            <Filter className="w-4 h-4 text-gray-500" />
            {[
              { key: 'all' as FilterType, label: '全部' },
              { key: 'pending' as FilterType, label: '待办' },
              { key: 'booked' as FilterType, label: '已订' },
            ].map(f => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  filter === f.key
                    ? 'bg-primary-bright/20 text-primary-bright border border-primary-bright/30'
                    : 'bg-white/5 text-gray-500 hover:bg-white/10'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Booking Cards */}
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map(item => (
              <BookingCard
                key={item.id}
                item={item}
                onToggleStatus={handleToggleStatus}
              />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
              <p className="text-gray-400">
                {filter === 'pending' ? '🎉 太棒了！该时间段所有项目都已预订完成！' : '没有找到匹配的项目'}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
