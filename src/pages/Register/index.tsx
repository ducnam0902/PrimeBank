import CardShell from '@/components/CardShell'
import React from 'react'

const RegisterPage = () => {
  return (
    <div>
      <CardShell title="Đăng ký">
        <label className="mb-3 block">
          <span className="text-xs font-medium text-foreground/80">Email</span>
          <div className="relative mt-1.5">
            <input
              type={"email"}
              placeholder={"Nhập email"}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-transparent focus:ring-2 focus:ring-ring"
            />
          </div>
        </label>
      </CardShell>
    </div>
  )
}

export default RegisterPage