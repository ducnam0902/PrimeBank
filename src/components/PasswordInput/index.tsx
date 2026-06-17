import  { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Input } from "../ui/input"
interface PasswordInputProps {
  id?: string
  placeholder?: string
}

const PasswordInput = ({ id, placeholder, ...props }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <span className="relative w-full">
      <Input
        id={id}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        {...props}
      />
      <span className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer ">
      {
        showPassword ? (
          <EyeOff className="h-4 w-4" onClick={() => setShowPassword(false)} />
        ) : (
          <Eye className="h-4 w-4" onClick={() => setShowPassword(true)} />
        )
      }
      </span>
    </span>
  )
}

export default PasswordInput
