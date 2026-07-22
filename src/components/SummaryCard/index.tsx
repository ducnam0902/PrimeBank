import { ArrowDown, ArrowUp } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
interface ISummaryCard {
  title: string
  value: string
  growth: number
  isLoading: boolean
  currency?: string
}

const SummaryCard = ({
  title,
  value,
  growth,
  isLoading,
  currency,
}: ISummaryCard) => {
  return (
    <div>
      <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
        <p className="text-xs text-foreground">{title}</p>
        <p className="mt-2 text-2xl font-bold text-foreground">
          {isLoading ? (
            <Skeleton className="h-8 w-full" />
          ) : (
            <>
              {value}{" "}
              {currency && (
                <span className="text-xs font-normal text-muted-foreground">
                  {currency}
                </span>
              )}
            </>
          )}
        </p>
        <p
          className={`mt-2 flex items-center gap-1 text-xs ${growth >= 0 ? "text-primary" : "text-destructive"}`}
        >
          {isLoading ? (
            <Skeleton className="h-3 w-12" />
          ) : (
            <>
              {growth >= 0 ? (
                <ArrowUp className="size-3" />
              ) : (
                <ArrowDown className="size-3" />
              )}
              {growth}%
            </>
          )}

          <span className="text-foreground">so với tháng trước</span>
        </p>
      </div>
    </div>
  )
}

export default SummaryCard
