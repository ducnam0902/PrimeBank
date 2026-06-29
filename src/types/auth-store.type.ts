import type { User } from './user.type'

export interface AuthStore {
  user: User | null
  accessToken: string | null

  setAuth: (user: User, accessToken: string) => void,
  logout: () => void
}   