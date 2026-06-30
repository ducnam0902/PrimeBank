import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { AuthStore } from "@/types/auth-store.type"

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,

      setAuth: (user, accessToken) => {
        set({ user, accessToken })
      },

      logout: () => {
        set({ user: null, accessToken: null })
      },
    }),
    {
      name: "auth-storage",
    }
  )
)
