'use client'

interface ActivityProps {
  onItemClick?: () => void
}

export default function Activity({ onItemClick }: ActivityProps) {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Recent Activities
      </h3>
      <p className="text-sm text-muted-foreground">Nothing new at the moment.</p>
    </div>
  )
}
