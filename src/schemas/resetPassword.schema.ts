import zod from "zod"

export const OtpSchema = zod
  .object({
    otp: zod.string().min(6, "Mã OTP phải có ít nhất 6 ký tự"),
    password: zod
      .string()
      .min(12, "Mật khẩu phải có ít nhất 12 ký tự")
      .regex(/[A-Z]/, "Mật khẩu phải chứa ít nhất một chữ cái viết hoa")
      .regex(/[0-9]/, "Mật khẩu phải chứa ít nhất một số")
      .regex(/[^A-Za-z0-9]/, "Mật khẩu phải chứa ít nhất một ký tự đặc biệt"),
    confirmPassword: zod
      .string()
      .min(12, "Mật khẩu phải có ít nhất 12 ký tự")
      .regex(/[A-Z]/, "Mật khẩu phải chứa ít nhất một chữ cái viết hoa")
      .regex(/[0-9]/, "Mật khẩu phải chứa ít nhất một số")
      .regex(/[^A-Za-z0-9]/, "Mật khẩu phải chứa ít nhất một ký tự đặc biệt"),
  })
  .refine(
    (data) => {
      if (!data.password) return true
      return data.password === data.confirmPassword
    },
    {
      message: "Mật khẩu xác nhận không khớp với mật khẩu mới",
      path: ["confirmPassword"],
    }
  )

export type OtpForm = zod.infer<typeof OtpSchema>
