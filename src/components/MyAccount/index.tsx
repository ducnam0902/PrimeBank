import { PiggyBank, Wallet } from "lucide-react"
import Section from "../Section"
import { getAccounts } from "@/services/dashboard/dashboard.api"
import type { Account } from "@/types/dashboard.type"
import { useQuery } from "@tanstack/react-query"
import { Skeleton } from "../ui/skeleton"
import { useEffect } from "react"
import { toast } from "sonner"

interface IAccountRow {
  name: string
  number: string
  amount: string
  badge: string
  icon: React.ReactNode
}

function MyAccounts() {
  const { data, isLoading, isError, refetch } = useQuery<Account[]>({
    queryKey: ["accounts"],
    queryFn: getAccounts,
  })

  useEffect(() => {
    if (!isError) return

    toast.error(
      "Có lỗi xảy ra khi tải dữ liệu tài khoản. Vui lòng thử lại sau.",
      {
        id: "accounts-error",
        action: {
          label: "Thử lại",
          onClick: () => refetch(),
        },
      }
    )
  }, [isError, refetch])

  return (
    <Section title="Tài khoản của tôi" action="Xem tất cả">
      {isLoading && <Skeleton className="h-60 w-full" />}
      {data?.length === 0 && (
        <div className="flex h-60 items-center justify-center text-center">
          <p className="text-sm font-semibold">Không có tài khoản nào.</p>
        </div>
      )}
      {data?.map((account) => (
        <AccountRow
          key={account.id}
          name={account.accountName}
          number={account.accountNumber}
          amount={account.balance.toLocaleString("vi-VN")}
          badge={
            account.type === "PAYMENT"
              ? "Mặc định"
              : `Kỳ hạn ${account.duration}T`
          }
          icon={
            account.type === "PAYMENT" ? (
              <Wallet className="size-5" />
            ) : (
              <PiggyBank className="size-5" />
            )
          }
        />
      ))}
    </Section>
  )
}

function AccountRow({ name, number, amount, badge, icon }: IAccountRow) {
  let maskedDigits = 0
  const maskedNumber = number.replace(/\d/g, (digit) =>
    maskedDigits++ < 8 ? "*" : digit
  )

  return (
    <div className="mb-3 rounded-lg border border-border p-4 last:mb-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-md bg-accent text-accent-foreground">
            {icon}
          </div>
          <div>
            <p className="text-sm font-medium">{name}</p>
            <p className="text-xs text-muted-foreground">{maskedNumber}</p>
          </div>
        </div>
        <span className="rounded bg-accent px-2 py-1 text-[10px] font-medium text-accent-foreground">
          {badge}
        </span>
      </div>
      <p className="mt-3 text-right text-lg font-bold">{amount}</p>
    </div>
  )
}
export default MyAccounts
