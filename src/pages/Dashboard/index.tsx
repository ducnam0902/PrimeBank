import React from "react"
import { Link, useLocation } from "react-router"
import PrimeLogo from "@/assets/primeLogo.png"

import {
  LayoutGrid,
  Wallet,
  ArrowLeftRight,
  Send,
  PiggyBank,
  CreditCard,
  Receipt,
  Bell,
  User,
  LogOut,
} from "lucide-react"

const items: { to: string; label: string; icon: typeof LayoutGrid }[] = [
  { to: "/", label: "Tổng quan", icon: LayoutGrid },
  { to: "/accounts", label: "Tài khoản", icon: Wallet },
  { to: "/transactions", label: "Giao dịch", icon: ArrowLeftRight },
  { to: "/beneficiaries", label: "Người nhận", icon: User },
  { to: "/transfer", label: "Chuyển tiền", icon: Send },
  { to: "/savings", label: "Tiết kiệm", icon: PiggyBank },
  { to: "/analytics", label: "Báo cáo", icon: CreditCard },
  { to: "/notifications", label: "Thông báo", icon: Bell },
  { to: "/profile", label: "Hồ sơ", icon: Receipt },
]
const DashboardPage = () => {
  const { pathname } = useLocation();
  return (
    <aside className="sticky top-0 hidden h-screen w-60 shrink-0 flex-col border-r border-sidebar-border bg-sidebar md:flex">
      <div className="border-b border-sidebar-border px-5 py-5">
        <img src={PrimeLogo} alt="PrimeBank" className="mx-auto mb-4 h-12" />
      </div>
      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
        {items.map((it) => {
          const active = pathname === it.to
          const Icon = it.icon
          return (
            <Link
              key={it.to}
              to={it.to as never}
              className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                active
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-muted"
              }`}
            >
              <Icon className="size-4" />
              {it.label}
            </Link>
          )
        })}
      </nav>
      <div className="border-t border-sidebar-border p-3">
        <Link
          to="/auth"
          className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-destructive hover:bg-muted"
        >
          <LogOut className="size-4" />
          Đăng xuất
        </Link>
      </div>
    </aside>
  )
}

export default DashboardPage
