import { ArrowUp, Heart } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-surface-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          <p className="text-2xl font-light text-white/80 mb-2 tracking-wide">
            Bon Voyage !
          </p>
          <p className="text-gray-400 text-sm mb-6">
            愿这趟法国·瑞士之旅，留下一生珍藏的美好回忆
          </p>
          <div className="flex items-center justify-center gap-1 text-xs text-gray-500">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-red-400 fill-red-400" />
            <span>for our family trip · 2026</span>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary text-white shadow-lg shadow-primary/30 flex items-center justify-center hover:bg-primary-light transition-colors cursor-pointer hover:scale-110 active:scale-95 z-50"
        aria-label="回到顶部"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  )
}
