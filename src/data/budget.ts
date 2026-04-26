import { BudgetItem } from '../types'

export const budgetItems: BudgetItem[] = [
  {
    category: '住宿',
    icon: 'bed',
    amount: 4200,
    currency: 'EUR',
    color: '#4A9BD9',
  },
  {
    category: '交通',
    icon: 'train',
    amount: 1800,
    currency: 'EUR',
    color: '#2ECC71',
  },
  {
    category: '餐饮',
    icon: 'utensils',
    amount: 2400,
    currency: 'EUR',
    color: '#F39C12',
  },
  {
    category: '门票 & 活动',
    icon: 'ticket',
    amount: 1200,
    currency: 'EUR',
    color: '#E74C3C',
  },
  {
    category: '购物 & 纪念品',
    icon: 'shopping-bag',
    amount: 800,
    currency: 'EUR',
    color: '#9B59B6',
  },
  {
    category: '其他',
    icon: 'wallet',
    amount: 600,
    currency: 'EUR',
    color: '#1ABC9C',
  },
]

export const totalBudget = budgetItems.reduce((sum, item) => sum + item.amount, 0)
export const perPersonBudget = Math.round(totalBudget / 4)

export const exchangeRates = {
  EUR: 1,
  CHF: 0.97,
  CNY: 7.85,
}
