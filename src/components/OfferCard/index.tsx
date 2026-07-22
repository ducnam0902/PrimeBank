import { Gift } from "lucide-react"
import Section from "../Section"

function OfferCard() {
  return (
    <Section title="Ưu đãi dành cho bạn">
      <div className="flex items-center gap-4 rounded-lg bg-gradient-to-br from-primary to-[oklch(0.55_0.16_155)] p-5 text-primary-foreground">
        <Gift className="size-10 shrink-0" />
        <div>
          <p className="text-sm font-semibold">Hoàn tiền đến 1.000.000đ</p>
          <p className="mt-1 text-xs opacity-90">
            Khi chi tiêu qua thẻ PrimeBank. Áp dụng đến hết 30/06/2024.
          </p>
          <button className="mt-3 rounded-md bg-white/15 px-3 py-1.5 text-xs backdrop-blur hover:bg-white/25">
            Xem chi tiết
          </button>
        </div>
      </div>
    </Section>
  )
}
export default OfferCard
