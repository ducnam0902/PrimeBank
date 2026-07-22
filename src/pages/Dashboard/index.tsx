import Greeting from "@/components/Greetings"
import MyAccounts from "@/components/MyAccount"
import OfferCard from "@/components/OfferCard"
import QuickTransfer from "@/components/QuickTransfer"
import RecentTransactions from "@/components/RecentTransactions"
import SpendingOverview from "@/components/SpendingOverview"
import SummaryCard from "@/components/SummaryCard"
import TopBar from "@/components/TopBar"
import { formatCurrency, formatGrowth } from "@/lib/utils"
import { getDashboardSummary } from "@/services/dashboard/dashboard.api"
import type { DashboardSummary } from "@/types/dashboard.type"
import { useQuery } from "@tanstack/react-query"
import { useEffect } from "react"
import { toast } from "sonner"

const DashboardPage = () => {
  const summaryQuery = useQuery<DashboardSummary>({
    queryKey: ["dashboard-summary"],
    queryFn: getDashboardSummary,
  })
  const { isLoading, isError, refetch } = summaryQuery
  const {
    totalBalance,
    monthlyIncome,
    monthlyExpense,
    savingRate,

    totalBalanceGrowth,
    incomeGrowth,
    expenseGrowth,
    savingRateGrowth,
  } = summaryQuery.data || {}

  useEffect(() => {
    if (!isError) return

    toast.error(
      "Có lỗi xảy ra khi tải dữ liệu tổng quan. Vui lòng thử lại sau.",
      {
        id: "dashboard-summary-error",
        action: {
          label: "Thử lại",
          onClick: () => refetch(),
        },
      }
    )
  }, [isError, refetch])

  return (
    <div className="space-y-6 p-6">
      <TopBar />
      <Greeting />
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <SummaryCard
          isLoading={isLoading}
          title="Tổng tài sản"
          value={formatCurrency(totalBalance || 0)}
          growth={totalBalanceGrowth || 0}

        />
        <SummaryCard
          isLoading={isLoading}
          title="Thu nhập tháng này"
          value={formatCurrency(monthlyIncome || 0)}
          growth={incomeGrowth || 0}

        />
        <SummaryCard
          isLoading={isLoading}
          title="Chi tiêu tháng này"
          value={formatCurrency(monthlyExpense || 0)}
          growth={expenseGrowth || 0}
        />
        <SummaryCard
          isLoading={isLoading}
          title="Tỷ lệ tiết kiệm"
          value={`${formatGrowth(savingRate || 0)}`}
          growth={savingRateGrowth || 0}
          currency=""
        />
      </div>
      <div className="grid gap-3 lg:grid-cols-3">
        <MyAccounts />
        <RecentTransactions />
        <SpendingOverview />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <QuickTransfer />
        <OfferCard />
      </div>
    </div>
  )
}

export default DashboardPage
