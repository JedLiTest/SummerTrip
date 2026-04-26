export interface Attraction {
  name: string
  nameEn: string
  description: string
  imageUrl: string
  duration: string
  familyFriendly: boolean
  tags: string[]
}

export interface Hotel {
  name: string
  stars: number
  priceRange: string
  address: string
  addressEn?: string
  familyRoom: boolean
  features: string[]
  lat?: number
  lng?: number
  note?: string
  cancellation?: {
    freeUntil: string  // ISO格式日期时间
    freeCancellationFee: string
    afterDeadlineFee: string
    notes?: string
  }
}

export interface Restaurant {
  name: string
  cuisine: string
  priceLevel: 1 | 2 | 3 | 4
  specialties: string[]
  kidFriendly: boolean
  address?: string
  addressEn?: string
  lat?: number
  lng?: number
  reservation?: {
    date: string
    time: string
    guests: number
    platform?: string
    confirmed: boolean
    notes?: string
  }
  cancellation?: {
    freeUntil: string
    freeCancellationFee: string
    afterDeadlineFee: string
    notes?: string
  }
}

export interface Transport {
  type: 'train' | 'bus' | 'walk' | 'boat' | 'cable-car' | 'cable' | 'flight' | 'car'
  from: string
  to: string
  duration: string
  cost: string
  bookingTip?: string
}

export interface TimelineEvent {
  time: string           // 如 '09:00' 或 '09:00-12:00'
  endTime?: string       // 结束时间，如 '12:00'
  title: string          // 活动标题
  description?: string   // 简短描述
  type: 'attraction' | 'transport' | 'meal' | 'hotel' | 'flight' | 'free' | 'rest'
  icon?: string          // emoji图标
  duration?: string      // 持续时间
  location?: string      // 地点
}

export interface DayPlan {
  day: number
  date: string
  cityId: string
  title: string
  summary: string
  attractions: Attraction[]
  hotel?: Hotel
  restaurants?: Restaurant[]
  transport: Transport[]
  timeline?: TimelineEvent[]
}

export interface City {
  id: string
  name: string
  nameEn: string
  country: string
  description: string
  lat: number
  lng: number
  days: number
  tags: string[]
  imageUrl: string
}

export interface BudgetItem {
  category: string
  icon: string
  amount: number
  currency: string
  color: string
}

export interface TipCategory {
  id: string
  title: string
  icon: string
  tips: string[]
}
