import { motion } from 'framer-motion'
import { travelTips } from '../data/tips'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion'
import {
  FileText, Coins, Phone, Sun, Luggage, Shield,
} from 'lucide-react'

const iconMap: Record<string, typeof FileText> = {
  passport: FileText,
  coins: Coins,
  phone: Phone,
  sun: Sun,
  luggage: Luggage,
  shield: Shield,
}

export default function TravelTips() {
  return (
    <section className="py-16 bg-gradient-to-b from-surface-light to-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary mb-3">实用旅行贴士</h2>
            <p className="text-gray-500">出发前的必备知识，助你旅途无忧</p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white card-shadow overflow-hidden">
            <Accordion type="single" defaultValue={['visa']}>
              {travelTips.map((category) => {
                const Icon = iconMap[category.icon] || FileText
                return (
                  <AccordionItem key={category.id} value={category.id}>
                    <AccordionTrigger className="px-6 hover:bg-gray-50">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-ocean-50 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="font-semibold text-gray-700">{category.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6">
                      <ul className="space-y-2 ml-11">
                        {category.tips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600 leading-relaxed">
                            <span className="text-primary-bright mt-1 shrink-0">•</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                )
              })}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
