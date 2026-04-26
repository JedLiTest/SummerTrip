import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { budgetItems, totalBudget, perPersonBudget } from '../data/budget'
import { Wallet, TrendingUp } from 'lucide-react'
import { useState } from 'react'

type CurrencyKey = 'EUR' | 'CHF' | 'CNY'

const rates: Record<CurrencyKey, number> = { EUR: 1, CHF: 0.97, CNY: 7.85 }
const symbols: Record<CurrencyKey, string> = { EUR: '€', CHF: 'CHF ', CNY: '¥' }

export default function BudgetOverview() {
  const [currency, setCurrency] = useState<CurrencyKey>('EUR')
  const rate = rates[currency]
  const symbol = symbols[currency]

  const convert = (amount: number) => Math.round(amount * rate)

  const chartData = budgetItems.map(item => ({
    name: item.category,
    value: item.amount,
    color: item.color,
  }))

  return (
    <section className="bg-surface-dark py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">预算概览</h2>
            <p className="text-gray-400">4人家庭14天法国瑞士旅行预估费用</p>
          </div>

          {/* Currency Switcher */}
          <div className="flex justify-center gap-2 mb-10">
            {(Object.keys(rates) as CurrencyKey[]).map(key => (
              <button
                key={key}
                onClick={() => setCurrency(key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  currency === key
                    ? 'bg-primary-bright text-white shadow-md'
                    : 'bg-white/10 text-gray-400 hover:bg-white/20'
                }`}
              >
                {key}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Pie Chart */}
            <div className="flex flex-col items-center">
              <div className="w-64 h-64 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={110}
                      paddingAngle={3}
                      dataKey="value"
                      stroke="none"
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value: number) => [`${symbol}${convert(value)}`, '']}
                      contentStyle={{
                        background: 'rgba(0,0,0,0.8)',
                        border: 'none',
                        borderRadius: '8px',
                        color: 'white',
                        fontSize: '14px',
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                {/* Center text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-xs text-gray-400 mb-1">总预算</span>
                  <span className="text-xl font-bold text-white">
                    {symbol}{convert(totalBudget).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Budget details */}
            <div className="space-y-4">
              {budgetItems.map(item => (
                <div key={item.category} className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-3 h-3 rounded-full shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-gray-300 text-sm">{item.category}</span>
                  </div>
                  <span className="font-semibold text-white">
                    {symbol}{convert(item.amount).toLocaleString()}
                  </span>
                </div>
              ))}

              {/* Divider */}
              <div className="border-t border-white/10 pt-4 mt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Wallet className="w-4 h-4" />
                    <span className="text-sm">总计</span>
                  </div>
                  <span className="text-xl font-bold text-primary-bright">
                    {symbol}{convert(totalBudget).toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm">人均</span>
                  </div>
                  <span className="text-lg font-semibold text-gray-300">
                    {symbol}{convert(perPersonBudget).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
