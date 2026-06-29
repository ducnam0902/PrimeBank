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

export default mockDelay
