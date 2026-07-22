export interface DashboardSummary {
  totalBalance: number;
  monthlyIncome: number;
  monthlyExpense: number;
  savingRate: number;

  totalBalanceGrowth: number;
  incomeGrowth: number;
  expenseGrowth: number;
  savingRateGrowth: number;
}

export interface Account {
  id: string;
  accountNumber: string;
  accountName: string;
  balance: number;
  type: "PAYMENT" | "SAVINGS";
  status: "ACTIVE" | "LOCKED";
  duration?: number; // Duration in months, applicable for savings accounts
}

export interface Transaction {
  name: string;
  note: string;
  date: string; // Format: "DD/MM/YYYY"
  amount: number; // Format: 20000000 or -250000
  up: boolean; // true for income, false for expense
}

export interface ExpenseCategory {
  category: string;
  amount: number;
  percentage: number;
}