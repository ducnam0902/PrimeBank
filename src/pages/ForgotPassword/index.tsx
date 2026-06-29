import { Button } from "@/components/ui/button"
import { routes } from "@/routes/router"

import CardShell from "@/components/CardShell"
import { useNavigate } from "react-router"

import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { loginSchema } from "@/schemas/login.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import zod from "zod"

const ForgotPasswordSchema = loginSchema.pick({ email: true })
type ForgotPasswordForm = zod.infer<typeof ForgotPasswordSchema>

const ForgotPasswordPage = () => {
  const navigate = useNavigate()
  const form = useForm<ForgotPasswordForm>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = (data: ForgotPasswordForm) => {
    console.log(data)
    navigate(routes.resetPassword, { replace: true })
  }

  return (
    <div>
      <CardShell title="Quên mật khẩu">
        <h4 className="pb-4 text-center text-sm font-medium">
          Nhập email của bạn để nhận mã OTP
        </h4>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => {
              return (
                <Field className="mb-3" data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="email" data-invalid={fieldState.invalid}>
                    Email
                  </FieldLabel>
                  <Input id="email" placeholder="Nhập email" {...field} />
                  <span className="h-4">
                    <FieldError data-invalid={fieldState.invalid}>
                      {fieldState.error?.message ?? ""}
                    </FieldError>
                  </span>
                </Field>
              )
            }}
          />
          <Button className="w-full rounded-2xl py-5 text-sm" type="submit">
            Gửi mã OTP
          </Button>
        </form>

        <button
          onClick={() => navigate(routes.login)}
          className="mt-3 text-sm text-primary hover:underline"
        >
          Quay lại đăng nhập
        </button>
      </CardShell>
    </div>
  )
}

export default ForgotPasswordPage
