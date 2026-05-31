import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Cloud, Droplets, Wind, Sun, Thermometer } from 'lucide-react'
import { fetchWeather, getWeatherInfo, WeatherData } from '../services/weatherService'

interface WeatherCardProps {
  cityId: string
  tripDate: string // 例如 "6月12日"
}

export default function WeatherCard({ cityId, tripDate }: WeatherCardProps) {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(false)

    fetchWeather(cityId, tripDate).then(data => {
      if (cancelled) return
      if (data) {
        setWeather(data)
      } else {
        setError(true)
      }
      setLoading(false)
    })

    return () => { cancelled = true }
  }, [cityId, tripDate])

  if (loading) {
    return (
      <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-100/50 animate-pulse">
        <Cloud className="w-5 h-5 text-blue-300" />
        <span className="text-sm text-blue-400">加载天气中...</span>
      </div>
    )
  }

  if (error || !weather) {
    return null
  }

  const weatherInfo = getWeatherInfo(weather.weatherCode)

  // 根据天气代码决定背景色
  const getBgGradient = (code: number) => {
    if (code <= 1) return 'from-amber-50 to-orange-50 border-amber-100/50'
    if (code <= 3) return 'from-blue-50 to-sky-50 border-blue-100/50'
    if (code >= 51 && code <= 67) return 'from-slate-50 to-blue-50 border-slate-200/50'
    if (code >= 71 && code <= 86) return 'from-indigo-50 to-blue-50 border-indigo-100/50'
    if (code >= 95) return 'from-gray-100 to-slate-100 border-gray-200/50'
    return 'from-blue-50 to-sky-50 border-blue-100/50'
  }

  const formatForecastLabel = () => {
    if (weather.isActualForecast) {
      return `${tripDate}天气预测`
    }
    // 显示去年同期参考天气
    const d = new Date(weather.forecastDate)
    const m = d.getMonth() + 1
    const day = d.getDate()
    const y = d.getFullYear()
    return `参考天气（${y}年${m}月${day}日同期历史）`
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`rounded-xl bg-gradient-to-r ${getBgGradient(weather.weatherCode)} border px-4 py-3`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-xl">{weatherInfo.icon}</span>
          <span className="text-sm font-semibold text-gray-700">{weatherInfo.description}</span>
        </div>
        <span className="text-xs text-gray-400 bg-white/60 px-2 py-0.5 rounded-full">
          {formatForecastLabel()}
        </span>
      </div>

      {/* Weather Details */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {/* 温度 */}
        <div className="flex items-center gap-1.5">
          <Thermometer className="w-3.5 h-3.5 text-red-400" />
          <div className="text-xs">
            <span className="font-bold text-gray-700">{Math.round(weather.temperatureMin)}°</span>
            <span className="text-gray-400 mx-0.5">~</span>
            <span className="font-bold text-red-500">{Math.round(weather.temperature)}°C</span>
          </div>
        </div>

        {/* 降水 */}
        <div className="flex items-center gap-1.5">
          <Droplets className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-xs text-gray-600">
            {weather.precipitation > 0 ? `${weather.precipitation.toFixed(1)}mm` : '无降水'}
          </span>
        </div>

        {/* 风速 */}
        <div className="flex items-center gap-1.5">
          <Wind className="w-3.5 h-3.5 text-teal-400" />
          <span className="text-xs text-gray-600">{Math.round(weather.windSpeed)} km/h</span>
        </div>

        {/* 紫外线 */}
        <div className="flex items-center gap-1.5">
          <Sun className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-xs text-gray-600">
            UV {weather.uvIndex.toFixed(0)}
            {weather.uvIndex >= 8 ? ' ⚠️' : weather.uvIndex >= 6 ? ' 🧴' : ''}
          </span>
        </div>
      </div>

      {/* 穿衣建议 */}
      <div className="mt-2 text-xs text-gray-500 italic">
        {getClothingSuggestion(weather.temperature, weather.temperatureMin)}
      </div>
    </motion.div>
  )
}

function getClothingSuggestion(maxTemp: number, minTemp: number): string {
  const avg = (maxTemp + minTemp) / 2
  if (avg >= 28) return '🌡️ 炎热天气，建议穿短袖、短裤，做好防晒'
  if (avg >= 22) return '☀️ 温暖舒适，建议穿薄长袖/短袖，带一件薄外套'
  if (avg >= 15) return '🧥 温度适中，建议穿长袖+薄外套，早晚偏凉'
  if (avg >= 8) return '🧣 较凉，建议穿毛衣+外套，山区需保暖衣物'
  if (avg >= 0) return '❄️ 寒冷，建议穿羽绒服/厚外套，注意保暖'
  return '🥶 极寒，建议穿厚羽绒服+帽子手套围巾'
}
