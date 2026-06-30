
import zod from "zod"

export const loginSchema = zod.object({
  email: zod.email("Vui lòng nhập email hợp lệ"),
  password: zod
    .string()
    .min(12, "Mật khẩu phải có ít nhất 12 ký tự")
    .regex(/[A-Z]/, "Mật khẩu phải chứa ít nhất một chữ cái viết hoa")
    .regex(/[0-9]/, "Mật khẩu phải chứa ít nhất một số")
    .regex(
      /[^A-Za-z0-9]/,
      "Mật khẩu phải chứa ít nhất một ký tự đặc biệt"
    ),
})

export type LoginForm = zod.infer<typeof loginSchema>;