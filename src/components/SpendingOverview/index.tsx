import { getTotalExpenses } from "@/services/dashboard/dashboard.api"
import Section from "../Section"
import { useEffect } from "react"
import type { ExpenseCategory } from "@/types/dashboard.type"
import { useQuery } from "@tanstack/react-query"
import { toast } from "sonner"
import { Skeleton } from "../ui/skeleton"
import { EXPENSE_CATEGORY_CONFIG } from "@/lib/constants"
import ExpensePieChart from "../ExpensePieChart"
import { formatCurrency } from "@/lib/utils"
import moment from "moment"
const today = moment().format("MM/YYYY");
type ExpenseCategoryKey = keyof typeof EXPENSE_CATEGORY_CONFIG

export function SpendingOverview() {
  const { isLoading, data, isError, refetch } = useQuery<ExpenseCategory[]>({
    queryKey: ["total-expenses"],
    queryFn: getTotalExpenses,
  })
  const totalExpenses = data?.reduce((acc, item) => acc + item.amount, 0) || 0
  useEffect(() => {
    if (!isError) return

    toast.error(
      "Có lỗi xảy ra khi tải dữ liệu giao dịch. Vui lòng thử lại sau.",
      {
        id: "total-expenses-error",
        action: {
          label: "Thử lại",
          onClick: () => refetch(),
        },
      }
    )
  }, [isError, refetch])

  return (
    <Section title="Tổng quan chi tiêu" action={`Tháng ${today}`}>
      {isLoading && <Skeleton className="h-60 w-full" />}
      {data?.length === 0 && (
        <div className="flex h-60 items-center justify-center text-center">
          <p className="text-sm font-semibold">Chưa có dữ liệu chi tiêu.</p>
        </div>
      )}
      {data && data.length > 0 && (
        <div className="flex items-center gap-4">
          <ExpensePieChart data={data} />
          <div className="flex-1 space-y-2">
            {data?.map((item) => {
              const expsenseCategoryType =
                EXPENSE_CATEGORY_CONFIG[item.category as ExpenseCategoryKey] ??
                EXPENSE_CATEGORY_CONFIG.OTHER
              return (
                <div
                  key={expsenseCategoryType.label}
                  className="flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="size-2.5 rounded-full"
                      style={{ backgroundColor: expsenseCategoryType.color }}
                    />
                    <span>{expsenseCategoryType.label}</span>
                  </div>
                  <div className="flex gap-3 text-muted-foreground">
                    <span>{item.percentage}%</span>
                    <span className="font-medium text-foreground">
                      {formatCurrency(item.amount)}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
      <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
        <span className="text-sm text-muted-foreground">Tổng chi tiêu</span>
        <span className="text-base font-bold">
          {formatCurrency(totalExpenses)}
        </span>
      </div>
    </Section>
  )
}

export default SpendingOverview
