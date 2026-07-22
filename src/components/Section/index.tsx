export function Section({
  title,
  action,
  children,
}: {
  title: string
  action?: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold">{title}</h3>
        {action && (
          <button className="text-xs text-primary hover:underline">
            {action}
          </button>
        )}
      </div>
      {children}
    </div>
  )
}

export default Section;