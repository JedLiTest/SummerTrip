import { Restaurant } from '../types'
import { Badge } from './ui/badge'
import { Euro, Baby, MapPin, Map, AlertCircle, Clock, CalendarCheck } from 'lucide-react'
import { useState, useEffect } from 'react'

interface RestaurantItemProps {
  restaurant: Restaurant
}

export default function RestaurantItem({ restaurant }: RestaurantItemProps) {
  const [showMap, setShowMap] = useState(false)
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0 })
  const [showWarning, setShowWarning] = useState(false)

  useEffect(() => {
    if (restaurant.cancellation?.freeUntil) {
      const calculateCountdown = () => {
        const deadline = new Date(restaurant.cancellation!.freeUntil).getTime()
        const now = new Date().getTime()
        const diff = deadline - now

        if (diff > 0) {
          const days = Math.floor(diff / (1000 * 60 * 60 * 24))
          const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
          
          setCountdown({ days, hours, minutes })
          
          if (days < 3) {
            setShowWarning(true)
          }
        } else {
          setCountdown({ days: 0, hours: 0, minutes: 0 })
          setShowWarning(true)
        }
      }

      calculateCountdown()
      const timer = setInterval(calculateCountdown, 60000)

      return () => clearInterval(timer)
    }
  }, [restaurant.cancellation])

  const handleToggleMap = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (restaurant.lat && restaurant.lng) {
      setShowMap(!showMap)
    }
  }

  const mapEmbedUrl = restaurant.lat && restaurant.lng
    ? `https://www.google.com/maps?q=${restaurant.lat},${restaurant.lng}&hl=zh-CN&z=16&output=embed`
    : null

  // 判断是否为"增强版"餐厅卡片（有预订或地址信息）
  const isEnhanced = restaurant.address || restaurant.reservation || restaurant.cancellation

  if (!isEnhanced) {
    // 简单版：保持原有的简洁卡片
    return (
      <div className="rounded-xl border border-gray-100 p-4 hover:border-primary-bright/30 hover:shadow-md transition-all bg-white">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h4 className="font-semibold text-gray-800">{restaurant.name}</h4>
            <p className="text-sm text-gray-500">{restaurant.cuisine}</p>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            {Array.from({ length: restaurant.priceLevel }).map((_, i) => (
              <Euro key={i} className="w-3.5 h-3.5 text-amber-500" />
            ))}
            {Array.from({ length: 3 - restaurant.priceLevel }).map((_, i) => (
              <Euro key={i} className="w-3.5 h-3.5 text-gray-200" />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {restaurant.specialties.map(item => (
            <Badge key={item} variant="secondary" className="text-xs">
              {item}
            </Badge>
          ))}
        </div>

        {restaurant.kidFriendly && (
          <div className="flex items-center gap-1.5 text-xs text-emerald-600">
            <Baby className="w-3.5 h-3.5" />
            <span>适合儿童就餐</span>
          </div>
        )}
      </div>
    )
  }

  // 增强版：类似住宿卡片的丰富展示
  return (
    <div className="space-y-3">
      <div className="rounded-xl border border-gray-100 p-5 bg-gradient-to-br from-white to-orange-50/30 transition-shadow">
        <div className="flex items-start justify-between flex-wrap gap-3">
          <div className="flex-1">
            {/* 餐厅名称 + 价格等级 */}
            <div className="flex items-center gap-2 mb-2">
              <h4 className="font-semibold text-gray-800 text-lg">{restaurant.name}</h4>
              {showWarning && (
                <div className="relative">
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                </div>
              )}
              <div className="flex items-center gap-0.5">
                {Array.from({ length: restaurant.priceLevel }).map((_, i) => (
                  <Euro key={i} className="w-3.5 h-3.5 text-amber-500" />
                ))}
              </div>
            </div>

            {/* 菜系 */}
            <p className="text-sm text-gray-500 mb-2">{restaurant.cuisine}</p>

            {/* 地址 */}
            {restaurant.address && (
              <div className="flex items-start gap-1.5 text-sm text-gray-500 mb-3">
                <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <span>{restaurant.address}</span>
                  {restaurant.addressEn && (
                    <span className="text-xs text-gray-400 italic">{restaurant.addressEn}</span>
                  )}
                </div>
              </div>
            )}

            {/* 预订信息 */}
            {restaurant.reservation && (
              <div className="mb-3 p-3 rounded-lg bg-green-50 border border-green-200">
                <div className="flex items-start gap-2 mb-2">
                  <CalendarCheck className="w-4 h-4 mt-0.5 shrink-0 text-green-600" />
                  <div className="flex-1">
                    <div className="font-semibold text-sm text-green-700 mb-1">
                      {restaurant.reservation.confirmed ? '✅ 预订已确认' : '⏳ 预订待确认'}
                    </div>
                  </div>
                </div>
                <div className="text-xs space-y-1 text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">📅 日期：</span>
                    <span>{restaurant.reservation.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">🕐 时间：</span>
                    <span>{restaurant.reservation.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">👥 人数：</span>
                    <span>{restaurant.reservation.guests}人</span>
                  </div>
                  {restaurant.reservation.platform && (
                    <div className="flex items-center gap-2">
                      <span className="font-medium">🌐 平台：</span>
                      <span>{restaurant.reservation.platform}</span>
                    </div>
                  )}
                  {restaurant.reservation.notes && (
                    <div className="flex items-start gap-2 mt-2 pt-2 border-t border-green-200">
                      <span className="font-medium">📌 备注：</span>
                      <span className="text-green-700">{restaurant.reservation.notes}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 取消政策 */}
            {restaurant.cancellation && (
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
                    <span>{new Date(restaurant.cancellation.freeUntil).toLocaleString('zh-CN', {
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">💰 取消费用：</span>
                    <span className="text-green-600 font-medium">{restaurant.cancellation.freeCancellationFee}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">⚠️ 逾期取消/未出席：</span>
                    <span className="text-red-600 font-medium">{restaurant.cancellation.afterDeadlineFee}</span>
                  </div>
                  {restaurant.cancellation.notes && (
                    <div className="flex items-start gap-2 mt-2 pt-2 border-t border-gray-200">
                      <span className="font-medium">📌 备注：</span>
                      <span className="text-amber-700">{restaurant.cancellation.notes}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 特色菜 */}
            <div className="flex flex-wrap gap-2 mb-3">
              {restaurant.specialties.map(item => (
                <Badge key={item} variant="secondary" className="text-xs py-1">
                  {item}
                </Badge>
              ))}
            </div>

            {/* 底部功能区 */}
            <div className="flex items-center gap-3 flex-wrap">
              {restaurant.kidFriendly && (
                <div className="flex items-center gap-1.5 text-sm text-emerald-600">
                  <Baby className="w-4 h-4" />
                  <span className="font-medium">适合儿童就餐</span>
                </div>
              )}
              
              {restaurant.lat && restaurant.lng && (
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
        </div>
      </div>

      {/* 嵌入式 Google Maps */}
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
            title={`${restaurant.name} 地图位置`}
          />
        </div>
      )}
    </div>
  )
}
