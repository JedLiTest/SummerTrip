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
        imageUrl: '/generated-images/Air_France_airplane_at_Hong_Ko_2026-04-21T13-13-08.png',
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
    summary: '抵达巴黎，行李寄存后先游览香榭丽舍和铁塔，下午1点参观卢浮宫（已预订），之后取行李入住公寓。',
    attractions: [
      {
        name: '卢浮宫',
        nameEn: 'Louvre Museum',
        description: '世界三大博物馆之首，必看蒙娜丽莎、胜利女神、断臂维纳斯。已预订13:00场次入场。',
        imageUrl: '/generated-images/Louvre_Museum_in_Paris__the_ic_2026-04-21T12-37-01.png',
        duration: '3小时',
        familyFriendly: true,
        tags: ['博物馆', '必游', '已预约13:00']
      },
      {
        name: '香榭丽舍大街',
        nameEn: 'Champs-Élysées',
        description: '巴黎最著名的大道，沿途奢侈品店林立。登上凯旋门俯瞰12条放射状大道。',
        imageUrl: '/generated-images/Champs__lys_es_avenue_in_Paris_2026-04-21T13-13-49.png',
        duration: '2小时',
        familyFriendly: true,
        tags: ['地标', '购物', '观景']
      },
      {
        name: '埃菲尔铁塔',
        nameEn: 'Eiffel Tower',
        description: '巴黎标志，傍晚前往可欣赏日落和夜间闪灯（每小时整点）。战神广场草坪野餐体验当地生活。',
        imageUrl: '/generated-images/Eiffel_Tower_Paris_at_sunset___2026-04-21T13-15-28.png',
        duration: '1.5小时',
        familyFriendly: true,
        tags: ['地标', '夜景', '必游']
      }
    ],
    hotel: {
      name: 'Sweett - Atelier Ponthieu',
      stars: 4,
      priceRange: '€250-400',
      address: '巴黎8区，香榭丽舍大街旁，蓬蒂厄街52号',
      addressEn: '52 Rue de Ponthieu, 75008 Paris, France',
      familyRoom: true,
      features: ['香榭丽舍核心地段', '整套公寓', '4位成人4晚', 'Booking.com Genius', '入住16:00-00:00', '退房11:00前', '步行可达凯旋门和香榭丽舍'],
      lat: 48.8722,
      lng: 2.3078
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
        kidFriendly: false,
        dressCode: '👔 Smart Casual — 氛围轻松的米其林小馆，避免运动鞋和短裤即可'
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

  // Day 3: 巴黎 II（奥赛+橘园+圣母院+蒙马特）
  {
    day: 3,
    date: '6月14日',
    cityId: 'paris',
    title: '巴黎左岸艺术·橘园·圣母院',
    summary: '奥赛博物馆印象派艺术、橘园美术馆莫奈睡莲、巴黎圣母院（15:45预约）、蒙马特高地日落。',
    attractions: [
      {
        name: '奥赛博物馆',
        nameEn: 'Musée d\'Orsay',
        description: '印象派艺术殿堂，收藏莫奈、梵高、雷诺阿等大师作品。',
        imageUrl: '/generated-images/Mus_e_d_Orsay_museum_main_entr_2026-04-21T13-32-41.png',
        duration: '2.5小时',
        familyFriendly: true,
        tags: ['博物馆', '印象派']
      },
      {
        name: '橘园美术馆',
        nameEn: 'Musée de l\'Orangerie',
        description: '杜乐丽花园内，专门收藏莫奈大型睡莲系列。两个椭圆形展厅，360度环绕式欣赏莫奈晚年巨作。（每周二闭馆，6月14日周日正常开放）',
        imageUrl: '/generated-images/Mus_e_de_l_Orangerie_in_Paris__2026-04-21T12-36-58.png',
        duration: '1.5小时',
        familyFriendly: true,
        tags: ['博物馆', '莫奈', '印象派']
      },
      {
        name: '巴黎圣母院',
        nameEn: 'Notre-Dame de Paris',
        description: '2024年底重新开放的巴黎圣母院，已预约6月14日15:45入场。哥特式建筑杰作，玫瑰花窗、飞扶壁、尖塔修复后焕然一新。',
        imageUrl: '/generated-images/Montmartre_hill_in_Paris_with__2026-04-21T12-37-02.png',
        duration: '1小时',
        familyFriendly: true,
        tags: ['教堂', '地标', '已预约15:45']
      },
      {
        name: '蒙马特高地',
        nameEn: 'Montmartre',
        description: '艺术家聚集地，圣心教堂前台阶俯瞰全城日落。',
        imageUrl: '/generated-images/Montmartre_hill_in_Paris_with__2026-04-21T12-37-02.png',
        duration: '2小时',
        familyFriendly: true,
        tags: ['高地', '日落', '艺术']
      }
    ],
    hotel: {
      name: 'Sweett - Atelier Ponthieu',
      stars: 4,
      priceRange: '€250-400',
      address: '巴黎8区，香榭丽舍大街旁，蓬蒂厄街52号',
      addressEn: '52 Rue de Ponthieu, 75008 Paris, France',
      familyRoom: true,
      features: ['香榭丽舍核心地段', '整套公寓', 'Booking.com Genius', '连住第2晚'],
      lat: 48.8722,
      lng: 2.3078
    },
    restaurants: [
      {
        name: 'La Jacobine',
        cuisine: '法式餐厅',
        priceLevel: 2,
        specialties: ['经典法式料理', '法式甜点'],
        kidFriendly: true,
        address: '拉丁区，圣安德烈街59-61号',
        addressEn: '59-61 Rue Saint-André des Arts, 75006 Paris, France',
        lat: 48.8530,
        lng: 2.3414,
        reservation: {
          date: '2026年6月14日（星期日）',
          time: '12:30',
          guests: 4,
          platform: 'TheFork',
          confirmed: true,
          notes: '距奥赛博物馆步行15分钟，距巴黎圣母院步行10分钟'
        }
      },
      {
        name: "L'Oiseau Blanc",
        cuisine: '米其林星级法餐',
        priceLevel: 4,
        specialties: ['法式精致料理', '屋顶露台', '铁塔景观'],
        kidFriendly: false,
        dressCode: '👗 Chic & Elegant — 半岛酒店五星级屋顶餐厅，需着正式优雅服装。男士：衬衫+西裤+皮鞋；女士：优雅连衣裙。避免运动鞋、短裤、拖鞋、T恤',
        address: '巴黎16区，克莱贝尔大街19号（半岛酒店顶层）',
        addressEn: '19 Avenue Kléber, 75116 Paris, France',
        lat: 48.8711,
        lng: 2.2935,
        reservation: {
          date: '2026年6月14日（星期日）',
          time: '19:45',
          guests: 4,
          platform: 'Direct',
          confirmed: true,
          notes: '半岛酒店屋顶餐厅，可观埃菲尔铁塔全景'
        }
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

  // Day 4: 巴黎自由日（6月15日周一，圣日耳曼区漫步&购物&休闲）
  {
    day: 4,
    date: '6月15日',
    cityId: 'paris',
    title: '巴黎漫步·圣日耳曼&玛黑',
    summary: '悠闲巴黎日。上午圣日耳曼区文艺漫步、甜品美食，下午玛黑区购物探店，为明天的凡尔赛+莫奈长途日养精蓄锐。',
    attractions: [
      {
        name: '圣日耳曼区漫步 & 甜品',
        nameEn: 'Saint-Germain-des-Prés Walk & Pâtisserie',
        description: '巴黎最文艺的街区！逛Shakespeare and Company传奇书店、Pierre Hermé品尝顶级马卡龙、Café de Flore门口打卡。沿Rue de Seine逛画廊和vintage小店，孩子可以挑选纪念品。',
        imageUrl: '/generated-images/A_realistic_photograph_of_Sain_2026-04-26T08-55-45.png',
        duration: '3小时',
        familyFriendly: true,
        tags: ['购物', '甜品', '文艺', '书店']
      },
      {
        name: '玛黑区',
        nameEn: 'Le Marais',
        description: '巴黎最潮街区，犹太街L\'As du Fallafel中东美食、vintage服饰店铺、Place des Vosges（孚日广场）法国最古老的皇家广场。适合全家漫步购物。',
        imageUrl: '/generated-images/Montmartre_hill_in_Paris_with__2026-04-21T12-37-02.png',
        duration: '2.5小时',
        familyFriendly: true,
        tags: ['购物', '美食', '潮流', '广场']
      }
    ],
    hotel: {
      name: 'Sweett - Atelier Ponthieu',
      stars: 4,
      priceRange: '€250-400',
      address: '巴黎8区，香榭丽舍大街旁，蓬蒂厄街52号',
      addressEn: '52 Rue de Ponthieu, 75008 Paris, France',
      familyRoom: true,
      features: ['香榭丽舍核心地段', '整套公寓', 'Booking.com Genius', '连住第3晚'],
      lat: 48.8722,
      lng: 2.3078
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
        type: 'walk',
        from: '酒店',
        to: '各景点',
        duration: '地铁+步行',
        cost: '€15',
        bookingTip: '轻松一天，地铁+步行即可'
      }
    ]
  },

  // Day 5: 凡尔赛宫 + 莫奈花园（6月16日周二，已购票：凡尔赛10:20含中文讲解 + 莫奈15:30）
  {
    day: 5,
    date: '6月16日',
    cityId: 'paris',
    title: '凡尔赛宫 + 莫奈花园',
    summary: '上午凡尔赛宫（10:20含中文讲解），午后火车前往吉维尼参观莫奈花园（15:30），17:57火车返回巴黎Saint-Lazare。晚上米其林晚餐。充实满满的一天！',
    attractions: [
      {
        name: '凡尔赛宫',
        nameEn: 'Palace of Versailles',
        description: '路易十四建造的极致奢华宫殿，镜厅是法国古典艺术的巅峰。已购票10:20场含中文人工讲解（成人2+儿童2）。（每周一闭馆，6月16日周二正常开放）',
        imageUrl: '/generated-images/Palace_of_Versailles_France__g_2026-04-21T13-16-14.png',
        duration: '3小时',
        familyFriendly: true,
        tags: ['宫殿', '花园', '世界遗产', '已预约10:20']
      },
      {
        name: '莫奈花园',
        nameEn: 'Giverny - Monet\'s Garden',
        description: '印象派大师莫奈的故居和花园，《睡莲》系列创作地。日本桥、睡莲池、鸢尾花园。已购票15:30场（4份）。17:57从Vernon搭火车返回巴黎Saint-Lazare（18:49到达）。',
        imageUrl: '/generated-images/Claude_Monet_s_Garden_in_Giver_2026-04-21T13-34-52.png',
        duration: '2小时',
        familyFriendly: true,
        tags: ['花园', '印象派', '艺术', '已预约15:30']
      }
    ],
    hotel: {
      name: 'Sweett - Atelier Ponthieu',
      stars: 4,
      priceRange: '€250-400',
      address: '巴黎8区，香榭丽舍大街旁，蓬蒂厄街52号',
      addressEn: '52 Rue de Ponthieu, 75008 Paris, France',
      familyRoom: true,
      features: ['香榭丽舍核心地段', '整套公寓', 'Booking.com Genius', '连住第4晚（最后一晚）'],
      lat: 48.8722,
      lng: 2.3078
    },
    restaurants: [
      {
        name: 'Marsan - Hélène Darroze',
        cuisine: '米其林星级法餐',
        priceLevel: 4,
        specialties: ['创意法餐', '西南法风味', '时令料理', '美味套餐'],
        kidFriendly: false,
        dressCode: '👔 Smart Casual 至正式 — 高端法餐厅，建议衬衫+西裤/优雅连衣裙，避免运动鞋、短裤、拖鞋',
        address: '巴黎6区，阿萨斯街4号',
        addressEn: '4 Rue d\'Assas, 75006 Paris, France',
        lat: 48.8492,
        lng: 2.3333,
        reservation: {
          date: '2026年6月16日（星期二）',
          time: '19:15',
          guests: 4,
          platform: 'TheFork',
          confirmed: true,
          notes: '已获得200 Yums积分'
        },
        cancellation: {
          freeUntil: '2026-06-13T19:15:00+02:00',
          freeCancellationFee: '€0',
          afterDeadlineFee: '€820.00',
          notes: '预定时间前72小时内免费取消或更改。72小时后取消/修改/未出现，将收取€820.00'
        }
      }
    ],
    transport: [
      {
        type: 'metro',
        from: '酒店（Franklin D. Roosevelt站）',
        to: '凡尔赛宫',
        duration: '约55分钟',
        cost: '€4.15/人',
        bookingTip: '步行5分钟→M9（2站到Pont de l\'Alma）→换乘RER C（29分钟到Versailles Château Rive Gauche）→步行10分钟到宫殿'
      },
      {
        type: 'train',
        from: 'Vernon-Giverny',
        to: 'Paris Saint-Lazare',
        duration: '52分钟',
        cost: '已购票',
        bookingTip: 'TER NOMAD 17:57发车→18:49到达Saint-Lazare（Voyageurs 1187 | 13148）'
      }
    ]
  },

  // Day 6: 巴黎→第戎
  {
    day: 6,
    date: '6月17日',
    cityId: 'dijon',
    title: '巴黎→第戎',
    summary: '上午从巴黎出发，取车驾车前往勃艮第首府第戎（3小时）。下午游览老城，跟随猫头鹰之路探索中世纪街区。',
    attractions: [
      {
        name: '猫头鹰之路',
        nameEn: 'Le Parcours de la Chouette',
        description: '跟随地面22个铜制猫头鹰标记游览第戎老城，全程约3公里。涵盖公爵宫、圣母院等主要景点。寻宝游戏般的体验，孩子特别喜欢！',
        imageUrl: '/generated-images/Medieval_old_town_of_Dijon_Fra_2026-04-21T13-17-45.png',
        duration: '2-3小时',
        familyFriendly: true,
        tags: ['徒步', '老城', '寻宝']
      },
      {
        name: '圣母院 & 猫头鹰雕塑',
        nameEn: 'Notre-Dame de Dijon',
        description: '13世纪哥特式教堂，外墙有51个怪兽雕像。找到著名的猫头鹰雕塑，用左手摸会带来好运！是第戎的城市象征。',
        imageUrl: '/generated-images/Famous_bronze_owl_sculpture_on_2026-04-21T13-37-42.png',
        duration: '30分钟',
        familyFriendly: true,
        tags: ['教堂', '地标', '许愿']
      }
    ],
    hotel: {
      name: 'Aloft Dijon',
      stars: 4,
      priceRange: '€120-250',
      address: '第戎市中心，8 Place Grangier',
      addressEn: '8 Place Grangier, 21000 Dijon, France',
      familyRoom: true,
      features: ['有停车场', '室内泳池', '桑拿/蒸汽浴', '家庭友好', '游戏室', '房间有咖啡机和冰箱'],
      lat: 47.3216,
      lng: 5.0420
    },
    restaurants: [
      {
        name: 'Loiseau des Ducs',
        cuisine: '米其林一星',
        priceLevel: 4,
        specialties: ['红酒炖牛肉', '勃艮第蜗牛', '黑松露料理'],
        kidFriendly: true,
        dressCode: '👔 Smart Casual — 优雅但不拘谨，建议整洁得体着装。避免运动鞋、短裤'
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
        bookingTip: 'Hertz取车：Carrousel du Louvre（99 Rue de Rivoli, Level -2, 75001 Paris）| 取车 6月17日(周三) 09:30 | 营业时间 Mo-Fr 0900-1300 1400-1700, Sa 0800-1300 1400-1600, Su closed | 车型 Volvo XC60 | 还车 6月26日(周五) CDG机场T1&2F | 走A6高速，在Auxerre休息区停留'
      }
    ]
  },

  // Day 7: 第戎→卢塞恩
  {
    day: 7,
    date: '6月18日',
    cityId: 'lucerne',
    title: '第戎→卢塞恩',
    summary: '上午睡到自然醒，悠闲早餐后退房出发。驾车约3.5小时抵达瑞士最美旅游城市卢塞恩，傍晚卡贝尔桥&老城黄昏散步。',
    attractions: [
      {
        name: '第戎→卢塞恩自驾',
        nameEn: 'Drive to Lucerne',
        description: '沿A39高速穿越汝拉山区，经巴塞尔进入瑞士（边境购买高速车贴CHF40）。约350km、3.5小时抵达卢塞恩。沿途风景从法国田园渐变为瑞士湖光山色。',
        imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800',
        duration: '3.5小时',
        familyFriendly: true,
        tags: ['自驾', '风景', '法瑞边境']
      },
      {
        name: '卡贝尔桥',
        nameEn: 'Chapel Bridge (Kapellbrücke)',
        description: '欧洲最古老的有顶木桥（1333年），卢塞恩标志。桥内有17世纪三角形彩绘画板，讲述城市历史。旁边是八角形水塔，曾为监狱和藏金库。',
        imageUrl: '/generated-images/Lucerne_Chapel_Bridge_Kapellbr_2026-04-21T13-24-02.png',
        duration: '30分钟',
        familyFriendly: true,
        tags: ['地标', '古桥', '必游', '摄影']
      },
      {
        name: '卢塞恩老城漫步',
        nameEn: 'Lucerne Old Town Walk',
        description: '琉森湖畔的中世纪老城，穆塞格城墙、壁画广场、耶稣会教堂。傍晚湖畔散步，远眺皮拉图斯山和瑞吉山夕照,美不胜收。',
        imageUrl: '/generated-images/Lucerne_old_town_Switzerland___2026-04-21T13-39-11.png',
        duration: '1.5小时',
        familyFriendly: true,
        tags: ['老城', '湖畔', '散步', '摄影']
      }
    ],
    hotel: {
      name: 'KoBi Apartments Hirschenplatz',
      stars: 4,
      priceRange: 'CHF 150-300',
      address: '卢塞恩老城中心，Werchlaubengässli 5',
      addressEn: 'Werchlaubengässli 5, 6004 Lucerne, Switzerland',
      familyRoom: true,
      features: ['老城核心鹿广场', '步行3分钟到卡贝尔桥', '完整厨房可做饭', '洗衣机+烘干机', 'Booking.com 9.1分', '独立客厅空间大', '自助入住', '附近Parkhaus Kesselturm停车场步行5分钟(CHF 35/天)'],
      lat: 47.0514,
      lng: 8.3076
    },
    restaurants: [
      {
        name: 'Wirtshaus Galliker',
        cuisine: '瑞士传统',
        priceLevel: 3,
        specialties: ['瑞士奶酪火锅', '卢塞恩肉饼', 'Rösti煎土豆饼'],
        kidFriendly: true
      }
    ],
    transport: [
      {
        type: 'car',
        from: '第戎',
        to: '卢塞恩',
        duration: '3.5小时',
        cost: '€50高速费+油费',
        bookingTip: '需购买瑞士高速车贴CHF40，在边境加油站购买。经巴塞尔进入瑞士。'
      }
    ]
  },

  // Day 8: 卢塞恩→因特拉肯
  {
    day: 8,
    date: '6月19日',
    cityId: 'interlaken',
    title: '卢塞恩→因特拉肯',
    summary: '上午琉森湖畔散步，参观狮子纪念碑和瑞士交通博物馆。午后驾车经龙疆小镇抵达因特拉肯（约1小时），沿途风景美到窒息。',
    attractions: [
      {
        name: '狮子纪念碑',
        nameEn: 'Lion Monument (Löwendenkmal)',
        description: '马克·吐温称之为"世界上最悲伤的石雕"。纪念1792年法国大革命中牺牲的瑞士雇佣兵，垂死狮子雕刻在天然岩壁上，震撼人心。',
        imageUrl: '/generated-images/Lion_Monument_L_wendenkmal_in__2026-04-21T13-40-20.png',
        duration: '30分钟',
        familyFriendly: true,
        tags: ['地标', '雕塑', '历史']
      },
      {
        name: '瑞士交通博物馆',
        nameEn: 'Swiss Museum of Transport',
        description: '全瑞士最受欢迎的博物馆！火车、飞机、汽车、轮船、太空主题。互动体验丰富，飞行模拟器、巧克力冒险、天文馆，孩子的天堂。',
        imageUrl: '/generated-images/Inside_Swiss_Museum_of_Transpo_2026-04-21T13-43-17.png',
        duration: '2小时',
        familyFriendly: true,
        tags: ['博物馆', '亲子', '互动', '必游']
      },
      {
        name: '卢塞恩→因特拉肯自驾',
        nameEn: 'Drive to Interlaken',
        description: '经布伦尼格山口（Brünig Pass）驾车，途经龙疆小镇（Lungern）。翡翠绿湖泊+雪山，沿途风景美到窒息，约1小时抵达因特拉肯。',
        imageUrl: '/generated-images/Lungern_lake_in_Switzerland__e_2026-04-21T13-40-17.png',
        duration: '1小时',
        familyFriendly: true,
        tags: ['自驾', '湖泊', '风景', '龙疆']
      }
    ],
    hotel: {
      name: 'SAVOY 26',
      stars: 3,
      priceRange: 'CHF 200-350',
      address: '阿尔卑斯大街26号',
      addressEn: '26 Alpenstrasse, 3800 Interlaken, Switzerland',
      familyRoom: true,
      features: ['2卧室公寓', '阳台+露台', '连住第1晚', '无需换酒店', '山景房'],
      lat: 46.6867,
      lng: 7.8558,
      cancellation: {
        freeUntil: '2026-06-11T23:59:00+02:00',
        freeCancellationFee: 'CHF 0',
        afterDeadlineFee: '全额扣款',
        notes: '2026年6月11日下午11:59 CEST前免费取消'
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
        type: 'car',
        from: '卢塞恩',
        to: '因特拉肯',
        duration: '1小时',
        cost: 'CHF 15油费',
        bookingTip: '经布伦尼格山口和龙疆小镇，沿途风景绝美'
      }
    ]
  },

  // Day 9: 因特拉肯·少女峰
  {
    day: 9,
    date: '6月20日',
    cityId: 'interlaken',
    title: '少女峰·欧洲屋脊',
    summary: '搭乘红色齿轨火车登顶少女峰3454米，斯芬克斯观景台、冰宫探险、阿莱奇冰川。',
    attractions: [
      {
        name: '少女峰',
        nameEn: 'Jungfraujoch',
        description: '欧洲屋脊，海拔3454米。搭乘红色齿轨火车穿越艾格峰，抵达斯芬克斯观景台，360度雪山全景。冰宫探险、阿莱奇冰川震撼体验。',
        imageUrl: '/generated-images/Jungfraujoch_Top_of_Europe_at__2026-04-21T13-50-46.png',
        duration: '全天',
        familyFriendly: true,
        tags: ['雪山', '必游', '观景', '冰川']
      }
    ],
    hotel: {
      name: 'SAVOY 26',
      stars: 3,
      priceRange: 'CHF 200-350',
      address: '阿尔卑斯大街26号',
      addressEn: '26 Alpenstrasse, 3800 Interlaken, Switzerland',
      familyRoom: true,
      features: ['2卧室公寓', '阳台+露台', '连住第2晚', '无需换酒店', '山景房'],
      lat: 46.6867,
      lng: 7.8558,
      cancellation: {
        freeUntil: '2026-06-11T23:59:00+02:00',
        freeCancellationFee: 'CHF 0',
        afterDeadlineFee: '全额扣款',
        notes: '2026年6月11日下午11:59 CEST前免费取消'
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

  // Day 10: 因特拉肯·格林德尔瓦+劳特布龙嫩
  {
    day: 10,
    date: '6月21日',
    cityId: 'interlaken',
    title: '格林德尔瓦First+劳特布龙嫩',
    summary: '上午First滑索和秋千，Bachalpsee湖徒步。下午劳特布龙嫩72条瀑布，特吕默尔巴赫瀑布探险。',
    attractions: [
      {
        name: 'First菲尔斯特',
        nameEn: 'First Grindelwald',
        description: '格林德尔瓦First缆车6分钟到2168米。First Flyer滑索800米、80km/h速度飞翔；First Glider悬崖秋千俯瞰艾格峰；徒步1小时到Bachalpsee镜面湖泊欣赏雪山倒影。',
        imageUrl: '/generated-images/First_Flyer_zip_line_in_Grinde_2026-04-21T13-50-45.png',
        duration: '4小时',
        familyFriendly: true,
        tags: ['缆车', '滑索', '徒步', '刺激']
      },
      {
        name: '劳特布龙嫩瀑布群',
        nameEn: 'Lauterbrunnen Valley',
        description: '瑞士最美U型山谷，72条瀑布。施陶河瀑布297米落差（欧洲最高自由落体）；特吕默尔巴赫瀑布10条瀑布在山体内，冰川融水震撼体验。',
        imageUrl: '/generated-images/Lauterbrunnen_valley_Switzerla_2026-04-21T13-23-13.png',
        duration: '3小时',
        familyFriendly: true,
        tags: ['瀑布', '自然', '震撼', '必游']
      }
    ],
    hotel: {
      name: 'SAVOY 26',
      stars: 3,
      priceRange: 'CHF 200-350',
      address: '阿尔卑斯大街26号',
      addressEn: '26 Alpenstrasse, 3800 Interlaken, Switzerland',
      familyRoom: true,
      features: ['2卧室公寓', '阳台+露台', '连住第3晚', '无需换酒店', '山景房'],
      lat: 46.6867,
      lng: 7.8558,
      cancellation: {
        freeUntil: '2026-06-11T23:59:00+02:00',
        freeCancellationFee: 'CHF 0',
        afterDeadlineFee: '全额扣款',
        notes: '2026年6月11日下午11:59 CEST前免费取消'
      }
    },
    restaurants: [
      {
        name: 'Restaurant Glacier',
        cuisine: '瑞士传统',
        priceLevel: 3,
        specialties: ['Rösti煎土豆饼', '阿尔卑斯烤肉'],
        kidFriendly: true
      }
    ],
    transport: [
      {
        type: 'train',
        from: '因特拉肯',
        to: '格林德尔瓦/劳特布龙嫩',
        duration: '往返4小时',
        cost: 'CHF 30缆车+CHF 12瀑布',
        bookingTip: 'Swiss Travel Pass 50%折扣，火车免费'
      }
    ]
  },

  // Day 11: 因特拉肯→采尔马特
  {
    day: 11,
    date: '6月22日',
    cityId: 'zermatt',
    title: '因特拉肯→采尔马特',
    summary: '上午哈德昆观景台俯瞰双湖全景（可选），午餐后驾车至Täsch停车，火车进入采尔马特无车小镇。下午镇内漫步，寻找马特洪峰最佳拍摄点。',
    attractions: [
      {
        name: '哈德昆观景台',
        nameEn: 'Harder Kulm',
        description: '因特拉肯最佳观景点，缆车8分钟抵达1322米。俯瞰图恩湖、布里恩茨湖双湖全景，背景是艾格峰、僧侣峰、少女峰三座雪山。',
        imageUrl: '/generated-images/Harder_Kulm_viewing_platform_a_2026-04-21T13-53-57.png',
        duration: '2小时',
        familyFriendly: true,
        tags: ['观景', '缆车', '双湖', '雪山']
      },
      {
        name: 'Täsch停车+采尔马特',
        nameEn: 'Täsch Parking & Zermatt',
        description: '采尔马特是无车小镇，需在Täsch停车场停车（CHF 15/天）。搭乘火车10分钟抵达采尔马特，电瓶车送至酒店。',
        imageUrl: '/generated-images/Zermatt_car_free_village_Switz_2026-04-21T13-53-55.png',
        duration: '2.5小时',
        familyFriendly: true,
        tags: ['自驾', '停车', '火车']
      },
      {
        name: '采尔马特镇内漫步',
        nameEn: 'Zermatt Village Walk',
        description: '无车环保小镇，只有电瓶车和马车。班霍夫大街购物，寻找马特洪峰最佳拍摄角度。Kirchbrücke桥是经典机位，马特洪峰倒影清晰可见。',
        imageUrl: '/generated-images/Kirchbr_cke_bridge_in_Zermatt__2026-04-21T13-54-08.png',
        duration: '2小时',
        familyFriendly: true,
        tags: ['小镇', '摄影', '购物']
      }
    ],
    hotel: {
      name: 'Elfi - luxury mountain bijou by Inspiringplaces',
      stars: 5,
      priceRange: 'CHF 300-500',
      address: '采尔马特',
      addressEn: 'Zermatt, Switzerland',
      familyRoom: true,
      features: ['奢华山景公寓', '设计师风格', '马特洪峰景观', '无车小镇', '连住第1晚'],
      lat: 46.0207,
      lng: 7.7491,
      cancellation: {
        freeUntil: '2026-05-23',
        freeCancellationFee: 'CHF 0',
        afterDeadlineFee: '全额扣款',
        notes: '2026年5月23日前可免费取消'
      }
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
        cost: 'CHF 30/2天停车费',
        bookingTip: 'Täsch停车场24小时营业，Täsch→采尔马特火车CHF 8.40/人'
      }
    ]
  },

  // Day 12: 采尔马特·马特洪峰深度游
  {
    day: 12,
    date: '6月23日',
    cityId: 'zermatt',
    title: '马特洪峰·两大观景台',
    summary: '全天深度游览马特洪峰，上午戈尔内格拉特观景台（3089米），下午马特洪峰冰川天堂缆车（3883米），欧洲最高缆车站。',
    attractions: [
      {
        name: '戈尔内格拉特观景台',
        nameEn: 'Gornergrat Observatory',
        description: '搭乘齿轨火车33分钟抵达3089米观景台。360度全景：马特洪峰、罗莎峰、利斯卡姆峰等29座4000米+雪山，戈尔内冰川震撼。世界第一条电气化齿轨铁路（1898年）。',
        imageUrl: '/generated-images/Gornergrat_observation_platfor_2026-04-21T13-55-35.png',
        duration: '4小时',
        familyFriendly: true,
        tags: ['观景台', '齿轨火车', '冰川', '必游']
      },
      {
        name: '马特洪峰冰川天堂',
        nameEn: 'Matterhorn Glacier Paradise',
        description: '欧洲最高缆车站3883米，距离马特洪峰最近的观景点。冰宫探险、全景观景台、冰川滑雪。缆车分三段：Furi→Schwarzsee→Trockener Steg→Glacier Paradise。',
        imageUrl: '/generated-images/Matterhorn_Glacier_Paradise_ca_2026-04-21T13-56-06.png',
        duration: '4小时',
        familyFriendly: true,
        tags: ['缆车', '观景', '冰川', '欧洲之最']
      }
    ],
    hotel: {
      name: 'Elfi - luxury mountain bijou by Inspiringplaces',
      stars: 5,
      priceRange: 'CHF 300-500',
      address: '采尔马特',
      addressEn: 'Zermatt, Switzerland',
      familyRoom: true,
      features: ['奢华山景公寓', '设计师风格', '马特洪峰景观', '无车小镇', '连住第2晚'],
      lat: 46.0207,
      lng: 7.7491,
      cancellation: {
        freeUntil: '2026-05-23',
        freeCancellationFee: 'CHF 0',
        afterDeadlineFee: '全额扣款',
        notes: '2026年5月23日前可免费取消'
      }
    },
    restaurants: [
      {
        name: 'Restaurant Walliserkanne',
        cuisine: '瑞士传统',
        priceLevel: 3,
        specialties: ['瓦莱州羊肉', '奶酪火锅', 'Raclette烤奶酪'],
        kidFriendly: true
      }
    ],
    transport: [
      {
        type: 'train',
        from: '采尔马特',
        to: '戈尔内格拉特',
        duration: '往返4小时',
        cost: 'CHF 95/人',
        bookingTip: '建议早上8点出发，Swiss Travel Pass 50%折扣'
      },
      {
        type: 'cable',
        from: '采尔马特',
        to: '冰川天堂',
        duration: '往返4小时',
        cost: 'CHF 105/人',
        bookingTip: '下午前往，Swiss Travel Pass 50%折扣'
      }
    ]
  },

  // Day 13: 采尔马特日出→里昂
  {
    day: 13,
    date: '6月24日',
    cityId: 'lyon',
    title: '马特洪峰日出→里昂',
    summary: '清晨5点戈尔内格拉特观景台看马特洪峰日出（日照金山）。回镇吃早餐，10点回Täsch取车，驾车350km抵达法国美食之都里昂。下午游览老城Traboules秘密通道，富维耶圣母院日落。傍晚驱车前往Ouches，在米其林三星Troisgros享用顶级法餐。',
    attractions: [
      {
        name: '马特洪峰日出',
        nameEn: 'Matterhorn Sunrise at Gornergrat',
        description: '凌晨5点搭乘第一班齿轨火车上山，在3089米观景台等待日出。第一缕阳光照亮马特洪峰4478米的完美三角锥，日照金山震撼瞬间。带保暖衣物，山顶温度-5℃。',
        imageUrl: '/generated-images/Matterhorn_sunrise_at_Gornergr_2026-04-21T13-57-20.png',
        duration: '4小时',
        familyFriendly: true,
        tags: ['日出', '马特洪峰', '必看', '摄影']
      },
      {
        name: '采尔马特→里昂自驾',
        nameEn: 'Drive to Lyon',
        description: '回Täsch取车，沿着瑞士罗纳河谷南下，经日内瓦湖区。约350km、4-5小时抵达里昂。途经美丽的阿尔卑斯风光。',
        imageUrl: '/generated-images/Rhone_Valley_drive_from_Switze_2026-04-21T13-57-26.png',
        duration: '4-5小时',
        familyFriendly: true,
        tags: ['自驾', '风景', '阿尔卑斯']
      },
      {
        name: '里昂老城Traboules',
        nameEn: 'Vieux-Lyon Traboules',
        description: 'UNESCO世界遗产，文艺复兴建筑群。Traboules是里昂特色秘密通道，连接街道与庭院，二战时抵抗组织藏身地。孩子最爱探险寻宝。',
        imageUrl: '/generated-images/Traboules_secret_passages_in_L_2026-04-21T13-57-23.png',
        duration: '2小时',
        familyFriendly: true,
        tags: ['世界遗产', '老城', '探险', '秘密通道']
      },
      {
        name: '富维耶圣母院',
        nameEn: 'Basilique Notre-Dame de Fourvière',
        description: '里昂地标，白色大教堂矗立于富维耶山顶，俯瞰全城。拜占庭+罗马风格华丽壮观，内部马赛克装饰震撼。傍晚前往看日落。',
        imageUrl: '/generated-images/Basilique_Notre_Dame_de_Fourvi_2026-04-21T13-57-45.png',
        duration: '1.5小时',
        familyFriendly: true,
        tags: ['教堂', '观景', '地标', '日落']
      },
      {
        name: 'Troisgros - Le Bois sans Feuilles',
        nameEn: 'Troisgros - Le Bois sans Feuilles (3 Michelin Stars)',
        description: '米其林三星！Troisgros家族第四代传人César Troisgros主理，连续55年以上三星。17公顷庄园中的全玻璃U型餐厅，中央矗立2000年古树。食材至上、融入日式美学的极致法餐，招牌酸味运用独步天下。距里昂约1小时车程。',
        imageUrl: '/generated-images/Realistic_photo_of_Troisgros_r_2026-04-26T09-05-57.png',
        duration: '3小时',
        familyFriendly: true,
        tags: ['米其林三星', '美食', '庄园', '顶级法餐']
      }
    ],
    hotel: {
      name: 'Lyon Marriott Hotel Cité Internationale',
      stars: 4,
      priceRange: '€200-400',
      address: '里昂国际城，70 Quai Charles de Gaulle',
      addressEn: '70 Quai Charles de Gaulle, 69006 Lyon, France',
      familyRoom: true,
      features: ['国际品牌', '罗纳河畔', '现代设计', '室内泳池', '健身中心'],
      lat: 45.7840,
      lng: 4.8563,
      cancellation: {
        freeUntil: '2026-06-23',
        freeCancellationFee: '€0',
        afterDeadlineFee: '全额扣款',
        notes: '2026年6月23日前可免费取消'
      }
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
        name: 'Troisgros - Le Bois sans Feuilles',
        cuisine: '米其林三星·创意法餐',
        priceLevel: 4,
        specialties: ['食材至上的极致法餐', '日式美学融合', '招牌酸味运用', '超凡酒类配餐', '17公顷庄园用餐体验'],
        kidFriendly: true,
        dressCode: '👔 Elegant — 官方要求：男士须穿长裤和包头鞋（full-length pants & closed shoes），女士优雅得体。三星级别，务必注意着装',
        address: '728 Route de Villerest, 42155 Ouches',
        addressEn: '728 Route de Villerest, 42155 Ouches, France',
        lat: 46.0167,
        lng: 4.0333,
        reservation: {
          date: '2026年6月24日（星期三）',
          time: '20:00',
          guests: 4,
          platform: 'Troisgros官网',
          confirmed: true,
          notes: 'Menu "Ce jour-là" 套餐（6 Plats + Fromages + Desserts），€390/人'
        }
      }
    ],
    transport: [
      {
        type: 'train',
        from: '采尔马特',
        to: '戈尔内格拉特',
        duration: '往返2小时',
        cost: 'CHF 95/人',
        bookingTip: '首班车5:00出发，需提前购票'
      },
      {
        type: 'car',
        from: '采尔马特(Täsch)',
        to: '里昂',
        duration: '4-5小时',
        cost: '€80-100（油费+高速费）',
        bookingTip: '经日内瓦湖区，风景优美'
      }
    ]
  },

  // Day 14: 里昂→博讷（新增博讷住宿）
  {
    day: 14,
    date: '6月25日',
    cityId: 'beaune',
    title: '里昂→博讷·勃艮第中世纪古城',
    summary: '上午驾车从里昂到博讷（1.5h），深度游览主宫医院、博讷中世纪城墙、Bouzaize公园、Savigny城堡（飞机摩托车收藏）。傍晚博讷老城散步，享用勃艮第美食晚餐。',
    attractions: [
      {
        name: '里昂→博讷自驾',
        nameEn: 'Drive to Beaune',
        description: '沿A6高速北上，穿越勃艮第葡萄酒产区。约1小时40分抵达博讷，途经Mâcon。沿途可欣赏连绵的葡萄园风光。',
        imageUrl: '/generated-images/Burgundy_wine_region_near_Beau_2026-04-21T13-59-18.png',
        duration: '1.5小时',
        familyFriendly: true,
        tags: ['自驾', '葡萄酒区']
      },
      {
        name: '主宫医院',
        nameEn: 'Hospices de Beaune',
        description: 'UNESCO世界遗产，15世纪慈善医院，标志性彩色琉璃瓦屋顶。内有精美的15世纪多联画屏《最后的审判》。每年11月举办全球最著名的慈善葡萄酒拍卖会。',
        imageUrl: '/generated-images/Hospices_de_Beaune_medieval_ho_2026-04-21T13-59-16.png',
        duration: '1.5小时',
        familyFriendly: true,
        tags: ['世界遗产', '建筑', '历史', '必游']
      },
      {
        name: 'Savigny-lès-Beaune城堡',
        nameEn: 'Château de Savigny-lès-Beaune',
        description: '博讷近郊最有趣的城堡，除了14世纪古堡建筑本身，还收藏了大量摩托车、赛车、战斗机等。孩子们的天堂，大人也觉得新奇。距博讷仅5公里车程。',
        imageUrl: '/generated-images/Chateau_de_Savigny_les_Beaune__2026-04-21T13-59-17.png',
        duration: '1.5小时',
        familyFriendly: true,
        tags: ['城堡', '博物馆', '亲子', '收藏']
      },
      {
        name: 'Bouzaize公园',
        nameEn: 'Parc de la Bouzaize',
        description: '博讷市中心的美丽公园，绿荫环绕，有小湖、鸭群和儿童游乐设施。非常适合下午散步放松，孩子们可以在草坪上奔跑嬉戏。',
        imageUrl: '/generated-images/Parc_de_la_Bouzaize_in_Beaune__2026-04-21T13-59-18.png',
        duration: '1小时',
        familyFriendly: true,
        tags: ['公园', '亲子', '休闲', '自然']
      },
      {
        name: '博讷老城漫步',
        nameEn: 'Beaune Old Town Walk',
        description: '中世纪城墙环绕的老城，石板街道、半木结构房屋。沿保存完好的城墙步行一圈（约2km），参观圣母教堂欣赏15世纪挂毯《圣母生平》，老城广场感受勃艮第悠闲氛围。',
        imageUrl: '/generated-images/Beaune_old_town_France__mediev_2026-04-21T13-59-15.png',
        duration: '2小时',
        familyFriendly: true,
        tags: ['老城', '城墙', '教堂', '散步']
      }
    ],
    hotel: {
      name: 'La Maison de Maurice',
      stars: 4,
      priceRange: '€150-300',
      address: '博讷市中心',
      addressEn: 'Beaune, 21200, France',
      familyRoom: true,
      features: ['勃艮第风格', '家庭友好', '步行可达主宫医院', '温馨舒适'],
      lat: 47.0230,
      lng: 4.8400,
      cancellation: {
        freeUntil: '2026-06-20',
        freeCancellationFee: '€0',
        afterDeadlineFee: '全额扣款',
        notes: '2026年6月20日前可免费取消'
      }
    },
    restaurants: [
      {
        name: 'Loiseau des Vignes',
        cuisine: '米其林法餐',
        priceLevel: 4,
        specialties: ['勃艮第红酒炖牛肉', '勃艮第蜗牛', '松露料理'],
        kidFriendly: true,
        dressCode: '👔 Smart Casual — Loiseau集团旗下，建议整洁得体着装'
      },
      {
        name: 'Caves Madeleine',
        cuisine: '传统勃艮第菜',
        priceLevel: 2,
        specialties: ['火腿奶酪拼盘', '勃艮第煎蛋', '当地香肠'],
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
      }
    ]
  },

  // Day 15: 博讷→巴黎CDG→返程
  {
    day: 15,
    date: '6月26日',
    cityId: 'beaune',
    title: '博讷→巴黎CDG→返程(飞行日)',
    summary: '上午勃艮第田园风光短途驾车游览，午餐后驾车返回巴黎CDG（3h），晚上23:55法航AF186直飞香港。',
    attractions: [
      {
        name: '勃艮第田园风光之路',
        nameEn: 'Route des Grands Crus - Scenic Drive',
        description: '上午短途驾车游览勃艮第乡村。途经Pommard、Volnay、Meursault等古朴小村庄，金色石墙与翠绿田野交相辉映。停车漫步村庄小巷，感受法国乡村的宁静与美好。',
        imageUrl: '/generated-images/Route_des_Grands_Crus_Burgundy_2026-04-21T14-07-37.png',
        duration: '2小时',
        familyFriendly: true,
        tags: ['乡村', '自驾', '风景', '田园']
      },
      {
        name: '博讷→巴黎CDG',
        nameEn: 'Drive to Paris CDG',
        description: '沿A6高速返回巴黎戴高乐机场，全程约310km、3小时。建议14:00出发，17:30抵达机场，提前3.5小时办理登机。还车后前往航站楼。',
        imageUrl: '/generated-images/A6_highway_drive_from_Beaune_t_2026-04-21T14-07-44.png',
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
    // Day 15 无住宿（当天返程）
    restaurants: [
      {
        name: 'La Bisotte',
        cuisine: '勃艮第小酒馆',
        priceLevel: 2,
        specialties: ['芥末酱烤兔肉', '勃艮第炖鸡', '当地奶酪'],
        kidFriendly: true
      },
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
        from: '博讷',
        to: '巴黎CDG',
        duration: '3小时',
        cost: '€65（油费+过路费）',
        bookingTip: 'A6高速直达 | Hertz还车：CDG T1&2F（Charles De Gaulle Airport, 95700 Roissy）| 还车 6月26日(周五) 21:00前 | 营业时间 Mo-Su 0600-2400'
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
