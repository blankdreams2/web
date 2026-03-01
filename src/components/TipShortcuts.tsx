'use client'

import Kbd from '@/components/ui/Kbd'

const shortcuts = [
  { label: 'Open Quick Access', keys: ['Q'] },
  { label: 'Close Quick Access', keys: ['Esc'] },
  { label: 'Toggle Dark Mode', keys: ['D'] },
  { label: 'Toggle Focus', keys: ['F'] },
] as const

export default function TipShortcuts() {
  return (
    <div className="rounded-xl border border-border bg-muted/30 p-3">
      <p className="mb-2 text-xs font-semibold text-muted-foreground">
        TIP: Shortcuts
      </p>
      <ul className="space-y-1.5 text-xs">
        {shortcuts.map(({ label, keys }) => (
          <li key={label} className="flex items-center justify-between gap-4">
            <span>{label}</span>
            <span className="flex items-center gap-1">
              {keys.map((key) => (
                <Kbd key={key} className="text-[10px]">
                  {key}
                </Kbd>
              ))}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
