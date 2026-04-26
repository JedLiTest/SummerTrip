import { DayPlan } from '../types';

export const tripData: DayPlan[] = [
  // Day 1: 出发日
  {
    day: 1,
    date: '6月12日',
    cityId: 'paris',
    title: '香港→巴黎(飞行日)',
    summary: '搭乘法国航空AF185直飞巴黎。全程不经中东，约13小时抵达光之城。',
    attractions: [
      {
        name: '法国航空 AF185',
        nameEn: 'Air France AF185',
        description: '香港国际机场出发，搭乘法国航空直飞巴黎。起飞23:00，次日06:00+1抵达巴黎戴高乐机场2E航站楼，飞行约13小时。抵达后可乘RER B线或出租车入市区。',
        imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800',
        duration: '全天',
        familyFriendly: true,
        tags: ['航班', '长途飞行', '法航']
      }
    ],
    transport: [
      {
        type: 'flight',
        from: '深圳/香港',
        to: '巴黎CDG',
        duration: '13小时',
        cost: '¥8,000-15,000',
        bookingTip: '建议提前2-3个月购票'
      }
    ]
  },

  // Day 2: 巴黎 I
  {
    day: 2,
    date: '6月13日',
    cityId: 'paris',
    title: '巴黎右岸经典',
    summary: '卢浮宫欣赏世界艺术瑰宝，香榭丽舍大道漫步，埃菲尔铁塔欣赏夜景。',
    attractions: [
      {
        name: '卢浮宫',
        nameEn: 'Louvre Museum',
        description: '世界三大博物馆之首，必看蒙娜丽莎、胜利女神、断臂维纳斯。建议提前网上购票避免排队。',
        imageUrl: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800',
        duration: '3小时',
        familyFriendly: true,
        tags: ['博物馆', '必游', '需预约']
      },
      {
        name: '香榭丽舍大街',
        nameEn: 'Champs-Élysées',
        description: '巴黎最著名的大道，沿途奢侈品店林立。登上凯旋门俯瞰12条放射状大道。',
        imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
        duration: '2小时',
        familyFriendly: true,
        tags: ['地标', '购物', '观景']
      },
      {
        name: '埃菲尔铁塔',
        nameEn: 'Eiffel Tower',
        description: '巴黎标志，傍晚前往可欣赏日落和夜间闪灯（每小时整点）。战神广场草坪野餐体验当地生活。',
        imageUrl: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce65f4?w=800',
        duration: '1.5小时',
        familyFriendly: true,
        tags: ['地标', '夜景', '必游']
      }
    ],
    hotel: {
      name: 'Le Méridien Etoile',
      stars: 5,
      priceRange: '€300-600',
      address: '巴黎凯旋门区，81 Boulevard Gouvion-Saint-Cyr',
      addressEn: '81 Boulevard Gouvion-Saint-Cyr, 75017 Paris, France',
      familyRoom: true,
      features: ['凯旋门步行10分钟', '地铁直达', '现代商务酒店'],
      lat: 48.8796,
      lng: 2.2860
    },
    restaurants: [
      {
        name: 'Du Pain et des Idées',
        cuisine: '面包房',
        priceLevel: 1,
        specialties: ['可颂', '法式面包'],
        kidFriendly: true
      },
      {
        name: 'Septime',
        cuisine: '现代法餐',
        priceLevel: 3,
        specialties: ['时令料理', '创意法餐'],
        kidFriendly: false
      }
    ],
    transport: [
      {
        type: 'walk',
        from: '酒店',
        to: '各景点',
        duration: '地铁+步行',
        cost: '€22.80',
        bookingTip: '建议购买Navigo周卡'
      }
    ]
  },

  // Day 3: 巴黎 II
  {
    day: 3,
    date: '6月14日',
    cityId: 'paris',
    title: '巴黎左岸艺术',
    summary: '奥赛博物馆印象派艺术、巴黎圣母院、玛黑区漫步、蒙马特高地日落。',
    attractions: [
      {
        name: '奥赛博物馆',
        nameEn: 'Musée d\'Orsay',
        description: '印象派艺术殿堂，收藏莫奈、梵高、雷诺阿等大师作品。',
        imageUrl: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800',
        duration: '2.5小时',
        familyFriendly: true,
        tags: ['博物馆', '印象派']
      },
      {
        name: '蒙马特高地',
        nameEn: 'Montmartre',
        description: '艺术家聚集地，圣心教堂前台阶俯瞰全城日落。',
        imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
        duration: '2小时',
        familyFriendly: true,
        tags: ['高地', '日落', '艺术']
      }
    ],
    hotel: {
      name: 'Le Méridien Etoile',
      stars: 5,
      priceRange: '€300-600',
      address: '巴黎凯旋门区，81 Boulevard Gouvion-Saint-Cyr',
      addressEn: '81 Boulevard Gouvion-Saint-Cyr, 75017 Paris, France',
      familyRoom: true,
      features: ['凯旋门步行10分钟', '地铁直达', '现代商务酒店'],
      lat: 48.8796,
      lng: 2.2860
    },
    restaurants: [
      {
        name: 'Café de Flore',
        cuisine: '咖啡馆',
        priceLevel: 2,
        specialties: ['咖啡', '法式早餐'],
        kidFriendly: true
      }
    ],
    transport: [
      {
        type: 'walk',
        from: '酒店',
        to: '各景点',
        duration: '地铁+步行',
        cost: '€15'
      }
    ]
  },

  // Day 4: 凡尔赛宫
  {
    day: 4,
    date: '6月15日',
    cityId: 'paris',
    title: '凡尔赛宫一日游',
    summary: '路易十四的极致奢华宫殿，镜厅、法式园林，体验法国古典艺术巅峰。',
    attractions: [
      {
        name: '凡尔赛宫',
        nameEn: 'Palace of Versailles',
        description: '路易十四建造的极致奢华宫殿，镜厅是法国古典艺术的巅峰。',
        imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
        duration: '4小时',
        familyFriendly: true,
        tags: ['宫殿', '花园', '世界遗产']
      }
    ],
    hotel: {
      name: 'Le Méridien Etoile',
      stars: 5,
      priceRange: '€300-600',
      address: '巴黎凯旋门区，81 Boulevard Gouvion-Saint-Cyr',
      addressEn: '81 Boulevard Gouvion-Saint-Cyr, 75017 Paris, France',
      familyRoom: true,
      features: ['凯旋门步行10分钟', '地铁直达', '现代商务酒店'],
      lat: 48.8796,
      lng: 2.2860
    },
    restaurants: [
      {
        name: 'Angelina',
        cuisine: '甜品店',
        priceLevel: 2,
        specialties: ['热巧克力', '蒙布朗'],
        kidFriendly: true
      }
    ],
    transport: [
      {
        type: 'train',
        from: '巴黎',
        to: '凡尔赛',
        duration: '40分钟',
        cost: '€7.1',
        bookingTip: 'RER C线直达'
      }
    ]
  },
  // Day 5: 巴黎→第戎
  {
    day: 5,
    date: '6月16日',
    cityId: 'dijon',
    title: '巴黎→第戎',
    summary: '驾车前往勃艮第首府第戎，美食之都、芥末之乡。下午游览老城，跟随猫头鹰之路探索中世纪街区。',
    attractions: [
      {
        name: '猫头鹰之路',
        nameEn: 'Le Parcours de la Chouette',
        description: '跟随地面22个铜制猫头鹰标记游览第戎老城，全程约3公里。涵盖公爵宫、圣母院等主要景点。寻宝游戏般的体验，孩子特别喜欢！',
        imageUrl: 'https://images.unsplash.com/photo-1581888227599-779811939961?w=800',
        duration: '2-3小时',
        familyFriendly: true,
        tags: ['徒步', '老城', '寻宝']
      },
      {
        name: '圣母院 & 猫头鹰雕塑',
        nameEn: 'Notre-Dame de Dijon',
        description: '13世纪哥特式教堂，外墙有51个怪兽雕像。找到著名的猫头鹰雕塑，用左手摸会带来好运！是第戎的城市象征。',
        imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800',
        duration: '30分钟',
        familyFriendly: true,
        tags: ['教堂', '地标', '许愿']
      },
      {
        name: '勃艮第公爵宫',
        nameEn: 'Palais des Ducs de Bourgogne',
        description: '勃艮第公国权力中心，现为第戎美术馆。哥特式和文艺复兴建筑的完美融合。可登塔俯瞰全城（需预约）。',
        imageUrl: 'https://images.unsplash.com/photo-1549228581-080a2f6c4f83?w=800',
        duration: '2小时',
        familyFriendly: true,
        tags: ['宫殿', '博物馆', '历史']
      },
      {
        name: '达西公园',
        nameEn: 'Jardin Darcy',
        description: '市中心最大公园，有音乐喷泉（夏季17:00表演）和北极熊雕塑。大草坪适合孩子玩耍，傍晚来看喷泉表演。',
        imageUrl: 'https://images.unsplash.com/photo-1584735175315-9d5df23860bc?w=800',
        duration: '1小时',
        familyFriendly: true,
        tags: ['公园', '喷泉', '休闲']
      }
    ],
    hotel: {
      name: 'Vertigo Hotel, By Marriott, a Member of Design Hotels',
      stars: 4,
      priceRange: '€150-300',
      address: '第戎市中心，7 Rue Monge',
      addressEn: '7 Rue Monge, 21000 Dijon, France',
      familyRoom: true,
      features: ['设计型酒店', '现代风格', '市中心位置', '屋顶露台'],
      lat: 47.3224,
      lng: 5.0413
    },
    restaurants: [
      {
        name: 'Loiseau des Ducs',
        cuisine: '米其林一星',
        priceLevel: 4,
        specialties: ['红酒炖牛肉', '勃艮第蜗牛', '黑松露料理'],
        kidFriendly: true
      },
      {
        name: 'Chez Léon',
        cuisine: '传统勃艮第菜',
        priceLevel: 3,
        specialties: ['红酒炖牛肉', '勃艮第蜗牛', '火腿奶酪焗烤'],
        kidFriendly: true
      },
      {
        name: 'Mulot & Petitjean',
        cuisine: '甜品店',
        priceLevel: 1,
        specialties: ['姜饼', '传统糕点'],
        kidFriendly: true
      }
    ],
    transport: [
      {
        type: 'car',
        from: '巴黎',
        to: '第戎',
        duration: '3小时',
        cost: '€30高速费+€50油费',
        bookingTip: '走A6高速，在Auxerre休息区停留'
      }
    ]
  },

  // Day 6: 第戎→伯尔尼
  {
    day: 6,
    date: '6月17日',
    cityId: 'bern',
    title: '第戎→伯尔尼',
    summary: '早上继续游览第戎，品尝姜饼、参观芥末博物馆。中午驾车前往瑞士首都伯尔尼，约2.5小时抵达。',
    attractions: [
      {
        name: '芥末博物馆',
        nameEn: 'La Moutarderie Fallot',
        description: '参观第戎芥末制作过程，可以自己调配芥末口味，品尝30多种芥末。博物馆商店购买特色芥末作伴手礼。',
        imageUrl: 'https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?w=800',
        duration: '1.5小时',
        familyFriendly: true,
        tags: ['博物馆', '体验', '美食']
      },
      {
        name: '姜饼店 Mulot & Petitjean',
        nameEn: 'Mulot & Petitjean',
        description: '1796年创立的百年老店，第戎最著名的姜饼店。品尝传统Pain d\'épices姜饼，购买精美包装的伴手礼。',
        imageUrl: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800',
        duration: '30分钟',
        familyFriendly: true,
        tags: ['甜品', '伴手礼', '老字号']
      },
      {
        name: '第戎→伯尔尼自驾',
        nameEn: 'Drive to Bern',
        description: '沿A39高速穿越汝拉山区，风景优美。瑞士边境购买高速车贴CHF40。经巴塞尔进入瑞士，约2.5小时抵达伯尔尼。',
        imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800',
        duration: '2.5小时',
        familyFriendly: true,
        tags: ['自驾', '风景', '法瑞边境']
      },
      {
        name: '玫瑰园',
        nameEn: 'Rosengarten',
        description: '伯尔尼最佳观景点，220种玫瑰花园，俯瞰老城全景和阿勒河U型河湾。傍晚日落时分最美。',
        imageUrl: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800',
        duration: '1小时',
        familyFriendly: true,
        tags: ['观景', '公园', '摄影']
      }
    ],
    hotel: {
      name: 'Moxy Bern Expo',
      stars: 3,
      priceRange: 'CHF 150-250',
      address: '伯尔尼展览中心，Guisanplatz 2',
      addressEn: 'Guisanplatz 2, 3014 Bern, Switzerland',
      familyRoom: true,
      features: ['现代时尚', '免费市内交通卡', '健身中心', '性价比高', '免费停车'],
      lat: 46.9658,
      lng: 7.4654
    },
    restaurants: [
      {
        name: 'Kornhauskeller',
        cuisine: '瑞士传统',
        priceLevel: 3,
        specialties: ['伯尔尼拼盘', '瑞士香肠', '奶酪火锅'],
        kidFriendly: true
      }
    ],
    transport: [
      {
        type: 'car',
        from: '第戎',
        to: '伯尔尼',
        duration: '2.5小时',
        cost: '€40高速费+油费',
        bookingTip: '需购买瑞士高速车贴CHF40，在边境加油站购买'
      }
    ]
  },

  // Day 7: 伯尔尼→因特拉肯
  {
    day: 7,
    date: '6月18日',
    cityId: 'interlaken',
    title: '伯尔尼→因特拉肯',
    summary: '上午游览伯尔尼老城，钟楼、熊公园、联邦国会大厦。下午驾车前往因特拉肯（约1小时），入住阿尔卑斯酒店。',
    attractions: [
      {
        name: '伯尔尼钟楼',
        nameEn: 'Zytglogge',
        description: '15世纪天文钟楼，每小时整点钟声响起，机械人偶表演。登塔俯瞰老城全景。',
        imageUrl: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800',
        duration: '1小时',
        familyFriendly: true,
        tags: ['地标', '历史', '观景']
      },
      {
        name: '熊公园',
        nameEn: 'BärenPark',
        description: '伯尔尼市标志，可以近距离观看棕熊。阿勒河畔的自然栖息地，孩子最爱。',
        imageUrl: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=800',
        duration: '1小时',
        familyFriendly: true,
        tags: ['动物', '公园', '亲子']
      },
      {
        name: '伯尔尼→因特拉肯自驾',
        nameEn: 'Drive to Interlaken',
        description: '沿图恩湖畔驾车，风景如画。约1小时抵达因特拉肯，入住酒店后可在何维克街散步。',
        imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800',
        duration: '1小时',
        familyFriendly: true,
        tags: ['自驾', '湖泊', '风景']
      }
    ],
    hotel: {
      name: 'SAVOY 26',
      stars: 3,
      priceRange: 'CHF 200-350',
      address: '阿尔卑斯大街2号',
      addressEn: '2 Alpenstrasse, 3800 Interlaken, Switzerland',
      familyRoom: true,
      features: ['2卧室公寓', '阳台+露台', '连住第2晚', '无需换酒店', '山景房'],
      lat: 46.6867,
      lng: 7.8558,
      cancellation: {
        freeUntil: '2026-06-09T23:59:00',
        freeCancellationFee: 'CHF 0',
        afterDeadlineFee: 'CHF 1,350',
        notes: '无法修改入住日期'
      }
    },
    restaurants: [
      {
        name: 'Restaurant Glacier',
        cuisine: '瑞士传统',
        priceLevel: 3,
        specialties: ['Rösti煎土豆饼'],
        kidFriendly: true
      }
    ],
    transport: [
      {
        type: 'train',
        from: '因特拉肯',
        to: '少女峰',
        duration: '往返8小时',
        cost: 'CHF 220'
      }
    ]
  },

  // Day 8: 因特拉肯·少女峰
  {
    day: 8,
    date: '6月19日',
    cityId: 'interlaken',
    title: '少女峰·欧洲屋脊',
    summary: '搭乘红色齿轨火车登顶少女峰3454米，斯芬克斯观景台、冰宫探险、阿莱奇冰川。',
    attractions: [
      {
        name: '少女峰',
        nameEn: 'Jungfraujoch',
        description: '欧洲屋脊，海拔3454米。搭乘红色齿轨火车穿越艾格峰，抵达斯芬克斯观景台，360度雪山全景。冰宫探险、阿莱奇冰川震撼体验。',
        imageUrl: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800',
        duration: '全天',
        familyFriendly: true,
        tags: ['雪山', '必游', '观景', '冰川']
      }
    ],
    hotel: {
      name: 'SAVOY 26',
      stars: 3,
      priceRange: 'CHF 200-350',
      address: '阿尔卑斯大街2号',
      addressEn: '2 Alpenstrasse, 3800 Interlaken, Switzerland',
      familyRoom: true,
      features: ['2卧室公寓', '阳台+露台', '全功能厨房', '洗碗机', '洗衣机', '9.1高分评价', '市中心170米'],
      lat: 46.6867,
      lng: 7.8558,
      cancellation: {
        freeUntil: '2026-06-09T23:59:00',
        freeCancellationFee: 'CHF 0',
        afterDeadlineFee: 'CHF 1,350',
        notes: '无法修改入住日期'
      }
    },
    restaurants: [
      {
        name: 'Restaurant Taverne',
        cuisine: '瑞士传统',
        priceLevel: 3,
        specialties: ['奶酪火锅', 'Rösti煎土豆饼', '烤香肠'],
        kidFriendly: true
      }
    ],
    transport: [
      {
        type: 'train',
        from: '因特拉肯东站',
        to: '少女峰',
        duration: '往返8小时',
        cost: 'CHF 220/人',
        bookingTip: '建议早上6点出发避开人流，提前官网购票'
      }
    ]
  },

  // Day 9: 因特拉肯→采尔马特
  {
    day: 9,
    date: '6月20日',
    cityId: 'zermatt',
    title: '因特拉肯→采尔马特',
    summary: '上午哈德昆观景台俯瞰双湖全景，下午驾车至Täsch停车，火车进入采尔马特无车小镇。',
    attractions: [
      {
        name: '哈德昆观景台',
        nameEn: 'Harder Kulm',
        description: '因特拉肯最佳观景点，缆车8分钟抵达1322米。俯瞰图恩湖、布里恩茨湖双湖全景，背景是艾格峰、僧侣峰、少女峰三座雪山。',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        duration: '2小时',
        familyFriendly: true,
        tags: ['观景', '缆车', '双湖', '雪山']
      },
      {
        name: 'Täsch停车+采尔马特',
        nameEn: 'Täsch Parking & Zermatt',
        description: '采尔马特是无车小镇，需在Täsch停车场停车（CHF 15/天）。搭乘火车10分钟抵达采尔马特，电瓶车送至酒店。',
        imageUrl: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800',
        duration: '2.5小时',
        familyFriendly: true,
        tags: ['自驾', '停车', '火车']
      }
    ],
    hotel: {
      name: 'Hotel Matthiol',
      stars: 4,
      priceRange: 'CHF 280-450',
      address: '采尔马特镇中心，Schluhmattstrasse 32',
      addressEn: 'Schluhmattstrasse 32, 3920 Zermatt, Switzerland',
      familyRoom: true,
      features: ['马特洪峰景观', '无车小镇', 'SPA', '传统瑞士风格'],
      lat: 46.0207,
      lng: 7.7491
    },
    restaurants: [
      {
        name: 'Chez Vrony',
        cuisine: '阿尔卑斯美食',
        priceLevel: 3,
        specialties: ['阿尔卑斯烤肉', '奶酪拼盘', '瑞士香肠'],
        kidFriendly: true
      }
    ],
    transport: [
      {
        type: 'car',
        from: '因特拉肯',
        to: 'Täsch',
        duration: '2小时',
        cost: 'CHF 15/天停车费',
        bookingTip: 'Täsch停车场24小时营业，Täsch→采尔马特火车CHF 8.40/人'
      }
    ]
  },

  // Day 10: 采尔马特→安纳西
  {
    day: 10,
    date: '6月21日',
    cityId: 'annecy',
    title: '马特洪峰日出→安纳西',
    summary: '清晨戈尔内格拉特观景台看马特洪峰日出。回Täsch取车，驾车250km抵达"阿尔卑斯的威尼斯"安纳西，下午游览老城。',
    attractions: [
      {
        name: '马特洪峰日出',
        nameEn: 'Matterhorn Sunrise at Gornergrat',
        description: '凌晨5点搭乘戈尔内格拉特齿轨火车（世界第一条电气化齿轨铁路），在3089米观景台等待日出。第一缕阳光照亮马特洪峰4478米的完美三角锥，日照金山震撼瞬间。',
        imageUrl: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800',
        duration: '4小时',
        familyFriendly: true,
        tags: ['日出', '马特洪峰', '必看', '摄影']
      },
      {
        name: '采尔马特→安纳西自驾',
        nameEn: 'Drive to Annecy',
        description: '回Täsch取车，沿着瑞士罗纳河谷南下，经日内瓦湖区。约250km、2.5-3小时抵达安纳西。途经美丽的阿尔卑斯风光，从雪山到湖泊的完美过渡。',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        duration: '3小时',
        familyFriendly: true,
        tags: ['自驾', '风景', '阿尔卑斯']
      },
      {
        name: '安纳西老城',
        nameEn: 'Vieille Ville d\'Annecy',
        description: '欧洲保存最完好的中世纪小镇之一。蜿蜒的运河、彩色房屋、鲜花拱桥，被称为"阿尔卑斯的威尼斯"。岛宫（Palais de l\'Île）是安纳西地标，12世纪建筑矗立在运河中央。',
        imageUrl: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=800',
        duration: '2小时',
        familyFriendly: true,
        tags: ['老城', '运河', '地标', '漫步']
      },
      {
        name: '安纳西湖畔散步',
        nameEn: 'Lake Annecy Walk',
        description: '欧洲最纯净的湖泊，清澈见底的湖水呈现翡翠绿色。沿湖漫步、喂天鹅、享受傍晚的湖光山色。孩子最爱的冰淇淋店沿湖分布。',
        imageUrl: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800',
        duration: '1.5小时',
        familyFriendly: true,
        tags: ['湖泊', '散步', '自然', '亲子']
      }
    ],
    hotel: {
      name: 'L\'Impérial Palace',
      stars: 4,
      priceRange: '€200-400',
      address: '安纳西湖畔，Allée de l\'Impérial',
      addressEn: 'Allée de l\'Impérial, 74000 Annecy, France',
      familyRoom: true,
      features: ['湖景房', '私人沙滩', 'SPA', '米其林餐厅', 'Belle Époque风格'],
      lat: 45.9003,
      lng: 6.1430
    },
    restaurants: [
      {
        name: 'Le Clos des Sens',
        cuisine: '米其林三星',
        priceLevel: 4,
        specialties: ['阿尔卑斯鱼类', '萨瓦奶酪', '创意法餐'],
        kidFriendly: false
      },
      {
        name: 'Le Freti',
        cuisine: '萨瓦传统美食',
        priceLevel: 2,
        specialties: ['奶酪火锅', 'Tartiflette奶酪土豆', 'Raclette烤奶酪'],
        kidFriendly: true
      }
    ],
    transport: [
      {
        type: 'car',
        from: '采尔马特(Täsch)',
        to: '安纳西',
        duration: '2.5-3小时',
        cost: '€60-80（油费+高速费）',
        bookingTip: '经A40高速，风景优美，建议在日内瓦附近休息'
      }
    ]
  },

  // Day 11: 安纳西→安提布
  {
    day: 11,
    date: '6月22日',
    cityId: 'antibes',
    title: '安纳西→安提布·蔚蓝海岸',
    summary: '上午继续游览安纳西湖，可选环湖骑行。中午驾车470km穿越法国南部，傍晚抵达蔚蓝海岸安提布，感受地中海日落。',
    attractions: [
      {
        name: '安纳西湖骑行',
        nameEn: 'Lake Annecy Cycling',
        description: '环湖自行车道是欧洲最美的骑行路线之一。租一辆自行车，沿湖骑行1-2小时，欣赏雪山倒影和翡翠湖水。有儿童座椅和拖车可选。',
        imageUrl: 'https://images.unsplash.com/photo-1475666675596-cca2035b3d79?w=800',
        duration: '2小时',
        familyFriendly: true,
        tags: ['骑行', '湖泊', '自然', '亲子']
      },
      {
        name: '安纳西→安提布自驾',
        nameEn: 'Drive to Antibes',
        description: '沿A40+A8高速南下，穿越法国东南部。约470km、5小时抵达蔚蓝海岸。途经格勒诺布尔、艾克斯普罗旺斯附近，风景从阿尔卑斯山区过渡到地中海沿岸。建议中途在艾克斯或尼斯附近休息。',
        imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800',
        duration: '5小时',
        familyFriendly: true,
        tags: ['自驾', '高速', '风景']
      },
      {
        name: '安提布老城',
        nameEn: 'Vieille Ville d\'Antibes',
        description: '保存完好的中世纪老城，石板路、彩色房屋、普罗旺斯市场。清晨普罗旺斯市集最热闹，傍晚海滨散步看日落。',
        imageUrl: 'https://images.unsplash.com/photo-1563789031959-4c02bcb41319?w=800',
        duration: '1.5小时',
        familyFriendly: true,
        tags: ['老城', '市集', '漫步', '日落']
      }
    ],
    hotel: {
      name: 'Hôtel Belles Rives',
      stars: 5,
      priceRange: '€400-800',
      address: '安提布海滨，33 Boulevard Edouard Baudoin',
      addressEn: '33 Boulevard Edouard Baudoin, 06160 Juan-les-Pins, France',
      familyRoom: true,
      features: ['海景', '私人沙滩', '米其林餐厅', 'Art Deco风格', 'F. Scott Fitzgerald最爱'],
      lat: 43.5658,
      lng: 7.1108
    },
    restaurants: [
      {
        name: 'Le Figuier de Saint-Esprit',
        cuisine: '普罗旺斯美食',
        priceLevel: 3,
        specialties: ['马赛鱼汤', '尼斯沙拉', '普罗旺斯烤羊排'],
        kidFriendly: true
      }
    ],
    transport: [
      {
        type: 'car',
        from: '安纳西',
        to: '安提布',
        duration: '5小时',
        cost: '€80-100（油费+高速费）',
        bookingTip: '经A40+A8高速，建议在艾克斯普罗旺斯或尼斯附近休息区停留'
      }
    ]
  },

  // Day 12: 安提布
  {
    day: 12,
    date: '6月23日',
    cityId: 'antibes',
    title: '安提布·毕加索与海角',
    summary: '安提布老城深度游、毕加索博物馆、昂蒂布角徒步、海滩午餐、地中海日落。',
    attractions: [
      {
        name: '普罗旺斯市集',
        nameEn: 'Marché Provençal',
        description: '安提布老城的传统市集（每天上午营业）。新鲜蔬果、奶酪、橄榄、薰衣草制品、手工皂，体验普罗旺斯生活方式。',
        imageUrl: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800',
        duration: '1小时',
        familyFriendly: true,
        tags: ['市集', '普罗旺斯', '购物']
      },
      {
        name: '毕加索博物馆',
        nameEn: 'Musée Picasso',
        description: '格里马尔迪城堡内，毕加索1946年在此创作。海景阳台可俯瞰地中海，馆藏《生之喜悦》等名作。',
        imageUrl: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=800',
        duration: '1.5小时',
        familyFriendly: true,
        tags: ['博物馆', '艺术', '海景']
      },
      {
        name: '昂蒂布角',
        nameEn: 'Cap d\'Antibes',
        description: '蔚蓝海岸最美海岬，沿海步道Sentier du Littoral，松树林、悬崖、碧蓝地中海。',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        duration: '2小时',
        familyFriendly: true,
        tags: ['海岸', '徒步', '自然']
      }
    ],
    hotel: {
      name: 'Hôtel Belles Rives',
      stars: 5,
      priceRange: '€400-800',
      address: '安提布海滨，33 Boulevard Edouard Baudoin',
      addressEn: '33 Boulevard Edouard Baudoin, 06160 Juan-les-Pins, France',
      familyRoom: true,
      features: ['海景', '私人沙滩', '米其林餐厅', '连住第2晚'],
      lat: 43.5658,
      lng: 7.1108
    },
    restaurants: [
      {
        name: 'Le Figuier de Saint-Esprit',
        cuisine: '普罗旺斯美食',
        priceLevel: 3,
        specialties: ['马赛鱼汤', '尼斯沙拉', '普罗旺斯烤羊排'],
        kidFriendly: true
      }
    ],
    transport: [
      {
        type: 'walk',
        from: '酒店',
        to: '老城',
        duration: '步行15分钟',
        cost: '免费',
        bookingTip: '老城区停车困难，建议步行游览'
      }
    ]
  },

  // Day 13: 圣托佩
  {
    day: 13,
    date: '6月24日',
    cityId: 'antibes',
    title: '圣托佩·奢华海港',
    summary: '驾车前往圣托佩，游艇码头、Pampelonne海滩、Club 55海滩午餐、老城闲逛。',
    attractions: [
      {
        name: '圣托佩游艇码头',
        nameEn: 'Port of Saint-Tropez',
        description: '法国里维埃拉最奢华的游艇码头，超级游艇林立。沿着码头漫步，感受富豪度假地的魅力。',
        imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
        duration: '1.5小时',
        familyFriendly: true,
        tags: ['游艇', '奢华', '海港']
      },
      {
        name: 'Pampelonne海滩',
        nameEn: 'Plage de Pampelonne',
        description: '圣托佩最著名的5公里金色沙滩，《碧海蓝天》拍摄地。Club 55、Nikki Beach等顶级海滩俱乐部。',
        imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        duration: '3小时',
        familyFriendly: true,
        tags: ['海滩', '度假', '必游']
      },
      {
        name: '圣托佩老城',
        nameEn: 'Old Town Saint-Tropez',
        description: '普罗旺斯风情小镇，彩色房屋、艺术画廊、精品店。Place des Lices广场傍晚打法式滚球。',
        imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
        duration: '1.5小时',
        familyFriendly: true,
        tags: ['老城', '艺术', '购物']
      }
    ],
    hotel: {
      name: 'Hôtel Belles Rives',
      stars: 5,
      priceRange: '€400-800',
      address: '安提布海滨，33 Boulevard Edouard Baudoin',
      addressEn: '33 Boulevard Edouard Baudoin, 06160 Juan-les-Pins, France',
      familyRoom: true,
      features: ['海景', '私人沙滩', '米其林餐厅', '连住第2晚'],
      lat: 43.5658,
      lng: 7.1108
    },
    restaurants: [
      {
        name: 'Club 55',
        cuisine: '地中海美食',
        priceLevel: 3,
        specialties: ['海鲜拼盘', '龙虾', '烤鱼', '普罗旺斯沙拉'],
        kidFriendly: true
      }
    ],
    transport: [
      {
        type: 'car',
        from: '安提布',
        to: '圣托佩',
        duration: '1.5小时',
        cost: '€30（油费+停车费）',
        bookingTip: '建议早上9点前出发，圣托佩夏季停车困难'
      }
    ]
  },

  // Day 14: 安提布→里昂
  {
    day: 14,
    date: '6月25日',
    cityId: 'lyon',
    title: '安提布→里昂·美食之都',
    summary: '上午蔚蓝海岸告别，驾车4小时抵达里昂。下午游览老城Traboules秘密通道、富维耶圣母院。',
    attractions: [
      {
        name: '安提布→里昂自驾',
        nameEn: 'Drive to Lyon',
        description: '沿A8+A7高速北上，穿越普罗旺斯。约4小时抵达里昂，沿途可在艾克斯普罗旺斯休息。',
        imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800',
        duration: '4小时',
        familyFriendly: true,
        tags: ['自驾', '高速']
      },
      {
        name: '里昂老城Traboules',
        nameEn: 'Vieux-Lyon Traboules',
        description: 'UNESCO世界遗产，文艺复兴建筑群。Traboules是里昂特色秘密通道，连接街道与庭院，二战时抵抗组织藏身地。孩子最爱探险寻宝。',
        imageUrl: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800',
        duration: '2小时',
        familyFriendly: true,
        tags: ['世界遗产', '老城', '探险', '秘密通道']
      },
      {
        name: '富维耶圣母院',
        nameEn: 'Basilique Notre-Dame de Fourvière',
        description: '里昂地标，白色大教堂矗立于富维耶山顶，俯瞰全城。拜占庭+罗马风格华丽壮观，内部马赛克装饰震撼。',
        imageUrl: 'https://images.unsplash.com/photo-1582731844850-d2db7da02e42?w=800',
        duration: '1.5小时',
        familyFriendly: true,
        tags: ['教堂', '观景', '地标']
      }
    ],
    hotel: {
      name: 'Villa Florentine',
      stars: 5,
      priceRange: '€300-600',
      address: '富维耶山，25-27 Montée Saint-Barthélémy',
      addressEn: '25-27 Montée Saint-Barthélémy, 69005 Lyon, France',
      familyRoom: true,
      features: ['米其林餐厅', '全城景观', '历史建筑改建', 'SPA'],
      lat: 45.7622,
      lng: 4.8193
    },
    restaurants: [
      {
        name: 'Le Bouchon des Filles',
        cuisine: '传统里昂菜',
        priceLevel: 2,
        specialties: ['里昂香肠', '内脏料理', '红酒炖牛肉', 'Quenelle鱼丸'],
        kidFriendly: true
      },
      {
        name: 'Paul Bocuse',
        cuisine: '经典法餐',
        priceLevel: 3,
        specialties: ['里昂肥鸡', '黑松露汤', '布列斯鸡'],
        kidFriendly: false
      }
    ],
    transport: [
      {
        type: 'car',
        from: '安提布',
        to: '里昂',
        duration: '4小时',
        cost: '€60-80（油费+过路费）',
        bookingTip: 'A8+A7高速，可在艾克斯普罗旺斯休息'
      }
    ]
  },

  // Day 15: 里昂→博讷→巴黎→返程
  {
    day: 15,
    date: '6月26日',
    cityId: 'beaune',
    title: '里昂→博讷→巴黎→返程(飞行日)',
    summary: '上午驾车从里昂到博讷（1.5h），快速游览主宫医院和老城。下午驾车返回巴黎CDG（3h），晚上23:55法航AF186直飞香港。',
    attractions: [
      {
        name: '里昂→博讷自驾',
        nameEn: 'Drive to Beaune',
        description: '沿A6高速北上，穿越勃艮第葡萄酒产区。约1小时40分抵达博讷，途经Mâcon。',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        duration: '1.5小时',
        familyFriendly: true,
        tags: ['自驾', '葡萄酒区']
      },
      {
        name: '主宫医院',
        nameEn: 'Hospices de Beaune',
        description: 'UNESCO世界遗产，15世纪慈善医院，标志性彩色琉璃瓦屋顶。《虎口脱险》拍摄地。快速参观1小时。',
        imageUrl: 'https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=800',
        duration: '1小时',
        familyFriendly: true,
        tags: ['世界遗产', '建筑', '历史']
      },
      {
        name: '博讷老城快速游览',
        nameEn: 'Quick Beaune Visit',
        description: '中世纪城墙环绕的老城，酒商街购买勃艮第葡萄酒作伴手礼。',
        imageUrl: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=800',
        duration: '1小时',
        familyFriendly: true,
        tags: ['老城', '购物', '葡萄酒']
      },
      {
        name: '博讷→巴黎CDG',
        nameEn: 'Drive to Paris CDG',
        description: '沿A6高速返回巴黎戴高乐机场，全程约310km、3小时。建议15:00出发，18:30抵达机场，提前3.5小时办理登机。',
        imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800',
        duration: '3小时',
        familyFriendly: true,
        tags: ['自驾', '返程']
      },
      {
        name: '返程航班',
        nameEn: 'Return Flight',
        description: '法国航空AF186，巴黎CDG 23:55起飞，次日香港15:55抵达（6月27日），飞行约13小时。全程不经中东，安全舒适。',
        imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800',
        duration: '13小时',
        familyFriendly: true,
        tags: ['航班', '返程', '法航']
      }
    ],
    hotel: {
      name: '',
      stars: 0,
      priceRange: '',
      address: '',
      familyRoom: false,
      features: []
    },
    restaurants: [
      {
        name: '机场餐厅',
        cuisine: '快餐',
        priceLevel: 2,
        specialties: ['三明治', '沙拉'],
        kidFriendly: true
      }
    ],
    transport: [
      {
        type: 'car',
        from: '里昂',
        to: '博讷',
        duration: '1小时40分钟',
        cost: '€33（油费+过路费）',
        bookingTip: 'A6高速，途经Mâcon'
      },
      {
        type: 'car',
        from: '博讷',
        to: '巴黎CDG',
        duration: '3小时',
        cost: '€65（油费+过路费）',
        bookingTip: 'A6高速直达，提前3.5小时到机场'
      },
      {
        type: 'flight',
        from: '巴黎CDG',
        to: '香港HKG',
        duration: '13小时',
        cost: '已购买',
        bookingTip: 'AF186 23:55→15:55+1'
      }
    ]
  }
];
