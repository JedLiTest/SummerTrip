import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { cities } from '../data/cities'

export default function RouteMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<L.Map | null>(null)

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return

    const map = L.map(mapRef.current, {
      center: [46.8, 6.5],
      zoom: 7,
      scrollWheelZoom: false,
      zoomControl: true,
      // 移动端支持双指缩放
      touchZoom: true,
      dragging: true,
      ...({ tap: true } as any),
    })

    mapInstanceRef.current = map

    // 延迟调用 invalidateSize 确保移动端容器尺寸正确
    setTimeout(() => {
      map.invalidateSize()
    }, 100)
    // 再次延迟，某些移动浏览器需要更长时间
    setTimeout(() => {
      map.invalidateSize()
    }, 500)

    // 监听窗口大小变化，重新适配地图
    const handleResize = () => {
      map.invalidateSize()
    }
    window.addEventListener('resize', handleResize)

    // 使用 ResizeObserver 监听容器尺寸变化（移动端更可靠）
    let resizeObserver: ResizeObserver | null = null
    if (typeof ResizeObserver !== 'undefined' && mapRef.current) {
      resizeObserver = new ResizeObserver(() => {
        map.invalidateSize()
      })
      resizeObserver.observe(mapRef.current)
    }

    // 地图源配置
    const tileSources = [
      {
        url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        attribution: '© <a href="https://carto.com/">CARTO</a> | © <a href="https://openstreetmap.org/">OpenStreetMap</a>',
        subdomains: 'abcd',
      },
      {
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '© <a href="https://openstreetmap.org/">OpenStreetMap</a>',
        subdomains: 'abc',
      },
      {
        url: 'https://mt{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
        attribution: '© Google Maps',
        subdomains: '0123',
      },
    ]

    let currentSource = 0

    const createTileLayer = (sourceIndex: number) => {
      const src = tileSources[sourceIndex]
      return L.tileLayer(src.url, {
        attribution: src.attribution,
        subdomains: src.subdomains,
        maxZoom: 20,
        minZoom: 3,
        errorTileUrl: '', // 错误瓦片不显示碎图
      })
    }

    let tileLayer = createTileLayer(0)
    tileLayer.addTo(map)

    // 监听瓦片加载错误，快速切换到备用源
    let errorCount = 0
    const ERROR_THRESHOLD = 2 // 减少阈值，更快切换
    tileLayer.on('tileerror', () => {
      errorCount++
      if (errorCount >= ERROR_THRESHOLD && currentSource < tileSources.length - 1) {
        currentSource++
        errorCount = 0
        console.log(`地图瓦片加载失败，切换到备用源: ${tileSources[currentSource].url.substring(0, 40)}...`)
        map.removeLayer(tileLayer)
        tileLayer = createTileLayer(currentSource)
        tileLayer.addTo(map)
        // 为新图层也绑定错误监听
        tileLayer.on('tileerror', () => {
          errorCount++
          if (errorCount >= ERROR_THRESHOLD && currentSource < tileSources.length - 1) {
            currentSource++
            errorCount = 0
            console.log(`地图瓦片加载失败，切换到备用源: ${tileSources[currentSource].url.substring(0, 40)}...`)
            map.removeLayer(tileLayer)
            tileLayer = createTileLayer(currentSource)
            tileLayer.addTo(map)
          }
        })
      }
    })

    // Custom icon
    const createIcon = (isStart: boolean, isEnd: boolean) => {
      const color = isStart ? '#E74C3C' : isEnd ? '#2ECC71' : '#4A9BD9'
      return L.divIcon({
        className: 'custom-marker',
        html: `<div style="
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: ${color};
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        "></div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
        popupAnchor: [0, -16],
      })
    }

    // Add markers and route line
    const latlngs: L.LatLngTuple[] = []

    cities.forEach((city, index) => {
      const isStart = index === 0
      const isEnd = index === cities.length - 1
      const icon = createIcon(isStart, isEnd)
      const marker = L.marker([city.lat, city.lng], { icon }).addTo(map)

      const dayStart = cities.slice(0, index).reduce((sum, c) => sum + c.days, 0) + 1
      const dayEnd = dayStart + city.days - 1

      marker.bindPopup(`
        <div style="text-align:center;min-width:140px;font-family:Montserrat,sans-serif;">
          <h3 style="margin:0 0 4px;font-size:16px;font-weight:700;color:#1E3A5F;">${city.name}</h3>
          <p style="margin:0 0 4px;font-size:12px;color:#666;">${city.nameEn}, ${city.country}</p>
          <p style="margin:0;font-size:12px;color:#4A9BD9;font-weight:600;">Day ${dayStart}-${dayEnd} · ${city.days}天</p>
        </div>
      `)

      latlngs.push([city.lat, city.lng])
    })

    // Draw route line
    L.polyline(latlngs, {
      color: '#4A9BD9',
      weight: 3,
      opacity: 0.7,
      dashArray: '10, 8',
    }).addTo(map)

    // Fit bounds
    const bounds = L.latLngBounds(latlngs)
    map.fitBounds(bounds, { padding: [40, 40] })

    return () => {
      window.removeEventListener('resize', handleResize)
      if (resizeObserver) {
        resizeObserver.disconnect()
      }
      map.remove()
      mapInstanceRef.current = null
    }
  }, [])

  // 生成 Apple Maps 路线链接
  const appleMapsUrl = (() => {
    const addresses = cities.map(c => `${c.lat},${c.lng}`);
    // Apple Maps 使用 daddr 参数表示途经点，saddr 表示起点
    const origin = addresses[0];
    const destination = addresses[addresses.length - 1];
    const waypoints = addresses.slice(1, -1).join('+to:');
    return `https://maps.apple.com/?saddr=${origin}&daddr=${waypoints ? waypoints + '+to:' + destination : destination}&dirflg=d`;
  })();

  return (
    <section id="route-map" className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary mb-3">行程路线</h2>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500 flex-wrap">
          {cities.map((city, i) => (
            <span key={city.id} className="flex items-center gap-2">
              <span className="font-medium text-gray-700">{city.name}</span>
              {i < cities.length - 1 && (
                <span className="text-primary-bright">→</span>
              )}
            </span>
          ))}
        </div>
        <a
          href={appleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-full text-sm font-medium transition-colors shadow-md hover:shadow-lg"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="white"/>
          </svg>
          在 Apple Maps 中查看路线
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      <div className="rounded-2xl overflow-hidden card-shadow bg-white p-2">
        <div
          ref={mapRef}
          className="w-full rounded-xl overflow-hidden"
          style={{ height: 'clamp(280px, 50vw, 420px)' }}
        />
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 mt-4 text-xs text-gray-500">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500 border-2 border-white shadow" />
          <span>出发城市</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary-bright border-2 border-white shadow" />
          <span>途经城市</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500 border-2 border-white shadow" />
          <span>终点城市</span>
        </div>
      </div>
    </section>
  )
}
