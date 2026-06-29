import { createBrowserRouter, Navigate } from "react-router"

import AuthLayout from "@/layouts/AuthLayout"
import MainLayout from "@/layouts/MainLayout"

import LoginPage from "@/pages/Login"
import RegisterPage from "@/pages/Register"
import ForgotPasswordPage from "@/pages/ForgotPassword"
import DashboardPage from "@/pages/Dashboard"

import ProtectedRoute from "@/routes/ProtectedRoute"
import PublicRoute from "./PublicRoute"
import ResetPassword from "@/pages/ResetPassword"

export const routes = {
  login: "/login",
  register: "/register",
  forgotPassword: "/forgot-password",
  resetPassword: "/reset-password",
  dashboard: "/dashboard",
}

export const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            path: routes.login,
            element: <LoginPage />,
          },
          {
            path: routes.register,
            element: <RegisterPage />,
          },
          {
            path: routes.forgotPassword,
            element: <ForgotPasswordPage />,
          },
          {
            path: routes.resetPassword,
            element: <ResetPassword />,
          },
        ],
      },
    ],
  },

  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: routes.dashboard,
            element: <DashboardPage />,
          },
          {
            path: "/",
            element: <Navigate to={routes.dashboard} replace />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={routes.login} replace />,
  },
])
