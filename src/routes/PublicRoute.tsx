import { Navigate, Outlet } from "react-router"
import { routes } from "./router"
import { useAuthStore } from "@/services/auth/store/auth.store"

const PublicRoute = () => {
  const { accessToken } = useAuthStore()

  return accessToken ? (
    <Navigate to={routes.dashboard} replace />
  ) : (
    <Outlet />
  )
}

export default PublicRoute
