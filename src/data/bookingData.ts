export interface BookingItem {
  id: string
  day: number
  date: string           // 游览日期，如 '6月13日'
  attractionName: string // 景点名称
  attractionNameEn: string
  type: 'ticket' | 'reservation' | 'rental' | 'pass'  // 购票 / 预约 / 租车 / 通票
  urgency: 'critical' | 'recommended' | 'optional'     // 必须 / 建议 / 可选
  status: 'pending' | 'booked' | 'not_needed'           // 待办 / 已订 / 无需
  price: string          // 价格信息
  bookingUrl?: string    // 购票链接
  bookingTip: string     // 购票建议
  advanceDays: number    // 建议提前天数
  deadlineNote?: string  // 截止提醒
  cityId: string
}

export const bookingItems: BookingItem[] = [
  // === Day 1: 航班 ===
  {
    id: 'flight-hk-paris',
    day: 1,
    date: '6月12日',
    attractionName: '法航 AF185 香港→巴黎',
    attractionNameEn: 'Air France AF185',
    type: 'ticket',
    urgency: 'critical',
    status: 'booked',
    price: '¥8,000-15,000/人',
    bookingUrl: 'https://www.airfrance.com.cn',
    bookingTip: '已购票，记得提前在线值机（起飞前30小时开放）',
    advanceDays: 90,
    cityId: 'paris'
  },

  // === Day 2: 巴黎景点 ===
  {
    id: 'louvre',
    day: 2,
    date: '6月13日',
    attractionName: '卢浮宫（⚠️ 每周二闭馆）',
    attractionNameEn: 'Louvre Museum',
    type: 'reservation',
    urgency: 'critical',
    status: 'booked',
    price: '€22/人（18岁以下免费）',
    bookingUrl: 'https://www.louvre.fr/en/visit/tickets',
    bookingTip: '✅ 已预订13:00场次入场。⚠️ 每周二闭馆，6月13日为周六，正常开放',
    advanceDays: 30,
    deadlineNote: '已预订 13:00 时段',
    cityId: 'paris'
  },
  {
    id: 'eiffel-tower',
    day: 2,
    date: '6月13日',
    attractionName: '埃菲尔铁塔',
    attractionNameEn: 'Eiffel Tower',
    type: 'ticket',
    urgency: 'recommended',
    status: 'pending',
    price: '€29.4/人（电梯到顶）',
    bookingUrl: 'https://www.toureiffel.paris/en',
    bookingTip: '强烈建议网上购票，现场排队1-2小时。如只在外围拍照可不购票。全年开放，无固定闭馆日',
    advanceDays: 60,
    deadlineNote: '最早提前60天开售，开售即抢',
    cityId: 'paris'
  },

  // === Day 3: 奥赛博物馆 ===
  {
    id: 'orsay',
    day: 3,
    date: '6月14日',
    attractionName: '奥赛博物馆（⚠️ 每周一闭馆）',
    attractionNameEn: 'Musée d\'Orsay',
    type: 'ticket',
    urgency: 'recommended',
    status: 'booked',
    price: '€16/人（18岁以下免费）',
    bookingUrl: 'https://www.musee-orsay.fr/en/visit/tickets',
    bookingTip: '✅ 门票已订。⚠️ 每周一闭馆，6月14日为周日，正常开放。2026年翻修中，需强制预约时段（timed entry），入口改在塞纳河一侧',
    advanceDays: 14,
    cityId: 'paris'
  },

  // === Day 3: 橘园美术馆（从Day 4移到Day 3，与奥赛衔接） ===
  {
    id: 'orangerie',
    day: 3,
    date: '6月14日',
    attractionName: '橘园美术馆（⚠️ 每周二闭馆）',
    attractionNameEn: 'Musée de l\'Orangerie',
    type: 'ticket',
    urgency: 'optional',
    status: 'pending',
    price: '€12.5/人（18岁以下免费）',
    bookingUrl: 'https://www.musee-orangerie.fr/en/visit/tickets',
    bookingTip: '可现场购票，人流不多。与奥赛联票€20更划算。⚠️ 每周二闭馆，6月14日为周日，正常开放',
    advanceDays: 7,
    cityId: 'paris'
  },
  {
    id: 'notre-dame',
    day: 3,
    date: '6月14日',
    attractionName: '巴黎圣母院（已预约15:45入场）',
    attractionNameEn: 'Notre-Dame de Paris',
    type: 'reservation',
    urgency: 'critical',
    status: 'booked',
    price: '免费（需预约）',
    bookingUrl: 'https://www.notredamedeparis.fr',
    bookingTip: '✅ 已预约6月14日15:45入场（Shaojun Yun名义）。务必准时到达，迟到作废',
    advanceDays: 30,
    deadlineNote: '已预约15:45，需准时',
    cityId: 'paris'
  },

  // === Day 5: 凡尔赛宫 + 莫奈花园（6月16日周二，已购票） ===
  {
    id: 'versailles',
    day: 5,
    date: '6月16日',
    attractionName: '凡尔赛宫（⚠️ 每周一闭馆）',
    attractionNameEn: 'Palace of Versailles',
    type: 'reservation',
    urgency: 'critical',
    status: 'booked',
    price: '含中文人工讲解（成人2+儿童2）',
    bookingUrl: 'https://www.chateauversailles.fr/en/plan-your-visit/tickets-and-prices',
    bookingTip: '✅ 已购票10:20场含中文人工讲解服务。成人票2份+儿童票2份（需陪同人员）。⚠️ 每周一闭馆，6月16日为周二，正常开放',
    advanceDays: 30,
    deadlineNote: '已购票 10:20 含中文讲解',
    cityId: 'paris'
  },
  {
    id: 'monet-garden',
    day: 5,
    date: '6月16日',
    attractionName: '莫奈花园（吉维尼）',
    attractionNameEn: 'Giverny - Monet\'s Garden',
    type: 'ticket',
    urgency: 'critical',
    status: 'booked',
    price: '成人票 × 4份',
    bookingUrl: 'https://fondation-monet.com/en/informations-pratiques/',
    bookingTip: '✅ 已购票15:30场（4份）。凡尔赛结束后火车前往Vernon-Giverny。返程火车17:57→18:49到Saint-Lazare',
    advanceDays: 14,
    deadlineNote: '已购票 15:30 场',
    cityId: 'paris'
  },
  {
    id: 'vallee-village',
    day: 5,
    date: '6月16日',
    attractionName: 'La Vallée Village 购物卡',
    attractionNameEn: 'La Vallée Village Shopping Card',
    type: 'pass',
    urgency: 'optional',
    status: 'booked',
    price: '30欧购物卡+9折优惠券 × 4份',
    bookingTip: '✅ 已购买MG巴黎吉维尼购物村30欧购物卡+9折购物优惠券（4份），有效期至2026-06-30。可在莫奈花园回程路上使用',
    advanceDays: 0,
    cityId: 'paris'
  },

  // === Day 6: 租车 ===
  {
    id: 'car-rental',
    day: 6,
    date: '6月17日',
    attractionName: 'Hertz租车 Volvo XC60（巴黎取→CDG还）',
    attractionNameEn: 'Hertz Car Rental - Volvo XC60',
    type: 'rental',
    urgency: 'critical',
    status: 'booked',
    price: '€60-80/天 × 10天',
    bookingUrl: 'https://www.hertz.com',
    bookingTip: '取车：Carrousel du Louvre（99 Rue de Rivoli, Level -2, 75001）6月17日 09:30 | 还车：CDG T1&2F 6月26日 21:00 | 取车店营业 Mo-Fr 0900-1700 | 还车店营业 Mo-Su 0600-2400',
    advanceDays: 30,
    deadlineNote: '已预订，取车当天带驾照+国际驾照翻译件+信用卡',
    cityId: 'dijon'
  },

  // === Day 7: 瑞士高速通票 ===
  {
    id: 'swiss-vignette',
    day: 7,
    date: '6月18日',
    attractionName: '瑞士高速公路通票',
    attractionNameEn: 'Swiss Motorway Vignette',
    type: 'pass',
    urgency: 'critical',
    status: 'pending',
    price: 'CHF 40',
    bookingTip: '可在瑞士边境加油站现场购买，或提前在网上购买电子版',
    advanceDays: 7,
    cityId: 'lucerne'
  },

  // === Swiss Travel Pass ===
  {
    id: 'swiss-travel-pass',
    day: 8,
    date: '6月19日',
    attractionName: 'Swiss Travel Pass（瑞士通票）',
    attractionNameEn: 'Swiss Travel Pass',
    type: 'pass',
    urgency: 'recommended',
    status: 'pending',
    price: 'CHF 281/人（连续4天）',
    bookingUrl: 'https://www.sbb.ch/en/leisure-holidays/travel-in-switzerland/swiss-travel-pass.html',
    bookingTip: '覆盖6/19-6/23，包含少女峰等火车半价。提前在SBB官网或飞猪购买',
    advanceDays: 14,
    deadlineNote: '越早买越安心，出发前激活',
    cityId: 'interlaken'
  },

  // === Day 9: 少女峰 ===
  {
    id: 'jungfraujoch',
    day: 9,
    date: '6月20日',
    attractionName: '少女峰齿轨火车',
    attractionNameEn: 'Jungfraujoch Railway',
    type: 'ticket',
    urgency: 'critical',
    status: 'pending',
    price: 'CHF 220/人（Swiss Pass半价CHF 110）',
    bookingUrl: 'https://www.jungfrau.ch/en-gb/jungfraujoch-top-of-europe/',
    bookingTip: '必须提前官网购票选时段！建议选早上首班6:35从因特拉肯东站出发，避开人流',
    advanceDays: 14,
    deadlineNote: '旺季名额有限，至少提前2周',
    cityId: 'interlaken'
  },

  // === Day 10: First + 瀑布 ===
  {
    id: 'first-grindelwald',
    day: 10,
    date: '6月21日',
    attractionName: 'First菲尔斯特缆车+滑索',
    attractionNameEn: 'First Grindelwald',
    type: 'ticket',
    urgency: 'recommended',
    status: 'pending',
    price: 'CHF 66/人（缆车往返）+ 滑索另购',
    bookingUrl: 'https://www.jungfrau.ch/en-gb/grindelwaldfirst/',
    bookingTip: '建议提前购买含 First Flyer 滑索的套票，现场可能售罄',
    advanceDays: 7,
    cityId: 'interlaken'
  },
  {
    id: 'trummelbach',
    day: 10,
    date: '6月21日',
    attractionName: '特吕默尔巴赫瀑布',
    attractionNameEn: 'Trümmelbach Falls',
    type: 'ticket',
    urgency: 'optional',
    status: 'pending',
    price: 'CHF 12/人',
    bookingTip: '可现场购票，无需预约',
    advanceDays: 0,
    cityId: 'interlaken'
  },

  // === Day 12: 采尔马特观景台 ===
  {
    id: 'gornergrat',
    day: 12,
    date: '6月23日',
    attractionName: '戈尔内格拉特齿轨火车',
    attractionNameEn: 'Gornergrat Railway',
    type: 'ticket',
    urgency: 'recommended',
    status: 'pending',
    price: 'CHF 95/人（Swiss Pass半价）',
    bookingUrl: 'https://www.gornergrat.ch/en',
    bookingTip: '建议提前购票，Swiss Travel Pass享50%折扣',
    advanceDays: 7,
    cityId: 'zermatt'
  },
  {
    id: 'glacier-paradise',
    day: 12,
    date: '6月23日',
    attractionName: '马特洪峰冰川天堂缆车',
    attractionNameEn: 'Matterhorn Glacier Paradise',
    type: 'ticket',
    urgency: 'recommended',
    status: 'pending',
    price: 'CHF 105/人（Swiss Pass半价）',
    bookingUrl: 'https://www.matterhornparadise.ch/en',
    bookingTip: '下午前往最佳。Swiss Travel Pass享50%折扣',
    advanceDays: 7,
    cityId: 'zermatt'
  },

  // === Day 15: 返程航班 ===
  {
    id: 'flight-paris-hk',
    day: 15,
    date: '6月26日',
    attractionName: '法航 AF186 巴黎→香港',
    attractionNameEn: 'Air France AF186',
    type: 'ticket',
    urgency: 'critical',
    status: 'booked',
    price: '已购票',
    bookingUrl: 'https://www.airfrance.com.cn',
    bookingTip: '已购票，记得提前在线值机。机场还车后预留3.5小时办理登机',
    advanceDays: 90,
    cityId: 'beaune'
  }
]

// 获取指定周（以行程天数为基准）内需要预约的项目
export function getBookingsForWeek(startDay: number, endDay: number): BookingItem[] {
  return bookingItems.filter(item => item.day >= startDay && item.day <= endDay)
}

// 获取待办预约项
export function getPendingBookings(): BookingItem[] {
  return bookingItems.filter(item => item.status === 'pending')
}

// 获取紧急预约项（critical + recommended）
export function getUrgentBookings(): BookingItem[] {
  return bookingItems.filter(item => item.status === 'pending' && (item.urgency === 'critical' || item.urgency === 'recommended'))
}
