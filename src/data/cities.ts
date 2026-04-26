import { City } from '../types';

export const cities: City[] = [
  {
    id: 'paris',
    name: '巴黎',
    nameEn: 'Paris',
    country: '法国',
    lat: 48.8566,
    lng: 2.3522,
    days: 5,
    description: '光之城，艺术与浪漫的象征。从卢浮宫到埃菲尔铁塔，从凡尔赛宫到吉维尼莫奈花园，从圣日耳曼区到塞纳河游船，每一处都散发着独特的文化魅力。',
    tags: ['艺术', '历史', '美食', '浪漫', '文艺'],
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200'
  },
  {
    id: 'dijon',
    name: '第戎',
    nameEn: 'Dijon',
    country: '法国',
    lat: 47.3220,
    lng: 5.0415,
    days: 1,
    description: '勃艮第首府，美食与葡萄酒之都。第戎芥末、红酒炖牛肉、猫头鹰之路，探索中世纪老城与勃艮第文化。',
    tags: ['美食', '葡萄酒', '历史', '老城'],
    imageUrl: 'https://images.unsplash.com/photo-1581888227599-779811939961?w=1200'
  },
  {
    id: 'lucerne',
    name: '卢塞恩',
    nameEn: 'Lucerne',
    country: '瑞士',
    lat: 47.0502,
    lng: 8.3093,
    days: 1,
    description: '瑞士最美旅游城市，湖光山色交相辉映。卡贝尔桥、狮子纪念碑、琉森湖游船、皮拉图斯山，每一处都令人屏息。',
    tags: ['湖泊', '雪山', '古桥', '必游'],
    imageUrl: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=1200'
  },
  {
    id: 'interlaken',
    name: '因特拉肯',
    nameEn: 'Interlaken',
    country: '瑞士',
    lat: 46.6863,
    lng: 7.8632,
    days: 3,
    description: '少女峰门户，瑞士阿尔卑斯的心脏。欧洲屋脊3454米、哈德昆观景台、布里恩茨湖，让人沉醉在大自然的怀抱。',
    tags: ['少女峰', '雪山', '缆车', '自然'],
    imageUrl: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1200'
  },
  {
    id: 'zermatt',
    name: '采尔马特',
    nameEn: 'Zermatt',
    country: '瑞士',
    lat: 46.0207,
    lng: 7.7491,
    days: 2,
    description: '马特洪峰脚下的无车山城。4478米的标志性山峰、戈尔内格拉特日出观景台、冰川天堂缆车，带来一生难忘的阿尔卑斯体验。',
    tags: ['马特洪峰', '日出', '无车小镇', '摄影'],
    imageUrl: '/generated-images/Zermatt_Switzerland_with_iconi_2026-04-21T14-14-02.png'
  },
  {
    id: 'lyon',
    name: '里昂',
    nameEn: 'Lyon',
    country: '法国',
    lat: 45.7640,
    lng: 4.8357,
    days: 1,
    description: '法国美食之都。传统Bouchon、老城Traboules秘密通道、富维耶圣母院、米其林晚餐，美食与文化的完美融合。',
    tags: ['美食', '米其林', '古城', '文化', '秘密通道'],
    imageUrl: '/generated-images/Lyon_France_at_night__illumina_2026-04-21T14-04-52.png'
  },
  {
    id: 'beaune',
    name: '博讷',
    nameEn: 'Beaune',
    country: '法国',
    lat: 47.0256,
    lng: 4.8379,
    days: 1,
    description: '勃艮第葡萄酒之都。UNESCO世界遗产主宫医院、Patriarche酒窖品酒、特级葡萄园之路、米其林美食，深度体验法国葡萄酒文化。',
    tags: ['葡萄酒', '世界遗产', '美食', '品酒'],
    imageUrl: '/generated-images/Beaune_town_center_France__col_2026-04-21T14-04-52.png'
  }
];
