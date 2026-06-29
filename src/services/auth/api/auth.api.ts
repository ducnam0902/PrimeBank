import mockDelay from "@/lib/utils"
import type { LoginForm } from "@/schemas/login.schema"
import type { RegisterForm } from "@/schemas/register.schema"
import type { OtpForm } from "@/schemas/resetPassword.schema"
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

export async function register(registerInfo: RegisterForm) {
  await mockDelay()

  const existed = users.find((u) => u.email === registerInfo.email)

  if (existed) {
    throw new Error("Email already exists")
  }

  users.push({
    id: crypto.randomUUID(),
    lastLogin: new Date().toISOString(),
    ...registerInfo,
  })

  return {
    message: "Register successfully",
  }
}

export async function forgotPassword(data: { email: string }) {
  await mockDelay()
  console.log(data)
  return {
    message: "OTP has been sent successfully.",
  }
}

export async function resetPassword(data: OtpForm) {
  await mockDelay()
  console.log(data)
  return {
    message: "Password updated successfully",
  }
}
