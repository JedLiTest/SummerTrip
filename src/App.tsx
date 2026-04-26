import { useMemo } from 'react'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import RouteMap from './components/RouteMap'
import CitySection from './components/CitySection'
import BookingReminder from './components/BookingReminder'
import TravelTips from './components/TravelTips'
import Footer from './components/Footer'
import { cities } from './data/cities'
import { tripData } from './data/tripData'
import { useScrollSpy } from './hooks/useScrollSpy'

function App() {
  const cityIds = useMemo(() => cities.map(c => `city-${c.id}`), [])
  const activeCityId = useScrollSpy(cityIds, 100)
  const activeCity = activeCityId ? activeCityId.replace('city-', '') : cities[0].id

  // Group days by city
  const citySections = useMemo(() => {
    let dayOffset = 0
    return cities.map(city => {
      const days = tripData.filter(d => d.cityId === city.id)
      const startIndex = dayOffset
      dayOffset += days.length
      return { city, days, startIndex }
    })
  }, [])

  return (
    <div className="min-h-screen bg-surface-light">
      {/* Hero Section */}
      <Hero />

      {/* Sticky Navigation */}
      <Navigation activeCity={activeCity} />

      {/* Route Map */}
      <RouteMap />

      {/* Day-by-Day Itinerary */}
      <main className="max-w-7xl mx-auto px-4 pb-16">
        <div className="space-y-16">
          {citySections.map(({ city, days, startIndex }) => (
            <CitySection
              key={city.id}
              city={city}
              days={days}
              dayStartIndex={startIndex}
            />
          ))}
        </div>
      </main>

      {/* Booking Reminders */}
      <BookingReminder />

      {/* Travel Tips */}
      <TravelTips />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
