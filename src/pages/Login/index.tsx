import { Button } from "@/components/ui/button"
import { routes } from "@/routes/router"

import CardShell from "@/components/CardShell"
import { useNavigate } from "react-router"

import PasswordInput from "@/components/PasswordInput"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { loginSchema, type LoginForm } from "@/schemas/login.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"

const LoginPage = () => {
  const navigate = useNavigate()
  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSwitch = (type: "forgot" | "register") => {
    if (type === "forgot") {
      navigate(routes.forgotPassword)
    } else {
      navigate(routes.register)
    }
  }

  const onSubmit = (data: LoginForm) => {
    console.log(data)
    navigate(routes.dashboard);
  }

  return (
    <div>
      <CardShell title="Đăng nhập">
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
          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => {
              return (
                <Field className="mb-3" data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor="password"
                    data-invalid={fieldState.invalid}
                  >
                    Mật khẩu
                  </FieldLabel>
                  <PasswordInput
                    id="password"
                    placeholder="Nhập mật khẩu"
                    {...field}
                  />
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
            Đăng nhập
          </Button>
        </form>

        <button
          onClick={() => onSwitch("forgot")}
          className="mt-3 text-sm text-primary hover:underline"
        >
          Quên mật khẩu?
        </button>
        <div className="mt-auto pt-5 text-center text-sm text-muted-foreground">
          Chưa có tài khoản?{" "}
          <button
            onClick={() => onSwitch("register")}
            className="font-medium text-primary hover:underline"
          >
            Đăng ký ngay
          </button>
        </div>
      </CardShell>
    </div>
  )
}

export default LoginPage
