import React, { useEffect, useState } from "react"
import { Button } from "../ui/button"

type CountdownTimerProps = {
  initialTime?: number // in seconds
  callback?: () => void
}

const CountdownTimer = ({ initialTime = 59, callback }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(initialTime)

  useEffect(() => {
    let intervalId = null

    if (timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
    }

    // Clean up the interval
    return () => {
      if (intervalId) clearInterval(intervalId)
    }
  }, [timeLeft])

  const handleResend = () => {
    setTimeLeft(initialTime)
    if (callback) callback()
  }

  return (
    <>
      <span>
        {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
      </span>
      <div>
        {timeLeft === 0 && (
          <Button className=" mt-4 w-full rounded-2xl py-5 text-sm bg-transparent border border-primary" 
            onClick={handleResend}
          >
            Gửi lại mã
          </Button>
        )}
      </div>
    </>
  )
}

export default CountdownTimer
