import React from 'react'
import PrimeLogo from "@/assets/primeLogo.png"
function CardShell({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col rounded-xl border border-border bg-card p-8 shadow-sm min-w-sm">
      <img src={PrimeLogo} alt="PrimeBank" className="mx-auto mb-4 h-12 " />
      <h2 className="mb-5 text-center text-2xl font-semibold text-foreground">
        {title}
      </h2>
      {children}
    </div>
  )
}

export default CardShell