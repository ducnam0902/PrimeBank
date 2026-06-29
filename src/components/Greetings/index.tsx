import { useAuthStore } from "@/services/auth/store/auth.store"

function Greeting() {
  const { user } = useAuthStore()
  return (
    <div>
      <h1 className="text-xl font-semibold">Xin chào, {user?.fullName} 👋</h1>
      <p className="text-sm text-muted-foreground">
        Chúc bạn một ngày làm việc hiệu quả!
      </p>
    </div>
  )
}

export default Greeting
