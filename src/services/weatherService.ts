import { cities } from '../data/cities'

export interface WeatherData {
  temperature: number       // 最高温度 °C
  temperatureMin: number    // 最低温度 °C
  weatherCode: number       // WMO天气代码
  windSpeed: number         // 风速 km/h
  humidity: number          // 相对湿度 %
  precipitation: number     // 降水量 mm
  uvIndex: number           // 紫外线指数
  date: string              // 日期 YYYY-MM-DD
  isActualForecast: boolean // true: 行程当天预报; false: 去年同期历史参考
  forecastDate: string      // 实际查询的日期
}

// WMO天气代码映射到描述和图标
export function getWeatherInfo(code: number): { description: string; icon: string } {
  const weatherMap: Record<number, { description: string; icon: string }> = {
    0: { description: '晴朗', icon: '☀️' },
    1: { description: '大部晴朗', icon: '🌤️' },
    2: { description: '局部多云', icon: '⛅' },
    3: { description: '多云', icon: '☁️' },
    45: { description: '有雾', icon: '🌫️' },
    48: { description: '雾凇', icon: '🌫️' },
    51: { description: '轻微细雨', icon: '🌦️' },
    53: { description: '中等细雨', icon: '🌦️' },
    55: { description: '浓密细雨', icon: '🌧️' },
    56: { description: '冻细雨', icon: '🌧️' },
    57: { description: '强冻细雨', icon: '🌧️' },
    61: { description: '小雨', icon: '🌧️' },
    63: { description: '中雨', icon: '🌧️' },
    65: { description: '大雨', icon: '🌧️' },
    66: { description: '冻雨', icon: '🌧️' },
    67: { description: '强冻雨', icon: '🌧️' },
    71: { description: '小雪', icon: '🌨️' },
    73: { description: '中雪', icon: '🌨️' },
    75: { description: '大雪', icon: '❄️' },
    77: { description: '雪粒', icon: '❄️' },
    80: { description: '阵雨', icon: '🌦️' },
    81: { description: '中阵雨', icon: '🌧️' },
    82: { description: '强阵雨', icon: '🌧️' },
    85: { description: '阵雪', icon: '🌨️' },
    86: { description: '强阵雪', icon: '❄️' },
    95: { description: '雷暴', icon: '⛈️' },
    96: { description: '雷暴+冰雹', icon: '⛈️' },
    99: { description: '强雷暴+冰雹', icon: '⛈️' },
  }
  return weatherMap[code] || { description: '未知', icon: '🌡️' }
}

/**
 * 解析行程日期字符串 (格式: "6月12日")
 */
function parseTripDate(tripDateStr: string): { year: number; month: number; day: number } | null {
  const match = tripDateStr.match(/(\d+)月(\d+)日/)
  if (!match) return null
  return { year: 2026, month: parseInt(match[1]), day: parseInt(match[2]) }
}

/**
 * 计算实际要查询的天气日期
 * - 行程日期 - 今日 <= 14天: 查询行程当天实际天气预测
 * - 行程日期 - 今日 > 14天: 使用去年同期历史天气作为参考
 */
function getQueryDate(tripDateStr: string): { queryDate: string; isActualForecast: boolean; useHistorical: boolean } {
  const parsed = parseTripDate(tripDateStr)
  if (!parsed) {
    const today = new Date()
    const fallback = new Date(today.getTime() + 15 * 86400000)
    return { queryDate: formatDate(fallback), isActualForecast: false, useHistorical: false }
  }

  const { year, month, day } = parsed
  const tripDate = new Date(year, month - 1, day)
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const diffDays = Math.floor((tripDate.getTime() - today.getTime()) / 86400000)

  if (diffDays <= 14) {
    // Open-Meteo 预报 API 最多可靠支持约14天的预报数据
    return { queryDate: formatDate(tripDate), isActualForecast: true, useHistorical: false }
  } else {
    // 使用去年同期的日期作为历史参考
    const lastYearDate = new Date(year - 1, month - 1, day)
    return { queryDate: formatDate(lastYearDate), isActualForecast: false, useHistorical: true }
  }
}

function formatDate(date: Date): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

// 缓存机制
const cache: Record<string, { data: WeatherData; timestamp: number }> = {}
const CACHE_DURATION = 30 * 60 * 1000 // 30分钟缓存

/**
 * 获取某天某城市的天气
 */
