import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

import { EXPENSE_CATEGORY_CONFIG } from "@/lib/constants"
import type { ExpenseCategory } from "@/types/dashboard.type"
import { formatCurrency } from "@/lib/utils"

type ExpenseCategoryKey = keyof typeof EXPENSE_CATEGORY_CONFIG

export function ExpensePieChart({ data }: { data: ExpenseCategory[] }) {
  const chartData = data.map((item) => ({
    ...item,
    label:
      EXPENSE_CATEGORY_CONFIG[item.category as ExpenseCategoryKey]?.label ??
      EXPENSE_CATEGORY_CONFIG.OTHER.label,
    fill:
      EXPENSE_CATEGORY_CONFIG[item.category as ExpenseCategoryKey]?.color ??
      EXPENSE_CATEGORY_CONFIG.OTHER.color,
  }))

  return (
    <div
      className="h-40 w-40 shrink-0"
      aria-label="Biểu đồ chi tiêu theo danh mục"
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            dataKey="amount"
            nameKey="category"
            cx="50%"
            cy="50%"
            outerRadius={64}
            stroke="var(--card)"
            strokeWidth={2}
          />
          <Tooltip
            content={({ active, payload }) => {
              if (!active || !payload?.length) return null

              const activeExpense = payload[0]
                .payload as (typeof chartData)[number]

              return (
                <div className="rounded-md border border-border bg-card px-3 py-2 text-xs font-medium text-card-foreground shadow-md">
                  {activeExpense.label} -{" "}
                  {formatCurrency(activeExpense.amount)}
                </div>
              )
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ExpensePieChart
