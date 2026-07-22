import Section from "../Section"
import {
  ArrowDown,
  ArrowLeftRight,
  MoreHorizontal,
  PiggyBank,
  Smartphone,
  Zap,
} from "lucide-react"
const quick = [
  { label: "Chuyển tiền", icon: ArrowLeftRight },
  { label: "Nạp tiền điện thoại", icon: Smartphone },
  { label: "Thanh toán hóa đơn", icon: Zap },
  { label: "Mở sổ tiết kiệm", icon: PiggyBank },
  { label: "Nạp tiền", icon: ArrowDown },
  { label: "Xem sao kê", icon: MoreHorizontal },
]

function QuickTransfer() {
  return (
    <Section title="Giao dịch nhanh">
      <div className="grid grid-cols-3 gap-3">
        {quick.map((q) => {
          const I = q.icon
          return (
            <button
              key={q.label}
              className="flex flex-col items-center gap-2 rounded-lg border border-border p-3 transition hover:bg-muted"
            >
              <div className="flex size-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <I className="size-4" />
              </div>
              <span className="text-center text-xs">{q.label}</span>
            </button>
          )
        })}
      </div>
    </Section>
  )
}

export default QuickTransfer
