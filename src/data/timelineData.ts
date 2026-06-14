import { TimelineEvent } from '../types'

// 15天行程详细时间线
// Day 1~15 对应 tripData 中的 day 编号

export const timelineData: Record<number, TimelineEvent[]> = {
  // ===== Day 1: 香港→巴黎(飞行日) 6月12日 =====
  1: [
    {
      time: '18:00',
      endTime: '19:00',
      title: '前往香港机场',
      description: '从深圳出发，经深圳湾口岸过关，搭乘巴士或商务车前往香港国际机场。',
      type: 'transport',
      icon: '🚗',
      duration: '1小时',
      location: '深圳→香港国际机场'
    },
    {
      time: '19:00',
      endTime: '20:30',
      title: '办理登机 & 晚餐',
      description: '提前3小时到达T1航站楼，办理法航值机、托运行李。在机场餐厅或贵宾室享用晚餐。',
      type: 'meal',
      icon: '🍽️',
      duration: '1.5小时',
      location: '香港国际机场T1'
    },
    {
      time: '20:30',
      endTime: '22:30',
      title: '免税店购物 & 候机',
      description: '逛免税店，购买零食和旅途用品。提前30分钟到登机口。',
      type: 'free',
      icon: '🛒',
      duration: '2小时',
      location: '香港国际机场免税区'
    },
    {
      time: '23:00',
      title: '法航AF185起飞 ✈️',
      description: '香港→巴黎戴高乐CDG，飞行约13小时。建议调整手表为巴黎时间(UTC+2)，飞机上尽量休息。',
      type: 'flight',
      icon: '✈️',
      duration: '13小时',
      location: '香港→巴黎CDG 2E航站楼'
    }
  ],

  // ===== Day 2: 巴黎右岸经典 6月13日 =====
  2: [
    {
      time: '06:00',
      endTime: '07:00',
      title: '抵达巴黎CDG',
      description: '抵达戴高乐机场2E航站楼，过海关、取行李。',
      type: 'transport',
      icon: '🛬',
      duration: '1小时',
      location: '巴黎CDG 2E航站楼'
    },
    {
      time: '07:00',
      endTime: '08:00',
      title: '机场前往市区寄存点',
      description: '乘出租车或Uber从戴高乐机场前往巴黎1区行李寄存点，约45-60分钟。',
      type: 'transport',
      icon: '🚕',
      duration: '1小时',
      location: 'CDG→20 Rue Jean Jacques Rousseau, 75001 Paris'
    },
    {
      time: '08:00',
      endTime: '08:15',
      title: '🧳 行李寄存',
      description: '将大件行李寄存在 20 Rue Jean Jacques Rousseau, 75001 Paris。轻装上阵游览巴黎！',
      type: 'transport',
      icon: '🧳',
      duration: '15分钟',
      location: '20 Rue Jean Jacques Rousseau, 75001 Paris'
    },
    {
      time: '08:15',
      endTime: '09:00',
      title: '早餐·Les Halles区',
      description: '行李寄存点附近就是Les Halles区域，在附近面包店享用法式早餐（可颂、咖啡）。推荐 Stohrer（巴黎最古老的面包店，1730年创立）。',
      type: 'meal',
      icon: '🥐',
      duration: '45分钟',
      location: 'Les Halles / Rue Montorgueil 区域'
    },
    {
      time: '09:00',
      endTime: '10:30',
      title: '🏙️ 香榭丽舍大道 & 凯旋门',
      description: '乘地铁至 Charles de Gaulle Étoile 站。沿香榭丽舍大道漫步，登凯旋门284级台阶，俯瞰12条放射状大道壮观景象。上午游客较少。',
      type: 'attraction',
      icon: '🏙️',
      duration: '1.5小时',
      location: 'Champs-Élysées & Arc de Triomphe'
    },
    {
      time: '10:30',
      endTime: '11:15',
      title: '午餐·香榭丽舍附近',
      description: '在香榭丽舍大道附近享用轻便午餐，为下午卢浮宫做准备。推荐 Ladurée 或附近的小酒馆。',
      type: 'meal',
      icon: '🥗',
      duration: '45分钟',
      location: '香榭丽舍大道附近'
    },
    {
      time: '11:15',
      endTime: '11:30',
      title: '地铁前往杜乐丽花园',
      description: '从 George V 站搭 M1 到 Tuileries 站，约10分钟。',
      type: 'transport',
      icon: '🚇',
      duration: '15分钟',
      location: 'George V → Tuileries (M1)'
    },
    {
      time: '11:30',
      endTime: '13:00',
      title: '🌳 杜乐丽花园散步',
      description: '在卢浮宫旁的杜乐丽花园悠闲散步，等待13:00卢浮宫入场。花园内有喷泉、雕塑，孩子可以在草坪上休息。飞行后正好放松一下。',
      type: 'attraction',
      icon: '🌳',
      duration: '1.5小时',
      location: 'Jardin des Tuileries, 75001 Paris'
    },
    {
      time: '13:00',
      endTime: '16:00',
      title: '🏛️ 卢浮宫（已预订13:00场次）',
      description: '世界三大博物馆之首。已预订13:00入场。推荐路线：蒙娜丽莎→胜利女神→断臂维纳斯→德农馆→法国绘画区。建议使用官方APP中文导览。下午场人流逐渐减少，体验更佳。',
      type: 'attraction',
      icon: '🏛️',
      duration: '3小时',
      location: 'Musée du Louvre'
    },
    {
      time: '16:00',
      endTime: '16:15',
      title: '步行前往行李寄存点',
      description: '卢浮宫距离寄存点仅约800米步行距离，取回寄存的行李。',
      type: 'transport',
      icon: '🚶',
      duration: '15分钟',
      location: '卢浮宫→20 Rue Jean Jacques Rousseau'
    },
    {
      time: '16:15',
      endTime: '16:30',
      title: '🧳 取回行李',
      description: '从寄存点取回大件行李，准备前往公寓办理入住。',
      type: 'transport',
      icon: '🧳',
      duration: '15分钟',
      location: '20 Rue Jean Jacques Rousseau, 75001 Paris'
    },
    {
      time: '16:30',
      endTime: '17:30',
      title: '🏨 公寓 Check-in',
      description: '前往Sweett - Atelier Ponthieu公寓（巴黎8区，香榭丽舍大街旁）办理入住。放下行李，短暂休息梳洗。入住时间16:00起。',
      type: 'hotel',
      icon: '🏨',
      duration: '1小时',
      location: '52 Rue de Ponthieu, 75008 Paris'
    },
    {
      time: '17:30',
      endTime: '18:30',
      title: '公寓休息 & 整理',
      description: '长途飞行后短暂休息，整理行李，换上晚餐合适的衣服。',
      type: 'free',
      icon: '🛋️',
      duration: '1小时',
      location: 'Sweett - Atelier Ponthieu, 巴黎8区'
    },
    {
      time: '19:00',
      endTime: '20:30',
      title: '晚餐·Septime',
      description: '现代法餐米其林一星，需提前数周预约。如订不到可选附近Le Casse Noix等小酒馆。',
      type: 'meal',
      icon: '🍷',
      duration: '1.5小时',
      location: '11区或公寓附近'
    },
    {
      time: '21:00',
      title: '回公寓休息',
      description: '长途飞行后的第一天，注意时差调整，早点休息。',
      type: 'rest',
      icon: '😴',
      location: 'Sweett - Atelier Ponthieu, 巴黎8区'
    }
  ],

  // ===== Day 3: 巴黎左岸艺术·橘园·圣母院 6月14日 =====
  3: [
    {
      time: '08:00',
      endTime: '09:00',
      title: '酒店早餐',
      description: '在公寓附近面包店享用法式早餐。',
      type: 'meal',
      icon: '🥐',
      duration: '1小时',
      location: '公寓附近, 巴黎8区'
    },
    {
      time: '09:00',
      endTime: '09:30',
      title: '地铁前往奥赛',
      description: 'Porte Maillot→Solférino站，M1转RER C约25分钟。',
      type: 'transport',
      icon: '🚇',
      duration: '30分钟'
    },
    {
      time: '09:30',
      endTime: '12:00',
      title: '🎨 奥赛博物馆',
      description: '印象派艺术殿堂。必看：莫奈《睡莲》《印象·日出》、梵高《自画像》《星夜咖啡馆》、雷诺阿《煎饼磨坊的舞会》。5楼大钟后面拍巴黎全景。',
      type: 'attraction',
      icon: '🎨',
      duration: '2.5小时',
      location: "Musée d'Orsay"
    },
    {
      time: '12:00',
      endTime: '12:15',
      title: '步行前往橘园',
      description: '从奥赛博物馆过桥步行约10分钟即到杜乐丽花园内的橘园美术馆。',
      type: 'transport',
      icon: '🚶',
      duration: '15分钟',
      location: "Musée d'Orsay → Musée de l'Orangerie"
    },
    {
      time: '12:15',
      endTime: '13:30',
      title: '🎨 橘园美术馆',
      description: '杜乐丽花园内，两个椭圆形展厅360度环绕莫奈晚年巨型睡莲。刚在奥赛看完印象派画作，再到橘园沉浸式欣赏莫奈巨幅睡莲，衔接完美！',
      type: 'attraction',
      icon: '🎨',
      duration: '1.25小时',
      location: "Musée de l'Orangerie, Tuileries"
    },
    {
      time: '13:30',
      endTime: '14:00',
      title: '步行前往La Jacobine',
      description: '从橘园沿塞纳河左岸向东步行约20分钟，经过圣日耳曼区，前往拉丁区的La Jacobine餐厅。',
      type: 'transport',
      icon: '🚶',
      duration: '30分钟',
      location: "Orangerie → Rue Saint-André des Arts"
    },
    {
      time: '14:00',
      endTime: '15:00',
      title: '午餐·La Jacobine',
      description: '已预订12:30，4人（可改时间或直接walk-in）。位于拉丁区圣安德烈街的法式餐厅，环境温馨。距巴黎圣母院步行仅10分钟。',
      type: 'meal',
      icon: '🍽️',
      duration: '1小时',
      location: '59-61 Rue Saint-André des Arts, 75006 Paris'
    },
    {
      time: '15:00',
      endTime: '15:15',
      title: '步行前往巴黎圣母院',
      description: '从La Jacobine过桥步行10分钟即到西岱岛圣母院。',
      type: 'transport',
      icon: '🚶',
      duration: '15分钟',
      location: 'Saint-André des Arts → Notre-Dame'
    },
    {
      time: '15:45',
      endTime: '16:45',
      title: '⛪ 巴黎圣母院（已预约15:45入场）',
      description: '2024年底修复重新开放！已预约15:45入场（Shaojun Yun名义）。哥特式建筑杰作，全新修复的玫瑰花窗、飞扶壁、尖塔。务必准时到达入口。',
      type: 'attraction',
      icon: '⛪',
      duration: '1小时',
      location: 'Notre-Dame de Paris, Île de la Cité'
    },
    {
      time: '16:45',
      endTime: '17:15',
      title: '地铁前往蒙马特',
      description: 'Cité→Anvers站，M4转M2约20分钟。',
      type: 'transport',
      icon: '🚇',
      duration: '30分钟'
    },
    {
      time: '17:15',
      endTime: '19:00',
      title: '⛪ 蒙马特高地 & 圣心教堂',
      description: '登上蒙马特高地，圣心教堂白色圆顶是巴黎制高点。台阶上坐下看街头艺人表演，小丘广场看画家作画。等待日落。',
      type: 'attraction',
      icon: '⛪',
      duration: '1.75小时',
      location: 'Montmartre & Sacré-Cœur'
    },
    {
      time: '19:00',
      endTime: '19:45',
      title: '前往L\'Oiseau Blanc',
      description: '从蒙马特搭地铁前往16区半岛酒店顶层的L\'Oiseau Blanc餐厅，约30分钟。',
      type: 'transport',
      icon: '🚇',
      duration: '45分钟',
      location: '蒙马特→巴黎16区'
    },
    {
      time: '19:45',
      endTime: '21:30',
      title: '🍷 L\'Oiseau Blanc 晚餐',
      description: '米其林星级法餐，半岛酒店屋顶餐厅，已预订19:45（4人）。埃菲尔铁塔全景，精致法式料理。需着正式优雅服装。',
      type: 'meal',
      icon: '🌟',
      duration: '1.75小时',
      location: 'L\'Oiseau Blanc, 19 Avenue Kléber, 75116 Paris'
    },
    {
      time: '22:00',
      title: '回酒店休息',
      type: 'rest',
      icon: '😴'
    }
  ],

  // ===== Day 4: 巴黎漫步·圣日耳曼&玛黑 6月15日 =====
  4: [
    {
      time: '09:00',
      endTime: '10:00',
      title: '悠闲早餐',
      description: '不设闹钟，自然醒后在公寓附近的面包店享用法式早餐。为明天的凡尔赛+莫奈充实日养精蓄锐。',
      type: 'meal',
      icon: '🥐',
      duration: '1小时',
      location: '公寓附近, 巴黎8区'
    },
    {
      time: '10:00',
      endTime: '10:30',
      title: '地铁前往圣日耳曼区',
      description: '从公寓搭地铁M1到Saint-Germain-des-Prés站，约20分钟。',
      type: 'transport',
      icon: '🚇',
      duration: '30分钟'
    },
    {
      time: '10:30',
      endTime: '12:30',
      title: '🛍️ 圣日耳曼区漫步 & 甜品',
      description: '巴黎最文艺的街区！逛Shakespeare and Company书店（塞纳河畔传奇英文书店）、Pierre Hermé品尝顶级马卡龙、Café de Flore或Les Deux Magots门口打卡拍照。沿Rue de Seine逛画廊和vintage小店，孩子可以挑选纪念品。',
      type: 'attraction',
      icon: '🛍️',
      duration: '2小时',
      location: 'Saint-Germain-des-Prés, 75006 Paris'
    },
    {
      time: '12:30',
      endTime: '13:30',
      title: '午餐·圣日耳曼区',
      description: '在圣日耳曼区选一家小餐馆享用午餐，推荐Le Comptoir du Panthéon或附近的小酒馆。',
      type: 'meal',
      icon: '🍽️',
      duration: '1小时',
      location: 'Saint-Germain-des-Prés'
    },
    {
      time: '13:30',
      endTime: '14:00',
      title: '地铁前往玛黑区',
      description: '搭地铁前往玛黑区（Saint-Paul站），约15分钟。',
      type: 'transport',
      icon: '🚇',
      duration: '30分钟'
    },
    {
      time: '14:00',
      endTime: '16:30',
      title: '🏘️ 玛黑区探店',
      description: '巴黎最潮街区。犹太街L\'As du Fallafel中东美食、vintage服饰店、Place des Vosges（孚日广场）漫步、精品咖啡馆。孩子可以在广场公园玩耍。',
      type: 'attraction',
      icon: '🏘️',
      duration: '2.5小时',
      location: 'Le Marais, 75004 Paris'
    },
    {
      time: '16:30',
      endTime: '17:00',
      title: '地铁前往铁塔',
      description: '从玛黑区 Saint-Paul 站搭 M1 到 Franklin D. Roosevelt，换 M9 到 Trocadéro 站（约20分钟）。',
      type: 'transport',
      icon: '🚇',
      duration: '30分钟',
      location: 'Saint-Paul → Trocadéro (M1+M9)'
    },
    {
      time: '17:00',
      endTime: '18:30',
      title: '🗼 埃菲尔铁塔',
      description: '巴黎地标！先从特罗卡德罗广场拍摄铁塔全景（最佳拍照点），再走下阶梯过桥到战神广场近距离观赏。傍晚光线柔和，非常适合拍照。可在草坪上休息，孩子也能在广场奔跑玩耍。',
      type: 'attraction',
      icon: '🗼',
      duration: '1.5小时',
      location: 'Trocadéro & Tour Eiffel & Champ de Mars'
    },
    {
      time: '18:30',
      endTime: '19:30',
      title: '晚餐·铁塔附近',
      description: '在铁塔附近用餐。推荐 Café de l\'Homme（特罗卡德罗，铁塔景观餐厅）或 Les Cocottes（Christian Constant主理，性价比高）。',
      type: 'meal',
      icon: '🍽️',
      duration: '1小时',
      location: '铁塔/特罗卡德罗附近'
    },
    {
      time: '19:30',
      endTime: '20:00',
      title: '地铁回公寓',
      description: '从 Trocadéro 搭 M9 到 Franklin D. Roosevelt 站，步行回公寓。约15分钟。',
      type: 'transport',
      icon: '🚇',
      duration: '30分钟',
      location: 'Trocadéro → Franklin D. Roosevelt (M9)'
    },
    {
      time: '20:00',
      title: '回公寓休息',
      description: '明天是凡尔赛+莫奈的充实长途日，建议早睡！可以去附近超市采购些零食和水。',
      type: 'rest',
      icon: '😴'
    }
  ],

  // ===== Day 5: 凡尔赛宫 + 莫奈花园 6月16日 =====
  5: [
    {
      time: '07:30',
      endTime: '08:15',
      title: '早餐',
      description: '早起快速早餐，今天行程紧凑！建议在公寓简单准备或去附近面包店打包带走。',
      type: 'meal',
      icon: '🥐',
      duration: '45分钟',
      location: '公寓附近, 巴黎8区'
    },
    {
      time: '08:15',
      endTime: '08:20',
      title: '步行至 Franklin D. Roosevelt 地铁站',
      description: '从公寓（52 Rue de Ponthieu）步行5分钟至最近的地铁站 Franklin D. Roosevelt（M1/M9线）。',
      type: 'transport',
      icon: '🚶',
      duration: '5分钟',
      location: '52 Rue de Ponthieu → Franklin D. Roosevelt (M9)'
    },
    {
      time: '08:20',
      endTime: '08:30',
      title: '🚇 M9地铁：Franklin D. Roosevelt → Pont de l\'Alma',
      description: '乘坐M9线（方向Pont de Sèvres），经过Alma-Marceau站，在Pont de l\'Alma站下车（仅2站，约5分钟）。跟随RER C换乘标识。',
      type: 'transport',
      icon: '🚇',
      duration: '10分钟',
      location: 'M9: Franklin D. Roosevelt → Pont de l\'Alma'
    },
    {
      time: '08:30',
      endTime: '09:05',
      title: '🚂 RER C线：Pont de l\'Alma → Versailles Château Rive Gauche',
      description: '换乘RER C线（⚠️ 确认方向为\"Versailles Château RG\"）。约29分钟车程，每30分钟一班。沿途经过Invalides、Issy等站。单程票价€4.15/人。',
      type: 'transport',
      icon: '🚂',
      duration: '35分钟',
      location: 'RER C: Pont de l\'Alma → Versailles Château Rive Gauche'
    },
    {
      time: '09:05',
      endTime: '09:15',
      title: '步行至凡尔赛宫',
      description: '从Versailles Château Rive Gauche火车站出站后，沿Avenue de Paris直行约800米（10分钟）即到凡尔赛宫正门入口。沿途有路标指引。',
      type: 'transport',
      icon: '🚶',
      duration: '10分钟',
      location: 'Gare Versailles Château Rive Gauche → Château de Versailles'
    },
    {
      time: '09:15',
      endTime: '10:20',
      title: '凡尔赛宫等候入场',
      description: '提前到达凡尔赛宫正门入口。可先在广场拍照、购买花园票，或在入口附近咖啡店休息，等待10:20中文讲解团集合。',
      type: 'free',
      icon: '🏰',
      duration: '1小时',
      location: 'Château de Versailles 入口广场'
    },
    {
      time: '10:20',
      endTime: '13:00',
      title: '👑 凡尔赛宫（10:20含中文讲解）',
      description: '已购票10:20场含中文人工讲解服务（成人2+儿童2）。讲解员带领参观镜厅、国王大居室、王后大居室、皇家礼拜堂。讲解约2小时，之后自由参观花园。',
      type: 'attraction',
      icon: '👑',
      duration: '2.5小时',
      location: 'Château de Versailles'
    },
    {
      time: '13:00',
      endTime: '13:30',
      title: '快速午餐',
      description: '在凡尔赛宫附近快速用餐（三明治或简餐），为下午赶往吉维尼做准备。',
      type: 'meal',
      icon: '🥪',
      duration: '30分钟',
      location: '凡尔赛宫附近'
    },
    {
      time: '13:30',
      endTime: '15:00',
      title: '🚂 凡尔赛→Vernon-Giverny',
      description: '从Versailles搭火车返回巴黎，再从Saint-Lazare站转乘前往Vernon的火车（约45分钟），到达后搭接驳巴士至吉维尼（15分钟）。需提前查好衔接车次。',
      type: 'transport',
      icon: '🚂',
      duration: '1.5小时',
      location: 'Versailles→Paris→Vernon→Giverny'
    },
    {
      time: '15:30',
      endTime: '17:30',
      title: '🌸 莫奈花园（已购票15:30场）',
      description: '印象派大师的灵感花园！已购票15:30入场（4份）。下午光线柔和，日本桥、睡莲池、鸢尾花园美如画作。建议先参观花园再进故居。6月是花期最美的季节！',
      type: 'attraction',
      icon: '🌸',
      duration: '2小时',
      location: 'Fondation Claude Monet, Giverny'
    },
    {
      time: '17:30',
      endTime: '17:57',
      title: '接驳巴士至Vernon火车站',
      description: '搭乘接驳巴士返回Vernon-Giverny火车站，赶17:57的火车。',
      type: 'transport',
      icon: '🚌',
      duration: '27分钟',
      location: 'Giverny→Gare de Vernon-Giverny'
    },
    {
      time: '17:57',
      endTime: '18:49',
      title: '🚂 Vernon → Paris Saint-Lazare',
      description: 'TER NOMAD（Voyageurs 1187 | 13148），17:57发车，18:49到达巴黎Saint-Lazare站。已购票。',
      type: 'transport',
      icon: '🚂',
      duration: '52分钟',
      location: 'Gare de Vernon-Giverny → Gare Saint-Lazare'
    },
    {
      time: '18:49',
      endTime: '19:15',
      title: '前往Marsan餐厅',
      description: '从Saint-Lazare搭地铁前往巴黎6区Rue d\'Assas的Marsan餐厅。',
      type: 'transport',
      icon: '🚇',
      duration: '26分钟'
    },
    {
      time: '19:15',
      endTime: '21:00',
      title: '🍷 Marsan - Hélène Darroze 晚餐',
      description: '米其林星级餐厅，已通过TheFork预订4人（19:15）。主厨Hélène Darroze的创意法餐，融合西南法风味。已获得200 Yums积分。一天的奔波后享受顶级美食犒劳自己！',
      type: 'meal',
      icon: '🍷',
      duration: '1.75小时',
      location: 'Marsan - Hélène Darroze, 4 Rue d\'Assas, 75006 Paris'
    },
    {
      time: '21:30',
      title: '回酒店·巴黎最后一晚',
      description: '明天出发去第戎，打包行李准备退房。',
      type: 'rest',
      icon: '🌙'
    }
  ],

  // ===== Day 6: 巴黎→第戎 6月17日 =====
  6: [
    {
      time: '07:30',
      endTime: '08:30',
      title: '退房 & 早餐',
      description: '早餐后退房（11:00前），取出所有行李。',
      type: 'hotel',
      icon: '🧳',
      duration: '1小时',
      location: 'Sweett - Atelier Ponthieu, 巴黎8区'
    },
    {
      time: '08:30',
      endTime: '09:30',
      title: '前往Hertz取车',
      description: '步行8-10分钟到Hertz Carrousel du Louvre门店取车（99 Rue de Rivoli，卢浮宫卡鲁塞尔商场地下2层，门店代码PARC65），距公寓仅600米。车型：Volvo XC60，熟悉车辆和导航。还车：6月26日CDG机场T1&2F。',
      type: 'transport',
      icon: '🚗',
      duration: '1小时',
      location: 'Hertz Carrousel du Louvre, 99 Rue de Rivoli, 75001 Paris'
    },
    {
      time: '09:30',
      endTime: '12:30',
      title: '🚗 驾车巴黎→第戎',
      description: '沿A6高速（太阳高速公路）南下，全程约310km。在Auxerre休息区停留15分钟。进入勃艮第产区后风景变美。',
      type: 'transport',
      icon: '🚗',
      duration: '3小时',
      location: 'A6高速 巴黎→第戎'
    },
    {
      time: '12:30',
      endTime: '13:30',
      title: '入住 & 午餐',
      description: '入住Aloft Dijon（有停车场，自驾方便），在酒店附近或老城中心享用午餐。可尝试勃艮第经典菜Bœuf Bourguignon。',
      type: 'meal',
      icon: '🍽️',
      duration: '1小时',
      location: 'Aloft Dijon / 第戎老城'
    },
    {
      time: '14:00',
      endTime: '16:00',
      title: '🦉 猫头鹰之路',
      description: '跟随地面22个铜制猫头鹰标记游览第戎老城。孩子像寻宝一样找每一个猫头鹰！途经自由广场、各种中世纪建筑。',
      type: 'attraction',
      icon: '🦉',
      duration: '2小时',
      location: '第戎老城全程3公里'
    },
    {
      time: '16:00',
      endTime: '16:30',
      title: '⛪ 第戎圣母院 & 猫头鹰雕塑',
      description: '13世纪哥特式教堂，找到著名的幸运猫头鹰雕塑，用左手抚摸许愿！',
      type: 'attraction',
      icon: '🦉',
      duration: '30分钟',
      location: 'Notre-Dame de Dijon'
    },
    {
      time: '16:30',
      endTime: '18:00',
      title: '🏛️ 勃艮第公爵宫',
      description: '勃艮第公国权力中心，现为第戎美术馆。哥特式和文艺复兴建筑完美融合，可登菲利普塔俯瞰全城。',
      type: 'attraction',
      icon: '🏛️',
      duration: '1.5小时',
      location: 'Palais des Ducs de Bourgogne'
    },
    {
      time: '18:00',
      endTime: '18:30',
      title: '甜品·Mulot & Petitjean',
      description: '第戎百年姜饼店（1796年），品尝传统勃艮第姜饼，买些作伴手礼。',
      type: 'meal',
      icon: '🍪',
      duration: '30分钟',
      location: 'Place Bossuet'
    },
    {
      time: '18:30',
      endTime: '20:30',
      title: '晚餐·Loiseau des Ducs',
      description: '米其林一星餐厅，必点勃艮第蜗牛、红酒炖牛肉、黑松露料理。坐在运河旁的露台座位。',
      type: 'meal',
      icon: '⭐',
      duration: '2小时',
      location: 'Loiseau des Ducs'
    },
    {
      time: '21:00',
      title: '回酒店休息',
      type: 'rest',
      icon: '😴'
    }
  ],

  // ===== Day 7: 第戎→卢塞恩 6月18日 =====
  7: [
    {
      time: '08:30',
      endTime: '09:30',
      title: '睡到自然醒 & 悠闲早餐',
      description: '不设闹钟，自然醒后在酒店悠闲享用早餐，为今天的旅途充电。',
      type: 'meal',
      icon: '🥐',
      duration: '1小时',
      location: 'Aloft Dijon'
    },
    {
      time: '09:30',
      endTime: '10:00',
      title: '退房 & 出发',
      description: '回酒店退房取行李，装车出发前往瑞士卢塞恩。',
      type: 'hotel',
      icon: '🧳',
      duration: '30分钟'
    },
    {
      time: '10:00',
      endTime: '13:30',
      title: '🚗 驾车第戎→卢塞恩',
      description: '沿A39高速穿越汝拉山区，经巴塞尔进入瑞士（边境购买高速车贴CHF 40）。约350km、3.5小时。风景从法国田园渐变为瑞士湖光山色。',
      type: 'transport',
      icon: '🚗',
      duration: '3.5小时',
      location: 'A39→A36→A2 第戎→卢塞恩'
    },
    {
      time: '13:30',
      endTime: '14:30',
      title: '入住 & 午餐',
      description: '入住KoBi Apartments Hirschenplatz（老城核心鹿广场公寓，Booking.com 9.1分，有厨房和洗衣机）。在老城区享用瑞士午餐。附近停车：Parkhaus Kesselturm，步行5分钟，CHF 35/天。',
      type: 'meal',
      icon: '🧀',
      duration: '1小时',
      location: 'KoBi Apartments Hirschenplatz / 卢塞恩老城'
    },
    {
      time: '14:30',
      endTime: '15:00',
      title: '🦁 狮子纪念碑',
      description: '马克·吐温称之为"世界上最悲伤的石雕"。纪念1792年牺牲的瑞士雇佣兵，垂死狮子雕刻在天然岩壁上。',
      type: 'attraction',
      icon: '🦁',
      duration: '30分钟',
      location: 'Löwendenkmal'
    },
    {
      time: '15:00',
      endTime: '16:30',
      title: '🌉 卡贝尔桥 & 老城漫步',
      description: '欧洲最古老的有顶木桥（1333年），卢塞恩标志。穿过古桥，漫步老城壁画广场、穆塞格城墙。',
      type: 'attraction',
      icon: '🌉',
      duration: '1.5小时',
      location: 'Kapellbrücke & Altstadt'
    },
    {
      time: '16:30',
      endTime: '18:00',
      title: '🏔️ 琉森湖畔散步',
      description: '沿琉森湖畔漫步，远眺皮拉图斯山和瑞吉山。湖水清澈见底，天鹅在湖面悠游，夕阳西下美不胜收。',
      type: 'attraction',
      icon: '🏔️',
      duration: '1.5小时',
      location: '琉森湖畔步道'
    },
    {
      time: '19:00',
      endTime: '20:30',
      title: '晚餐·Wirtshaus Galliker',
      description: '卢塞恩百年老店，地道瑞士传统美食。必点瑞士奶酪火锅、Rösti煎土豆饼。',
      type: 'meal',
      icon: '🧀',
      duration: '1.5小时',
      location: 'Wirtshaus Galliker'
    },
    {
      time: '21:00',
      title: '回酒店休息',
      type: 'rest',
      icon: '😴'
    }
  ],

  // ===== Day 8: 卢塞恩→因特拉肯 6月19日 =====
  8: [
    {
      time: '08:00',
      endTime: '08:30',
      title: '公寓早餐',
      description: '在公寓厨房自己做早餐，省钱又舒适。',
      type: 'meal',
      icon: '🥐',
      duration: '30分钟',
      location: 'KoBi Apartments Hirschenplatz'
    },
    {
      time: '08:30',
      endTime: '10:30',
      title: '🚂 瑞士交通博物馆',
      description: '全瑞士最受欢迎的博物馆！火车、飞机、汽车、太空主题，互动体验丰富。飞行模拟器、巧克力冒险，孩子的天堂。',
      type: 'attraction',
      icon: '🚂',
      duration: '2小时',
      location: 'Swiss Museum of Transport'
    },
    {
      time: '10:30',
      endTime: '11:00',
      title: '退房 & 出发',
      description: '公寓退房（自助退房），取行李到Parkhaus Kesselturm取车。利用早晨洗衣机洗一波衣服，轻装上阵后半程！',
      type: 'hotel',
      icon: '🧳',
      duration: '30分钟'
    },
    {
      time: '11:00',
      endTime: '12:00',
      title: '🚗 驾车卢塞恩→因特拉肯',
      description: '经布伦尼格山口（Brünig Pass），途经龙疆小镇（Lungern）。翡翠绿湖泊+雪山，沿途风景美到窒息。约1小时抵达。',
      type: 'transport',
      icon: '🚗',
      duration: '1小时',
      location: 'A8 经布伦尼格山口→龙疆→因特拉肯'
    },
    {
      time: '12:00',
      endTime: '12:30',
      title: '入住SAVOY 26',
      description: '入住SAVOY 26公寓，2卧室+阳台+露台，山景房。停车安顿行李。',
      type: 'hotel',
      icon: '🏠',
      duration: '30分钟',
      location: 'SAVOY 26, 26 Alpenstrasse, Interlaken'
    },
    {
      time: '12:30',
      endTime: '13:30',
      title: '午餐·因特拉肯',
      description: '在何维克街（Höheweg）上的Restaurant Glacier享用Rösti煎土豆饼等瑞士传统美食。',
      type: 'meal',
      icon: '🥔',
      duration: '1小时',
      location: 'Höheweg, Interlaken'
    },
    {
      time: '13:30',
      endTime: '15:30',
      title: '🏔️ 何维克街 & 双湖漫步',
      description: '因特拉肯主街漫步，天气好可看到少女峰。步行至布里恩茨湖畔或图恩湖畔，欣赏湖光山色。',
      type: 'attraction',
      icon: '🏔️',
      duration: '2小时',
      location: 'Interlaken Höheweg'
    },
    {
      time: '15:30',
      endTime: '17:00',
      title: '自由活动 & 采购',
      description: '在因特拉肯购物（瑞士军刀、巧克力），或在公寓露台上欣赏阿尔卑斯风光休息。',
      type: 'free',
      icon: '🛒',
      duration: '1.5小时',
      location: 'Interlaken'
    },
    {
      time: '18:00',
      endTime: '19:30',
      title: '晚餐',
      description: '在Restaurant Glacier或附近餐厅享用晚餐。可以自己在超市买食材回公寓做饭。',
      type: 'meal',
      icon: '🍽️',
      duration: '1.5小时'
    },
    {
      time: '20:00',
      title: '公寓休息',
      description: '明天是少女峰！需要早起，建议21:00前入睡。提前设好闹钟。',
      type: 'rest',
      icon: '🌙'
    }
  ],

  // ===== Day 9: 少女峰 6月20日 =====
  9: [
    {
      time: '06:30',
      endTime: '07:00',
      title: '早起 & 简单早餐',
      description: '在公寓简单吃点面包和牛奶。带上防晒霜、墨镜、保暖外套！山顶温度约-5℃。',
      type: 'meal',
      icon: '🥛',
      duration: '30分钟',
      location: 'SAVOY 26'
    },
    {
      time: '07:15',
      endTime: '07:30',
      title: '步行至因特拉肯东站',
      description: '从公寓步行约10分钟到因特拉肯东站（Interlaken Ost）。',
      type: 'transport',
      icon: '🚶',
      duration: '15分钟'
    },
    {
      time: '07:47',
      endTime: '08:22',
      title: '火车：因特拉肯东→格林德尔瓦终点站',
      description: 'BOB火车至格林德尔瓦终点站（Grindelwald Terminal），约35分钟。车窗外就是艾格峰北壁。',
      type: 'transport',
      icon: '🚂',
      duration: '35分钟',
      location: 'BOB铁路'
    },
    {
      time: '08:30',
      endTime: '08:45',
      title: '艾格快线缆车',
      description: '全新V-Cableway三索缆车，15分钟直达艾格冰川站（Eigergletscher 2320m）。取代了原来需要2小时的传统路线！',
      type: 'transport',
      icon: '🚡',
      duration: '15分钟',
      location: 'Eiger Express'
    },
    {
      time: '08:55',
      endTime: '09:30',
      title: '齿轨火车上少女峰',
      description: '从艾格冰川站搭齿轨火车，穿越艾格峰和僧侣峰内部隧道，约30分钟到达欧洲屋脊3454米。',
      type: 'transport',
      icon: '🚂',
      duration: '35分钟',
      location: '少女峰铁路'
    },
    {
      time: '09:30',
      endTime: '12:00',
      title: '🏔️ 少女峰顶 (3454m)',
      description: '斯芬克斯观景台360度雪山全景、冰宫（冰雕隧道）、阿莱奇冰川（最长23km）、高原雪地行走。气温约-5℃，注意保暖！',
      type: 'attraction',
      icon: '🏔️',
      duration: '2.5小时',
      location: 'Jungfraujoch Top of Europe'
    },
    {
      time: '12:00',
      endTime: '12:45',
      title: '山顶午餐',
      description: '在少女峰顶Aletsch自助餐厅用餐，欣赏窗外的壮丽冰川景色。',
      type: 'meal',
      icon: '🍜',
      duration: '45分钟',
      location: '少女峰顶餐厅'
    },
    {
      time: '13:00',
      endTime: '14:30',
      title: '下山·经克莱纳谢德格',
      description: '搭齿轨火车下山至Kleine Scheidegg（2061m），在这里停留欣赏艾格峰北壁近距离震撼景观。再搭火车经Wengen下山。',
      type: 'transport',
      icon: '🚂',
      duration: '1.5小时',
      location: 'Kleine Scheidegg'
    },
    {
      time: '14:30',
      endTime: '15:30',
      title: '劳特布龙嫩短停',
      description: '在劳特布龙嫩停留看施陶河瀑布，297米落差在村口就能看到。',
      type: 'attraction',
      icon: '💦',
      duration: '1小时',
      location: 'Lauterbrunnen'
    },
    {
      time: '15:30',
      endTime: '16:00',
      title: '火车返回因特拉肯',
      type: 'transport',
      icon: '🚂',
      duration: '30分钟'
    },
    {
      time: '16:00',
      endTime: '17:30',
      title: '公寓休息',
      description: '高海拔活动一天比较累，回SAVOY 26泡杯茶，看看雪山放松。',
      type: 'rest',
      icon: '☕',
      duration: '1.5小时',
      location: 'SAVOY 26'
    },
    {
      time: '18:00',
      endTime: '19:30',
      title: '晚餐',
      description: '在Restaurant Taverne享用奶酪火锅和Rösti煎土豆饼，或在公寓做简餐。',
      type: 'meal',
      icon: '🫕',
      duration: '1.5小时',
      location: 'Restaurant Taverne'
    },
    {
      time: '20:00',
      title: '公寓休息',
      type: 'rest',
      icon: '😴'
    }
  ],

  // ===== Day 10: 格林德尔瓦First+劳特布龙嫩 6月21日 =====
  10: [
    {
      time: '07:30',
      endTime: '08:00',
      title: '公寓早餐',
      type: 'meal',
      icon: '🥐',
      duration: '30分钟',
      location: 'SAVOY 26'
    },
    {
      time: '08:15',
      endTime: '09:00',
      title: '火车至格林德尔瓦',
      description: '因特拉肯东站搭BOB火车至格林德尔瓦站，约35分钟。',
      type: 'transport',
      icon: '🚂',
      duration: '45分钟'
    },
    {
      time: '09:00',
      endTime: '09:30',
      title: 'First缆车上山',
      description: '在格林德尔瓦站步行至First缆车站，乘坐缆车约25分钟到达First（2168m）。',
      type: 'transport',
      icon: '🚡',
      duration: '30分钟'
    },
    {
      time: '09:30',
      endTime: '10:30',
      title: '🦅 First Flyer滑索 & First Glider',
      description: 'First Flyer滑索：800米长，80km/h速度，飞越山谷！First Glider悬崖秋千：躺在"老鹰"下飞翔。孩子身高限130cm+可参与。',
      type: 'attraction',
      icon: '🦅',
      duration: '1小时',
      location: 'First, Grindelwald'
    },
    {
      time: '10:30',
      endTime: '12:00',
      title: '🏞️ Bachalpsee湖徒步',
      description: '从First出发单程50分钟徒步至Bachalpsee镜面湖泊。天气好时可看到艾格峰和施雷克峰的完美倒影。瑞士最美徒步之一！',
      type: 'attraction',
      icon: '🏞️',
      duration: '1.5小时',
      location: 'First→Bachalpsee (2265m)'
    },
    {
      time: '12:00',
      endTime: '12:30',
      title: '缆车下山',
      type: 'transport',
      icon: '🚡',
      duration: '30分钟'
    },
    {
      time: '12:30',
      endTime: '13:30',
      title: '午餐·格林德尔瓦',
      description: '在格林德尔瓦村中享用午餐，推荐Onkel Tom\'s Hütte的瑞士盘或C&M Café。',
      type: 'meal',
      icon: '🍽️',
      duration: '1小时',
      location: 'Grindelwald'
    },
    {
      time: '13:30',
      endTime: '14:00',
      title: '火车至劳特布龙嫩',
      description: '格林德尔瓦→Zweilütschinen→Lauterbrunnen，换乘一次约30分钟。',
      type: 'transport',
      icon: '🚂',
      duration: '30分钟'
    },
    {
      time: '14:00',
      endTime: '15:00',
      title: '💦 施陶河瀑布',
      description: '欧洲最高自由落体瀑布297米。在瀑布正下方仰望，水雾飘散如银丝。免费观赏。',
      type: 'attraction',
      icon: '💦',
      duration: '1小时',
      location: 'Staubbach Falls, Lauterbrunnen'
    },
    {
      time: '15:00',
      endTime: '16:30',
      title: '🌊 特吕默尔巴赫瀑布',
      description: '10条冰川瀑布在山体内部！乘电梯进入山洞，轰鸣的水声在岩壁中回荡，极为震撼。',
      type: 'attraction',
      icon: '🌊',
      duration: '1.5小时',
      location: 'Trümmelbachfälle'
    },
    {
      time: '16:30',
      endTime: '17:15',
      title: '火车返回因特拉肯',
      type: 'transport',
      icon: '🚂',
      duration: '45分钟'
    },
    {
      time: '17:30',
      endTime: '18:30',
      title: '公寓休息',
      type: 'rest',
      icon: '☕',
      duration: '1小时',
      location: 'SAVOY 26'
    },
    {
      time: '19:00',
      endTime: '20:30',
      title: '晚餐',
      type: 'meal',
      icon: '🍽️',
      duration: '1.5小时',
      location: 'Interlaken'
    },
    {
      time: '21:00',
      title: '因特拉肯最后一晚',
      description: '明天退房前往采尔马特，整理行李。',
      type: 'rest',
      icon: '🌙'
    }
  ],

  // ===== Day 11: 因特拉肯→采尔马特 6月22日 =====
  11: [
    {
      time: '08:00',
      endTime: '08:30',
      title: '公寓早餐',
      type: 'meal',
      icon: '🥐',
      duration: '30分钟',
      location: 'SAVOY 26'
    },
    {
      time: '08:30',
      endTime: '09:00',
      title: '退房',
      description: '退房，将行李装车。',
      type: 'hotel',
      icon: '🧳',
      duration: '30分钟'
    },
    {
      time: '09:00',
      endTime: '10:00',
      title: '🏔️ 哈德昆观景台',
      description: '缆车8分钟到1322m。俯瞰图恩湖+布里恩茨湖双湖全景，远处少女峰三峰合影。因特拉肯最佳告别方式！',
      type: 'attraction',
      icon: '🏔️',
      duration: '1小时',
      location: 'Harder Kulm (1322m)'
    },
    {
      time: '10:00',
      endTime: '12:00',
      title: '🚗 驾车因特拉肯→Täsch',
      description: '沿Kandertal河谷和Lötschberg隧道南下，经Visp转向Zermatt方向。在Täsch停车（CHF 15/天）。',
      type: 'transport',
      icon: '🚗',
      duration: '2小时',
      location: '因特拉肯→Täsch (约120km)'
    },
    {
      time: '12:00',
      endTime: '12:20',
      title: '🚂 Täsch→采尔马特火车',
      description: '在Täsch停车场停好车，搭乘MGB火车12分钟到达无车小镇采尔马特。',
      type: 'transport',
      icon: '🚂',
      duration: '20分钟',
      location: 'Täsch→Zermatt'
    },
    {
      time: '12:30',
      endTime: '13:30',
      title: '入住 & 午餐',
      description: '电瓶车送至Elfi奢华山景公寓，放行李后在镇上享用午餐。',
      type: 'meal',
      icon: '🍽️',
      duration: '1小时',
      location: 'Elfi by Inspiringplaces / 采尔马特'
    },
    {
      time: '14:00',
      endTime: '16:00',
      title: '🏘️ 采尔马特镇内漫步',
      description: '班霍夫大街购物→Kirchbrücke桥（马特洪峰经典机位）→旧村庄木屋区→Hinterdorfstrasse古道。',
      type: 'attraction',
      icon: '🏘️',
      duration: '2小时',
      location: 'Zermatt Village'
    },
    {
      time: '16:00',
      endTime: '17:00',
      title: '马特洪峰观景 & 摄影',
      description: '沿着Vispa河畔步行，寻找马特洪峰最佳拍摄角度。Kirchbrücke桥、Matterhorn Glacier Trail入口处角度绝佳。',
      type: 'attraction',
      icon: '📸',
      duration: '1小时',
      location: '采尔马特各观景点'
    },
    {
      time: '17:00',
      endTime: '18:00',
      title: '公寓休息或自由活动',
      description: '在Elfi奢华公寓放松休息，或继续逛小镇。',
      type: 'free',
      icon: '♨️',
      duration: '1小时',
      location: 'Elfi by Inspiringplaces'
    },
    {
      time: '18:30',
      endTime: '20:00',
      title: '晚餐·Chez Vrony',
      description: '预约制阿尔卑斯美食餐厅，位于Findeln村（可搭Sunnegga缆车+步行15分钟）。或在镇上餐厅用餐。',
      type: 'meal',
      icon: '🧀',
      duration: '1.5小时',
      location: 'Chez Vrony / 采尔马特镇上'
    },
    {
      time: '20:30',
      title: '酒店休息',
      description: '明天全天马特洪峰深度游！',
      type: 'rest',
      icon: '🌙'
    }
  ],

  // ===== Day 12: 马特洪峰深度游 6月23日 =====
  12: [
    {
      time: '07:00',
      endTime: '07:30',
      title: '公寓早餐',
      description: '丰盛的瑞士早餐，补充能量。带上防晒霜、墨镜、保暖衣物。',
      type: 'meal',
      icon: '🥐',
      duration: '30分钟',
      location: 'Elfi by Inspiringplaces'
    },
    {
      time: '08:00',
      endTime: '08:33',
      title: '🚂 齿轨火车上戈尔内格拉特',
      description: '步行至采尔马特火车站对面的戈尔内格拉特铁路站，搭乘齿轨火车33分钟到达3089m。沿途经过5个中间站，每站都有观景点。',
      type: 'transport',
      icon: '🚂',
      duration: '33分钟',
      location: 'Gornergrat Bahn'
    },
    {
      time: '08:33',
      endTime: '11:00',
      title: '🏔️ 戈尔内格拉特观景台 (3089m)',
      description: '360度全景：马特洪峰、罗莎峰(4634m)、利斯卡姆峰等29座4000m+雪山。戈尔内冰川震撼。在观景酒店Kulmhotel喝杯咖啡。',
      type: 'attraction',
      icon: '🏔️',
      duration: '2.5小时',
      location: 'Gornergrat (3089m)'
    },
    {
      time: '11:00',
      endTime: '11:45',
      title: '齿轨火车下山',
      description: '可在中间站Rotenboden下车，步行10分钟到Riffelsee湖看马特洪峰倒影（天气好必去）。',
      type: 'transport',
      icon: '🚂',
      duration: '45分钟',
      location: 'Gornergrat→Zermatt'
    },
    {
      time: '12:00',
      endTime: '13:00',
      title: '午餐·采尔马特',
      description: '回到镇上午餐休息，补充体力准备下午的冰川天堂。',
      type: 'meal',
      icon: '🍽️',
      duration: '1小时',
      location: '采尔马特镇中心'
    },
    {
      time: '13:30',
      endTime: '14:30',
      title: '🚡 缆车上冰川天堂',
      description: '从采尔马特搭缆车，经Furi→Schwarzsee→Trockener Steg→Klein Matterhorn (3883m)，全程约45分钟。',
      type: 'transport',
      icon: '🚡',
      duration: '1小时',
      location: '采尔马特→Klein Matterhorn'
    },
    {
      time: '14:30',
      endTime: '17:00',
      title: '❄️ 马特洪峰冰川天堂 (3883m)',
      description: '欧洲最高缆车站！全景观景台距马特洪峰最近。冰宫探险（冰雕隧道）、冰川平台行走。山顶温度约-10℃，务必保暖。',
      type: 'attraction',
      icon: '❄️',
      duration: '2.5小时',
      location: 'Matterhorn Glacier Paradise (3883m)'
    },
    {
      time: '17:00',
      endTime: '17:45',
      title: '缆车下山',
      description: '原路缆车返回采尔马特，可在Schwarzsee站停留看马特洪峰近景。',
      type: 'transport',
      icon: '🚡',
      duration: '45分钟'
    },
    {
      time: '18:00',
      endTime: '18:30',
      title: '公寓休息',
      type: 'rest',
      icon: '☕',
      duration: '30分钟',
      location: 'Elfi by Inspiringplaces'
    },
    {
      time: '19:00',
      endTime: '20:30',
      title: '晚餐·Walliserkanne',
      description: '瑞士传统餐厅，必点瓦莱州羊肉和Raclette烤奶酪（加热后刮到土豆上）。',
      type: 'meal',
      icon: '🧀',
      duration: '1.5小时',
      location: 'Restaurant Walliserkanne'
    },
    {
      time: '21:00',
      title: '早睡！明天看日出',
      description: '凌晨4:30起床看马特洪峰日出，设好闹钟！准备好保暖衣物放在床头。',
      type: 'rest',
      icon: '⏰'
    }
  ],

  // ===== Day 13: 马特洪峰日出→里昂 6月24日 =====
  13: [
    {
      time: '04:30',
      endTime: '05:00',
      title: '起床 & 出发',
      description: '穿上保暖衣物（冲锋衣+抓绒+帽子手套），步行至齿轨火车站。山顶温度约-5℃。',
      type: 'hotel',
      icon: '⏰',
      duration: '30分钟'
    },
    {
      time: '05:00',
      endTime: '05:33',
      title: '🚂 首班齿轨火车上山',
      description: '搭乘第一班Gornergrat齿轨火车，33分钟到达3089m观景台。',
      type: 'transport',
      icon: '🚂',
      duration: '33分钟'
    },
    {
      time: '05:33',
      endTime: '06:30',
      title: '🌅 马特洪峰日出！',
      description: '6月日出约5:30-5:45。第一缕金色阳光照亮马特洪峰4478m的完美三角锥顶，日照金山震撼瞬间！这是一辈子难忘的风景。',
      type: 'attraction',
      icon: '🌅',
      duration: '1小时',
      location: 'Gornergrat (3089m)'
    },
    {
      time: '06:30',
      endTime: '07:15',
      title: '下山',
      type: 'transport',
      icon: '🚂',
      duration: '45分钟'
    },
    {
      time: '07:30',
      endTime: '08:30',
      title: '公寓早餐 & 退房',
      description: '回公寓享用丰盛早餐，退房收拾行李。',
      type: 'hotel',
      icon: '🧳',
      duration: '1小时',
      location: 'Elfi by Inspiringplaces'
    },
    {
      time: '08:45',
      endTime: '09:00',
      title: '🚂 采尔马特→Täsch火车',
      description: '搭火车12分钟到Täsch取车。',
      type: 'transport',
      icon: '🚂',
      duration: '15分钟'
    },
    {
      time: '09:15',
      endTime: '13:30',
      title: '🚗 驾车Täsch→里昂',
      description: '经Visp→Martigny→日内瓦湖南岸→日内瓦→A42进入法国→里昂。全程约350km，含1次休息。日内瓦湖段风景绝美！',
      type: 'transport',
      icon: '🚗',
      duration: '4小时15分',
      location: 'Täsch→里昂 (约350km)'
    },
    {
      time: '13:30',
      endTime: '14:30',
      title: '入住 & 午餐',
      description: '入住Lyon Marriott Hotel Cité Internationale（罗纳河畔），在酒店或老城享用午餐。可尝试里昂传统Bouchon。',
      type: 'meal',
      icon: '🍽️',
      duration: '1小时',
      location: 'Lyon Marriott Hotel / 里昂老城'
    },
    {
      time: '15:00',
      endTime: '17:00',
      title: '🏰 里昂老城Traboules',
      description: 'UNESCO世界遗产。穿越文艺复兴建筑群中的Traboules秘密通道（必走：27 Rue Saint-Jean→6 Rue des Trois Maries）。孩子像特工一样穿越！',
      type: 'attraction',
      icon: '🏰',
      duration: '2小时',
      location: 'Vieux-Lyon'
    },
    {
      time: '17:00',
      endTime: '17:30',
      title: '缆车上富维耶山',
      description: '从老城Saint-Jean站搭缆车2分钟上山。',
      type: 'transport',
      icon: '🚡',
      duration: '30分钟'
    },
    {
      time: '17:30',
      endTime: '19:00',
      title: '⛪ 富维耶圣母院 & 日落',
      description: '里昂地标，白色大教堂。内部马赛克装饰极为华丽。站在教堂前平台俯瞰全城，等待日落。6月日落约21:30。',
      type: 'attraction',
      icon: '⛪',
      duration: '1.5小时',
      location: 'Basilique de Fourvière'
    },
    {
      time: '19:00',
      endTime: '20:00',
      title: '🚗 驾车前往Ouches',
      description: '从里昂出发沿A89/N7西行前往Ouches小镇，约1小时车程。穿越卢瓦尔省乡间，抵达Troisgros庄园。',
      type: 'transport',
      icon: '🚗',
      duration: '1小时',
      location: '里昂→Ouches (约100km)'
    },
    {
      time: '20:00',
      endTime: '23:00',
      title: '🌟 Troisgros - Le Bois sans Feuilles 晚餐',
      description: '米其林三星餐厅！Troisgros家族第四代传人César Troisgros主理，连续55年以上保持三星。17公顷庄园中的全玻璃U型餐厅，中央矗立2000年古树。食材至上的极致法餐，融入日式美学，招牌酸味运用独步天下。酒类配餐被誉为"超凡脱俗"。',
      type: 'meal',
      icon: '🌟',
      duration: '3小时',
      location: 'Troisgros, 728 Route de Villerest, 42155 Ouches'
    },
    {
      time: '23:00',
      endTime: '00:00',
      title: '🚗 返回里昂酒店',
      description: '晚餐后驾车返回里昂酒店，夜间路况良好约50分钟。也可选择入住Troisgros庄园酒店（Relais & Châteaux）。',
      type: 'transport',
      icon: '🚗',
      duration: '1小时',
      location: 'Ouches→里昂'
    },
    {
      time: '00:00',
      title: '酒店休息',
      type: 'rest',
      icon: '😴'
    }
  ],

  // ===== Day 14: 里昂→博讷 6月25日 =====
  14: [
    {
      time: '07:30',
      endTime: '08:30',
      title: '酒店早餐 & 退房',
      description: '在Lyon Marriott Hotel享用最后一顿酒店早餐。退房取行李。',
      type: 'hotel',
      icon: '🧳',
      duration: '1小时',
      location: 'Lyon Marriott Hotel Cité Internationale'
    },
    {
      time: '08:30',
      endTime: '10:10',
      title: '🚗 驾车里昂→博讷',
      description: '沿A6高速北上，穿越勃艮第葡萄酒产区。途经Mâcon，沿途葡萄园风光。约165km。',
      type: 'transport',
      icon: '🚗',
      duration: '1小时40分',
      location: 'A6高速 里昂→博讷'
    },
    {
      time: '10:10',
      endTime: '10:30',
      title: '入住La Maison de Maurice',
      description: '勃艮第风格温馨酒店，放下行李。酒店位于市中心，步行可达主宫医院。',
      type: 'hotel',
      icon: '🏨',
      duration: '20分钟',
      location: 'La Maison de Maurice, Beaune'
    },
    {
      time: '10:30',
      endTime: '12:00',
      title: '🏛️ 主宫医院',
      description: 'UNESCO世界遗产，1443年建造的慈善医院。标志性彩色琉璃瓦屋顶（从庭院拍摄最美）、大病房、药房、《最后的审判》画屏。',
      type: 'attraction',
      icon: '🏛️',
      duration: '1.5小时',
      location: 'Hospices de Beaune'
    },
    {
      time: '12:00',
      endTime: '13:00',
      title: '午餐·Caves Madeleine',
      description: '传统勃艮第小酒馆，在古老的酒窖里用餐。点火腿奶酪拼盘和勃艮第特色菜。',
      type: 'meal',
      icon: '🍽️',
      duration: '1小时',
      location: 'Caves Madeleine'
    },
    {
      time: '13:30',
      endTime: '15:00',
      title: '🏰 Savigny-lès-Beaune城堡',
      description: '驾车5分钟到达，14世纪古堡内有令人惊叹的收藏：战斗机、摩托车、赛车、消防车等。孩子们的天堂！城堡花园也很美。',
      type: 'attraction',
      icon: '🏰',
      duration: '1.5小时',
      location: 'Château de Savigny-lès-Beaune'
    },
    {
      time: '15:00',
      endTime: '16:00',
      title: '🌿 Bouzaize公园',
      description: '返回博讷市中心，漫步美丽的Bouzaize公园。绿荫小湖、鸭群、儿童游乐设施，一家人在草坪上放松享受午后时光。',
      type: 'attraction',
      icon: '🌿',
      duration: '1小时',
      location: 'Parc de la Bouzaize'
    },
    {
      time: '16:00',
      endTime: '17:30',
      title: '🚶 博讷老城 & 城墙漫步',
      description: '沿保存完好的中世纪城墙步行（约2km），欣赏古朴的石板街道和半木结构房屋。参观圣母教堂（15世纪挂毯），老城广场咖啡馆小坐。',
      type: 'attraction',
      icon: '🚶',
      duration: '1.5小时',
      location: 'Beaune Old Town & Ramparts'
    },
    {
      time: '17:30',
      endTime: '18:30',
      title: '酒店休息',
      description: '回酒店休息，整理一天的照片和见闻。',
      type: 'free',
      icon: '☕',
      duration: '1小时',
      location: 'La Maison de Maurice'
    },
    {
      time: '19:00',
      endTime: '21:00',
      title: '晚餐·Loiseau des Vignes',
      description: '米其林法餐厅，勃艮第美食之选。必点勃艮第红酒炖牛肉和蜗牛，松露料理也非常推荐。',
      type: 'meal',
      icon: '⭐',
      duration: '2小时',
      location: 'Loiseau des Vignes'
    },
    {
      time: '21:30',
      title: '酒店休息',
      description: '旅程倒数第二晚，在勃艮第的星空下入睡。',
      type: 'rest',
      icon: '🌙'
    }
  ],

  // ===== Day 15: 博讷→巴黎CDG→返程 6月26日 =====
  15: [
    {
      time: '07:30',
      endTime: '08:30',
      title: '酒店早餐 & 退房',
      description: '最后一天，享用早餐后退房。整理好所有行李和购买的伴手礼。',
      type: 'hotel',
      icon: '🧳',
      duration: '1小时',
      location: 'La Maison de Maurice'
    },
    {
      time: '08:30',
      endTime: '10:30',
      title: '🌾 勃艮第田园风光之路',
      description: '驾车游览勃艮第乡村。途经Pommard（停车拍照5分钟）→Volnay→Meursault等古朴小村庄。金色石墙与翠绿田野交相辉映，感受法国乡村宁静之美。',
      type: 'attraction',
      icon: '🌾',
      duration: '2小时',
      location: 'Route des Grands Crus'
    },
    {
      time: '10:30',
      endTime: '11:30',
      title: '回博讷 & 午餐',
      description: '返回博讷老城，在La Bisotte享用最后一顿法国午餐。芥末酱烤兔肉、勃艮第炖鸡。',
      type: 'meal',
      icon: '🍽️',
      duration: '1小时',
      location: 'La Bisotte, Beaune'
    },
    {
      time: '12:00',
      endTime: '12:15',
      title: '加满油 & 出发',
      description: '在博讷加油站加满油箱（还车前必须加满）。上A6高速北上。',
      type: 'transport',
      icon: '⛽',
      duration: '15分钟'
    },
    {
      time: '12:15',
      endTime: '15:15',
      title: '🚗 驾车博讷→巴黎CDG',
      description: '沿A6高速直达巴黎CDG机场，全程约310km。中途在Auxerre或Fontainebleau休息区停留15分钟。',
      type: 'transport',
      icon: '🚗',
      duration: '3小时',
      location: 'A6高速 博讷→巴黎CDG'
    },
    {
      time: '15:15',
      endTime: '16:00',
      title: '还车 Hertz CDG',
      description: '在CDG机场 Hertz T1&2F还车点还车（营业至24:00），检查车况、油量。搭穿梭巴士前往2E航站楼。',
      type: 'transport',
      icon: '🚗',
      duration: '45分钟',
      location: 'Hertz CDG T1&2F, Charles De Gaulle Airport, 95700'
    },
    {
      time: '16:00',
      endTime: '17:00',
      title: '办理登机 & 托运',
      description: '法航AF186航班，提前3-4小时到达。办理值机、托运行李、出境安检。',
      type: 'flight',
      icon: '🛫',
      duration: '1小时',
      location: '巴黎CDG 2E航站楼'
    },
    {
      time: '17:00',
      endTime: '19:00',
      title: '免税店购物',
      description: '最后机会购买法国特产！推荐：香水、马卡龙、巧克力、奶酪、护肤品等伴手礼。',
      type: 'free',
      icon: '🛒',
      duration: '2小时',
      location: 'CDG免税区'
    },
    {
      time: '19:00',
      endTime: '20:30',
      title: '机场晚餐',
      description: '在机场餐厅或贵宾室享用晚餐。推荐2E航站楼的Ladurée（马卡龙）或Exki（健康简餐）。',
      type: 'meal',
      icon: '🍽️',
      duration: '1.5小时',
      location: 'CDG 2E航站楼'
    },
    {
      time: '21:00',
      endTime: '23:30',
      title: '候机 & 登机',
      description: '前往登机口候机，22:30开始登机。',
      type: 'flight',
      icon: '🛫',
      duration: '2.5小时',
      location: 'CDG 2E航站楼'
    },
    {
      time: '23:55',
      title: '✈️ AF186起飞 → 香港',
      description: '法航AF186巴黎→香港直飞，次日15:55抵达。飞行约13小时。旅程完美结束！🎉',
      type: 'flight',
      icon: '✈️',
      duration: '13小时',
      location: '巴黎CDG→香港HKG'
    }
  ]
}
