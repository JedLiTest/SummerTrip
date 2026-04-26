import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const scrollToContent = () => {
    const el = document.getElementById('route-map')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&q=80"
          alt="Paris skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '80px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-0.5 bg-white/60 mx-auto mb-6"
          />

          <h1 className="text-5xl md:text-7xl font-bold tracking-wider mb-4">
            法国 <span className="text-primary-bright">·</span> 瑞士
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl font-light tracking-widest mb-8 text-white/90"
          >
            15天家庭休闲之旅
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '80px' }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="h-0.5 bg-white/60 mx-auto mb-10"
          />
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 cursor-pointer hover:scale-110 transition-transform"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-widest text-white/60 uppercase">探索行程</span>
            <ChevronDown className="w-6 h-6 text-white/60" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}