export async function fetchWeather(cityId: string, tripDateStr: string): Promise<WeatherData | null> {
  const city = cities.find(c => c.id === cityId)
  if (!city) return null

  const { queryDate, isActualForecast, useHistorical } = getQueryDate(tripDateStr)
  const cacheKey = `${cityId}_${queryDate}`

  // 检查缓存
  if (cache[cacheKey] && Date.now() - cache[cacheKey].timestamp < CACHE_DURATION) {
    return { ...cache[cacheKey].data, isActualForecast, forecastDate: queryDate }
  }

  try {
    let url: string

    if (useHistorical) {
      // 使用 Open-Meteo 历史天气 API（archive）
      url = `https://archive-api.open-meteo.com/v1/archive?latitude=${city.lat}&longitude=${city.lng}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max&hourly=relative_humidity_2m&start_date=${queryDate}&end_date=${queryDate}&timezone=auto`
    } else {
      // 使用预报 API
      url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lng}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max,uv_index_max&hourly=relative_humidity_2m&start_date=${queryDate}&end_date=${queryDate}&timezone=auto`
    }

    const res = await fetch(url)
    if (!res.ok) throw new Error(`Weather API error: ${res.status}`)

    const json = await res.json()
    const daily = json.daily

    if (!daily || !daily.time || daily.time.length === 0) return null

    // 检查 daily 数据是否有有效值（Open-Meteo 有时返回 null daily 数据）
    if (daily.temperature_2m_max[0] == null || daily.temperature_2m_min[0] == null || daily.weather_code[0] == null) {
      // 如果预报数据为 null，尝试回退到历史 API 获取去年同期数据
      if (!useHistorical) {
        const parsed = parseTripDate(tripDateStr)
        if (!parsed) return null
        const lastYearDate = new Date(parsed.year - 1, parsed.month - 1, parsed.day)
        const fallbackDate = formatDate(lastYearDate)
        const fallbackUrl = `https://archive-api.open-meteo.com/v1/archive?latitude=${city.lat}&longitude=${city.lng}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max&hourly=relative_humidity_2m&start_date=${fallbackDate}&end_date=${fallbackDate}&timezone=auto`
        const fallbackRes = await fetch(fallbackUrl)
        if (fallbackRes.ok) {
          const fallbackJson = await fallbackRes.json()
          const fbDaily = fallbackJson.daily
          if (fbDaily && fbDaily.time?.length > 0 && fbDaily.temperature_2m_max[0] != null) {
            let fbHumidity = 50
            if (fallbackJson.hourly?.relative_humidity_2m) {
              const humArr = fallbackJson.hourly.relative_humidity_2m as number[]
              fbHumidity = humArr[12] ?? humArr[0] ?? 50
            }
            const fbData: WeatherData = {
              temperature: fbDaily.temperature_2m_max[0],
              temperatureMin: fbDaily.temperature_2m_min[0],
              weatherCode: fbDaily.weather_code[0],
              windSpeed: fbDaily.wind_speed_10m_max[0],
              humidity: fbHumidity,
              precipitation: fbDaily.precipitation_sum[0] ?? 0,
              uvIndex: 6,
              date: fbDaily.time[0],
              isActualForecast: false,
              forecastDate: fallbackDate,
            }
            cache[cacheKey] = { data: fbData, timestamp: Date.now() }
            return fbData
          }
        }
      }
      return null
    }

    // 取中午12点的湿度作为代表
    let humidity = 50
    if (json.hourly?.relative_humidity_2m) {
      const humidityArr = json.hourly.relative_humidity_2m as number[]
      humidity = humidityArr[12] ?? humidityArr[0] ?? 50
    }

    const weatherData: WeatherData = {
      temperature: daily.temperature_2m_max[0],
      temperatureMin: daily.temperature_2m_min[0],
      weatherCode: daily.weather_code[0],
      windSpeed: daily.wind_speed_10m_max[0],
      humidity,
      precipitation: daily.precipitation_sum[0] ?? 0,
      uvIndex: useHistorical ? 6 : (daily.uv_index_max?.[0] ?? 0), // 历史API不含UV，用默认值
      date: daily.time[0],
      isActualForecast,
      forecastDate: queryDate,
    }

    // 存入缓存
    cache[cacheKey] = { data: weatherData, timestamp: Date.now() }

    return weatherData
  } catch (err) {
    console.error('Failed to fetch weather:', err)
    return null
  }
}
