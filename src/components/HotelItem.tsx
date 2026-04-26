import { Hotel } from '../types'
import { Badge } from './ui/badge'
import { Star, MapPin, Users, Map, AlertCircle, Clock, StickyNote } from 'lucide-react'
import { useState, useEffect } from 'react'

interface HotelItemProps {
  hotel: Hotel
}

export default function HotelItem({ hotel }: HotelItemProps) {
  const [showMap, setShowMap] = useState(false)
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0 })
  const [showWarning, setShowWarning] = useState(false)

  useEffect(() => {
    if (hotel.cancellation?.freeUntil) {
      const calculateCountdown = () => {
        const deadline = new Date(hotel.cancellation!.freeUntil).getTime()
        const now = new Date().getTime()
        const diff = deadline - now

        if (diff > 0) {
          const days = Math.floor(diff / (1000 * 60 * 60 * 24))
          const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
          
          setCountdown({ days, hours, minutes })
          
          // 如果距离免费退改截止日期少于3天，显示警告
          if (days < 3) {
            setShowWarning(true)
          }
        } else {
          setCountdown({ days: 0, hours: 0, minutes: 0 })
          setShowWarning(true)
        }
      }

      calculateCountdown()
      const timer = setInterval(calculateCountdown, 60000) // 每分钟更新一次

      return () => clearInterval(timer)
    }
  }, [hotel.cancellation])

  const handleToggleMap = (e: React.MouseEvent) => {
    e.stopPropagation() // 防止事件冒泡
    if (hotel.lat && hotel.lng) {
      setShowMap(!showMap)
    }
  }

  // 使用 Google Maps 嵌入式地图
  const mapEmbedUrl = hotel.lat && hotel.lng
    ? `https://www.google.com/maps?q=${hotel.lat},${hotel.lng}&hl=zh-CN&z=15&output=embed`
    : null

  return (
    <div className="space-y-3">
      <div 
        className="rounded-xl border border-gray-100 p-5 bg-gradient-to-br from-white to-ocean-50/30 transition-shadow"
      >
        <div className="flex items-start justify-between flex-wrap gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h4 className="font-semibold text-gray-800 text-lg">{hotel.name}</h4>
              {showWarning && (
                <div className="relative">
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                </div>
              )}
              <div className="flex items-center gap-0.5">
                {Array.from({ length: hotel.stars }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            <div className="flex items-start gap-1.5 text-sm text-gray-500 mb-3">
              <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
              <div className="flex flex-col gap-0.5">
                <span>{hotel.address}</span>
                {hotel.addressEn && (
                  <span className="text-xs text-gray-400 italic">{hotel.addressEn}</span>
                )}
              </div>
            </div>

            {/* Cancellation Policy */}
            {hotel.cancellation && (
              <div className={`mb-3 p-3 rounded-lg border ${
                showWarning ? 'bg-red-50 border-red-200' : 'bg-blue-50 border-blue-200'
              }`}>
                <div className="flex items-start gap-2 mb-2">
                  <AlertCircle className={`w-4 h-4 mt-0.5 shrink-0 ${
                    showWarning ? 'text-red-600' : 'text-blue-600'
                  }`} />
                  <div className="flex-1">
                    <div className="font-semibold text-sm mb-1 flex items-center gap-2">
                      <span className={showWarning ? 'text-red-700' : 'text-blue-700'}>
                        免费取消倒计时
                      </span>
                      <Clock className="w-3.5 h-3.5" />
                    </div>
                    <div className={`text-lg font-bold ${
                      showWarning ? 'text-red-600' : 'text-blue-600'
                    }`}>
                      {countdown.days > 0 && `${countdown.days}天 `}
                      {countdown.hours}小时 {countdown.minutes}分钟
                    </div>
                  </div>
                </div>
                <div className="text-xs space-y-1 text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">✅ 免费取消截止：</span>
                    <span>{new Date(hotel.cancellation.freeUntil).toLocaleString('zh-CN', {
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">💰 取消费用：</span>
                    <span className="text-green-600 font-medium">{hotel.cancellation.freeCancellationFee}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">⚠️ 逾期取消：</span>
                    <span className="text-red-600 font-medium">{hotel.cancellation.afterDeadlineFee}</span>
                  </div>
                  {hotel.cancellation.notes && (
                    <div className="flex items-start gap-2 mt-2 pt-2 border-t border-gray-200">
                      <span className="font-medium">📌 备注：</span>
                      <span className="text-amber-700">{hotel.cancellation.notes}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-3">
              {hotel.features.map(feature => (
                <Badge key={feature} variant="outline" className="text-xs py-1">
                  {feature}
                </Badge>
              ))}
            </div>

            {/* Note */}
            {hotel.note && (
              <div className="mb-3 p-3 rounded-lg bg-amber-50 border border-amber-200">
                <div className="flex items-start gap-2">
                  <StickyNote className="w-4 h-4 mt-0.5 shrink-0 text-amber-600" />
                  <span className="text-sm text-amber-800">{hotel.note}</span>
                </div>
              </div>
            )}

            <div className="flex items-center gap-3 flex-wrap">
              {hotel.familyRoom && (
                <div className="flex items-center gap-1.5 text-sm text-emerald-600">
                  <Users className="w-4 h-4" />
                  <span className="font-medium">提供家庭房/家庭套房</span>
                </div>
              )}
              
              {hotel.lat && hotel.lng && (
                <button
                  onClick={handleToggleMap}
                  className="flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors px-3 py-1.5 rounded-lg hover:bg-blue-50"
                >
                  <Map className="w-4 h-4" />
                  <span>{showMap ? '收起地图' : '查看地图'}</span>
                </button>
              )}
            </div>
          </div>

          {/* Price */}
          <div className="text-right shrink-0">
            <p className="text-2xl font-bold text-primary">{hotel.priceRange.split('/')[0].replace('-', ' - ')}</p>
            <p className="text-xs text-gray-400">每晚</p>
          </div>
        </div>
      </div>

      {/* Embedded Google Maps */}
      {showMap && mapEmbedUrl && (
        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-lg">
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${hotel.name} 地图位置`}
          />
        </div>
      )}
    </div>
  )
}
