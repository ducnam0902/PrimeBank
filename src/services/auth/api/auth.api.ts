import mockDelay from "@/lib/utils"
import type { LoginForm } from "@/schemas/login.schema"
import type { User } from "@/types/user.type"

export const users: User[] = [
  {
    id: "1",
    fullName: "Nam Le",
    email: "ducnam0902@gmail.com",
    phoneNumber: "0123456789",
    lastLogin: new Date().toISOString(),
  },
]

export async function login(loginInfo: LoginForm) {
  await mockDelay()

  const user = users.find((u) => u.email === loginInfo.email)

  if (!user) {
    throw new Error("Invalid email or password")
  }

  return {
    accessToken: crypto.randomUUID(),
    user,
  }
}

export async function register() {
  await mockDelay()

  // kiểm tra email đã tồn tại

  // thêm user mới vào users[]

  return {
    message: "Register successfully",
  }
}

export async function forgotPassword(email: string) {
  await mockDelay()

  return {
    otp: "123456",
  }
}

export async function resetPassword() {
  await mockDelay()

  return {
    message: "Password updated successfully",
  }
}
