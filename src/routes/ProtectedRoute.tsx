import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "@/services/auth/store/auth.store"

export default function ProtectedRoute() {
  const { accessToken } = useAuthStore()


  return accessToken ? <Outlet /> : <Navigate to="/login" replace />;
}