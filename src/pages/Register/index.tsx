import CardShell from "@/components/CardShell"
import PasswordInput from "@/components/PasswordInput"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { routes } from "@/routes/router"
import { registerSchema, type RegisterForm } from "@/schemas/register.schema"
import { register } from "@/services/auth/api/auth.api"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { Controller, useForm } from "react-hook-form"
import { useNavigate } from "react-router"

const RegisterPage = () => {
  const navigate = useNavigate()
  const form = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      acceptTerms: false,
    },
  })

  const registerMutation = useMutation({
    mutationFn: register,
    onSuccess: () => {
      navigate(routes.login)
    },
    onError: (error) => {
      console.log(error)
    },
  })

  const onSubmit = (data: RegisterForm) => {
    registerMutation.mutateAsync(data)
  }

  return (
    <div>
      <CardShell title="Đăng ký">
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <Controller
            name="fullName"
            control={form.control}
            render={({ field, fieldState }) => {
              return (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor="fullName"
                    data-invalid={fieldState.invalid}
                  >
                    Họ và tên
                  </FieldLabel>
                  <Input
                    id="fullName"
                    placeholder="Nhập họ và tên"
                    {...field}
                  />
                  <span className="mb-1 h-4">
                    <FieldError data-invalid={fieldState.invalid}>
                      {fieldState.error?.message ?? ""}
                    </FieldError>
                  </span>
                </Field>
              )
            }}
          />
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => {
              return (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="email" data-invalid={fieldState.invalid}>
                    Email
                  </FieldLabel>
                  <Input id="email" placeholder="Nhập email" {...field} />
                  <span className="mb-1 h-4">
                    <FieldError data-invalid={fieldState.invalid}>
                      {fieldState.error?.message ?? ""}
                    </FieldError>
                  </span>
                </Field>
              )
            }}
          />
          <Controller
            name="phoneNumber"
            control={form.control}
            render={({ field, fieldState }) => {
              return (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor="phoneNumber"
                    data-invalid={fieldState.invalid}
                  >
                    Số điện thoại
                  </FieldLabel>
                  <Input
                    id="phoneNumber"
                    placeholder="Nhập số điện thoại"
                    {...field}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "")
                      field.onChange(value)
                    }}
                  />
                  <span className="mb-1 h-4">
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
                <Field data-invalid={fieldState.invalid}>
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
                  <span className="mb-1 h-4">
                    <FieldError data-invalid={fieldState.invalid}>
                      {fieldState.error?.message ?? ""}
                    </FieldError>
                  </span>
                </Field>
              )
            }}
          />

          <Controller
            name="acceptTerms"
            control={form.control}
            render={({ field, fieldState }) => {
              return (
                <div>
                  <Field
                    orientation="horizontal"
                    data-invalid={fieldState.invalid}
                  >
                    <Checkbox
                      id="acceptTerms"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <FieldLabel htmlFor="acceptTerms">
                      Tôi đồng ý với điều khoản sử dụng
                    </FieldLabel>
                  </Field>
                  <div className="mb-4 h-4">
                    <FieldError data-invalid={fieldState.invalid}>
                      {fieldState.error?.message ?? ""}
                    </FieldError>
                  </div>
                </div>
              )
            }}
          />

          <Button className="w-full rounded-2xl py-5 text-sm" type="submit">
            Đăng ký
          </Button>
        </form>
        <div className="mt-auto pt-5 text-center text-sm text-muted-foreground">
          Đã có tài khoản?{"  "}
          <button
            onClick={() => navigate(routes.login)}
            className="font-medium text-primary hover:underline"
          >
            Đăng nhập
          </button>
        </div>
      </CardShell>
    </div>
  )
}

export default RegisterPage
