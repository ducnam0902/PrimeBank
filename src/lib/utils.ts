import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function mockDelay(timout: number = 1000): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, timout)
  })
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(value)
}

export const formatGrowth = (value: number, fractionDigits = 1) => {
  return `${value.toFixed(fractionDigits)}%`
}

export default mockDelay
