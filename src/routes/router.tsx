import { createBrowserRouter } from "react-router";

import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";

import LoginPage from "@/pages/Login";
import RegisterPage from "@/pages/Register";
import ForgotPasswordPage from "@/pages/ForgotPassword";
import DashboardPage from "@/pages/Dashboard";

import ProtectedRoute from "@/routes/ProtectedRoute";

export const routes = {
  login: "/login",
  register: "/register",
  forgotPassword: "/forgot-password",
  dashboard: "/",
};

export const router = createBrowserRouter([
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
        ],
      },
    ],
  },
]);