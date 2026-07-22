import type { Transaction } from "@/types/dashboard.type"
import Section from "../Section"
import { ArrowDown, ArrowUp } from "lucide-react"
import { getRecentTransactions } from "@/services/dashboard/dashboard.api"
import { useQuery } from "@tanstack/react-query"
import { Skeleton } from "../ui/skeleton"
import { useEffect } from "react"
import { toast } from "sonner"
import { formatCurrency } from "@/lib/utils"

function RecentTransactions() {
  const { isLoading, data, isError, refetch } = useQuery<Transaction[]>({
    queryKey: ["recent-transactions"],
    queryFn: getRecentTransactions,
  })

  useEffect(() => {
    if (!isError) return

    toast.error(
      "Có lỗi xảy ra khi tải dữ liệu giao dịch. Vui lòng thử lại sau.",
      {
        id: "recent-transactions-error",
        action: {
          label: "Thử lại",
          onClick: () => refetch(),
        },
      }
    )
  }, [isError, refetch])
  console.log(data)
  return (
    <Section title="Giao dịch gần đây" action="Xem tất cả">
      <div className="space-y-3">
        {isLoading && <Skeleton className="h-60 w-full" />}
        {data?.length === 0 && (
          <div className="flex h-60 items-center justify-center text-center">
            <p className="text-sm font-semibold">Không có giao dịch nào.</p>
          </div>
        )}
        {data?.map((t) => (
          <div key={t.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={`flex size-9 items-center justify-center rounded-full ${t.up ? "bg-primary/15 text-primary" : "bg-destructive/10 text-destructive"}`}
              >
                {t.up ? (
                  <ArrowDown className="size-4" />
                ) : (
                  <ArrowUp className="size-4" />
                )}
              </div>
              <div>
                <p className="text-sm font-medium">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.note}</p>
              </div>
            </div>
            <div className="text-right">
              <p
                className={`text-sm font-semibold ${t.up ? "text-primary" : "text-destructive"}`}
              >
                {formatCurrency(t.amount)}
              </p>
              <p className="text-xs text-muted-foreground">{t.date}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default RecentTransactions
