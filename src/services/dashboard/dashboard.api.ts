import mockDelay from "@/lib/utils"
import type { Account, DashboardSummary, ExpenseCategory, Transaction } from "@/types/dashboard.type"

const mockSummary: DashboardSummary = {
  totalBalance: 125000000,
  monthlyIncome: 25000000,
  monthlyExpense: 15200000,
  savingRate: 39.2,

  totalBalanceGrowth: 5.2,
  incomeGrowth: 12.8,
  expenseGrowth: 3.1,
  savingRateGrowth: 8.0,
}

const mockAccounts: Account[] = [
  {
    id: "1",
    accountNumber: "1234 5678 9012",
    accountName: "Tài khoản thanh toán",
    balance: 75000000,
    type: "PAYMENT",
    status: "ACTIVE",
  },
  {
    id: "2",
    accountNumber: "5678 9012 3456",
    accountName: "Tài khoản tiết kiệm",
    balance: 50000000,
    type: "SAVINGS",
    status: "ACTIVE",
    duration: 12, // Duration in months
  },
]

const mockRecentTransactions = [
  {
    name: "Lương tháng 5",
    note: "Nhận tiền",
    date: "01/05/2024",
    amount: 20000000,
    up: true,
  },
  {
    name: "Shopee",
    note: "Mua sắm",
    date: "31/05/2024",
    amount: 250000,
    up: false,
  },
  {
    name: "Starbucks",
    note: "Ăn uống",
    date: "31/05/2024",
    amount: 120000,
    up: false,
  },
  {
    name: "Chuyển khoản đến John",
    note: "Chuyển tiền",
    date: "30/05/2024",
    amount: 2000000,
    up: false,
  },
]

const totalExpenses = [
  {
    "category": "FOOD",
    "amount": 4864000,
    "percentage": 32
  },
   {
    "category": "SHOPPING",
    "amount": 3648000,
    "percentage": 24
  },
   {
    "category": "TRANSPORT",
    "amount": 2280000,
    "percentage": 15
  },
   {
    "category": "BILL",
    "amount": 1824000,
    "percentage": 12
  },
   {
    "category": "ENTERTAINMENT",
    "amount": 1520000,
    "percentage": 10
  },
   {
    "category": "OTHER",
    "amount": 1064000,
    "percentage": 7
  }
]

export async function getDashboardSummary(): Promise<DashboardSummary> {
  await mockDelay()

  return {
    ...mockSummary,
  }
}

export async function getAccounts(): Promise<Account[]> {
  await mockDelay()

  return [...mockAccounts]
}

export async function getRecentTransactions(): Promise<Transaction[]> {
  await mockDelay()

  return [...mockRecentTransactions]
}

export async function getTotalExpenses(): Promise<ExpenseCategory[]> {
  await mockDelay()

  return [...totalExpenses]
}