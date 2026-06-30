import PrimeLogo from "@/assets/primeLogo.png"
import { Link, Outlet, useLocation, useNavigate } from "react-router"

import {
  ArrowLeftRight,
  Bell,
  CreditCard,
  LayoutGrid,
  LogOut,
  PiggyBank,
  Receipt,
  Send,
  User,
  Wallet,
} from "lucide-react"
import { routes } from "@/routes/router"
import { Button } from "@/components/ui/button"
import { useAuthStore } from "@/services/auth/store/auth.store"
import { toast } from "sonner"

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
export default function MainLayout() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { setAuth } = useAuthStore()
  const handleLogout = () => {
    setAuth(null, "")
    toast.success("Đăng xuất thành công!");
    navigate(routes.login, { replace: true })
  }

  return (
    <main className="flex">
      <aside className="sticky top-0 hidden h-screen w-60 shrink-0 flex-col border-r border-sidebar-border bg-sidebar md:flex">
        <div className="border-b border-sidebar-border px-5 py-5">
          <Link to={routes.dashboard}>
            <img src={PrimeLogo} alt="PrimeBank" className="mx-auto h-10" />
          </Link>
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
        <div className="border-t border-sidebar-border p-3 text-center">
          <Button
            onClick={handleLogout}
            className="gap-3 rounded-md bg-transparent px-3 py-2.5 text-center text-sm font-medium text-destructive hover:bg-muted"
          >
            <LogOut className="size-4" />
            Đăng xuất
          </Button>
        </div>
      </aside>
      <div className="flex-1">
        <Outlet />
      </div>
    </main>
  )
}
