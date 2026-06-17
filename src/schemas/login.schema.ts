
import zod from "zod"

export const loginSchema = zod.object({
  email: zod.email("Vui lòng nhập email hợp lệ"),
  password: zod
    .string()
    .min(12, "Mật khẩu phải có ít nhất 12 ký tự")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[^A-Za-z0-9]/,
      "Password must contain at least one special character"
    ),
})

export type LoginForm = zod.infer<typeof loginSchema>;