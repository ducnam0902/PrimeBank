import { Button } from "@/components/ui/button"
import { routes } from "@/routes/router"

import CardShell from "@/components/CardShell"
import { useNavigate } from "react-router"

import { Field, FieldError, FieldLabel } from "@/components/ui/field"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { type OtpForm, OtpSchema } from "@/schemas/resetPassword.schema"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import PasswordInput from "@/components/PasswordInput"
import CountdownTimer from "@/components/CountdownTimer"
import { useMutation } from "@tanstack/react-query"
import { resetPassword } from "@/services/auth/api/auth.api"
import { toast } from "sonner"

const ResetPassword = () => {
  const navigate = useNavigate()
  const otpForm = useForm<OtpForm>({
    resolver: zodResolver(OtpSchema),
    defaultValues: {
      otp: "",
      password: "",
      confirmPassword: "",
    },
  })

  const resetPasswordMutation = useMutation({
    mutationFn: resetPassword,
    onSuccess: () => {
      toast.success("Thay đổi mật khẩu thành công!");
      navigate(routes.login)
    },
    onError: (error) => {
       toast.error("Có lỗi trong quá trình xử lý. Vui lòng thử lại sau!")
      console.log(error)
    },
  })

  const onOtpSubmit = (data: OtpForm) => {
    resetPasswordMutation.mutate(data)
  }

  const handleResendOtp = () => {
    console.log("Resend OTP triggered", otpForm.getValues("otp"))
  }

  return (
    <div>
      <CardShell title="Cập nhật mật khẩu mới">
        <form onSubmit={otpForm.handleSubmit(onOtpSubmit)} className="w-full">
          <Controller
            name="otp"
            control={otpForm.control}
            render={({ field, fieldState }) => {
              return (
                <Field className="mt-3" data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor="otp"
                    className="mt-4"
                    data-invalid={fieldState.invalid}
                  >
                    Mã OTP
                  </FieldLabel>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} className="h-13 w-13" />
                      <InputOTPSlot index={1} className="h-13 w-13" />
                      <InputOTPSlot index={2} className="h-13 w-13" />
                      <InputOTPSlot index={3} className="h-13 w-13" />
                      <InputOTPSlot index={4} className="h-13 w-13" />
                      <InputOTPSlot index={5} className="h-13 w-13" />
                    </InputOTPGroup>
                  </InputOTP>
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
            control={otpForm.control}
            render={({ field, fieldState }) => {
              return (
                <Field className="mb-3" data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor="password"
                    data-invalid={fieldState.invalid}
                  >
                    Mật khẩu mới
                  </FieldLabel>
                  <PasswordInput
                    id="password"
                    placeholder="Nhập mật khẩu mới"
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
          <Controller
            name="confirmPassword"
            control={otpForm.control}
            render={({ field, fieldState }) => {
              return (
                <Field className="mb-3" data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor="confirmPassword"
                    data-invalid={fieldState.invalid}
                  >
                    Xác nhận mật khẩu
                  </FieldLabel>
                  <PasswordInput
                    id="confirmPassword"
                    placeholder="Nhập lại mật khẩu"
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

          <p className="mb-3 text-center text-sm text-muted-foreground">
            Gửi lại mã sau <CountdownTimer callback={handleResendOtp} />
          </p>
          <Button className="w-full rounded-2xl py-5 text-sm" type="submit" disabled={resetPasswordMutation.isPending}>
            Xác nhận
          </Button>
        </form>
      </CardShell>
    </div>
  )
}

export default ResetPassword
