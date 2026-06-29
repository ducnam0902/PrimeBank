import zod from "zod"

export const registerSchema = zod.object({
  fullName: zod.string().min(2, "Họ tên phải có ít nhất 2 ký tự"),
  email: zod.email("Vui lòng nhập email hợp lệ"),
  phoneNumber: zod
    .string()
    .regex(/^\d+$/, {
      message: "Phone number must contain only numbers",
    })
    .regex(/^\d{10}$/, "Số điện thoại phải có 10 chữ số"),
  password: zod
    .string()
    .min(12, "Mật khẩu phải có ít nhất 12 ký tự")
    .regex(/[A-Z]/, "Mật khẩu phải chứa ít nhất một chữ cái viết hoa")
    .regex(/[0-9]/, "Mật khẩu phải chứa ít nhất một số")
    .regex(/[^A-Za-z0-9]/, "Mật khẩu phải chứa ít nhất một ký tự đặc biệt"),
  acceptTerms: zod.boolean().refine((value) => value === true, {
    message: "Bạn phải đồng ý với điều khoản sử dụng",
  }),
})

export type RegisterForm = zod.infer<typeof registerSchema>
